const questions = {
  "زبان برنامه‌نویسی محبوب برای علم داده": "پایتون",
  "عبارتی کوتاه برای نوشتن دستور": "کد",
  "مجموعه‌ای از اطلاعات": "دیتا",
  "ساختار تکرار در برنامه‌نویسی": "لوپ",
  "ساختار داده‌ی قابل تغییر": "لیست",
  "ساختار داده‌ی غیرقابل تغییر": "تاپل"
};

const words = Object.values(questions);
const gridSize = 12;
const cellSize = 40;
const alphabet = "ابپتسجچحخدذرزژسشصضطظعغفقکگلمنوهی";

let score = 0;
let timeLeft = 120;

// نمایش سؤالات
const questionsDiv = document.getElementById("questions");
let idx = 1;
for (const [q, ans] of Object.entries(questions)) {
  const div = document.createElement("div");
  div.innerText = `${idx}. ${q}`;
  questionsDiv.appendChild(div);
  idx++;
}

// ایجاد جدول و رسم حروف روی Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ... اینجا باید منطق ایجاد جدول، قرار دادن کلمات و کنترل موس/تاچ اضافه بشه
// مشابه کاری که در Tkinter انجام دادی، ولی با JS و canvas
