const searchReposForm = document.getElementById("search-repos-form");

searchReposForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const repoNameInput = searchReposForm.repoName;
  const repoName = repoNameInput.value;

  const isValid = !isEmptyInput(repoNameInput);

  if (isValid) {
    const foundReposList = getFoundReposList();
    if (foundReposList) {
      foundReposList.remove();
    }

    createAlert("Поиск ...", "success");
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${repoName}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );
      const data = await response.json();
      renderRepos(data?.items);
    } catch (err) {
      if (err.name === "TypeError") {
        createAlert("Ошибка: Проверьте интернет соединение", "error");
      }
    }
  }
});

searchReposForm.addEventListener("input", () => {
  const repoNameInput = searchReposForm.repoName;
  const parent = repoNameInput.parentElement;

  if (repoNameInput.dataset.state === "invalid") {
    repoNameInput.dataset.state = "";
    repoNameInput.focus();

    const error = parent.querySelector("[data-type='error']");
    error.remove();
  }

  isEmptyInput(repoNameInput);
});
