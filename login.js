document.addEventListener("DOMContentLoaded", function() {
    // Temukan tombol login
    var loginButton = document.querySelector('.login__button');

    // Tambahkan event listener untuk saat tombol login ditekan
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Menghentikan perilaku default dari tombol submit

        // Temukan input email dan password
        var emailInput = document.getElementById('input-email').value;
        var passwordInput = document.getElementById('input-pass').value;

        // Lakukan validasi sederhana
        if (emailInput.trim() === '' || passwordInput.trim() === '') {
            alert('Mohon isi email dan password terlebih dahulu.');
        } else {
            // Redirect ke halaman lain
            window.location.href = 'product-responsive.html';
        }
    });
});
