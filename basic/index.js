const squares = Array.from(document.querySelectorAll('.grid div'))


const layout = [
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','L','','','','','','','','','','',
    '','','E','S','S','E','N','T','I','A','L','','',
    '','','A','','','','','','','','','','',
    '','','R','E','A','C','T','','','','','','',
    '','','N','','','','','','','','','','',
    '','','I','','','','','','','','','','',
    '','','N','','','','','','','','','','',
    '','','G','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
]

for(let i = 0; i < squares.length; i++) {
    let letter = layout[i]
    squares[i].innerHTML = letter
    if(letter !== ''){
        squares[i].classList.add('tile')
    }
}