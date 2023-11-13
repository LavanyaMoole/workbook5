document.addEventListener("DOMContentLoaded",()=>{
    const paragraphs=document.getElementsByTagName("p");
    console.log(paragraphs)
    const p=[...paragraphs];
    p.forEach(p=>{p.style.border="2px solid #000000"})
    const images=document.getElementsByTagName("img");
    let imgs=[...images];
    imgs.forEach(i=>{i.classList.add("roundedImages")});
    const img1=document.getElementById("image1");
    img1.src="./images/homepage.jpg";
    img1.alt="image1"

    const img2=document.getElementById("image2");
    img2.src="./images/homepage.jpg";
    img2.alt="image2"

    const img3=document.getElementById("image3");
    img3.src="./images/homepage.jpg";
    img3.alt="image3"
})