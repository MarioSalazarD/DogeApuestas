const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Hojapuestas;

const actualizah = async(id, mont, gan, gana) => {
    console.log("==> INicio de update")

    return usr.update({
            monto: mont,
            ganancia: gan,
            ganador: gana
        }, {
            where: {
                id: id
            }
        })
        .then((resultado) => {
            console.log("Registro actualizado")
            console.log(resultado)
        })

    console.log("==> Fin de update")
}

module.exports = actualizah