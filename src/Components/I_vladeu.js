import React from "react"
import stac from "../img/stack.png"

class MyFact extends React.Component {
    render() {
        return (
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={stac} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">владею 40+ востребованнми инструментами разработки</h1>
                </div>
                </div>
            </div>
        )
    }
}

export default MyFact