import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() title:string;
  @Input() decription:string;
  @Input() date:any;

  constructor() { }

  ngOnInit(): void {
  }

}
