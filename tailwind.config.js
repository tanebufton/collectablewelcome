module.exports = {
    "mode": "jit",
    "purge": [
        ".\/**\/*.html"
    ],
    "darkMode": false,
    "theme": {
        "container": {
            "center": true,
            "padding": {
                "DEFAULT": "1rem",
                "sm": "2rem",
                "lg": "4rem",
                "xl": "5rem",
                "2xl": "6rem"
            }
        },
        "extend": {
            "animation": {
                "infinite-scroll": "infinite-scroll 25s linear infinite"
            },
            "keyframes": {
                "infinite-scroll": {
                    "from": {
                        "transform": "translateX(0)"
                    },
                    "to": {
                        "transform": "translateX(-100%)"
                    }
                }
            },
            "colors": {
                "background": {
                    "50": "#ffa49d",
                    "100": "#ff9792",
                    "200": "#ff7b7a",
                    "300": "#ff5e64",
                    "400": "#ff3f4e",
                    "500": "#ff1139",
                    "600": "#e10025",
                    "700": "#c30012",
                    "800": "#a60000",
                    "900": "#890000",
                    "DEFAULT": "#ff1139"
                },
                "primary": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "primary-button-text": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "secondary": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "secondary-button-text": {
                    "50": "#ffa49d",
                    "100": "#ff9792",
                    "200": "#ff7b7a",
                    "300": "#ff5e64",
                    "400": "#ff3f4e",
                    "500": "#ff1139",
                    "600": "#e10025",
                    "700": "#c30012",
                    "800": "#a60000",
                    "900": "#890000",
                    "DEFAULT": "#ff1139"
                },
                "tertiary": {
                    "50": "#ffe487",
                    "100": "#ffd77b",
                    "200": "#ffbd62",
                    "300": "#ffa44a",
                    "400": "#ff8b32",
                    "500": "#f97316",
                    "600": "#dc5b00",
                    "700": "#bf4300",
                    "800": "#a32b00",
                    "900": "#880c00",
                    "DEFAULT": "#f97316"
                },
                "tertiary-button-text": {
                    "50": "#ffa1ae",
                    "100": "#ff93a2",
                    "200": "#ff798a",
                    "300": "#ff5e73",
                    "400": "#fe415d",
                    "500": "#e11d48",
                    "600": "#c40034",
                    "700": "#a80021",
                    "800": "#8b000f",
                    "900": "#700000",
                    "DEFAULT": "#e11d48"
                },
                "header": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "body": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "4rUSpi2i3cV6-link": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "4rUSpi2i3cV6-link-hover": {
                    "50": "#d0ffff",
                    "100": "#c3f3ff",
                    "200": "#a8daff",
                    "300": "#8dc1ff",
                    "400": "#72a9ff",
                    "500": "#5691e6",
                    "600": "#377acc",
                    "700": "#0364b3",
                    "800": "#004f9b",
                    "900": "#003b83",
                    "DEFAULT": "#5691e6"
                },
                "4rUSpi2i3cV6-mobile-link": {
                    "50": "#ffffff",
                    "100": "#ffffff",
                    "200": "#ffffff",
                    "300": "#ffffff",
                    "400": "#ffffff",
                    "500": "#ffffff",
                    "600": "#e5e5e5",
                    "700": "#cccccc",
                    "800": "#b3b3b3",
                    "900": "#9b9b9b",
                    "DEFAULT": "#ffffff"
                },
                "4rUSpi2i3cV6-mobile-link-hover": {
                    "50": "#d0ffff",
                    "100": "#c3f3ff",
                    "200": "#a8daff",
                    "300": "#8dc1ff",
                    "400": "#72a9ff",
                    "500": "#5691e6",
                    "600": "#377acc",
                    "700": "#0364b3",
                    "800": "#004f9b",
                    "900": "#003b83",
                    "DEFAULT": "#5691e6"
                }
            },
            "fontFamily": {
                "header": "Poppins",
                "title": "Poppins",
                "body": "Roboto",
                "4rUSpi2i3cV6-link": "Poppins"
            }
        }
    },
    "plugins": []
}