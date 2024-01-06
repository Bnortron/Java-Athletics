const modal = document.querySelector('#modal');
const openModal = document.querySelector('#open-button');
const closeModal = document.querySelector('#close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    fetch('https://formspree.io/f/mnqeqlza', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Handle the response from Formspree
            modal.close(); // Close the modal if desired
            // Redirect to the homepage or any page
            window.location.href = '#';
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(error => {
        alert('There was an error submitting the form. Please try again.');
    });
});