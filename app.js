function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then((response) => response.json())
    .then((data) => {
        displayResults(data);
        }
    )
    .catch((err) => console.error('Something Went Wrong!')) 
}

function displayResults(data) {
    const num = $('#quantity').val();
        for(let i = 0; i < num; i++) {
            console.log(data.message[i]);
            $('#dogPhotos').append(`<div class='crop'><img src='${data.message[i]}'></div>`);
    }
}

function numberForm() {
    $('#userChoice').on('submit', function(e){
        e.preventDefault();
        fetchImages();
        resetPage();
    });
}

function breedForm() {

}

function resetPage() {
    $('#dogPhotos').html('')
}


function loadFunctions(){
    numberForm();
    breedForm();
}

window.onload = loadFunctions();