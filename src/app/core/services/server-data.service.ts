import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerData } from '../models/serverData.interface';

@Injectable({
  providedIn: 'root',
})
export class ServerDataService {
  private serverDataUrl: string = '../assets/serverData.json';

  constructor(private http: HttpClient) {}

  public getData(): Promise<ServerData> {
    return this.http.get<ServerData>(this.serverDataUrl).toPromise();
  }
}
