/* ============================================================
   Iguaçu Seguro — ROUTER
   Navegação SPA por hash (#/rota), sem recarregar a página.
   Suporta voltar/avançar do navegador (evento hashchange).
   Para adicionar uma nova página: cadastre a rota abaixo.
   ============================================================ */

const ROTAS = {
  "/inicio": viewInicio, "/emergencia": viewEmergencia, "/socorros": viewSocorros,
  "/prevencao": viewPrevencao, "/animais": viewAnimais, "/quiz": viewQuiz,
  "/soro": viewSoro, "/rede": viewRede
};

function rotear(){
  const caminho = location.hash.slice(1) || "/inicio";
  const view = ROTAS[caminho] || viewInicio;
  document.getElementById("app").innerHTML = view();
  window.scrollTo({top:0});
  document.querySelectorAll("nav a").forEach(a =>
    a.classList.toggle("ativo", a.dataset.rota === caminho));
  // Inicializa funcionalidades específicas de cada "página"
  if(caminho === "/animais") iniciarGaleria();
  if(caminho === "/quiz") iniciarQuiz();
}

window.addEventListener("hashchange", rotear);