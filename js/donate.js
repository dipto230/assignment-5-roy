let totalBalance = 5500;
let donationBalance = 0;
const history = [];


const totalBalanceEl = document.getElementById('total-balance'); 
const donationBalanceEl = document.getElementById('donation-balance'); 
const donationAmountEl = document.getElementById('donation-amount');
const historyListEl = document.getElementById('historyListEl'); 
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('historySection'); 
const donationTab = document.getElementById('donationBtn');
const historyTab = document.getElementById('historyBtn');


document.getElementById('Donate-noyakali').addEventListener('click', function(event) {
    const amount = parseInt(donationAmountEl.value); 
    event.preventDefault(); 

    if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        alert('Please enter a valid donation amount.');
        return; 
    }
    
   
    donationBalance += amount;
    totalBalance -= amount;
    
   
    const now = new Date();
    history.push({ amount, time: now.toLocaleString() });
    
   
    donationBalanceEl.textContent = `${donationBalance} BDT`; 
    totalBalanceEl.textContent = `${totalBalance} BDT`; 
    
    donationAmountEl.value = ''; 

    renderHistory(); 
    
});


donationTab.addEventListener('click', function() {
    donationSection.classList.remove('hidden');
    
    historySection.classList.add('hidden');
    donationTab.classList.add('bg-lime-400'); 
    historyTab.classList.remove('bg-lime-400'); 
});


historyTab.addEventListener('click', function() {
   

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden'); 
    historyTab.classList.add('bg-lime-400');
    donationTab.classList.remove('bg-lime-400'); 
  
    renderHistory();
    
  });


function renderHistory() {
    historyListEl.innerHTML = ''; 

    if (history.length > 0) {
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('bg-gray-200', 'p-2', 'rounded-lg');
            historyItem.innerHTML = `
                <p><strong>Date:</strong> ${item.time}</p>
                <p><strong>Amount:</strong> ${item.amount} BDT</p>
            `;
            historyListEl.appendChild(historyItem);
        });
    } else {
        historyListEl.innerHTML = '<p>No donation history available.</p>'; 
    }
}

// Variables for Feni section
let feniDonationBalance = 0; // Track donation balance for Feni
const donationAmountFeniEl = document.getElementById('donation-amount-feni');
const donationBalanceFeniEl = document.getElementById('donation-balance-feni');

// Event listener for the Feni donation button
document.getElementById('Donate-feni').addEventListener('click', function(event) {
    const amount = parseInt(donationAmountFeniEl.value); 
    event.preventDefault(); 

    if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        alert('Please enter a valid donation amount.');
        return; 
    }
    
    // Update the balances
    feniDonationBalance += amount;
    totalBalance -= amount;
    
    // Add the donation to the history
    const now = new Date();
    history.push({ amount, time: now.toLocaleString(), donationType: 'Feni' });
    
    // Update the displayed balances
    donationBalanceFeniEl.textContent = `${feniDonationBalance} BDT`; 
    totalBalanceEl.textContent = `${totalBalance} BDT`; 
    
    // Clear the input field
    donationAmountFeniEl.value = ''; 

    // Render the history
    renderHistory(); 
    
});

// Modify the renderHistory function to show donation type (Feni or Noakhali)
function renderHistory() {
    historyListEl.innerHTML = ''; 

    if (history.length > 0) {
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('bg-gray-200', 'p-2', 'rounded-lg');
            historyItem.innerHTML = `
                <p><strong>Date:</strong> ${item.time}</p>
                <p><strong>Amount:</strong> ${item.amount} BDT</p>
                <p><strong>Donation Type:</strong> ${item.donationType}</p>
            `;
            historyListEl.appendChild(historyItem);
        });
    } else {
        historyListEl.innerHTML = '<p>No donation history available.</p>'; 
    }
}



// Variables for Quota Movement section
let quotaDonationBalance = 0; // Track donation balance for Quota Movement
const donationAmountQuotaEl = document.getElementById('donation-amount-quota');
const donationBalanceQuotaEl = document.getElementById('donation-balance-quota');

// Event listener for the Quota Movement donation button
document.getElementById('Donate-quota').addEventListener('click', function(event) {
    const amount = parseInt(donationAmountQuotaEl.value); 
    event.preventDefault(); 

    if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        alert('Please enter a valid donation amount.');
        return; 
    }
    
    // Update the balances
    quotaDonationBalance += amount;
    totalBalance -= amount;
    
    // Add the donation to the history
    const now = new Date();
    history.push({ amount, time: now.toLocaleString(), donationType: 'Quota Movement' });
    
    // Update the displayed balances
    donationBalanceQuotaEl.textContent = `${quotaDonationBalance} BDT`; 
    totalBalanceEl.textContent = `${totalBalance} BDT`; 
    
    // Clear the input field
    donationAmountQuotaEl.value = ''; 

    // Render the history
    renderHistory(); 
    
});

// Update the renderHistory function to show donation type for the third section
function renderHistory() {
    historyListEl.innerHTML = ''; 

    if (history.length > 0) {
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('bg-gray-200', 'p-2', 'rounded-lg');
            historyItem.innerHTML = `
                <p><strong>Date:</strong> ${item.time}</p>
                <p><strong>Amount:</strong> ${item.amount} BDT</p>
                <p><strong>Donation Type:</strong> ${item.donationType}</p>
            `;
            historyListEl.appendChild(historyItem);
        });
    } else {
        historyListEl.innerHTML = '<p>No donation history available.</p>'; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('donation-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Function to open modal
    function openModal() {
        modal.classList.remove('hidden'); // Make the modal visible
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden'); // Hide the modal
    }

    // Attach the openModal function to each donate button
    const donateButtons = document.querySelectorAll('button[id^="Donate-quota"]');
    donateButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
   

    // Close modal when the close button is clicked
    closeModalButton.addEventListener('click', closeModal);

    // Optionally, close modal when clicking outside the modal content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('donation-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Function to open modal
    function openModal() {
        modal.classList.remove('hidden'); // Make the modal visible
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden'); // Hide the modal
    }

    // Attach the openModal function to each donate button
    const donateButtons = document.querySelectorAll('button[id^="Donate-noyakali"]');
    donateButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
   

    // Close modal when the close button is clicked
    closeModalButton.addEventListener('click', closeModal);

    // Optionally, close modal when clicking outside the modal content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('donation-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Function to open modal
    function openModal() {
        modal.classList.remove('hidden'); // Make the modal visible
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden'); // Hide the modal
    }

    // Attach the openModal function to each donate button
    const donateButtons = document.querySelectorAll('button[id^="Donate-feni"]');
    donateButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
   

    // Close modal when the close button is clicked
    closeModalButton.addEventListener('click', closeModal);

    // Optionally, close modal when clicking outside the modal content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});






