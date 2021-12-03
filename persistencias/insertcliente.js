const models = require("../models");
const usr = models.Cliente;

const insertacli = async(id, nom, ape, dni, img, corr, cont, telf, dir, pep, est ) => {
    console.log("==> Inicio de insert")

    return usr.create({
            id: id,
            nombre: nom,
            apellidos: ape,
            dni: dni,
            imagenurl: img,
            correo: corr,
            contrasena: cont,
            telefono: telf,
            direccion: dir,
            pep: pep,
            estado: est,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = insertacli