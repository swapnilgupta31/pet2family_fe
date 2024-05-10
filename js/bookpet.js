function playRandomSound() {
    var randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    var audio = document.getElementById("pawSound" + randomNumber);
    audio.play();
  }

  function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
  }

  function redirectToIndex(){
    window.location.href = 'index.html';
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the "Book Now" button
    document.querySelector('.book-now-btn').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Display the message box
        var messageBox = document.getElementById('messageBox');
        messageBox.classList.remove('hidden');

        // Optionally, you can hide the chat box if it's currently visible
        var chatBox = document.getElementById('chat-box');
        if (!chatBox.classList.contains('hidden')) {
            chatBox.classList.add('hidden');
        }
    });
});
