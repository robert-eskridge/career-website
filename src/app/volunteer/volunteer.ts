import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  imports: [],
  templateUrl: './volunteer.html',
  styleUrl: './volunteer.css'
})
export class Volunteer {
  lightboxActive = false;
  lightboxImage = '';

  openLightbox(imageUrl: string) {
    this.lightboxImage = imageUrl;
    this.lightboxActive = true;
  }

  closeLightbox() {
    this.lightboxActive = false;
    this.lightboxImage = '';
  }
}
