import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Services } from "../services/services";

@Component({
  selector: 'app-home-page',
  imports: [MatIconModule, Services],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  practises = ["Sustainablility",
    "Project On Time", "Modern Technology",
    "Latest Designs"
  ];

  achievementData = {
    heading: 'Building Trust Through Results:',
    points: [
      'Trusted By 200+ clients',
      'Successfully delivered 500+ Projects',
      '9+ Years of Excellence in Construction',
      'Successfully delivered 500+ projects'
    ]
  };
}
