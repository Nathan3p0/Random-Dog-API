function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then((response) => response.json())
    .then((data) => {
        displayResults(data);
        }
    )
    .catch((err) => console.error('Something Went Wrong!', err)) 
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

function fetchBreedImage() {
    const breedSearchValue = $('#breed').val();
    fetch(`https://dog.ceo/api/breed/${breedSearchValue}/images/random`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.code === '404') {
            $('#breedPhoto').html(`<h3>Your search was Invalid. Try Again!</h3><img src="images/pac-404.png">`)
        } else {
            $('#breedPhoto').html(`<h3>Your result for ${breedSearchValue}:</h3><br><img src=${data.message}>`)
        }
    })
    .catch(err => console.log('Something didn\'t go right.', err))
}

function breedForm() {
    $('#breedSearch').on('submit', function(e){
        e.preventDefault();
        fetchBreedImage();
        resetPage();
    })
}

function resetPage() {
    $('#dogPhotos').html('');
    $('#breedPhoto').html('');
}


function loadFunctions(){
    numberForm();
    breedForm();
}

window.onload = loadFunctions();