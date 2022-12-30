var icons = document.querySelectorAll('.icon');


icons.forEach(function(icon, index) {
	// Set the initial position and rotation of the icon based on its index
	icon.style.top = '250px';
	icon.style.left = '250px';
	icon.style.transform = 'rotate(' + (360 / icons.length * index) + 'deg)';
  });

icons.forEach(function(icon) {
  // Change the appearance of the icon when the mouse hovers over it
  icon.addEventListener('mouseover', function() {
    icon.style.opacity = '0.5';
  });
  icon.addEventListener('mouseout', function() {
    icon.style.opacity = '1';
  });

  // Display more information about the SDG when the icon is clicked
  icon.addEventListener('click', function() {
    alert('More information about ' + icon.alt);
  });
});