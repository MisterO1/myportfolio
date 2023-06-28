document.getElementById("textId").addEventListener("keydown",(e)=>{
  switch (e.key) {
    case "ArrowDown":
    	console.log("ArrowDown");
      break;
    case "ArrowUp":
      console.log("ArrowUp");
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      break;
    default:
      console.log(e.key);
      return; 
  }

  e.preventDefault();
})