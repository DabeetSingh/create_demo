import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  imagConcrete = [
    'assets/images/concrete_1.jpeg',
    'assets/images/concrete_2.jpeg',

    'assets/images/concrete_3.jpeg',

    'assets/images/concrete_4.jpeg',

    'assets/images/concrete_5.jpeg',
    'assets/images/concrete_6.jpeg'
  ];

  imgDeck = [
    ' assets/images/Deck_1.jpeg',
    'assets/images/Deck_2.jpeg',
    'assets/images/Deck_3.jpeg',
    'assets/images/Deck_4.jpeg',
    'assets/images/Deck_5.jpeg',
    'assets/images/Deck_6.jpeg',
    'assets/images/Deck_7.jpeg',
    'assets/images/Deck_8.jpeg',
    'assets/images/Deck_9.jpeg',
    'assets/images/Deck_10.jpeg',
    'assets/images/Deck_11.jpeg',
    'assets/images/Deck_12.jpeg'
  ];

  imgFence = [
    ' assets/images/Fence_1.jpeg',
    'assets/images/Fence_2.jpeg',
    'assets/images/Fence_3.jpeg',
    'assets/images/Fence_4.jpeg',
    'assets/images/Fence_5.jpeg',
    'assets/images/Fence_6.jpeg',
    'assets/images/Fence_7.jpeg',
    'assets/images/Fence_8.jpeg',
    'assets/images/Fence_9.jpeg'
  ]

  imgMedia = [
    'assets/images/Media_1.jpeg',
    'assets/images/Media_2.jpeg',
    'assets/images/Media_3.jpeg',
    'assets/images/Media_4.jpeg',
    'assets/images/Media_6.jpeg',
    'assets/images/Media_7.jpeg',
    'assets/images/Media_8.jpeg',
    'assets/images/Media_9.jpeg',
    'assets/images/Media_10.jpeg',
    'assets/images/Media_11.jpeg',
    'assets/images/Media_12.jpeg',
  ]
  currentIndex = [0, 0, 0, 0];
  folder = [this.imagConcrete, this.imgDeck, this.imgFence, this.imgMedia];
  serviceHeading = ["Concrete", "Deck", "Fence", "Media Walls"];

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


