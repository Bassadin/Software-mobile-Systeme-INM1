module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            borderColor : {
                "form-input": "var(--color-border-form-input)",
            },
            colors: {},
            textColor: {
                primary: "var(--color-text-primary)",
                "header-footer": "var(--color-text-header-footer)",
                button: "var(--color-text-button)",
            },
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                "header-footer": "var(--color-bg-header-footer)",
                button: "var(--color-bg-button)",
                "button-hover": "var(--color-bg-button-hover)",
            },
            fontFamily: {
                heading: "var(--font-heading)",
                footer: "var(--font-footer)",
                body: "var(--font-body)",
            },
            fontSize: {
                xl: "var(--font-size-xl)",
                base: "var(--font-size-base)"
                
            }
        },
    },
    plugins: [],
};
