import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public arrayExperiences = signal ([
    {
      summary: {
        strong: 'Estagiário de desenvolvimento Front-End',
        p: 'BBTS | Abr 2023 - Set 2023',
      },
      text: 'Atuar no desenvolvimento web com a criação de páginas web e principalmente a criação de componentes documentados no StoryBook.',
    },
  ]);
}
