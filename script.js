function toggleNavbar(el) {
    const nav = document.getElementById("nav");
    el.classList.toggle("active");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  function toggleNavbar() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
  }  
  function closeNavbar() {
    document.getElementById("nav").style.display = "none";
    document.querySelector(".hamburger").classList.remove("active");
  }
  
  function openLetter() {
    document.getElementById("letter-popup").style.display = "flex";
  }
  
  function closeLetter() {
    document.getElementById("letter-popup").style.display = "none";
  }
// Animate heading letters with fade-in
window.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.animated-heading');
    const text = heading.textContent.trim();
    heading.textContent = ''; // Clear existing text
  
    // Create spans for each letter
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${i * 0.1}s`;
      heading.appendChild(span);
    });
  });
    