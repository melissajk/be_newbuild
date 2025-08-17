// for reviews section (id=reviews) - if length is greater than 375 chars then abbreviate the section to 375 chars and add a 'read more' link.  Once the link is clicked it should expand the card and put a 'read less' link at the end that will collapse the text. 
// Look at the collapse component in Bootstrap 
// divide the text into two strings, then have one link tag to see all and one link tag to see less

const reviews = [...document.getElementsByClassName('review')]

const abbrevText = (review) => {
  const text = review.innerHTML
  const newText = review.innerHTML.substring(0, 500)
  // const newText = (text, length) => {
  //   let nt = text[length + 1] === ' ' ? 
  // }
  const btn = review.nextElementSibling
  review.innerHTML = newText
  btn.classList.remove('d-none')

  btn.addEventListener('click', (event) => {
    if (btn.textContent == 'Read More') {
      review.innerHTML = text
      btn.textContent = 'Read Less'
    } else {
      review.innerHTML = newText
      btn.textContent = 'Read More'
      review.scrollIntoView()
    }
  })
}

reviews.map((review) => {
  return review.innerHTML.length > 500 ? abbrevText(review) : review
})

// const services = [...document.getElementById('services').getElementsByTagName('h4')]
// services.map((service) => {
//   service.addEventListener('scroll', (event) => {
//     console.log(event.target.classList())
//   })
// })



