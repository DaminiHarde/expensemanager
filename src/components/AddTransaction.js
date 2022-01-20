import React, {useState, useContext,useEffect} from 'react'
import { GlobalContext } from './ContextReducer';
import axios from 'axios';
export const AddTransaction = () => {
 // const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [cat,setCat]=useState('');
  const { addTransaction } = useContext(GlobalContext);
  const BASE_URL='./goceries.json';
 //autosuggestion for Goceries items list
 const [exp,setExp]=useState([]);
  const[input,setInput]=useState('');
  const [expSuggestion,setExpSuggestion]=useState([]);

  useEffect(()=>{
    const experience=async()=>{
      const response=await axios.get(BASE_URL)
      console.log(response.data);
       setExp(response.data);
    }
    experience();
  
  },
  [])
  const onChangeExp=(input)=>{
    let matches1=[]
    if(input.length>0){
      matches1=exp.filter(exp=>{
        const regexs=new RegExp(`${input}`,"gi");
        return exp.title.match(regexs)
      })
    }
    console.log('Experineces matches1',matches1)
    setExpSuggestion(matches1);
setInput(input);
  }
  const onExpSuggestionHandler=(input)=>{
    setInput(input);
    setExpSuggestion([]);
  }
  //  const onChangeDescription=(input)=>{
  //    const des=onChangeExp(input);
  //    setDescrip(des.description)
  //  }
  const onSubmit = e => {
    e.preventDefault();
    var today = new Date();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      input,
      amount: +amount,
      date :today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear() ,
      categoryOption:cat
    }
    addTransaction(newTransaction);
  }

 
const category = [
  {
    label: "Groceries",
    value: "Groceries",
  },
  {
    label: "Accommodation",
    value: "Accommodation",
  },
  {
    label: "Others",
    value: "Others",
  },
];


  return (
    <>
      <h3>Add new Expenses</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="amount" > Select Category :</label> 
          <div className="list-container" >
          <select >
{category.map((option,i) => (
  <option key={i} value={option.value} onClick={(event)=>{setCat(event.target.value)}}>{option.label}</option>
))}
</select>
          </div>
          <label htmlFor="amount" >Title</label> 
          <input type="text" placeholder="title" 
           value={input}
           onChange={e=>onChangeExp(e.target.value)}
           onBlur={()=>{
             setTimeout(()=>{
               setExpSuggestion([])
             },100)
           }}
          />
            {expSuggestion && expSuggestion.map((expSuggestions,i)=>
                <div key={i} onClick={()=>{onExpSuggestionHandler(expSuggestions.title)}}>
                  {expSuggestions.title}</div>
               )}
          <label htmlFor="amount" >Description</label> 
          <input type="text"  placeholder="Description" />
        </div>
        <div>
          <label htmlFor="amount" >Amount </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}