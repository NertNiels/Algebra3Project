const express = require('express');
const app = express();
const port = 3000

app.use(express.static('docs'));

app.get('/print', (req, res) => {
    res.send("alsjeblieft :)");
})

app.get('/veelvlak', (req, res) => {
    res.redirect("/veelvlak.html");
});

app.listen(port, () => {
    console.log("Project Algebra 3 running on http://localhost:" + port);
});