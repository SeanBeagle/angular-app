import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  title: string = "LabRat"
  nav_items = [
    {name: "Samples", href: "#"},
    {name: "People", href: "#"},
    {name: "Tasks", href: "#"},
  ]
}