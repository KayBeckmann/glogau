import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

type Picture = {
  id: number;
  path: string;
};
@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss"
})
export class GalleryComponent {
  show: boolean = false;
  pathPicture: string = "../../assets/img/";
  pathThumbnails: string = "../../assets/thumb/";
  currentPicture: string = "";
  currentDescription: string = "";
  pictureID: number = 0;

  gallery: any = [
    { name: "1.jpeg", description: "" },
    { name: "2.jpeg", description: "" },
    { name: "3.jpeg", description: "" },
    { name: "4.jpeg", description: "" },
    { name: "5.jpeg", description: "" },
    { name: "6.jpeg", description: "" },
    { name: "7.jpeg", description: "" },
    { name: "8.jpeg", description: "" },
    { name: "9.jpeg", description: "" }
  ];

  openPicture(id: any) {
    this.pictureID = id;
    this.currentPicture = this.pathPicture + this.gallery[this.pictureID].name;
    this.currentDescription = this.gallery[this.pictureID].description;
    this.show = true;
  }

  closePicture() {
    this.show = false;
  }

  nextPicture() {
    if (this.pictureID < this.gallery.length - 1) {
      this.pictureID++;
    } else {
      this.pictureID = 0;
    }
    this.changeCurrentPicture();
  }

  prevPicture() {
    if (this.pictureID > 0) {
      this.pictureID--;
    } else {
      this.pictureID = this.gallery.length - 1;
    }
    this.changeCurrentPicture();
  }

  changeCurrentPicture() {
    this.currentPicture = this.pathPicture + this.gallery[this.pictureID].name;
    this.currentDescription = this.gallery[this.pictureID].description;
  }
}
