let totalBalance = 5500;
let donationBalance = 0;
const history = [];

// DOM elements
const totalBalanceEl = document.getElementById('total-balance'); 
const donationBalanceEl = document.getElementById('donation-balance'); 
const donationAmountEl = document.getElementById('donation-amount');
const historyListEl = document.getElementById('historyListEl');  // Corrected ID
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('historySection'); // Corrected ID
const donationTab = document.getElementById('donationBtn');
const historyTab = document.getElementById('historyBtn');

// Donation button event listener
document.getElementById('Donate-noyakali').addEventListener('click', function(event) {
    const amount = parseInt(donationAmountEl.value); // Parse amount input
    event.preventDefault(); // Prevent form submission or default behavior

    if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        alert('Please enter a valid donation amount.');
        return; 
    }
    
    // Update balances
    donationBalance += amount;
    totalBalance -= amount;
    
    // Add to history
    const now = new Date();
    history.push({ amount, time: now.toLocaleString() });
    
    // Update UI
    donationBalanceEl.textContent = `${donationBalance} BDT`; // Update donation balance
    totalBalanceEl.textContent = `${totalBalance} BDT`; // Update total balance
    
    donationAmountEl.value = ''; // Clear input field

    renderHistory(); // Update history list
});

// Tab switching logic for Donation Tab
donationTab.addEventListener('click', function() {
    donationSection.classList.remove('hidden');
     window.location.href='/index.html';
    historySection.classList.add('hidden'); // Hide history section
    donationTab.classList.add('bg-lime-400'); // Highlight Donation Tab
    historyTab.classList.remove('bg-lime-400'); // Remove highlight from History Tab
});

// Tab switching logic for History Tab
historyTab.addEventListener('click', function() {
    donationSection.classList.add('hidden');
   window.location.href='/histroy.html';
    historySection.classList.remove('hidden'); // Show history section
    historyTab.classList.add('bg-lime-400'); // Highlight History Tab
    donationTab.classList.remove('bg-lime-400'); // Remove highlight from Donation Tab

    renderHistory(); // Render the updated history
});

// Function to render the history list dynamically
function renderHistory() {
    historyListEl.innerHTML = ''; // Clear existing history list

    if (history.length > 0) {
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('bg-gray-200', 'p-2', 'rounded-lg');
            historyItem.innerHTML = `
                <p><strong>Date:</strong> ${item.time}</p>
                <p><strong>Amount:</strong> ${item.amount} BDT</p>
            `;
            historyListEl.appendChild(historyItem); // Append history item to list
        });
    } else {
        historyListEl.innerHTML = '<p>No donation history available.</p>'; // Show message if no history
    }
}











