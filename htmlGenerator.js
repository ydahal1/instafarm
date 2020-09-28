document.addEventListener("DOMContentLoaded", function(event) {
  // Creating all btns
  for (i = 0; i < 100; i++) {
    $(".body").append(
      '<div class="btnDiv"><button class="sqdOP">(' +
        i +
        ") Follow </button></div>"
    );
  }
});
