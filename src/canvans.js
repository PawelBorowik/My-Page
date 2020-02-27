import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Text from './WelcomeWorld'
import './style/canvans.css';


class Canvans extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x201e0e,
            color1: 0xedf2ec,
            color2: 0xe81956,
            birdSize: 1.20,
            wingSpan: 21.00,
            separation: 27.00,
            alignment: 42.00,
            cohesion: 28.00

        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()

    }
    render() {
        return <div id="awa" ref={this.vantaRef}>
            <div className="text"><Text /></div>
        </div>

    }
}
export default Canvans;
