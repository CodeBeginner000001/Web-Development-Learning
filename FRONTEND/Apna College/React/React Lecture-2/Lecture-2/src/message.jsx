function message({name, textcolor}) {
  // let style={textColor: color}
  return <h1 style={{ color: textcolor }}>Hello! {name}</h1>;
}
export default message;
