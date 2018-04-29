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
          if (drone)
            this.drones.push(drone)
        }
      } else if (data.type === "car"){
        if (this.validateCarData(data)){
          let car = this.loadCar(data)
          if (car)
            this.cars.push(data)
        }
      } else {
        let e = new DataError(`Invalid vehicle type: '${data.type}' `, data)
        this.errors.push(e)
      }
    })
  }

  validateCarData(car){
    let requiredProps = "license model latLong miles make".split(" ")
    let hasErrors = false
    let regex = /^\d*\.?\d*$/

    // check car's property
    requiredProps.forEach( (p)=> {
      if (!car[p]){
        this.errors.push(new DataError(`wrong property: [${p}] in a car`, car))
        hasErrors = true
      }
    })

    // validate miles
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
    let requiredProps = "license model latLong base airTimeHours".split(" ")
    let hasErrors = false
    let regex = /^\d*\.?\d*$/

    // check drone's property
    requiredProps.forEach((p) => {
      if (!drone[p]) {
        this.errors.push(new DataError(`wrong property: [${p}] in a drone`, drone))
        hasErrors = true
      }
    })

    // validate airTimeHours
    if (!regex.test(drone.airTimeHours)) {
      this.errors.push(new DataError(`invalid airTimeHours: '${drone.airTimeHours}' in a drone`, drone))
      hasErrors = true
    }

    return !hasErrors
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

// search by license 
  getCarByLicense(license){
    return this.cars.filter((car)=> {
      return car.license == license
    })
  }

  getCarsSortedByLicense(){
    return this.cars.sort( (car1, car2)=>{
      if (car1.license < car2.license)
        return -1
      if (car1.license > car2.license)
        return 1
      return 0
    })
  }

  getDroneByLicense(license) {
    return this.drones.filter((drone) => {
      return drone.license == license
    })
  }

  getDronesSortedByLicense() {
    return this.drones.sort((drone1, drone2) => {
      if (drone1.license < drone2.license)
        return -1
      if (drone1.license > drone2.license)
        return 1
      return 0
    })
  }

}


