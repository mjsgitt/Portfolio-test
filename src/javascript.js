const APIimage = document.getElementById('API-image');
const APIbtn = document.getElementById('API-btn');
const frm = document.querySelector('#frm');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === ''){
        // setTimeout(msg.innerHTML = '',3000);
  }
  else{
    msg.innerHTML = `<p class="Approved"> Successfully Submitted </p>`;
    setTimeout( () => {
      msg.innerHTML = '';
    }, 2000);
  }
})

APIbtn.addEventListener('click',(e) => {
    e.preventDefault();
    fetch('https://picsum.photos/200')
    .then(data => {
        console.log(data);
      APIimage.src=data.url
  })
})