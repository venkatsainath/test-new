import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private user: UserService) {
  }
  ngOnInit() {
    this.apidata();
    console.log('dadasd')
    this.user.get('').subscribe(data => {
      console.log('dadasd')
      console.log(data)

    })
  }
  title = 'test';
  selectedC = "select the country"
  country = ['Indi', 'seilinaka', 'america'];
  ArrayData = [1, 2, 3, 4, 5, 6];
  resultArray = [];


  // code for dropdown
  countrySelected(con) {
    console.log(con);
    this.selectedC = con
    // this.indexChangeFun()
  }
  // code for dropdown end


  apidata() {
    console.log('sdfasd');

    let url = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    let fetchdat = fetch(url)
    fetchdat.then(res => {
      console.log(res);
    })
  }

  // Problem 2

  arr = ['hello', 'sky', 'cloud'];
  VowelDetect() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);

    }
  }


}
