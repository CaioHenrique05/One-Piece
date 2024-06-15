const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".btn.selecionado")
    botaoSelecionado.classList.remove("selecionado")

    btn.classList.add("selecionado")
  })
})