
import React, { Component } from 'react'
import Typical from 'react-typical'
import './style/welcomeWorld.scss'





class HelloWorld extends Component {
    render() {
        return (

            <p className="typing">console.log("<Typical
                wrapper="p"
                loop={1}
                steps={
                    ["Hello world!", 2000,
                        "", 1000,
                        "I,m", 500,
                        "I`m", 1500,
                        "", 1000,
                        "Junior", 2000,
                        "", 1000,
                        "Frontend Dev", 2000,

                    ]

                }

            />")</p>


        )
    }
}

export default HelloWorld;
// npm i react-typical







