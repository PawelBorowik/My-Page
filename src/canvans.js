import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import './canvans.css';


class Canvans extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div id="awa" style={{ backgroundColor: "#000" }} ref={this.vantaRef}>
            <span className="text">console.log(Welcome World!)</span>
        </div>
    }
}
export default Canvans;
