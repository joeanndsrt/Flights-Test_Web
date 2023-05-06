import { Component } from '@angular/core';

@Component({
  selector: 'app-pic-column',
  templateUrl: './pic-column.component.html',
  styleUrls: ['./pic-column.component.css']
})
export class PicColumnComponent {

  pictures = [
    { src: '../../../assets/images/pic-column1.jpg' },
    { src: '../../../assets/images/pic-column2.jpg' },
    { src: '../../../assets/images/pic-column3.jpg' },
  ];
  
  enlargedIndex = -1;

  setEnlarged(index: number) {
    this.enlargedIndex = index;
  }

  resetEnlarged() {
    this.enlargedIndex = -1;
  }

}
