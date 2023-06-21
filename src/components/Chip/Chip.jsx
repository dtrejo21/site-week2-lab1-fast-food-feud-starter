import "./Chip.css"

export function Chip({label = "", isActive = false, chipClick = {}}){
  let buttonClassName; 

  if(isActive)
  {
    buttonClassName = "chip active";
  }
  else 
  {
    buttonClassName = "chip";
  }
  /*
  //what these 2 lines are doing is setting default values props
  //() => {} arrow functions with an empty body, takes no arguments & performs 
  //no operations, so a empty function
  onClick = () => {},
  onClose = () => {},*/

  /*
  let buttonClassName = "chip";
  if(isActive == true){
    buttonClassName += " active"//contecate [chip] & [active]
  }*/

  return (
    <button className={buttonClassName} onClick= {chipClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" >{`X`}</span>
    </button>
  );
}

export default Chip
