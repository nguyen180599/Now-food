import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CategoryService} from "../../../@core/service/category.service";
import {DistrictService} from "../../../@core/service/district.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('viewheight', {read: ElementRef}) viewHeight!: ElementRef
  @ViewChild('home', {read: ElementRef}) home!: ElementRef
  listCategory!: any[];
  currentDistrict: any;
  menuHeight!: number;
  isToggle = false;

  constructor(
    private categoryService: CategoryService,
    private districtService: DistrictService
  ) {
  }

  ngAfterViewInit(): void {
    const height = this.viewHeight.nativeElement.clientHeight;
    this.menuHeight = height;
  }

  ngOnInit(): void {
    this.getCategory();
    this.getCurrentDistrict()

  }

  getCategory() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.listCategory = res;
    })
  }

  getCurrentDistrict() {
    this.districtService.getCurrentDistrict().subscribe(res => {
      this.currentDistrict = res;
    })
  }
}
