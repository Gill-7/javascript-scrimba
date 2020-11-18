const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entryForm = document.getElementById('entryForm') 
const entriesNav = document.querySelector('.entries-nav')

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';

    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count++;
    entriesNav.appendChild(displayEntryButton)


    displayEntryButton.addEventListener('click', function() {

        const allEntries = document.querySelectorAll('.single-entry');
        for(let i=0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none';
        }
        entryDiv.style.display = 'block';
    })

}

entryForm.addEventListener('submit', addEntryToDom)
