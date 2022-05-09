/* eslint-disable linebreak-style */
/* eslint-disable func-names */
document.body.insertAdjacentHTML('afterbegin', `
  <main>
    <h1 class="title">Virtual Keyboard when you study in RSS</h1>
    <p class="hint">Use left <kbd>Alt</kbd> + <kbd>Shift</kbd> to switch language.</p>
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

const mainArea = document.querySelectorAll('.key');
const output = document.querySelector('.output');

function main(e) {
  output.innerHTML += e.currentTarget.querySelector('.sub').innerText;
}

document.onkeydown = function (e) {
  output.innerHTML += e.key;
};

mainArea.forEach((item) => item.addEventListener('click', main));
