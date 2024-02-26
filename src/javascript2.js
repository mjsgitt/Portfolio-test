
const APIabout = document.getElementById('about');
const APIquote = document.getElementById('quote');


APIabout.addEventListener('click' ,(e) => {
    e.preventDefault();
    fetch('https://animechan.xyz/api/random')
      .then(response => response.json())
      .then(quote => APIquote.innerHTML = `<p>" ${quote.quote}" Quote By : ${quote.character} </p>
      `)
  })