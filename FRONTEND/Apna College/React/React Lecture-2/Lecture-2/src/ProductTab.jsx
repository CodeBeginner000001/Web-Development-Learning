import Product from "./Product.jsx";

function ProductTab() {
  /*Code-1 section->1 
    passing array and object as prop or as parameter to a product function
    */
  // let options=["Hi-Tech","Durable","Fast","Redo"];
  // let obj={
  //     a:"Hi-Tech",
  //     b:"Durable",
  //     c:"Fast",
  //     d:"Redo"
  // };
  // return (
  //     <>
  //     <Product title="Laptop" price="30000"/>
  //     <Product title="Mobile Phone" price={15000}/>
  //     <Product title="Pen" price={10/2}/>
  //     <Product title="Eraser"/>
  //     <Product title="Options" price={1} features={options} />
  //     <Product title="Options" price={1} features2={obj} />
  //     </>
  // )

  /*Code-2 section->2
    how to access array by value one by one
    */
  // let options=[<li>"Hi-Tech"</li>,<li>"Durable"</li>,<li>"Fast"</li>,<li>"Redo"</li>];
  // return (
  //     <>
  //     <Product title="Laptop" price={30000} features={options}/>
  //     </>
  // );

  /*Code-3 section->3
    how to access array by value one by one using map function
    */
  let options = ["Hi-Tech", "Durable", "Fast", "Redo"];
  return (
    <>
      <Product title="Laptop" price={30000} />
      <Product title="Mobile Phone" price={40000} />
      <Product title="Pen" price={10 / 2} />
    </>
  );
}

export default ProductTab;
