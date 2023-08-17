import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { Frame, Circle } from 'zimjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterContentInit {
  frame: Frame | undefined;
  ngOnDestroy(): void {
    this.frame?.dispose();
  }

  ngAfterContentInit(): void {
    this.frame = new Frame({
      scaling: FIT,

      width: 600,
      height: 300,
      ready: () => {
        new Circle(50, red).center().drag();
      },
    });
  }

  title = 'CodeSandbox';
}
