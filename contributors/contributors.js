(async function() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/OSCode-Community/OSCodeCommunitySite/contributors?per_page=100"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const contributors = await response.json();
    const container = document.getElementById("contributors-container");

    contributors.forEach((contributor) => {
      const contributorElement = createContributorElement(contributor);
      container.appendChild(contributorElement);
    });
  } catch (error) {
    handleError(error);
  }
})();

function createContributorElement(contributor) {
  const contributorElement = document.createElement("div");
  contributorElement.classList.add("contributor");

  contributorElement.innerHTML = `
    <img src="${contributor.avatar_url}" alt="${contributor.login}">
    <p>
      <span class="cname">${contributor.login}</span>
      <br>
      <span class="contri">Contributions: ${contributor.contributions}</span>
    </p>
    <a style="color: white" href="${contributor.html_url}" target="_blank" rel="noreferrer">
      <button>Profile</button>
    </a>
  `;

  return contributorElement;
}

function handleError(error) {
  console.error("Error:", error);
  // Additional error handling logic, such as displaying an error message on the webpage, can be added here
}
