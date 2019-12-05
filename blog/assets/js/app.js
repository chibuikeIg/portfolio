window.onload = () =>{
    let aboutMe = document.querySelector('.aboutMe');
    let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas similique. Dolorum nihil possimus reprehenderit quae molestias labore asperiores, dolores, magnam distinctio sint fugit impedit minus vitae quos laborum? Error!';

    let i = 0;
    function typeWriter () {
        if(i < content.length ){

            aboutMe.innerHTML += content[i];
            i++;
            setTimeout(typeWriter, 50)
        }
    }


    typeWriter();
    
}