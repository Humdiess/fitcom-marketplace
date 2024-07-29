// Contoh logika untuk menampilkan navbar sebelum dan sesudah login
var isLoggedIn = true; // Ganti sesuai dengan status login user

if (isLoggedIn) {
  document.getElementById('nav-login').style.display = 'none';
  document.getElementById('nav-register').style.display = 'none';
  document.getElementById('nav-account').style.display = 'block';
  document.getElementById('nav-orders').style.display = 'block';
  document.getElementById('nav-cart').style.display = 'block';
  document.getElementById('nav-logout').style.display = 'block';
} else {
  document.getElementById('nav-login').style.display = 'block';
  document.getElementById('nav-register').style.display = 'block';
  document.getElementById('nav-account').style.display = 'none';
  document.getElementById('nav-orders').style.display = 'none';
  document.getElementById('nav-cart').style.display = 'none';
  document.getElementById('nav-logout').style.display = 'none';
}