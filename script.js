const fontSizeIN = document.getElementById("fontsize");
const fontColorIN = document.getElementById("fontcolor");

// --- Utility: Set a cookie with expiry ---
function setCookie(name, value, days = 1) {
  //   const date = new Date();
  //   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  //   const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; path=/`;
}

// --- Utility: Get a cookie by name ---
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  console.log(cookies);
  for (let kv of cookies) {
    const [key, value] = kv.split("=");
    if (key === name) return value;
  }
  return null;
}

// --- Apply design by updating CSS variables ---
function setDesign(font, color) {
  document.documentElement.style.fontSize = font + "px";
  document.documentElement.style.color = color;
}

// --- On Save button click ---
document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fontSize = fontSizeIN.value;
  const fontColor = fontColorIN.value;

  // Save to cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply immediately
  setDesign(fontSize, fontColor);
});

// --- On Page Load: Restore cookies ---
window.addEventListener("load", () => {
  const fontSize = getCookie("fontsize") || 16;
  const fontColor = getCookie("fontcolor") || "#000000";

  // Restore form inputs
  fontSizeIN.value = fontSize;
  fontColorIN.value = fontColor;

  // Apply styles
  setDesign(fontSize, fontColor);
});
