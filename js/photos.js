// travel js file for the image slider
var img_slider = document.querySelector('.img-slider');
const images = ['travela.jpeg', 'sydney.jpeg','christchurch.jpeg', 'queenstown.jpeg', 'milfordsound.jpeg',
              'colorhouse.jpeg','mist.jpeg','capegoodhope.jpeg','penguins.jpeg'];
const captions = ['Blyde River Canyon South Africa', 'Sydney Harbor Bridge', 'Christchurch New Zealand',
            'Queenstown New Zealand', 'Milford Sound New Zealand', 'Bo-Kapp Neighborhood Cape Town South Africa',
          'Cape Town South Africa', 'Cape of Good Hope South Africa', 'Penguins playing in Simons Town South Africa'];
var i=0; //current image index

function prev(){
  if(i <= 0) i = images.length;
  i--;
  return setImg();
}

function next(){
  if (i >= images.length-1) i = -1;
  i++;
  return setImg();
}

function setImg(){
    img_slider.setAttribute('src', 'images/' + images[i]);
    document.getElementById('img-caption').innerHTML = captions[i];
  return img_slider;
}
