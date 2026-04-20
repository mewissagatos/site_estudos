// Render Resumo
const resumoContent = document.getElementById('resumo-content');
resumoContent.innerHTML = ''; // clear initial content
resumosData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-surface-container-lowest p-6 rounded-3xl kawaii-shadow border-2 border-transparent hover:border-primary-fixed-dim transition-all group mb-4';
    card.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <span class="bg-secondary-fixed text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">˚꩜｡⋆. 𐙚˚⌒☆</span>
            <span class="material-symbols-outlined text-primary-fixed-dim group-hover:text-primary transition-colors" data-icon="star">star</span>
        </div>
        <h4 class="font-headline-md text-on-surface mb-2">${item.title}</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">${item.content}</p>
    `;
    resumoContent.appendChild(card);
});

// Quiz Logic
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsBox = document.getElementById('options-box');
const quizFeedback = document.getElementById('quiz-feedback');
const nextQuizBtn = document.getElementById('next-quiz-btn');
const scoreDisplay = document.getElementById('quiz-score');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');

totalQNum.textContent = quizData.length;

const letters = ['A', 'B', 'C', 'D'];

function loadQuestion() {
    const currentQ = quizData[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    optionsBox.innerHTML = '';
    quizFeedback.textContent = '';
    quizFeedback.className = 'text-sm font-bold flex items-center gap-2'; // Reset classes
    nextQuizBtn.classList.add('hidden');
    currentQNum.textContent = currentQuestionIndex + 1;

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option group flex items-center gap-4 p-5 rounded-2xl border-2 border-pink-100 bg-white hover:border-primary-container hover:bg-pink-50 transition-all squishy text-left w-full';
        btn.innerHTML = `
            <span class="w-10 h-10 min-w-[40px] rounded-xl bg-pink-100 text-primary flex items-center justify-center font-black group-hover:bg-primary-container group-hover:text-white transition-colors">${letters[index]}</span>
            <span class="font-label-md text-on-surface">${opt}</span>
        `;
        btn.addEventListener('click', () => checkAnswer(index, btn));
        optionsBox.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btn) {
    if (!nextQuizBtn.classList.contains('hidden')) return;

    const currentQ = quizData[currentQuestionIndex];
    const optionsDivs = document.querySelectorAll('.option');

    if (selectedIndex === currentQ.answer) {
        btn.classList.add('correct');
        quizFeedback.innerHTML = '<span class="material-symbols-outlined text-green-500">check_circle</span> <span class="text-green-600">🎉 Correto! Muito bem!</span>';
        score += 100;
        scoreDisplay.textContent = score;
    } else {
        btn.classList.add('wrong');
        optionsDivs[currentQ.answer].classList.add('correct');
        quizFeedback.innerHTML = '<span class="material-symbols-outlined text-red-500">cancel</span> <span class="text-red-600">❌ Ops, reveja o resumo!</span>';
    }

    nextQuizBtn.classList.remove('hidden');
    nextQuizBtn.classList.add('flex'); // Because it uses flex
}

nextQuizBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionText.textContent = 'Quiz Finalizado! 🎉';
        optionsBox.innerHTML = `<div class="text-center p-8 bg-pink-50 rounded-2xl"><p class="text-2xl font-bold text-primary">Sua pontuação final foi: ${score}</p></div>`;
        nextQuizBtn.classList.add('hidden');
        nextQuizBtn.classList.remove('flex');
        quizFeedback.innerHTML = '<span class="text-primary">Volte para os resumos e tente bater seu recorde!</span>';
        
        currentQuestionIndex = 0; 
        score = 0;
        
        const restartBtn = document.createElement('button');
        restartBtn.className = 'w-full mt-4 bg-primary-container text-white px-8 py-3 rounded-2xl font-button kawaii-shadow flex justify-center items-center gap-2 hover:bg-primary transition-all squishy';
        restartBtn.innerHTML = '<span class="material-symbols-outlined">refresh</span> Reiniciar Quiz';
        restartBtn.onclick = () => {
            scoreDisplay.textContent = '0';
            loadQuestion();
        };
        optionsBox.appendChild(restartBtn);
    }
});

loadQuestion(); // Initial load

// SQL Logic
let currentSqlIndex = 0;
const sqlChallengeNum = document.getElementById('sql-challenge-num');
const sqlChallengeText = document.getElementById('sql-challenge-text');
const sqlEditor = document.getElementById('sql-editor');
const sqlTerminal = document.getElementById('sql-terminal');
const runSqlBtn = document.getElementById('run-sql-btn');
const nextSqlBtn = document.getElementById('next-sql-btn');

function loadSqlChallenge() {
    const challenge = sqlChallenges[currentSqlIndex];
    sqlChallengeNum.textContent = challenge.id;
    sqlChallengeText.textContent = challenge.text;
    sqlEditor.value = '';
    sqlTerminal.innerHTML = '<p class="text-pink-300">> Aguardando execução...</p>';
    nextSqlBtn.classList.add('hidden');
    nextSqlBtn.classList.remove('flex');
}

runSqlBtn.addEventListener('click', () => {
    let query = sqlEditor.value.toLowerCase();
    
    // Remove ponto e vírgula e acentos para facilitar a validação
    query = query.replace(/;/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (!query.trim()) {
        sqlTerminal.innerHTML = '<p class="text-red-400">> Erro: A query não pode estar vazia.</p>';
        return;
    }

    const challenge = sqlChallenges[currentSqlIndex];
    let passed = true;
    
    challenge.expectedKeywords.forEach(kw => {
        const normalizedQuery = query.replace(/\s+/g, ' ');
        if (!normalizedQuery.includes(kw) && kw !== "=" && kw !== "<") {
             if(!query.includes(kw)) passed = false;
        }
    });

    if (challenge.id === 2 && query.includes("in") && query.includes("são paulo") && query.includes("rio de janeiro")) {
        passed = true;
    }

    if (passed) {
        sqlTerminal.innerHTML = `<p class="text-green-400">> [SUCCESS] A query parece correta! Query executada com sucesso.</p>`;
        nextSqlBtn.classList.remove('hidden');
        nextSqlBtn.classList.add('flex');
    } else {
        sqlTerminal.innerHTML = `<p class="text-red-400">> [ERROR] Sintaxe ou lógica incorreta. Faltam comandos ou filtros esperados na sua query.</p>
        <p class="text-pink-300">Dica: Leia o enunciado novamente e verifique os nomes das colunas e comandos básicos.</p>`;
    }
});

nextSqlBtn.addEventListener('click', () => {
    currentSqlIndex++;
    if (currentSqlIndex < sqlChallenges.length) {
        loadSqlChallenge();
    } else {
        sqlChallengeText.textContent = 'Parabéns! Você concluiu todos os desafios práticos de SQL.';
        sqlEditor.style.display = 'none';
        runSqlBtn.style.display = 'none';
        nextSqlBtn.classList.add('hidden');
        nextSqlBtn.classList.remove('flex');
        sqlTerminal.innerHTML = '<p class="text-green-400">> VOCÊ ESTÁ PRONTO PARA A PROVA! 🏆</p>';
    }
});

loadSqlChallenge();
