/**
 * Angular 2 decorators and services
 */
import {
    Component, EventEmitter,
    OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {AppState} from './app.service';

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
        <div id="mySidenav" class="sidenav w3-sidebar w3-bar-block w3-dark w3-card-2" style="width:160px;">
                <button class="w3-button w3-block w3-left-align" (click)="productOpen('mainProduct')">
                    PRODUCTS  <i class="fa fa-caret-down"></i>
                </button>
            <div id="mainProduct" class="w3-hide w3-dark w3-card-2">
                <button class="w3-button w3-block w3-left-align" (click)="productOpen('modelone')">
                    - MODEL ONE  <i class="fa fa-caret-down"></i>
                </button>
                <div id="modelone" class="w3-hide w3-dark w3-card-2">
                    <a href="#" class="w3-bar-item sub-cate">--  P1</a>
                    <a href="#" class="w3-bar-item sub-cate">--  P2</a>
                </div>
                <button class="w3-button w3-block w3-left-align" (click)="productOpen('modeltwo')">
                    - MODEL TWO  <i class="fa fa-caret-down"></i>
                </button>
                <div id="modeltwo" class="w3-hide w3-dark w3-card-2">
                    <a href="#" class="w3-bar-item sub-cate">--  P3</a>
                    <a href="#" class="w3-bar-item sub-cate">--  P4</a>
                </div>
            </div>
               <a href="#" class="w3-bar-item w3-button">REVIEWS</a>
               <a href="#" class="w3-bar-item w3-button">NEWS</a>
               <a href="#" class="w3-bar-item w3-button">WARRANTY</a>
               <a href="#" class="w3-bar-item w3-button">SERVICE</a>
               <a href="#" class="w3-bar-item w3-button">PHILOSOPHY</a>
               <a href="#" class="w3-bar-item w3-button">VACUUM TUBE</a>
               <a href="#" class="w3-bar-item w3-button">CONTACT US</a>
        </div>
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
            <a class="w3-left" class="logo">
                <img id="logo" src="{{logo}}">
            </a>
        </div><!--/ Codrops top bar -->
        
        <!--<div>-->
                <!--<a class="w3-left">-->
                <!--<img id="logo" src="{{logo}}">-->
                <!--</a>-->
        <!--</div>-->
        <!--<nav class="navbar">-->
            <!--<button id="mainToggler" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#mainNav2">-->
                <!--<a class="navbar-toggle-icon" style="color:#B3B8BA;font-size:.8em;">MENU ☰</a>-->
                <!--&lt;!&ndash;<span class="navbar-toggler-icon my-toggler"></span>&ndash;&gt;-->
            <!--</button>-->
            <!--<a class="navbar-brand" style="color:#B3B8BA;font-size:.8em;">HOME</a>-->
           <!---->
            <!--&lt;!&ndash;<a href="#" class="" style="width:60px;">PRODUCT</a>&ndash;&gt;-->
            <!--<div class="navbar-collapse collapse" id="mainNav2">-->
                <!--<ul class="navbar-nav mx-auto">-->
                    <!--<li class="nav-item"><a class="nav-link" href="#">PRODUCTS</a></li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">REVIEWS</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">CONTACT US</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">NEWS</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">WARRANTY</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">SERVICE</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">PHILOSOPHY</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">VACUUMTUBE</a>-->
                    <!--</li>-->
                    <!---->
                <!--</ul>-->
            <!--</div>-->
        <!--</nav>-->
        <!--<a style="padding-top:10px;color:#FFF;font-size:.8em;float:left;display:inline-block;max-width:40px;cursor:pointer;" class="menu-link w3-left visible-xs visible-sm"></a>-->
                <!--<a class="menu-link w3-right visible-xs">-->
                    <!--<span style="font-size:1em;">☰</span>-->
                <!--</a>-->
                <!--<ul>-->
                    <!--<li class="hidden-xs"><a class="nav-link w3-right"><span class="w3-small">-HOME-</span></a></li>-->
                    <!--<li class="hidden-xs"><a  class="nav-link w3-right"><span class="w3-small">-PRODUCTS-</span></a></li>-->
                    <!--<li class="hidden-xs hidden-sm"><a class="nav-link w3-right"><span class="w3-small">-REVIEWS-</span></a></li>-->
                    <!--<li class="hidden-xs"><a ui-sref="app.contact" class="nav-link w3-right"><span class="w3-small">-CONTACT US-</span></a></li>-->
                    <!--<li class="dropdown hidden-xs hidden-md hidden-lg">-->
                        <!--<a role="button" class="nav-link w3-right dropdown-toggle">-->
                            <!--<span class="w3-small">MORE</span>-->
                        <!--</a>-->
                        <!--<ul style="background:#000;font-size:9pt;" class="dropdown-menu">-->
                            <!--<li><a class="nav-link w3-right"><span>-REVIEWS-</span></a></li>-->
                            <!--<li><a class="nav-link w3-right"><span>-NEWS-</span></a></li>-->
                            <!--<li><a class="nav-link w3-right"><span>-WARRANTY-</span></a></li>-->
                            <!--<li><a class="nav-link w3-right"><span>-SERVICE-</span></a></li>-->
                            <!--<li><a class="nav-link w3-right"><span>-VACUUM TUBE-</span></a></li>-->
                            <!--<li><a class="nav-link w3-right"><span>-PHILOSOPHY-</span></a></li>-->
                        <!--</ul>-->
                    <!--</li>-->
                <!--</ul>-->
        <!--</nav>-->
         `
})
export class NavComponent implements OnInit {
    // @Output() onToggleSidebarEvent = new EventEmitter<any>();

    public isSideNavOpen = false;
    public logo = '/assets/img/logo.svg';
    // public name = 'Angular 2 Webpack Starter';
    // public url = 'https://twitter.com/AngularClass';

    constructor(public appState: AppState) {
    }

    public ngOnInit() {
        console.log('Initial Nav', this.appState.state);
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
            //x.previousElementSibling.className += " w3-green";
        } else {
            x.className = x.className.replace(" w3-show", "");
            // x.previousElementSibling.className =
            //     x.previousElementSibling.className.replace(" w3-green", "");
        }

    }

}
