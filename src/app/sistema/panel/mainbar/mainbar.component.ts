import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import  feather  from 'feather-icons';


@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss']
})
export class MainbarComponent implements OnInit {

  constructor(private router: Router) { }

  rotaParaLogin() {
  	this.router.navigate(['/login'])
  }

  ngOnInit() {
   
    feather.replace()
     feather.icons.user.toSvg({'stroke-width': 5, color: 'red' })
    
  }

}
