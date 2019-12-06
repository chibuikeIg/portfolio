const darkBg     = document.querySelector('.dark-bg');
const whiteColor = document.querySelectorAll('.white-color');
const toggleMode = document.querySelectorAll('.toggle-mode');
const borderWt   = document.querySelectorAll('.border-wt');
const pagination = document.querySelector('.cus-pagination');


toggleMode.forEach(tM=>{

    tM.addEventListener('click', ()=>{
        let nightMode= localStorage.getItem('nightMode');
        if(nightMode ==null || nightMode == 'off' ) {

            darkBg.style.backgroundColor = '#242424';

            if(pagination !=null) {
                pagination.style.backgroundColor = '#242424';
            }
            

            whiteColor.forEach(wC=>{
                wC.style.color = '#fff';
            });

            borderWt.forEach(bW=>{
                bW.style.borderColor = "#fff";
                bW.style.borderWidth = "1px";
                bW.style.borderStyle = "solid";
            })

            localStorage.setItem('nightMode','on');

        }else if (nightMode == 'on') {

            darkBg.style.backgroundColor = '#fff';
            if(pagination !=null){
                pagination.style.backgroundColor = '#000';
            }
            
            whiteColor.forEach(wC=>{
                wC.style.color = '#000';
            });

            borderWt.forEach(bW=>{
                bW.style.borderColor = "none";
                bW.style.borderWidth = "none";
                bW.style.borderStyle = "none";
            })

            localStorage.setItem('nightMode','off');

        }
        


    })

})

let nightMode = localStorage.getItem('nightMode');
if(nightMode == 'on' ) {

    darkBg.style.backgroundColor = '#242424';
    
    if(pagination !=null) {
        pagination.style.backgroundColor = '#242424';
    }

    whiteColor.forEach(wC=>{
        wC.style.color = '#fff';
    });

    borderWt.forEach(bW=>{
        bW.style.borderColor = "#fff";
        bW.style.borderWidth = "1px";
        bW.style.borderStyle = "solid";
    })

}else if (nightMode == 'off') {

    darkBg.style.backgroundColor = '#fff';

    if(pagination !=null){
        pagination.style.backgroundColor = '#000';
    }
    
    whiteColor.forEach(wC=>{
        wC.style.color = '#000';
    });

    borderWt.forEach(bW=>{
        bW.style.borderColor = "none";
        bW.style.borderWidth = "none";
        bW.style.borderStyle = "none";
    })

}



