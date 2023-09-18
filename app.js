<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBEtXBiFXnk3jPmb6wdfW4SOvMXJQIjCzg",
    authDomain: "saraha-5e7fd.firebaseapp.com",
    projectId: "saraha-5e7fd",
    storageBucket: "saraha-5e7fd.appspot.com",
    messagingSenderId: "942089850758",
    appId: "1:942089850758:web:bc767461bc426a904e2607",
    measurementId: "G-SG939BYG2Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Replace 'YOUR_COLLECTION_NAME' with the name of your Firestore collection
const usersCollection = db.collection('users');
// Function to display user profile information
function displayUserProfile(userId) {
    usersCollection.doc(userId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('profile-photo').src = data.photoUrl; // Replace with the actual field name for the photo URL
            document.getElementById('user-name').textContent = data.name; // Replace with the actual field name for the user's name
        } else {
            console.log('User not found');
        }
    }).catch((error) => {
        console.error('Error getting user profile:', error);
    });
}

// Function to send a message
document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    const userId = 'WXRbWaH3SnNlD7xUEoIy5PhQaIS2'; // Replace with the actual user's ID

    // Update the 'secret' field with the new message
    usersCollection.doc(userId).update({
        secret: message
    }).then(() => {
        console.log('Message sent successfully');
    }).catch((error) => {
        console.error('Error sending message:', error);
    });
});

// Call the function to display the user's profile (you need to replace 'USER_ID' with the actual user's ID)
displayUserProfile('WXRbWaH3SnNlD7xUEoIy5PhQaIS2');
