import { Component } from '@angular/core';
import { Linestar } from "../linestar/linestar";

@Component({
  selector: 'app-portfolio',
  imports: [Linestar],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
images:string[] = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png"
];
imgSrc:string ='' 

zoomImg(image: string){
 this.imgSrc = image;
}

close(){
  this.imgSrc = '';
}
}
