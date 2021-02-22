import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ForecastService {

    private apiUrl: string;
    private apiKey: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.openweathermapApi;
        this.apiKey = environment.openweathermapApiKey;
    }

    loadForecastWeather(city: any): Observable<any> {
        return this.http.get(
            `${this.apiUrl}/forecast?q=${city}&lang=pt_br&appid=${this.apiKey}&units=imperial`
        );
    }

    loadCurrentWeather(city: any): Observable<any> {
        return this.http.get(
            `${this.apiUrl}/weather?q=${city}&lang=pt_br&appid=${this.apiKey}&units=imperial`
        );
    }

    loadCurrentByLongLat(lat: any, lon: any): Observable<any> {
        return this.http.get(
            `${this.apiUrl}/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${this.apiKey}&units=imperial`
        );
    }

    getCurrentIpLocation(): Observable<any> {
        return this.http.get('http://www.geoplugin.net/json.gp') // 120 solicitações por hora
        .pipe(take(1), map(response => response));
    }
}
