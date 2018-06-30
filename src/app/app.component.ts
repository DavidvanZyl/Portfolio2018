import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(20rem)'
              }),
              animate(
                '0.7s 1s ease-in-out',
                style({ opacity: 1,
                       transform: 'translateY(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
          [
            style({
              opacity: 1,
              transform: 'translateY(0rem)'
            }),
            animate(
              '0.7s ease-in-out',
              style({ opacity: 0,
                     transform: 'translateY(-20rem)' })
            ),
            animateChild()
          ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
  }

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}
