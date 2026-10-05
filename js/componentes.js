/* ============================================================
   Iguaçu Seguro — COMPONENTES
   Funções puras que recebem dados e devolvem HTML.
   Fácil de testar e reutilizar em novas telas.
   ============================================================ */

/** Card de atalho usado na página inicial */
const cardAtalho = (icone, titulo, texto, rota) =>
  `<a class="card" href="#${rota}" style="text-decoration:none;color:inherit">
     <div class="icone">${icone}</div><h3>${titulo}</h3><p>${texto}</p></a>`;

/** Botão de ligação direta (tel:) */
const btnTel = (tel, label, extra="") =>
  `<a class="btn btn-vermelho btn-grande ${extra}" href="tel:${tel}">${label}</a>`;

/** Ficha expansível (accordion) de um animal */
function cardAnimal(a){
  const sintomas = a.sintomas.map(s=>`<li>${s}</li>`).join("");
  const tag = a.naoPeconhenta ? '<span class="tag nao-peconhenta">não peçonhenta</span>' : '<span class="tag">peçonhenta</span>';
  const trat = a.tratamento ? `<p><strong>Tratamento:</strong> ${a.tratamento}</p>` : "";
  const onde = a.onde !== "—" ? `<div class="onde">🏥 <strong>Onde procurar atendimento:</strong> ${a.onde}</div>` : "";
  return `<details data-nome="${a.nome.toLowerCase()} ${a.cientifico.toLowerCase()}">
    <summary>${a.icone} <strong>${a.nome}</strong> <em style="font-weight:400;font-size:.85rem">(${a.cientifico})</em>${tag}</summary>
    <div class="corpo">
      <p>${a.desc}</p>
      ${a.sintomas.length && !a.naoPeconhenta ? `<p><strong>Sintomas:</strong></p><ul>${sintomas}</ul>` : `<ul>${sintomas}</ul>`}
      ${trat}${onde}
    </div></details>`;
}