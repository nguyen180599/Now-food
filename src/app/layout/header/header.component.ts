import {Component, HostListener, OnInit} from '@angular/core';
import {DistrictService} from "../../@core/service/district.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../@core/model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  currentDistrict = '';
  listDistrict!: any[];
  isShowListDistrict = false;
  isClickShowDistrict = false;
  isShowUserDropDown = false;
  isClickShowUser = false;
  menuBar = [
    {id: 1, name: "Đồ ăn", path: "food"},
    {id: 2, name: "Thực phẩm", path: "fresh"},
    {id: 3, name: "Bia", path: "liquor"},
    {id: 4, name: "Hoa", path: "flowers"},
    {id: 5, name: "Siêu thị", path: "fmcg"},
    {id: 6, name: "Thuốc", path: "medicine"},
    {id: 7, name: "Thú cưng", path: "pets"},
  ]
  menuItemChosen = 1;

  constructor(
    private districtService: DistrictService,
    private router: Router,
  ) {
    this.getCurrentUser()
  }

  @HostListener('click')
  clickInside() {
    if (this.isClickShowDistrict) {
      this.isShowListDistrict = !this.isShowListDistrict
    }
    if (this.isClickShowUser) {
      this.isShowUserDropDown = !this.isShowUserDropDown
    }
  }

  @HostListener('window:click')
  clickOut() {
    if (!this.isClickShowDistrict) {
      this.isShowListDistrict = false;
    }

    if (!this.isClickShowUser) {
      this.isShowUserDropDown = false;
    }
    this.isClickShowDistrict = false;
    this.isClickShowUser = false;
  }

  ngOnInit(): void {
    this.getDistrict();
    const path = this.router.url.split('/').pop();
    this.menuItemChosen = Number(path);
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('User');
    this.currentUser = JSON.parse(this.currentUser);
    // console.log(this.currentUser)
  }

  checkPage(item: any) {
    this.menuItemChosen = item.id
  }

  getDistrict() {
    this.districtService.getDistrict().subscribe(data => {
      this.listDistrict = data;
      this.currentDistrict = this.listDistrict[0].name
      this.districtService.setCurrentDistrict(this.listDistrict[0].id);
    })
  }

  changeDistrict(item: any) {
    this.currentDistrict = item.name;
    this.isShowListDistrict = false;
    this.districtService.setCurrentDistrict(item.id);
    this.districtService.getCurrentDistrict().subscribe(res => {
      console.log(res)
    })
  }

  logout() {
    localStorage.removeItem('User');
    location.reload()
  }

  // changePage(item: any) {
  //   this.router.navigate([`/pages`, item.id])
  // }
}
