$(function () {
  $('.product-wave').wavify({
    height: 10,
    bones: 3,
    amplitude: 20,
    color: 'url(#gradient)',
    speed: 0.25,
    container: '.product__content',
  })

  $('#footerWaveID').wavify({
    height: 70,
    bones: 5,
    amplitude: 40,
    color: '#18449A',
    speed: 0.25,
  })
})
