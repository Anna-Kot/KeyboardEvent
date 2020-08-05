window.addEventListener('keydown', function(event) {
    console.log(event);
    console.log(event.keyCode)
})


window.addEventListener('keydown', function(event) {
    if(event.keyCode === 20 || event.keyCode === 13 || event.keyCode === 9 || event.keyCode === 8) {
        document.querySelector('#keyboard .n[data="'+event.keyCode+'"]').classList.add('color_new');
        window.addEventListener('keyup', function () {
            document.querySelector('#keyboard .n[data="'+event.keyCode+'"]').classList.remove('color_new');
        })
        if(event.keyCode === 9) {
            event.preventDefault();
            document.querySelector('.write').append('\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0');
        }
        if(event.keyCode === 13) {
            let enter = document.createElement('br');
            document.querySelector('.write').append(enter)
        }
        if(event.keyCode === 8){
            let str = document.querySelector('.write').innerHTML;
            document.querySelector('.write').innerHTML = str.slice(0 , str.length-1);
        }  
    }
    else if(event.keyCode===16) {
        document.querySelector('#keyboard .n[data-code="'+event.code+'"]').classList.add('color_new');
        window.addEventListener('keyup', function () {
            document.querySelector('#keyboard .n[data-code="'+event.code+'"]').classList.remove('color_new');
        })
    }
    else {
    document.querySelector('#keyboard .n[data="'+event.keyCode+'"]').classList.add('color_new');
    document.querySelector('.write').append(event.key);
    }
    window.addEventListener('keyup', function () {
        document.querySelector('#keyboard .n[data="'+event.keyCode+'"]').classList.remove('color_new');
    
    })
})

