import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css'],
})
export class DatoComponent {
  @Input() dato: any;
}
