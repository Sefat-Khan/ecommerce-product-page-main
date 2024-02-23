// menu start //
document.getElementById('menuBtn').addEventListener('click', function () {
  document.getElementById('overlay').classList.toggle('hidden');
  document.getElementById('menu').classList.toggle('hidden');
  document.getElementById('menu').classList.add('flex');
 
});

document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('menu').classList.toggle('hidden');
});

// menu end //

// cart box start //

const cartBtn = document.getElementById('cartBtn');
const cartDiv = document.getElementById('cartDiv');
const avatar = document.getElementById('avatar');
const indicator = document.getElementById('indicator');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const number = document.getElementById('number');
const checkoutBtn = document.getElementById('checkoutBtn');
const wrp = document.getElementById('wrp');

let amountValue = 0;

minus.addEventListener('click', () => {
   if (amountValue > 0) {
    amountValue--;
   }
   number.innerHTML = amountValue;
});

plus.addEventListener('click', () => {
    amountValue++;
   number.innerHTML = amountValue;
});

cartBtn.addEventListener('click', function(){
  cartDiv.classList.toggle('hidden');
});
avatar.addEventListener('click', function() {
  cartDiv.classList.toggle('hidden');
});

// cart box end //

// image slider start //

document.addEventListener('DOMContentLoaded', function () {
   const nextBtn = document.getElementById('nextBtn');
   const previousBtn = document.getElementById('previousBtn');
   const thumbImg = document.getElementById('thumbImg');
   const addCartBtn = document.getElementById('addCartBtn');
   const none = document.getElementById('none');
   const wrp = document.getElementById('wrp');
   const value = document.getElementById('value');
   const total = document.getElementById('total');
   const deleteItem = document.getElementById('deleteItem');

   let currentImg = 1;
   
nextBtn.addEventListener('click', function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  }else {
    currentImg++;
  }
  thumbImg.src = `./images/image-product-${currentImg}.jpg`

});

previousBtn.addEventListener('click', function previousImage () {
  if (currentImg == 1) {
    currentImg = 4;
  }else {
    currentImg--;
  }
  thumbImg.src = `./images/image-product-${currentImg}.jpg`
  
});

// image slider end //

// checkout button start //

addCartBtn.addEventListener('click', () => {
    
  if (amountValue > 0) {
    none.classList.add('hidden');
    wrp.classList.toggle('hidden');
    wrp.classList.add('flex');
    total.innerHTML = `$${125.00 * amountValue}.00`;
    indicator.style.display = 'block';
    indicator.innerText = amountValue;
    value.innerHTML = amountValue;

  }else {
    none.classList.remove('hidden');
    wrp.classList.add('hidden');
    wrp.classList.remove('flex');
  }
   
});

// checkout button end //

// delete button start //

deleteItem.addEventListener('click', () => {
    none.classList.remove('hidden');
    wrp.classList.add('hidden');
    wrp.classList.remove('flex');
    indicator.style.display = 'hidden';
    indicator.innerText = '';
})

// delete button end //

// desktop image slider start //

function changeImage(imageNumber) {
  let thumbImg = document.getElementById('thumbImg');
  thumbImg.src = './images/image-product-' + imageNumber + '.jpg';
}

const firstImage = document.getElementById('image1');
const secondImage = document.getElementById('image2');
const thirdImage = document.getElementById('image3');
const fourthImage = document.getElementById('image4');
firstImage.addEventListener('click', () => {
   firstImage.classList.add('selected');
   changeImage(1);
   thirdImage.classList.remove('selected');
   secondImage.classList.remove('selected');
   fourthImage.classList.remove('selected');
});
secondImage.addEventListener('click', () => {
  secondImage.classList.add('selected');
  changeImage(2);
  firstImage.classList.remove('selected');
  thirdImage.classList.remove('selected');
  fourthImage.classList.remove('selected')
});
thirdImage.addEventListener('click', () => {
  thirdImage.classList.add('selected');
  changeImage(3);
  firstImage.classList.remove('selected');
  secondImage.classList.remove('selected');
  fourthImage.classList.remove('selected');
});
fourthImage.addEventListener('click', () => {
  fourthImage.classList.add('selected');
  changeImage(4);
  firstImage.classList.remove('selected');
  secondImage.classList.remove('selected');
  thirdImage.classList.remove('selected');
});

});

// desktop image slider end //