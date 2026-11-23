
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/about', (req, res) => {
  res.send('This is the about page. I'm a grad student at UW');
});

app.get('api/greeting', (req, res)) => {const name = req.query.name ||
'World'; res.json({greeting: 'Hello,' + name + '!'});
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: https://bilin22.github.io');
});
app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});
