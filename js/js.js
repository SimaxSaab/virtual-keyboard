/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
document.body.insertAdjacentHTML('afterbegin', `
  <main>
    <h1 class="title">Virtual Keyboard when you study in RSS</h1>
    <p class="hint">Use right <kbd>Ctrl</kbd> to switch language because I never use this key).</p>
    <textarea class="output" placeholder="Type here" rows="5" cols="50" spellcheck="false" autocorrect="off"></textarea>
    <div class="keyboard" data-language="en">
      <div class="row" data-row="1" style="grid-template-columns: repeat(14, 1fr);">
        <div class="key" data-code="Backquote" data-fn="false">
          <div class="sup">~</div>
          <div class="sub changed">\`</div>
        </div>
        <div class="key" data-code="Digit1" data-fn="false">
          <div class="sup">!</div>
          <div class="sub changed">1</div>
        </div>
        <div class="key" data-code="Digit2" data-fn="false">
          <div class="sup">@</div>
          <div class="sub changed">2</div>
        </div>
        <div class="key" data-code="Digit3" data-fn="false">
          <div class="sup">#</div>
          <div class="sub changed">3</div>
        </div>
        <div class="key" data-code="Digit4" data-fn="false">
          <div class="sup">$</div>
          <div class="sub changed">4</div>
        </div>
        <div class="key" data-code="Digit5" data-fn="false">
          <div class="sup">%</div>
          <div class="sub changed">5</div>
        </div>
        <div class="key" data-code="Digit6" data-fn="false">
          <div class="sup">^</div>
          <div class="sub changed">6</div>
        </div>
        <div class="key" data-code="Digit7" data-fn="false">
          <div class="sup">&amp;</div>
          <div class="sub changed">7</div>
        </div>
        <div class="key" data-code="Digit8" data-fn="false">
          <div class="sup">*</div>
          <div class="sub changed">8</div>
        </div>
        <div class="key" data-code="Digit9" data-fn="false">
          <div class="sup">(</div>
          <div class="sub changed">9</div>
        </div>
        <div class="key" data-code="Digit0" data-fn="false">
          <div class="sup">)</div>
          <div class="sub changed">0</div>
        </div>
        <div class="key" data-code="Minus" data-fn="false">
          <div class="sup">_</div>
          <div class="sub changed">-</div>
        </div>
        <div class="key" data-code="Equal" data-fn="false">
          <div class="sup">+</div>
          <div class="sub changed">=</div>
        </div>
        <div class="key" data-code="Delete" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Delete</div>
        </div>
      </div>
      <div class="row" data-row="2" style="grid-template-columns: repeat(14, 1fr);">
        <div class="key" data-code="Tab" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Tab</div>
        </div>
        <div class="key" data-code="KeyQ" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">q</div>
        </div>
        <div class="key" data-code="KeyW" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">w</div>
        </div>
        <div class="key" data-code="KeyE" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">e</div>
        </div>
        <div class="key" data-code="KeyR" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">r</div>
        </div>
        <div class="key" data-code="KeyT" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">t</div>
        </div>
        <div class="key" data-code="KeyY" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">y</div>
        </div>
        <div class="key" data-code="KeyU" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">u</div>
        </div>
        <div class="key" data-code="KeyI" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">i</div>
        </div>
        <div class="key" data-code="KeyO" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">o</div>
        </div>
        <div class="key" data-code="KeyP" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">p</div>
        </div>
        <div class="key" data-code="BracketLeft" data-fn="false">
          <div class="sup">{</div>
          <div class="sub changed">[</div>
        </div>
        <div class="key" data-code="BracketRight" data-fn="false">
          <div class="sup">}</div>
          <div class="sub changed">]</div>
        </div>
        <div class="key" data-code="Backspace" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Backspace</div>
        </div>
      </div>
      <div class="row" data-row="3" style="grid-template-columns: repeat(14, 1fr);">
        <div class="key" data-code="CapsLock" data-fn="true">
          <div class="sup"></div>
          <div class="sub">CapsLock</div>
        </div>
        <div class="key" data-code="KeyA" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">a</div>
        </div>
        <div class="key" data-code="KeyS" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">s</div>
        </div>
        <div class="key" data-code="KeyD" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">d</div>
        </div>
        <div class="key" data-code="KeyF" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">f</div>
        </div>
        <div class="key" data-code="KeyG" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">g</div>
        </div>
        <div class="key" data-code="KeyH" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">h</div>
        </div>
        <div class="key" data-code="KeyJ" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">j</div>
        </div>
        <div class="key" data-code="KeyK" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">k</div>
        </div>
        <div class="key" data-code="KeyL" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">l</div>
        </div>
        <div class="key" data-code="Semicolon" data-fn="false">
          <div class="sup">:</div>
          <div class="sub changed">;</div>
        </div>
        <div class="key" data-code="Quote" data-fn="false">
          <div class="sup">"</div>
          <div class="sub changed">'</div>
        </div>
        <div class="key" data-code="Backslash" data-fn="false">
          <div class="sup">|</div>
          <div class="sub changed">\\</div>
        </div>
        <div class="key" data-code="Enter" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Enter</div>
        </div>
      </div>
      <div class="row" data-row="4" style="grid-template-columns: repeat(14, 1fr);">
        <div class="key" data-code="ShiftLeft" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Shift</div>
        </div>
        <div class="key" data-code="IntlBackslash" data-fn="false">
          <div class="sup">&gt;</div>
          <div class="sub changed">&lt;</div>
        </div>
        <div class="key" data-code="KeyZ" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">z</div>
        </div>
        <div class="key" data-code="KeyX" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">x</div>
        </div>
        <div class="key" data-code="KeyC" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">c</div>
        </div>
        <div class="key" data-code="KeyV" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">v</div>
        </div>
        <div class="key" data-code="KeyB" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">b</div>
        </div>
        <div class="key" data-code="KeyN" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">n</div>
        </div>
        <div class="key" data-code="KeyM" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">m</div>
        </div>
        <div class="key" data-code="Comma" data-fn="false">
          <div class="sup">&lt;</div>
          <div class="sub changed">,</div>
        </div>
        <div class="key" data-code="Period" data-fn="false">
          <div class="sup">&gt;</div>
          <div class="sub changed">.</div>
        </div>
        <div class="key" data-code="Slash" data-fn="false">
          <div class="sup">?</div>
          <div class="sub changed">/</div>
        </div>
        <div class="key" data-code="ArrowUp" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">↑</div>
        </div>
        <div class="key" data-code="ShiftRight" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Shift</div>
        </div>
      </div>
      <div class="row" data-row="5" style="grid-template-columns: repeat(9, 1fr);">
        <div class="key" data-code="ControlLeft" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Ctrl</div>
        </div>
        <div class="key" data-code="Win" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Win</div>
        </div>
        <div class="key" data-code="AltLeft" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Alt</div>
        </div>
        <div class="key" data-code="Space" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed"> </div>
        </div>
        <div class="key" data-code="AltRight" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Alt</div>
        </div>
        <div class="key" data-code="ArrowLeft" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">←</div>
        </div>
        <div class="key" data-code="ArrowDown" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">↓</div>
        </div>
        <div class="key" data-code="ArrowRight" data-fn="false">
          <div class="sup"></div>
          <div class="sub changed">→</div>
        </div>
        <div class="key" data-code="ControlRight" data-fn="true">
          <div class="sup"></div>
          <div class="sub">Ctrl</div>
        </div>
      </div>
    </div>
  </main>
`);

