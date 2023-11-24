//Javascript file to change the image randomly
//List of image URLs
const imageUrls = [
                    "alien_dance(random).jpg",
                    "alien_game(random).jpg",
                    "alien_mall(random).jpg",
                    "alien_pizza(random).jpg",
                    "ufo_society(random).jpg"
                    ];

//Function to change the image source randomly             
function changeImage(){
    //Get a random index from the imageUrls array
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    //Get the image by its ID
    const imageElement = document.getElementById("randomImage");
    //Change the image source to the randomly selected URLs
    imageElement.src = imageUrls[randomIndex];
}