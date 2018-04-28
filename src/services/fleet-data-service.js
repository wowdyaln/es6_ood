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
        if (this.validateDroneData(data)){
          
          let drone = this.loadDrone(data)
          this.drones.push(drone)
        } else {
          let e = new DataError("invalid drone data", data)
          this.errors.push(e)
        }
      } else if (data.type === "car"){
        if (this.validateCarData(data)){

          let car = this.loadCar(data)
          this.cars.push(data)
        } else {
          let e = new DataError("invalid car data", data)
          this.errors.push(e)
        }
      } else {
        let e = new DataError(`Invalid vehicle type: '${data.type}' `, data)
        this.errors.push(e)
      }
    })
  }

  // validate carData and droneData
  validateCarData(car){
    let requiredProps = "license model latLong miles make".split(" ")
    let hasErrors = false
    let regex = /^\d*\.?\d*$/
    requiredProps.forEach( (p)=> {
      if (!car[p]){
        this.errors.push(new DataError(`wrong property: ${p} in a car`, car))
        hasErrors = true
      }
    })
    if (!regex.test(car.miles)){
      this.errors.push(new DataError(`invalid miles: '${car.miles}' in a car`, car))
      hasErrors = true
    }

    return !hasErrors
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

  validateDroneData(drone){
    return true
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


