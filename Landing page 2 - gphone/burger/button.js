
// const toggleButton = document.querySelector('.toggle-button')[0]
// const navbarLinks = document.querySelector('.dropdown')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('open')
// })


// const showMenu = (toggleId, dropdownId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(dropdownId)
  
//     if(toggle && nav){
//       toggle.addEventListener('click', ()=>{
//         nav.classList.toggle('show')
//         toggle.classList.toggle('bx-x')
//       })
//     }
//   }
//   showMenu('sub-toggle','dropdown-menu')

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.dropdown');

    burger.addEventListener('click', () => {
        nav.classList.toggle('dropdown-active');
    });
}

navSlide();