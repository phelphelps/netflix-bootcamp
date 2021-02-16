let filmes = [
  {
    img: 'img/mini1.jpg',
    descricaoFoto: 'Poster de Aves de rapina',
    titulo: 'Aves de rapina'
  },  {
    img: 'img/mini2.jpg',
    descricaoFoto: 'Poster de Fate a saga winx',
    titulo: 'Fate: a saga winx'
  }, {
    img: 'img/mini3.jpg',
    descricaoFoto: 'Poster de Tenet',
    titulo: 'Tenet'
  }, {
    img: 'img/mini4.jpg',
    descricaoFoto: 'Poster de Coringa',
    titulo: 'Coringa'
  }, {
    img: 'img/mini5.jpg',
    descricaoFoto: 'Poster de The good doctor',
    titulo: 'The good doctor'
  }, {
    img: 'img/mini6.jpg',
    descricaoFoto: 'Poster de Wandavision',
    titulo: 'Wandavision'
  }, {
    img: 'img/mini7.jpg',
    descricaoFoto: 'Poster de O expresso do amanhã',
    titulo: 'O expresso do amanhã'
  }, {
    img: 'img/mini8.jpg',
    descricaoFoto: 'Poster de Abaixo de zero',
    titulo: 'Abaixo de zero'
  }, {
    img: 'img/mini9.jpg',
    descricaoFoto: 'Poster de Host',
    titulo: 'Host'
  }, {
    img: 'img/mini10.jpg',
    descricaoFoto: 'Poster de Soul',
    titulo: 'Soul'
  }
]

let trendingCarousel = document.getElementById('trending');
filmes.forEach(filme => {
  trendingCarousel.innerHTML += `<div class="item">
                                    <img class="box-filme" src="${filme.img}" alt="${filme.descricaoFoto}">
                                    <div class="titulo-filme">
                                      <span>${filme.titulo}</span>
                                    </div>
                                  </div> `
});

function assistirFilme() {
  window.open('https://www.netflix.com/br/title/80217517');
}

function verDetalhes() {
  window.open('https://www.themoviedb.org/tv/110529-cidade-invisivel?language=pt-BR');
}