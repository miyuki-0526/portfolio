const textAnimation = () => {
  const target = document.querySelectorAll(".text-anime");

  target.forEach((e) => {
    var text = e.textContent;
    var textbox = "";
    text.split("").forEach((t, i) => {
      if (t !== " ") {
        if (i < 10) {
          textbox +=
            '<span style="animation-delay:.' + i + 's;">' + t + "</span>";
        } else {
          var n = i / 10;
          textbox +=
            '<span style="animation-delay:' + n + 's;">' + t + "</span>";
        }
      } else {
        textbox += t;
      }
    });
    e.innerHTML = textbox;
  });

  setTimeout(() => {
    target.forEach((e, i) => {
      if (i == 1) {
        setTimeout(() => {
          e.classList.remove("text-anime-opacity");
          e.classList.add("start-text-anime");
        }, 1000);
      } else {
        e.classList.remove("text-anime-opacity");
        e.classList.add("start-text-anime");
      }
    });
  }, 1000);
};

export default textAnimation;
