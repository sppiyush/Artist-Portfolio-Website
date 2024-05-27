// Exhibitions Toggle 
const exhibitionsButtons = document.querySelectorAll('.exhibition__item');
const exhibitionDetails = document.querySelector('.exhibitions__right');

const getExhibition = (category) =>
    {
        const details = exhibitionsData.find(item => item.category === category);
        exhibitionDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
        `
    }

const removeActiveClass = () => {
    exhibitionsButtons.forEach(button => {
        button.classList.remove('active');
    })
}


exhibitionsButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const exhibitionClass = item.classList[1];
        getExhibition(exhibitionClass)
        item.classList.add('active')
    })
})

getExhibition('mumbai');

// --------------------------------------MIXITUP

const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation:{
        enable:false  // we will put our own animation 
    }
});  

mixer.filter('*');









//----------------------- SWIPER (tertimonials section) -------------------------------------//

const swiper = new Swiper('.swiper',{
   slidesPerView: 1,
   spaceBetween: 30,
   pagination:{
    el: ".swiper-pagination",
    clickable:true,
   },

   breakpoints: {
    600:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
   }
});


//--------------------NAV TOGGLE (small screens)

const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display ='none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display ='none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click' , openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

// close nav menu on click of nav link on small screens
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}