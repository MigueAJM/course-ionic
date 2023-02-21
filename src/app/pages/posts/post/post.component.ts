import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {
  @Input() message!: Posts;
}
