window.onload = function () {
  const gallery = document.querySelector('.gallery');
  const previewImage = document.querySelector('.preview-img img');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = 55 + percentY * 2;
    const rotateY = percentX * 2;

    gsap.to(gallery, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration:1,
      ease: "power2.inOut",
      overwrite:"auto"
    })
  })

  for(let i = 0; i <150 ; i++){
    const item = document.createElement('div');
    item.className = "item";
    const img = document.createElement('img');
    img.src = "./assets/img"  + ((i%15)+1) + ".jpeg";
    item.appendChild(img);
    gallery.appendChild(item);
  }

  const items = document.querySelectorAll('.item');
  const numberOfItems = items.length;
  const angleIncrement = 360 / numberOfItems;

  items.forEach((item, index) => {
    gsap.set(item, {
      rotationZ: index * angleIncrement,
      rotationY: 90,
      transformOrigin: "50% 400px",
    })
  
  item.addEventListener("mouseover", function (){
    const imgInsideItem = item.querySelector('img');
    previewImage.src = imgInsideItem.src;

    gsap.to(item, {
      x:10,
      y:10,
      z:10,
      duration:0.5,
      ease: "power2.inOut",
      overwrite:"auto"
    })
  })
  item.addEventListener("mouseout", function (){
    gsap.to(item, {
      x:0,
      y:0,
      z:0,
      duration:0.5,
      ease: "power2.inOut",
      overwrite:"auto"
    })
  })
})
}