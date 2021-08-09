import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


import { ApiService } from './api.service';


@Injectable()
export class TagsService {
  constructor (
    private http: HttpClient,
    private apiService: ApiService
  ) {}

  getAll(): Observable<any> {
    // return this.apiService.get('/tags')
    //       .pipe(map(data => data.tags));
    return this.http.get<any>("/tagsData.json");
  }

}
