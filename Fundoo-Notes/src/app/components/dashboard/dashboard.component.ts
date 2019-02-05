import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})




export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  panelOpenState = false;


  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  
  // 
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private httpService: HttpService, private router: Router) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)akshaya\.io$/].some(h => h.test(window.location.host));


  ngOnInit() {
  }
  
  isclick(){
    return false;
  }

 
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  close(num:number){
    this.setStep(num);
  }

  check(num:number){
    this.setStep(num);
  }

  addAccount(){
    this.router.navigate(['register']);
  }
}
