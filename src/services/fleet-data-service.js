import {Car} from '../classes/car.js'
import {Drone} from '../classes/drone.js'


export class FleetDataService {
  constructor(){
    this.cars = []
    this.drones = []
  }
  loadData(datas){
    datas.forEach((data)=>{
      if (data.type==="drone"){
        let drone = this.loadDrone(data)
        this.drones.push(drone)
      } else if (data.type === "car"){
        let car = this.loadCar(data)
        this.cars.push(data)
      }
    })
  }

  loadCar(car){
    let c = new Car(car.license, car.model, car.latLong)
    c.miles = car.miles
    c.make = car.make
    return c
  }
  loadDrone(drone){
    let d = new Drone(drone.license, drone.model, drone.latLong)
    d.airTimeHours = drone.airTimeHours
    d.base = drone.base
    return d
  }
}


