const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    getRepos(username);

  } catch (error) {
    if(error.response.status === 404) {
      createErrorCard('No profile with this username');
    };

    console.log(error);
  };
  
};


function createUserCard(user) {
  const cardHTML = /* html */`
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
};


async function getRepos(username) {
  try {
    const { data } = await axios.get(API_URL + username + '/repos?sort=created');
    
    addReposToCard(data);
  } catch (error) {
    createErrorCard('Problem fetching repos');

    console.log(error);
  };
};


function createErrorCard(message) {
  const cardHTML = /* html */`
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
};


function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
    .slice(0, 8)
    .forEach(repo => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_blank';
      repoEl.innerText = repo.name;
      reposEl.appendChild(repoEl);
    });
};


form.addEventListener('submit', event => {
  event.preventDefault();
  const user = search.value;
  if(user) {
    getUser(user);
    search.value = '';
  };
});
