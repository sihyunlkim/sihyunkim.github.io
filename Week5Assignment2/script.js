
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');
let fifthButton = document.getElementById('fifth-page');
let sixthButton = document.getElementById('sixth-page');


// Add click event to elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);
fifthButton.addEventListener('click', scrollPage);
sixthButton.addEventListener('click', scrollPage);

function scrollPage(){

	if(this.id === 'third-page'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight * 2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'fourth-page'
	if(this.id === 'fourth-page'){
		window.scrollTo({
			// Scroll three times the height of window height
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
	
		if(this.id === 'fifth-page'){
		window.scrollTo({
			// Scroll four times the height of window height
  			top: window.innerHeight * 4,
  			left: 0,
  			behavior: 'smooth'
		});
	}
			if(this.id === 'sixth-page'){
		window.scrollTo({
			// Scroll five times the height of window height
  			top: window.innerHeight * 5,
  			left: 0,
  			behavior: 'smooth'
		});
	}

}



let navButtons = document.getElementsByClassName('nav-btn');
let popupImage = document.getElementById('popup-image')

document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){


	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = '#f1ce53';
	}

	navButtons[sectionNum].style.backgroundColor = '#d07328';

}
document.addEventListener('scroll', function() {
    let section2 = document.getElementById('section2');
    let movingImage = document.getElementById('moving-image');

    // Get the position of section2 relative to the viewport
    let section2Position = section2.getBoundingClientRect();

    // Calculate the scroll position relative to section2
    let scrollPosition = window.scrollY - section2.offsetTop;

    // Adjust the image's horizontal position based on the scroll
    if ((scrollPosition +100) >= 0 && scrollPosition <= section2.offsetHeight) {
        let newLeft = Math.min(80, 80 - (scrollPosition / section2.offsetHeight) * 100);
        movingImage.style.left = newLeft + '%'; 
    }
});

document.addEventListener('scroll', function() {
    let section3 = document.getElementById('section3');
    let popupImage = document.getElementById('popup-image');

    // Get the position of section3 relative to the viewport
    let section3Position = section3.getBoundingClientRect();
    console.log('section:', section3Position);

    // Check if section3 is in the viewport
    if (section3Position.top < window.innerHeight && section3Position.bottom > 0) {
        popupImage.classList.add('visible');
    } else {
        // Optionally, you can remove the class if you want the image to disappear when scrolling out of section 3
        popupImage.classList.remove('visible');
    }
});



