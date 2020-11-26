import { Component, OnInit } from '@angular/core';
import { Division } from '../model/Division.model';
import { DevisionService } from '../service/division.service';


@Component({
  selector: 'app-finddisctrict',
  templateUrl: './finddisctrict.component.html',
  styleUrls: ['./finddisctrict.component.css']
})
export class FinddisctrictComponent implements OnInit {

  keyword: string = '';
  divisionList: Division[] = [];
  constructor(private ps: DevisionService) { }

  ngOnInit(): void {
    this.getDivisionList('');
  }

  getDivisionList(keyword): void {
    this.ps.getDivisionList(keyword).subscribe(data => this.divisionList = data);
  }
  searchKeyword() {
    this.getDivisionList(this.keyword);
  }

}
