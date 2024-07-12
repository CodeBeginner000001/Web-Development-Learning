import "./App.css";
// import { Users } from "./users";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios"
function App() {
  const [query, setQuery] = useState("");
  const [data,setData]=useState([]);

  //Code-1
  //return the filtered array
  // let d=Users.filter((user)=>user.first_name.toLowerCase().includes(query));

  //Code-2
  // let keys=["first_name","last_name","email","gender"]
  // const search = (data) => {
  //   return data.filter(
  //     (items) =>
  //       keys.some(key=>items[key].toLowerCase().includes(query))
  //   );
  // };

  useEffect(()=>{
    const fetchUSers= async()=>{
      const res =await axios.get(`http://localhost:3000?q=${query}`);
      setData(res.data);
      console.log(data)
    };
    if(query.length===0||query.length>2)fetchUSers();
  },[query])
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search...."
        onChange={(e) => setQuery(e.target.value)}
      />
      {/*Code-1*/}
      {/* <ul className="list">
        {// Display the filtered array}
        {d.map((user)=>(
          <li key={user.id}className="listItem">{user.first_name}</li>
        ))}
        </ul> */}

        {/*Code-2*/}
      {/* <Table data={search(Users)} /> */}
      <Table data={data} />
    </div>
  );
}

export default App;
