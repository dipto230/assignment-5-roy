function toggleButton(buttonType){
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    donationBtn.classList.remove('bg-green-500', 'text-white');
    donationBtn.classList.add('bg-white', 'text-black');
    historyBtn.classList.remove('bg-green-500', 'text-white');
    historyBtn.classList.add('bg-white', 'text-black');
    if (buttonType === 'donation') {
    
        
        donationBtn.classList.remove('bg-white', 'text-black');
        donationBtn.classList.add('bg-green-500', 'text-white');
      } else if (buttonType === 'history') {
       window.location.href='/histroy.html';
        historyBtn.classList.remove('bg-white', 'text-black');
        historyBtn.classList.add('bg-green-500', 'text-white');
      }
}



