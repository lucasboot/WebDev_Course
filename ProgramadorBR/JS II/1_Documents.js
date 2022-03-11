let p1 = document.getElementById("p1");
let paragrafos=document.getElementsByClassName("paragrafo");
//console.log(p1);
//console.log(paragrafos);

let tp = document.getElementsByTagName("p");
//console.log(tp[0]);

let p = document.getElementById("p1");
//p.innerText = "Mais novo"; Tudo que está aparecendo
//p.textContent = "Mais ainda"; Tudo, inclusive oq nao está visível
p.innerHTML ="<h3>Novo conteúdo</h3";
p.style = "color: blue";