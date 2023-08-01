const express = require('express');
const app = express();

// Define a route to handle all incoming HTTP requests with any path ('/*')
app.get("/*", (req, res) => {
    res.send(" Hello World ");
  })
  
// Start the server and listen on port 3000
app.listen(3000, () => console.log(`Server started on port ${3000}`));





