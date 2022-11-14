import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Currencies, CurrencyConversion } from 'src/app/model/exchange.model';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange-page',
  templateUrl: './exchange-page.component.html',
  styleUrls: ['./exchange-page.component.scss'],
})
export class ExchangePageComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  currencies: Currencies[] = [];
  currencyExchange: CurrencyConversion = {} as CurrencyConversion;
  isLoading: boolean = false;
  isError: boolean = false;
  constructor(
    protected formBuilder: FormBuilder,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fromCurrency: new FormControl({ value: 'EUR', disabled: false }),
      toCurrency: new FormControl({ value: 'USD', disabled: false }),
    });

    this.getExchanges();
    this.getDefaultExchange(
      this.form.controls['fromCurrency'].value,
      this.form.controls['toCurrency'].value
    );
  }

  defaultCurrency(data: Currencies, value: string): boolean {
    return data.currencyCode === value ? false : true;
  }

  getExchanges(): void {
    this.exchangeService.getExchanges().subscribe((response) => {
      Object.entries(response).forEach((item) => {
        this.currencies.push({ currencyCode: item[0], currencyTitle: item[1] });
      });
    });
  }

  getDefaultExchange(fromCurr: string, toCurr: string): void {
    this.isLoading = true;
    this.isError = false;
    this.exchangeService.getDefaultExchange(fromCurr, toCurr).subscribe({
      next: (response) => {
        Object.entries(response.rates).forEach((item) => {
          this.currencyExchange = {
            amount: response.amount,
            base: response.base,
            date: response.date,
            rates: {
              currencyCode: item[0],
              currencyRate: item[1] as string,
            },
          };
        });
      },
      error: (e) => {
        console.error(e.error.error, e.error.code);
        this.isLoading = false;
        this.isError = true;
      },
      complete: () => {
        this.isError = false;
        this.isLoading = false;
      },
    });
  }

  getCurrTitle(value: string | undefined): string {
    let currCode: string = '';
    this.currencies.forEach((element) => {
      if (element.currencyCode === value) {
        currCode = element.currencyTitle;
      }
    });
    return currCode;
  }

  exchange(): void {
    this.getDefaultExchange(
      this.form.controls['fromCurrency'].value,
      this.form.controls['toCurrency'].value
    );
  }
}
