const nameField = document.getElementById('userName');
const checkedYes = document.getElementById('yes');

function showName () {
    if (checkedYes.checked) {
        nameField.innerHTML = `
        <label> Введите ваше имя:<br>
        <input type="text" name="username" id="enteredName">
        </label>
        `;
    } else {
        nameField.innerHTML = '';
    }
}

function formatName (name) {
        name = name.trim();
        const firstLetter = name[0].toUpperCase();
        const followingLetters = name.slice(1).toLowerCase();
        return firstLetter + followingLetters;
    }

function checkSpam (str) {
    const message = str.toLowerCase();
    if (message.includes('viagra')) {
        str = str.replace(/viagra/gi, '***');
    }
    if (message.includes('xxx')) {
        str = str.replace(/xxx/gi, '***');
    }
    return str;
}

const submitButton = document.getElementById('submitButton');
const commentSection = document.getElementById('commentSection');

function submit() {
    const nameInput = document.getElementById('enteredName');
    let name;

    if (nameInput) {
        name = nameInput.value.trim() ? formatName(nameInput.value) : 'Username';
    } else {
        name = 'Username';
    }

    const avatarInput = document.getElementById('imageURL');
    let avatar = avatarInput.value.trim() ? avatarInput.value.trim() : randomAvatar();

    function randomAvatar() {
        const avatars = [
            "../images/halo.jpg",
            "../images/bear.png",
            "../images/clown.jpg",
            "../images/crazy_eyes.png",
            "../images/starry_eyes.jpg",
            "../images/sun.png"
        ];
        const randomIndex = Math.floor(Math.random() * avatars.length);
        return avatars[randomIndex];
    }

    const messageInput = document.getElementById('comment');
    let message = checkSpam(messageInput.value.trim());


    const date = new Date();
    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };
    const timeStamp = date.toLocaleDateString ('ru-RU', options) + " в " + date.getHours()+ ":"+ date.getMinutes()+ ":" + date.getSeconds();


    const comment = document.createElement('div');
    comment.className = 'newComments';
    comment.innerHTML = `
    <img src="${avatar}" alt="Аватар" class="avatar";
    <span class="name">${name}</span>
    <span>${timeStamp}</span>
    <div class="commentText">${message}</div>
    `;

    commentSection.appendChild(comment);
    if (nameInput) {nameInput.value = ''};
    avatarInput.value = '';
    messageInput.value = '';
}
