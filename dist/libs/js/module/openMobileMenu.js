export default class openMobileMenu {
   constructor ({ menu, close, open, overlay, closeItems }) {
      this.$selectorMenu = document.querySelector(menu)
      this.$selectorClose = document.querySelector(close)
      this.$selectorOpen = document.querySelectorAll(open)
      this.$overlay = document.querySelector(overlay)
      this.$closeItems = document.querySelectorAll(closeItems)

      this.#setup()
   }

   #setup = () => {
      for (let i = 0; i < this.$selectorOpen.length; i++) {
         this.$selectorOpen[i].addEventListener('click', this.onOpen)
      }

      for (let i = 0; i < this.$closeItems.length; i++) {
         this.$closeItems[i].addEventListener('click', this.onClose)
      }

      this.$overlay?.addEventListener('click', this.onClose)
      
      this.$selectorClose?.addEventListener('click', this.onClose)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.onClose()
      })
   }

   onOpen = () => {
      this.$selectorMenu.classList.add('active')
      this.$overlay.classList.add('active')
      document.body.classList.add('no-scroll')
   }

   onClose = () => {
      this.$selectorMenu.classList.remove('active')
      this.$overlay.classList.remove('active')
      document.body.classList.remove('no-scroll')
   }
}