const ru = [
  {
    small: 'ё',
    shift: 'Ё',
    code: 'Backquote',
    keycode: '192',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
    keycode: '49',
  },
  {
    small: '2',
    shift: '"',
    code: 'Digit2',
    keycode: '50',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
    keycode: '51',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
    keycode: '52',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
    keycode: '53',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
    keycode: '54',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
    keycode: '55',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
    keycode: '56',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
    keycode: '57',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
    keycode: '48',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
    keycode: '189',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
    keycode: '187',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
    keycode: '46',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
    keycode: '9',
  },
  {
    small: 'й',
    shift: 'Й',
    code: 'KeyQ',
    keycode: '81',
  },
  {
    small: 'ц',
    shift: 'Ц',
    code: 'KeyW',
    keycode: '87',
  },
  {
    small: 'у',
    shift: 'У',
    code: 'KeyE',
    keycode: '69',
  },
  {
    small: 'к',
    shift: 'К',
    code: 'KeyR',
    keycode: '82',
  },
  {
    small: 'е',
    shift: 'Е',
    code: 'KeyT',
    keycode: '84',
  },
  {
    small: 'н',
    shift: 'Н',
    code: 'KeyY',
    keycode: '89',
  },
  {
    small: 'г',
    shift: 'Г',
    code: 'KeyU',
    keycode: '85',
  },
  {
    small: 'ш',
    shift: 'Ш',
    code: 'KeyI',
    keycode: '73',
  },
  {
    small: 'щ',
    shift: 'Щ',
    code: 'KeyO',
    keycode: '79',
  },
  {
    small: 'з',
    shift: 'З',
    code: 'KeyP',
    keycode: '80',
  },
  {
    small: 'х',
    shift: 'Х',
    code: 'BracketLeft',
    keycode: '219',
  },
  {
    small: 'ъ',
    shift: 'Ъ',
    code: 'BracketRight',
    keycode: '221',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
    keycode: '8',
  },
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
    keycode: '0',
  },
  {
    small: 'ф',
    shift: 'Ф',
    code: 'KeyA',
    keycode: '65',
  },
  {
    small: 'ы',
    shift: 'Ы',
    code: 'KeyS',
    keycode: '83',
  },
  {
    small: 'в',
    shift: 'В',
    code: 'KeyD',
    keycode: '68',
  },
  {
    small: 'а',
    shift: 'А',
    code: 'KeyF',
    keycode: '70',
  },
  {
    small: 'п',
    shift: 'П',
    code: 'KeyG',
    keycode: '71',
  },
  {
    small: 'р',
    shift: 'Р',
    code: 'KeyH',
    keycode: '72',
  },
  {
    small: 'о',
    shift: 'О',
    code: 'KeyJ',
    keycode: '74',
  },
  {
    small: 'л',
    shift: 'Л',
    code: 'KeyK',
    keycode: '75',
  },
  {
    small: 'д',
    shift: 'Д',
    code: 'KeyL',
    keycode: '76',
  },
  {
    small: 'ж',
    shift: 'Ж',
    code: 'Semicolon',
    keycode: '186',
  },
  {
    small: 'э',
    shift: 'Э',
    code: 'Quote',
    keycode: '222',
  },
  {
    small: '\\',
    shift: '/',
    code: 'Backslash',
    keycode: '220',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
    keycode: '13',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
    keycode: '16',
  },
  {
    small: '/',
    shift: '|',
    code: 'IntlBackslash',
    keycode: '191',
  },
  {
    small: 'я',
    shift: 'Я',
    code: 'KeyZ',
    keycode: '90',
  },
  {
    small: 'ч',
    shift: 'Ч',
    code: 'KeyX',
    keycode: '88',
  },
  {
    small: 'с',
    shift: 'С',
    code: 'KeyC',
    keycode: '67',
  },
  {
    small: 'м',
    shift: 'М',
    code: 'KeyV',
    keycode: '86',
  },
  {
    small: 'и',
    shift: 'И',
    code: 'KeyB',
    keycode: '66',
  },
  {
    small: 'т',
    shift: 'Т',
    code: 'KeyN',
    keycode: '78',
  },
  {
    small: 'ь',
    shift: 'Ь',
    code: 'KeyM',
    keycode: '77',
  },
  {
    small: 'б',
    shift: 'Б',
    code: 'Comma',
    keycode: '188',
  },
  {
    small: 'ю',
    shift: 'Ю',
    code: 'Period',
    keycode: '190',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
    keycode: '191',
  },
  {
    small: '&uarr;',
    shift: null,
    code: 'ArrowUp',
    keycode: '38',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
    keycode: '16',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlLeft',
    keycode: '17',
  },
  {
    small: 'Win',
    shift: null,
    code: 'Win',
    keycode: '1000',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
    keycode: '18',
  },
  {
    small: ' ',
    shift: null,
    code: 'Space',
    keycode: '32',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
    keycode: '225',
  },
  {
    small: '&larr;',
    shift: null,
    code: 'ArrowLeft',
    keycode: '37',
  },
  {
    small: '&darr;',
    shift: null,
    code: 'ArrowDown',
    keycode: '40',
  },
  {
    small: '&rarr;',
    shift: null,
    code: 'ArrowRight',
    keycode: '39',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
    keycode: '17',
  },
];

