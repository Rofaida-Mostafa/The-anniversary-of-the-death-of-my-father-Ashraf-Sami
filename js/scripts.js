document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${name}</strong>: <p>${message}</p>`;
        
        messagesDiv.appendChild(messageElement);

        // Clear the form
        form.reset();
    });
});
