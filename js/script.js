
const multiplier = {
  translate: .1,
  rotate: .01
}

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  grabCursor: true
})

function calculateWheel() {
  const slides = document.querySelectorAll('.swiper-slide')
  slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect()
      const r = window.innerWidth * .3 - (rect.x + rect.width * .3)
      let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

      if (ty < 0) {
          ty = 0
      }
      const transformOrigin = r < 0 ? 'left top' : 'right top'
      // slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
      slide.style.transformOrigin = transformOrigin
  })
}

function raf() {
  requestAnimationFrame(raf)
  calculateWheel()
}

raf();

