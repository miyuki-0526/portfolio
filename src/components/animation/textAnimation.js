const textAnimation = () => {
  console.log("aaaaaaaaaa");
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
    e.classList.remove("text-anime-opacity");
    e.innerHTML = textbox;
  });

  target.forEach((e) => {
    e.classList.add("start-text-anime");
  });
};

export default textAnimation;
