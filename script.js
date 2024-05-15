function checkAnswer(answer) {
    var mensagem = document.getElementById("mensagem-alternativa");
    mensagem.classList.remove("hidden");
    if (answer === "POS Controle") {
        mensagem.textContent = "ISSO MESMO! O POS Controle é a opção ideal para o cliente.";
        mensagem.classList.remove("bg-red-600");
        mensagem.classList.add("bg-green-600");
    } else {
        mensagem.textContent = "Resposta incorreta. Tente novamente.";
        mensagem.classList.remove("bg-green-600");
        mensagem.classList.add("bg-red-600");
    }
}

function toggleProductInfo(productNumber) {
    var productInfo = document.getElementById("product-info-" + productNumber);
    var button = document.querySelector(".toggle-button-" + productNumber);
    var isOpen = !productInfo.classList.contains("hidden");

    var allProductInfos = document.querySelectorAll("[id^='product-info-']");
    allProductInfos.forEach(function(info) {
        if (!info.classList.contains("hidden")) {
            info.classList.add("hidden");
            var btn = info.previousElementSibling.querySelector("button");
            btn.textContent = "+";
        }
    });

    if (!isOpen) {
        productInfo.classList.remove("hidden");
        button.textContent = "-";
    } else {
        productInfo.classList.add("hidden");
        button.textContent = "+";
    }
}
