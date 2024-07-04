import { useState } from "react";

export default function Commentform() {
  let [formdata, setFormdata] = useState({
    Username: "",
    Textarea: "",
    Rating: "",
  });

  let handleformChange = (event) => {
    setFormdata((curdata)=>{
        return{...curdata,[event.target.name]:event.target.value};
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    setFormdata({
      Username: "",
      Textarea: "",
      Rating: "",
    });
  };
  return (
    <div>
      <h4>Give Comment.....</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username : </label>
        <input type="text" placeholder="Username" name="Username" value={formdata.Username} onChange={handleformChange}/>
        <br />
        <br />
        <label htmlFor="Comment">Comment : </label>
        <br />
        <textarea name="Textarea" id="Comment" cols="30" rows="10" placeholder="Enter Your Comment" value={formdata.Textarea} onChange={handleformChange}>
        </textarea>
        <br />
        <br />
        <label htmlFor="Rating">Rating : </label>
        <input type="number" placeholder="" min={1} max={5} name="Rating" value={formdata.Rating} onChange={handleformChange}/>
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
