import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Task } from './task/task';
import { AnimalsComponent } from "./animals/animals";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Task, AnimalsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
