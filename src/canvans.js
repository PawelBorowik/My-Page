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
            el: this.vantaRef.current
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
