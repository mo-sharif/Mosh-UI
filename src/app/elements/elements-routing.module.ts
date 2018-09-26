import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SliderComponent } from './slider/slider.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogPopupTopComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TableComponent } from './table/table.component';
import { SortableComponent } from './sortable/sortable.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [{
  path: 'autocomplete',
  component: AutocompleteComponent,
  data: {
    title: 'Autocomplete'
  }
}, {
  path: 'toggle',
  component: ToggleComponent,
  data: {
    title: 'Toggle'
  }
}, {
  path: 'checkbox',
  component: CheckboxComponent,
  data: {
    title: 'Checkbox'
  }
}, {
  path: 'slider',
  component: SliderComponent,
  data: {
    title: 'Slider'
  }
}, {
  path: 'datepicker',
  component: DatepickerComponent,
  data: {
    title: 'Datepicker'
  }
}, {
  path: 'form-field',
  component: FormFieldComponent,
  data: {
    title: 'Form Field'
  }
}, {
  path: 'input',
  component: InputComponent,
  data: {
    title: 'Input'
  }
}, {
  path: 'radio',
  component: RadioComponent,
  data: {
    title: 'Radio'
  }
}, {
  path: 'select',
  component: SelectComponent,
  data: {
    title: 'Select'
  }
}, {
  path: 'menu',
  component: MenuComponent,
  data: {
    title: 'Menu'
  }
}, {
  path: 'sidenav',
  component: SidenavComponent,
  data: {
    title: 'Sidenav'
  }
}, {
  path: 'toolbar',
  component: ToolbarComponent,
  data: {
    title: 'Toolbar'
  }
}, {
  path: 'list',
  component: ListComponent,
  data: {
    title: 'List'
  }
}, {
  path: 'grid-list',
  component: GridListComponent,
  data: {
    title: 'Grid List'
  }
}, {
  path: 'card',
  component: CardComponent,
  data: {
    title: 'Card'
  }
}, {
  path: 'stepper',
  component: StepperComponent,
  data: {
    title: 'Stepper'
  }
}, {
  path: 'tabs',
  component: TabsComponent,
  data: {
    title: 'Tabs'
  }
}, {
  path: 'expansion-panel',
  component: ExpansionPanelComponent,
  data: {
    title: 'Expansion Panel'
  }
}, {
  path: 'buttons',
  component: ButtonComponent,
  data: {
    title: 'Buttons'
  }
}, {
  path: 'button-toggle',
  component: ButtonToggleComponent,
  data: {
    title: 'Button Toggle'
  }
}, {
  path: 'chips',
  component: ChipsComponent,
  data: {
    title: 'Chips'
  }
}, {
  path: 'mat-icon',
  component: MatIconComponent,
  data: {
    title: 'Material Icon'
  }
}, {
  path: 'fa-icon',
  component: FaIconComponent,
  data: {
    title: 'Fontawesome Icon'
  }
}, {
  path: 'progress-spinner',
  component: ProgressSpinnerComponent,
  data: {
    title: 'Progress Spinner'
  }
}, {
  path: 'progress-bar',
  component: ProgressBarComponent,
  data: {
    title: 'Progress Bar'
  }
}, {
  path: 'dialog',
  component: DialogComponent,
  data: {
    title: 'Dialog'
  }
}, {
  path: 'tooltip',
  component: TooltipComponent,
  data: {
    title: 'Tooltip'
  }
}, {
  path: 'snackbar',
  component: SnackbarComponent,
  data: {
    title: 'Snackbar'
  }
}, {
  path: 'table',
  component: TableComponent,
  data: {
    title: 'Table'
  }
}, {
  path: 'sortable',
  component: SortableComponent,
  data: {
    title: 'Sortable'
  }
}, {
  path: 'paginator',
  component: PaginatorComponent,
  data: {
    title: 'Paginator'
  }
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
