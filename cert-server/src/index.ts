import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono<{ Bindings: Env }>()

// Enable CORS
app.use('/*', cors())

app.get('/', (c) => {
  return c.text('Certificate API Server')
})

app.get('/api/certificate/:id', async (c) => {
  const id = c.req.param('id')
  
  try {
    const result = await c.env.DB
      .prepare(`
        SELECT * FROM certificates 
        WHERE id = ? OR LOWER(name) LIKE LOWER(?)
      `)
      .bind(id, `%${id}%`)
      .first<Certificate>();
    
    if (!result) {
      return c.json({ error: 'Certificate not found' }, 404)
    }

    return c.json(result)
  } catch (error) {
    return c.json({ error: 'Failed to fetch certificate' }, 500)
  }
})

app.get('/api/search', async (c) => {
  const query = c.req.query('q');
  
  if (!query) {
    return c.json({ error: 'Search query is required' }, 400);
  }

  try {
    const results = await c.env.DB
      .prepare(`
        SELECT * FROM certificates 
        WHERE id LIKE ? 
        OR LOWER(name) LIKE LOWER(?) 
        OR LOWER(register_no) LIKE LOWER(?)
        LIMIT 10
      `)
      .bind(`%${query}%`, `%${query}%`, `%${query}%`)
      .all<Certificate>();
    
    return c.json(results);
  } catch (error) {
    return c.json({ error: 'Failed to search certificates' }, 500);
  }
});

app.post('/api/certificates/init', async (c) => {
  const certificates = [
    {
      id: 'CERT-001',
      name: 'John Doe',
      institution: 'VIT-AP University',
      issueDate: '2025-02-22',
    },
    {
      id: 'CERT-002',
      name: 'Jane Smith',
      institution: 'VIT-AP University',
      issueDate: '2025-02-22',
    },
    {
      id: 'CERT-003',
      name: 'Alice Johnson',
      institution: 'VIT-AP University',
      issueDate: '2025-02-22',
    },
  ];

  try {
    const stmt = c.env.DB.prepare(
      'INSERT INTO certificates (id, name, institution, issueDate) VALUES (?, ?, ?, ?)'
    );
    
    await c.env.DB.batch(
      certificates.map(cert => 
        stmt.bind(cert.id, cert.name, cert.institution, cert.issueDate)
      )
    );

    return c.json({ message: 'Certificates initialized successfully' });
  } catch (error) {
    return c.json({ error: 'Failed to initialize certificates' }, 500);
  }
});

app.post('/api/certificates/init-from-csv', async (c) => {
  try {
    const body = await c.req.json();
    const csvData = body.data;
    
    if (!Array.isArray(csvData)) {
      return c.json({ error: 'Invalid CSV data format' }, 400);
    }

    const stmt = c.env.DB.prepare(`
      INSERT INTO certificates (id, register_no, name, institution, issueDate) 
      VALUES (?, ?, ?, ?, ?)
    `);

    const issueDate = '2025-02-22'; // You can modify this as needed
    
    const batchStatements = csvData
      .filter(row => row['Cert ID'] && row['Name']) // Skip empty rows
      .map(row => 
        stmt.bind(
          row['Cert ID'],
          row['Register No'],
          row['Name'],
          row['University'],
          issueDate
        )
      );

    if (batchStatements.length > 0) {
      await c.env.DB.batch(batchStatements);
    }

    return c.json({ 
      message: `Successfully initialized ${batchStatements.length} certificates` 
    });
  } catch (error) {
    console.error('Error initializing certificates:', error);
    return c.json({ error: 'Failed to initialize certificates' }, 500);
  }
});

// Helper function to parse CSV content
function parseCSV(content: string) {
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',').map(v => v.trim());
      return headers.reduce((obj: any, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
}

// Modify the CSV initialization endpoint to handle file upload
app.post('/api/certificates/init-csv', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return c.json({ error: 'No CSV file provided' }, 400);
    }

    const csvContent = await file.text();
    const csvData = parseCSV(csvContent);

    const stmt = c.env.DB.prepare(`
      INSERT OR REPLACE INTO certificates (id, register_no, name, institution, issueDate) 
      VALUES (?, ?, ?, ?, ?)
    `);

    const issueDate = '2025-02-22';
    
    const batchStatements = csvData
      .filter(row => row['Cert ID'] && row['Name'])
      .map(row => 
        stmt.bind(
          row['Cert ID'],
          row['Register No'],
          row['Name'],
          row['University'] || 'VIT-AP University',
          issueDate
        )
      );

    if (batchStatements.length === 0) {
      return c.json({ error: 'No valid certificates found in CSV' }, 400);
    }

    await c.env.DB.batch(batchStatements);

    return c.json({ 
      message: `Successfully initialized ${batchStatements.length} certificates`,
      processed: batchStatements.length,
      total: csvData.length
    });

  } catch (error) {
    console.error('Error processing CSV:', error);
    return c.json({ 
      error: 'Failed to process CSV file',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

app.get('/api/certificates', async (c) => {
  try {
    const certificates = await c.env.DB
      .prepare('SELECT * FROM certificates')
      .all<Certificate>();
    
    return c.json(certificates.results);
  } catch (error) {
    return c.json({ error: 'Failed to fetch certificates' }, 500);
  }
});

export default app
