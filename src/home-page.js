import {BaseElement} from './ui/base-element.js'
import {Image} from './ui/image.js'
import {Button} from './ui/button.js'
import {applicaiton} from './app.js'

export class HomePage extends BaseElement {

  constructor(){
    super()
  }

  createElement(){
    super.createElement()

    let i = new Image('../image/drone.jpg')
    i.appendToElement(this.element)

    let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;'
    let b = new Button('self driving cars')
    b.setStyleString(styleString)
    b.appendToElement(this.element)
    // b.element.click(){()=> applicaiton.activateRoute('Cars')}

    b = new Button('Drones')
    b.setStyleString(styleString)
    b.appendToElement(this.element)
    // b.element.click(){ () => applicaiton.activateRoute('Drones') }


  }

  getElementString(){
    return '<div style="text-align: center;"></div>'
  }
  
}