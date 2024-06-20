// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = "" // empty string
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()
/*performace is better as DOM maupilation is not done 3 times */
//---------------------------------------------------------------------------------------------------
/*let teamPhotos = document.getElementById("container")

function displayImg(){
    for (i = 0; i < imgs.length; i++){
    teamPhotos.innerHTML += `<img class="team-img" src=" ${imgs[i]}">`
    }
}

displayImg()
 */