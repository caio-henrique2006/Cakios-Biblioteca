const header = document.querySelector("header");
console.log(header);

// Criando div:
const div_nav = document.createElement("div");
div_nav.setAttribute("class", "navigation");
// Colocando div criado na tag header:
header.appendChild(div_nav);

// Criando tag img:
const main_img = document.createElement("img");
main_img.setAttribute("class", "logo");
main_img.setAttribute("src", "img/book_logo.png");
main_img.setAttribute("alt", "imagem de um livro aberto");
main_img.setAttribute("width", "70px");
// Colocando a imagem na tag header;
div_nav.appendChild(main_img);

const a_sobre = document.createElement("a");
const a_livros = document.createElement("a");
const a_genero = document.createElement("a");
const a_autores = document.createElement("a");

a_sobre.appendChild(document.createTextNode("Sobre"));
a_livros.appendChild(document.createTextNode("Livros"));
a_genero.appendChild(document.createTextNode("Gênero"));
a_autores.appendChild(document.createTextNode("Autores"));

a_sobre.setAttribute("href", "#");
a_livros.setAttribute("href", "#");
a_genero.setAttribute("href", "#");
a_autores.setAttribute("href", "#");

div_nav.appendChild(a_sobre);
div_nav.appendChild(a_livros);
div_nav.appendChild(a_genero);
div_nav.appendChild(a_autores);

const input_search = document.createElement("input");
input_search.setAttribute("type", "text");
input_search.setAttribute("class", "search_bar");
input_search.setAttribute("placeholder", "Search...");

const submit_search_header = document.createElement("input");
submit_search_header.setAttribute("type", "submit");
submit_search_header.setAttribute("class", "submit_search_header");
submit_search_header.setAttribute("value", ">");

div_nav.appendChild(submit_search_header);
div_nav.appendChild(input_search);

