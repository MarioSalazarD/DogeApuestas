const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Banner;

const actualizab = async(id, nom, img, url, est) => {
    console.log("==> INicio de update")

    return usr.update({
            nombre: nom,
            imagenurl: img,
            url: url,
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

module.exports = actualizab