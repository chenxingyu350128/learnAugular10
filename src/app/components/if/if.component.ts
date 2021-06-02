import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {
  showBlock = true;
  @ViewChild('elseBlockYo', { static: true }) elseBlock: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
