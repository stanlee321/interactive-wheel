const wheel = document.querySelector('.wheel img');
const images = document.querySelectorAll('.images li img');

const angle = 360 / (images.length);

const radius = ( wheel.offsetWidth / 2) - 60; // radius of the circle in pixels


function positionImages() {
  images.forEach((image, index) => {
    const radians = (angle *index * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    image.style.transform = `translate(${x}px, ${y}px)`;
    // console.log(x,y)
  });  
}

positionImages()

// images.forEach(image => {
//   image.addEventListener('mouseenter', () => {
//     image.classList.add('rotate');
//   });
//   image.addEventListener('mouseleave', () => {
//     image.classList.remove('rotate');
//   });
// });



images.forEach(function(image) {
  // Change the appearance of the icon when the mouse hovers over it
  image.addEventListener('mouseover', function() {
    image.style.opacity = '0.5';
  });
  image.addEventListener('mouseout', function() {
    image.style.opacity = '1';
  });

  // Display more information about the SDG when the icon is clicked
  // image.addEventListener('click', function() {
  //   alert('More information about ' + image.alt);
  // });

  // console.log('You clicked on image ' + image.alt);
  // Refresh the page
});


for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    // Display the text on the right side of the screen
    document.querySelector('#text').style.position = 'absolute';
    document.querySelector('#text').style.right = '20px';
    document.querySelector('#text').style.top = '20px';
    document.querySelector('#text').textContent = 'You clicked on image ' + images[i].alt;;

    // location.reload();

  });
}