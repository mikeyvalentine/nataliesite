const img = document.getElementsByTagName('img');
Array.from(img).forEach(element => 
    element.onclick = function(){
        if (element.classList.contains('expanded')){
            if (element.id == 'landscape'){
                element.style.width = '50vw';
            } else {
                element.style.height = '80vh';
            }
            element.classList.remove('expanded');
        } else {
            if (element.id == 'landscape'){
                element.style.width = '80vw';
            } else {
                element.style.height = '120vh';
            }
            element.classList.add('expanded');
            console.log(1);
        }

    }
    );