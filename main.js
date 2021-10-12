var map;
function initMap() {
    const loc={lat: 6.462380, lng: 3.325649};
  map = new google.maps.Map(document.getElementById('map'), {
    center:loc ,
    zoom: 16
  });
  const marker=new google.maps.Marker({position:loc , map:map})
}



window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#nav-bar').style.opacity = 0.9;
  } else {
    document.querySelector('#nav-bar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#nav-bar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
