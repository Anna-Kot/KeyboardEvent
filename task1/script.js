document.querySelector('.color').addEventListener('click', function() {
    document.querySelector('.color_t').classList.add('color_table');
    for(let i=0; i<=8; i++) {
        if (document.querySelector('.block_c')) {
            document.querySelector('.block_c').setAttribute('class', 'block_col')
        }
    }
})
function addColor() {
    for(let i=0; i<=8; i++) {
        if (document.getElementsByClassName('block_col')) {
            document.body.style.backgroundImage= 'none';
            document.body.style.backgroundColor= event.target.style.backgroundColor
        }
    }
}
document.querySelector('.images').addEventListener('click', function() {
    if (document.querySelector('.color_table')) {
    document.querySelector('.color_table').setAttribute('class', 'color_t');
    for(let i=0; i<=8; i++) {
        if (document.querySelector('.block_col')) {
            document.querySelector('.block_col').setAttribute('class', 'block_c')
        }
    }
    }
})
document.querySelector('.images').addEventListener('click', function() {
    document.querySelector('.images_t').classList.add('images_table');
    for(let i=0; i<=8; i++) {
        if (document.querySelector('.block_i')) {
            document.querySelector('.block_i').setAttribute('class', 'block_img');
        }
    }
})
function addPhoto() {
    for(let i=0; i<=8; i++) {
        if (document.getElementsByClassName('block_col')) {
            document.body.style.backgroundImage= event.target.style.backgroundImage
        }
    }
}
document.querySelector('.color').addEventListener('click', function() {
    if(document.querySelector('.images_table')) {
    document.querySelector('.images_table').setAttribute('class', 'images_t');
    for(let i=0; i<=8; i++) {
        if (document.querySelector('.block_img')) {
            document.querySelector('.block_img').setAttribute('class', 'block_i');
        }
    }
    }
})
