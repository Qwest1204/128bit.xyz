import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img className={this.props.className} src={this.props.image} />
        )
    }
}

export default Image

export class SVG extends React.Component {
    render() {
        return (
            <svg class={this.props.class} width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
                
            </svg>
        )
    }
}

