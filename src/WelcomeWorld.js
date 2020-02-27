
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
                    ["Hello world!", 2000,
                        "Welcome", 1500,
                        "on my page!", 2000
                    ]

                }

            />")</p>


        )
    }
}

export default HelloWorld;
// npm i react-typical







