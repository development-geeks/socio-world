// server.js
require('dotenv').config({ path: '../.env' }); 

const app = require('./app');
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
