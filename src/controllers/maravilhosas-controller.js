//Nomes dos métodos para implementação:
const maravilhosasDados = require("../data/data.json")
const helper = require('../helper/helper');

//console.log(maravilhosasLista)

//getMaravilhosas
const maravilhosasLista = (request, response) => {
    return response.status(200).send(maravilhosasDados)
}

//getMaravilhosaById
const maravilhosasId = (request, response) => {
    const {id} = request.params
    const maravilhosasMostrarId = maravilhosasDados.find(maravilhosa => maravilhosa.id == id)
    if (maravilhosasMostrarId) {
        return response.status(200).send(maravilhosasMostrarId)
    } else {
        return response.status(404).send("Perfil não encontrado! Insira novamente o id:")
    }
}

//addMaravilhosa 

const criarMaravilhosa = (request, response) => {
    
    const { name, photo, subtitle, about, phrase, history, addedBy } = request.body

    let novaMaravilhosa = {
        id: helper.obterNovoValor(maravilhosasDados),
        name: name,
        photo: photo,
        subtitle: subtitle,
        about: about,
        phrase: phrase,
        history: history,
        addedBy: addedBy
    }
    maravilhosasDados.push(novaMaravilhosa)
    return response.status(201).send(novaMaravilhosa)
}
 console.log(maravilhosasDados.novaMaravilhosa)

//updateMaravilhosa 

//deleteMaravilhosa
/*const deletarDadoMaravilhosa = (request, response) => {
    const {id} = request.params
    const verifica = maravilhosasDados.filter(maravilhosa => maravilhosa.id != id)
    if (verifica != id) {
        return response.status(200).send({ mensagem: "Perfil Deletado com sucesso!" })
    }else{
        return response.status(200).send({ mensagem: "Não foi possível deletar!" })  
    }
}*/

const deletarDadoMaravilhosa = (request, response) =>{
    const { id } = request.params;

    maravilhosasDados.filter(maravilhosa => maravilhosa.id != id);

     return response.status(200).send({ mensagem: "Perfil deletado com sucesso!"})
  }

module.exports = {
    maravilhosasLista,
    maravilhosasId,
    criarMaravilhosa,
    deletarDadoMaravilhosa
}