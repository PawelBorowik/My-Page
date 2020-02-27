
import React, { Component } from 'react'
import Typical from 'react-typical'
import './style/welcomeWorld.scss'





class HelloWorld extends Component {
    render() {
        return (

            <p className="typing">console.log("<Typical
                wrapper="p"
                loop={Infinity}
                steps={
                    ["Hello world!", 1000,
                        "Welcome", 1000,
                        "on my page!", 1000
                    ]

                }

            />")</p>


        )
    }
}

export default HelloWorld;
// npm i react-typical







