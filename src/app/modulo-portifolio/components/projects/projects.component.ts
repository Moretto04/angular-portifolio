import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: 'assets/header/tiago-pqueno.jpeg',
      alt: 'projeto',
      title: 'projeto',
      width: '100px',
      height: '51px',
      description: 'uma descrição qualquer',
      links: [
        {
          name: 'conheça o blog',
          href: ''
        }
      ]
    },
    {
      src: 'assets/header/tiago-pqueno.jpeg',
      alt: 'projeto',
      title: 'projeto',
      width: '100px',
      height: '51px',
      description: 'uma descrição qualquer',
      links: [
        {
          name: 'conheça o blog',
          href: ''
        }
      ]
    },
    {
      src: 'assets/header/tiago-pqueno.jpeg',
      alt: 'projeto',
      title: 'projeto',
      width: '100px',
      height: '51px',
      description: 'uma descrição qualquer',
      links: [
        {
          name: 'conheça o blog',
          href: ''
        }
      ]
    },
    {
      src: 'assets/header/tiago-pqueno.jpeg',
      alt: 'projeto',
      title: 'projeto',
      width: '100px',
      height: '51px',
      description: 'uma descrição qualquer',
      links: [
        {
          name: 'conheça o blog',
          href: ''
        }
      ]
    },
    {
      src: 'assets/header/tiago-pqueno.jpeg',
      alt: 'projeto',
      title: 'projeto',
      width: '100px',
      height: '51px',
      description: 'uma descrição qualquer',
      links: [
        {
          name: 'conheça o blog',
          href: ''
        }
      ]
    }
  ])
}
