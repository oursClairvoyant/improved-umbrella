import { Component } from '@angular/core';
import { Visualisation } from './interfaces/visualisation.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visualisations: Visualisation = {
    name: "circle packing",
    img: "https://www.data-to-viz.com/img/section/CircularPacking150.png",
    description: "Circular packing or circular treemap allows to visualise a hierarchic architecture. It is an equivalent of a treemap or a dendrogram, where each node of the tree is represented as a circle and its sub-nodes are represented as circles inside of it. The size of each circle can be proportional to a specific value, what gives more insight to the plot."
  }
}