const en = [
  {
    small: '`',
    shift: '~',
    code: 'Backquote',
    keycode: '192',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
    keycode: '49',
  },
  {
    small: '2',
    shift: '@',
    code: 'Digit2',
    keycode: '50',
  },
  {
    small: '3',
    shift: '#',
    code: 'Digit3',
    keycode: '51',
  },
  {
    small: '4',
    shift: '$',
    code: 'Digit4',
    keycode: '52',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
    keycode: '53',
  },
  {
    small: '6',
    shift: '^',
    code: 'Digit6',
    keycode: '54',
  },
  {
    small: '7',
    shift: '&',
    code: 'Digit7',
    keycode: '55',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
    keycode: '56',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
    keycode: '57',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
    keycode: '48',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
    keycode: '189',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
    keycode: '187',
  },
  {
    small: 'Delete',
    shift: null,
    code: 'Delete',
    keycode: '46',
  },
  {
    small: 'Tab',
    shift: null,
    code: 'Tab',
    keycode: '9',
  },
  {
    small: 'q',
    shift: 'Q',
    code: 'KeyQ',
    keycode: '81',
  },
  {
    small: 'w',
    shift: 'W',
    code: 'KeyW',
    keycode: '87',
  },
  {
    small: 'e',
    shift: 'E',
    code: 'KeyE',
    keycode: '69',
  },
  {
    small: 'r',
    shift: 'R',
    code: 'KeyR',
    keycode: '82',
  },
  {
    small: 't',
    shift: 'T',
    code: 'KeyT',
    keycode: '84',
  },
  {
    small: 'y',
    shift: 'Y',
    code: 'KeyY',
    keycode: '89',
  },
  {
    small: 'u',
    shift: 'U',
    code: 'KeyU',
    keycode: '85',
  },
  {
    small: 'i',
    shift: 'I',
    code: 'KeyI',
    keycode: '73',
  },
  {
    small: 'o',
    shift: 'O',
    code: 'KeyO',
    keycode: '79',
  },
  {
    small: 'p',
    shift: 'P',
    code: 'KeyP',
    keycode: '80',
  },
  {
    small: '[',
    shift: '{',
    code: 'BracketLeft',
    keycode: '219',
  },
  {
    small: ']',
    shift: '}',
    code: 'BracketRight',
    keycode: '221',
  },
  {
    small: 'Backspace',
    shift: null,
    code: 'Backspace',
    keycode: '8',
  },
  {
    small: 'CapsLock',
    shift: null,
    code: 'CapsLock',
    keycode: '0',
  },
  {
    small: 'a',
    shift: 'A',
    code: 'KeyA',
    keycode: '65',
  },
  {
    small: 's',
    shift: 'S',
    code: 'KeyS',
    keycode: '83',
  },
  {
    small: 'd',
    shift: 'D',
    code: 'KeyD',
    keycode: '68',
  },
  {
    small: 'f',
    shift: 'F',
    code: 'KeyF',
    keycode: '70',
  },
  {
    small: 'g',
    shift: 'G',
    code: 'KeyG',
    keycode: '71',
  },
  {
    small: 'h',
    shift: 'H',
    code: 'KeyH',
    keycode: '72',
  },
  {
    small: 'j',
    shift: 'J',
    code: 'KeyJ',
    keycode: '74',
  },
  {
    small: 'k',
    shift: 'K',
    code: 'KeyK',
    keycode: '75',
  },
  {
    small: 'l',
    shift: 'L',
    code: 'KeyL',
    keycode: '76',
  },
  {
    small: ';',
    shift: ':',
    code: 'Semicolon',
    keycode: '186',
  },
  {
    small: "'",
    shift: '"',
    code: 'Quote',
    keycode: '222',
  },
  {
    small: '\\',
    shift: '|',
    code: 'Backslash',
    keycode: '220',
  },
  {
    small: 'Enter',
    shift: null,
    code: 'Enter',
    keycode: 13,
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftLeft',
    keycode: '16',
  },
  {
    small: '<',
    shift: '>',
    code: 'IntlBackslash',
    keycode: '220',
  },
  {
    small: 'z',
    shift: 'Z',
    code: 'KeyZ',
    keycode: '90',
  },
  {
    small: 'x',
    shift: 'X',
    code: 'KeyX',
    keycode: '88',
  },
  {
    small: 'c',
    shift: 'C',
    code: 'KeyC',
    keycode: '67',
  },
  {
    small: 'v',
    shift: 'V',
    code: 'KeyV',
    keycode: '86',
  },
  {
    small: 'b',
    shift: 'B',
    code: 'KeyB',
    keycode: '66',
  },
  {
    small: 'n',
    shift: 'N',
    code: 'KeyN',
    keycode: '78',
  },
  {
    small: 'm',
    shift: 'M',
    code: 'KeyM',
    keycode: '77',
  },
  {
    small: ',',
    shift: '<',
    code: 'Comma',
    keycode: '188',
  },
  {
    small: '.',
    shift: '>',
    code: 'Period',
    keycode: '190',
  },
  {
    small: '/',
    shift: '?',
    code: 'Slash',
    keycode: '191',
  },
  {
    small: '&uarr;',
    shift: null,
    code: 'ArrowUp',
    keycode: '38',
  },
  {
    small: 'Shift',
    shift: null,
    code: 'ShiftRight',
    keycode: '16',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlLeft',
    keycode: '17',
  },
  {
    small: 'Win',
    shift: null,
    code: 'Win',
    keycode: '1000',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltLeft',
    keycode: '18',
  },
  {
    small: ' ',
    shift: null,
    code: 'Space',
    keycode: '32',
  },
  {
    small: 'Alt',
    shift: null,
    code: 'AltRight',
    keycode: '225',
  },
  {
    small: '&larr;',
    shift: null,
    code: 'ArrowLeft',
    keycode: '37',
  },
  {
    small: '&darr;',
    shift: null,
    code: 'ArrowDown',
    keycode: '40',
  },
  {
    small: '&rarr;',
    shift: null,
    code: 'ArrowRight',
    keycode: '39',
  },
  {
    small: 'Ctrl',
    shift: null,
    code: 'ControlRight',
    keycode: '17',
  },
];

