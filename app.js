

// Initialize Firebase with your config
const firebaseConfig = {
   apiKey: "AIzaSyBEtXBiFXnk3jPmb6wdfW4SOvMXJQIjCzg",
    authDomain: "saraha-5e7fd.firebaseapp.com",
    projectId: "saraha-5e7fd",
    storageBucket: "saraha-5e7fd.appspot.com",
    messagingSenderId: "942089850758",
    appId: "1:942089850758:web:bc767461bc426a904e2607"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Fetch user data
const userId = "WXRbWaH3SnNlD7xUEoIy5PhQaIS2"; // Replace with the user's ID
const userRef = firestore.collection("users").doc(userId);

userRef.get().then((doc) => {
    if (doc.exists) {
        const data = doc.data();
        document.getElementById("userName").textContent = data.name;
        document.getElementById("profilePhoto").src = data.photoURL;
    } else {
        console.log("User not found");
    }
});

// Send a message
const sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener("click", () => {
    const messageInput = document.getElementById("messageInput").value;
    const message = {
        senderId: "942089850758",
        receiverId: userId,
        message: messageInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    firestore.collection("messages").add(message)
        .then(() => {
            console.log("Message sent successfully");
            document.getElementById("messageInput").value = "";
        })
        .catch((error) => {
            console.error("Error sending message: ", error);
        });
});
