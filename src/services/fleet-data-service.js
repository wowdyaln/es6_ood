import {Car} from '../classes/car.js'
import {Drone} from '../classes/drone.js'
import {DataError} from '../services/data-error.js'

export class FleetDataService {
  constructor(){
    this.cars = []
    this.drones = []
    this.errors = []
  }
  loadData(datas){
    datas.forEach((data)=>{
      if (data.type==="drone"){
        let drone = this.loadDrone(data)
        this.drones.push(drone)
      } else if (data.type === "car"){
        let car = this.loadCar(data)
        this.cars.push(data)
      } else {
        let e = new DataError("Invalid vehicle type", data)
        this.errors.push(e)
      }
    })
  }

  loadCar(car){
    try {
        let c = new Car(car.license, car.model, car.latLong)
        c.miles = car.miles
        c.make = car.make
        return c
    } catch(e) {
      this.errors.push(new DataError("error loading car", car))
    }
    return null
  }
  loadDrone(drone){
    try {
        let d = new Drone(drone.license, drone.model, drone.latLong)
        d.airTimeHours = drone.airTimeHours
        d.base = drone.base
        return d
    } catch(e) {
      this.errors.push(new DataError("error loading drone", drone))
    }
    return null
  }
}


