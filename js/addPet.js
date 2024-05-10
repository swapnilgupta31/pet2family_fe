// Define image URLs for different pet types
const imageUrls = {
    dog: [
        "https://w0.peakpx.com/wallpaper/209/34/HD-wallpaper-cute-puppy-dog-dogs-puppies-sweet-white.jpg",
        "https://w0.peakpx.com/wallpaper/785/976/HD-wallpaper-labradoor-dogs-icio.jpg",
        "https://w0.peakpx.com/wallpaper/124/979/HD-wallpaper-perro-calcetin-xdxd-calcetin-dog-perro-random.jpg",
        "https://w0.peakpx.com/wallpaper/460/909/HD-wallpaper-cane-cucciolo-dog-puppies-thumbnail.jpg",
        "https://w0.peakpx.com/wallpaper/815/2/HD-wallpaper-comrade-dog-comrade-dog-communism-soviet-union-ussr.jpg",
        "https://w0.peakpx.com/wallpaper/815/2/HD-wallpaper-comrade-dog-comrade-dog-communism-soviet-union-ussr.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Tai0gHDbS8Z1buOqyz2St7jlYMvE_xhXLg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP_p9SmFaXQStugD_LdhlGj-3NduwYaEfCQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6oCa7ZBk8HvATA8pTNRIDCMUSoEqm3p8uA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdHUCSMk8o1yXISpRbRbab6mvCyoweIUYuA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIa_Q3clXyCiHpd_d1juwVuD3Dhml1uop-A&s"
    ],
    cat: [
        "https://w0.peakpx.com/wallpaper/537/555/HD-wallpaper-gato-cat-cats-kitten-thumbnail.jpg",
        "https://w0.peakpx.com/wallpaper/1012/659/HD-wallpaper-cat-cats-cute-dream-pet-pets.jpg",
        "https://w0.peakpx.com/wallpaper/507/556/HD-wallpaper-cat-cats-kittens-little.jpg",
        "https://w0.peakpx.com/wallpaper/20/440/HD-wallpaper-sweet-cat-cats-pets-thumbnail.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LSMIXwQ7JXr8lk4i-7J0sgK6i60eAnQfvw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTda1um8HKlUr1-mMEzXDseE7bG9zYEWTxMrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTbI9Y_PQzpsLDw5hPmKyNtdxdiS0_cW0Ug&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOw8UNBqeMth1HN51Grq2DvzeFa0YBR1yH6g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3EXh30qW1eKZ1L8xhiGEp9McllGAWRPdfQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpi--Cgl45nWakAOIYxWPbwjxgG1tTplWSeQ&s"
    ],
    bird: [
        "https://static.wixstatic.com/media/nsplsh_408ff39dec5e44c5aed13bf50b6cc067~mv2.jpg/v1/fill/w_925,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_408ff39dec5e44c5aed13bf50b6cc067~mv2.jpg",
        "https://www.avma.org/sites/default/files/media/pet-selection-budgie-with-girl-sm.jpg",
        "https://t3.ftcdn.net/jpg/01/34/10/56/360_F_134105687_seUks63N6yKwgWNkFcu4vJMBYPiaXv5F.jpg",
        "https://media.istockphoto.com/id/1203603072/photo/friendly-cockatiel-parrot-sitting-on-owners-finger.jpg?s=612x612&w=0&k=20&c=IbF04jBn6878aM5EqlE3KginfqK825ZRvlcQ3YS7ouA=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIr4CJkHnecDLPR2duYW0iII4PDmVHkm1oQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQr7d8UJAG0C4lu7WjTv51oCl5BEKAZ2nhQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ibj9gTmgZWbb12PFc1WTP7ePSHLOTvtkFQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUliXwdiz6QJyGNhvmlBqlLGmNlkLzb07WGw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHG-PE26wpQUnZP644Rs2EL4Ta98lLnYz0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_No4C531d9ARciU40c3oWlazrT7TCNj3ig&s",
    ],
    other: ["https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjGHWKmCe_7roHSfrh3f1w_eiJDJNBpe1Tg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbj5_hgBnGjJUOxENBr4jDddyPHYbjHaE1fw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAfvNrSNXoDiFn8UvPs3eAAkSWF2ga5x0zQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqJy-7SSrU5Xm7uaAB92Naspl7--k4wziNw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNXopCEDEnCLZHNe1nmECSw9XYJt5NfVJ5Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4hdMbH8DJ8TFvy3ZhL7ZAxBKmSZjN3YlnIQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOnAqbzshW8xZwbet-ioOjLIlayXzjM1yPA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Wfmo6Bp0DuoEPocGQBcRwuNCB_VpLIjiiQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQF3glNzIjZ-VCm75-tSNQw7Qnl4g-8S3b2A&s"
]// Single image URL for other pets
};

