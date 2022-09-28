document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();

  var radios = document.getElementsByName("nota");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      switch (radios[i].id) {
        case "n1":
          new View(1);
          break;
        case "n2":
          new View(2);
          break;
        case "n3":
          new View(3);
          break;
        case "n4":
          new View(4);
          break;
        case "n5":
          new View(5);
          break;
      }
    }
  }
  console.log("🎉");
});
