const botao = document.getElementById("botaoTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      botao.style.display = "block";
    } else {
      botao.style.display = "none";
    }
  });

  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }