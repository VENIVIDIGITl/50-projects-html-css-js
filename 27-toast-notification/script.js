const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());


function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    // EITHER Get random message
    // notif.innerText = message ? message : getRandomMessage();

    // OR Get message in order
    notif.innerText = message ? message : getMessageInOrder();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
};


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
};


function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
};


let index = 0;


function getMessageInOrder() {
  let message = '';

  if(index === 0) {
    message = messages[index];
    index++;
  } else if(index === messages.length - 1) {
    message = messages[index];
    index = 0;
  } else {
    message = messages[index];
    index++;
  };

  return message;
};


createNotification('Hi there! Please press the the Show Notification button to see new notifications!', 'success');
