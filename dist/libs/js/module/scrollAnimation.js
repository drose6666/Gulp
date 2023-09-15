window.addEventListener('load', () => {
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
   }

   const callback = (entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animation')
         }
      })
   }

   const callbackFooter = (entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animation')
         } else {
            entry.target.classList.remove('animation')
         }
      })
   }



   const observer = new IntersectionObserver(callback, options)
   const observeFooter = new IntersectionObserver(callbackFooter, options)

   const animateList = document.querySelectorAll('.animate')
   const footer = document.querySelector('footer')

   animateList?.forEach(i => {
      observer.observe(i)
   })

   observeFooter.observe(footer)
})