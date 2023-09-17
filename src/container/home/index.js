document.addEventListener('DOMContentLoaded', () => {
  if (window.session) {
    const { user } = window.session

    console.log(user)
  }
})
