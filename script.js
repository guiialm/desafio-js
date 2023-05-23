function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imag')
var data = new Date()
var hora = data.getHours()
//var hora = 14
msg.innerHTML = ` Agora São ${hora} horas. `

if (hora > 0 && hora < 12) {
    //BOM DIA 
    img.src = 'imagens/dia.jpg'
    document.body.style.background = 'rgb(133, 218, 242)'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE 
    img.src= 'imagens/otatarde.jpg'
    document.body.style.background = "#FEB30D"
    img.style.height = '300px';
    img.style.marginLeft = '-120px';

} else {
    //BOA NOITE
    img.src= 'imagens/noite.jpg'
    document.body.style.background = '#756B85'
}



}