let musica = document.querySelector('audio')
let musicas = []
musica.addEventListener('timeupdate', Probarra)

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
function Probarra(){
    let barra = document.getElementById('barra_html')
    let progressaoBarra  = Math.floor((musica.currentTime/musica.duration)*100) +"%"
    barra.style.width = progressaoBarra
}
