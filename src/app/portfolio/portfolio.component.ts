import { Component } from '@angular/core';

export interface product{
  thumbnail: string;
  title: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  products:product[]=[
    {thumbnail: "./assets/images/cabin.png",title: "LOG CABIN"},
    {thumbnail: "./assets/images/cake.png",title: "TASTY CAKE"},
    {thumbnail: "./assets/images/circus.png",title: "CIRCUS TENT"},
    {thumbnail: "./assets/images/game.png",title: "CONTROLLER"},
    {thumbnail: "./assets/images/safe.png",title: "LOCKED SAFE"},
    {thumbnail: "./assets/images/submarine.png",title: "SUBMARINE"}
  ]

  productInfo:any = {};

  displayModel(data:any):void{
    this.productInfo = data;
  }

}
