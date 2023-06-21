class MeuError extends Error {
  constructor(message) {
    super(message);
    this.name = "Meu Erro";
  }
}

class Produto {
  constructor(nome, dataCadastro, descricao, preco) {
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }

  mostrarProduto() {
    if (this.nome !== "" && this.descricao !== "" && this.preco !== "" && this.dataCadastro !== "") {
      return `${this.nome} ${this.dataCadastro} ${this.descricao} ${this.preco}`;
    } else {
      throw new MeuError("Erro detectado");
    }
  }
}



const produto = new Produto("Bicicleta", "2023-05-25", "Aro 29", "10000");
console.log(produto.mostrarProduto());

class ProdutoDestaque extends Produto {
  constructor(nome, dataCadastro, descricao, preco, imagemDestaque) {
    super(nome, dataCadastro, descricao, preco);
    this.imagemDestaque = imagemDestaque;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
    } catch (erro) {
      console.log(erro.stack)
    }
  }

  mostrarProdutoDestaque() {
    return `
      <div>${this.nome}</div>
      <img src="${this.imagemDestaque}">
      <div>${this.dataCadastro}</div>
      <div>${this.descricao}</div>
      <div>${this.preco}</div>
      `;
     }
  }


const produto2 = new Produto("Bike Porshe", "2023-05-25", "Nitro Colombiano", "50000");
const produto3 = new Produto("Porshe Boxter 718", "2023-03-15", "Carro Esportivo", "1000000");

const produtoDestaque = new ProdutoDestaque("Porshe 911","2023-05-25", "Carro dos Sonhos","100000","https://autoentusiastas.com.br/ae/wp-content/uploads/2020/07/Porsche-911_Turbo_S-2021-1024-02.jpg");


console.log(produto.mostrarProduto());
console.log(produto2.mostrarProduto());
console.log(produtoDestaque.mostrarProdutoDestaque());


const produto1Elemento = document.getElementById("lista-produtos");
produto1Elemento.insertAdjacentHTML("afterbegin", produto.mostrarProduto());

const produto3Elemento = document.getElementById("lista-produtos");
produto3Elemento.insertAdjacentHTML("afterbegin", produto3.mostrarProduto());

const produtoDestaqueElemento = document.getElementById("lista-produtos");
const produtoDestaqueHTML = produtoDestaque.mostrarProdutoDestaque();
produtoDestaqueElemento.insertAdjacentHTML("afterbegin", produtoDestaqueHTML);


class ProdutosLista extends Produto{
  constructor (nome, dataCadastro, descricao,  preco, produtoDestaque, descricao2, preco2, nome2, descricao3, preco3, nome3, descricao4, preco4){
    super(nome, dataCadastro, descricao, preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
    this.imagemDestaque = imagemDestaque;
    this.nome = nome;
    this.descricao2 = descricao2;
    this.preco2 = preco2;
    this.nome3 = nome3;
    this.descricao3 = descricao3;
    this.preco3 = preco3;
    this.nome4 = nome4;
    this.descricao4 = descricao4;
    this.preco4 = preco4;
  }
}

const produtosLIsta = new ProdutosdaLista("Porshe", "22-06-23", "carro esportivo", "R$ 560.000", "https://th.bing.com/th/id/R.b8ccc8d85357ac8a9917f4eddd467001?rik=IUUcc5kEnGfCRA&pid=ImgRaw&r=0", "Carro esportivo", "R$100.000",  "carro de 650cv", "R$ 30.000",  "carro para corrida", "R$ 80.000");
const ListaProdutos = document.getElementById(ProdutosLista)
ProdutosLista.insertAdjacentHTML("afterbegin", ProdutosLista.mostrarProdutolista());