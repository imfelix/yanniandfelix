'use strict'

/* scroll to element */
function jump (target, duration) {
  var start = window.pageYOffset

  var distance = typeof target === 'string'
    ? document.querySelector(target).getBoundingClientRect().top
    : target

  var timeStart

  window.requestAnimationFrame(function (time) {
    timeStart = time
    loop(time)
  })

  function loop (time) {
    var timeElapsed = time - timeStart

    window.scrollTo(0, (function easeInOutQuad (timeElapsed, start, distance, duration) {
      timeElapsed /= duration / 2

      if (timeElapsed < 1) {
        return distance / 2 * timeElapsed * timeElapsed + start
      }

      timeElapsed--

      return -distance / 2 * (timeElapsed * (timeElapsed - 2) - 1) + start
    })(timeElapsed, start, distance, duration))

    if (timeElapsed < duration) {
      window.requestAnimationFrame(loop)
    } else {
      window.scrollTo(0, start + distance)
    }
  }
}

window.showMenu = function (e) {
  console.log("showMenu")
  document.getElementsByClassName('js-menu')[0].classList.add('show-menu')
  document.body.classList.add('overflow-hidden')
}

window.hideMenu = function (e) {
  console.log("hideMenu")
  document.getElementsByClassName('js-menu')[0].classList.remove('show-menu')
  document.body.classList.remove('overflow-hidden')
}

window.addEventListener('load', function () {
  var links = document.querySelectorAll('.scroll-link a')

  window.addEventListener('scroll', (function scrolled () {

    var rect = document.querySelector('.atf').getBoundingClientRect()

    var target = 0
    var offset = rect.top - target
    var opacity = 100 / Math.abs(offset)

    /* sticky nav bar */
    document.getElementById('menu').classList.toggle(
      'js-scrolled',
      window.pageYOffset || document.documentElement.scrollTop
    )

    /* update active link */
    for (var i = 0; i < links.length; i++) {
      var id = links[i].href.split('#')[1]
      var section = document.querySelector('[name="' + id + '"] ~ .section')
      var top = section.getBoundingClientRect().top
      var height = section.getBoundingClientRect().height

      var active = top < 100 && top > -height + 100

      links[i].classList.toggle('active', active)
    }

    return scrolled
  })())

  /* nav bar links */
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
      e.preventDefault()
      jump('[name="' + this.href.split('#')[1] + '"]', 1000)
    }
  }
}, false)
