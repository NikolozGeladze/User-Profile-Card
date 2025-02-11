var fullTextElement = document.querySelector('.card-info .user-bio');
var fullText = fullTextElement.textContent;
var card = document.querySelector('.card');
var body = document.body

console.log(fullText.length);

if (fullText.length > 200) {
    var newTextElement = document.createElement('span');
    var dots = document.createElement('label');
    dots.textContent = ' . . .';
    dots.style.fontWeight = '600';
    newTextElement.textContent = ' Read More';

    fullTextElement.textContent = fullText.slice(0, 200);
    fullTextElement.appendChild(dots);
    fullTextElement.appendChild(newTextElement);

    newTextElement.addEventListener('click', function () {
        card.classList.toggle('expanded');
        body.classList.toggle('expanded')

        if (card.classList.contains('expanded')) {
            fullTextElement.textContent = fullText + " ";
            fullTextElement.appendChild(newTextElement);
            newTextElement.textContent = " Read Less";
        } else {
            fullTextElement.textContent = fullText.slice(0, 200);
            fullTextElement.appendChild(dots);
            fullTextElement.appendChild(newTextElement);
            newTextElement.textContent = " Read More";
        }
    });
}

var images = document.querySelectorAll(".cover-image, .profile-picture-img");

images.forEach(image => {
    image.addEventListener("click", function () {
        showFullScreenImage(this.src);
    });
});

function showFullScreenImage(src) {
    var overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");

    var fullScreenImage = document.createElement("img");
    fullScreenImage.classList.add("fullscreen-img");
    fullScreenImage.src = src;

    overlay.addEventListener("click", function () {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(fullScreenImage);
    document.body.appendChild(overlay);
}
