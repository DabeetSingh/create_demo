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

  practises= ["Sustainablility",
"Project On Time","Modern Technology",
"Latest Designs"
  ];
}
