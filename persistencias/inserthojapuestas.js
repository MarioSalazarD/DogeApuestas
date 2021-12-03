const models = require("../models");
const usr = models.Hojapuesta;

const insertah = async(id, mont, gan, gana) => {
    console.log("==> Inicio de insert")

    return usr.create({
            id: id,
            monto: mont,
            ganancia: gan,
            ganador: gana,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = insertah