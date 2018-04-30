import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'
import {Button} from './ui/button.js'


// let dataService = new FleetDataService()
// dataService.loadData(fleet)
let b = new Button('click me')
b.appendToElement($('body'))