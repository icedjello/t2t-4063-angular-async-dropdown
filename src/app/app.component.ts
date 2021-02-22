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

  selectionValuesSource = {
    bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
    mary: [`Mary.1`, `Mary.2`, `Mary.3`, `Mary.4`, `Mary.5`],
    sadiq: [`Sadiq.1`, `Sadiq.2`, `Sadiq.3`, `Sadiq.4`, `Sadiq.5`],
  };

  loadedSelectionValues = {
    bob: [`Bob.1`, `Bob.2`, `Bob.3`, `Bob.4`, `Bob.5`],
  };



  columnDefs = [
    {
      field: `key`,
    },
    {
      field: `selected`,
      editable: true,
      cellEditor: 'lazyLoadingEditor',
      cellEditorParams: {
      }
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
