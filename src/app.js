import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'

let dataService = new FleetDataService()
dataService.loadData(fleet)

let car = dataService.getCarByLicense("AT4000")
let cars = dataService.getCarsSortedByLicense()
let drone = dataService.getDroneByLicense("QRS678")
let drones = dataService.getDronesSortedByLicense()

// console.log(dataService)
console.log(car)
console.log(cars)
console.log(drone)
console.log(drones)