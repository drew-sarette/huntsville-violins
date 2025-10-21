const currentYear = new Date().getFullYear()
document.querySelectorAll("span.currentyear").forEach(span => span.textContent = currentYear);