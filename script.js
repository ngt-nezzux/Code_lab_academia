const courses = {
  python: {
    title: 'Primeros pasos con <span>Python.</span>', language: 'PYTHON', file: 'hola.py',
    description: 'La función print() muestra texto en la consola. Es una forma sencilla de comprobar que tu programa funciona.',
    points: ['print() muestra información.', 'El texto va entre comillas.', 'Probá cambiar el mensaje.'],
    code: 'print("Hola, mundo!")'
  },
  javascript: {
    title: 'Primeros pasos con <span>JavaScript.</span>', language: 'JAVASCRIPT', file: 'hola.js',
    description: 'console.log() escribe información en la consola del navegador o de un entorno JavaScript.',
    points: ['console.log() muestra información.', 'Las cadenas de texto van entre comillas.', 'El punto y coma es habitual al final de una instrucción.'],
    code: 'console.log("Hola, mundo!");'
  },
  html: {
    title: 'Primeros pasos con <span>HTML.</span>', language: 'HTML', file: 'index.html',
    description: 'HTML organiza el contenido de una página web usando etiquetas. No es un lenguaje de programación, sino un lenguaje de marcado.',
    points: ['<h1> crea un título principal.', '<p> define un párrafo.', 'Las etiquetas suelen tener apertura y cierre.'],
    code: '<h1>Hola, mundo!</h1>\\n<p>Mi primera página web.</p>'
  },
  java: {
    title: 'Primeros pasos con <span>Java.</span>', language: 'JAVA', file: 'Main.java',
    description: 'Java es un lenguaje de programación. Un programa inicial suele declarar una clase y un método main.',
    points: ['class define una clase.', 'main es el punto de entrada habitual.', 'System.out.println() muestra texto.'],
    code: 'public class Main {\\n    public static void main(String[] args) {\\n        System.out.println("Hola, mundo!");\\n    }\\n}'
  }
};
const $ = (id) => document.getElementById(id);
function toast(message) {
  const el = $('toast'); el.textContent = message; el.classList.add('show');
  window.clearTimeout(toast.timer); toast.timer = window.setTimeout(() => el.classList.remove('show'), 2200);
}
function showCourse(key) {
  const c = courses[key]; if (!c) return;
  $('lessonTitle').innerHTML = c.title;
  $('lessonDescription').textContent = c.description;
  $('lessonPoints').innerHTML = c.points.map(point => `<li>${escapeHtml(point)}</li>`).join('');
  $('fileName').textContent = c.file;
  $('languageLabel').textContent = c.language;
  $('lessonCode').textContent = c.code.replaceAll('\\n', '\n');
  $('leccion').scrollIntoView({ behavior: 'smooth' });
}
function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
document.querySelectorAll('[data-course]').forEach(button => button.addEventListener('click', () => showCourse(button.dataset.course)));
$('copyCode').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('lessonCode').textContent); toast('Código copiado'); }
  catch { toast('No se pudo copiar automáticamente; seleccioná el código.'); }
});
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($(button.dataset.copy).textContent); toast('Código del bot copiado'); }
  catch { toast('No se pudo copiar automáticamente; seleccioná el código.'); }
}));
$('menuToggle').addEventListener('click', () => {
  const nav = $('nav'); const open = nav.classList.toggle('open');
  $('menuToggle').setAttribute('aria-expanded', String(open));
});
$('nav').querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  $('nav').classList.remove('open'); $('menuToggle').setAttribute('aria-expanded', 'false');
}));

const quizzes = [
  {q:'¿Qué función de Python muestra texto en la consola?', options:['echo()','print()','showText()'], correct:1, explain:'¡Correcto! print() muestra información en la consola.'},
  {q:'¿Qué etiqueta HTML se usa para un enlace?', options:['<linkto>','<a>','<url>'], correct:1, explain:'¡Bien! La etiqueta <a> crea un enlace y usa href para indicar su destino.'},
  {q:'¿Qué instrucción muestra texto en JavaScript?', options:['console.log()','printLine()','echoText()'], correct:0, explain:'¡Exacto! console.log() escribe en la consola.'},
  {q:'En Java, ¿qué método suele iniciar la ejecución del programa?', options:['startNow()','run()','main()'], correct:2, explain:'¡Correcto! El método main es el punto de entrada habitual de una aplicación Java.'}
];
let quizIndex = 0, answered = false, score = 0;
function renderQuiz() {
  const q = quizzes[quizIndex]; answered = false;
  $('quizCount').textContent = `${String(quizIndex+1).padStart(2,'0')} / ${String(quizzes.length).padStart(2,'0')}`;
  $('quizQuestion').textContent = q.q;
  $('quizOptions').innerHTML = q.options.map((option, index) => `<button data-answer="${index}">${escapeHtml(option)}</button>`).join('');
  $('quizFeedback').textContent = 'Seleccioná una respuesta para comprobar lo que aprendiste.';
  $('quizFeedback').className = 'quiz-feedback';
  $('nextQuiz').hidden = true;
  $('nextQuiz').textContent = quizIndex === quizzes.length-1 ? 'VOLVER A EMPEZAR ↻' : 'SIGUIENTE DESAFÍO →';
  $('quizOptions').querySelectorAll('button').forEach(button => button.addEventListener('click', () => answerQuiz(Number(button.dataset.answer))));
}
function answerQuiz(index) {
  if (answered) return; answered = true;
  const q = quizzes[quizIndex], correct = index === q.correct;
  if (correct) score++;
  $('quizOptions').querySelectorAll('button').forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add('correct');
    if (i === index && !correct) button.classList.add('wrong');
  });
  $('quizFeedback').textContent = correct ? q.explain : `Todavía no. La respuesta correcta es ${q.options[q.correct]}. ${q.explain}`;
  $('quizFeedback').className = `quiz-feedback ${correct ? 'good' : 'bad'}`;
  $('nextQuiz').hidden = false;
}
$('nextQuiz').addEventListener('click', () => {
  if (quizIndex === quizzes.length-1) {
    toast(`Terminaste: ${score}/${quizzes.length} respuestas correctas.`);
    quizIndex = 0; score = 0;
  } else quizIndex++;
  renderQuiz();
});
renderQuiz();
