import { DatePipe } from '@angular/common';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  serverPath: string = 'https://ferryservice.prasarana.com.my';
  // serverPath: string = 'http://ferry.bersepadu.com';

  constructor(private http: Http, private datePipe: DatePipe) { }

  public signin(username, password) {
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/auth.json?username=' + username + '&password=' + password)

        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_routes(location) {
    console.log('get_routes');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/get_ferrytrips.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_bustrips(location) {
    console.log('get_bustrips');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/bustrips.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_etstrips(location) {
    console.log('get_etstrips');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/etstrips.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_ferrytrips(location) {
    console.log('get_ferrytrips');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/get_ferrytrips.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public set_ferrytrip(location, route_id, route_timetable_id, service_date, isOnTime, isFull, time_depart) {
    console.log('set_ferrytrips');
    return new Promise((resolve, reject) => {

      let url = this.serverPath + '/api/set_ferrytrip.json?' +
        'location=' + location +
        '&route_id=' + route_id +
        '&route_timetable_id=' + route_timetable_id +
        '&service_date=' + this.datePipe.transform(service_date, 'yyyy-MM-dd') +
        '&isOnTime=' + isOnTime +
        '&isFull=' + isFull +
        '&time_depart=' + this.datePipe.transform(time_depart, 'yyyy-MM-dd H:mm');
      console.log(url);
      this.http.get(url)
        .subscribe(res => {
          resolve(res.json());
          console.log('Successful submission.');
        }, (err) => {
          reject(err);
          console.log('Failed submission.');
        });
    });
  }

  public get_ferryroutes(location) {
    console.log('get_ferryroutes');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/get_ferryroutes.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_terminal(location) {
    console.log('get_ferryroutes');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/get_ferryroutes.json?device=dashboard&location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_history(location) {
    console.log('get_history');
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/get_trip_history.json?location=' + location)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public populate_trip() {
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/populate_trip.json')
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public delete_trip() {
    return new Promise((resolve, reject) => {

      this.http.get(this.serverPath + '/api/delete_trip.json')
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}