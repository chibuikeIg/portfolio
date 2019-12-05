const toggleSearchBar = document.querySelector('.toggle-search-bar');
        const toggleNavBar = document.querySelector('.toggle-nav-bar');
        const searchBar     = document.querySelector('.search-bar');
        const navBar     = document.querySelector('.nav-bar');

        toggleSearchBar.addEventListener('click', ()=>{
            let dropdown = localStorage.getItem('dropdown');

            if(dropdown == 'off' || dropdown==null) {

                searchBar.style.height = '45px';
                localStorage.setItem('dropdown','on');

            }else if(dropdown == 'on') {

                searchBar.style.height = '0px';
                localStorage.setItem('dropdown','off')

            }

        })


        toggleNavBar.addEventListener('click', ()=>{
            let dropdown = localStorage.getItem('nav-dropdown');
            let barIcon  = document.querySelector('.fa-bar');
            if(dropdown == 'off' || dropdown==null) {

                navBar.style.height = '242px';
                localStorage.setItem('nav-dropdown','on');
                barIcon.classList.remove('fa-bars');
                barIcon.classList.add('fa-times');

            }else if(dropdown == 'on') {

                navBar.style.height = '0px';
                localStorage.setItem('nav-dropdown','off')
                barIcon.classList.remove('fa-times');
                barIcon.classList.add('fa-bars');

            }

        })