import { NavbarComponent } from "./navbar/navbar.component";
export * from './navbar/navbar.component';

import { FooterComponent } from "./footer/footer.component";
export * from './footer/footer.component';

import { CoreComponent } from "./core/core.component";
export * from './core/core.component';

export const components: any[] = [
    CoreComponent,
    NavbarComponent,
    FooterComponent
];