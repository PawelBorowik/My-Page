import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Text from './WelcomeWorld'
import './style/canvans.scss';


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
            backgroundColor: 0xdee2e8,
            color1: 0x40d0f

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