const mainArea = document.querySelectorAll('.key');
const output = document.querySelector('.output');
let timer;
let sep = 0;
let arrUpDown = [];
let lang = [];
let swLang = window.localStorage.getItem('langStor') || 'ru';
let capsLock = false;

const init = () => {
  if (swLang === 'ru') {
    lang = ru;
  } else {
    lang = en;
  }
  mainArea.forEach((item, i) => {
    item.querySelector('.sub').innerHTML = lang[i].small;
  });
};

init();

const backspace = () => {
  if (sep === 0) return;
  const text = output.innerHTML;
  output.innerHTML = text.slice(0, sep - 1) + text.slice(sep);
  sep -= 1;
};

const deleteSym = () => {
  const text = output.innerHTML;
  output.innerHTML = text.slice(0, sep) + text.slice(sep + 1);
};

const delay = (fn, sym) => {
  timer = setTimeout(() => {
    timer = setInterval(() => {
      fn(sym);
    }, 50);
    return timer;
  }, 500);
};

const focus = () => {
  output.focus();
  output.selectionStart = sep;
  output.selectionEnd = sep;
};

const textFocus = () => {
  sep = output.selectionStart;
};

const switchLanguage = () => {
  if (swLang === 'ru') {
    lang = en;
    swLang = 'en';
  } else {
    lang = ru;
    swLang = 'ru';
  }
  window.localStorage.setItem('langStor', swLang);
  mainArea.forEach((item, i) => {
    item.querySelector('.sub').innerHTML = lang[i].small;
  });
};