// Maintain index for each pet type
let imageIndex = {
    dog: 0,
    cat: 0,
    bird: 0,
    other: 0
};


async function addPet(event) {
    event.preventDefault();

    const ownerName = document.getElementById('ownerName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const petType = document.getElementById('petType').value;
    const petBreed = document.getElementById('petBreed').value;
    const petGender = document.getElementById('petGender').value;
    const vaccinationStatus = document.getElementById('vaccinationStatus').value;
    const petDescription = document.getElementById('petDescription').value;
    const reason = document.getElementById('reason').value;
    const adoptionOrSale = document.getElementById('adoptionOrSale').value;
    const petPrice = document.getElementById('petPrice').value;
    
    // Example of data validation
    if (!ownerName || !mobileNumber || !state || !city || !petAge || !petType || !petBreed || !petGender || !vaccinationStatus || !petDescription || !reason || !adoptionOrSale) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Send data to backend for storage
    try {
        const response = await fetch('/submit-pet-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ownerName,
                mobileNumber,
                state,
                city,
                petName,
                petAge,
                petType,
                petBreed,
                petGender,
                vaccinationStatus,
                petDescription,
                reason,
                adoptionOrSale,
                petPrice
            })
        });

        if (response.ok) {
            document.getElementById('messageBox').classList.remove('hidden');
        } else {
            alert('Submission failed. Please try again later.');
        }
    } catch (error) {
        console.error('Error adding pet:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
}


async function fetchPetData() {
    try {
        const response = await fetch('/fetch-pet-data');
        const data = await response.json();
        
        // Check if response is successful
        if (response.ok) {
            // Call function to display the blog posts on the page
            displayPetData(data);
        } else {
            console.error('Failed to fetch pet Data:', data.error);
        }
    } catch (error) {
        console.error('Error fetching pet Data:', error);
    }
}



function displayPetData(pets) {
    
    const petList = document.getElementById('petList');
    
    // Loop through the pets and create HTML elements to display them
    pets.forEach((pet, index) => {
        // Create a pet container
        const petContainer = document.createElement('div');
        petContainer.classList.add('pet-container');
        
        // Create a pet element
        const petElement = document.createElement('div');
        petElement.classList.add('pet');
        
        let imageUrl;
        if (pet.petType === 'dog') {
            imageUrl = imageUrls.dog[imageIndex.dog % imageUrls.dog.length];
            imageIndex.dog++; // Increment index for dog
        } else if (pet.petType === 'cat') {
            imageUrl = imageUrls.cat[imageIndex.cat % imageUrls.cat.length];
            imageIndex.cat++; // Increment index for cat
        } else if (pet.petType === 'bird') {
            imageUrl = imageUrls.bird[imageIndex.bird % imageUrls.bird.length];
            imageIndex.bird++; // Increment index for bird
        } else if (pet.petType === 'other') {
            imageUrl = imageUrls.other[imageIndex.other % imageUrls.other.length];
            imageIndex.other++; // Increment index for bird
        } 

        // Create an image element for the pet picture
        const pictureElement = document.createElement('img');
        pictureElement.src = imageUrl;
        pictureElement.alt = 'Pet Picture';
        pictureElement.classList.add('pet-picture');
        
        // Create elements for name, type, breed, gender, city, state, adoption/sale, and buttons
        const nameElement = document.createElement('p');
        nameElement.textContent = `${pet.petName}`;
        nameElement.style.fontWeight = 'bold';
        nameElement.style.fontSize = 'xx-large';
       

        
        // Create a container for type, breed, and gender
        const typeBreedGenderElement = document.createElement('p');
        typeBreedGenderElement.textContent = `${pet.petType},${pet.petBreed},${pet.petGender}`;
        typeBreedGenderElement.style.fontSize = 'x-large';


        const locationElement = document.createElement('p');
        locationElement.textContent = `📌 ${pet.city}, ${pet.state}`;
        locationElement.style.fontSize = 'large';
        
        const adoptionElement = document.createElement('p');
        adoptionElement.textContent = `${pet.adoptionOrSale === 'adoption' ? '🐾Adopt me' : '🐾Buy'} ${pet.petPrice ? '(For ₹' + pet.petPrice + ')' : ''}`;
        adoptionElement.style.fontWeight = 'bold'


        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        contactButton.classList.add('contact-button');
        const contactMessageBox = document.getElementById('contact-message-box');

        contactButton.addEventListener('click', () => {
            contactMessageBox.innerHTML = ''; // Clear any previous content
    
            const ownerNamePara = document.createElement('p');
            ownerNamePara.textContent = `Owner Name: ${pet.ownerName}`;
            contactMessageBox.appendChild(ownerNamePara);
        
            const contactNumberPara = document.createElement('p');
            contactNumberPara.textContent = `Contact Number: ${pet.mobileNumber}`;
            contactMessageBox.appendChild(contactNumberPara);
        
            const okButton = document.createElement('button');
    okButton.textContent = 'Ok';
    okButton.classList.add('ok-button');
    okButton.addEventListener('click', () => {
        window.location.href = 'adoptPet.html'; // Redirect to adopt.html
    });
    contactMessageBox.appendChild(okButton);

            contactMessageBox.classList.remove('hidden');
        });
        

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.classList.add('details-button');
        detailsButton.addEventListener('click', () => {
            const detailsMessageBox = document.getElementById('details-message-box');
            detailsMessageBox.innerHTML = ''; // Clear any previous content
            
            const agePara = document.createElement('p');
            agePara.textContent = `Age: ${pet.petAge} months`;
            detailsMessageBox.appendChild(agePara);
        
            const vaccinationStatusPara = document.createElement('p');
            vaccinationStatusPara.textContent = `Vaccination Status: ${pet.vaccinationStatus}`;
            detailsMessageBox.appendChild(vaccinationStatusPara);
        
            const descriptionPara = document.createElement('p');
            descriptionPara.textContent = `Description: ${pet.petDescription}`;
            detailsMessageBox.appendChild(descriptionPara);
        
            const reasonPara = document.createElement('p');
            reasonPara.textContent = `Reason: ${pet.reason}`;
            detailsMessageBox.appendChild(reasonPara);
        
            const okButton = document.createElement('button');
            okButton.textContent = 'OK';
            okButton.classList.add('ok-button'); // Add CSS class to the button
            okButton.addEventListener('click', () => {
                detailsMessageBox.classList.add('hidden'); // Hide the details message box
            });
            detailsMessageBox.appendChild(okButton);
        
            detailsMessageBox.classList.remove('hidden');
        });

        // Create a container for the "Get Pet" button
        const getPetButtonContainer = document.createElement('div');
        getPetButtonContainer.classList.add('get-pet-button-container');

        const getPetButton = document.createElement('button');
        getPetButton.textContent = 'Get Pet';
        getPetButton.classList.add('get-pet-button');
        getPetButton.addEventListener('click', redirectToBookPet);
        getPetButton.addEventListener('click', () => {
            window.location.href = 'bookpet.html';
        });

        // Append elements to the pet
        petElement.appendChild(pictureElement);
        petElement.appendChild(nameElement);
        petElement.appendChild(typeBreedGenderElement); // Append type, breed, and gender container
        petElement.appendChild(locationElement);
        petElement.appendChild(adoptionElement);
        petElement.appendChild(contactButton);
        petElement.appendChild(detailsButton);

        // Append the "Get Pet" button to its container
        getPetButtonContainer.appendChild(getPetButton);

        // Append the pet and the "Get Pet" button container to the pet container
        petContainer.appendChild(petElement);
        petContainer.appendChild(getPetButtonContainer);

        // Append the container to the pet list
        petList.appendChild(petContainer);

        // Apply styles to the pet container based on index
        if ((index + 1) % 4 === 0) {
            // Add a clear fix for every fourth pet to start a new row
            petContainer.classList.add('clear-fix');
        }
    });
}

// Call fetchPetData when the page loads
window.onload = fetchPetData;




function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
  }

  function handleSubmit() {
    // Your existing form submission logic
    // After successful submission, show the message box
    document.getElementById('messageBox').classList.remove('hidden');
}

function redirectToAdoptPet() {
    window.location.href = 'adoptPet.html';
}

  
   