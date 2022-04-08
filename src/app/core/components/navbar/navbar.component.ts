import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  @Input() brand: string = "TITLE";
  nav_items = [
    {name: "File", href: "#"},
    {name: "Edit", href: "#"},
    {name: "View", href: "#"},
  ]
}