const btns = document.querySelectorAll(".btn");
const images = document.querySelector(".images_display");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const photosSelected = e.currentTarget.classList;
    if (photosSelected.contains('mountain')) {
      images.innerHTML = `
       <img src='images/album/mountain/mountain01.jpg'/>
       <img src='images/album/mountain/mountain02.jpg'/>
       <img src='images/album/mountain/mountain03.jpg'/>
       <img src='images/album/mountain/mountain04.jpg'/>
       <img src='images/album/mountain/mountain05.jpg'/>
       <img src='images/album/mountain/mountain06.jpg'/>
      `;
    } 
    
    if (photosSelected.contains('costal')) {
      images.innerHTML = `
        <img src='images/album/costal/costal01.jpg'/>
        <img src='images/album/costal/costal02.jpg'/>
        <img src='images/album/costal/costal03.jpg'/>
        <img src='images/album/costal/costal04.jpg'/>
        <img src='images/album/costal/costal05.jpg'/>
        <img src='images/album/costal/costal06.jpg'/>
      `;
    }

    if (photosSelected.contains('sea')) {
      images.innerHTML = `
        <img src='images/album/sea/01.jpg'/>
        <img src='images/album/sea/02.jpg'/>
        <img src='images/album/sea/03.jpg'/>
        <img src='images/album/sea/04.jpg'/>
        <img src='images/album/sea/05.jpg'/>
        <img src='images/album/sea/06.jpg'/>
      `;
    }

    if (photosSelected.contains('other')) {
      images.innerHTML = `
        <img src='images/album/other/other01.jpg'/>
        <img src='images/album/other/other02.jpg'/>
        <img src='images/album/other/other03.jpg'/>
        <img src='images/album/other/other04.jpg'/>
        <img src='images/album/other/other05.jpg'/>
        <img src='images/album/other/other06.jpg'/>
      `;
    }
  })
})