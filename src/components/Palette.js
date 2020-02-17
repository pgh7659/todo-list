import React, { Component } from "react";
import './Palette.css';

class Palette extends Component {
    handleChangeColor = (e) => {
        const {onClick} = this.props;
        const target = e.target;

        if(!target.classList.contains('selected')) {
          const siblingNodes = target.parentElement.children;
          const siblingsLen = siblingNodes.length;
          for (var i = 0; i < siblingsLen; i++) {
            siblingNodes[i].classList.remove('selected')
          }

          target.classList.add('selected');
        }

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
