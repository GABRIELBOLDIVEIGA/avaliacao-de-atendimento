class View {
  constructor(id) {
    this._id = id;
    this._span = document.querySelector("#mNota");
    this._span.innerHTML = this.template(this._id);
    this.mudaTela();
  }

  template(nota) {
    return `
    Você selecionou ${nota} de 5
    `;
  }

  mudaTela() {
    let avaliacao = document.querySelector(".div-avalicao");
    avaliacao.classList.add("invisivel");

    let agradecimento = document.querySelector(".div-agradecimento");
    agradecimento.classList.remove("invisivel");
  }
}
