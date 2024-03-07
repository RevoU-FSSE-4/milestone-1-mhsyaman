const textToType = ["Welcome to,", "QuickType Design & Typing Agency"];

let index = 0;
let wordIndex = 0;
let speed = 100;

const textToTypeElement = document.getElementById("typedText");

function typeWriter() {
    if (wordIndex < textToType[index].length) {
        textToTypeElement.innerHTML += textToType[index].charAt(wordIndex);
        wordIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Jika telah mengetik seluruh kata dalam elemen saat ini, lanjutkan ke elemen selanjutnya
        textToTypeElement.innerHTML += "<br>"; // Tambahkan baris baru
        index++; // Pindah ke elemen selanjutnya
        wordIndex = 0; // Reset indeks kata
        if (index < textToType.length) {
            setTimeout(typeWriter, speed);
        }
    }
}

// Panggil fungsi untuk memulai mengetik
typeWriter();
