const d = document;
const textArea = d.querySelector(".from__input");
const imagenPersona = d.querySelector(".result__img");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarMensaje(mensaje){
    let mensaEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++){
            if (letra===llaves[j][0]){
                encriptada = llaves[j][1]; //remplaza la letra por la correspondiente encriptada
                break;
            }
            mensaEncriptado += encriptada;
        }
        return mensaEncriptado
    }
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = "mensaje";
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e) => {
        console.log(e.target.value);
        imagenPersona.style.display = "none";
        loaderBatman.classList.remove("hidden");
       
       resultadoTitulo.textContent = "Capturando Mensaje.";
       resultadoText.textContent = "";

    }) 