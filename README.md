A Public API using Node.js and Express to Retrieve Basic Information such as:
-Email
-Current Datetime
-The Github URL

**Setup instructions**
Run the following command to start the server:
*node server.js*

You should see the following message in your terminal:
*Server running on port 3000*

You can test the API Using a Browser; Open your browser and navigate to:
*http://localhost:3000/api/info*

**key features:**
-CORS enabled for cross-origin requests
-JSON response formatting
-Error handling middleware
-404 endpoint handling
-Dynamic timestamp generation
-Environment-based port configuration

**Endpoint:** GET *http://localhost:3000/api/info*
The response is returned in JSON format with the following structure:
*{
  "success": true,
  "data": {
    "email": "example@gmail.com",
    "current_datetime": new Date().toISOString(),
    "github_url": "https://github.com/NoobMaester/myAPI/"
  }
}*

**example usage with javascript**
*fetch('http://localhost:3000/api/info')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));*

**backlink**
*https://hng.tech/hire/nodejs-developers*
