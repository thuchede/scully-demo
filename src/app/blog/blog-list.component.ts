import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs$: Observable<{ name: string; url: string }[]>;

  trackByFn = (index, _) => index;

  constructor(private srs: ScullyRoutesService) {
    this.blogs$ = this.srs.available$.pipe(
      map(routes => {
        return routes
          .filter(route => !!route.publish)
          .map(route => {
            return { name: route.title, url: route.slug };
          });
      })
    );
    this.blogs$.subscribe(_ => {});
  }

  ngOnInit(): void {}
}
