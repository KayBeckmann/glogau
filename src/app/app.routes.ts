import { Routes } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { DsgvoComponent } from "./dsgvo/dsgvo.component";

export const routes: Routes = [
  { path: "", component: MainpageComponent },
  { path: "impressum", component: ImpressumComponent },
  { path: "dsgvo", component: DsgvoComponent }
];
