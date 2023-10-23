const images = [
    { url: 'sergey-semin-Y0WXj3xqJz0-unsplash.jpg', height: 300, width: 200 },
    { url: 'tuqa-nabi-uhnZZUaTIOs-unsplash.jpg', height: 300, width: 200 },
    { url: 'andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg', height: 300, width: 200 }
];

const bufferedImages = [];

images.forEach(imageInfo => {
    const img = new Image(imageInfo.width, imageInfo.height);
    img.src = imageInfo.url;
    bufferedImages.push(img);
})

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function showRandomImage() {
    const imageIndex = getRandomIndex(bufferedImages.length);

    const selectedImage = bufferedImages[imageIndex];

    const container = document.getElementById('imageContainer');
    container.innerHTML = '';
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // }
    container.appendChild(selectedImage);
}