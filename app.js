const item = document.querySelector('.item')
//console.log(item)
const placeholders = document.querySelectorAll('.placeholder')
//console.log(placeholders)


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
    //console.log(placeholder)
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
   // console.log('event start', event.target)
}

function dragend(event){
    console.log('event end', event.target)
    event.target.className = 'item'
   // event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
 //   console.log('drag over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
 //   console.log('drag enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
 //   console.log('drag leave')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
   // console.log('drag drop')
}