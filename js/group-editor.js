function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

function addLink() {
    const url = prompt('Insert url');
    formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
    const a = content.querySelectorAll('a');
    a.forEach(item => {
        item.addEventListener('mouseenter', function () {
            content.setAttribute('contenteditable', false);
            item.target = '_blank';
        })
        item.addEventListener('mouseleave', function () {
            content.setAttribute('contenteditable', true);
        })
    })
})


const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function () {
    showCode.dataset.active = !active;
    active = !active
    if (active) {
        content.textContent = content.innerHTML;
        content.setAttribute('contenteditable', false);
    } else {
        content.innerHTML = content.textContent;
        content.setAttribute('contenteditable', true);
    }
})



const filename = document.getElementById('filename');

function fileHandle(value) {
    if (value === 'new') {
        content.innerHTML = '';
        filename.value = 'untitled';
    } else if (value === 'save') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../php/save_rtf.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('RTF file saved successfully.');
                } else {
                    console.error('Failed to save RTF file.');
                }
            }
        };
        xhr.send("filename=" + filename.value + "&content=" + content.innerHTML);
    }
}
