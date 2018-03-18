import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  getAllAlbums() {
    return this.http.get('/api/albums')
      .map(res => res.json());
}
}
