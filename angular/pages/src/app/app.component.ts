import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageNum = 0;
  images = [
    {
      title: 'Local Star',
      url: 'https://exoplanets.nasa.gov/internal_resources/1759',
    },
    {
      title: 'Binary System',
      url: 'https://skyandtelescope.org/wp-content/uploads/circumbinary-planets-art.jpg',
    },
    {
      title: 'Blue Dwarf',
      url: 'https://th-thumbnailer.cdn-si-edu.com/xg8ymcfArLplIH3H3l457Xu7ThI=/fit-in/1072x0/filters:focal(1014x799:1015x800)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/93/ea/93ea364e-6fc3-4a67-970a-c71db4118181/bluesun.jpg',
    },
    {
      title: 'Black Dwarf',
      url: 'https://th-thumbnailer.cdn-si-edu.com/JNoi5EFJUZvwNQb7pqeY1Ws_Q9k=/fit-in/1072x0/filters:focal(1376x1074:1377x1075)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a3/88/a388c4b8-25ea-4b46-811a-2912a7549d5b/blackdwarf.jpg',
    },
    {
      title: 'Frozen Star',
      url: 'https://th-thumbnailer.cdn-si-edu.com/_T-RlSX_FAmdoq42BvHLMlOx6NI=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/76/6e/766ee213-791f-4a82-bf3b-c25ab8564106/751988main_magnetar_art_large-1.jpg',
    },
    {
      title: 'Iron Star',
      url: 'https://th-thumbnailer.cdn-si-edu.com/vOEKWiRsMxC_oEMVaVXcLMgjDOY=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d7/21/d721f8de-5bef-4fce-9d4c-b197d6b0daef/frf4e7_1.jpg',
    },
  ];

  delimiter(index: number) {
    return Math.abs(this.pageNum - index) < 3;
  }
}
