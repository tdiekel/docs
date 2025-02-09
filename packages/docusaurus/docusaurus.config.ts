import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Fossorial Docs",
    tagline: "Adapted for use in burrowing",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.fossorial.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Fossorial", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/"
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //   editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                // blog: {
                //   showReadingTime: true,
                //   feedOptions: {
                //     type: ['rss', 'atom'],
                //     xslt: true,
                //   },
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                // //   editUrl:
                // //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //   // Useful options to enforce blogging best practices
                //   onInlineTags: 'warn',
                //   onInlineAuthors: 'warn',
                //   onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    customCss: "./src/css/custom.css"
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: true
        },
        algolia: {
            // The application ID provided by Algolia
            appId: "CVXQS7OHYA",
            // Public API key: it is safe to commit it
            apiKey: "37f86a9f9a04ab1c0f17339c86566ce5",
            indexName: "fossorial",
            contextualSearch: false
        },
        navbar: {
            title: "Fossorial",
            logo: {
                alt: "Fossorial Logo",
                src: "img/pangolin_orange.svg"
            },
            items: [
                // {
                //   type: "docSidebar",
                //   sidebarId: "tutorialSidebar",
                //   position: "left",
                //   label: "Docs",
                // },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: "https://discord.gg/HCJR8Xhme4",
                    label: "Discord",
                    position: "right"
                },
                {
                    href: "https://github.com/fosrl",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository"
                }
            ]
        },
        // footer: {
        //   style: "dark",
        //   links: [
        //     {
        //       title: "Docs",
        //       items: [
        //         {
        //           label: "Docs",
        //           to: "/overview",
        //         },
        //       ],
        //     },
        //     {
        //       title: "Community",
        //       items: [
        //         // {
        //         //   label: 'Stack Overflow',
        //         //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //         // },
        //         {
        //           label: "Discord",
        //           href: "https://discord.gg/HCJR8Xhme4",
        //         },
        //         // {
        //         //   label: 'X',
        //         //   href: 'https://x.com/docusaurus',
        //         // },
        //       ],
        //     },
        //     {
        //       title: "More",
        //       items: [
        //         // {
        //         //   label: 'Blog',
        //         //   to: '/blog',
        //         // },
        //         {
        //           label: "GitHub",
        //           href: "https://github.com/fosrl",
        //         },
        //       ],
        //     },
        //   ],
        //   copyright: `${new Date().getFullYear()} Built by Fossorial`,
        // },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        },

        plugins: [
            [
                "@dipakparmar/docusaurus-plugin-umami",
                /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
                {
                    websiteID: "d9a3a131-d2f4-4f8f-922b-80d668e96640", // Required
                    analyticsDomain: "umami.schwartznetwork.net", // Required
                    scriptName: "", // Optional
                    dataHostURL: "", // Optional
                    dataAutoTrack: true, // Optional
                    dataDoNotTrack: true, // Optional
                    dataCache: true, // Optional
                    dataDomains: "docs.fossorial.io" // comma separated list of domains, *Recommended*
                }
            ]
        ]
    } satisfies Preset.ThemeConfig
};

export default config;
