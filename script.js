for(const elm of document.getElementsByTagName("main")){
  fetch(`/roadmap/data/${(location.search||"?roadmap").slice(1)}.csv`).then(res=>res.text()).then(text=>{
    const table=document.createElement("ol");
    elm.append(table);
    table.className="table";
    for(const line of text.split("\n")){
      if(!line)continue;
      const cells=line.split(",");
      const a=document.createElement("a");
      table.append(a);
      a.href=`?${cells[0]}`;
      const li=document.createElement("li");
      a.append(li);
      li.classList.add("bar",cells[1]);
      const ol=document.createElement("ol");
      li.append(ol);
      ol.className="row";
      for(const data of cells.slice(2)){
        const lili=document.createElement("li");
        ol.append(lili);
        lili.innerHTML=data.replaceAll(/\[(.+?)\]\((.*?)\)/g,"<a href='$2'>$1</a>");
        lili.className="data";
      }
    }
  });
}
