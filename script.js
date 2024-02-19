function Ativar() {
  const html = document.documentElement
  //essa função confere sozinha se tem ou não a classe light
  html.classList.toggle("light")
  // trocando img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-qq.png")
    img.setAttribute("alt", "My beautiful GF, damn I really like her")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Picture of Ruan Dias smiling in the gym, with his glasses,backwards hat and a blue shirt"
    )
  }
}
