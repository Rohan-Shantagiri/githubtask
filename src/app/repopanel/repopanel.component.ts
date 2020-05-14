import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repopanel',
  templateUrl: './repopanel.component.html',
  styleUrls: ['./repopanel.component.css']
})
export class RepopanelComponent implements OnInit {

  @Input('repo') repo;

  constructor() { }

  ngOnInit(): void {
  }

}
