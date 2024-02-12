var folderHistory = ['/']; // Initial state is the root directory

function openFolder(folderElement) {
    // Get the folder name from the clicked element
    var folderName = folderElement.querySelector('span').innerText;

    // Update the file directory section with the folder name
    var directorySection = document.getElementById('directorySection');
    directorySection.innerHTML = '<h4>/' + folderName + '</h4><button onclick="goBack()"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>';

    // Add the current folder to the history
    folderHistory.push(folderName);

    // Update the file container based on the current state
    updateFileContainer();
}
