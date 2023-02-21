import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  /* messages: Posts[] = []; */
  messages: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    /**
     * * |async:
     * ?  para cancelar la subcripcion de forma automatica y no indicarla en el "ngOnDestroy"
     * this.dataService.posts.subscribe((posts: any) => {
     * this.messages = posts;
    }); */
    this.messages = this.dataService.posts;
  }
}
