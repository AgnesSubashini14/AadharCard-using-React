import React,{useState} from 'react';
import './App.css';
export default function App(){
  const[user,setUser]=useState('');
  const details=[{
    id:1410,
    name:'suba',
    FatherName:'George',
    gender:'Female',
    age:30,
    No:6381278891


  },{
    id:1710,
    name:'Sriram',
    age:'31',
    FatherName:'Vasu',
    gender:'Male',

    No:9994384621
  },
{
  id:1016,
    name:'Heaman Vasu Dev',
    FatherName:'Sriram',
    age:'8',

    gender:'Male',

    No:9994384621
},
{
  id:1522,
  name:'Hafsa Hussain',
  FatherName:'Ansoor',
  age:'3',

  gender:'Female',

  No:9994076201
}]
const handleChange=(e)=>{
  setUser(e.target.value)
}
return(
  <div>
    <input  type="text" onChange={handleChange}/>
{details.filter(data=>{
  if(user ==""){
    return ""
  }
  else if(data.name==user|| data.gender===user ||data.age==user||data.id==user)
{
return data
}   

}).map(datas=>{
  return(
  <div  class='img'>
    <pre> Department Of India</pre>
    <pre> Government   Of India</pre>

    

    <pre>Name        =  {datas.name}</pre>
    <pre>FatherName  =  {datas.FatherName}</pre>
    <pre>Gender      =  {datas.gender}</pre>
    <pre>Age         =  {datas.age}</pre>



    </div>
  )

})


}
  </div>
  
)
}