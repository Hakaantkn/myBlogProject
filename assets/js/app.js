const translateBtn = document.querySelector('.translateBtn');
const aciklamaKismi = document.querySelector('.aciklamaKismi');

translateBtn.addEventListener('click', () => {
    ingCevir();
});
function ingCevir(){
    aciklamaKismi.innerHTML = `<p>Hello, I am Hakan, I am 19 years old.
    I'm trying to improve myself in software.
    I am taking Acun Media Academy extended software expertise course
    I create my own projects and try to improve myself as fast as possible.</p>
    <button class="tekrarTR" onclick="trCevir()">Translate</button>`
    const tekrarCevir = document.querySelector('.tekrarCevir');
}

