import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {
  @Input() message!: Posts;
  @Output() clickPost = new EventEmitter<number>();
  onClick() {
    this.clickPost.emit(this.message.id);
  }
}
