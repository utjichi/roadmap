for(const elm of document.getElementsByClassName("load")){
  fetch(elm.dataset.href).then(res=>res.text()).then(text=>{
    for(const line of text.split("\n")){
      const li=document.createElement("li");
      elm.append(li);
      const ol=document.createElement("ol");
      li.append(ol);
      for(const data of line.split(",")){
        const lili=document.createElement("lili");
        ol.append(lili);
        lili.textContent=data;
      }
    }
  });
}
