const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Button=({text, theColor})=>{
  const theStyle ={
    backgroundColor: theColor, 
    border: "none", 
    paddingInline: "10px", 
    paddingBlock: "3px", 
    borderRadius: "3px", 
    color: "white"
  }
  return (
    <button style={theStyle}>{text}</button>
  )
}

function FirstPart() {
  return(
    <div>
      <h1>First Part</h1>
      <Button text={"Like"} theColor={"blue"}/>
    </div>
  )
}
function SecondPart() {
  return(
    <div>
      <h1>Second Part</h1>
      <Button text={"Hate"} theColor={"red"}/>
      <img src={""} alt="sm"/>
    </div>
  )
}
function ThirdPart() {
  return(
    <div>
      <h1>Third Part</h1>
      <Button text={"Love"} theColor={"tomato"}/>
    </div>
  )
}
function MyApp() {
  const darkMode = true
  const theStyle = {
    backgroundColor: darkMode? "#333": "white",
    height: "100%",
    color: darkMode? "white": "black"
  }
  return(
    <div style={theStyle}>
      <FirstPart/>
      <SecondPart/>
      <ThirdPart/>
    </div>
  )
}




root.render(<MyApp />);