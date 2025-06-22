import { use, useState } from "react";

let style = {border : "2px solid white" ,padding:"2.5rem",borderRadius:"1rem"}

function CommentForm() {
  let [data,setData] = useState({
    username:"",
    comments:"",
    ratings: ""
  })
  
  function handleCommentsData(event){

    setData((prevData)=>{
        return {...prevData,[event.target.name] : event.target.value}
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(data)
  }

  return (
    <>
      <h4>Comment Form</h4>
      <form onSubmit={handleSubmit} style={style}>
        <label htmlFor="username">Username : </label>
        <input 
        type="text" 
        placeholder="enter username" 
        id="username"
        name="username"
        value={data.username}
        onChange={handleCommentsData}
        />

        <br /><br />

        <label htmlFor="comments">Comments : </label>
        <textarea  
        placeholder="enter Comment" 
        id="comments"
        name="comments"
        value={data.comments}
        onChange={handleCommentsData}>
        </textarea>       
     
        <br /><br />

        <label htmlFor="ratings">Ratings : </label>
        <input 
        type="number"  
        id="ratings"
        name="ratings"
        min={0}
        max={5}
        value={data.ratings}
        onChange={handleCommentsData}
        />
        
        <br /><br />

        <button>Send Data</button>
      </form>
    </>
  );
}

export default CommentForm;
