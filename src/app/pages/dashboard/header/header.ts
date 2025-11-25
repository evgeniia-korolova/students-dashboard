import { Component, effect, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButtonModule, MatIcon,],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
darkMode = signal(false)

setDarkMode = effect(() => {
  document.documentElement.classList.toggle('dark', this.darkMode())
})
}
