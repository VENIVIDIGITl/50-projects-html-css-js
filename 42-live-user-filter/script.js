const userList = document.getElementById('user-list');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', event => filterData(event.target.value));


async function getData() {
  const response = await fetch('https://randomuser.me/api?results=50');
  const { results } = await response.json();

  userList.innerHTML = '';
  results.forEach(user => {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = /* html */`
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    userList.appendChild(li);
  });
};


function filterData(searchTerm) {
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    };
  });
};
