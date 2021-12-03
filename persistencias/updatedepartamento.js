const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Departamento;

const actualizadep = async(id, nom) => {
    console.log("==> INicio de update")

    return usr.update({
            nombre: nom

        }, {
            where: {
                codigo: id
            }
        })
        .then((resultado) => {
            console.log("Registro actualizado")
            console.log(resultado)
        })

    console.log("==> Fin de update")
}

module.exports = actualizadep