document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

document.querySelector('.button input[type="button"]').addEventListener('click', function() {
    var name = document.querySelector('input[placeholder="Enter your name"]').value;
    var email = document.querySelector('input[placeholder="Enter your email"]').value;
    var message = document.querySelector('textarea[placeholder="message"]').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && email && message) {
        if (emailPattern.test(email)) {
            alert("Message sent successfully!");

            document.querySelector('input[placeholder="Enter your name"]').value = '';
            document.querySelector('input[placeholder="Enter your email"]').value = '';
            document.querySelector('textarea[placeholder="message"]').value = '';
        } else {
            alert("Please enter a valid email address.");
        }
    } else {
        alert("Please fill in all fields.");
    }
});
