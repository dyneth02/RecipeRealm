// hero section starts here 

function imgSwap(current_image) {
    document.getElementById('img_box').src = current_image;
};

function changeColor(current_color) {
    const circle = document.getElementById('circle');
    circle.style.backgroundColor = current_color;
};

// setTimeout(changeColor, );