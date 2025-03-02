document
  .getElementById("random-bg-btn")
  .addEventListener("click", function () {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const opa = Math.random();
    document.body.style.backgroundColor = `rgba(${r},${g},${b},${opa})`;
  });
