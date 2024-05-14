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
      src: 'assets/knowledge/bootstrap-stack.png',
      alt: 'icone bootstrap',
    },
    {
      src: 'assets/knowledge/sass.png',
      alt: 'icone sass',
    },
    {
      src: 'assets/knowledge/laravel.png',
      alt: 'icone laravel',
    },
    {
      src: 'assets/knowledge/python.png',
      alt: 'icone python',
    },
    {
      src: 'assets/knowledge/react.png',
      alt: 'icone react',
    },
  ])
}
