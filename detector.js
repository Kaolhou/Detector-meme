let btn2 = document.getElementById("btn2")

function changeText(){
    btn2.innerHTML = "NÃO?"
}

function restoreText(){
    btn2.innerHTML = "NÃO"
}

function trocar(){
    btn2.style.display = "none"; // Esconde o botão
    let mentira = document.getElementById('mentira')
    mentira.innerHTML = "PARE DE MENTIR!"
}


let btn1 = document.getElementById('btn1')

function janela() {
    // Abre uma nova janela
    let novaJanela = window.open("", "", "width=440, height=330");

    // Adiciona uma imagem à nova janela
    novaJanela.document.body.innerHTML = '<style>body{margin:0;}</style><img src="Porcavalo2.png" style="width:100vw;">';

    let risada = document.getElementById("risada");
    risada.play()
    novaJanela.onclose = ()=> risada.pause()
};