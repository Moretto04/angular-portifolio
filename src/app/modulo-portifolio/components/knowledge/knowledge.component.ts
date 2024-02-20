import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/knowledge/html.svg',
      alt: 'icone html',
    },
    {
      src: 'assets/knowledge/css.svg',
      alt: 'icone css',
    },
    {
      src: 'assets/knowledge/javascript.svg',
      alt: 'icone javascript',
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'icone angular',
    },
  ])
}
