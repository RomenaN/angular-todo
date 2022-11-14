export interface Currencies {
  currencyCode: string;
  currencyTitle: string;
}

export interface CurrencyRate {
  currencyCode: string;
  currencyRate: string;
}

export interface CurrencyConversion {
  amount: string;
  base: string;
  date: string;
  rates: CurrencyRate;
}
