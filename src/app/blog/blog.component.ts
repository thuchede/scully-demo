import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
  blogImage: string;

  constructor(private title: Title, private meta: Meta, private srs: ScullyRoutesService) {
    this.srs.getCurrent().subscribe(current => {
      this.title.setTitle(current.title);
      this.meta.addTag({ name: 'description', content: current.description });
    });
  }
}
