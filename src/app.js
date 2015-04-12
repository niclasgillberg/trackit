import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework'; 

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'TrackIt';
      config.map([
        { route: ['','track'],  moduleId: './tracker',      nav: true, title:'Tracker' },
        { route: 'flickr',        moduleId: './flickr',       nav: true },
        { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
