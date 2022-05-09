import "@/styles/style.scss";
import "mdi-icons/css/materialdesignicons.min.css";

import $ from "jquery";
import { initThemeSwitcherButton } from "./themeSwitcher";

let targetCurrencyElement = $("#targetCurrency");

let currencyInputElement = $("#currencyInput");

let outputCurrencyElement = $("#outputCurrency");

// Handle currency conversion submission
document
    .getElementById("conversionForm")!
    .addEventListener("submit", (event) => {
        event.preventDefault();
        // controller.processCHF();

        let targetCurrency: string = <string>targetCurrencyElement.val();
        let amountToConvert = parseFloat(<string>currencyInputElement.val());

        fetch(
            `https://api.getgeoapi.com/v2/currency/convert?api_key=${
                import.meta.env.VITE_API_KEY
            }&from=EUR&to=${targetCurrency}&amount=${amountToConvert}&format=json`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                outputCurrencyElement!.text(
                    `${data.rates[targetCurrency].rate_for_amount} ${targetCurrency} (Rate for currency ${targetCurrency} is ${data.rates[targetCurrency].rate})`
                );
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
            let currencies = Object.keys(json.currencies).sort();

            currencies.forEach((eachCurrencyKey: string) => {
                let newOptionElement: HTMLOptionElement =
                    document.createElement("option");
                newOptionElement.setAttribute("value", eachCurrencyKey);
                newOptionElement.innerText = `${json.currencies[eachCurrencyKey]} (${eachCurrencyKey})`;

                targetCurrencyElement?.append(newOptionElement);
            });
            // Set preselected item
            document
                .querySelector("option[value='CHF']")
                ?.setAttribute("selected", "selected");
        });
    });
}

getAvailableCurrenciesAndSetDefaultOne();
initThemeSwitcherButton();
