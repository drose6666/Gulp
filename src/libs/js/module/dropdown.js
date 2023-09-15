export default class Dropdown {
   constructor ({dropdown, open, data, selectedId}) {
      this.dropdown = dropdown
      this.open = open
      this.data = data
      this.selectedId = selectedId

      this.$dropdownEl = document.querySelector(this.dropdown)
      this.$openEl = document.querySelector(this.open)

      this.#setup()
   }

   #setup = () => {
      this.$dropdownEl.insertAdjacentHTML('afterbegin', this.#render())
      // console.log(this.selectedId);

      this.$closeEls = this.$dropdownEl.querySelectorAll(`${this.dropdown} .option`)
      this.$selected = this.$dropdownEl.querySelector(`${this.dropdown} .selected`)

      this.$selected.addEventListener('click', this.onOpen)

      this.$closeEls.forEach(el => {
         el.addEventListener('click', () => {
            this.onClose()
            this.onSelect(el)
         })
      })
   }

   #render = () => {
      const items = this.data.map(({ id, value }) => {
         return `<li data-id="${id}" class="option">${value}</li>`
      })

      return `
         <div class="selected form-item">
            <input type="text" name="Формат" class="ui-input field" placeholder="Выберите формат" data-valid="tickets" readonly>
            <span class="error-message"></span>
         </div>

         <ul class="options">
            ${items.join('')}
         </ul>
         
      `
   }

   onOpen = () => {
      this.$dropdownEl.classList.toggle('active')
   }

   onClose = () => {
      this.$dropdownEl.classList.remove('active')
   }

   onSelect = (currentItem) => {
      const $dropdownInput = this.$dropdownEl.querySelector(`${this.dropdown} .field`)

      for (let item of this.$closeEls) {
         item.classList.remove('current')
      }

      if (this.selectedId) {
         let selectItem = this.data.find(el => el.id === this.selectedId)
         $dropdownInput.value = selectItem.value
         currentItem.classList.add('current')
      } else {
         const currentId = Number(currentItem.getAttribute('data-id'))
         let selectItem = this.data.find(el => el.id === currentId)
         $dropdownInput.value = selectItem.value
         currentItem.classList.add('current')
      }
   }
}