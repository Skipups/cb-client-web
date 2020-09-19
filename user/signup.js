


var signupForm = document.forms.signup;
console.log('signupForm', signupForm)
signupForm.addEventListener('submit', function(event) {

  // 1. stop the page from refreshing
  event.preventDefault();
 


  let name = signupForm.elements.name.value
  let jobTitle = signupForm.elements.jobTitle.value
 

  // 3. Use utility method to save user data
  saveUserToLocalStorage(name ,jobTitle);

  // 4. Send the user off to their profile page
  window.location.href = "/user/profile.html";
})

function saveUserToLocalStorage(name, title){
 
  const userJson={
    'name':name,
    'jobTitle': title
  }
  console.log('userJSON', userJson)

  //save to localStorage but as a string
  const userJsonStringified = JSON.stringify(userJson)
  console.log('userJsonStringified', userJsonStringified)
  localStorage.setItem("\_cb_user", userJsonStringified)
}