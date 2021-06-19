const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

//CA VOY CREANDO LOS DISTINTOS ELEMENTOS QUE VOY A IR UTILIZANDO
const first = document.getElementById('first')
const header = document.createElement("header");
const letra = document.createElement("h1");
//PARA CREAR UN TEXTO DENTRO DE EZA PARTE LO HAGO DESDE AQUI TMB Y NO DESDE HTML
letra.textContent = "ROBOTS FRIENDS"

//CREO LA BARRA DESDE ACA Y NO EN EL HTML
const searchBar = document.createElement("input");
searchBar.setAttribute('onkeyup', 'search()')
searchBar.setAttribute('placeholder', 'Search your robot...')

//CREO DIV DESDE AQUI TAMBIEN, DONDE IRAN LAS IMAGENES
const div1 = document.createElement("div");
div1.setAttribute('id', 'grid')

//ACA LOS ADJUNTO AL HTML POR ESO LOS APPEND...
first.appendChild(header);
header.appendChild(searchBar);
first.appendChild(div1);
first.appendChild(grid);
//DESDE ACA ADJUNTO AL HEADER EL NOMBRE O LOGO QUE QUIERA
header.appendChild(letra);
//ACA COMIENZO A COLOCAR LAS IMAGENES EN EL DIV QUE CREE ANTES
for (let i=0; i< robots.length; i++){
  let card = document.createElement("div1")
  card.setAttribute("class", "card")
  card.setAttribute("id", robots[i].id)

//ACA LE COLOCO LOS NOMBRES DEL ARRAY DE ARRIBA 
  let h3 = document.createElement("h3")
  h3.textContent = robots[i].name;

//ACA ADJUNTO LAS IMAGENES 
  let image= document.createElement("img")
  image.setAttribute('src', robots[i].image)

//ACA LE AGREGO LOS MAILS 
  let card1 = document.createElement("p")
  card1.textContent = robots[i].email;

//ACA ADJUNTO A LAS CARD (QUE ES UN FORMATO DE JS) LAS DISTINTAS COSAS, NOMBRE, IMAGENES, EMAIL ETC. 
  grid.appendChild(card)
  card.appendChild(image)
  card.appendChild(h3)
  card.appendChild(card1)
}

let cards = document.querySelectorAll(".card")
//ACA ESTOY CODIFICANDO LA BARRA PARA QUE VAYA BUSCANDO POR NOMBRE
function search() {
  for (let i = 0; i < cards.length; i++){
    let filter = searchBar.value.toUpperCase();
    let h3s = document.querySelectorAll(".card h3")

    let text = h3s[i].innerText;

    if(text.toUpperCase().indexOf(filter) > -1){
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}


























