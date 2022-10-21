const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);


const {getAdvice, deleteAdvice, createAdvice, updateAdvice} = require('./controller.js')

//endpoints
app.get('/api/advice', getAdvice)
app.delete('/api/advice/:id', deleteAdvice)
app.post('/api/advice', createAdvice)
app.put('/api/advice/:id', updateAdvice)

app.listen(4000, () => console.log("Server running on 4000"));
