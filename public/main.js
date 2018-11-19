firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		uid = user.uid;
	}
	else{
		uid = null;
		window.location.replace('login.html');
	}
});

function logOut(){
	firebase.auth().signOut();
}