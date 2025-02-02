const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("jjEkwN4Q-txHcdJgN"); // Substitua pela sua chave pública real

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        let templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_32e9q2r", "template_mkqn5a1", templateParams)
            .then(function (response) {
                // Sucesso
                document.getElementById("status-message").innerText = "Mensagem enviada com sucesso! 😀";
                document.getElementById("status-message").style.color = "green";
                document.getElementById("status-message").style.fontWeight = "bold";
                document.getElementById("status-message").style.fontSize = "18px";
                document.getElementById("status-message").style.textAlign = "center";
                document.getElementById("status-message").style.padding = "10px";
                document.getElementById("contact-form").reset(); // Limpa o formulário
            }, function (error) {
                // Falha
                document.getElementById("status-message").innerText = "Erro ao enviar mensagem. Tente novamente! 😞";
                document.getElementById("status-message").style.color = "red";
                document.getElementById("status-message").style.fontWeight = "bold";
                document.getElementById("status-message").style.fontSize = "18px";
                document.getElementById("status-message").style.textAlign = "center";
                document.getElementById("status-message").style.padding = "10px";
                console.error("Erro ao enviar:", error); // Para depuração
            });
    });
});
