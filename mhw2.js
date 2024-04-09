const destra = document.querySelector('#destra');
const sinistra = document.querySelector('#sinistra');

destra.addEventListener('click', cambiaimg);
sinistra.addEventListener('click', cambiaimg);

function cambiaimg(event)
{
  let image = document.querySelector('#img1alt');
  image.classList.toggle("display")
}

const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML="up"
button.style.position = "fixed"; 
button.style.bottom = "20px";
button.style.right = "20px";

button.addEventListener('click', risali);

function risali() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  const images = document.querySelectorAll(".ttt img");

  images.forEach((image) => {
      image.dataset.originalSrc = image.src;
  
      image.dataset.hoverSrc = "play.jpg";
  
      image.addEventListener("mouseenter", () => {
          image.src = image.dataset.hoverSrc;
      });
  
      image.addEventListener("mouseleave", () => {
          image.src = image.dataset.originalSrc;
      });
  });





