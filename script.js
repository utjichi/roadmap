document.getElementsByClassName("md").forEach(async elm=>{
  let content=await fetch(elm.dataset.href).text();
  elm.innerHTML=content;
});
