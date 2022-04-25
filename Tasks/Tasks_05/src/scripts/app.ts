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
                outputCurrencyElement!.innerText = `${data.rates[targetCurrency].rate_for_amount} ${targetCurrency} (Rate for currency ${targetCurrency} is ${data.rates[targetCurrency].rate})`;
            });
    });

// Get available currencies for select item
function getAvailableCurrenciesAndSetDefaultOne() {
    fetch(
        `https://api.getgeoapi.com/v2/currency/list?api_key=${
            import.meta.env.VITE_API_KEY
        }&format=json`
    ).then((response) => {
        response.json().then((json) => {
            const currencies: any = json.currencies;

            Object.keys(currencies).forEach((eachCurrencyKey: string) => {
                let newOptionElement: HTMLOptionElement =
                    document.createElement("option");
                newOptionElement.setAttribute("value", eachCurrencyKey);
                newOptionElement.innerText = `${currencies[eachCurrencyKey]} (${eachCurrencyKey})`;

                targetCurrencyElement?.appendChild(newOptionElement);
            });
            // Set preselected item
            document
                .querySelector("option[value='CHF']")
                ?.setAttribute("selected", "selected");
        });
    });
}

getAvailableCurrenciesAndSetDefaultOne();
