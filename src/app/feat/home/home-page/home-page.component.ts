import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Post } from 'src/app/core/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }
}
