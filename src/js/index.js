$(function () {
  const hamb = $('.hamburger')
  hamb.on('click', () => {
    hamb.toggleClass('is-active')
    $('.header__right-block').slideToggle().toggleClass('d-block')
  })

  const partnersBtns = [
    '<img class="slider_l" src="../img/slider_l.svg" />',
    '<img class="slider_r" src="../img/slider_r.svg" />'
  ]

  $('.page-partners__slider').owlCarousel({
    margin: 20,
    nav: true,
    navText: partnersBtns,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  })

  const partnersButton = $('.page-partners__button')
  partnersButton.on('click', (e) => {
    e.preventDefault()
    partnersButton.addClass('page-partners__button--active')

    $('.page-partners__tooltip').addClass('page-partners__tooltip--active')
  })

  $('.product-wave').wavify({
    height: 10,
    bones: 3,
    amplitude: 20,
    color: 'url(#gradient)',
    speed: 0.25,
    container: '.product__content'
  })

  $('.footer-wave').wavify({
    height: 70,
    bones: 5,
    amplitude: 30,
    color: '#18449A',
    speed: 0.15
  })
})
