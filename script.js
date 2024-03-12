/////// Setup and start animation
var typed = new Typed('#element', {
    strings: ['Frontend Developer','Graphic Designer','Frontend Developer','Video Editor'],
    typeSpeed: 50,
  });

  ////Dark or light mode

  let modeBtn= document.querySelector(".btn-mode");
  let body = document.querySelector("body");
  
  let currMode = "light";
  
  modeBtn.addEventListener("click", () =>{
      
      if(currMode === "light"){
          currMode = "dark";
          // document.querySelector("body").classList.add("dark");
          body.classList.add("dark");
          body.classList.remove("light");
      }else {
  
          currMode = "light";
          // document.querySelector("body").style.backgroundColor = "White";
          body.classList.add("light");
          body.classList.remove("dark");
      }
  
      console.log(currMode);
  
  })
  