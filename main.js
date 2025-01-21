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
        name = nameInput.value.trim() ? formatName(nameInput.value) : 'username';
    } else {
        name = 'username';
    }

    //дефолт аватар один, а не 5
    const avatarInput = document.getElementById('imageURL');
    let avatar = avatarInput.value.trim() ? avatarInput.value.trim() : 'https://images.vexels.com/media/users/3/325213/isolated/preview/c52fc3523ce9a94e0a75edeb1d806c9e-yellow-smiley-face.png';


    const messageInput = document.getElementById('comment');
    let message = checkSpam(messageInput.value.trim());

    //дата отображается в непривычном формате
    const date = new Date();
	let currentDate = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
    let currentTime = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    const timeStamp = currentDate + " в " + currentTime;


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
