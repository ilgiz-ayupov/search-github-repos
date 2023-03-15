function createAlert(message, tag) {
  const alert = document.createElement("div");
  alert.classList.add("alert", `alert-${tag}`);
  alert.id = "alert";
  alert.textContent = message;

  const foundAlert = Array.from(document.body.children).find((item) => {
    return item.id === "alert";
  });

  if (foundAlert) {
    foundAlert.replaceWith(alert);
  } else {
    document.body.prepend(alert);
  }

  setTimeout(() => {
    alert.dataset.hide = "";

    alert.addEventListener("transitionend", function () {
      this.remove();
    });
  }, 3000);
}
