function addingName()
    {
      var name=document.sample.Name.value;
      var tr=document.createElement('tr')
      var td1=tr.appendChild(document.createElement('td'));            
      var td2=tr.appendChild(document.createElement('td'));
      var td3=tr.appendChild(document.createElement('td'));
      td2.innerHTML=name;
      td3.innerHTML='<input type="button" name="del" value="remove" onclick="delName(this)">'
      document.getElementById("tb1").appendChild(tr);
    }
    function delName(St){
      var del=St.parentNode.parentNode;
      del.parentNode.removeChild(del);
    }