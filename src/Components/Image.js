import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img className={this.props.className} src={this.props.image} />
        )
    }
}

export default Image