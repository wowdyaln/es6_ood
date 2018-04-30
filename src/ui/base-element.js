import $ from 'jquery'

export class BaseElement {
  constructor(){
    this.element = null  //jQuery object
  }

  appendToElement(el){
    this.createElement()
    el.append(this.element)
  }

  createElement(){
    let s = getElementString()
    this.element = $(s)
  }


  getElementString(){
    throw 'plz override getElementString() in BaseElement'
  }

}