const models = require("../models");
const usr = models.Banner;

const insertaba = async(id, nom, img, url, est) => {
    console.log("==> Inicio de insert")

    return usr.create({
            id: id,
            nombre: nom,
            imagenurl: img,
            url: url,
            estado: est,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = insertaba