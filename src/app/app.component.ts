import {Component} from '@angular/core';
import {AppSelectorComponent} from './selector';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ag-grid-angular
        style="width: 500px; height: 350px;"
        class="ag-theme-alpine"
        [gridOptions]="gridOptions"
      >
      </ag-grid-angular>
    </div>
  `,
})
export class AppComponent {
  columnDefs = [
    {
      field: `key`,
    },
    {
      field: `selected`,
      editable: true,
      cellEditor: 'lazyLoadingEditor',
    },
  ];
  rowData = [
    {
      key: `bob`,
      selected: `Bob.1`,
    },
    {
      key: `mary`,
      selected: null,
    },
    {
      key: `sadiq`,
      selected: null,
    },
    {
      key: `bob`,
      selected: null,
    },
    {
      key: `mary`,
      selected: null,
    },
    {
      key: `sadiq`,
      selected: null,
    },
  ];
  frameworkComponents = {
    lazyLoadingEditor: AppSelectorComponent
  };
  gridOptions = {
    rowData: this.rowData,
    columnDefs: this.columnDefs,
    defaultColDef: {flex: 1},
    frameworkComponents: this.frameworkComponents
  };
}
