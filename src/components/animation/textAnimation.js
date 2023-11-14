const textAnimation = () => {
  const target = document.querySelectorAll(".text-anime");

  target.forEach((e) => {
    let text = e.textContent;
    let textbox = "";
    text.split("").forEach((t, i) => {
      if (t !== " ") {
        const m = i * 80;
        textbox +=
          '<span style="animation-delay:' + m + 'ms;">' + t + "</span>";
      } else {
        textbox += t;
      }
    });
    e.innerHTML = textbox;
  });

  setTimeout(() => {
    target.forEach((e, i) => {
      if (i === 1) {
        setTimeout(() => {
          e.classList.remove("text-anime-opacity");
          e.classList.add("start-text-anime");
        }, 500);
      } else {
        e.classList.remove("text-anime-opacity");
        e.classList.add("start-text-anime");
      }
    });
  }, 1000);
};

export default textAnimation;
