import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { swaggerUI } from '@hono/swagger-ui'
import { Resend } from 'resend';

const app = new Hono<{ Bindings: Env }>()
app.get('/ui', swaggerUI({ url: '/doc' }))

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




// ---------------------------------------------------


// Initialize Resend with API key from environment variable

// Add route to retrieve OpenAI key by email and send via email
app.post('/api/openai/get-key', async (c) => {
  const resend = new Resend(c.env.resend_key || 're_dRHPRZqE_6jJDX8LB5NSnxZ8ietfYQbUr');
  try {
    // Get email from request body
    const { email } = await c.req.json();
    
    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }

    // Query the database for the key
    const result = await c.env.DB
      .prepare('SELECT * FROM openai_keys WHERE email = ? AND used = 0 LIMIT 1')
      .bind(email)
      .first();
    
    if (!result) {
      return c.json({ 
        success: false, 
        message: 'No OpenAI key found for this email or you have already used your key.' 
      }, 404);
    }

    // Compose email with the key
    const { name, openai_key } = result;
    
    try {
      await resend.emails.send({
        from: 'OpenAI Key Redeem <openai@smtp.nullvijayawada.org>',
        to: [email],
        subject: 'Your OpenAI API Key for LLM Security Bootcamp',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
            <h2 style="color: #4338ca;">Your OpenAI API Key</h2>
            <p>Hello ${name},</p>
            <p>Thank you for participating in our LLM Security Bootcamp. Here is your OpenAI API key:</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; font-family: monospace; word-break: break-all;">
              ${openai_key}
            </div>
            <p><strong>Important:</strong> This key is for your use only. Do not share it with others.</p>
            <p>To use this key:</p>
            <ol>
              <li>Visit <a href="https://platform.openai.com/account/api-keys">OpenAI Dashboard</a></li>
              <li>Add this key to your account</li>
              <li>Start building with AI!</li>
            </ol>
            <p>If you have any questions, feel free to reach out to our team.</p>
            <p>Best regards,<br>LLM Security Bootcamp Team</p>
          </div>
        `
      });

      // Mark the key as used
      await c.env.DB
        .prepare('UPDATE openai_keys SET used = 1 WHERE email = ?')
        .bind(email)
        .run();

      return c.json({ 
        success: true, 
        message: 'OpenAI key has been sent to your email.' 
      });

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return c.json({ 
        success: false, 
        message: 'Failed to send the email with your key. Please contact support.' 
      }, 500);
    }

  } catch (error) {
    console.error('Error retrieving OpenAI key:', error);
    return c.json({ 
      success: false,
      message: 'An error occurred while processing your request.' 
    }, 500);
  }
});

// Fix the OpenAI CSV import endpoint
app.post('/api/openai/init-csv', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return c.json({ error: 'No CSV file provided' }, 400);
    }
    
    const csvContent = await file.text();
    const csvData = parseCSV(csvContent);
    
    const stmt = c.env.DB.prepare(`
      INSERT OR REPLACE INTO openai_keys (email, name, openai_key) 
      VALUES (?, ?, ?)
    `);
      
    const batchStatements = csvData
      .filter(row => row.email && row.name && row.openai_key)
      .map(row => 
        stmt.bind(
          row.email,
          row.name,
          row.openai_key
        )
      );
      
    if (batchStatements.length === 0) {
      return c.json({ error: 'No valid keys found in CSV' }, 400);
    }
      
    await c.env.DB.batch(batchStatements);
      
    return c.json({ 
      message: `Successfully imported ${batchStatements.length} OpenAI keys`,
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

export default app