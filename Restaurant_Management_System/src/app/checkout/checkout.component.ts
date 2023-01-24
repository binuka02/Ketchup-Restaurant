import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import { Food } from '../admin/food.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  cart:Food[]= [];
  cartNew:any[] = [];
  orderForm = {}

  totalPriceNumber:number = 0;
  constructor(private appService:AppService,private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.orderForm = params
      this.totalPriceNumber = params['amount']
    })
    this.cart = this.appService.getCart()
    console.log(this.cart)
    this.cartNew = this.cart.map((item:Food) => {
      return{
        name:item.name,
        price:item.price,
        quantity:item.quantity
      }
    });
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'AcDQqjOJxiipsu0vurDH1TIM6bYMoxAVmUXkR9_Ii251pXVnWcDWuKeAeKXFjlHzaNRWHXvpS7Jg-dXk',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: this.totalPriceNumber.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.totalPriceNumber.toString()
              }
            }
          },
          items: [
            {
              name: 'Ketchup Restaurant',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: this.totalPriceNumber.toString()
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any )=> {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.http.post(environment.apiUrl+'/order',{...this.orderForm,items:this.cartNew}).subscribe((res:any) => {
      console.log(res)

      this.router.navigate(["/order-success"]);
      this.appService.allCartUpdate([])
    } )
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

}
