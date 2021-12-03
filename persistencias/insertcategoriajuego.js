const models = require("../models");
const usr = models.CategoriaJuego;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            nombre: nom,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta