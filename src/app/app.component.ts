import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularPressHoldButton } from 'angular-press-hold-button';

type ButtonId =
  | 'button1'
  | 'button2'
  | 'button3'
  | 'button4'
  | 'button5'
  | 'button6';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularPressHoldButton],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonStatuses: Record<ButtonId, string> = {
    button1: 'idle',
    button2: 'idle',
    button3: 'idle',
    button4: 'idle',
    button5: 'idle',
    button6: 'idle',
  };

  handleActionStarted(buttonId: ButtonId) {
    this.buttonStatuses[buttonId] = 'started';
  }

  handleActionCancelled(buttonId: ButtonId) {
    this.buttonStatuses[buttonId] = 'cancelled';
  }

  handleActionFinished(buttonId: ButtonId) {
    this.buttonStatuses[buttonId] = 'finished';
  }
}
