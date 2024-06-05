document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Form submitted:', { name: name, email: email, message: message });

    // Reset the form
    document.getElementById('contactForm').reset();
});

// Dummy listings data
var listingsData = [
    { title: 'Cozy Apartment in Downtown', price: '$1000/month', location: 'Downtown', img: 'https://via.placeholder.com/300' },
    { title: 'Spacious House in Suburbs', price: '$1500/month', location: 'Suburbs', img: 'https://via.placeholder.com/300' },
    { title: 'Studio in Arts District', price: '$800/month', location: 'Arts District', img: 'https://via.placeholder.com/300' },
];

// Display listings
function displayListings() {
    var listingsContainer = document.querySelector('#listings .container');
    var listingsHTML = '';

    listingsData.forEach(function(listing) {
        listingsHTML += `
            <div class="listing">
                <img src="${listing.img}" alt="${listing.title}">
                <div class="listing-details">
                    <h3>${listing.title}</h3>
                    <p><strong>Price:</strong> ${listing.price}</p>
                    <p><strong>Location:</strong> ${listing.location}</p>
                </div>
            </div>
        `;
    });

    listingsContainer.innerHTML = listingsHTML;
}

// Load listings on page load
window.addEventListener('DOMContentLoaded', displayListings);

