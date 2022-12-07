let menubtn = document.querySelectorAll("#menubtn>a");
let menu = document.querySelectorAll("#menu>div");

// // for burger
// menubtn[0].addEventListener("mouseover", bgchange = ()=> {
//       menubtn[0].style.backgroundColor = "rgba(209, 217, 224, 0.26)";
//       burger.style.backgroundColor = "rgba(209, 217, 224, 0.26)";
// });
// menubtn[0].addEventListener("mouseout", bgchange = ()=> {
//       menubtn[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
//       burger.style.backgroundColor = "rgba(255, 255, 255, 0)";
// });

// // for pizza
// menubtn[1].addEventListener("mouseover", bgchange = ()=> {
//       menubtn[1].style.backgroundColor = "rgba(209, 217, 224, 0.26)";
//       pizza.style.backgroundColor = "rgba(209, 217, 224, 0.26)";
// });
// menubtn[1].addEventListener("mouseout", bgchange = ()=> {
//       menubtn[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
//       pizza.style.backgroundColor = "rgba(255, 255, 255, 0)";
// });

// // for platter
// menubtn[2].addEventListener("mouseover", bgchange = ()=> {
//       menubtn[2].style.backgroundColor = "rgba(209, 217, 224, 0.26)";
//       platter.style.backgroundColor = "rgba(209, 217, 224, 0.26)";
// });
// menubtn[2].addEventListener("mouseout", bgchange = ()=> {
//       menubtn[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
//       platter.style.backgroundColor = "rgba(255, 255, 255, 0)";
// });




for (let i = 0; i < 4; i++) {
      menubtn[i].addEventListener("mouseover", bgchange = () => {
            menubtn[i].style.backgroundColor = "rgba(209, 217, 224, 0.26)";
            menu[i].style.backgroundColor = "rgba(209, 217, 224, 0.26)";
      });
      menubtn[i].addEventListener("mouseout", bgchange = () => {
            menubtn[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
            menu[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
      });
}