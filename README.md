# Hebrew · Alphabet — Letter Trainer

[Open the app](https://websamurai01.github.io/alphabet_trainer) · [Русская версия](README_RU.md)

A single-file, offline trainer for learning the names and sounds of the Hebrew letters. It runs in a modern browser with no installation, build step, or internet connection.

---

## Quick start

1. [Open the app](alphabet_trainer.html) in a modern browser.
2. The app starts in **untimed mode** by default, so you can answer at your own pace.
3. Type the letter name or sound into the field below the large letter card.
4. Answers are checked instantly; pressing Enter is optional.
5. Switch between **Letter names** and **Sounds**, and between the **Quiz** and **Alphabet** tabs.

The file can also be hosted on any static web server.

---

## Quiz tab

### Modes

**Letter names**
- The app shows a letter; type its name in the selected input script.
- English mode examples: `alef`, `bet`, `gimel`.
- Common spelling variants are accepted, such as `beit`, `gimmel`, `tzadi`, and `aleph`.

**Sounds**
- The app shows a letter; type its sound.
- English mode examples: `b`, `sh`, `ts`.
- For letters with two readings, either reading is accepted:
  - ב — `б` / `в` (b / v)
  - כ — `к` / `х` (k / kh)
  - פ — `п` / `ф` (p / f)
  - ש — `ш` / `с` (sh / s)
  - ו — `в` / `у` (v / u)
  - י — `й` / `и` (y / i)
  - א and ע — `а` / `э` (a / e)
- In English mode, ח and כ also accept `kh` and `ch`.

### Answer validation

- An exact match with any accepted answer is correct.
- If the typed text stops being a valid prefix of every accepted answer, it is marked wrong immediately.
- Enter submits the current input; if it is not correct, the right answer is shown.
- **Show answer** reveals the answer and records a mistake.

### Timer

- The timer is **off by default**.
- The **Timer: off / Timer: on** button switches the mode.
- With the timer on:
  - a 1–10 second “time per letter” slider appears;
  - a countdown bar shifts from green to gold to red.
- When time runs out, the answer is counted as a mistake and the correct answer is shown.
- Turning the timer off stops the countdown and hides the slider and bar.
- The timer preference is saved between visits.

### Score, streak, and repetition

- Each correct answer gives **+10 points**.
- A mistake or timeout resets the current streak.
- High score and best streak are saved.
- Missed letters return to a spaced-repetition (SRS) queue after a couple of rounds.
- Session accuracy is shown below the input.
- The header progress shows mastered letters: a letter is mastered after at least 3 attempts with accuracy of 70% or higher.

### Alphabet HUD

A compact strip of letters sits below the input:

- grey — not trained yet;
- green — high accuracy;
- teal — medium accuracy;
- red — low accuracy;
- the current letter has an outline and is slightly raised.

### Final forms

- **Finals: off / Finals: on** adds the five final forms (ך ם ן ף ץ) to the quiz and HUD.
- In name mode, use their full names: `kaf sofit`, `mem sofit`, `nun sofit`, `pe sofit`, `tsadi sofit`.
- In sound mode they accept the same sounds as their regular forms.

---

## Alphabet tab

- Shows all **27 forms**: 22 basic letters and 5 final forms.
- Each card displays:
  - the letter;
  - its name;
  - its sound;
  - an accuracy bar and percentage.
- Border colors reflect accuracy:
  - green — 80% or higher;
  - teal — 50–79%;
  - red — below 50%.
- Hover, or long-press on a phone, to see a tooltip with the name, sound, and a short note.
- The sort button cycles through:
  - standard order;
  - hardest first;
  - easiest first.
- The finals button here also toggles final forms in the quiz.

---

## Interface language

Two flags in the top-right corner:

- 🇷🇺 — Russian interface with Cyrillic input;
- 🇺🇸 — English interface with Latin input.

Switching the language changes:

- all labels, hints, and buttons;
- the expected input script;
- letter names and sounds;
- timer, theme, and accuracy text.

The choice is saved and restored on the next visit.

---

## Dark theme

The button in the top-left corner:

- 🌙 — enable the dark theme;
- ☀️ — return to the light theme.

The theme:

- is saved in `localStorage`;
- uses the shared key `hebrew_theme_v1` with the “Hebrew · 100 words” app (both pick it up when they share the same storage origin);
- follows `prefers-color-scheme` when no preference has been saved yet;
- is applied before the page paints, so there is no light-theme flash.

---

## Typing and shortcuts

- The input is focused automatically.
- A physical keyboard can be used.
- Enter is optional, but submits the answer and reveals the result.
- If focus is lost, start typing and the input will regain focus.
- On a phone, use the on-screen keyboard and switch it to the Russian or Latin layout matching the selected language.

---

## Saving and reset

Saved data:

- score, high score, and best streak;
- per-letter statistics;
- settings: language, mode, finals, timer, time limit, sorting;
- theme (stored under a separate shared key).

The **Reset progress** button at the bottom:

- clears statistics and records;
- returns the interface language to Russian;
- turns the timer and finals off;
- resets sorting;
- keeps the theme.

A confirmation is requested before resetting.

---

## FAQ

**Why is there no sound?**
The app intentionally does not use speech synthesis. Only short audio beeps and vibration remain. Make sure the device is not muted and the browser is allowed to play audio.

**Will progress persist in private browsing?**
Private mode or blocked `localStorage` may prevent progress from surviving after the tab is closed.

**Does it work offline?**
Yes. All code, styles, and data live in the single HTML file.

**Why was my letter marked wrong immediately?**
The typed text stopped being a valid prefix of every accepted answer. For example, `alp` for “alef” fails immediately. This is intentional instant feedback.

**What is the difference between session accuracy and header progress?**
Session accuracy covers only the current run. Header progress is long-term mastery based on saved per-letter statistics.

---

## Technical notes

- One HTML file, no dependencies, no build step.
- Vanilla JavaScript.
- `localStorage` keys:
  - `hebrew_alphabet_trainer_v1` — settings, score, and letter statistics;
  - `hebrew_theme_v1` — theme (shared with the word trainer).
- Supported in modern Chrome, Edge, Firefox, Safari, and mobile browsers.
