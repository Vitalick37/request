
let form = document.querySelector('.form');
let username = document.querySelector('#log'),
    password = document.querySelector('#pass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let request = new XMLHttpRequest();

    request.open('POST', 'server.php');

 
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);

    request.send(formData);
    
    request.addEventListener('readystatechange', function() {

        if (request.status !== 200) {
            alert('res.error') 
        } else {
            document.location.href = 'https://example.com/api/user/authenticate?username=' + username.value + '&password=' + password.value;
        }
    
    });

});