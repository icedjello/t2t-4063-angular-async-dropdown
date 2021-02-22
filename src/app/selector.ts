import {Component} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid-community';
import {OptionsService} from './Options.service';

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
  public options: Promise<unknown>;
  public key: string;
  constructor(private optionsService: OptionsService) {}
  agInit(params: ICellEditorParams): void {
    this.params = params;
    this.value = this.params.value;
    this.key = this.params.data.key;
    this.options = this.optionsService.getOptions(this.key);
  }
  onChange(event): void {
    this.value = event.target.value;
    this.params.api.stopEditing();
  }
  getValue(): string {
    return this.value;
  }
}
