import { NgModule } from '@angular/core';

import { routing } from './elements-routing.module';

import { SharedModule } from './../shared/shared.module';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxExample1Component } from './include-examples/checkbox-example-1/checkbox-example-1.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteExampleComponent } from './include-examples/autocomplete-example/autocomplete-example.component';
import { SliderComponent } from './slider/slider.component';
import { SliderExampleComponent } from './include-examples/slider-example/slider-example.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleExampleComponent } from './include-examples/toggle-example/toggle-example.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerExample1Component } from './include-examples/datepicker-example-1/datepicker-example-1.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormFieldExample1Component } from './include-examples/form-field-example-1/form-field-example-1.component';
import { InputComponent } from './input/input.component';
import { InputExample1Component } from './include-examples/input-example-1/input-example-1.component';
import { RadioComponent } from './radio/radio.component';
import { RadioExample1Component } from './include-examples/radio-example-1/radio-example-1.component';
import { SelectComponent } from './select/select.component';
import { SelectExample1Component } from './include-examples/select-example-1/select-example-1.component';
import { SelectExample2Component } from './include-examples/select-example-2/select-example-2.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuExample1Component } from './include-examples/menu-example-1/menu-example-1.component';
import { SidenavExample1Component } from './include-examples/sidenav-example-1/sidenav-example-1.component';
import { ToolbarExample1Component } from './include-examples/toolbar-example-1/toolbar-example-1.component';
import { ListComponent } from './list/list.component';
import { ListExample1Component } from './include-examples/list-example-1/list-example-1.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridListExample1Component } from './include-examples/grid-list-example-1/grid-list-example-1.component';
import { GridListExample2Component } from './include-examples/grid-list-example-2/grid-list-example-2.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepperExample1Component } from './include-examples/stepper-example-1/stepper-example-1.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsExample1Component } from './include-examples/tabs-example-1/tabs-example-1.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ExpansionPanelExample1Component } from './include-examples/expansion-panel-example-1/expansion-panel-example-1.component';
import { ButtonComponent } from './button/button.component';
import { ButtonExample1Component } from './include-examples/button-example-1/button-example-1.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonToggleExample1Component } from './include-examples/button-toggle-example-1/button-toggle-example-1.component';
import { ChipsComponent } from './chips/chips.component';
import { ChipsExample1Component } from './include-examples/chips-example-1/chips-example-1.component';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { IconExample1Component } from './include-examples/icon-example-1/icon-example-1.component';
import { IconExample2Component } from './include-examples/icon-example-2/icon-example-2.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressSpinnerExample1Component } from './include-examples/progress-spinner-example-1/progress-spinner-example-1.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarExample1Component } from './include-examples/progress-bar-example-1/progress-bar-example-1.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogPopupComponent } from './include-examples/dialog-example-1/dialog-example-1.component';
import { DialogPopupTopComponent } from './dialog/dialog.component';
import { DialogExample1Component } from './include-examples/dialog-example-1/dialog-example-1.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipExample1Component } from './include-examples/tooltip-example-1/tooltip-example-1.component';
import { SnackbarComponent, SnackbarPizzaExampleComponent } from './snackbar/snackbar.component';
import { SnackbarExample1Component } from './include-examples/snackbar-example-1/snackbar-example-1.component';
import { TableComponent } from './table/table.component';
import { TableExample1Component } from './include-examples/table-example-1/table-example-1.component';
import { SortableComponent } from './sortable/sortable.component';
import { SortableExample1Component } from './include-examples/sortable-example-1/sortable-example-1.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorExample1Component } from './include-examples/paginator-example-1/paginator-example-1.component';
import { CardComponent } from './card/card.component';
import { CardExample1Component } from './include-examples/card-example-1/card-example-1.component';
import { ToolbarExample2Component } from './include-examples/toolbar-example-2/toolbar-example-2.component';
import { ListExample2Component } from './include-examples/list-example-2/list-example-2.component';
import { ListExample3Component } from './include-examples/list-example-3/list-example-3.component';
import { TabsExample2Component } from './include-examples/tabs-example-2/tabs-example-2.component';
import { ChipsExample2Component } from './include-examples/chips-example-2/chips-example-2.component';

@NgModule({
  imports: [
    SharedModule,
    routing,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxExample1Component,
    AutocompleteComponent,
    AutocompleteExampleComponent,
    SliderComponent,
    SliderExampleComponent,
    ToggleComponent,
    ToggleExampleComponent,
    FormFieldComponent,
    FormFieldExample1Component,
    InputComponent,
    InputExample1Component,
    RadioComponent,
    RadioExample1Component,
    SelectComponent,
    SelectExample1Component,
    DatepickerComponent,
    DatepickerExample1Component,
    SelectExample2Component,
    MenuComponent,
    ToolbarComponent,
    ToolbarExample2Component,
    SidenavComponent,
    MenuExample1Component,
    SidenavExample1Component,
    ToolbarExample1Component,
    ListComponent,
    ListExample1Component,
    GridListComponent,
    GridListExample1Component,
    GridListExample2Component,
    StepperComponent,
    StepperExample1Component,
    TabsComponent,
    TabsExample1Component,
    ExpansionPanelComponent,
    ExpansionPanelExample1Component,
    ButtonComponent,
    ButtonExample1Component,
    ButtonToggleComponent,
    ButtonToggleExample1Component,
    ChipsComponent,
    ChipsExample1Component,
    MatIconComponent,
    FaIconComponent,
    IconExample1Component,
    IconExample2Component,
    ProgressSpinnerComponent,
    ProgressSpinnerExample1Component,
    ProgressBarComponent,
    ProgressBarExample1Component,
    DialogPopupComponent,
    DialogPopupTopComponent,
    DialogComponent,
    DialogExample1Component,
    TooltipComponent,
    TooltipExample1Component,
    SnackbarComponent,
    SnackbarPizzaExampleComponent,
    SnackbarExample1Component,
    TableComponent,
    TableExample1Component,
    SortableComponent,
    SortableExample1Component,
    PaginatorComponent,
    PaginatorExample1Component,
    CardComponent,
    CardExample1Component,
    ListExample2Component,
    ListExample3Component,
    TabsExample2Component,
    ChipsExample2Component
  ],
  entryComponents: [
    DialogPopupComponent,
    DialogPopupTopComponent,
    SnackbarPizzaExampleComponent
  ],
})
export class ElementsModule { }
