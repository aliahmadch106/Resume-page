document.getElementById('download-btn').addEventListener('click', function() {
    // Create an invisible link element
    var link = document.createElement('a');
    // Set the href to your Canva link
    link.href = 'https://www.canva.com/design/DAGQ_ZYn4Uw/YjPPZyzYFtuxZmrG6SebFQ/view?utm_content=DAGQ_ZYn4Uw&utm_campaign=designshare&utm_medium=link&utm_source=editor';
    // Set download attribute for direct download
    link.download = 'Canva_Design.pdf';  // Provide the file name for the download
    // Trigger the click event
    link.click();
});


window.addEventListener("load", function() {
    checkScreenOrientation();
    });

    window.addEventListener("orientationchange", function() {
    checkScreenOrientation();
    });

    function checkScreenOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
            console.log("You are in portrait mode");


            const MenuIcon = document.getElementById('menuIcon');
            const NavBar = document.getElementById('nav');
            const MainPage = document.querySelector('main');

            MenuIcon.addEventListener('click', (event) => {
            NavBar.style.marginLeft='0';
    });

            MainPage.addEventListener('click', (event) => {
                NavBar.style.marginLeft='-70%';
    });

    const Nav = document.querySelector('nav');
    const NavLinks = document.querySelectorAll('nav a');

    NavLinks.addEventListener('click', (event) => {
        Nav.style.marginLeft='-70%';
});

    } else {
            console.log("You are in landscape mode");
            
    }
    }





document.addEventListener('DOMContentLoaded', function() {
    const circularProgress = document.querySelectorAll('.circular-progress');
    circularProgress.forEach(progress => {
        const value = progress.getAttribute('data-percentage');
        const progressValue = progress.querySelector('.progress-value');
        let startValue = 0;
        const speed = 50;

        let progress_bar = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progress.style.background = `conic-gradient(#f84600 ${startValue * 3.6}deg, #dcdcdc ${startValue * 3.6}deg)`;
            if (startValue == value) {
                clearInterval(progress_bar);
            }
        }, speed);
    });
});





    


//     // Get the navigation bar
// const navbar = document.getElementById('nav');

// // Add event listener to the window scroll event
// window.addEventListener('scroll', () => {
//   // Get the current scroll position
//   const scrollPosition = window.scrollY;
  
//   // Check if the user is scrolling down
//   if (scrollPosition > 100) {
//     // Hide the navigation bar
//     navbar.style.top = '-100px';
//   } else {
//     // Show the navigation bar
//     navbar.style.top = '0px';
//   }
// });
