import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
const auth = getAuth();
const database = getDatabase();
const signUp = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // let image =  document.getElementById("image");
    // let imageFile = image.files[0]
    // console.log(image.files[0]);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    
        const user = userCredential.user;
        const userId = user.uid;

        const userRef = ref(database, "users" + userId);

        
        const userData = {
            name: username.value,
                email: email.value,
                password: password.value
            
        };

        // Set the user data in the database
        set(userRef, userData)
            .then(() => {
            
                alert("Successfully signed up!" );
                
                 window.location.href = "https://www.daraz.pk/"
            })
            .catch((error) => {
                console.error("Error storing user data:", error);
                alert("Signup completed, but there was an issue storing user data.");
            });
    })
    .catch((error) => {
        console.error("Authentication failed:", error);
        alert("Signup failed. Please check your email and password.");
    });
};




let signIn_btn = document.getElementById("btn-signup");
signIn_btn.addEventListener("click", signUp);


const login = () => {
    let email = document.getElementById("email-login");
    let password = document.getElementById("password-login")
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
        alert("successfully signin", resolve)
     window.location.href = '/dashboard.html';
    })
    .catch((reject) => {
        alert("Signin rejected", reject)
    })
}
let signInBtn = document.getElementById("btn-login");
if(signInBtn){
    signInBtn.addEventListener("click", signUp);
}
let loginIn_btn = document.getElementById("btn-login");
loginIn_btn.addEventListener("click", login);