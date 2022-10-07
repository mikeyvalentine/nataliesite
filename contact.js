const copy = document.getElementById('copy');
copy.addEventListener('click', function(){
  navigator.clipboard.writeText('hi.michaellawrence@gmail.com');
  copy.textContent = '(copied!)';
});