import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class AppComponent {
  theme: 'theme-light' | 'theme-dark' = 'theme-light';

  isDarkTheme = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    const body = document.querySelector('body'); // Seleccionamos el body
  
    if (body) {
      // Reemplaza directamente theme-dark por theme-light o viceversa
      if (body.classList.contains('theme-dark')) {
        body.classList.replace('theme-dark', 'theme-light');
        this.isDarkTheme = false;
      } else {
        body.classList.replace('theme-light', 'theme-dark');
        this.isDarkTheme = true;
      }
    }
  
  }
}


