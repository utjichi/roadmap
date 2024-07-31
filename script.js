for(const elm of document.getElementsByClassName("load")){
  fetch(elm.dataset.href).then(res=>res.text()).then(text=>{
    const table=document.createElement("table");
    for(const line of text.split("\n")){
      const tr=document.createElement("tr");
      for(const data of line.split("\n")){
        const td=document.createElement("td");
        td.textContent=data;
        tr.append(td);
      }
      table.append(tr);
    }
    elm.append(table);
  });
}
