let musica = document.querySelector('audio')
let musicas = []


let tocando = false
function tocarMusica(){
    musica.play()
    tocando=true
    document.getElementById('btn-play').style.display = 'none'
    document.querySelector('.btn-pause').style.display = 'block'
    document.getElementById('btn-pause').style.display = 'block'
}
function pausar(){
    musica.pause()
    tocando = false
    document.getElementById('btn-play').style.display = 'block'
    document.querySelector('.btn-pause').style.display = 'none'
    document.getElementById('btn-pause').style.display = 'none'
}