import { Component, InputSignal, input } from '@angular/core';

interface BlogPost {
  title: string;
  author: string;
  authorAvatar: string;
  image: string;
  excerpt: string;
  tags: string[];
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  imports: [],
})
export class PostComponent {
  post = input.required<BlogPost>();
}
