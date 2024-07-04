import {useState} from "react"
export default function Form(){
    let [formdata,setFormdata]=useState({
        fullname:"",
        username:"",
        password:""
    })

    let handleformChange=(event)=>{
        // let fieldName=event.target.name;
        // let fieldValue=event.target.value;
        // setFormdata((curData)=>{
        //     return{...curData,[fieldName]:fieldValue};
        // })
        setFormdata((curData)=>{
            return{...curData,[event.target.name]:event.target.value};
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formdata)
        setFormdata({
            fullname:"",
            username:"",
            password:""
        })
    }
    return(
        <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name &nbsp;</label>
        <input type="text" placeholder="Enter Full Name" value={formdata.fullname} onChange={handleformChange} id="fullname" name="fullname"/>
    </form>
    <br />
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name &nbsp;</label>
        <input type="text" placeholder="Enter UserName" value={formdata.username} onChange={handleformChange} id="username" name="username"/>
    </form>
    <br />
    <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password &nbsp;</label>
        <input type="password" placeholder="Enter password" value={formdata.password} onChange={handleformChange} id="password" name="password"/>
        <br /><br />
        <button>Submit</button>
    </form>
    </>
    )
}
