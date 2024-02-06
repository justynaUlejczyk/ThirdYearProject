function createGroup() {
    var createGroup = document.querySelector('section.create-container');
    var dimmedElement = document.querySelector('.dimmed');

    dimmedElement.classList.add('active');
    createGroup.style.display = 'flex';
}

function closeCreate(clickedElement) {
    var dimmedElement = document.querySelector('.dimmed');
    var createGroup = document.querySelector('section.create-container');

    dimmedElement.classList.remove('active');
    createGroup.style.display = 'none';

}