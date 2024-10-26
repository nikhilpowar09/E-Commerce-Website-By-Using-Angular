import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule], // Add only if needed
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
