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
        strong: 'Desenvolverdor Python Júnior',
        p: 'APDIF -> Associação Protetora de Direitos Intelectuais Fonográficos | Março 2024 - Até o momento',
      },
      text: 'Atuar no desenvolvimento de automações com o uso do python e criação de robôs para realização de tarefas cotidianas.',
    },
  ]);
}
