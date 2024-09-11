document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menghitung luas segitiga
    function hitungLuasSegitiga() {
        const alas = parseFloat(document.getElementById("panjang-alas-luas").value);
        const tinggi = parseFloat(document.getElementById("tinggi-luas").value);
        if (isNaN(alas) || isNaN(tinggi)) {
            alert("Silakan masukkan angka yang valid untuk alas dan tinggi.");
            return;
        }
        const luas = 0.5 * alas * tinggi;
        document.getElementById("result-luas").textContent = `Hasil Perhitungan: ${luas.toFixed(2)}`;
        alert("Perhitigungan Selesai.");
            return;
    }

    // Fungsi untuk menghitung keliling segitiga
    function hitungKelilingSegitiga() {
        const sisiA = parseFloat(document.getElementById("sisi-a").value);
        const sisiB = parseFloat(document.getElementById("sisi-b").value);
        const sisiC = parseFloat(document.getElementById("sisi-c").value);
        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
            alert("Silakan masukkan angka yang valid untuk semua sisi.");
            return;
        }
        const keliling = sisiA + sisiB + sisiC;
        document.getElementById("result-keliling").textContent = `Hasil Perhitungan: ${keliling.toFixed(2)}`;
        alert("Perhitigungan Selesai.");
            return;
    }

    // Fungsi untuk menghitung luas jajargenjang
        function hitungLuasJajarGenjang() {
        const alas = parseFloat(document.getElementById("panjang-alas-luas-jajar-genjang").value);
        const tinggi = parseFloat(document.getElementById("tinggi-luas-jajar-genjang").value);
        if (isNaN(alas) || isNaN(tinggi)) {
            alert("Silakan masukkan angka yang valid untuk alas dan tinggi.");
            return;
        }
        const luas = alas * tinggi;
        document.getElementById("result-luas-jajar-genjang").textContent = `Hasil Perhitungan: ${luas.toFixed(2)}`;
        alert("Perhitigungan Selesai.");
            return;
    }

    // Fungsi untuk menghitung keliling jajargenjang
    function hitungKelilingJajarGenjang() {
        const alas = parseFloat(document.getElementById("panjang-alas-keliling").value);
        const sisiMiring = parseFloat(document.getElementById("sisi-miring-keliling").value);
        if (isNaN(alas) || isNaN(sisiMiring)) {
            alert("Silakan masukkan angka yang valid untuk alas dan sisi miring.");
            return;
        }
        const keliling = 2 * (alas + sisiMiring);
        document.getElementById("result-keliling-jajar-genjang").textContent = `Hasil Perhitungan: ${keliling.toFixed(2)}`;
        alert("Perhitigungan Selesai.");
            return;
    }

    // Menangani pengiriman form untuk luas segitiga
    document.getElementById("segitiga-form-luas").addEventListener("submit", function(event) {
        event.preventDefault();
        hitungLuasSegitiga();
    });

    // Menangani pengiriman form untuk keliling segitiga
    document.getElementById("segitiga-form-keliling").addEventListener("submit", function(event) {
        event.preventDefault();
        hitungKelilingSegitiga();
    });

    // Menangani pengiriman form untuk luas jajargenjang
    document.getElementById("jajargenjang-form-luas").addEventListener("submit", function(event) {
        event.preventDefault();
        hitungLuasJajarGenjang();
    });

    // Menangani pengiriman form untuk keliling jajargenjang
    document.getElementById("jajargenjang-form-keliling").addEventListener("submit", function(event) {
        event.preventDefault();
        hitungKelilingJajarGenjang();
    });

    // Menangani reset form untuk luas segitiga
    document.getElementById("reset-luas").addEventListener("click", function() {
        document.getElementById("result-luas").textContent = "Hasil Perhitungan";
    });

    // Menangani reset form untuk keliling segitiga
    document.getElementById("reset-button").addEventListener("click", function() {
        document.getElementById("result-keliling").textContent = "Hasil Perhitungan";
    });

    // Menangani reset form untuk luas jajargenjang
    document.getElementById("reset-luas-jajar-genjang").addEventListener("click", function() {
        document.getElementById("result-luas-jajar-genjang").textContent = "Hasil Perhitungan";
    });

    // Menangani reset form untuk keliling jajargenjang
    document.getElementById("reset-keliling-jajar-genjang").addEventListener("click", function() {
        document.getElementById("result-keliling-jajar-genjang").textContent = "Hasil Perhitungan";
    });
});

// Pastikan untuk mendeklarasikan elemen-elemen dengan benar
    const segitigaBtn = document.getElementById('segitiga-btn');
    const jajargenjangBtn = document.getElementById('jajargenjang-btn');
    const segitigaContent = document.getElementById('segitiga-content');
    const jajargenjangContent = document.getElementById('jajargenjang-content');

// Tampilan awal website
    segitigaContent.style.display = 'block';
    jajargenjangContent.style.display = 'none';


// Menaggil sefitiga 
    segitigaBtn.addEventListener('click', () => {
        segitigaContent.style.display = 'block';
        jajargenjangContent.style.display = 'none';
    });

// Memanggil Jajargenjang 
    jajargenjangBtn.addEventListener('click', () => {
        segitigaContent.style.display = 'none';
        jajargenjangContent.style.display = 'block';
    });

    // Mengatur warna button

    function setupButtonBehavior(buttonId) {
        var button = document.getElementById(buttonId);
        
        button.addEventListener('click', function() {
            // Setel background dan teks ketika tombol diklik
            this.classList.add('clicked-btn');
        });

        button.addEventListener('mouseleave', function() {
            // Kembalikan background dan teks ke warna semula ketika kursor meninggalkan tombol
            this.classList.remove('clicked-btn');
            this.classList.add('bisque-color');
        });
    }

    setupButtonBehavior('segitiga-btn');
    setupButtonBehavior('jajargenjang-btn');
