// note:
// preventDefault() digunakan untuk menghilangkan fungsi default.

// Custom Title pada html
let titles = false;
setInterval(() => {
    document.title = titles ? 'from Bito' : 'Selamat datang!';
    titles = !titles;
}, 5000);

const navbarNav = document.querySelector('.navbar-nav');
const menuGarisTiga = document.querySelector('#menu');
const productDetail = document.querySelectorAll('.buy .row .card-menu');
const skills = document.querySelector('.buy .row');

menuGarisTiga.addEventListener('click', function(){
    navbarNav.classList.toggle('active');
});

// Pengkondisian humberger menu
document.addEventListener('click', function(bukan){
    if (!menuGarisTiga.contains(bukan.target) && !navbarNav.contains(bukan.target)){
        // jika user melakukan click diluar menuGarisTiga navbarNav dan textField, maka lakukan perintah di bawah.
        navbarNav.classList.remove('active');
        // tombolSearch.classList.remove('hilang');
    }
});

// Pengkondisian ketika card-menu diklik
productDetail.forEach(function(fe) {
    fe.addEventListener('click', function() {
        const prDe = document.querySelector('.buy');
        prDe.classList.toggle('muncul2');
    });
});

