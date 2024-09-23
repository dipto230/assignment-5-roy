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
