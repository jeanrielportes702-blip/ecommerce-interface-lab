document.body.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const card = event.target.parentElement;

    card.classList.add('fade-in');

    setTimeout(() => {
      card.classList.remove('fade-in');
    }, 500);
  }
});
