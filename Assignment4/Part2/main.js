var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function thumbnailLoop() {
    for (var i = 0; i < 5; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', "images/pic" + (i + 1) + ".jpg");
        thumbBar.appendChild(newImage);
    }
}
/*
	Name: Ronakkumar Patel
	File: main
	Date: 08-02-2024
    This is the .html file of the fourth assignment in web development fundamentals.
*/
thumbnailLoop();

thumbBar.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'IMG') {
        displayedImage.src = e.target.src;
    }
});

btn.addEventListener('click', () => {
    if (btn.className === 'dark') {
        btn.className = 'light';
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.className = 'dark';
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
