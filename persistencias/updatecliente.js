const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Cliente;

const actualizacl = async(id, nom, ape, dni, img, corr, cont, telf, dir, pep, est) => {
    console.log("==> INicio de update")

    return usr.update({
            nombre: nom,
            apellidos: ape,
            dni: dni,
            imagenurl: img,
            cooreo: corr,
            contrasena: cont,
            telefono: telf,
            direccion: dir,
            pep: pep,
            estado: est
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

module.exports = actualizacl