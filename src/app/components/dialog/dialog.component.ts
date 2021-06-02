import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  // input()修饰器不能在内部修改
  @Input() show = false;
  @Input() title = '动态标题';
  @Input() confirmLabel = '确定';
  @Input() cancelLabel = '取消';
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}
  onClick(str: string, event: MouseEvent): void {
    console.log(str);
    console.log(event);
  }
  clickParent(): void {
    console.log('parent');
  }
  clickChild(event: MouseEvent): void {
    console.log('Child');
    event.stopPropagation();
  }
  onInput(event: KeyboardEvent): void {
    console.log((event.target as HTMLInputElement).value);
  }
  onClose(): void {
    this.cancel.emit();
  }
  onConfirm(): void {
    this.confirm.emit();
  }
  wrapperClick(): void {
    this.cancel.emit();
  }
}
