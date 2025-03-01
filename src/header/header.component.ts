import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isMobileView = false;
  isLoggedIn = false;
  username: string = '';
  isUserMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  closeMenu() {
    this.isMenuOpen = false;
  }


  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }


  closeUserMenu() {
    this.isUserMenuOpen = false;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }


  checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }


  ngOnInit() {
    this.checkViewport();
    this.checkLoginStatus();
  }


  checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true;
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.username = user.username || '';
    }
  }

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    this.closeUserMenu();
        window.location.href = '/home';
  }
}
