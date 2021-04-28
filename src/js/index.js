$(function () {
  $('.product-wave').wavify({
    height: 10,
    bones: 3,
    amplitude: 20,
    color: 'url(#gradient)',
    speed: 0.25,
    container: '.product__content',
  })

  $('.footer-wave').wavify({
    height: 70,
    bones: 5,
    amplitude: 30,
    color: '#18449A',
    speed: 0.15,
  })
})
