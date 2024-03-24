import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-btn-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-btn-small.component.html',
  styleUrl: './nav-btn-small.component.scss',
})
export class NavBtnSmallComponent {
  @Input() icon: string = '';
  @Input() active: boolean = false;

  @Input({
    required: true,
  })
  title: string = '';

  iconsFolderPath = '../../../assets/icons/';
}
