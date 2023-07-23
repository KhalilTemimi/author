const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');

require('./routes/author.routes')(app);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));