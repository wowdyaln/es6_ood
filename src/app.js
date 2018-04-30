import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'
import {Button} from './ui/button.js'
import {Image} from './ui/image.js'


// let dataService = new FleetDataService()
// dataService.loadData(fleet)
let b = new Button('click me')
b.appendToElement($('body'))

// let i = new Image('./image/drone.jpg')
let i = new Image('../image/drone.jpg')
i.appendToElement($('body'))

console.log(i)
console.log(b)