import React from "react"
import {Image, SVG} from "./Image"
import logoPNG from "../img/SVG128bit.png"
import logoTXT from "../img/128BiT_text_logo.svg"

class Header extends React.Component {
    render() {
      return (
        <div class="container">
            <header class="d-flex justify-content-center py-3">
              <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link px-2 link-body-emphasis">Проекты и статьи</a></li>
                <li><a href="https://github.com/Qwest1204" class="nav-link px-2 link-body-emphasis">Github</a></li>
              </ul>
            </header>
          </div>
      )
    }
  }

export default Header