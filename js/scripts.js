function playVideo() {
    var video = document.getElementById('video');
    video.play();
}

function playVideo2() {
    var video = document.getElementById('video2');
    video.play();
}

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.container > div[id]').forEach(section => {
            section.style.display = 'none';
        });
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            target.style.display = 'block';
        }
    });
});
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}