window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;

  document.querySelector('.layer-1').style.transform = `translateY(${scrollY * 0.2}px)`;
  document.querySelector('.layer-2').style.transform = `translateY(${scrollY * 0.4}px)`;
  document.querySelector('.layer-3').style.transform = `translateY(${scrollY * 0.6}px)`;
  document.querySelector('.layer-4').style.transform = `translateY(${scrollY * 0.8}px)`;
});
