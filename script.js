const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const verificarButton = document.getElementById("verificar");
const successPopup = document.getElementById("success-popup");
const errorPopup = document.getElementById("error-popup");
const nextLevelButton = document.getElementById("next-level");
const closeErrorButton = document.getElementById("close-error");

verificarButton.addEventListener("click", () => {
    const respuesta1 = input1.value.toLowerCase();
    const respuesta2 = input2.value.toLowerCase();

    if (respuesta1 === "150" && respuesta2 === "imposible") {
        input1.disabled = true;
        input2.disabled = true;
        successPopup.style.display = "flex";
    } else {
        errorPopup.style.display = "flex";
         if (respuesta1 !== "150") {
            input1.value = "";
        }
        if(respuesta2 !== "imposible"){
            input2.value = "";
        }
    }
});

nextLevelButton.addEventListener("click", () => {
    window.location.href = "prueba2.html";
});

closeErrorButton.addEventListener("click", () => {
    errorPopup.style.display = "none";
});
