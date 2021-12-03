const models = require("../models");
const usr = models.CategoriaJuego;

const insertacat = async(id, nom) => {
    console.log("==> Inicio de insert")

    return usr.create({
            id: id,
            nombre: nom,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = insertacat