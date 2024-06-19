 document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("button");
    const paragraf = document.getElementById("paragraf2");

    btn.addEventListener('click', () => {
        if (paragraf.style.display === 'none' || paragraf.style.display === '') {
            paragraf.style.display = 'block';
        } else {
             paragraf.style.display = 'none';
        }

    });
        }); 





            document.addEventListener('DOMContentLoaded', function() {
            const baslik = document.getElementById('başlık1');
            const paragraf = document.getElementById('paragraf2');
            const btnDegistir = document.getElementById('button');
        
            // Başlık ve paragraf içeriğini değiştiren fonksiyon
            function icerikDegistir() {
                baslik.textContent = 'Yeni Başlık';
                paragraf.textContent = 'Yeni paragraf içeriği burada olacak.';
            }
        
            // Düğmeye tıklandığında icerikDegistir fonksiyonunu çağıran olay dinleyicisi
            btnDegistir.addEventListener('click', icerikDegistir);
        }); 
        





        document.addEventListener('DOMContentLoaded', function() {
            const başlık1 = document.getElementById('başlık1');
            const başlık2 = document.getElementById('başlık2');
            const paragraf1 = document.getElementById('paragraf1');
            const paragraf2 = document.getElementById('paragraf2');
            const button = document.getElementById('button');
        
            // Fare üzerine gelindiğinde stil değişikliği
            başlık1.addEventListener('mouseover', function() {
                this.style.color = 'red';
            });
        
            başlık2.addEventListener('mouseover', function() {
                this.style.color = 'blue';
            });
        
            // Tıklandığında stil değişikliği
            button.addEventListener('click', function() {
                paragraf1.style.backgroundColor = '#f0f0f0';
                paragraf2.style.backgroundColor = '#f0f0f0';
            });
        });




        
        document.addEventListener('DOMContentLoaded', function() {
            const updateButton = document.getElementById('updateButton');
            const textInput = document.getElementById('textInput');
            const paragraf1 = document.getElementById('paragraf1');
            const paragraf2 = document.getElementById('paragraf2');
        

            updateButton.addEventListener('click', function() {
                const yeniMetin = textInput.value;
                        paragraf1.textContent = yeniMetin;
            });
        });
        
        
        










