import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;

  @Output() keywordSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    console.log(event);
    this.keywordSearch.emit(this.keyword);
    this.keyword += '!';
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
  }

}
