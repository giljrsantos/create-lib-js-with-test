export default class OnLeaveIntent {
  constructor(callback) {
    this.callback = callback

    this.init()
  }

  init = () => {
    this.handleMouseOut()
  }

  checkOutOfBounds = e => {
    if (e.relatedTarget === null) {
      this.callback()
    }
  }

  handleMouseOut() {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
