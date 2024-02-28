function logar() {
  var usuario = document.getElementById("usuário").value;
  var senha = document.getElementById("senha").value;

  if (usuario == "Bruno" && senha == "8240") {
    location.href = home.html;
  } else {
    alert("Usuário ou senha incorretos");
  }
}
