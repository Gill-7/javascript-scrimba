var openModal = document.getElementById('open-modal')

openModal.addEventListener('click', function() {
    var overLay = document.getElementById('overlay')
    overLay.style.display = 'block';
})

var closeModal = document.getElementById('close-modal')

closeModal.addEventListener('click', function() {
    var close = document.getElementById('overlay')
    close.style.display = 'none';
})