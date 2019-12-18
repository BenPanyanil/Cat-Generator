import React from 'react'
import imagesBank from './imagesBank'
import names from './names'
import lastnames from './lastnames'
import catdefault from './images/catdefault.svg'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      image: catdefault,
      gender: "",
      name: "Name",
      lastname: "",

      lightgrey: "rgba(20,20,20,0.4)",
      fontweight: "500"
    }
    this.changeCat = this.changeCat.bind(this)
  }

  changeCat() {
    this.setState(prevState => {
      const boyOrGirl = ["Mr.", "Mss."]
      const index0 = Math.floor(Math.random() * 2)
      const index = Math.floor(Math.random() * 7)
      const index2 = Math.floor(Math.random() * 10)
      const index3 = Math.floor(Math.random() * 10)

      return {
        image: imagesBank[index],
        gender: boyOrGirl[index0],
        name: names[index2],
        lastname: lastnames[index3],
        lightgrey: "rgba(20,20,20,1)",
        fontWeight: "Bold"
      }
    })
  }


  render() {


    return(
      <div className="App">

        <h1 className="header" >Generate your Cat!</h1>

        <img className="img" src={this.state.image} alt="catimage"></img>

        <p className="name" style={{color: this.state.lightgrey, fontWeight: this.state.fontweight}}>
          {this.state.gender} {this.state.name} {this.state.lastname}
        </p>

        <button className="btn" onClick={this.changeCat}>Generate!</button>

      </div>
    )
  }
}




export default App
