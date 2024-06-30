import "./Product.css";
function Product({ title, price = 1, features = "", features2 = "" }) {
  // return (
  //     <div className="Product">
  //     <h3>{title}</h3>
  //     <h5>Price: {price}</h5>
  //     {/* Code-3 section-3
  //     Below code line is used to access features where array is passed in it
  //     and the array is access by value one by one in the form of list.

  //     Don't uncomment this piece of code ...this is for information only
  //     */}
  //     {/* <p>{features.map((features)=><li>{features}</li>)}</p> */}
  //     <p>{features}</p>
  //     <p>{features2.a}</p>
  //     </div>
  // );
/*------------------------------------------------------------------------ */
  /*Code-4 Section->4 
    using coditionals
   */

    /*Method-1 */
    // if(price>30000){
    //     return (
    //         <div className="Product">
    //           <h3>{title}</h3>
    //           <h5>Price: {price}</h5>
    //           <p>Discount of 5%</p>
    //         </div>
    //       );
    // } else{
    //     return (
    //         <div className="Product">
    //           <h3>{title}</h3>
    //           <h5>Price: {price}</h5>
    //         </div>
    //       );
    // }

    /*Method-2 
    solving problem of method -1 and the problem is repeation of code
    */
    // let isDiscount = price>30000? "Discount of 5%" : "";
    // return (
    //     <div className="Product">
    //        <h3>{title}</h3>
    //        <h5>Price: {price}</h5>
    //        <p>{isDiscount}</p>
    //     </div>
    // );

    /*Method-3 
    solving problem of method 2 and the problem is a p empty tag is created where 
    there is no discount
    */
    // return (
    //     <div className="Product">
    //        <h3>{title}</h3>
    //        <h5>Price: {price}</h5>
    //        {/* Now don't uncomment this line ... only for information 
    //        now the code is checking for both conditon and comsuming time so to solve this
    //        we have another method.
    //        */}
    //        {/* Method-1 */}
    //        {/* {price>30000? <p>Discount of 5%</p> : null} */}

    //        {/* Method-2 */}
    //        {price>30000 && <p>Discount of 5%</p>}
    //     </div>
    // );

/*------------------------------------------------------------------------ */

  /*Code-5 Section->5
    Dynamic Component Styling
   */
  let isDiscount = price>30000;
  let styles={backgroundColor: isDiscount? "red":""};
    return (
        <div className="Product" style={styles}>
           <h3>{title}</h3>
           <h5>Price: {price}</h5>
           {isDiscount && <p>Discount of 5%</p>}
        </div>
    );
}
export default Product;
