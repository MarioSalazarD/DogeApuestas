const models = require("../models");
const usr = models.Departamento;

const insertad = async(id, nom) => {
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
module.exports = insertad