import { Component } from "@angular/core";
import { LandingpageComponent } from "../landingpage/landingpage.component";
import { ServicesComponent } from "../services/services.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-mainpage",
  standalone: true,
  imports: [
    LandingpageComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent
  ],
  templateUrl: "./mainpage.component.html",
  styleUrl: "./mainpage.component.scss"
})
export class MainpageComponent {}
