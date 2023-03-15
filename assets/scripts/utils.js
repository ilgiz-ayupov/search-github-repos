function isEmptyInput(input) {
  if (!input.value.length) {
    const parent = input.parentElement;
    createError(parent);
    input.dataset.state = "invalid";
    input.focus();
    return true;
  }
  return false;
}

function getFoundReposList() {
  return Array.from(app.children).find((child) => child.id === "repos-list");
}
