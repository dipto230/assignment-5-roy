let totalBalance = 5500;
let donationBalance = 0;
const history = [];

const totalBalanceEl = document.getElementById('total-balance'); 
const donationBalanceEl = document.getElementById('donation-balance'); 
const donationAmountEl = document.getElementById('donation-amount');
const historyListEl = document.getElementById('history-list'); 
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');
const donationTab = document.getElementById('donationBtn');
const historyTab = document.getElementById('historyBtn');

document.getElementById('Donate-noyakali').addEventListener('click', function(event) {
    const amount = parseInt(donationAmountEl.value); // Fix the variable name
    event.preventDefault();

    if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        alert('Please enter a valid donation amount.');
        return;
    }
    
    // Update balances
    donationBalance += amount;
    totalBalance -= amount;
    
    // Update the history
    const now = new Date();
    history.push({ amount, time: now.toLocaleString() });
    
    // Update the UI
    donationBalanceEl.textContent = `${donationBalance} BDT`; // Update the donation balance
    totalBalanceEl.textContent = `${totalBalance} BDT`; // Update the total balance

    // Clear the input field
    donationAmountEl.value = '';

    // Update the donation history
    updateHistoryList();
});

function updateHistoryList() {
    historyListEl.innerHTML = ''; // Clear the history list
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `Donated ${entry.amount} BDT on ${entry.time}`;
        historyListEl.appendChild(listItem); // Fix the reference here
    });
}

// Tab switching for donation and history sections
donationTab.addEventListener('click', () => {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    donationTab.classList.add('bg-lime-400');
    historyTab.classList.remove('bg-lime-400');
});

historyTab.addEventListener('click', () => {
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    historyTab.classList.add('bg-lime-400');
    donationTab.classList.remove('bg-lime-400');
});

