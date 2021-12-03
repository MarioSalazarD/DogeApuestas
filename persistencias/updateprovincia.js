const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Provincia;

const actualizapr = async (id, nom) => {
    console.log("==> INicio de update")

    return usr.update(
        {
            nombre : nom
        },
        {
            where : {
                id: id
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro actualizado")
        console.log(resultado)
    })

    console.log("==> Fin de update")
}
 
module.exports = actualizapr