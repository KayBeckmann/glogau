import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss"
})
export class GalleryComponent {
  path: string = "../../assets/img/";
  gallery: any = [
    { name: this.path + "1.jpeg" },
    { name: this.path + "2.jpeg" },
    { name: this.path + "3.jpeg" },
    { name: this.path + "4.jpeg" },
    { name: this.path + "5.jpeg" },
    { name: this.path + "6.jpeg" },
    { name: this.path + "7.jpeg" },
    { name: this.path + "8.jpeg" },
    { name: this.path + "9.jpeg" }
  ];
}
