const arr = [...document.querySelectorAll('.select')];
const phoneImg = document.querySelector('.phone');
const buyBtn = document.querySelector('.btn_slide');
const imgBlock = document.querySelector('.item_img_form');

arr.forEach(i => {
  i.addEventListener('click', (e) => {
    arr.forEach(i => i.classList.remove('act'));

    let target = e.target;
    let color = target.classList[1];
  
    phoneImg.innerHTML = `<img alt="${color} phone" src="img/phone_${color}.png" class="phone_img"/>`;
    imgBlock.innerHTML = `<img alt="${color} phone" src="img/phone_${color}.png"/>`;
    target.classList.add('act');
    
  });
});