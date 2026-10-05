/* ============================================================
   Iguaçu Seguro — FUNCIONALIDADES + BOOT
   Interações: galeria (busca/filtro), quiz, tema, menu,
   voltar ao topo. No final, inicia o router.
   ============================================================ */

/* --- Galeria: busca em tempo real + filtro por grupo --- */
let grupoAtivo = "todas";

function iniciarGaleria(){
  const lista = document.getElementById("lista-animais");
  const busca = document.getElementById("busca");
  const render = () => {
    const termo = (busca?.value || "").toLowerCase();
    const filtrados = ANIMAIS.filter(a =>
      (grupoAtivo === "todas" || a.grupo === grupoAtivo) &&
      (a.nome.toLowerCase().includes(termo) || a.cientifico.toLowerCase().includes(termo)));
    lista.innerHTML = filtrados.length
      ? filtrados.map(cardAnimal).join("")
      : `<p style="text-align:center;padding:2rem">Nenhum animal encontrado para "${termo}".</p>`;
  };
  busca?.addEventListener("input", render);
  document.querySelectorAll(".filtros button").forEach(b =>
    b.addEventListener("click", () => {
      grupoAtivo = b.dataset.grupo;
      document.querySelectorAll(".filtros button").forEach(x => x.classList.toggle("ativo", x === b));
      render();
    }));
  render();
}

/* --- Quiz: feedback imediato + recorde em localStorage --- */
function iniciarQuiz(){
  const area = document.getElementById("quiz-area");
  const recordeEl = document.getElementById("recorde");
  const recorde = localStorage.getItem("iguacu-seguro-recorde") || 0;
  recordeEl.textContent = recorde > 0 ? `🏆 Seu recorde: ${recorde}/6` : "";
  let atual = 0, acertos = 0;

  const mostrar = () => {
    if(atual >= QUIZ.length){
      if(acertos > Number(recorde)){
        localStorage.setItem("iguacu-seguro-recorde", acertos);
        recordeEl.textContent = `🏆 Novo recorde: ${acertos}/6!`;
      }
      area.innerHTML = `<div class="placar">Você acertou ${acertos} de ${QUIZ.length}! 🎉</div>
        <p style="text-align:center">${acertos >= 5 ? "Excelente! Você está preparado." : "Revise as seções de Socorros e Prevenção e tente de novo."}</p>
        <p style="text-align:center;margin-top:1rem"><button class="btn" onclick="location.reload()">🔄 Refazer quiz</button></p>`;
      return;
    }
    const q = QUIZ[atual];
    area.innerHTML = `<p><strong>Pergunta ${atual+1} de ${QUIZ.length}</strong></p>
      <p style="margin:.6rem 0">${q.p}</p>
      ${q.ops.map((op,i)=>`<button class="quiz-op" data-i="${i}">${op}</button>`).join("")}
      <div id="feedback"></div>`;
    area.querySelectorAll(".quiz-op").forEach(btn =>
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.i);
        area.querySelectorAll(".quiz-op").forEach((b,j) => {
          b.disabled = true;
          if(j === q.c) b.classList.add("certa");
          else if(j === i) b.classList.add("errada");
        });
        if(i === q.c) acertos++;
        document.getElementById("feedback").innerHTML =
          `<div class="alerta" style="margin-top:.8rem">${i === q.c ? "✅" : "❌"} ${q.exp}</div>
           <p style="text-align:center"><button class="btn" id="prox">${atual === QUIZ.length-1 ? "Ver resultado" : "Próxima →"}</button></p>`;
        document.getElementById("prox").addEventListener("click", () => { atual++; mostrar(); });
      }));
  };
  mostrar();
}

/* --- Tema claro/escuro (salvo no localStorage) --- */
(function temaInicial(){
  const salvo = localStorage.getItem("iguacu-seguro-tema") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = salvo;
})();

/* --- Menu hambúrguer --- */
document.getElementById("menuBtn").addEventListener("click", () =>
  document.getElementById("nav").classList.toggle("aberto"));
document.getElementById("nav").addEventListener("click", e => {
  if(e.target.tagName === "A") document.getElementById("nav").classList.remove("aberto");
});

/* --- Botão voltar ao topo --- */
const btnTopo = document.getElementById("topo");
window.addEventListener("scroll", () =>
  btnTopo.style.display = window.scrollY > 400 ? "block" : "none");
btnTopo.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

/* --- BOOT: inicia o router --- */
rotear();