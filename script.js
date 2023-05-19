function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imag')
var data = new Date()
//var hora = data.getHours()
var hora = 11
msg.innerHTML = ` Agora São ${hora} horas. `

if (hora > 0 && hora < 12) {
    //BOM DIA 
    document.body.style.background = '#f3cb65';
    img.src = 'imagens/dia.jpg'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    imag.style.width = '200px';
    imag.style.height = '200px';
    img.src= 'imagens/tarde.jpg'
} else {
    //BOA NOITE
    img.src= 'imagens/noite.jpg'
}



}