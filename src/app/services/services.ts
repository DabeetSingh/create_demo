import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tasks } from '../tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  constructor(public task: Tasks, public router: Router){

  }
showDetails(arg: any) {
  console.log("abc");
  
 this.task.setTopic(arg.title, arg.topic);
 this.router.navigate(['../service-details']);

}

  imagConcrete = [
    'assets/images/concrete_1.jpeg',
    'assets/images/concrete_2.jpeg',

    'assets/images/concrete_3.jpeg',

    'assets/images/concrete_4.jpeg',

    'assets/images/concrete_5.jpeg'
  ];

  imgDeck = [
    'assets/images/interiorandbase1.1.jpeg',
    'assets/images/interiorandbase1.2.jpeg',
    'assets/images/interiorandbase1.3.jpeg',
    'assets/images/interiorandbase1.4.jpeg',
    'assets/images/interiorandbase1.5.jpeg',
  ];

  imgFence = [
    'assets/images/Fence_1.jpeg',
    'assets/images/Fence_2.jpeg',
    'assets/images/Fence_3.jpeg',
    'assets/images/Fence_4.jpeg',
    'assets/images/Fence_5.jpeg'
  ]

  imgMedia = [
    'assets/images/Media_1.jpeg',
    'assets/images/Media_2.jpeg',
    'assets/images/Media_3.jpeg',
      'assets/images/interior1.1.jpeg',
    'assets/images/interior1.2.jpeg',
  ]
  currentIndex = [0, 0, 0, 0];
  folder = [this.imagConcrete, this.imgDeck, this.imgFence, this.imgMedia];
  serviceHeading =
    [{
      title: "Concrete Work",
      description: "We provide reliable and durable concrete solutions for driveways, floors, slabs, and other structural surfaces.Our work focuses on strength, precision, and a clean professional finish that lasts for years.",
      topic: "concrete"
    },
    {
      title: "Basement Renovation",
      description: "Transform your basement into a functional and comfortable living space.We handle structural improvements, flooring, finishing, and modern upgrades to make your basement practical and visually appealing.",
      topic: "basement"
    },
    {
      title: "Exterior Work",
      description: "Enhance the inside of your home with high-quality interior finishing.Our services include tile installation, plastering, painting, and detailed finishing that improves both appearance and durability.",
      topic: "exterior"
    },
    {
      title: "Interior Work",
      description: "Improve the look and protection of your property with professional exterior work.We handle wall repairs, surface finishing, and outdoor improvements designed to withstand weather and daily use.",
      topic: "interior"
    }];

  getPosition(listIndex: number, i: number, imgArray: string[]) {
    const total = imgArray.length;

    let diff = i - this.currentIndex[listIndex];

    // Wrap around smoothly
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  }

  getStyle(listIndex: number, i: number, imgArray: string[]) {
    const pos = this.getPosition(listIndex, i, imgArray);

    if (Math.abs(pos) > 2) {
      return { display: 'none' };
    }

    const translateZ = -Math.abs(pos) * 250;
    const translateX = pos * 300;
    const rotateY = pos * -50;
    const scale = pos === 0 ? 1 : 0.75;

    return {
      transform: `
      translateX(-50%)
      translateX(${translateX}px)
      translateZ(${translateZ}px)
      rotateY(${rotateY}deg)
      scale(${scale})
    `,
      zIndex: 100 - Math.abs(pos),
      opacity: Math.abs(pos) > 2 ? 0 : 1,
      transition: 'all 0.6s ease'
    };
  }

  next(i: number, imgArray: string[]) {
    this.currentIndex[i] = (this.currentIndex[i] + 1) % imgArray.length;
  }

  prev(i: number, imgArray: string[]) {
    this.currentIndex[i] =
      (this.currentIndex[i] - 1 + imgArray.length) % imgArray.length;
  }
}


