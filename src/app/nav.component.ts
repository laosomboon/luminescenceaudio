import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { AngularFireList } from "angularfire2/database";
import {
    Component, EventEmitter,
    OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {AppState} from './app.service';
import {FirebaseService} from "./firebase.service";

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'mainnav',
    encapsulation: ViewEncapsulation.None,
    styles: [
       ''
    ],
    template: `
        <div class="codrops-top">
            <ul>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">REVIEWS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">WARRANTY</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">PHILOSOPHY</a></li>
                <li><a href="#">VACUUM TUBE</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
            <a class="w3-right" id="toggler" (click)="togglerClick($event)">☰</a>
        </div><!--/ Codrops top bar -->
        <div class="logo-container">
            <a class="w3-left w3-block logo">
                <img id="logo" src="{{logo}}">
            </a>
        </div>
        <div id="mySidenav" class="sidenav w3-sidebar w3-bar-block w3-dark w3-card-2" style="width:200px">
            
                
                <button class="w3-button w3-block w3-left-align" (click)="productOpen('mainProduct')">
                    PRODUCTS  <i class="fa fa-caret-down"></i>
                </button>
            <div id="mainProduct" class="w3-hide w3-dark w3-card-2">
                <button *ngFor="let item of items">
                    {{item.name}}
                </button>
                <!--<button class="w3-button w3-block w3-left-align" (click)="productOpen('modelone')">-->
                     <!-- - MODEL ONE  <i class="fa fa-caret-down"></i>-->
                <!--</button>-->
                <!--<div id="modelone" class="w3-hide w3-dark w3-card-2">-->
                    <!--<a href="#" class="w3-bar-item sub-cate">&#45;&#45;  P1</a>-->
                    <!--<a href="#" class="w3-bar-item sub-cate">&#45;&#45;  P2</a>-->
                <!--</div>-->
                <!--<button class="w3-button w3-block w3-left-align" (click)="productOpen('modeltwo')">-->
                     <!-- - MODEL TWO  <i class="fa fa-caret-down"></i>-->
                <!--</button>-->
                <!--<div id="modeltwo" class="w3-hide w3-dark w3-card-2">-->
                    <!--<a href="#" class="w3-bar-item sub-cate">&#45;&#45;  P3</a>-->
                    <!--<a href="#" class="w3-bar-item sub-cate">&#45;&#45;  P4</a>-->
                <!--</div>-->
            </div>
               <a href="#" class="w3-bar-item w3-button">REVIEWS</a>
               <a href="#" class="w3-bar-item w3-button">NEWS</a>
               <a href="#" class="w3-bar-item w3-button">WARRANTY</a>
               <a href="#" class="w3-bar-item w3-button">SERVICE</a>
               <a href="#" class="w3-bar-item w3-button">PHILOSOPHY</a>
               <a href="#" class="w3-bar-item w3-button">VACUUM TUBE</a>
               <a href="#" class="w3-bar-item w3-button">CONTACT US</a>
        </div>
         `
})
export class NavComponent implements OnInit {
    // @Output() onToggleSidebarEvent = new EventEmitter<any>();
    public catesRef: AngularFireList<any>;
    public cates: Observable<any[]>;
    public isSideNavOpen = false;
    public logo = '/assets/img/logo.svg';
    // public name = 'Angular 2 Webpack Starter';
    // public url = 'https://twitter.com/AngularClass';

    constructor(af: AngularFireDatabase) {
          this.catesRef = af.list('lum');
          // this.cates = this.catesRef.snapshotChanges().map(changes => {
          //     return changes.map( c =>{
          //         console.log(c.payload.key);
          //         console.log(c.payload.val());
          //     });
          // });
        this.catesRef.snapshotChanges().subscribe(actions => {
            actions.forEach(action =>{
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
            });
        });
    }



    public ngOnInit() {
        // console.log('Initial Nav', this.appState.state);
    }

    public togglerClick(button){
        // this.onToggleSidebarEvent.emit(button);

            let sideNav = document.getElementById('mySidenav');
            let toggler = document.getElementById('toggler');

            if(!this.isSideNavOpen){
                sideNav.style.left = '0';
                 document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
                toggler.innerText = 'x';
                this.isSideNavOpen = true;
            }else{
                sideNav.style.left = '-200px';
                toggler.innerText = '☰';
                 document.body.style.backgroundColor = 'white';
                this.isSideNavOpen = false;
            }

    }

    public productOpen(id){
        let x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }

    }

}
