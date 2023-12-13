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
  pictureID: number = 0;

  gallery: any = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg"
  ];

  openPicture(id: any) {
    this.currentPicture = this.pathPicture + this.gallery[id];
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
    this.currentPicture = this.pathPicture + this.gallery[this.pictureID];
  }
}
