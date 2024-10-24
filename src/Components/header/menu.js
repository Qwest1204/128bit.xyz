import React from "react";

class Menu extends React.Component {
    render() {
        return (
        <div class="menu">
            <ul>
                <li><a href="/projects">проекты</a></li>
                <li><a href="/contacts">контакты</a></li>
                <li><a href="/informations">информация</a></li>
            </ul>
        </div>
        )
    }
}

export default Menu