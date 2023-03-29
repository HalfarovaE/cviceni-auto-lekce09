
let automobil = document.querySelector(".automobil")

window.addEventListener("keydown", function(udalost) {
  if (udalost.key ===  "ArrowRight") {
    automobil.style.marginLeft = "100px"


    console.log(udalost.key)

  } else if (udalost.key === "ArrowLeft") 
    automobil.style.marginLeft = "0px"
  }
)
