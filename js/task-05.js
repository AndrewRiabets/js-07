const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (event) => {
    event.currentTarget.value.trim()
        ? refs.output.textContent = event.currentTarget.value
        : refs.output.textContent = 'незнакомец' 
})


