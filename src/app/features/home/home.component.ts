import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'gb-home',
  imports: [CommonModule, FaqComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initScrollTrigger();
        this.initMobileMenu();
      }, 500);
      this.initSmoothScroll();
    }
  }

  initSmoothScroll(): void {
    const links = document.querySelectorAll('.nav-link, .btn-contact');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href && href.startsWith('#')) {
          e.preventDefault();

          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const headerOffset = 200;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            const mobileMenu = document.querySelector('.main-navresponsive');
            const hamburger = document.querySelector('.hamburger');
            const overlay = document.querySelector('.menu-overlay');

            if (mobileMenu?.classList.contains('active')) {
              mobileMenu.classList.remove('active');
              hamburger?.classList.remove('active');
              overlay?.classList.remove('active');
              document.body.style.overflow = '';
            }
          }
        }
      });
    });
  }

  initMobileMenu(): void {
    // Seleciona os elementos
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.main-navresponsive');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.main-navresponsive .nav-link');

    // Verifica se os elementos existem
    if (!hamburger || !mobileMenu) {
      console.warn('Elementos do menu não encontrados');
      return;
    }

    // Função para abrir o menu
    const openMenu = () => {
      mobileMenu.classList.add('active');
      if (overlay) overlay.classList.add('active');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    // Função para fechar o menu
    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Evento de clique no hamburger
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Evento de clique no overlay
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Evento de clique nos links do menu
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Evento de tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    const closeButton = document.querySelector('.close-menu');
    if (closeButton) {
      closeButton.addEventListener('click', closeMenu);
    }

  }

  initScrollTrigger(): void {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      '.navbar',
      '.hero',
      '.facts',
      '.clients-section',
      '.features',
      '.custom-card',
      '.card-discovery',
      '.testimonials',
      '.cta',
      'footer'
    ];

    sections.forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    gsap.from('.card, .testimonials__card, .fact-card, .faq-item', {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    console.log('✅ ScrollTrigger ativado!');
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
}