import "@/styles/style.scss";

let targetCurrencyElement: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById("targetCurrency")
);

let currencyInputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("currencyInput")
);

let outputCurrencyElement = document.getElementById("outputCurrency");

// Handle currency conversion submission
document
    .getElementById("conversionForm")!
    .addEventListener("submit", (event) => {
        event.preventDefault();
        // controller.processCHF();

        let targetCurrency = targetCurrencyElement.value;
        let amountToConvert = parseFloat(currencyInputElement.value);

        fetch(
            `https://api.getgeoapi.com/v2/currency/convert?api_key=${
                import.meta.env.VITE_API_KEY
            }&from=EUR&to=${targetCurrency}&amount=${amountToConvert}&format=json`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                outputCurrencyElement!.innerText =
                    data.rates[targetCurrency].rate + " " + targetCurrency;
            });
    });

// Get available currencies for select item
fetch(
    `https://api.getgeoapi.com/v2/currency/list?api_key=${
        import.meta.env.VITE_API_KEY
    }&format=json`
).then((response) => {
    response.json().then((json) => {
        Object.keys(json.currencies).forEach((eachCurrencyKey: string) => {
            let newOptionElement: HTMLOptionElement =
                document.createElement("option");
            newOptionElement.setAttribute("value", eachCurrencyKey);
            newOptionElement.innerText = json.currencies[eachCurrencyKey];

            targetCurrencyElement?.appendChild(newOptionElement);
        });
    });
});
