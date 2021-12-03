const models = require("../models");
const usr = models.Partida;

const insertap = async(id, fec, hora,dur,equA,equB,facA,facB,selec,jid) => {
    console.log("==> Inicio de insert")

    return usr.create({
            id: id,
            fecha: fec,
            hora: hora,
            duracion: dur,
            equipoA: equA,
            equipoB: equB,
            factorA: facA,
            factorB: facB,
<<<<<<< Updated upstream
            selector: selec,
            juegoId: jid

=======
            selector: selec
>>>>>>> Stashed changes
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = insertap