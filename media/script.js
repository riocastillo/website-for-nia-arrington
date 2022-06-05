let open = false;

function Drop(n) {
  let i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i);
    }
    open = true;
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i);
    }
    open = false;
  }
}

function Drp(n) {
  let elem = document.getElementsByClassName("menu-con")[n];
  let pos = -1 * window.innerHeight - n * 100;
  let id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + "px";
    } else {
      pos += 10;
      elem.style.top = pos + "px";
    }
  }
}

function Cls(n) {
  let elems = document.getElementsByClassName("menu-con")[n];
  let poss = 0;
  let ids = setInterval(frames, 5);

  function frames() {
    if (poss <= -1 * window.innerHeight) {
      clearInterval(ids);
      elems.style.top = -1 * window.innerHeight + "px";
    } else {
      poss += -7 - n * 2;
      elems.style.top = poss + "px";
    }
  }
}
