let details=[
    {
     
    first_name:"ganesh",
    last_name:"kalyan",
    age:23,
    gender:"male",
    address:"9-263/gurrappa naidu street/chittoor",
    state:"ANDHRA PRADHESH",
   food:"gongura pachaddi",
   country:"INDIA",
    pincode:517001,
},
{
 
    
    first_name:"rahul",
    last_name:"manohar",
    age:20,
    gender:"male",
    address:"8-43/witch street/chittoor",
    state:"ANDHRA PRADHESH",
    food:"fish fry",
    country:"INDIA",
    pincode:517001,
},

{
  
    first_name:"yeswanth",
    last_name:"ram",
    age:21,
    gender:"male",
    address:"9-49/witch street/chittoor/",
    country:"INDIA",
    state:"ANDHRA PRADHESH",
    food:"IDLY",
    pincode:517001,
    
},

{
 
    first_name:"manasa",
    last_name:"badure",
    age:20,
    gender:"female",
    address:"778/thotapalayam/chittoor",
    state:"ANDHRA PRADHESH",
    country:"INDIA",
    food:"curd rice",
    pincode:517001,
  
},

{
    
    first_name:"v.jeeva",
    last_name:"anandh",
    age:22,
    gender:"male",
    address:"101/santhapet/chittoor",
    state:"ANDHRA PRADHESH",
    country:"INDIA",
    food:"mutton curry",
    pincode:517001,
},

{
  
    first_name:"pallavi",
    last_name:"mohan",
    age:25,
    gender:"female",
    address:"ghandhi nagar street/457/palavaram",
    state:"TAMIL NADU",
    country:"INDIA",
    food:"kuttu parota",
    pincode:6000080,
},

{
    
    first_name:"fathima",
    last_name:"bhanu",
    age:20,
    gender:"female",
    address:"church street/bombay nagar/mitchel road",
    state:"KERELA",
    country:"INDIA",
    food:"GEE DOSA",
    pincode:9110100,
},

{


    first_name:"siva",
    last_name:"jilla",
    age:23,
    gender:"male",
    address:"9-263/gurrappa naidu street/chittoor",
    state:"ANDHRA PRADHESH",
    country:"INDIA",
    food:"BEEF BIRIYANI",
    pincode:517001,
},

]



function getdata(details){
    const tablebody= document.getElementById('table_body')
    let data=" "
    for(person of details){
        data+=`
        <tr><td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.age}</td>
        <td>${person.gender}</td>
        <td>${person.address}</td>
        <td>${person.pincode}</td>
        <td>${person.state}</td>
        <td>${person.food}</td>
        <td>${person.country}</td>
        
        </tr>
       `

    }
    tablebody.innerHTML=data;
    
}



 











  








    


















 










