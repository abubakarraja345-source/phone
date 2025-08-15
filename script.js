     const people=[];

        document.getElementById("form").addEventListener("submit",function(event){
        event.preventDefault();

         const data = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        fatherName: document.getElementById("fathername").value,
        phone: document.getElementById("phone").value,
        religion: document.getElementById("religion").value,
        citizenship: document.getElementById("citizenship").value,
        houseNo: document.getElementById("houseno").value,
        streetNo: document.getElementById("streetno").value,
        town: document.getElementById("town").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value
      };
      
      console.log("Submitted Data:", data); 
      alert(`Form Submitted!\nName: ${data.firstName} ${data.lastName}\nPhone: ${data.phone}`);
      localStorage.setItem("formData",JSON.stringify(data));

      people.push({
            firstName:data.fatherName,
            lastName:data.lastName,
            fatherName:data.fatherName,
            phone:data.phone
        });
         const table=document.getElementById("tdata").getElementsByTagName("tbody")[0];
            const newRow=table.insertRow();

            const cell1=newRow.insertCell(0);
            const cell2=newRow.insertCell(1);
            const cell3=newRow.insertCell(2);
            const cell4=newRow.insertCell(3);

            cell1.textContent = data.firstName;
            cell2.textContent = data.lastName;
            cell3.textContent = data.fatherName;
            cell4.textContent = data.phone;
        console.log(people);

    });
  function removelast(){
    document.getElementById("tdata").getElementsByTagName("tbody")[0];
    const rowcount=table.rows.length;
    if(rowcount>0)
    {
        table.deleteRow(rowcount-1);
    }
    else{
        alert("no row");
    }
  } 
    
 function showsavedata(){
        const saved=JSON.parse(localStorage.getItem("formData"));
        if(saved)
        {
            alert(`Saved:\nName: ${saved.firstName} ${saved.lastName}\nPhone: ${saved.phone}`);
        }
        else{
            alert("no data found");
        }
        }