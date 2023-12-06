

function submitForm() {
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let newsletter = document.getElementById("newsletter").checked;
    // let modal = document.getElementById('myModal');
    // let openModalBtn = document.querySelector('.submit');
    // let closeModalBtn = document.getElementById('closeModalBtn');

    if (firstName == '') {
        alert('first') 
        return;
    }
    else if (lastName == '') {
        alert('last')
        return;
    }
    else if (!email.includes('@gmail.com')) {
        alert('email')
        return;
    }
    else if (password.length < 8) {
        alert('pasword')
        return;
    }
    else if (!newsletter) {
        alert('square')
       
        return;
    }
    else{
      window.location.href = "./main.html"
    }
    
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let visibilityButton = document.querySelector(".toggle-visibility ");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        visibilityButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        visibilityButton.textContent = "Show";
    }
}




