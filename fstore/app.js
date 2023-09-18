<script>
    const userPhotoElement = document.getElementById("userPhoto");
    const userNameElement = document.getElementById("userName");

    // Fetch user data from Firestore
    db.collection("users").doc(userDocId).get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const userName = userData.name;
            const userPhotoUrl = userData.photoUrl;

            // Set the user's name and photo
            userNameElement.textContent = userName;
            userPhotoElement.src = userPhotoUrl;
        } else {
            console.log("User not found");
        }
    }).catch((error) => {
        console.error("Error getting user data:", error);
    });
</script>
