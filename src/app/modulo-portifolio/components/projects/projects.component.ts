import { Component, inject, signal } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProjects } from '../../interface/IProjecrs.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
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
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
