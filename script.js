// Typing Animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

   function type() {
    if (i < text.length) {
      // Append the next character with the current color
      element.innerHTML = element.innerHTML.replace('<span class="typing-cursor">|</span>', '') + `${text.charAt(i)}</span><span class="typing-cursor">|</span>`;
      i++;
      setTimeout(type, speed);
    } else {
      // Wait for a moment and then start deleting the text
      setTimeout(erase, 2000);
    }
  }


  function erase() {
    if (i >= 0) {
      let currentText = element.innerHTML;
      // Remove the cursor temporarily
      currentText = currentText.replace('<span class="typing-cursor">|</span>', '');
      // Remove the last character
      element.innerHTML = currentText.substring(0, currentText.length - 1) + '<span class="typing-cursor">|</span>';
      i--;
      setTimeout(erase, speed / 2); // Erase faster than typing
    } else {
      // Restart the typing animation
      setTimeout(() => typeWriter(element, text, speed), 100);
    }
  }

  // Start typing after a delay
  setTimeout(type);
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start typing animation
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    typeWriter(typingElement, "Muh. Zacky Wal Ikram R");
  }
});



// 
// Social Media Redirects
function redirInstagram() {
  window.open("https://www.instagram.com/kkkiboi/", "_blank");
}

function redirGithub() {
  window.open("https://github.com/Muhzky", "_blank");
}

function redirLinkedin() {
  window.open("https://www.linkedin.com/", "_blank");
}

function redirWhatsapp() {
  window.open("https://wa.me/6289697888", "_blank");
}

// Sticky Navbar
function handleNavbar() {
  const nav = document.querySelector(".nav-bio");
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Scroll Animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Smooth scroll for navigation links
function smoothScroll() {
  const links = document.querySelectorAll('.nav-li a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop =
          targetSection.getBoundingClientRect().top + window.pageYOffset - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Parallax effect for profile section
function handleParallax() {
  const profile = document.querySelector(".profile");
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  if (profile) {
    profile.style.transform = `translateY(${rate}px)`;
  }
}

// Add hover effects to project and certificate items
function addHoverEffects() {
  const projectItems = document.querySelectorAll(
    ".project-item, .certificate-item"
  );

  projectItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start typing animation
  

  // Add fade-in classes to sections for scroll animation
  const sections = document.querySelectorAll(
    ".sec-about, .follow-section, .skill, .project, .certificate"
  );
  sections.forEach((section) => {
    section.classList.add("fade-in");
  });

  // Initialize smooth scroll
  smoothScroll();

  // Initialize hover effects
  addHoverEffects();

  // Initial check for scroll animations
  handleScrollAnimations();
});

// Event listeners
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 100);
  handleScrollAnimations();
  // handleParallax()
});

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add click effect to social icons
  const socialIcons = document.querySelectorAll(".icon-s");
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.style.transform = "scale(0.9)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Add loading animation to images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "0";
      this.style.transform = "scale(0.8)";
      setTimeout(() => {
        this.style.transition = "all 0.5s ease";
        this.style.opacity = "1";
        this.style.transform = "scale(1)";
      }, 100);
    });
  });
});
