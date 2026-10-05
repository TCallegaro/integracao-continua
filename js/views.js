/* ============================================================
   Iguaçu Seguro — VIEWS
   Uma função por rota. Cada função devolve o HTML da "página".
   Para adicionar uma nova página: crie a view aqui e cadastre
   a rota no router.js.
   ============================================================ */

const viewInicio = () => `
  <section>
    <div class="hero">
      <h1>🐍🛡️ Iguaçu Seguro</h1>
      <p>Prevenção e primeiros socorros em acidentes com animais peçonhentos na Região do Iguaçu.</p>
      <p style="font-size:.9rem">Baseado no guia do Projeto Onças do Iguaçu (ICMBio/WWF-Brasil) e no app Animais Peçonhentos do Ministério da Saúde.</p>
    </div>
    <div class="alerta">⚠️ Em caso de picada, procure atendimento médico <strong>imediatamente</strong> — o soro antiofídico é o tratamento eficaz e é gratuito pelo SUS.</div>
    <div class="grid">
      ${cardAtalho("🚑","Emergência","Telefones de socorro e rede de atendimento.","/emergencia")}
      ${cardAtalho("🩹","Primeiros Socorros","O que fazer — e o que nunca fazer — em uma picada.","/socorros")}
      ${cardAtalho("🛡️","Prevenção","Cuidados no mato, em casa e com aranhas e escorpiões.","/prevencao")}
      ${cardAtalho("🐍","Animais da Região","19 espécies com busca e filtro por grupo.","/animais")}
      ${cardAtalho("🎯","Quiz","Teste seus conhecimentos e salve seu recorde.","/quiz")}
      ${cardAtalho("💉","Soro Antiofídico","Como o soro é produzido, em 6 passos.","/soro")}
    </div>
  </section>`;

const viewEmergencia = () => `
  <section>
    <h2>🚑 Emergência</h2>
    <p>Em caso de acidente, contate imediatamente o <strong>SAMU 192</strong> ou o <strong>Corpo de Bombeiros 193</strong>.</p>
    <div class="grid">
      <div class="card">${btnTel("192","📞 SAMU 192")}<p class="fonte">Serviço de Atendimento Móvel de Urgência</p></div>
      <div class="card">${btnTel("193","🚒 Bombeiros 193")}<p class="fonte">Corpo de Bombeiros</p></div>
      <div class="card">
        ${btnTel("+554535211951","🏥 Hospital Municipal 24h")}
        <p><strong>Hospital Municipal Padre Germano Lauck</strong></p>
        <p class="fonte">Rua Adoniran Barbosa, 370, Jd. das Bandeiras — Foz do Iguaçu<br>
        Tel. 3521-1951 · Emergências 3521-1998 / 3521-1809 · Atendimento 24h<br>
        <strong>Referência para acidentes com cobras e lagarta Lonomia.</strong></p>
      </div>
      <div class="card"><h3>🏥 UPA</h3><p>Unidade de Pronto Atendimento — referência para acidentes com <strong>aranhas e escorpiões</strong>.</p></div>
    </div>
    <p>💊 O atendimento e o tratamento são realizados na Rede SUS de forma <strong>gratuita</strong>.</p>
    <p>☎️ Consulte o <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/ciatox" target="_blank" rel="noopener">Centro de Informação e Assistência Toxicológica (CIATox)</a> da sua região.</p>
  </section>`;

const viewSocorros = () => `
  <section>
    <h2>🩹 Primeiros Socorros — Picada de Cobra</h2>
    <h3>✅ O que fazer</h3>
    <ol class="passos">
      <li><strong>Afaste-se da cobra</strong> para evitar uma segunda picada.</li>
      <li>Se possível, <strong>fotografe a cobra</strong> ou memorize a aparência para relatar no hospital — nunca tente capturá-la.</li>
      <li>A vítima deve ficar <strong>deitada e o mais calma possível</strong> — não andar, não correr (isso acelera a circulação do veneno).</li>
      <li>Manter a vítima <strong>hidratada</strong>, com pequenos goles de água.</li>
      <li><strong>Remover anéis, pulseiras e roupas apertadas</strong> do membro picado (o inchaço é esperado).</li>
      <li>Procurar o <strong>hospital o mais rápido possível</strong> — só o médico pode prescrever o soro adequado.</li>
    </ol>
    <h3 style="margin-top:1.2rem">🚫 O que NUNCA fazer</h3>
    <ul class="nunca">
      <li>Nunca "chupar" o local da picada para tirar o veneno</li>
      <li>Nunca fazer torniquete ou garrote — piora muito o quadro</li>
      <li>Nunca cortar o local da picada</li>
      <li>Não colocar folhas, pó de café ou qualquer substância na ferida</li>
      <li>Não oferecer bebidas alcoólicas</li>
      <li>Não dar medicamento por conta própria (nem analgésicos sem orientação)</li>
    </ul>
  </section>`;

