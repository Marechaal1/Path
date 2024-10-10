function showContent(section) {

  document.getElementById('main-content').style.display = 'none';


  const sections = document.querySelectorAll('.content-section');
  sections.forEach(function (sec) {
      sec.style.display = 'none';
  });


  document.getElementById(section).style.display = 'block';


  const parallaxSection = document.getElementById('parallax-section');
  if (section === 'story') {
      parallaxSection.style.backgroundImage = "url('history_background.jpg')";
  } else if (section === 'trailer') {
      parallaxSection.style.backgroundImage = "url('trailer_background.jpg')"; 
  }
}
