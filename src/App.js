import {Component} from 'react'

import './App.css'
import ClickCounter from './components/ClickCounter'

class App extends Component {
  state = {formatedData: []}

  getDetais = async () => {
    const url = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        description: eachProject.description,
        price: eachProject.price,
        title: eachProject.title,
        category: eachProject.category,
        image: eachProject.image,
        sold: eachProject.sold,
        dateOfSale: eachProject.dateOfSale,
      }))
      this.setState({formatedData: updatedData})
    } else {
      console.log(response.ok)
    }
  }

  add = () => {
    this.getDetais()
  }

  render() {
    const {formatedData} = this.state
    return (
      <div>
        <button type="button" onClick={this.add}>
          Click
        </button>
        <ul>
          {formatedData.map(each => (
            <ClickCounter key={each.id} values={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
