let musicas = [
    {
        nome: 'Dire Straits Sultans Of Swin',//
        imagem: 'https://m.media-amazon.com/images/I/6129HZR+QoL._AC_SY355_.jpg',
        artista: 'Dire Strats',
        LocalMusica: 'Musics/Dire Straits   Sultans Of Swin.mp3'
    },
    {
        nome: 'You give love a bad name',//
        imagem: 'https://i.scdn.co/image/ab6761610000e5eb0b8d424042d51bb8ee412ffe',
        artista: 'Bon Jovi',
        LocalMusica: 'Musics/You give love a bad name - Bon Jovi.mp3'
    },
    {
        nome: 'Have you ever seen in the rain',//
        imagem: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/3/c/c/2/39391552064273.jpg',
        artista: 'Creedence Clearwater Revival',
        LocalMusica: 'Musics/Have You Ever Seen The Rain - Creedence Clearwater Revival.mp3'
    },
    {
        nome: 'My way',//
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/a7/2018/01/17/o-cantor-frank-sinatra-1516217743700_v2_450x337.jpg',
        artista: 'Frank Sinatra',
        LocalMusica:'Musics/My Way (2008 Remastered.mp3'
    },
    {
        nome: 'I Wanna Rock and Roll',//
        imagem: 'https://fenixtickethotel.com.br/wp-content/uploads/2020/08/kiss-endoftheroad-tour-300x300.jpg',
        artista: 'Kiss',
        LocalMusica:'Musics/Kiss   Rock And Roll All Nite (From Kiss eXposed.mp3'
    },
    {
        nome: 'Jailhose Rock',
        imagem: 'https://lastfm.freetls.fastly.net/i/u/770x0/154099fa6f794bdf8f039e528250cfa7.jpg',
        artista: 'Elvis Presley',
        LocalMusica:'Musics/Elvis Presley   Jailhouse Rock (Music Video.mp3'
    },
    {
        nome: "Who's Lovin' You",
        imagem: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/7/4/b/a/74ba0a2ca596fd8be21c0d7889dc9a6b.jpg',
        artista: 'The Jacksons V',
        LocalMusica:'Musics/Whos Lovin You - The K.mp3.mp3'
    },
    {
        nome: 'Hey Jude',//
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4O2UWARgEzES4wsUG-SB3EsHJUm5G0Hw-g&usqp=CAU',
        artista: 'The Beatles',
        LocalMusica:'Musics/Hey Jude (Remastered 2015.mp3'
    },
    {
        nome: 'Somebody To Love',//
        imagem: 'https://img.discogs.com/wOBJolbtHbWp9yaBFuur0KWC8p0=/fit-in/300x300/filters:strip_icc():format(webp):mode_rgb():quality(40)/discogs-images/R-373176-1408006503-7978.jpeg.jpg',
        artista: 'Queen',
        LocalMusica:'Musics/Queen   Somebody To Love (Official Video.mp3'
    },
    {
        nome: 'We Are The Champions',//
        imagem: 'https://roquereverso.files.wordpress.com/2011/09/queen.jpg?w=300',
        artista: 'Queen',
        LocalMusica:'Musics/Queen   We Are The Champions (Official Live Video.mp3'
    },
    {
        nome: 'Paint it, Black',
        imagem: 'https://studiosol-a.akamaihd.net/tb/cifra-blog/pt/wp-content/uploads/2012/07/logo.jpg',
        artista: 'Rolling Stones',
        LocalMusica:'Musics/The Rolling Stones   Paint It, Black (Official Lyric Video.mp3'
    },
    {
        nome: 'Blitzkrieg Bop',//
        imagem: 'https://imagens.brasil.elpais.com/resizer/rePnjWn1rbZ_ZCPLPiWWojudThs=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/HLU6FKBJCLJBVFO6AUYXKFFSEU.jpg',
        artista: 'Ramones',
        LocalMusica:'Musics/Ramones   Blitzkrieg Bop (Official Music Video.mp3'
    },
    {
        nome: 'Learning To Fly',//
        imagem: 'http://1.bp.blogspot.com/-Wg6dcviHaYI/UVCMxzUQyZI/AAAAAAAAGKU/TGG2K5iZ3eI/s1600/dark-side.png',
        artista: 'Pink Floyd',
        LocalMusica:'Musics/Pink Floyd   Learning To Fly (Official Music Video HD.mp3'
    },
    {
        nome: 'Billie Jean',//
        imagem: 'https://independente.com.br/wp-content/uploads/2018/08/capa-do-album-thriller-de-michael-jackson-1502314013348_v2_300x300.jpg',
        artista: 'Michael Jackson',
        LocalMusica:'Musics/Michael Jackson   Billie Jean (Official Video.mp3'
    },
    {
        nome: 'Sweet Child Of Mine',//
        imagem: 'https://images.sk-static.com/images/media/profile_images/artists/509644/huge_avatar',
        artista: "Gun's and Roses",
        LocalMusica:'Musics/Guns.mp3'
    },
    {
        nome: 'Smells Like Teen Spirit',//
        imagem: 'https://seeklogo.com/images/N/nirvana-logo-F04BC8644A-seeklogo.com.png',
        artista: 'Nirvana',
        LocalMusica:'Musics/Nirvana   Smells Like Teen Spirit (Official Music Video.mp3'
    },
    {
        nome: 'La Isla Bonita',//
        imagem: 'https://i.pinimg.com/474x/79/a0/0f/79a00fb17aa0990597cfe8f4238ae4c7.jpg',
        artista: 'Madonna',
        LocalMusica:'Musics/Madonna - La Isla Bonita.mp3'
    },
    {
        nome: 'Soul Of Squeeze',//
        imagem: 'https://a-static.mlcdn.com.br/618x463/red-hot-chili-peppers-cd-rock-radar/multisomoficial/1099388-1099390/75c170cd4eaef0c1fea3a96bf8d007f3.jpg',
        artista: 'Red Hot Chilli Pepers',
        LocalMusica:'Musics/Red Hot Chili Peppers - Soul To Squeeze.mp3'
    },
    {
        nome: 'Waka Waka',//
        imagem: 'https://www.agesporte.com.br/wp-content/uploads/2010/06/JABULANI.jpg',
        artista: 'Shakira',
        LocalMusica:'Musics/Waka Waka - Shakira.mpeg'
    },
    {
        nome: 'Umbrella',//
        imagem: '',
        artista: 'Rihanna',
        LocalMusica:'Musics/Umbrella - Rihanna.mpeg'
    },
    
]

