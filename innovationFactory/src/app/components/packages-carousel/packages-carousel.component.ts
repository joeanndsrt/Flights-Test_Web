import { Component } from '@angular/core';

@Component({
  selector: 'app-packages-carousel',
  templateUrl: './packages-carousel.component.html',
  styleUrls: ['./packages-carousel.component.css'],
})
export class PackagesCarouselComponent {
  packages = [
    {
      title: 'Entrance Gate in Istanbul',
      src: '../../../assets/images/istanbul.jpg',
      country: 'Turkey',
      package: '3D/2N',
      pax: '5',
      reviews: '2.5k',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
      price: '$1,300'
    },
    {
      title: 'Plaza de espana in seville',
      src: '../../../assets/images/seville.jpg',
      country: 'Spain',
      package: '4D/3N',
      pax: '8',
      reviews: '1.3k',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$1,650',
      liked: false,
    },
    {
      title: 'Tower Bridge in London',
      src: '../../../assets/images/tower-bridge.jpg',
      country: 'UK',
      package: '6D/5N',
      pax: '12',
      reviews: '6.2k',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$1,500',
      liked: false,
    },
    {
      title: 'Taj Mahal building in Agra',
      src: '../../../assets/images/taj-mahal.jpg',
      country: 'India',
      package: '5D/4N',
      pax: '24',
      reviews: '13.1k',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: '5',
      liked: false,
      price: '$2,400'
    },
    {
      title: 'Blue Lagoon in Siargao',
      src: '../../../assets/images/siargao.jpg',
      country: 'PH',
      package: '4D/3N',
      pax: '10',
      reviews: '15.5k',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: '5',
      liked: false,
      price: '$1,000'
    },
  ];
}
