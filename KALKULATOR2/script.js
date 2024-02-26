// Mendapatkan referensi ke elemen display dan semua elemen button pada halaman
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button"); 

// Menetapkan fungsi penanganan klik untuk setiap tombol
buttons.forEach((item) => {
  item.onclick = () => {
    // Logika penanganan klik berdasarkan id tombol
    if (item.id == "clear") {
      clearDisplay();
    } else if (item.id == "backspace") {
      backspace();
    } else if (display.innerText != "" && item.id == "equal") {
      calculate();
    } else if (display.innerText == "" && item.id == "equal") {
      // Menampilkan pesan "Empty!" jika display kosong saat tombol equal diklik
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000); // Menghapus pesan setelah 2 detik
    } else {
      // Menyesuaikan simbol '*' dan '/' sebelum menambahkan karakter ke display
      if (item.id == "*") {
        updateDisplay("×");
      } else if (item.id == "/") {
        updateDisplay("÷");
      } else {
        updateDisplay(item.id);
      }
    }
  };
});

// Mendapatkan referensi ke elemen tombol penggantian tema dan kalkulator
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true; // Variabel untuk menyimpan status tema

// Menetapkan fungsi untuk mengganti tema dan mengubah status tema saat tombol tema diklik
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

// Fungsi untuk menambahkan nilai ke display
function updateDisplay(value) {
  display.innerText += value;
}

// Fungsi untuk mengevaluasi dan menghitung ekspresi matematika pada display
function calculate() {
  try {
    // Mengganti simbol '×' dengan '*' dan '÷' dengan '/'
    let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
    const result = eval(expression); // Menghitung ekspresi matematika

    // Menampilkan hasil atau 'Error' pada display
    if (Number.isFinite(result)) {
      display.innerText = result;
    } else {
      display.innerText = 'Error';
    }
  } catch (error) {
    // Menampilkan 'Error' jika terjadi kesalahan
    display.innerText = 'Error';
  }
}

// Fungsi untuk membersihkan display
function clearDisplay() {
  display.innerText = '';
}

// Fungsi untuk menghapus satu karakter dari belakang pada display
function backspace() {
  let string = display.innerText.toString();
  display.innerText = string.substr(0, string.length - 1);
}
