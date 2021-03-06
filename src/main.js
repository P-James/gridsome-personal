// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout),
    head.link.push({
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Rubik:ital,wght@0,400;1,500&display=swap",
    });
}
