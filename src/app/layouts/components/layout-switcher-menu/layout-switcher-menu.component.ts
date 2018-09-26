import { LayoutService } from './../../layout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'portal-layout-switcher-menu',
  templateUrl: './layout-switcher-menu.component.html',
  styleUrls: ['./layout-switcher-menu.component.scss']
})
export class LayoutSwitcherMenuComponent {
  layouts: Layout[] = [{
    id: 'classic',
    name: 'Classic',
    icon: 'classic'
  }, {
    id: 'toolbar',
    name: 'Toolbar',
    icon: 'toolbar'
  }, {
    id: 'compact',
    name: 'Compact',
    icon: 'compact'
  }, {
    id: 'boxed',
    name: 'Boxed',
    icon: 'boxed'
  }, {
    id: 'funky',
    name: 'Funky',
    icon: 'funky'
  }, {
    id: 'tabbed',
    name: 'Tabbed',
    icon: 'tabbed'
  }];

  currentLayout: Layout;

  constructor(public layoutService: LayoutService) {
    this.currentLayout = this.layouts[0];
    const sessionLayoutID = sessionStorage.getItem('portal-layout');
    if (null !== sessionLayoutID) {
      this.currentLayout = this.layouts.find(layout => layout.id === sessionLayoutID);
    }
  }

  switch(layout: Layout): void {
    sessionStorage.setItem('portal-layout', layout.id);
    window.location.reload();
  }

  isActive(layout: Layout): boolean {
    return layout.id === this.currentLayout.id;
  }
}

interface Layout {
  id: string;
  name: string;
  icon: string;
}
