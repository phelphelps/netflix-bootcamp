let filmes = [
  {
    img: 'img/mini1.jpg',
    titulo: 'Poster de Aves de rapina'
  },  {
    img: 'img/mini2.jpg',
    titulo: 'Poster de Fate a saga winx'
  }, {
    img: 'img/mini3.jpg',
    titulo: 'Poster de Tenet'
  }, {
    img: 'img/mini4.jpg',
    titulo: 'Poster de Coringa'
  }, {
    img: 'img/mini5.jpg',
    titulo: 'Poster de The good doctor'
  }, {
    img: 'img/mini6.jpg',
    titulo: 'Poster de Wandavision'
  }, {
    img: 'img/mini7.jpg',
    titulo: 'Poster de O expresso do amanhã'
  }, {
    img: 'img/mini8.jpg',
    titulo: 'Poster de Abaixo de zero'
  }, {
    img: 'img/mini9.jpg',
    titulo: 'Poster de Host'
  }, {
    img: 'img/mini10.jpg',
    titulo: 'Poster de Soul'
  }
]

let trendingCarousel = document.getElementById('trending');
filmes.forEach(filme => {
  trendingCarousel.innerHTML += `<div class="item">
                                    <img class="box-filme" src="${filme.img}" alt="${filme.titulo}">
                                  </div> `
});