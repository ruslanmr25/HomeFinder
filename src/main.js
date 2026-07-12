import "./style.css";

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  // 1. Menyuning balandligi (Height) va shaffofligini (Opacity) o'zgartirish
  mobileMenu.classList.toggle("grid-rows-[0fr]");
  mobileMenu.classList.toggle("grid-rows-[1fr]");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");

  // 2. Ikonkani o'zgartirish va aylantirish (Rotate) animatsiyasi
  if (mobileMenu.classList.contains("opacity-0")) {
    // Menyu yopilganda: "X" ni olib tashlash, "Bars" ni qo'yish va joyiga qaytarish
    menuIcon.classList.remove("fa-xmark", "rotate-90");
    menuIcon.classList.add("fa-bars", "rotate-0");
  } else {
    // Menyu ochilganda: "Bars" ni olib tashlash, "X" ni qo'yish va 90 gradusga burash
    menuIcon.classList.remove("fa-bars", "rotate-0");
    menuIcon.classList.add("fa-xmark", "rotate-90");
  }
});
