let phrases = [
  { text: 'ЮПТП инженером-сметчиком', image: 'http://ooouptp.ru/wp-content/uploads/2017/03/logo2.png' },
  { text: 'Буровик инженером-сметчиком', image: 'https://vodoponizhenie.ru/img/logo.svg' },
  { text: 'МОСГАЗ ведущим инженером', image: 'http://www.mos-gaz.ru/bitrix/templates/mosgaz3/img/mosgaz-logo.png' },
  { text: 'Внешстройимпорт ведущим инженером', image: 'http://ao-vsi.com/wp-content/uploads/2017/10/head_fon.jpg' },

];

index_ = -1



function getElement() {
  index_++
  if (index_ == 4) {
    index_ = 0
  }
  document.querySelector('.button').innerText = 'А еще где?'
  return phrases[index_]
  
}


let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  // let randomElement = getRandomElement(phrases);
  let randomElement = getElement()
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

 
});

let phrases2 = [
  { text: 'Английский',  },
  { text: 'Autocad',  },
  { text: 'MS office',  },
  { text: 'Водительские права категории В', },

];

index_ = -1



function getElement2() {
  index_++
  if (index_ == 4) {
    index_ = 0
  }
  document.querySelector('.button2').innerText = 'А еще что могу?'
  return phrases2[index_]
  
}


let button2 = document.querySelector('.button2');
let phrase2 = document.querySelector('.phrase2');
let advice2 = document.querySelector('.advice2');


button2.addEventListener('click', function () {
  // let randomElement = getRandomElement(phrases);
  let randomElement = getElement2()
  smoothly(phrase2, 'textContent', randomElement.text)
  

 
});