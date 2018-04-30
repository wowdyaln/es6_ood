import $ from 'jquery';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'
import {ApplicationBase} from './framework/application-base.js'

export class App extends ApplicationBase {

  constructor(){
    super('fleet manager')
    this.dataService = new FleetDataService()
    this.dataService.loadData(fleet)
  }
}

export let application = new App()
application.show($('body'))