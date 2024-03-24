import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  categories: {
    title: string;
    items: string[];
  }[] = [
    {
      title: 'Женщинам',
      items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Bra fitting'],
    },
    {
      title: 'Мужчинам',
      items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье'],
    },
    {
      title: 'Детям',
      items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Игрушки', 'Малыши'],
    },
    {
      title: 'Виды спорта',
      items: [
        'Велоспорт',
        'Туризм',
        'Тренажеры и фитнес',
        'Командные виды спорта',
        'Самокаты',
      ],
    },
  ];
}
