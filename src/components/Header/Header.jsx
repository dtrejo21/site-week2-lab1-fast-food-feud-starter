import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      <h4 className="tagline">{props.tagline}</h4>
      <p className="description">{props.description}</p>
    </header>
  )
}

export default Header


//If we don't we have curly braces surrounding the props.__, 
//it will treat it as a string, the curly braces make it sure it is
//being access correctly