const viewPrevencao = () => `
  <section>
    <h2>🛡️ Prevenção</h2>
    <div class="grid">
      <div class="card"><h3>🌲 No mato / campo</h3><ul class="sim">
        <li>Olhe bem onde pisa; use perneiras ou botas que protejam o tornozelo</li>
        <li>Nunca mexa em cobras, nem com galhos</li>
        <li>Se a cobra estiver em movimento, deixe-a seguir — não passe na frente</li>
        <li>Cuidado com cobras que parecem mortas (podem estar paradas)</li>
        <li>Ao pegar lenha, use ferramenta — nunca a mão</li>
        <li>Atenção em troncos de árvores (Lonomia)</li>
        <li>Cuidado onde coloca as mãos: buracos, pedras, pilhas de madeira</li>
      </ul></div>
      <div class="card"><h3>🏠 Em casa / quintal</h3><ul class="sim">
        <li>Não acumule tralhas, entulho, folhas, palha, madeira ou grama cortada</li>
        <li>Cuide do lixo e restos de comida que atraem ratos e insetos (alimento das cobras)</li>
        <li>Feche portas, janelas e frestas; tampe buracos no alicerce e paredes</li>
        <li>No verão e época seca, cuidado com água acumulada</li>
        <li>Não deixe crianças brincarem perto de possíveis esconderijos</li>
        <li>💡 Dica: a vibração do cortador de grama ligado afasta cobras — ligue-o antes de trabalhar no quintal</li>
      </ul></div>
      <div class="card"><h3>🕷️ Aranhas e escorpiões</h3><ul class="sim">
        <li>Sacuda sapatos e roupas antes de vestir; verifique roupas de cama</li>
        <li>Cuidado ao mexer em enxadas, pás, madeira e pedras empilhadas</li>
        <li>Use luvas em serviços de jardinagem</li>
        <li>Cuidado em bananeiras e folhagens (aranha-armadeira)</li>
      </ul></div>
      <div class="card"><h3>🐸 Sapos</h3><ul class="sim">
        <li>O veneno fica em glândulas atrás dos olhos e só sai se comprimida</li>
        <li>"Urina de sapo cega" é mito</li>
        <li>Não jogue sal — eles respiram pela pele e o sal sufoca com dor</li>
        <li>Deixe-os em paz</li>
      </ul></div>
    </div>
  </section>`;

const viewAnimais = () => `
  <section>
    <h2>🐍 Animais da Região</h2>
    <input id="busca" type="search" placeholder="🔍 Buscar por nome ou nome científico…" aria-label="Buscar animal">
    <div class="filtros" role="group" aria-label="Filtrar por grupo">
      ${GRUPOS.map((g,i)=>`<button data-grupo="${g.id}" class="${i===0?"ativo":""}">${g.label}</button>`).join("")}
    </div>
    <div id="lista-animais"></div>
  </section>`;

const viewQuiz = () => `
  <section>
    <h2>🎯 Teste seus conhecimentos</h2>
    <p>6 perguntas sobre prevenção e primeiros socorros. Responda e veja o feedback na hora!</p>
    <div class="placar" id="recorde"></div>
    <div class="card" id="quiz-area"></div>
  </section>`;

const viewSoro = () => `
  <section>
    <h2>💉 Como o soro antiofídico é produzido</h2>
    <ol class="timeline">
      <li data-n="1"><strong>Extração e liofilização</strong> — o veneno é retirado da cobra e liofilizado.</li>
      <li data-n="2"><strong>Imunização do cavalo</strong> — o veneno diluído (antígeno) é aplicado no cavalo para induzir a produção de anticorpos.</li>
      <li data-n="3"><strong>Coleta</strong> — após um período, o sangue é retirado do cavalo.</li>
      <li data-n="4"><strong>Separação do plasma</strong> — o plasma, rico em anticorpos, é separado do sangue.</li>
      <li data-n="5"><strong>Purificação</strong> — o plasma é purificado industrialmente e se torna o soro (antiveneno).</li>
      <li data-n="6"><strong>Soros específicos</strong> — cada tipo de cobra tem veneno próprio: são necessários soros distintos ou combinações.</li>
    </ol>
  </section>`;

const viewRede = () => `
  <section>
    <h2>🏥 Rede de Atendimento</h2>
    <div class="grid">
      <div class="card"><h3>Hospital Municipal Padre Germano Lauck</h3>
        <p>Rua Adoniran Barbosa, 370, Jd. das Bandeiras — Foz do Iguaçu</p>
        <p class="fonte">Tel. 3521-1951 · Emergências 3521-1998 / 3521-1809 · 24h</p>
        <p class="fonte">Referência para acidentes com <strong>cobras e Lonomia</strong>.</p>
        ${btnTel("+554535211951","📞 Ligar")}</div>
      <div class="card"><h3>UPA</h3><p>Unidade de Pronto Atendimento — referência para <strong>aranhas e escorpiões</strong>.</p></div>
      <div class="card"><h3>Links oficiais</h3>
        <p>• <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/ciatox" target="_blank" rel="noopener">CIATox — Centros de Assistência Toxicológica</a></p>
        <p>• <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos/hospitais-de-referencia" target="_blank" rel="noopener">Hospitais de Referência para soroterapia</a></p></div>
    </div>
    <div class="card"><h3>💡 Curiosidades</h3><ul class="sim">
      <li>O risco de morrer em acidente de carro é <strong>400x maior</strong> que por picada de cobra</li>
      <li>Cobras ficam na delas — acidentes acontecem quando se mexe com elas</li>
      <li>Os anéis do chocalho da cascavel indicam trocas de pele, não a idade</li>
      <li>Onças-pintadas comem cobras e ajudam a controlar as populações — <strong>Projeto Onças do Iguaçu</strong>: tel. (45) 3521-3830 · WhatsApp (45) 9.9809-7698</li>
    </ul></div>
  </section>`;