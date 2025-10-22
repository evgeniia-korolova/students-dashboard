import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsTable } from "./students-table/students-table/students-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsTable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('students-dashboard');
}
