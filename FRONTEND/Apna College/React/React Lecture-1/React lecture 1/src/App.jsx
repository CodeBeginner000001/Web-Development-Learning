import "./App.css";
import ProductTab from "./ProductTab.jsx";
// import { Title } from "./Title.jsx"

//Components for code 2 ->section2
//import { Title } from "./Title.jsx" /*Used when importing  multiple components */
// import Title from "./Title"; /*using when importing only one components */
// import Title2 from "./Title"; /*But used less as when someone reads the code it could the easy for the code to understand */


//Components for code 1 ->section1
/*Components are declared in the app.jsx file but each component should be 
declared in its respective .jsx file no matter how small it is.*/

// function Title() {
//   return <h1>This is title</h1>;
// }

// function Description(){
//   return (
//     <div>
//       <p>Hello World!</p>
//       <h3>GG Well played</h3>
//     </div>
//   )
// }

function App() {
  // let name= "Adarsh Goyal";
  return (
    /*Using of components in code 1 -> section 1*/

    // <div>
    //   <Title />
    //   <Description />
    //   <Title />
    //   <Description/>
    // </div>

    /*Using of components in code 2 -> section 2*/
    // <div>
    //   <Title/>
    //   <Title/>
    //   {/* <Title2/>
    //   <Title2/> */}
    // </div>

    /*code-3 -> section3 */
    /*we are not using class attribute in html in jsx as there are some keywords reserved for js
    so we will not use those attribute's name in jsx that have different meanings reserved in js  */
    // <div className="hello"> 
    //   <h1>hello world !</h1>
    //   <Title />
    // </div>

    /*code-4 -> section4 */
    /* Using React fragments that is <> </> if we dont want to crate a unnecessary element*/
    // <>
    // <h1>hello world !</h1>
    // <Title />
    // <Title />
    // </>


    /* Code-5 -> section5*/
    /*Using curly Bracs you can open the world of js in html and be able to use js command line with HTMl */
    // <>
    // <p>2 *2 = {2*2}</p>
    // <p>Hi, {name}</p>
    // <p>Hi, {name.toUpperCase()}</p>

    // <p>2 *2 = {2*2}</p>
    // <p>Hi, {name}</p>
    // <p>Hi, {name.toUpperCase()}</p>

    // <p>2 *2 = {2*2}</p>
    // <p>Hi, {name}</p>
    // <p>Hi, {name.toUpperCase()}</p>
    // </>

    <ProductTab />
  );
}

export default App;
