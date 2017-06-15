import React from "react"
import { render } from "react-dom"
import Footer from "./components/Footer"
import HeaderNavigation from "./components/HeaderNavigation"
import Services from "./containers/Services"
import Work from "./containers/Work"
import Contact from "./containers/Contact Us"
import Carousel from "./components/Carousel"
class App1 extends React.Component {
  render() {
    return (
        <div>
            <HeaderNavigation />
            <Carousel />
            <Services/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
  }
}

render(<App1/>, document.getElementById('App1'))
