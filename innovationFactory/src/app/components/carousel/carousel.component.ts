import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = [
    { title: 'Burj Khalifa', src: '../../../assets/images/burjKhalifa.jpg', rating: '4.9', liked: false },
    { title: "Queen's Gambit", src: '../../../assets/images/bigBen.jpg', price: '$238', rating: '4.7', liked: false },
    { title: 'Beyond the Blues', src: '../../../assets/images/bali.jpg', price: '$238', rating: '4.3', liked: false },
    { title: 'Vigan', src: '../../../assets/images/vigan.jpg', rating: '5', liked: false },
  ];

}
