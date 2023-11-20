import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.page.html',
  styleUrls: ['./tutorial-list.page.scss'],
})
export class TutorialListPage implements OnInit {
  tutorial: any[] = [];
  fotoProfile: string = 'https://source.unsplash.com/random/50x50';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.loadTutorial();
  }

  loadTutorial() {
    this.tutorialService.getTutorial().subscribe((response) => {
      console.log(response);
      // this.tutorial = response.Hasil;
      this.tutorial.push(...response.Hasil);
    });
  }
}
