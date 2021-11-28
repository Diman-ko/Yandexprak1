let phrases = [
    { text: 'Приготовить покушать детям', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'Приготовить покушать Диме', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'заняться с Димой Ex Om', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'Почесать Диме спинку', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'Сбегать в Евроопт за вкусняшками', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'Помыть помыться', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'заняться с Димой Ex Om', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'Почесать Диме спинку', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'Приготовить покушать Детям и Диме', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'Поучить Польский', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' } 
    
    ];
    
    function getRandomElement(arr) {
      let randIndex = Math.floor(Math.random() * arr.length);
      return arr[randIndex];
    }
    
    let button = document.querySelector('.button');
    let phrase = document.querySelector('.phrase');
    let advice = document.querySelector('.advice');
    let image = document.querySelector('.image');
    
    button.addEventListener('click', function () {
      let randomElement = getRandomElement(phrases);
      phrase.textContent = randomElement.text;
      image.src = randomElement.image;
    
      if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
      } else {
        advice.style.fontSize = '42px';
      }
    });
    