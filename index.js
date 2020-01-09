const express = require('express'); 
const app = express();  

const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.send("Sanjit Patnaik Portfolio");
// });

app.get('/api', (req, res) => {
    res.json({
        name: "Sanjit Patnaik"
    });
});

app.listen(PORT);