import React from "react"
import Image from "./Image"
import Menu from "./header/menu"
import logoPNG from "../img/SVG128bit.png"
import logoTXT from "../img/128BiT_text_logo.svg"

class Header extends React.Component {
    render() {
      return (
        <header className="header">
            <Image image={logoPNG} />
            <Image className="textlogo" image={logoTXT} />
            <Menu />
        </header>
      )
    }
  }

export default Header