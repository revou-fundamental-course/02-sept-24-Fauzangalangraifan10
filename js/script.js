// Luas Segitiga
const formLuas = document.getElementById('segitiga-form-luas');
const alasLuas = document.getElementById('panjang-alas-luas');
const tinggiLuas = document.getElementById('tinggi-luas');
const resultLuas = document.getElementById('result-luas');

formLuas.addEventListener('submit', function(event) {
    event.preventDefault();
    let a = parseFloat(alasLuas.value);
    let t = parseFloat(tinggiLuas.value);
    if (isNaN(a) || isNaN(t)) {
        resultLuas.innerHTML = 'Mohon masukkan angka yang valid.';
        return;
    }
    let l = 0.5 * a * t;
    resultLuas.innerHTML = `Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l.toFixed(2)} cm²`;
});

// Keliling Segitiga
const formKeliling = document.getElementById('segitiga-form-keliling');
const sisiA = document.getElementById('sisi-a');
const sisiB = document.getElementById('sisi-b');
const sisiC = document.getElementById('sisi-c');
const resultKeliling = document.getElementById('result-keliling');

formKeliling.addEventListener('submit', function(event) {
    event.preventDefault();
    let a = parseFloat(sisiA.value);
    let b = parseFloat(sisiB.value);
    let c = parseFloat(sisiC.value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultKeliling.innerHTML = 'Mohon masukkan angka yang valid.';
        return;
    }
    let keliling = a + b + c;
    resultKeliling.innerHTML = `Keliling segitiga dengan sisi-sisi ${a} cm, ${b} cm, dan ${c} cm adalah ${keliling.toFixed(2)} cm`;
});