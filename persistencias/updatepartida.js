const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Partida;

const actualizap = async (id, fec, hora,dur,equA,equB,facA,facB,selec) => {
    console.log("==> INicio de update")

    return usr.update(
        {
            fecha: fec,
            hora: hora,
            duracion: dur,
            equipoA: equA,
            equipoB: equB,
            factorA: facA,
            factorB: facB,
            selector: selec,
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
 
module.exports = actualizap