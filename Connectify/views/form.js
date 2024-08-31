
 
  var firebaseConfig = {
    apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
    authDomain: "login-demo-254f7.firebaseapp.com",
    projectId: "login-demo-254f7",
    storageBucket: "login-demo-254f7.appspot.com",
    messagingSenderId: "228883805517",
    appId: "1:228883805517:web:db9063121d6bf3a79ab304",
    measurementId: "G-C8Q2HYKHY1"
  };

  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

 
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  
    promise.catch(e=>alert(e.message));
   //alert("SignUp Successfully");
  }

 
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      //alert("Active user "+email);
      window.location="https://microsoftteamsmainpage.herokuapp.com/room.ejs"

    }else{
      //alert("No Active user Found")
    }
  })