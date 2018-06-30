import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  age: number;

  ngOnInit() {
    this.age = this.calculateAge();
  }

  private calculateAge() {
    const birthday = new Date(1996, 4, 20);
    const ageDate = new Date( Date.now() - birthday.getTime());
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
