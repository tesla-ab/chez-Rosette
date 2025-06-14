const images = [
  'jr-r-90HdOlGbjck-unsplash.jpg',
  'oliver-timm-haarmann-p6OLZPnq810-unsplash.jpg',
  'resized_brooke-lark-V4MBq8kue3U-unsplash.jpg',
  'resized_heather-barnes-WbZesfqwR-A-unsplash.jpg',
  'sebastian-coman-photography-dacM7egRw0Y-unsplash.jpg',
];

let index = 0;
const mainSection = document.querySelector('.main');

setInterval(() => {
  index = (index + 1) % images.length;
  mainSection.style.backgroundImage = `url('${images[index]}')`;
  mainSection.style.backgroundPosition = 'right';
  mainSection.style.backgroundSize = 'contain'; // باش تكون الصورة مناسبة للمساحة
}, 5000);
