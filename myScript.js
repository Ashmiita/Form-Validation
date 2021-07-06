const btnCapture = document.querySelector('.btn');
console.log(btnCapture);

btnCapture.addEventListener('click', function clickEvent(event) {
   event.preventDefault();
    const empObj = [];


    const username = document.getElementById('input-username').value;
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    empObj.username = username;
    empObj.password = password;
    empObj.email = email;

    if ((username.length == 0)) {
        document.getElementById('nameRequired').innerHTML =
            'Username is required';
        console.log('length is zero');
    } else {
        document.getElementById('nameRequired').innerHTML = '';
        console.log('length is not zero');
    }

    if (email.length == 0) {
        document.getElementById('emailRequired').innerHTML =
            'Email is required';
        console.log('length is zero');
    } else {
        document.getElementById('emailRequired').innerHTML = '';
        console.log('length is not zero');
    }
    if (username.length == 0) {
        document.getElementById('passwordRequired').innerHTML =
            'Username is required';
        console.log('length is zero');
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
        console.log('length is not zero');
    }
});
