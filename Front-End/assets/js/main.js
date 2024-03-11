const togglePassword = document.getElementById('toggler');
const password = document.querySelector('#fakePassword');

togglePassword.addEventListener('click', function () {
  password.type = password.type === 'password' ? 'text' : 'password';
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

