const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower1 = document.createElement('div')
follower1.classList.add('cursor', 'cursor__follower1')
root.appendChild(follower1)

const follower2 = document.createElement('div')
follower2.classList.add('cursor', 'cursor__follower2')
root.appendChild(follower2)

const follower3 = document.createElement('div')
follower3.classList.add('cursor', 'cursor__follower3')
root.appendChild(follower3)

root.addEventListener('mousemove', (e) => {
    setPosition(follower3, e, -30, -20)
    setPosition(follower2, e, -20, -10)
    setPosition(follower1, e, -10, )
    setPosition(cursor, e)
    })

// This function will transform the style to set the position.
// It displays your mouse's coordinates whenever you trigger the mousemove event.

function setPosition(element, e, x=0 , y=0 ) {
    element.style.transform = `translate3d(${e.clientX+ x}px, ${e.clientY+ y}px, 0)`
    
} 

