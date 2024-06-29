const express = require('express');
const app = express();
app.use(express.json());

let incidents = [];

app.get('/incidents', (req, res) => {
  res.json(incidents);
});

app.post('/incidents', (req, res) => {
  const incident = req.body;
  incident.id = incidents.length + 1;
  incidents.push(incident);
  res.status(201).json(incident);
});

app.get('/incidents/:id', (req, res) => {
  const incident = incidents.find(i => i.id == req.params.id);
  if (incident) {
    res.json(incident);
  } else {
    res.status(404).send('Incident not found');
  }
});

module.exports = app;

