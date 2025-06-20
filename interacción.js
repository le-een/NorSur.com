const usuarioValido = "IsabellaBueckertJV";
    const contrasenaValida = "3F3e6n8u9X";

    document.getElementById("logear").addEventListener("submit", function(event) {
      event.preventDefault();

      const usuarioIngresado = document.getElementById("nombre").value;
      const contrasenaIngresada = document.getElementById("contraseña").value;

      if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        window.location.href = "admin.html";
      } else {
        document.getElementById("mensaje").textContent = "Usuario o contraseña incorrectos.";
      }
    });