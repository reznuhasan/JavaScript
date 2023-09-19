document.getElementById('add-btn').addEventListener('click', () => {
    const inputField = document.getElementById('add');
    const inputValue = inputField.value
    if (inputValue === "") {
        alert("please add something!!!!!")
    } else {
        let div = document.createElement('div');
        div.classList.add('list');
        div.innerHTML = `<li>${inputValue}</li><button class="remove-btn" id="remove-btn">X</button>`
        const parentContainer = document.getElementById('list-container')
        console.log(parentContainer)
        parentContainer.appendChild(div)
        inputField.value = ""
    }

})

document.getElementById('list-container').addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target && e.target.classList.contains('remove-btn')) {
        if(confirm("Are you sure?")){
            e.target.parentNode.remove();

        }
    }
})