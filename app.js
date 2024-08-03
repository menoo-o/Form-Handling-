import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Get the filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware to parse URL-encoded data from the form
app.use(express.urlencoded({ extended: false }));

// Handle form submission
app.post('/submit', (req, res) => {
    const { name } = req.body;
    console.log('Received name:', name);
    res.send(`Thank you for submitting, ${name}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
