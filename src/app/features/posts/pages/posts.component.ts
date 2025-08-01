import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostComponent } from '../components/post.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  imports: [CommonModule, PostComponent, HeaderComponent],
})
export class PostsComponent {
  posts = [
    {
      title: 'Why Dark Mode Feels So Right',
      author: 'Jane Doe',
      authorAvatar: '/assets/jane.jpg',
      image: 'https://source.unsplash.com/800x600/?technology,dark',
      excerpt: 'Exploring the psychology and usability behind dark interfaces.',
      tags: ['darkmode', 'ux', 'design'],
    },
    {
      title: 'Tailwind Tips for Elegant UIs',
      author: 'John Smith',
      authorAvatar: '/assets/john.jpg',
      image: 'https://source.unsplash.com/800x600/?code,developer',
      excerpt:
        'From gradients to grids — how to use Tailwind for beautiful layouts.',
      tags: ['tailwind', 'frontend', 'css'],
    },
    {
      title: 'Supabase Authentication Guide',
      author: 'Alex Kim',
      authorAvatar: '/assets/alex.jpg',
      image: 'https://source.unsplash.com/800x600/?security,login',
      excerpt: 'A practical guide to managing users securely with Supabase.',
      tags: ['supabase', 'auth', 'angular'],
    },
  ];
}
