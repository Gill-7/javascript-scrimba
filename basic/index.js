const myDogs = ["Lucky", "Max", "Buddy"]

function renderDogs() {
    const dogContainer = document.getElementById('dog-container')

    dogContainer.innerHTML = ''
    for (let i=0; i<myDogs.length; i++) {
        const dog = document.createElement('div')
        dog.style.textAlign = 'center';
        dog.style.marginBottom = '10px'; 
        dog.textContent = myDogs[i]   
        dogContainer.append(dog)
    }
}

renderDogs()

const pushBtn = document.getElementById('push-btn')
pushBtn.addEventListener('click', function() {
    const dogInput = document.getElementById('dog-input')
    if(dogInput.value) {
        myDogs.push(dogInput.value)
        dogInput.value = ''
        renderDogs()
    }
})

const unshiftBtn = document.getElementById('unshift-btn')
unshiftBtn.addEventListener('click', function() {
    const dogInput = document.getElementById('dog-input')
    if(dogInput.value) {
        myDogs.unshift(dogInput.value)
        dogInput.value = ''
        renderDogs()
    }
})


const popBtn = document.getElementById('pop-btn')
popBtn.addEventListener('click', function() {
    myDogs.pop()
    renderDogs()
})

const shiftBtn = document.getElementById('shift-btn')
shiftBtn.addEventListener('click', function() {
    myDogs.shift()
    renderDogs()
})