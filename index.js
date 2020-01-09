const express = require('express'); 
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.json({
        name: "Sanjit Patnaik"
    });
});

app.listen(PORT);