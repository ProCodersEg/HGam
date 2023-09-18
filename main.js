// main.js

// Initialize Firestore and Firebase Authentication
const firestore = firebase.firestore();
const auth = firebase.auth();

// Function to display user data
async function displayUserData(userId) {
    const userRef = firestore.collection("users").doc(userId);
    const userSnapshot = await userRef.get();

    if (userSnapshot.exists) {
        const userData = userSnapshot.data();
        document.getElementById("userName").textContent = userData.name;
        document.getElementById("userPhoto").src = userData.photoUrl;
    }
}

// Function to send a message
document.getElementById("sendMessageBtn").addEventListener("click", async () => {
    const message = document.getElementById("messageInput").value;
    const userId = "WXRbWaH3SnNlD7xUEoIy5PhQaIS2"; // Replace with the actual user ID you want to send the message to.

    if (!message || !userId) {
        alert("Please enter a message and user ID.");
        return;
    }

    const messageRef = firestore.collection("users").doc(userId).collection("secret").doc();
    
    try {
        await messageRef.set({ message });
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message.");
    }
});

// Check if a user is signed in
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userId = user.uid;
        displayUserData(userId);
    } else {
        // User is not signed in, you can redirect to a login page if needed.
    }
});
