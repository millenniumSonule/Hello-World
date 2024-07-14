const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

//Routes
app.get("/users/api", (req, res) => {
  res.json(users);
});

app.get('/users', (req, res) => {
  const html = `<ul> ${users.map((users) => `<li>${users.first_name}</li>`).join} </ul>`;
  res.send(html);
});

app.get('/users/api/:id', (req,res) => {  // here : is used to indicate dynamic value 
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  res.json(user);
});

app.post('/users/api', (req, res) => {
  return res.json({ status: "pending" });
});


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));