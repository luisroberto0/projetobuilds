import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ForecastData } from '../core/model/forecast-data.model';
import { ForecastDetails } from '../core/model/forecast-details.model';
import { WeatherData } from '../core/model/weather-data.model';
import { ForecastService } from '../core/services/forecast.service';

@Component({
    selector: 'app-open-weather-map',
    templateUrl: './open-weather-map.component.html',
    styleUrls: ['./open-weather-map.component.scss'],
})
export class OpenWeatherMapComponent implements OnInit {
    // Declarações
    title = 'Weather App';
    listFilter: any;
    city!: string;
    showCurrent: boolean = false;
    showForecast: boolean = false;
    weatherDetails: WeatherData = new WeatherData();
    forecastData!: ForecastData;
    isDark: boolean = false;

    /*
    Serviço de previsão injetada
    */
    constructor(
        private forecastService: ForecastService,
        private angularfire: AngularFireAuth,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getCurrentIpLocation();
    }

    /*
    Esta função serve para carregar a previsão do tempo.
    Isso fará a assinatura do editor do URL do serviço Forecast, que retorna um observable.
   */
    loadForecastWeather(): void {
        this.forecastService.loadForecastWeather(this.city).subscribe((res) => {
            this.forecastData = new ForecastData(); // Instância para armazenar os dados de ForecastModel
            this.forecastData.name = res.city.name;
            for (
                let i = 7;
                i < res.list.length;
                i = i + 8 // Já que queremos 5 dias. ele salta 8 vezes para chegar ao dia seguinte. (Um dia tinha 8 detalhes na API.)
            ) {
                // Instância do tipo ForecastDetails e armazena os dados nela.
                const details = new ForecastDetails();
                details.date = res.list[i].dt_txt;
                details.maxTemperature = res.list[i].main.temp_max;
                details.minTemperature = res.list[i].main.temp_min;
                details.description = res.list[i].weather[0].description;
                details.icon = res.list[i].weather[0].icon;
                this.forecastData.details.push(details); // adicionando os dados para o objeto criado
            }
            this.showCurrent = false;
            this.showForecast = true;
        });
    }

    /**
     * Isso será assinado pelo editor da URL do serviço Forecast, que retorna um observable.
     */

    loadCurrentWeather(): void {
        this.forecastService.loadCurrentWeather(this.city).subscribe((res) => {
            this.setWeather(res);
        });
    }

    private getCurrentIpLocation(): void {
        this.forecastService.getCurrentIpLocation().subscribe((res) => {
            this.city = `${res.geoplugin_city}, ${res.geoplugin_regionCode}, ${res.geoplugin_countryName}`;
            this.listFilter = this.city;
            this.forecastService
                .loadCurrentWeather(this.city)
                .subscribe((res) => {
                    this.setWeather(res);
                });
        });
    }

    private setWeather(res: any): void {
        this.weatherDetails.cityName = res.name;
        this.weatherDetails.description = res.weather[0].description;
        this.weatherDetails.currentTemperature = res.main.temp;
        this.weatherDetails.icon = res.weather[0].icon;
        this.weatherDetails.maxTemperature = res.main.temp_max;
        this.weatherDetails.minTemperature = res.main.temp_min;
        this.showCurrent = true;
        this.showForecast = false;
    }

    // Função para alternar o tema.
    toggleTheme(): void {
        this.isDark = !this.isDark;
    }

    logout(): void {
        this.angularfire.signOut();
        this.router.navigate(['login']);
    }
}
