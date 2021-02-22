import {Component} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid-community';


@Component({
  selector: 'app-selector',
  template: `
    <select [ngModel]="value" (change)="onChange($event)">
      <option *ngFor="let option of options| async" [value]="option">
        {{option}}
      </option>
    </select>`,
})
export class AppSelectorComponent implements ICellEditorAngularComp{
  private params: ICellEditorParams;
  public value: string;
  public options: Promise<string[]>;
  public key: string;

  constructor() {
  }
  agInit(params: ICellEditorParams): void {
    this.params = params;
    this.value = this.params.value;
    this.key = this.params.data.key;
    this.options = this.params.context.selectionService.getValue(this.key);
  }

  onChange(event): void {
    this.value = event.target.value;
    this.params.api.stopEditing();
  }

  getValue(): string {
    return this.value;
  }
}
