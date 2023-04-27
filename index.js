const contatos = [
  { nome: "Lucas", fone: "(11) 98888-7777" },
  { nome: "Ana", fone: "(21) 97777-8888" },
  { nome: "Carlos", fone: "(31) 96666-5555" }
];
const root = document.querySelector("#main");

function Titulo(nome) {
  const titulo = document.createElement("h2");
  titulo.textContent = nome;
  return titulo;
}
function InputText(nome) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Nome do contato";
  input.name = name;
  return input;
}

function InputTel(fone) {
  const input = document.createElement("input");
  input.type = "tel";
  input.placeholder = "Fone do contato";
  input.name = name;
  return input;
}

function InputSubmit() {
  const input = document.createElement("input");
  input.type = "submit";
  input.value = "Enviar dados do formulário";
  return input;
}
function FormContato() {
  const form = document.createElement("form");
  const inputNome = InputText("nome");
  const inputFone = InputTel("fone");
  const inputSubmit = InputSubmit();

  form.appendChild(inputNome);
  form.appendChild(inputFone);
  form.appendChild(inputSubmit);

  form.addEventListener("submit", handleSubmit);

  return form;
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const novoContato = {};
  for (const [key, value] of formData.entries()) {
    novoContato[key] = value;
  }
  contatos.push(novoContato);
  navegaPara("contatos");
}
function ListaContato() {
  const tabela = document.createElement("table");
  const cabecalho = document.createElement("thead");
  const cabecalhoLinha = document.createElement("tr");
  const cabecalhoNome = document.createElement("th");
  const cabecalhoFone = document.createElement("th");
  const corpo = document.createElement("tbody");

  cabecalhoNome.textContent = "Nome";
  cabecalhoFone.textContent = "Telefone";
  cabecalhoLinha.appendChild(cabecalhoNome);
  cabecalhoLinha.appendChild(cabecalhoFone);
  cabecalho.appendChild(cabecalhoLinha);
  tabela.appendChild(cabecalho);

  contatos.forEach((contato) => {
    const linha = document.createElement("tr");
    const colunaNome = document.createElement("td");
    const colunaFone = document.createElement("td");
    colunaNome.textContent = contato.nome;
    colunaFone.textContent = contato.fone;
    linha.appendChild(colunaNome);
    linha.appendChild(colunaFone);
    corpo.appendChild(linha);
  });

  tabela.appendChild(corpo);
  return tabela;
}
function MeusContatos() {
  root.innerHTML = "";
  root.appendChild(Titulo("Meus Contatos"));
  root.appendChild(ListaContato());
}
function NovoContato() {
  root.innerHTML = '';
  root.appendChild(Titulo("Novo Contato"));
  root.appendChild(FormContato());
}
function limpaConteudo() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}
function ativaLink(rota) {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    if (link.textContent !== rota) {
      link.classList.remove("ativo");
    } else {
      link.classList.add("ativo");
    }
  });
}
function navegaPara(rota) {
  limpaConteudo();
  ativaLink(rota);
  if (rota === "Meus Contatos") {
    root.appendChild(MeusContatos());
  } else if (rota === "Novo Contato") {
    root.appendChild(NovoContato());
  }
}
function adicionaClickListener() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      navegaPara(link.textContent);
    });
  });
}
adicionaClickListener();
navegaPara('Meus Contatos');

