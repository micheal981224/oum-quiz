const LETTERS = ['A', 'B', 'C', 'D'];

const state = {
  screen: 'home', selectedCourse: null, questionCount: 10,
  questions: [], currentQ: 0, answered: false,
  selectedOption: null, score: 0, wrongAnswers: 0,
};

// SCREENS
function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');
  state.screen = n;
}

// HOME 
function initHome() {
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.course-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedCourse = card.dataset.course;
      document.getElementById('settingsPanel').style.display = 'block';
      const btn = document.getElementById('startBtn');
      btn.disabled = false;
      btn.textContent = `Start ${state.questionCount} Questions →`;
      hideError();
    });
  });

  const slider = document.getElementById('qcount');
  const val    = document.getElementById('qcountval');
  slider.addEventListener('input', () => {
    state.questionCount = parseInt(slider.value);
    val.textContent = state.questionCount;
    if (state.selectedCourse)
      document.getElementById('startBtn').textContent = `Start ${state.questionCount} Questions →`;
  });

  document.getElementById('startBtn').addEventListener('click', startQuiz);
}

function showError(msg) {
  const b = document.getElementById('homeError');
  b.innerHTML = msg; b.style.display = 'block';
}
function hideError() { document.getElementById('homeError').style.display = 'none'; }

// QUIZ GENERATION 
async function startQuiz() {
  state.questions = []; state.currentQ = 0; state.score = 0;
  state.wrongAnswers = 0; state.answered = false; state.selectedOption = null;
  hideError();
  showScreen('loading');
  document.getElementById('loadingTitle').textContent =
    `Generating ${state.questionCount} questions for ${COURSES[state.selectedCourse].name}…`;

  try {
    state.questions = await fetchQuestions();
    renderQuiz();
    showScreen('quiz');
  } catch (err) {
    showScreen('home');
    showError(`<strong>Error:</strong> ${err.message}`);
  }
}

function buildPrompt() {
  const course = COURSES[state.selectedCourse];
  return `You are an expert exam question generator for OUM (Open University Malaysia) students.

Generate exactly ${state.questionCount} unique MCQ questions for: ${state.selectedCourse} — ${course.name}

Course content:
${course.context}

STRICT RULES:
- Generate EXACTLY ${state.questionCount} questions.
- Each question has EXACTLY 4 options. Only ONE is correct.
- Spread correct answers across indices 0, 1, 2, 3 evenly.
- Vary difficulty: 30% recall, 40% understanding, 30% application.
- Cover MANY different topics from the course content.
- explanation_correct: 2-3 sentences WHY this answer is correct.
- explanation_wrong: 2-3 sentences WHY the wrong answer is wrong AND what the correct answer is.
- Do NOT put A/B/C/D letters inside option text.

Return ONLY a valid JSON object. No markdown, no backticks, no explanation outside JSON.

{"questions":[{"question":"...?","options":["...","...","...","..."],"correct":0,"explanation_correct":"...","explanation_wrong":"..."}]}`;
}

async function fetchQuestions() {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: buildPrompt() }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  if (!data.text) throw new Error('Empty response from Gemini. Please try again.');

  // Strip markdown fences if Gemini adds them
  const clean = data.text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  let parsed;
  try { parsed = JSON.parse(clean); }
  catch { throw new Error('Invalid JSON response. Please try again.'); }

  if (!Array.isArray(parsed.questions) || !parsed.questions.length)
    throw new Error('No questions returned. Please try again.');

  return parsed.questions;
}

