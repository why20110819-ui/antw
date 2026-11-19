(function () {
  'use strict';
  // 台灣時間 2027/01/01 00:00（UTC+8）
  var TARGET = new Date('2027-01-01T00:00:00+08:00').getTime();

  var d = document.getElementById('cd-d');
  var h = document.getElementById('cd-h');
  var m = document.getElementById('cd-m');
  var s = document.getElementById('cd-s');
  var title = document.getElementById('cd-title');
  var note = document.getElementById('cd-note');
  var timer;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var left = TARGET - Date.now();
    if (left <= 0) {
      d.textContent = h.textContent = m.textContent = s.textContent = '00';
      title.textContent = 'ANTW 已經上架！';
      note.textContent = '歡迎使用台灣匿名平台';
      clearInterval(timer);
      return;
    }
    var sec = Math.floor(left / 1000);
    d.textContent = Math.floor(sec / 86400);
    h.textContent = pad(Math.floor(sec % 86400 / 3600));
    m.textContent = pad(Math.floor(sec % 3600 / 60));
    s.textContent = pad(sec % 60);
  }

  tick();
  timer = setInterval(tick, 250);
})();
