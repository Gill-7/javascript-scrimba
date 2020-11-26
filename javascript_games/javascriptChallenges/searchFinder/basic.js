
var inputValue = document.getElementById('input')
inputValue.addEventListener('keyup', function(e) {
    let searchQuery = e.target.value.toLowerCase();
    let nameValues = document.getElementsByClassName('name')
    for(let i=0; i < nameValues.length; i++) {
        const currentName = nameValues[i].textContent.toLowerCase();
        
        if(currentName.includes(searchQuery)) {
            nameValues[i].style.display = 'block';
        } else {
            nameValues[i].style.display = 'none'
        }
    }
})