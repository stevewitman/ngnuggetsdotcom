import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
