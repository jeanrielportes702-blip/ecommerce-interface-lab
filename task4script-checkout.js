const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');

  let isValid = true;

  if (name.value === "") {
    name.classList.add('error');
    isValid = false;
  } else {
    name.classList.remove('error');
  }

  if (email.value === "") {
    email.classList.add('error');
    isValid = false;
  } else {
    email.classList.remove('error');
  }

  if (isValid) {
    console.log("Order Successful!");
    window.location.href = "thankyou.html";
  }
});
