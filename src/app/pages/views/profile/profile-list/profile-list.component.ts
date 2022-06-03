import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { ParentItemData, ChildrenItemData } from '../../../../core/shared/typings/app.typings';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  photo = './assets/images/slider2.png'

  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];


  topData = [
    {
      street: 'Mohali', city: 'Sohana', state: 'Punjab', zip: '143519', expand: false, items: [
        {tank_feul:'Heat Oil', tank_size:'500UG'}
      ]
    },
    {
      street: 'Mohali', city: 'Sohana', state: 'Punjab', zip: '143519', expand: false, items: [
        {tank_feul:'Heat Oil', tank_size:'500UG'},
        {tank_feul:'Heat', tank_size:'400UG'},
        {tank_feul:'Oil', tank_size:'1000UG'}
      ]
    }
  ]

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }

}
