import axios from "axios";
import { JSDOM } from "jsdom";

axios.get("https://www.spiegel.de/schlagzeilen/").then((response) => {
    const dom = new JSDOM(response.data);

    // Convert from NodeList to Array using deconstructuring operator
    let allHeadlines = [
        ...dom?.window?.document?.querySelectorAll(
            "[data-block-el=articleTeaser]"
        ),
    ];

    let firstTenHeadlines = allHeadlines.slice(0, 10);

    firstTenHeadlines.forEach((eachHeadlineElement) => {
        // Get the title of the article
        let articleTitle = eachHeadlineElement
            .querySelector("article")
            .getAttribute("aria-label");

        // Get article time and/or date
        let timeAndOrDate = eachHeadlineElement.querySelector(
            ".items-end.leading-loose :first-child"
        ).innerHTML;

        let articleLink = eachHeadlineElement
            .querySelector("article a[href]")
            .getAttribute("href");

        console.log(`* ${timeAndOrDate} - ${articleTitle} (${articleLink})`);
    });
});
