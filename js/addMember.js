function addMember() {
    var dimmedElement = document.querySelector('.dimmed');
    var addmember = document.querySelector('.add-members');

    dimmedElement.classList.add('active');
    addmember.style.display = 'flex';
}

function cancelMember() {
    var dimmedElement = document.querySelector('.dimmed');
    var addmember = document.querySelector('.add-members');

    dimmedElement.classList.remove('active');
    addmember.style.display = 'none';
}