// QUIZ RENDER 
function renderQuiz() {
  const c = COURSES[state.selectedCourse];
  const b = document.getElementById('quizBadge');
  b.textContent = state.selectedCourse;
  b.className   = 'quiz-badge ' + c.badgeClass;
  document.getElementById('quizTitle').textContent = c.name;
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.currentQ], total = state.questions.length;
  document.getElementById('qCounter').textContent     = `${state.currentQ+1} / ${total}`;
  document.getElementById('scoreChip').textContent     = `Score: ${state.score}`;
  document.getElementById('progressFill').style.width  = `${(state.currentQ/total)*100}%`;
  document.getElementById('qNum').textContent          = `Question ${state.currentQ+1} of ${total}`;
  document.getElementById('qText').textContent         = q.question;

  const list = document.getElementById('optionsList');
  list.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${LETTERS[i]}</span><span class="opt-text">${opt}</span>`;
    btn.dataset.idx = i;
    btn.addEventListener('click', () => handleAnswer(i));
    list.appendChild(btn);
  });

  const ex = document.getElementById('explanationBox');
  ex.style.display = 'none'; ex.className = 'explanation-box'; ex.innerHTML = '';
  document.getElementById('hintText').style.display = 'inline';
  document.getElementById('nextBtn').style.display  = 'none';
  state.answered = false; state.selectedOption = null;
}

function handleAnswer(idx) {
  if (state.answered) return;
  state.answered = true; state.selectedOption = idx;
  const q = state.questions[state.currentQ], ok = idx === q.correct;
  if (ok) state.score++; else state.wrongAnswers++;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if      (i === q.correct) btn.classList.add('correct');
    else if (i === idx)       btn.classList.add('wrong');
    else                      btn.classList.add('neutral');
  });

  const ex = document.getElementById('explanationBox');
  ex.style.display = 'block';
  ex.classList.add(ok ? 'correct' : 'wrong');
  ex.innerHTML = ok
    ? `<strong>✓ Correct!</strong> ${q.explanation_correct}`
    : `<strong>✗ Incorrect.</strong> ${q.explanation_wrong}`;

  document.getElementById('hintText').style.display  = 'none';
  document.getElementById('scoreChip').textContent    = `Score: ${state.score}`;
  const nb = document.getElementById('nextBtn');
  nb.textContent   = state.currentQ+1 >= state.questions.length ? 'See Results →' : 'Next Question →';
  nb.style.display = 'inline-block';
}

// NAV 
function initQuizNav() {
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (state.currentQ+1 < state.questions.length) { state.currentQ++; renderQuestion(); }
    else showResults();
  });
  document.getElementById('quitBtn').addEventListener('click', () => {
    if (confirm('Quit this quiz?')) showScreen('home');
  });
}

// RESULTS 
function showResults() {
  const total = state.questions.length, pct = Math.round((state.score/total)*100);
  const c = COURSES[state.selectedCourse];
  document.getElementById('resultsBadge').innerHTML =
    `<span class="badge ${c.badgeClass}">${state.selectedCourse} — ${c.name}</span>`;
  document.getElementById('resultsScore').textContent = pct + '%';
  const g = document.getElementById('resultsGrade');
  if      (pct>=80){g.textContent='🎉 Excellent work!';      g.style.color='#27500A';}
  else if (pct>=60){g.textContent='👍 Good effort!';         g.style.color='#633806';}
  else if (pct>=40){g.textContent='📚 Needs improvement';    g.style.color='#712B13';}
  else             {g.textContent='💪 Keep studying!';       g.style.color='#791F1F';}
  document.getElementById('statCorrect').textContent = state.score;
  document.getElementById('statWrong').textContent   = state.wrongAnswers;
  document.getElementById('statTotal').textContent   = total;
  const m = document.getElementById('resultsMessage');
  m.textContent = pct>=80
    ? `Outstanding! ${state.score}/${total} correct. You are well-prepared for your final exam.`
    : pct>=60
    ? `Good job! ${state.score}/${total} correct. Review the topics you missed and try again.`
    : `${state.score}/${total} correct. Go back to your study materials and focus on weak areas.`;
  showScreen('results');
}

function initResults() {
  document.getElementById('retryBtn').addEventListener('click', () => {
    state.questions=[]; state.currentQ=0; state.score=0; state.wrongAnswers=0;
    startQuiz();
  });
  document.getElementById('changeSubjectBtn').addEventListener('click', () => {
    state.selectedCourse=null; state.questions=[]; state.currentQ=0;
    state.score=0; state.wrongAnswers=0;
    document.querySelectorAll('.course-card').forEach(c=>c.classList.remove('selected'));
    document.getElementById('settingsPanel').style.display='none';
    const btn=document.getElementById('startBtn');
    btn.disabled=true; btn.textContent='Select a subject to begin';
    hideError(); showScreen('home');
  });
}

// BOOT 
document.addEventListener('DOMContentLoaded', () => {
  initHome(); initQuizNav(); initResults(); showScreen('home');
});
