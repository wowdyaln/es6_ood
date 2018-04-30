import $ from 'jquery';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'
import {HomePage} from './home-page.js'
import {CarsPage} from './cars-page.js'
import { DronesPage } from './drones-page.js';
import {ApplicationBase} from './framework/application-base.js'
import { Drone } from './classes/drone.js';

export class App extends ApplicationBase {

  constructor(){
    super('fleet manager')
    this.dataService = new FleetDataService()
    this.dataService.loadData(fleet)

    this.addRoute('Home', new HomePage(), true)
    this.addRoute('Cars', new CarsPage())
    this.addRoute('Drones', new DronesPage())
    this.addRoute('Map', null)
  }
}

export let application = new App()
application.show($('body'))