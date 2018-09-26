import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { setTimeout } from 'timers';

import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'dashboard-gdax-ticker',
  templateUrl: './gdax-ticker.component.html',
  styleUrls: ['./gdax-ticker.component.scss']
})
export class GdaxTickerComponent implements OnInit, OnDestroy {
  @Input() speed: number = 0.60;
  products$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  productSubscription: Subscription;
  socket$: WebSocketSubject<any> = new WebSocketSubject(environment.gdaxURL);
  socketSubscription: Subscription;

  @ViewChild('marquee') marquee: ElementRef;
  @ViewChild('strip') strip: ElementRef;
  startOffsetX: number = 0;
  offsetX: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Get all coin products.
    this.productSubscription = this.http.get<any[]>('https://api.gdax.com/products')
      .subscribe((products: any[]) => {
        // Make sure products have placeholder for socket data.
        products.map(product => {
          product.socket = {};
          return product;
        });
        // Store all products in subject.
        this.products$.next(products);

        // Now subscribe to socket for all products.
        const subscribe = {
          type: 'subscribe',
          channels: [
            {
              name: 'ticker',
              product_ids: products.map(product => product.id)
            }
          ]
        };
        this.socket$.next(JSON.stringify(subscribe));
      });

    // Watch for changes to prices on socket and update products on change.
    this.socketSubscription = this.socket$
      .pipe(filter(value => value.type === 'ticker'))
      .subscribe(updatedProduct => {
        const products = this.products$.value;
        const index = products.findIndex(product => product.id === updatedProduct.product_id);
        if (-1 !== index) {
          products[index].socket = updatedProduct;
        }
        this.products$.next(products);
      });

      setTimeout(() => {
        const startPosition = this.strip.nativeElement.getBoundingClientRect();
        this.startOffsetX = startPosition.x;
        window.requestAnimationFrame(this.animate.bind(this));
      }, 1000);
  }

  animate(): void {
    this.offsetX -= 1 * this.speed;
    this.marquee.nativeElement.style.transform = `translate(${this.offsetX}px, 0) translateZ(0)`;
    const stripPos = this.strip.nativeElement.getBoundingClientRect();
    if (stripPos.x < (-stripPos.width + this.startOffsetX)) {
      this.offsetX = 0;
    }
    window.requestAnimationFrame(this.animate.bind(this));
  }

  ngOnDestroy(): void {
    // Unsubscribe from all observables.
    this.productSubscription.unsubscribe();
    this.socketSubscription.unsubscribe();
  }
}
