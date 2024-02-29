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
    <br>
    <button class="tekrarTR">Çevir</button>`
        const tekrarCevir = document.querySelector('.tekrarTR');
        tekrar(tekrarCevir);
}


function tekrar(tekrarCevir){

    tekrarCevir.addEventListener('click', function(){
        aciklamaKismi.innerHTML = `<div class="aciklamaKismi"><p>Merhaba ben Hakan 19 yaşındayım
        yazılım konusunda kendimi geliştirmeye çalışıyorum
        Acun Medya Akademi genişletilmiş yazılım uzmanlığı kursu alıyorum
        kendi projelerimi oluşturuyorum kendimi geliştirmeye çalışıyorum.</p><button class="translateBtn" onclick="ingCevir()">translate</button></div>`

    });


}

