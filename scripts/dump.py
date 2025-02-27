import requests
import json
import pandas as pd

# Function to upload data to Cloudflare KV
def upload_to_cloudflare_kv(csv_filepath):
    # Cloudflare API configuration
    # You'll need to replace these with your actual credentials
    account_id = "your_account_id"
    namespace_id = "your_namespace_id"
    api_token = "your_api_token"
    
    # Read CSV file
    try:
        df = pd.read_csv(csv_filepath)
        print(f"Successfully read CSV file: {csv_filepath}")
    except Exception as e:
        print(f"Error reading CSV file: {e}")
        return
    
    # Store data with Cert ID as key
    kv_data = {}
    cert_id_column = "Cert ID"  # Adjust if your column name is different
    
    for _, row in df.iterrows():
        cert_id = row[cert_id_column]
        # Create a dictionary of all other columns as values
        value_dict = row.drop(cert_id_column).to_dict()
        kv_data[cert_id] = value_dict
    
    # Base URL for Cloudflare API
    base_url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values"
    
    # Upload each key-value pair to Cloudflare KV
    success_count = 0
    failure_count = 0
    
    for cert_id, value in kv_data.items():
        url = f"{base_url}/{cert_id}"
        headers = {
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.put(url, headers=headers, data=json.dumps(value))
            
            if response.status_code == 200:
                print(f"Successfully uploaded Cert ID: {cert_id}")
                success_count += 1
            else:
                print(f"Failed to upload Cert ID: {cert_id}. Error: {response.text}")
                failure_count += 1
        except Exception as e:
            print(f"Exception while uploading Cert ID: {cert_id}. Error: {e}")
            failure_count += 1
    
    print(f"Upload process completed. Success: {success_count}, Failures: {failure_count}")

# Example usage
if __name__ == "__main__":
    csv_filepath = "certificates.csv"  # Replace with your actual CSV file path
    upload_to_cloudflare_kv(csv_filepath)