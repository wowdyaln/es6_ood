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
        this.drones.push(data)
      } else if (data.type === "car"){
        this.cars.push(data)
      }
    })
  }
}


