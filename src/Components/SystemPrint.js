import React from "react";
import logoTXT from "../img/SOPHW.png"

class Systemprint extends React.Component {
    render() {
        return (
            <div class="px-4 pt-5 my-3 text-center">
                <div class="overflow-hidden">
                    <div class="container px-5">
                        <img src={logoTXT} class="img-fluid rounded-3 mb-4" alt="Example image" width="700" height="500" loading="lazy" ></img>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Systemprint