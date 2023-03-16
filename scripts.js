console.log('linked') 
const button = document.querySelector("#button")
const userInput = document.querySelector("#to-do")
const ulCurrent = document.querySelector("#tasks")
const ulFinished = document.querySelector("#finished-tasks")
const clearButton = document.querySelector("#clearButton")

document.querySelector("#formList").addEventListener("submit", function(e){
    e.preventDefault()
})

button.addEventListener("click", function(){
    let userTask = userInput.value
    let li = document.createElement('li')
    let finishButton = document.createElement('button')
    li.innerText = userTask
    finishButton.innerText = "Finished"
    finishButton.addEventListener('click', function(){
        li.remove()
        finishButton.remove()
        li.style.textDecoration = "line-through"
        ulFinished.append(li)
    })
    ulCurrent.append(li, finishButton)
    console.log('clicked')
    console.log(userTask)

    clearButton.addEventListener("click", function(){
        li.remove()
        finishButton.remove()
     })

})
