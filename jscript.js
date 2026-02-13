    const messages = [
      "Hindi pwedeng No! 😛",
      "Ayoko 😛",
      "Luh? ☹️",
      "Luh? 🥺",
      "Di mo ba ko lab? 😫",
      "Ayaw mo na ba saken? 😔",
      "Ok… 😔"
    ];
    let noCount = 0;

    function sayNo() {
      document.getElementById("questionText").textContent =
        messages[noCount % messages.length];
      noCount++;
    }

    function openCard() {
      document.getElementById("questionBox").style.display = "none";
      document.getElementById("cardBox").style.display = "block";

      const music = document.getElementById("bgMusic");
        music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.8) {
      music.volume += 0.01;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

    const flowers = ["🌻","🌸","💐","🍀","🌹"];
    const items = ["❤️","🥰","😘","😍","😚"];

    function dropLeaf() {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.animationDuration = (6 + Math.random() * 5) + "s";
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 11000);
    }
      setInterval(dropLeaf, 700);

     function dropLove() {
      const el = document.createElement("div");
      el.className = "fall";
      el.innerHTML = items[Math.floor(Math.random() * items.length)];
      el.style.left = Math.random() * window.innerWidth + "px";
      el.style.animationDuration = (6 + Math.random() * 5) + "s";
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 11000);
    }
      setInterval(dropLove, 700);