async function getContributors() {
  await fetch(
    "https://api.github.com/repos/OSCode-Community/OSCodeCommunitySite/contributors?per_page=100"
  )
    .then((response) => response.json())
    .then((contributors) => {
      const container = document.getElementById("contributors-container");

      contributors.forEach((contributor) => {
        const contributorElement = document.createElement("div");
        contributorElement.classList.add("contributor");

        contributorElement.innerHTML = `
            <img src="${contributor.avatar_url}" alt="${contributor.login}">
            <p >
            <span class="cname"> ${contributor.login} </span> 
            <br>
             Contributions: ${contributor.contributions}</p>
            <a style="color: white" href="${contributor.html_url}" target="_blank" rel="noreferrer">
                <button>Profile</button>
            </a>
          `;
        container.appendChild(contributorElement);
      });
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });
}
