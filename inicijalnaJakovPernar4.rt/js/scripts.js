document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
  
    if(contactForm) {
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
  
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
        if(name === "" || email === "" || message === "") {
          alert("Sva polja su obavezna.");
          return;
        }
  
        if(!email.match(emailPattern)) {
          alert("Molimo unesite ispravan e-mail.");
          return;
        }
  
        alert("Poruka je uspješno poslana!");
        this.reset();
      });
    }
  });
  