let indexMusica= Math.floor(Math.random()*(musicas.length)-1)
let musica = document.querySelector('audio')
musica.addEventListener('timeupdate', Probarra)
let imagem = document.getElementById('img')
let nome = document.getElementById('nomeMusica')
let artista = document.getElementById('artista')
let tocando = false
musica.addEventListener('ended',()=>{
    proxima()
})

// Funções

function atualizaMusica(index){
    musica.setAttribute('src', musicas[index].LocalMusica)    
    musica.addEventListener('loadeddata', () => { 
        nome.textContent = musicas[index].nome
        artista.textContent = musicas[index].artista
        imagem.setAttribute('src',musicas[index].imagem)
        let tempoMusica = document.getElementById('fim')
        tempoMusica.textContent = converterTempo(Math.floor(musica.duration))
    })
    tocarMusica()
}
function tocarMusica(){    
    musica.play()
    if(indexMusica >= 0){
        document.getElementById('img').style.display ='flex'
    }
    document.getElementById('btn-play').style.display = 'none'
    document.querySelector('.btn-pause').style.display = 'flex'
    document.getElementById('btn-pause').style.display = 'flex'
    document.querySelector('.btn-pause').style.width = '80px'
    document.querySelector('.btn-pause').style.height = '80px'
    document.getElementsByClassName('btn').style.display = 'block'
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
function proxima(){
    if(indexMusica < (musicas.length)-1){
        indexMusica ++
        atualizaMusica(indexMusica)
    }else{
        indexMusica = -1
    }
}
function voltar(){
    if(indexMusica > 0){
        indexMusica --
        atualizaMusica(indexMusica)
    }else{
        indexMusica = -1
    }
}