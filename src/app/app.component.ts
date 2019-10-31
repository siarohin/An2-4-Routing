import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { SpinnerService } from './widgets';
import { MessagesService, CustomPreloadingStrategyService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public spinnerService: SpinnerService,
    public messagesService: MessagesService,
    private router: Router,
    private preloadingStrategy: CustomPreloadingStrategyService
  ) {}

  ngOnInit() {
    console.log(
      `Preloading Modules: `,
      this.preloadingStrategy.preloadedModules
    );
  }

  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { messages: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }
}
