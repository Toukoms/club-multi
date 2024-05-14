function generateTeamCard(data) {
  const cardHtml = `
    <div class="card">
      <div class="card-front">
        <div class="image">
          <img src="${data.image}" alt="team" />
        </div>
        <div class="details">
          <div class="heading">
            <h3>${data.name}</h3>
            <h4>${data.firstname}</h4>
          </div>
          <span class="role">${data.role}</span>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <div class="heading">
            <h3>${data.name}</h3>
            <h4>${data.firstname}</h4>
          </div>
          <p>
            ${data.description}
          </p>
          <div id="contact">
            <a target="_blank"
              href="https://mg.linkedin.com/in/fanomezantsoa-tokiniaina-rahajanirina-6a2420237">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                fill="currentColor">
                <path
                  d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z">
                </path>
              </svg>
            </a>
            <a target="_blank" href="https://facebook.com/toki.niana.39">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                fill="currentColor">
                <path
                  d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  return cardHtml;
}

const adminContainer = document.getElementById("admin-container");
const memberContainer = document.getElementById("member-container");

admin_team.forEach((card) => {
  adminContainer.innerHTML += generateTeamCard(card);
});

all_teams.forEach((card) => {
  memberContainer.innerHTML += generateTeamCard(card);
});
