import axios from "axios";
import { JSDOM } from "jsdom";

axios.get("https://www.spiegel.de/schlagzeilen/").then((response) => {
    const dom = new JSDOM(response.data);

    let allHeadlines = [
        ...dom?.window?.document?.querySelectorAll(
            "[data-block-el=articleTeaser]"
        ),
    ];

    let firstTenHeadlines = allHeadlines.slice(0, 10);

    firstTenHeadlines.forEach((eachHeadlineElement) => {
        let articleTitle = eachHeadlineElement
            .querySelector("article")
            .getAttribute("aria-label");

        let timeAndOrDate = eachHeadlineElement.querySelector(
            ".items-end.leading-loose :first-child"
        ).innerHTML;

        console.log(`${timeAndOrDate} - ${articleTitle}`);
    });
});
