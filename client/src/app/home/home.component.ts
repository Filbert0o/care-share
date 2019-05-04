import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
