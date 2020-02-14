import React, { Component } from "react";
import './Palette.css';

class Palette extends Component {
    handleChangeColor = (e) => {
        const {onClick} = this.props;
        console.log(e.target.parentElement.children);
        e.target.classList.toggle('selected');
        
        onClick(e.target.style.background);
    }

    render() {
        const { colors} = this.props;
        const paletteComponent = colors.map( 
            color => (
                <div className="color-item" key={color} onClick={this.handleChangeColor} style={{background : color}}></div>
            )
        );

        return (
            <div>
                {paletteComponent}
            </div>
        )
    }
}

export default Palette;