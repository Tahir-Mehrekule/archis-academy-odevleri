let filmLKütüphanesi = new Map();

function filmEkle(ad, yonetmen, yayınYili){
    let film = {ad: ad, yonetmen: yonetmen, yayınYili: yayınYili};
    filmLKütüphanesi.set(ad, film)
    console.log(`${ad} filmi kütüphaneye eklendi.`);
}


function filmListele(){
    console.log("film kütüphanesi:");
    for(let [ad, film] of filmLKütüphanesi){
        console.log(`${ad} - Yönetmen: ${film.yonetmen}, Yayın yılı: ${film.yayınYili}`);
        }
} 

function filmArA(anahtar){
    if(filmLKütüphanesi.get(anahtar)){
        console.log(`Film Bulundu: ${anahtar} - Yönetmen: ${film.yonetmen}, Yayın Yılı: ${film.yayınYili}`);
            } else {
                console.log(`${anahtar} filmi bulunamadı.`);
}
        }
function filmGuncelle(ad, yeniYönetmen, yeniYayınyılı){
    if (filmLKütüphanesi.has(ad)) {
        let film = filmLKütüphanesi.get(ad);
        film.yonetmen = yeniYönetmen;
        film.yayınYili = yeniYayınyılı;
        console.log(`${ad} filmi güncellendi.`);
        }  else {
            console.log(`${ad} filmi bulunamadı.`);
        }
    }
    function filmSil(ad) {
        if (filmLKütüphanesi.has(ad)) {
            filmLKütüphanesi.delete(ad);
            console.log(`${ad} filmi kütüphaneden silindi.`);
        } else {
            console.log(`${ad} filmi bulunamadı.`);
        }
    }
    

filmEkle("Zincirsiz ", "Quentin Tarantino" , "2013");
filmEkle("Pulp Fiction", "Quentin Tarantino", "1994");
filmEkle("The Shawshank Redemption", "Frank Darabont", "1994");
filmListele();

filmArA("Zincirsiz");

filmGuncelle("Pulp Fiction", "Quentin Tarantino", "1995");

filmListele();

filmSil("zincirsiz");
filmListele();
