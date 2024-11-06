import React from "react";
import Crt1_hello from "../Components/carts/crt1_hello"
import Crt1_ml from "../Components/carts/crt2_ML"
import Crt1_VDB from "./carts/crt3_vdb";
import Inprogress from "./carts/service_inprogress";

class ALLPROJECt extends React.Component {
    render() {
        return (
            <div class="album py-5 bg-body-tertiary">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Crt1_hello />
                        <Crt1_ml />
                        <Crt1_VDB />
                        <Inprogress />
                        <Inprogress />
                        <Inprogress />
                    </div>
                </div>
            </div> 
        )
    }
}

export default ALLPROJECt