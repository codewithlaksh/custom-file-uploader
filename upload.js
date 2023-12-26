const upload_btn = document.querySelector('button#upload_btn');
let custom_input = document.querySelector('input#custom_input');
let filesInp = document.querySelector('input#files');

upload_btn.addEventListener('click', () => {
    filesInp.click();
})

filesInp.addEventListener('input', (e) => {
    const files = [];
    console.log(e.target.files)
    for (let index = 0; index < e.target.files.length; index++) {
        const file = e.target.files[index];
        files.push(file.name);
    }
    custom_input.value = files.map(name => {
        return name
    }).join(', ')
})