const insSymb = (sym) => {
  output.innerHTML = output.innerHTML.slice(0, sep) + sym + output.innerHTML.slice(sep);
  sep += 1;
};

function main(e) {
  const eventObj = e.currentTarget;
  const symbol = eventObj.querySelector('.sub').innerText;
  let res = '';
  let i = -1;
  switch (eventObj.dataset.code) {
    case 'Tab':
      insSymb('     ');
      sep += 4;
      break;
    case 'AltLeft':
    case 'AltRight':
    case 'Win':
    case 'ControlLeft':
      return;
    case 'CapsLock':
      if (capsLock) {
        mainArea.forEach((item) => {
          if (!item.dataset.code.match(/Tab|CapsLock|Shift|ControlLeft|Win|AltLeft|AltRight|ControlRight|Delete|Backspace|Enter/)) {
            item.querySelector('.sub').innerHTML = item.querySelector('.sub').innerHTML.toLowerCase();
          }
        });
      } else {
        mainArea.forEach((item) => {
          if (!item.dataset.code.match(/Tab|CapsLock|Shift|ControlLeft|Win|AltLeft|AltRight|ControlRight|Delete|Backspace|Enter/)) {
            item.querySelector('.sub').innerHTML = item.querySelector('.sub').innerHTML.toUpperCase();
          }
        });
      }
      capsLock = !capsLock;
      break;
    case 'ControlRight':
      switchLanguage();
      break;
    case 'Delete':
      deleteSym();
      delay(deleteSym);
      break;
    case 'Backspace':
      backspace();
      delay(backspace);
      break;
    case 'Enter':
      insSymb('\n');
      delay(insSymb, '\n');
      break;
    case 'ArrowLeft':
      sep -= 1;
      break;
    case 'ArrowRight':
      sep += 1;
      break;
    case 'ArrowUp':
      arrUpDown = output.innerHTML.split('\n');
      while (res.length <= sep) {
        i += 1;
        res += arrUpDown[i] + 1;
      }

      if (typeof arrUpDown[i - 1] === 'undefined') {
        sep = 0;
      } else if ((sep - res.length + arrUpDown[i].length) >= arrUpDown[i - 1].length) {
        // если позиция в текущей строке больше длині предідущей
        sep = res.length - arrUpDown[i].length - 2;
      } else {
        sep = sep - arrUpDown[i - 1].length - 1;
      }
      break;
    case 'ArrowDown':
      arrUpDown = output.innerHTML.split('\n');
      while (res.length <= sep) {
        i += 1;
        res += arrUpDown[i] + 1;
      }

      if (typeof arrUpDown[i + 1] === 'undefined') {
        sep = res.length - 1;
      } else if ((sep - res.length + arrUpDown[i].length) >= arrUpDown[i + 1].length) {
        // если позиция больше длины следующей строки
        sep = res.length + arrUpDown[i + 1].length;
      } else {
        sep += arrUpDown[i].length + 1;
      }
      break;
    default:
      insSymb(symbol);
      delay(insSymb, symbol);
  }
  eventObj.addEventListener('mouseup', () => {
    clearInterval(timer);
    focus();
  });
  eventObj.classList.add('active');
}

