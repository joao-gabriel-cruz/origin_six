const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle ')

for (const elemet of toggle) {
  elemet.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const header = document.querySelector('#header')
const navHEight = header.offsetHeight

function changerHeaderWhenScroll() {
  if (window.scrollY >= navHEight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/*=== swiper === */
const swiper = new Swiper('.swiper', {
  slidePerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,

  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ==== scrollReaveal ==== */
const scrollReaveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReaveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#service header, #service .card, 
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY > 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo conforme a rolagem */

const sections = document.querySelectorAll('main section[id]')

function activeMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', () => {
  activeMenuCurrentSection()
  changerHeaderWhenScroll()
  backToTop()
})
