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
    <button class="tekrarTR">Çevir</button>`
}

function tekrarCevir(){
    const tekrarCevir = document.querySelector('.tekrarTR');
    tekrarCevir.addEventListener('click', function(e){
        e.preventDefault();
        aciklamaKismi.innerHTML = `<div class="aciklamaKismi"><p>Merhaba ben Hakan 19 yaşındayım
        yazılım konusunda kendimi geliştirmeye çalışıyorum
        Acun Medya Akademi genişletilmiş yazılım uzmanlığı kursu alıyorum
        kendi projelerimi oluşturuyorum kendimi olabildiğince hızlı geliştirmeye çalışıyorum.</p></div>`
    });


}

