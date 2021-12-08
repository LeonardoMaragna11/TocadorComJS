let musica = document.querySelector('audio')
let musicas = [
    {
        nome: 'Dire Straits Sultans Of Swin',
        imagem: 'img/Dire Srait.png',
        artista: 'Dire Strats',
        LocalMusica: 'Musics/Dire Straits   Sultans Of Swin.mp3'
    },
    {
        nome: 'You give love a bad name',
        imagem: 'img/Bon Jovi.png',
        artista: 'Bon Jovi',
        LocalMusica: 'Musics/You give love a bad name - Bon Jovi.mp3'
    },
    {
        nome: 'Have you ever seen in the rain',
        imagem: 'img/Creedence Clearwater Revival.png',
        artista: 'Creedence Clearwater Revival',
        LocalMusica: 'Musics/Have You Ever Seen The Rain - Creedence Clearwater Revival.mp3'
    }
]
musica.addEventListener('timeupdate', Probarra)
let imagem = document.getElementById('img')
let nome = document.getElementById('nomeMusica')
let artista = document.getElementById('artista')

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
    let tempoAtualMusica = document.getElementById('inicio')
    tempoAtualMusica.textContent = converterTempo(Math.floor(musica.currentTime))
    let tempoMusica = document.getElementById('fim')
    tempoMusica.textContent = converterTempo(Math.floor(musica.duration))
}
function converterTempo(segundos){
    let minuto = Math.floor(segundos/60)
    let segundo = segundos%60
    if(segundo < 10){
        segundo = '0'+segundo
    }
    return (minuto+':'+segundo)
}
