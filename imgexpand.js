const img = document.getElementsByTagName('img');
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    if (!isMobile()) {
        Array.from(img).forEach(element => 
            element.onclick = function(){
                if (element.id == 'flowernospin'){
                } else {
                    if (element.classList.contains('expanded')){
                        if (element.id == 'landscape'){
                            element.style.width = '60vw';
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
            }
            );
        }
