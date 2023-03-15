function createRepo({ name, link, stars, forks, desc }) {
  return `
    <div class="repo">
        <div class="repo__header">
            <h3 class="repo__title">
                <a href="${link}" target="_blank" rel="noopener noreferrer">${name}</a>
            </h3>

            <div class="repo__stats">
                <div class="repo__stars">
                    <img src="assets/icons/star.svg" alt="" />
                    ${stars}
                </div>
                <div class="repo__forks">
                    <img src="assets/icons/fork.svg" alt="" />
                    ${forks}
                </div>
            </div>
        </div>
        <div class="repo__body">
            <p class="repo__desc">
                ${desc}
            </p>
        </div>
    </div>
    `.trim();
}

function renderRepos(repos = []) {
  const app = document.getElementById("app");

  const reposList = document.createElement("ul");
  reposList.className = "repos-list";
  reposList.id = "repos-list";

  const foundReposList = getFoundReposList();

  if (repos.length) {
    createAlert(
      `По вашему запросу найдено: ${repos.length} репозиториев`,
      "success"
    );

    repos.forEach((repo) => {
      const reposListItem = document.createElement("li");
      reposListItem.className = "repos-list__item";

      const repoItem = createRepo({
        name: repo.full_name,
        link: repo.html_url,
        desc: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks,
      });
      reposListItem.insertAdjacentHTML("beforeend", repoItem);
      reposList.append(reposListItem);
    });

    if (foundReposList) {
      foundReposList.replaceWith(reposList);
    } else {
      app.append(reposList);
    }
  } else {
    createAlert(`По вашему запросу репозитории не найдены`, "error");
  }
}
