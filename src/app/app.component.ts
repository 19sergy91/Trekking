import { Component, ViewChild, OnInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  //Men
  sliderItemsMen: Array<{name: string, price: number,tempImage? : any}> = [
    {
      name: 'T-Shirt',
      price: 5,
      tempImage: '../assets/livello_2_44.png'
    },

    {
      name: 'Pants FORCLAZ',
      price: 30,
      tempImage: '../assets/livello_3_52.png'
    },

    {
      name: 'Backpack',
      price: 60,
      tempImage: '../assets/livello_4_61.png'
    },

    {
      name: 'Giacket',
      price: 60,
      tempImage: '../assets/livello_5_75.png'
    },

    {
      name: 'Trekking Shoes',
      price: 80,
      tempImage: '../assets/livello_6_82.png'
    },

    {
      name: 'T-Shirt',
      price: 20,
      tempImage: '../assets/livello_7_89.png'
    }
  ];

  @ViewChild('navMen', { read: DragScrollComponent }) dsMen!: DragScrollComponent;

  moveLeft() {
    this.dsMen.moveLeft();
  }

  moveRight() {
    this.dsMen.moveRight();
  }

  //Women
  sliderItemsWomen: Array<{name: string, price: number,tempImage? : any}> = [
    {
      name: 'T-Shirt',
      price: 5,
      tempImage: '../assets/livello_2_44.png'
    },

    {
      name: 'Pants FORCLAZ',
      price: 30,
      tempImage: '../assets/livello_3_52.png'
    },

    {
      name: 'Backpack',
      price: 60,
      tempImage: '../assets/livello_4_61.png'
    },

    {
      name: 'Giacket',
      price: 60,
      tempImage: '../assets/livello_5_75.png'
    },

    {
      name: 'Trekking Shoes',
      price: 80,
      tempImage: '../assets/livello_6_82.png'
    },

    {
      name: 'T-Shirt',
      price: 20,
      tempImage: '../assets/livello_7_89.png'
    }
  ];

  @ViewChild('navWomen', { read: DragScrollComponent }) dsWomen!: DragScrollComponent;

  moveLeft2() {
    this.dsWomen.moveLeft();
  }

  moveRight2() {
    this.dsWomen.moveRight();
  }
}
