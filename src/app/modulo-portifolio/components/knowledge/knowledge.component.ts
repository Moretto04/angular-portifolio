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
      src: 'assets/knowledge/html.png',
      alt: 'icone html',
    },
    {
      src: 'assets/knowledge/css.png',
      alt: 'icone css',
    },
    {
      src: 'assets/knowledge/js.png',
      alt: 'icone javascript',
    },
    {
      src: 'assets/knowledge/typescript.png',
      alt: 'icone javascript',
    },
    {
      src: 'assets/knowledge/angular.png',
      alt: 'icone angular',
    },
  ])
}