document.onkeydown = function (e) {
  mainArea.forEach((item) => {
    if (item.dataset.code === e.code) item.classList.add('active');
  });
  e.preventDefault();
  const keyCode = document.querySelector(`.key[data-code="${e.code}"]`).querySelector('.sub').innerText;
  let res = '';
  let i = -1;
  switch (e.key) {
    case 'Tab':
      insSymb('     ');
      sep += 4;
      break;
    case 'CapsLock':
      if (capsLock) {
        mainArea.forEach((item) => {
          if (!item.dataset.code.match(/Tab|CapsLock|Shift|ControlLeft|Win|AltLeft|AltRight|ControlRight|Delete|Backspace|Enter/)) {
            item.querySelector('.sub').innerHTML = item.querySelector('.sub').innerHTML.toLowerCase();
          }
        });
      } else {
        mainArea.forEach((item) => {
          if (!item.dataset.code.match(/Tab|CapsLock|Shift|ControlLeft|Win|AltLeft|AltRight|ControlRight|Delete|Backspace|Enter/)) {
            item.querySelector('.sub').innerHTML = item.querySelector('.sub').innerHTML.toUpperCase();
          }
        });
      }
      capsLock = !capsLock;
      break;
    case 'Shift':
    case 'Alt':
      return;
    case 'Control':
      if (e.location === 2) switchLanguage();
      break;
    case 'Delete':
      deleteSym();
      break;
    case 'Backspace':
      backspace();
      break;
    case 'Enter':
      insSymb('\n');
      break;
    case 'ArrowLeft':
      sep -= 1;
      break;
    case 'ArrowRight':
      sep += 1;
      break;
    case 'ArrowUp':
      arrUpDown = output.innerHTML.split('\n');
      while (res.length <= sep) {
        i += 1;
        res += arrUpDown[i] + 1;
      }

      if (typeof arrUpDown[i - 1] === 'undefined') {
        sep = 0;
      } else if ((sep - res.length + arrUpDown[i].length) >= arrUpDown[i - 1].length) {
        // если позиция в текущей строке больше длині предідущей
        sep = res.length - arrUpDown[i].length - 2;
      } else {
        sep = sep - arrUpDown[i - 1].length - 1;
      }
      break;
    case 'ArrowDown':
      arrUpDown = output.innerHTML.split('\n');
      while (res.length <= sep) {
        i += 1;
        res += arrUpDown[i] + 1;
      }

      if (typeof arrUpDown[i + 1] === 'undefined') {
        sep = res.length - 1;
      } else if ((sep - res.length + arrUpDown[i].length) >= arrUpDown[i + 1].length) {
        // если позиция больше длины следующей строки
        sep = res.length + arrUpDown[i + 1].length;
      } else {
        sep += arrUpDown[i].length + 1;
      }
      break;
    default:
      output.innerHTML = output.innerHTML.slice(0, sep) + keyCode + output.innerHTML.slice(sep);
      sep += 1;
  }
};

document.onkeyup = function () {
  mainArea.forEach((item) => {
    item.classList.remove('active');
  });
  output.focus();
  output.selectionStart = sep;
  output.selectionEnd = sep;
};

document.onmouseup = function () {
  mainArea.forEach((item) => {
    item.classList.remove('active');
  });
};

mainArea.forEach((item) => item.addEventListener('mousedown', main));
output.addEventListener('click', textFocus);
