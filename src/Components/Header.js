import React from "react"

class Header extends React.Component {
    render() {
      return (
        <div class="container">
            <header class="d-flex justify-content-center py-3">
              <ul class="nav nav-pills">
                <li class="nav-item"><a href="/" class="nav-link px-2 link-body-emphasis">128BIT</a></li>
                <li class="nav-item"><a href="/projects" class="nav-link px-2 link-body-emphasis">Проекты и статьи</a></li>
                <li><a href="https://github.com/Qwest1204" class="nav-link px-2 link-body-emphasis">Github</a></li>
              </ul>
            </header>
          </div>
      )
    }
  }

export default Header