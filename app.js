// Initialize Firebase (make sure to include the Firebase SDK)
firebase.initializeApp({
    apiKey: 'AIzaSyCRswv006Mon_V7TEHL_kVoX10QihbQ24Y',
    authDomain: 'saraha-5e7fd.firebaseapp.com',
    projectId: '1:942089850758:android:34cd2e9ab9ba5cee4e2607'
});

// Initialize Firestore
const db = firebase.firestore();

// Get the user ID from the URL or another source
const userId = 'WXRbWaH3SnNlD7xUEoIy5PhQaIS2';

// Reference to the user document
const userRef = db.collection('users').doc(userId);

// Get user data from Firestore
userRef.get().then((doc) => {
    if (doc.exists) {
        const data = doc.data();
        const userPhoto = document.getElementById('userPhoto');
        const userName = document.getElementById('userName');

        // Set the photo and name in the HTML
        userPhoto.src = data.photoUrl;
        userName.textContent = data.name;
    } else {
        console.log('No such document!');
    }
}).catch((error) => {
    console.log('Error getting document:', error);
});
