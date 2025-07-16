    function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("show");
    }
    function toggleTheme() {
      document.body.classList.toggle("dark");
      const icon = document.querySelector("nav ul li button");
      icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    }
    function handleSubmit(event) {
      event.preventDefault();
      alert("Message submitted! I will contact you soon.");
      event.target.reset();
    }
    const text = ["Web Developer", "Frontend Expert", "Creative Coder"];
    let i = 0, j = 0, currentText = '', isDeleting = false;
    function type() {
      if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
          currentText = text[i].substring(0, j++);
        }
        if (isDeleting && j >= 0) {
          currentText = text[i].substring(0, j--);
        }
        document.getElementById("typing").textContent = currentText;
        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
          isDeleting = false;
          i = (i + 1) % text.length;
        }
      }
      setTimeout(type, isDeleting ? 60 : 100);
    }
    type();
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));