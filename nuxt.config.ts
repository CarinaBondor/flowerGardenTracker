export default defineNuxtConfig({
    srcDir: "src/",
    compatibilityDate: "2026-09-14",
    devtools: { enabled: true },
    css: ["@picocss/pico/css/pico.min.css", "~/style.scss"],
    app: {
        head: {
            htmlAttrs: { lang: "en" },
            title: "Flower Garden Tracker",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
            ],
        },
    },
});
