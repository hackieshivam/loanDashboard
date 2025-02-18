import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  testimonialSlider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText: [
      '<img src="/assets/icons/left-move.png">',
      '<img src="/assets/icons/right-move.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2.5,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  lifePlans = {
    'partner-say': [
      {
        'partner-image': 'https://picsum.photos/200/300?random=1',
        'partner-name': 'John Doe',
        'partner-view': 'Great experience working together!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=2',
        'partner-name': 'Jane Smith',
        'partner-view': 'A wonderful partnership!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=3',
        'partner-name': 'Alice Johnson',
        'partner-view': 'Highly recommended service.',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=4',
        'partner-name': 'Michael Brown',
        'partner-view': 'Outstanding collaboration!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=5',
        'partner-name': 'Sarah Williams',
        'partner-view': 'Very satisfied with the work!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=6',
        'partner-name': 'Robert Wilson',
        'partner-view': 'Professional and reliable!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=7',
        'partner-name': 'Emily Davis',
        'partner-view': 'Exceptional experience!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=8',
        'partner-name': 'David Martinez',
        'partner-view': 'Would love to collaborate again!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=9',
        'partner-name': 'Sophia Taylor',
        'partner-view': 'Great team and great results!',
      },
      {
        'partner-image': 'https://picsum.photos/200/300?random=10',
        'partner-name': 'James Anderson',
        'partner-view': 'Fantastic service and support!',
      }
    ]
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
}
