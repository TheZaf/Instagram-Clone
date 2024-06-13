const nameElement = document.getElementById('myname');
const passElement = document.getElementById('mypass');
let loggedIn = false;

function logIn(){
  while (!loggedIn){
    if(nameElement.value == 'user' && passElement.value == '2004'){
      location.href='www.google.com';
      loggedIn = true;
    }else if (passElement.value != 'manoj') {
      console.log('username or password not found a match!')
      document.getElementById('mypara').textContent ='Sorry Wrong Password or username!';
      loggedIn = true;
    }
  }
}

console.log('login processing....')
