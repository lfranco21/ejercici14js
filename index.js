const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  alert("click en el boton");
});

  $(() => {
    $("#boton")
    .click(() => {
      console.log("estoy usando jquery");
    });

  })