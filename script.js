const loginForm = document.querySelector('.login-container form');
const login=document.querySelector(".login-container");

if(loginForm)
loginForm.addEventListener('submit', event => {
  event.preventDefault();
 
   const email = loginForm.email.value;
   const password = loginForm.password.value;
   const get_email=localStorage.getItem("email");
   const get_password=localStorage.getItem("password");
   if(email==get_email && password==get_password)
   {
      alert("You have login succefully");
      location.replace("index.html")
   }
   else{
    alert("You have entered wrong input");
   }
});

//Signup form
const signupForm = document.querySelector('.signup-container form');
if(signupForm)
signupForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirmPassword=signupForm.confirmpassword.value
  console.log("name=",name)
  console.log("pss=",password)
  console.log("connf=",confirmPassword)
  console.log("email=",email)
  if(password==confirmPassword && email.includes("@gmail.com") )
  {
      localStorage.setItem("name",name);
      localStorage.setItem("password",password);
      localStorage.setItem("email",email);
      alert("you have regester succefully");
      location.replace("login.html")
  }
  else{
    alert("You have Entered wrong input")
  }
});

 const log=document.getElementById("log");

 if (log) {
  console.log("I'm in index now");
  
  const get_name = localStorage.getItem("name");
  const myArray = get_name.split(" ");
  const newHtml = `<img class="icon_img" src="login_icon.png" alt="No Image">${myArray[0]}`;
  
  log.innerHTML = newHtml;
}








