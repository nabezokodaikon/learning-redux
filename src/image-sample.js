window.addEventListener("load", (e) => {
  console.log("load");

  document.getElementById("imageView").addEventListener("mouseover", (e) => {
    console.log("mouseover");
  });
  document.getElementById("imageView").addEventListener("mouseout", (e) => {
    console.log("mouseout");
  });

  const file = "./sample-resource/wide-images/wide01.jpg";
  // const img = document.getElementById("imageView");
  const img = new Image();
  img.src = file;
  // img.setAttribute('crossOrigin', 'anonymous');
  // img.crossOrigin = "use-credentials";
  // img.src = file;
  img.addEventListener("load", (e) => {
    console.log("image load");
    console.log(`widht: ${img.width}, height: ${img.height}`);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
    const data = canvas.toDataURL();
    imageView.src = data;
  });
  // canvas.width = img.width;
  // canvas.height = img.height;
  // const ctx = imageView.getContext("2d");
  // ctx.fillStyle = "green";
  // ctx.fillRect(10, 10, 100, 100);
  // imageView.src = file;
  // console.log("image load");
  console.log(`widht: ${img.width}, height: ${img.height}`);
  // const canvas = document.getElementById("canvas");
  // const ctx = canvas.getContext('2d');
  // ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
  // imageView.src = canvas.toDataURL();
});

