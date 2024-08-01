for(const elm of document.getElementsByTagName("main")){
  fetch(`/data/${location.search||"roadmap"}.csv`).then(res=>res.text()).then(text=>{
    const table=document.createElement("ol");
    elm.append(table);
    for(const line of text.split("\n")){
      if(!line)continue;
      const li=document.createElement("li");
      table.append(li);
      li.className="bar";
      const ol=document.createElement("ol");
      li.append(ol);
      ol.className="row";
      for(const data of line.split(",")){
        const lili=document.createElement("li");
        ol.append(lili);
        lili.textContent=data;
        lili.className="data";
      }
    }
  });
}
