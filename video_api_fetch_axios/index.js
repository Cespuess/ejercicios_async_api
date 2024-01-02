const url = 'https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_uq3pZfix8G7ICiUJUzz7mlK9FX1HqdTgji2LL9Tu&currencies=EUR%2CUSD%2CCAD';

fetch(url)
    .then(res => res.json())
    .then(response => console.log(response))

 