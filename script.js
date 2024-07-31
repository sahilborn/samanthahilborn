document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            // text.textContent = "Freelancer";
            text.textContent = "UI Designer";
        }, 0);
        setTimeout(() => {
            // text.textContent = "Blogger"; 
            text.textContent = "Digital Artist"; 
        }, 4000);
        setTimeout(() => {
            // text.textContent = "Youtuber";
            text.textContent = "Web Developer"; 
        }, 8000);
    };

    textLoad();
    setInterval(textLoad, 12000);

    // // Image click event
    // const img = document.getElementById('introImg');
    // const elements = document.querySelectorAll('.container, .introduction, .contact-links');

    // img.addEventListener('click', function() {
    //     // Toggle visibility for each element
    //     elements.forEach(el => {
    //         let isVisible = window.getComputedStyle(el).visibility === 'visible';
    //         if (!isVisible) {
    //             el.style.visibility = 'visible';
    //             el.style.opacity = '1';
    //             el.style.transition = 'opacity 0.5s ease-in-out, visibility 0s 0s'; // Ensure visibility transitions immediately
    //             img.style.zIndex = "0"; // Send image to the back
    //         } else {
    //             el.style.opacity = '0';
    //             el.style.transition = 'opacity 0.5s ease-in-out, visibility 0s 0.5s'; // Delay visibility transition
    //             setTimeout(() => { el.style.visibility = 'hidden'; }, 500); // Hide after opacity transition
    //             img.style.zIndex = "10"; // Bring image to the front
    //         }
    //     });
    // });
});
