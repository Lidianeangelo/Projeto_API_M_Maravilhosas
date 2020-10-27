const express = require('express');
const router = express.Router();
const cors = require("cors")
const controller = require("../controllers/maravilhosas-Controller.js")

//get /maravilhosas
router.get("/maravilhosas", cors(), controller.maravilhosasLista)

//get /maravilhosas/id
router.get("/maravilhosas/:id", cors(), controller.maravilhosasId)


//post /maravilhosas
//router.post("/maravilhosas", cors(), controller.criarMaravilhosa )

//put /maravilhosas/id

//delete /maravilhosas/id
// router.delete("/maravilhosas/:id", cors(), controller.deletarDadoMaravilhosa)

module.exports = router;