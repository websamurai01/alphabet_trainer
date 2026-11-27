(function () {
  'use strict';

  
  const BASIC_LETTERS = [
    { key:'alef', glyph:'א', name:'алеф', nameEn:'alef',
      aliases:['алеф'], aliasesEn:['alef','aleph'],
      sound:'а / э', soundEn:'a / e', soundAliases:['а','э'], soundAliasesEn:['a','e'],
      hebName:'אָלֶף', note:'гортанная, часто немая', noteEn:'glottal, often silent' },
    { key:'bet', glyph:'ב', name:'бет', nameEn:'bet',
      aliases:['бет','бейт','бэт','бэйт'], aliasesEn:['bet','beit','beyt','beth'],
      sound:'б / в', soundEn:'b / v', soundAliases:['б','в'], soundAliasesEn:['b','v'],
      hebName:'בֵּית', note:'с точкой — б, без — в', noteEn:'with a dot — b, without — v' },
    { key:'gimel', glyph:'ג', name:'гимель', nameEn:'gimel',
      aliases:['гимель','гимел','гимэль','гимэл'], aliasesEn:['gimel','gimmel'],
      sound:'г', soundEn:'g', soundAliases:['г'], soundAliasesEn:['g'],
      hebName:'גִּימֶל', note:'', noteEn:'' },
    { key:'dalet', glyph:'ד', name:'далет', nameEn:'dalet',
      aliases:['далет','далед','далэт','далэд'], aliasesEn:['dalet','daled','daleth'],
      sound:'д', soundEn:'d', soundAliases:['д'], soundAliasesEn:['d'],
      hebName:'דָּלֶת', note:'', noteEn:'' },
    { key:'hey', glyph:'ה', name:'хей', nameEn:'hey',
      aliases:['хей','хэй'], aliasesEn:['hey','hei','he','heh'],
      sound:'h (х)', soundEn:'h', soundAliases:['h','х'], soundAliasesEn:['h'],
      hebName:'הֵא', note:'лёгкий выдох', noteEn:'a light breath' },
    { key:'vav', glyph:'ו', name:'вав', nameEn:'vav',
      aliases:['вав'], aliasesEn:['vav','waw'],
      sound:'в / у', soundEn:'v / u', soundAliases:['в','у','о'], soundAliasesEn:['v','u','o'],
      hebName:'וָו', note:'может читаться как у', noteEn:'can also sound like u' },
    { key:'zayin', glyph:'ז', name:'заин', nameEn:'zayin',
      aliases:['заин','зайн','зайин'], aliasesEn:['zayin','zain','zayn'],
      sound:'з', soundEn:'z', soundAliases:['з'], soundAliasesEn:['z'],
      hebName:'זַיִן', note:'', noteEn:'' },
    { key:'khet', glyph:'ח', name:'хет', nameEn:'khet',
      aliases:['хет','хэт'], aliasesEn:['khet','het','chet','cheth'],
      sound:'х', soundEn:'kh / ch', soundAliases:['х','h'], soundAliasesEn:['kh','ch','h'],
      hebName:'חֵית', note:'', noteEn:'' },
    { key:'tet', glyph:'ט', name:'тет', nameEn:'tet',
      aliases:['тет','тэт'], aliasesEn:['tet','teth'],
      sound:'т', soundEn:'t', soundAliases:['т'], soundAliasesEn:['t'],
      hebName:'טֵית', note:'', noteEn:'' },
    { key:'yod', glyph:'י', name:'йод', nameEn:'yod',
      aliases:['йод','йуд','йот'], aliasesEn:['yod','yud','yodh'],
      sound:'й / и', soundEn:'y / i', soundAliases:['й','и'], soundAliasesEn:['y','i'],
      hebName:'יוֹד', note:'', noteEn:'' },
    { key:'kaf', glyph:'כ', name:'каф', nameEn:'kaf',
      aliases:['каф'], aliasesEn:['kaf','kaph'],
      sound:'к / х', soundEn:'k / kh', soundAliases:['к','х'], soundAliasesEn:['k','kh','ch'],
      hebName:'כַּף', note:'конечная форма — ך', noteEn:'final form — ך' },
    { key:'lamed', glyph:'ל', name:'ламед', nameEn:'lamed',
      aliases:['ламед','ламэд'], aliasesEn:['lamed','lammed'],
      sound:'л', soundEn:'l', soundAliases:['л'], soundAliasesEn:['l'],
      hebName:'לָמֶד', note:'', noteEn:'' },
    { key:'mem', glyph:'מ', name:'мем', nameEn:'mem',
      aliases:['мем'], aliasesEn:['mem'],
      sound:'м', soundEn:'m', soundAliases:['м'], soundAliasesEn:['m'],
      hebName:'מֵם', note:'конечная форма — ם', noteEn:'final form — ם' },
    { key:'nun', glyph:'נ', name:'нун', nameEn:'nun',
      aliases:['нун'], aliasesEn:['nun'],
      sound:'н', soundEn:'n', soundAliases:['н'], soundAliasesEn:['n'],
      hebName:'נוּן', note:'конечная форма — ן', noteEn:'final form — ן' },
    { key:'samekh', glyph:'ס', name:'самех', nameEn:'samekh',
      aliases:['самех','самэх'], aliasesEn:['samekh','samech','samek'],
      sound:'с', soundEn:'s', soundAliases:['с'], soundAliasesEn:['s'],
      hebName:'סָמֶךְ', note:'', noteEn:'' },
    { key:'ayin', glyph:'ע', name:'аин', nameEn:'ayin',
      aliases:['аин','айн'], aliasesEn:['ayin','ayen','ayeen'],
      sound:'а / э', soundEn:'a / e', soundAliases:['а','э'], soundAliasesEn:['a','e'],
      hebName:'עַיִן', note:'гортанная, часто немая', noteEn:'glottal, often silent' },
    { key:'pe', glyph:'פ', name:'пе', nameEn:'pe',
      aliases:['пе','пей','пэ','пэй'], aliasesEn:['pe','pei','pey','peh'],
      sound:'п / ф', soundEn:'p / f', soundAliases:['п','ф'], soundAliasesEn:['p','f'],
      hebName:'פֵּא', note:'с точкой — п, без — ф', noteEn:'with a dot — p, without — f' },
    { key:'tsadi', glyph:'צ', name:'цади', nameEn:'tsadi',
      aliases:['цади','цадик','цадек','цадык'], aliasesEn:['tsadi','tzadi','tsadik','tzaddik','sadi'],
      sound:'ц', soundEn:'ts / tz', soundAliases:['ц'], soundAliasesEn:['ts','tz'],
      hebName:'צָדִי', note:'конечная форма — ץ', noteEn:'final form — ץ' },
    { key:'qof', glyph:'ק', name:'коф', nameEn:'qof',
      aliases:['коф','куф'], aliasesEn:['qof','kof','kuf','qoph'],
      sound:'к', soundEn:'k', soundAliases:['к'], soundAliasesEn:['k','q'],
      hebName:'קוֹף', note:'', noteEn:'' },
    { key:'resh', glyph:'ר', name:'реш', nameEn:'resh',
      aliases:['реш','рэш'], aliasesEn:['resh','reysh'],
      sound:'р', soundEn:'r', soundAliases:['р'], soundAliasesEn:['r'],
      hebName:'רֵישׁ', note:'', noteEn:'' },
    { key:'shin', glyph:'ש', name:'шин', nameEn:'shin',
      aliases:['шин','син'], aliasesEn:['shin','sin','sheen'],
      sound:'ш / с', soundEn:'sh / s', soundAliases:['ш','с'], soundAliasesEn:['sh','s'],
      hebName:'שִׁין', note:'точка справа — ш, слева — с', noteEn:'dot on the right — sh, on the left — s' },
    { key:'tav', glyph:'ת', name:'тав', nameEn:'tav',
      aliases:['тав','таф'], aliasesEn:['tav','taf','taw'],
      sound:'т', soundEn:'t', soundAliases:['т'], soundAliasesEn:['t'],
      hebName:'תָּו', note:'', noteEn:'' }
  ];

  const FINAL_LETTERS = [
    { key:'kaf-sofit', glyph:'ך', name:'каф софит', nameEn:'kaf sofit',
      aliases:['кафсофит'], aliasesEn:['kafsofit'],
      sound:'к / х', soundEn:'k / kh', soundAliases:['к','х'], soundAliasesEn:['k','kh','ch'],
      hebName:'כַּף סוֹפִית', note:'конечная форма כ', noteEn:'final form of כ' },
    { key:'mem-sofit', glyph:'ם', name:'мем софит', nameEn:'mem sofit',
      aliases:['мемсофит'], aliasesEn:['memsofit'],
      sound:'м', soundEn:'m', soundAliases:['м'], soundAliasesEn:['m'],
      hebName:'מֵם סוֹפִית', note:'конечная форма מ', noteEn:'final form of מ' },
    { key:'nun-sofit', glyph:'ן', name:'нун софит', nameEn:'nun sofit',
      aliases:['нунсофит'], aliasesEn:['nunsofit'],
      sound:'н', soundEn:'n', soundAliases:['н'], soundAliasesEn:['n'],
      hebName:'נוּן סוֹפִית', note:'конечная форма נ', noteEn:'final form of נ' },
    { key:'pe-sofit', glyph:'ף', name:'пе софит', nameEn:'pe sofit',
      aliases:['песофит','пейсофит','пэсофит','пэйсофит'], aliasesEn:['pesofit','peysofit','pehsofit'],
      sound:'п / ф', soundEn:'p / f', soundAliases:['п','ф'], soundAliasesEn:['p','f'],
      hebName:'פֵּא סוֹפִית', note:'конечная форма פ', noteEn:'final form of פ' },
    { key:'tsadi-sofit', glyph:'ץ', name:'цади софит', nameEn:'tsadi sofit',
      aliases:['цадисофит','цадиксофит','цадексофит'], aliasesEn:['tsadisoft','tzadisoft','tzaddiksofit','sadisoft'],
      sound:'ц', soundEn:'ts / tz', soundAliases:['ц'], soundAliasesEn:['ts','tz'],
      hebName:'צָדִי סוֹפִית', note:'конечная форма צ', noteEn:'final form of צ' }
  ];

  const ALL_LETTERS = BASIC_LETTERS.concat(FINAL_LETTERS);
  const BY_KEY = {};
  ALL_LETTERS.forEach(function (l) { BY_KEY[l.key] = l; });

  const CONSONANT = {
    alef:   { ru: '',  en: [] },
    bet:    { ru: 'б', en: ['b'], noDageshRu: 'в', noDageshEn: ['v'] },
    gimel:  { ru: 'г', en: ['g'] },
    dalet:  { ru: 'д', en: ['d'] },
    hey:    { ru: 'х', en: ['h'] },
    vav:    { ru: 'в', en: ['v'] },
    zayin:  { ru: 'з', en: ['z'] },
    khet:   { ru: 'х', en: ['kh', 'ch', 'h'] },
    tet:    { ru: 'т', en: ['t'] },
    yod:    { ru: 'й', en: ['y'] },
    kaf:    { ru: 'к', en: ['k'], noDageshRu: 'х', noDageshEn: ['kh', 'ch'] },
    lamed:  { ru: 'л', en: ['l'] },
    mem:    { ru: 'м', en: ['m'] },
    nun:    { ru: 'н', en: ['n'] },
    samekh: { ru: 'с', en: ['s'] },
    ayin:   { ru: '',  en: [] },
    pe:     { ru: 'п', en: ['p'], noDageshRu: 'ф', noDageshEn: ['f'] },
    tsadi:  { ru: 'ц', en: ['ts', 'tz'] },
    qof:    { ru: 'к', en: ['k', 'q'] },
    resh:   { ru: 'р', en: ['r'] },
    shin:   { ru: 'ш', en: ['sh'], sinRu: 'с', sinEn: ['s'] },
    tav:    { ru: 'т', en: ['t'] }
  };

  const NIKUD_VOWELS = [
    { key: 'patah',  char: '\u05B7', ru: 'а', en: ['a'], nameRu: 'патах',  nameEn: 'patah' },
    { key: 'qamats', char: '\u05B8', ru: 'а', en: ['a'], nameRu: 'камац',  nameEn: 'qamats' },
    { key: 'tsere',  char: '\u05B5', ru: 'е', en: ['e'], nameRu: 'цере',   nameEn: 'tsere' },
    { key: 'segol',  char: '\u05B6', ru: 'е', en: ['e'], nameRu: 'сэголь', nameEn: 'segol' },
    { key: 'hiriq',  char: '\u05B4', ru: 'и', en: ['i'], nameRu: 'хирик',  nameEn: 'hiriq' },
    { key: 'holam',  char: '\u05B9', ru: 'о', en: ['o'], nameRu: 'холам',  nameEn: 'holam' },
    { key: 'qubuts', char: '\u05BB', ru: 'у', en: ['u'], nameRu: 'кубуц',  nameEn: 'qubuts' }
  ];

  const YOD_FAMILIAR = { 'а': 'я', 'е': 'е', 'и': 'и', 'о': 'ё', 'у': 'ю' };

  
  const LS_KEY = 'hebrew_alphabet_trainer_v1';
  const LS_THEME = 'hebrew_theme_v1';
  const DEFAULT_STORE = {
    settings: { timeLimit: 4, mode: 'name', finals: false, timer: false, sort: 'default', lang: 'ru', script: 'print', nikud: false, autoCheck: true },
    highScore: 0,
    bestStreak: 0,
    letters: {},
    lettersCursive: {}
  };

  function loadStore() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STORE));
      const obj = JSON.parse(raw);
      return {
        settings: Object.assign({}, DEFAULT_STORE.settings, obj.settings || {}),
        highScore: Number(obj.highScore) || 0,
        bestStreak: Number(obj.bestStreak) || 0,
        letters: obj.letters && typeof obj.letters === 'object' ? obj.letters : {},
        lettersCursive: obj.lettersCursive && typeof obj.lettersCursive === 'object' ? obj.lettersCursive : {}
      };
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_STORE));
    }
  }

  let store = loadStore();
  let currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  function saveStore() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {}
  }

  
  const $ = function (id) { return document.getElementById(id); };
  const screenQuiz = $('screen-quiz');
  const screenAlpha = $('screen-alpha');
  const tabQuiz = $('tab-quiz');
  const tabAlpha = $('tab-alpha');
  const subtabEls = Array.prototype.slice.call(document.querySelectorAll('.subtab'));
  const progressFill = $('progress-fill');
  const progressText = $('progress-text');
  const modeHint = $('mode-hint');
  const statScore = $('stat-score');
  const statStreak = $('stat-streak');
  const statBest = $('stat-best');
  const slider = $('time-limit');
  const timeLabel = $('time-label');
  const timerBtn = $('btn-timer');
  const timerControls = $('timer-controls');
  const timerNote = $('timer-note');
  const themeBtn = $('btn-theme');
  const timerFill = $('timer-fill');
  const finalsBtn = $('btn-finals');
  const scriptBtn = $('btn-script');
  const nikudBtn = $('btn-nikud');
  const nikudNote = $('nikud-note');
  const quizCard = $('quiz-card');
  const quizGlyph = $('quiz-glyph');
  const quizAnswer = $('quiz-answer');
  const quizInput = $('quiz-input');
  const inputHint = $('input-hint');
  const skipBtn = $('btn-skip');
  const autoCheckBtn = $('btn-autocheck');
  const checkBtn = $('btn-check');
  const hud = $('hud');
  const sessionRate = $('session-rate');
  const alphaInfo = $('alpha-info');
  const alphaGridBasic = $('alpha-grid-basic');
  const alphaGridFinals = $('alpha-grid-finals');
  const sortBtn = $('btn-sort');
  const alphaFinalsBtn = $('btn-alpha-finals');
  const resetBtn = $('btn-reset');
  const toastEl = $('toast');
  const progressBar = $('progress-bar');
  const flagBtns = Array.prototype.slice.call(document.querySelectorAll('.flag-btn'));

  
  const session = { score: 0, streak: 0, correct: 0, total: 0 };
  let current = null;
  let currentSyllable = null;
  let locked = false;
  let srs = [];
  let rafId = 0;
  let endAt = 0;
  let pausedLeft = null;
  let roundToken = 0;
  let timers = [];
  let toastTimer = null;

  
  const I18N = {
    ru: {
      appTitle: 'Иврит · Алфавит',
      tabQuiz: 'Квиз',
      tabAlpha: 'Алфавит',
      names: 'Имена букв',
      sounds: 'Звуки',
      modeHintName: 'Печатай имя буквы по-русски — ответ проверяется мгновенно',
      modeHintSound: 'Печатай звук буквы по-русски — например «б», «ш», «ц»',
      inputHintName: '⌨️ Русская раскладка · Enter не нужен',
      inputHintSound: '⌨️ Один звук · Enter не нужен',
      placeholderName: 'имя буквы по-русски…',
      placeholderSound: 'звук буквы по-русски…',
      score: 'Очки',
      streak: 'Серия',
      best: 'Рекорд',
      timePerLetter: 'Время на букву:',
      seconds: 'с',
      finalsOff: 'Софитные: выкл',
      finalsOn: 'Софитные: вкл',
      timerOff: 'Таймер: выкл',
      timerOn: 'Таймер: вкл',
      timerNote: 'Без таймера — отвечай в своём темпе',
      themeDark: 'Тёмная тема',
      themeLight: 'Светлая тема',
      showAnswer: 'Показать ответ',
      sessionAccuracyEmpty: 'Точность сессии: —',
      sessionAccuracy: 'Точность сессии: {rate}% · {c}/{t}',
      masteredTitle: 'Освоенные буквы',
      alphaInfo: 'Освоено {m} из 22 · точность {a}',
      sortDefault: '↕️ По порядку',
      sortWorst: '📉 Сначала сложные',
      sortBest: '📈 Сначала лёгкие',
      basicLetters: '22 основные буквы',
      finalForms: '5 софитных форм',
      titleNote: '(в конце слова)',
      alphaTip: 'Цвет рамки показывает точность твоих ответов по этой букве.',
      notTrained: 'не тренировано',
      reset: 'Сбросить прогресс',
      resetConfirm: 'Сбросить весь прогресс: рекорды и статистику букв?',
      resetToast: 'Прогресс сброшен',
      streakToast: '🔥 Серия {n}!',
      soundPrefix: 'звук: ',
      scriptPrint: 'Шрифт: печатный',
      scriptCursive: 'Шрифт: прописной',
      nikudOff: 'Никуд: выкл',
      nikudOn: 'Никуд: вкл',
      nikudNameHint: 'Никуд доступен только в режиме «Звуки»',
      finalsNikudHint: 'С никудом софитные формы недоступны',
      placeholderSyllable: 'слог по-русски…',
      inputHintSyllable: '⌨️ Согласная + гласная · Enter не нужен',
      modeHintSyllable: 'Печатай слог по-русски — например «ба», «ми»',
      modeHintManualName: 'Печатай имя буквы по-русски — затем Enter или «Проверить»',
      modeHintManualSound: 'Печатай звук буквы по-русски — затем Enter или «Проверить»',
      modeHintManualSyllable: 'Печатай слог по-русски — затем Enter или «Проверить»',
      inputHintManual: '⌨️ Нажми Enter или «Проверить»',
      autoCheckOn: 'Автопринятие: вкл',
      autoCheckOff: 'Автопринятие: выкл',
      checkAnswer: 'Проверить',
      nikudTableTitle: 'Огласовки'
    },
    en: {
      appTitle: 'Hebrew · Alphabet',
      tabQuiz: 'Quiz',
      tabAlpha: 'Alphabet',
      names: 'Letter names',
      sounds: 'Sounds',
      modeHintName: 'Type the letter name in Latin letters — answers check instantly',
      modeHintSound: 'Type the letter sound in Latin letters — e.g. “b”, “sh”, “ts”',
      inputHintName: '⌨️ Latin keyboard · no Enter needed',
      inputHintSound: '⌨️ One sound · no Enter needed',
      placeholderName: 'letter name…',
      placeholderSound: 'letter sound…',
      score: 'Score',
      streak: 'Streak',
      best: 'Best',
      timePerLetter: 'Time per letter:',
      seconds: 's',
      finalsOff: 'Finals: off',
      finalsOn: 'Finals: on',
      timerOff: 'Timer: off',
      timerOn: 'Timer: on',
      timerNote: 'No timer — answer at your own pace',
      themeDark: 'Dark theme',
      themeLight: 'Light theme',
      showAnswer: 'Show answer',
      sessionAccuracyEmpty: 'Session accuracy: —',
      sessionAccuracy: 'Session accuracy: {rate}% · {c}/{t}',
      masteredTitle: 'Mastered letters',
      alphaInfo: 'Mastered {m} of 22 · accuracy {a}',
      sortDefault: '↕️ In order',
      sortWorst: '📉 Hardest first',
      sortBest: '📈 Easiest first',
      basicLetters: '22 basic letters',
      finalForms: '5 final forms',
      titleNote: '(at the end of a word)',
      alphaTip: 'The border color shows your accuracy for this letter.',
      notTrained: 'not trained',
      reset: 'Reset progress',
      resetConfirm: 'Reset all progress: records and letter stats?',
      resetToast: 'Progress reset',
      streakToast: '🔥 Streak {n}!',
      soundPrefix: 'sound: ',
      scriptPrint: 'Script: print',
      scriptCursive: 'Script: cursive',
      nikudOff: 'Niqqud: off',
      nikudOn: 'Niqqud: on',
      nikudNameHint: 'Niqqud is available in “Sounds” mode only',
      finalsNikudHint: 'Final forms are unavailable with niqqud',
      placeholderSyllable: 'syllable in Latin letters…',
      inputHintSyllable: '⌨️ Consonant + vowel · no Enter needed',
      modeHintSyllable: 'Type the syllable in Latin letters — e.g. “ba”, “mi”',
      modeHintManualName: 'Type the letter name in Latin letters — then press Enter or “Check”',
      modeHintManualSound: 'Type the letter sound in Latin letters — then press Enter or “Check”',
      modeHintManualSyllable: 'Type the syllable in Latin letters — then press Enter or “Check”',
      inputHintManual: '⌨️ Press Enter or “Check”',
      autoCheckOn: 'Auto-accept: on',
      autoCheckOff: 'Auto-accept: off',
      checkAnswer: 'Check',
      nikudTableTitle: 'Vowel points'
    }
  };

  function lang() {
    return store.settings.lang === 'en' ? 'en' : 'ru';
  }
  function t(key, vars) {
    const dict = I18N[lang()] || I18N.ru;
    let out = dict[key] !== undefined ? dict[key] : I18N.ru[key];
    if (out === undefined) out = key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        out = out.split('{' + k + '}').join(String(vars[k]));
      });
    }
    return out;
  }
  function locName(l) { return lang() === 'en' ? l.nameEn : l.name; }
  function locSound(l) { return lang() === 'en' ? l.soundEn : l.sound; }
  function locNote(l) { return lang() === 'en' ? l.noteEn : l.note; }
  function locAliases(l) { return lang() === 'en' ? l.aliasesEn : l.aliases; }
  function locSoundAliases(l) { return lang() === 'en' ? l.soundAliasesEn : l.soundAliases; }

  function nikudActive() {
    return !!store.settings.nikud && store.settings.mode === 'sound';
  }
  function lettersBucket() {
    return store.settings.script === 'cursive' ? store.lettersCursive : store.letters;
  }
  function normNikud(s) {
    return String(s)
      .toLowerCase()
      .replace(/э/g, 'е')
      .replace(/[\s\-'’׳".,!?;:()]/g, '');
  }
  function syllableAnswers(syl) {
    const en = lang() === 'en';
    const out = [];
    if (!syl) return out;
    if (syl.letterKey === 'yod') {
      if (en) {
        out.push('y' + syl.vowelEn);
      } else {
        out.push('й' + syl.vowelRu);
        const fam = YOD_FAMILIAR[syl.vowelRu];
        if (fam) out.push(fam);
      }
      return out;
    }
    if (!syl.consRu) {
      if (en) out.push(syl.vowelEn);
      else out.push(syl.vowelRu);
      return out;
    }
    if (en) {
      syl.consEn.forEach(function (c) { out.push(c + syl.vowelEn); });
    } else {
      out.push(syl.consRu + syl.vowelRu);
    }
    return out;
  }
  function makeSyllable(letter) {
    const c = CONSONANT[letter.key] || { ru: '', en: [] };
    const vowel = NIKUD_VOWELS[Math.floor(Math.random() * NIKUD_VOWELS.length)];
    let dagesh = false;
    let shinDot = null;
    let consRu = c.ru;
    let consEn = c.en.slice();
    if (letter.key === 'bet' || letter.key === 'kaf' || letter.key === 'pe') {
      dagesh = Math.random() < 0.5;
      if (!dagesh) {
        consRu = c.noDageshRu;
        consEn = c.noDageshEn.slice();
      }
    } else if (letter.key === 'shin') {
      shinDot = Math.random() < 0.5 ? 'right' : 'left';
      if (shinDot === 'left') {
        consRu = c.sinRu;
        consEn = c.sinEn.slice();
      }
    }
    let text = letter.glyph;
    if (shinDot === 'right') text += '\u05C1';
    else if (shinDot === 'left') text += '\u05C2';
    if (dagesh) text += '\u05BC';
    text += vowel.char;
    return {
      letterKey: letter.key,
      text: text,
      vowelRu: vowel.ru,
      vowelEn: vowel.en[0],
      consRu: consRu,
      consEn: consEn,
      dagesh: dagesh,
      shinDot: shinDot
    };
  }

  function clearTimers() {
    timers.forEach(function (t) { clearTimeout(t); });
    timers = [];
  }
  function later(fn, ms) {
    const t = setTimeout(fn, ms);
    timers.push(t);
    return t;
  }

  function norm(s) {
    return String(s)
      .toLowerCase()
      .replace(/ё/g, 'е')
      .replace(/[\s\-'’׳".,!?;:()]/g, '');
  }

  function pool() {
    if (nikudActive()) return BASIC_LETTERS;
    return store.settings.finals ? ALL_LETTERS : BASIC_LETTERS;
  }
  function isInPool(key) {
    for (let i = 0; i < pool().length; i++) if (pool()[i].key === key) return true;
    return false;
  }
  function isQuizActive() {
    return screenQuiz.classList.contains('active');
  }
  function acceptedFor(letter) {
    if (nikudActive() && currentSyllable) {
      return syllableAnswers(currentSyllable).map(normNikud);
    }
    const arr = store.settings.mode === 'name' ? locAliases(letter) : locSoundAliases(letter);
    return arr.map(norm);
  }

  function statOf(key) {
    const bucket = lettersBucket();
    const s = bucket[key];
    const c = s ? (s.c || 0) : 0;
    const w = s ? (s.w || 0) : 0;
    const total = c + w;
    return { c: c, w: w, total: total, rate: total ? Math.round(c / total * 100) : null };
  }
  function addLetterStat(key, ok) {
    const bucket = lettersBucket();
    if (!bucket[key]) bucket[key] = { c: 0, w: 0 };
    if (ok) bucket[key].c++;
    else bucket[key].w++;
  }
  function masteryClass(key) {
    const s = statOf(key);
    if (!s.total) return 'm-new';
    if (s.rate >= 80) return 'm-good';
    if (s.rate >= 50) return 'm-mid';
    return 'm-low';
  }
  function rateColor(rate, total) {
    if (!total) return 'var(--muted)';
    if (rate >= 80) return 'var(--olive)';
    if (rate >= 50) return 'var(--accent2)';
    return 'var(--danger)';
  }

  
  let actx = null;
  function beep(ok) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) actx = new AC();
      if (actx.state === 'suspended') actx.resume();
      const t = actx.currentTime;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.connect(gain);
      gain.connect(actx.destination);
      if (ok) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, t);
        osc.frequency.setValueAtTime(990, t + 0.08);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(230, t);
        osc.frequency.exponentialRampToValueAtTime(140, t + 0.22);
      }
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.09, t + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      osc.start(t);
      osc.stop(t + 0.28);
    } catch (e) {}
  }
  function vibrate(ms) {
    if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} }
  }
  function showToast(text) {
    toastEl.textContent = text;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 1700);
  }

  
  function setTimerUI(left) {
    const limit = store.settings.timeLimit;
    const ratio = limit > 0 ? Math.max(0, Math.min(1, left / limit)) : 0;
    timerFill.style.width = (ratio * 100).toFixed(1) + '%';
    timerFill.style.background = ratio < 0.33
      ? 'linear-gradient(90deg, var(--danger), #cf6552)'
      : ratio < 0.66
        ? 'linear-gradient(90deg, var(--gold), #e0b45e)'
        : 'linear-gradient(90deg, var(--olive), var(--accent2))';
  }
  function timerEnabled() {
    return !!store.settings.timer;
  }
  function stopTimer() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
  }
  function tickTimer() {
    rafId = 0;
    if (!timerEnabled()) return;
    const left = (endAt - performance.now()) / 1000;
    if (left <= 0) {
      setTimerUI(0);
      handleWrong();
      return;
    }
    setTimerUI(left);
    rafId = requestAnimationFrame(tickTimer);
  }
  function startTimer() {
    stopTimer();
    pausedLeft = null;
    if (!timerEnabled()) return;
    endAt = performance.now() + store.settings.timeLimit * 1000;
    setTimerUI(store.settings.timeLimit);
    rafId = requestAnimationFrame(tickTimer);
  }
  function pauseTimer() {
    if (!rafId) return;
    pausedLeft = Math.max(0, (endAt - performance.now()) / 1000);
    stopTimer();
  }
  function resumeTimer() {
    if (!timerEnabled() || locked || rafId) return;
    const left = pausedLeft != null ? pausedLeft : store.settings.timeLimit;
    pausedLeft = null;
    endAt = performance.now() + left * 1000;
    rafId = requestAnimationFrame(tickTimer);
  }

  
  function pickKey() {
    const p = pool();
    if (p.length === 0) return null;
    if (p.length === 1) return p[0].key;
    const prev = current ? current.key : null;
    let next = prev;
    for (let i = 0; i < 25; i++) {
      next = p[Math.floor(Math.random() * p.length)].key;
      if (next !== prev) return next;
    }
    return next;
  }

  function popSrs() {
    for (let i = 0; i < srs.length; i++) srs[i].delay -= 1;
    const idx = srs.findIndex(function (it) { return it.delay <= 0; });
    if (idx >= 0) return srs.splice(idx, 1)[0];
    return null;
  }

  function startRound() {
    roundToken++;
    clearTimers();
    stopTimer();
    pausedLeft = null;

    let forced = popSrs();
    while (forced && !isInPool(forced.key)) forced = popSrs();
    if (forced) {
      current = BY_KEY[forced.key];
      currentSyllable = nikudActive()
        ? (forced.syllable || makeSyllable(current))
        : null;
    } else {
      current = BY_KEY[pickKey()];
      currentSyllable = nikudActive() ? makeSyllable(current) : null;
    }
    if (!current) return;

    locked = false;
    quizInput.value = '';
    quizInput.disabled = false;
    quizCard.classList.remove('correct', 'wrong');
    quizGlyph.textContent = currentSyllable ? currentSyllable.text : current.glyph;
    quizGlyph.classList.remove('glyph-in');
    void quizGlyph.offsetWidth;
    quizGlyph.classList.add('glyph-in');
    quizAnswer.textContent = '';

    updateModeUI();
    updateHud();
    updateStatsUI();
    updateHeader();

    if (isQuizActive()) {
      if (timerEnabled()) startTimer();
      else stopTimer();
      focusInput();
    } else {
      pausedLeft = timerEnabled() ? store.settings.timeLimit : null;
    }
  }

  function focusInput() {
    if (!isQuizActive() || locked) return;
    try { quizInput.focus({ preventScroll: true }); }
    catch (e) { quizInput.focus(); }
  }

  function handleCorrect() {
    if (locked || !current) return;
    const token = roundToken;
    locked = true;
    stopTimer();

    quizCard.classList.add('correct');
    quizInput.disabled = true;

    session.score += 10;
    session.streak += 1;
    session.correct += 1;
    session.total += 1;

    if (session.streak > store.bestStreak) store.bestStreak = session.streak;
    if (session.score > store.highScore) store.highScore = session.score;
    addLetterStat(current.key, true);
    saveStore();

    beep(true);
    vibrate(25);
    updateStatsUI();
    updateHud();
    updateHeader();

    if (session.streak >= 5 && session.streak % 5 === 0) {
      showToast(t('streakToast', { n: session.streak }));
    }

    later(function () {
      if (token === roundToken) startRound();
    }, 520);
  }

  function handleWrong() {
    if (locked || !current) return;
    const token = roundToken;
    locked = true;
    stopTimer();

    quizCard.classList.add('wrong');
    quizInput.disabled = true;
    if (nikudActive() && currentSyllable) {
      const expected = syllableAnswers(currentSyllable)[0] || '';
      quizAnswer.textContent = currentSyllable.text + ' · ' + expected;
    } else {
      quizAnswer.textContent = store.settings.mode === 'name'
        ? locName(current)
        : locName(current) + ' · ' + t('soundPrefix') + locSound(current);
    }

    session.streak = 0;
    session.total += 1;
    addLetterStat(current.key, false);
    if (session.score > store.highScore) store.highScore = session.score;
    saveStore();

    const srsKey = current.key;
    const srsSyllable = nikudActive() ? currentSyllable : null;
    const already = srs.some(function (it) {
      if (it.key !== srsKey) return false;
      if (!srsSyllable) return !it.syllable;
      return it.syllable && it.syllable.text === srsSyllable.text;
    });
    if (!already) {
      srs.push({ key: srsKey, syllable: srsSyllable, delay: 2 });
    }

    beep(false);
    vibrate(45);
    updateStatsUI();
    updateHud();
    updateHeader();

    later(function () {
      if (token === roundToken) startRound();
    }, 1500);
  }

  function onInput() {
    if (locked || !current) return;
    if (!store.settings.autoCheck) return;
    const val = nikudActive() ? normNikud(quizInput.value) : norm(quizInput.value);
    if (!val) return;

    const accepted = acceptedFor(current);
    if (accepted.indexOf(val) !== -1) {
      handleCorrect();
      return;
    }
    const isPrefix = accepted.some(function (a) { return a.indexOf(val) === 0; });
    if (!isPrefix) handleWrong();
  }

  function submitManualAnswer() {
    if (locked || !current) return;
    const val = nikudActive() ? normNikud(quizInput.value) : norm(quizInput.value);
    if (!val) { focusInput(); return; }
    if (acceptedFor(current).indexOf(val) !== -1) handleCorrect();
    else handleWrong();
  }

  function toggleAutoCheck() {
    store.settings.autoCheck = !store.settings.autoCheck;
    saveStore();
    syncControls();
    updateModeUI();
    focusInput();
  }

  
  function updateStatsUI() {
    statScore.textContent = String(session.score);
    statStreak.textContent = String(session.streak);
    statBest.textContent = String(store.highScore);

    if (session.total === 0) {
      sessionRate.textContent = t('sessionAccuracyEmpty');
    } else {
      const rate = Math.round(session.correct / session.total * 100);
      sessionRate.textContent = t('sessionAccuracy', {
        rate: rate, c: session.correct, t: session.total
      });
    }
  }

  function updateHeader() {
    const p = pool();
    let mastered = 0;
    for (let i = 0; i < p.length; i++) {
      const s = statOf(p[i].key);
      if (s.total >= 3 && s.rate >= 70) mastered++;
    }
    const pct = p.length ? (mastered / p.length) * 100 : 0;
    progressFill.style.width = pct.toFixed(1) + '%';
    progressText.textContent = mastered + ' / ' + p.length;
  }

  function buildHud() {
    hud.innerHTML = '';
    pool().forEach(function (l) {
      const el = document.createElement('div');
      el.className = 'hud-letter';
      el.dataset.key = l.key;
      el.textContent = l.glyph;
      hud.appendChild(el);
    });
    updateHud();
  }

  function updateHud() {
    const kids = Array.prototype.slice.call(hud.children);
    kids.forEach(function (el) {
      const key = el.dataset.key;
      el.classList.remove('m-new', 'm-good', 'm-mid', 'm-low', 'current');
      el.classList.add(masteryClass(key));
      if (current && current.key === key) el.classList.add('current');
    });
  }

  function updateModeUI() {
    const isName = store.settings.mode === 'name';
    const nikud = nikudActive();
    const autoCheck = !!store.settings.autoCheck;
    quizInput.placeholder = t(nikud ? 'placeholderSyllable' : (isName ? 'placeholderName' : 'placeholderSound'));
    quizInput.lang = lang() === 'en' ? 'en' : 'ru';
    if (autoCheck) {
      modeHint.textContent = t(nikud ? 'modeHintSyllable' : (isName ? 'modeHintName' : 'modeHintSound'));
      inputHint.textContent = t(nikud ? 'inputHintSyllable' : (isName ? 'inputHintName' : 'inputHintSound'));
    } else {
      modeHint.textContent = t(nikud ? 'modeHintManualSyllable' : (isName ? 'modeHintManualName' : 'modeHintManualSound'));
      inputHint.textContent = t('inputHintManual');
    }
    subtabEls.forEach(function (el) {
      el.classList.toggle('active', el.dataset.mode === store.settings.mode);
    });
  }

  function sortLabel() {
    if (store.settings.sort === 'worst') return t('sortWorst');
    if (store.settings.sort === 'best') return t('sortBest');
    return t('sortDefault');
  }

  function sortLetters(list) {
    const mode = store.settings.sort;
    const arr = list.slice();
    if (mode === 'worst') {
      arr.sort(function (a, b) {
        const sa = statOf(a.key), sb = statOf(b.key);
        if (sa.total === 0 && sb.total === 0) return 0;
        if (sa.total === 0) return -1;
        if (sb.total === 0) return 1;
        return sa.rate - sb.rate;
      });
    } else if (mode === 'best') {
      arr.sort(function (a, b) {
        const sa = statOf(a.key), sb = statOf(b.key);
        if (sa.total === 0 && sb.total === 0) return 0;
        if (sa.total === 0) return 1;
        if (sb.total === 0) return -1;
        return sb.rate - sa.rate;
      });
    }
    return arr;
  }

  function alphaCard(letter) {
    const s = statOf(letter.key);
    const card = document.createElement('div');
    card.className = 'alpha-card ' + masteryClass(letter.key);
    const note = locNote(letter);
    card.title = locName(letter) + ' — ' + locSound(letter) + (note ? ' · ' + note : '');

    const glyph = document.createElement('div');
    glyph.className = 'a-glyph';
    glyph.dir = 'rtl';
    glyph.textContent = letter.glyph;

    const name = document.createElement('div');
    name.className = 'a-name';
    name.textContent = locName(letter);

    const sound = document.createElement('div');
    sound.className = 'a-sound';
    sound.textContent = locSound(letter);

    const bar = document.createElement('div');
    bar.className = 'alpha-bar';
    const fill = document.createElement('div');
    fill.className = 'alpha-fill';
    fill.style.width = (s.rate || 0) + '%';
    fill.style.background = rateColor(s.rate, s.total);
    bar.appendChild(fill);

    const rate = document.createElement('div');
    rate.className = 'alpha-rate';
    rate.textContent = s.total ? s.rate + '% · ' + s.c + '/' + s.total : t('notTrained');

    card.appendChild(glyph);
    card.appendChild(name);
    card.appendChild(sound);
    card.appendChild(bar);
    card.appendChild(rate);

    return card;
  }

  function renderNikudTable() {
    const box = $('nikud-table');
    if (!box) return;
    box.innerHTML = '';
    NIKUD_VOWELS.forEach(function (v) {
      const cell = document.createElement('div');
      cell.className = 'nikud-cell';
      const sign = document.createElement('div');
      sign.className = 'nikud-sign';
      sign.dir = 'rtl';
      sign.textContent = 'א' + v.char;
      const name = document.createElement('div');
      name.className = 'nikud-name';
      name.textContent = lang() === 'en' ? v.nameEn : v.nameRu;
      const sound = document.createElement('div');
      sound.className = 'nikud-sound';
      sound.textContent = lang() === 'en' ? v.en[0] : v.ru;
      cell.appendChild(sign);
      cell.appendChild(name);
      cell.appendChild(sound);
      box.appendChild(cell);
    });
  }

  function renderAlphabet() {
    alphaGridBasic.innerHTML = '';
    sortLetters(BASIC_LETTERS).forEach(function (l) {
      alphaGridBasic.appendChild(alphaCard(l));
    });

    alphaGridFinals.innerHTML = '';
    sortLetters(FINAL_LETTERS).forEach(function (l) {
      alphaGridFinals.appendChild(alphaCard(l));
    });

    let mastered = 0, correctCount = 0, totalCount = 0;
    BASIC_LETTERS.forEach(function (l) {
      const s = statOf(l.key);
      if (s.total >= 3 && s.rate >= 70) mastered++;
      correctCount += s.c;
      totalCount += s.total;
    });
    const acc = totalCount ? Math.round(correctCount / totalCount * 100) : null;
    alphaInfo.textContent = t('alphaInfo', {
      m: mastered, a: acc === null ? '—' : acc + '%'
    });
    sortBtn.textContent = sortLabel();
    sortBtn.classList.toggle('active-sort', store.settings.sort !== 'default');
    renderNikudTable();
  }

  function applyScript() {
    const cursive = store.settings.script === 'cursive';
    document.documentElement.classList.toggle('script-cursive', cursive);
    document.documentElement.classList.toggle('nikud-on', nikudActive());
  }

  function syncControls() {
    applyScript();
    const autoCheck = !!store.settings.autoCheck;
    autoCheckBtn.textContent = autoCheck ? t('autoCheckOn') : t('autoCheckOff');
    autoCheckBtn.classList.toggle('on', autoCheck);
    checkBtn.style.display = autoCheck ? 'none' : '';
    quizInput.enterKeyHint = autoCheck ? 'done' : 'send';
    const limit = store.settings.timeLimit;
    slider.value = String(limit);
    timeLabel.textContent = limit.toFixed(1) + ' ' + t('seconds');

    const timer = timerEnabled();
    timerBtn.textContent = timer ? t('timerOn') : t('timerOff');
    timerBtn.classList.toggle('on', timer);
    timerControls.style.display = timer ? '' : 'none';
    timerNote.style.display = timer ? 'none' : '';

    const script = store.settings.script === 'cursive';
    scriptBtn.textContent = script ? t('scriptCursive') : t('scriptPrint');
    scriptBtn.classList.toggle('on', script);

    const nikud = !!store.settings.nikud;
    nikudBtn.textContent = nikud ? t('nikudOn') : t('nikudOff');
    nikudBtn.classList.toggle('on', nikud);
    const nameMode = store.settings.mode === 'name';
    nikudBtn.disabled = nameMode;
    nikudBtn.classList.toggle('disabled', nameMode);

    const finals = store.settings.finals;
    const finalsDisabled = nikudActive();
    finalsBtn.textContent = finals ? t('finalsOn') : t('finalsOff');
    finalsBtn.classList.toggle('on', finals);
    finalsBtn.disabled = finalsDisabled;
    finalsBtn.classList.toggle('disabled', finalsDisabled);
    alphaFinalsBtn.textContent = finals ? t('finalsOn') : t('finalsOff');
    alphaFinalsBtn.classList.toggle('active-sort', finals);
    alphaFinalsBtn.disabled = finalsDisabled;
    alphaFinalsBtn.classList.toggle('disabled', finalsDisabled);

    let note = '';
    if (nameMode) note = t('nikudNameHint');
    else if (finalsDisabled) note = t('finalsNikudHint');
    nikudNote.textContent = note;
    nikudNote.style.display = note ? '' : 'none';

    subtabEls.forEach(function (el) {
      el.classList.toggle('active', el.dataset.mode === store.settings.mode);
    });
    sortBtn.textContent = sortLabel();
    sortBtn.classList.toggle('active-sort', store.settings.sort !== 'default');
  }

  
  function switchTab(name) {
    const quiz = name === 'quiz';
    tabQuiz.classList.toggle('active', quiz);
    tabAlpha.classList.toggle('active', !quiz);
    screenQuiz.classList.toggle('active', quiz);
    screenAlpha.classList.toggle('active', !quiz);

    if (quiz) {
      resumeTimer();
      focusInput();
    } else {
      pauseTimer();
      renderAlphabet();
    }
  }

  function setMode(mode) {
    if (store.settings.mode === mode) return;
    store.settings.mode = mode;
    saveStore();
    srs = [];
    buildHud();
    syncControls();
    startRound();
  }

  function toggleFinals() {
    if (nikudActive()) return;
    store.settings.finals = !store.settings.finals;
    saveStore();
    srs = [];
    buildHud();
    syncControls();
    updateHeader();
    startRound();
    if (!isQuizActive()) renderAlphabet();
  }

  function toggleScript() {
    store.settings.script = store.settings.script === 'cursive' ? 'print' : 'cursive';
    saveStore();
    applyScript();
    syncControls();
    updateHud();
    updateHeader();
    if (!isQuizActive()) renderAlphabet();
  }

  function toggleNikud() {
    if (store.settings.mode !== 'sound') return;
    store.settings.nikud = !store.settings.nikud;
    saveStore();
    srs = [];
    applyScript();
    buildHud();
    syncControls();
    updateHeader();
    startRound();
    if (!isQuizActive()) renderAlphabet();
  }

  function toggleTimer() {
    store.settings.timer = !store.settings.timer;
    saveStore();
    syncControls();
    if (timerEnabled()) {
      if (!locked && isQuizActive()) startTimer();
    } else {
      stopTimer();
      pausedLeft = null;
      setTimerUI(store.settings.timeLimit);
    }
  }

  function cycleSort() {
    if (store.settings.sort === 'default') store.settings.sort = 'worst';
    else if (store.settings.sort === 'worst') store.settings.sort = 'best';
    else store.settings.sort = 'default';
    saveStore();
    renderAlphabet();
  }

  function updateThemeButton() {
    if (!themeBtn) return;
    const dark = currentTheme === 'dark';
    themeBtn.textContent = dark ? '☀️' : '🌙';
    const label = t(dark ? 'themeLight' : 'themeDark');
    themeBtn.title = label;
    themeBtn.setAttribute('aria-label', label);
  }

  function applyTheme(theme, persist) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', currentTheme === 'dark' ? '#16120f' : '#f5ede0');
    if (persist) {
      try { localStorage.setItem(LS_THEME, currentTheme); } catch (e) {}
    }
    updateThemeButton();
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
  }

  function updateLangButtons() {
    flagBtns.forEach(function (b) {
      const active = b.dataset.lang === lang();
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function applyLanguage() {
    document.documentElement.lang = lang();
    document.title = t('appTitle');

    const els = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(els, function (el) {
      el.textContent = t(el.dataset.i18n);
    });

    progressBar.title = t('masteredTitle');
    updateLangButtons();
    updateThemeButton();
    updateModeUI();
    syncControls();
    updateStatsUI();
    renderAlphabet();
  }

  function setLang(code) {
    if (store.settings.lang === code) return;
    store.settings.lang = code;
    saveStore();
    srs = [];
    applyLanguage();
    startRound();
  }

  function resetProgress() {
    if (!confirm(t('resetConfirm'))) return;
    try { localStorage.removeItem(LS_KEY); } catch (e) {}
    store = JSON.parse(JSON.stringify(DEFAULT_STORE));
    saveStore();
    session.score = 0;
    session.streak = 0;
    session.correct = 0;
    session.total = 0;
    srs = [];
    pausedLeft = null;
    applyLanguage();
    buildHud();
    startRound();
    showToast(t('resetToast'));
  }

  
  tabQuiz.addEventListener('click', function () { switchTab('quiz'); });
  tabAlpha.addEventListener('click', function () { switchTab('alpha'); });

  flagBtns.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  subtabEls.forEach(function (el) {
    el.addEventListener('click', function () { setMode(el.dataset.mode); });
  });

  slider.addEventListener('input', function () {
    const v = parseFloat(slider.value);
    if (isNaN(v)) return;
    store.settings.timeLimit = v;
    saveStore();
    timeLabel.textContent = v.toFixed(1) + ' ' + t('seconds');
    if (timerEnabled() && !locked) startTimer();
  });
  slider.addEventListener('change', function () { slider.blur(); });

  finalsBtn.addEventListener('click', toggleFinals);
  alphaFinalsBtn.addEventListener('click', toggleFinals);
  scriptBtn.addEventListener('click', toggleScript);
  nikudBtn.addEventListener('click', toggleNikud);
  timerBtn.addEventListener('click', toggleTimer);
  themeBtn.addEventListener('click', toggleTheme);
  sortBtn.addEventListener('click', cycleSort);

  quizInput.addEventListener('input', onInput);
  quizInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (locked) return;
      if (store.settings.autoCheck) {
        onInput();
        if (!locked) handleWrong();
      } else {
        submitManualAnswer();
      }
    }
  });

  skipBtn.addEventListener('click', function () {
    handleWrong();
  });

  checkBtn.addEventListener('click', submitManualAnswer);
  autoCheckBtn.addEventListener('click', toggleAutoCheck);

  resetBtn.addEventListener('click', resetProgress);

  
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length !== 1) return;
    if (!isQuizActive() || locked) return;

    const a = document.activeElement;
    if (a) {
      const tag = a.tagName;
      if (tag === 'INPUT' && a.type !== 'range') return;
      if (tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (tag === 'BUTTON' && (e.key === ' ' || e.key === 'Enter')) return;
    }

    quizInput.focus();
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(quizInput, quizInput.value + e.key);
    quizInput.dispatchEvent(new Event('input', { bubbles: true }));
    e.preventDefault();
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      pauseTimer();
    } else if (isQuizActive()) {
      resumeTimer();
    }
  });

  
  function initCursiveFont() {
    const el = document.getElementById('cursive-font-face');
    if (!el) return;
    if (el.textContent.indexOf('__CURSIVE_WOFF2_BASE64__') !== -1) {
      document.documentElement.style.setProperty('--hebrew-cursive', 'var(--hebrew)');
    }
  }

  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });

  
  initCursiveFont();
  applyTheme(currentTheme, false);
  buildHud();
  applyLanguage();
  updateHeader();
  startRound();
})();
