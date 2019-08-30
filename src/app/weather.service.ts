import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }


  getForecastData(location) {
    //const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  
    
    let uri = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/hourly?q=' + location.state + ',' + location.city + '&appid=b6907d289e10d714a6e88b30761fae22';
    return this.http.get(uri);

     //return this.http.jsonp(uri, 'callback');


  }

  getHourlyForecast(location) {
    let uri = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=' + location.state + ',' + location.city + '&appid=b6907d289e10d714a6e88b30761fae22';
    return this.http.get(uri);
  }



}