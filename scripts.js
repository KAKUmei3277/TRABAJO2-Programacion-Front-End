document.addEventListener("DOMContentLoaded", function() {
    var linkContainer = document.getElementById("button-section");

    linkContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            if (confirm("Antes de empezar la diversion, recuerda revisar las promocines actuales y vincular tus cuentas para obtener tus tiros GRATIS")) {
                window.location.href = linkContainer.querySelector("a").href;
            }
        }
    });
});