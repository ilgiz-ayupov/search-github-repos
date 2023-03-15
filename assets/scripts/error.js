function createError(parent) {
  const error = document.createElement("div");
  error.dataset.type = "error";
  error.textContent = "Обязательное поле";

  const coords = parent.getBoundingClientRect();
  error.style.cssText = `
    position: absolute;
    top: ${coords.bottom + 8}px;
    left: ${coords.left}px;
    color: red;
  `;

  parent.append(error);
}
