import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Property } from '../property';
import { ServiceService } from '../service.service';

@Component({
  selector: 'covidapi-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
propertiesNumber!:number
subscription!: Subscription
propertiesName$!:Observable<string[]>
propertiesValue$!:Observable<Property[]>
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
     this.subscription = this.service.getPropertiesNumber().subscribe(number => this.propertiesNumber = number)
     this.propertiesName$ = this.service.getPropertiesNames()
     this.propertiesValue$ = this.service.getPropertiesValue()
  }

}
