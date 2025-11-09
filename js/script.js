document.addEventListener("DOMContentLoaded", function() {

    // Menu Hambúrguer
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    // Faz o menu aparecer e desaparecer ao clicar
    if (hamburger && menu) {
        hamburger.addEventListener("click", function() {
            menu.classList.toggle("show");
            hamburger.classList.toggle("active");
        });
    }

    // Formulário de contato
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            // O HTML já valida os campos obrigatórios (required)
            if (!form.checkValidity()) {
                return; // o navegador o erro padrão
            }

            event.preventDefault(); // impede o envio automático

            // Pega os dados digitados
            let nome = document.getElementById("txtNome").value;
            let email = document.getElementById("txtEmail").value;
            let telefone = document.getElementById("telefone").value;
            let assunto = document.getElementById("txtAssunto").value;
            let mensagem = document.getElementById("txtMensagem").value;

            // Cria um objeto com as informações
            let dados = {
                nome: nome,
                email: email,
                telefone: telefone,
                assunto: assunto,
                mensagem: mensagem,
                dataEnvio: new Date().toLocaleString()
            };

            // Salva os dados no navegador
            localStorage.setItem("ultimoContato", JSON.stringify(dados)); // guarda mesmo se fechar o site
            sessionStorage.setItem("mensagemTemporaria", mensagem); // apaga ao fechar a aba

            // Mostra alerta de sucesso
            alert("Mensagem enviada com sucesso!");

            // Limpa o formulário
            form.reset();
        });
    }

    if (window.location.href.includes("contato.html")) {
        let ultimo = localStorage.getItem("ultimoContato");

        if (ultimo) {
            let dados = JSON.parse(ultimo);
            let info = document.createElement("p");
            info.textContent = "Último envio: " + dados.nome + " (" + dados.email + ") em " + dados.dataEnvio;
            info.style.fontSize = "13px";
            info.style.color = "#555";
            info.style.marginTop = "20px";
            document.querySelector("main").appendChild(info);
        }
    }

});
