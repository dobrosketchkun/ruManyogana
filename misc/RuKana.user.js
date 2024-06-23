// ==UserScript==
// @name         RuKana
// @namespace    http://tampermonkey.net/
// @author       https://github.com/dobrosketchkun
// @version      1.0
// @description  RuManyogana is an art-project user script
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @license      The Uncertain Commons License https://gist.github.com/dobrosketchkun/d0c6aba085fb4a910926616a8b83c4c5
// ==/UserScript==

(function() {
    'use strict';

    // Create a style element
    var style = document.createElement('style');
    style.type = 'text/css';

    // Define the CSS rule to change the font for Cyrillic letters
    var css = `
        @font-face {
            font-family: 'RuMan Noto Sans JP';
            src: local('RuMan Noto Sans JP');
            unicode-range: U+0400-04FF; /* Cyrillic Unicode range */
        }

        body {
            font-family: 'RuMan Noto Sans JP', sans-serif !important;
        }
    `;

    // Set the CSS content
    style.appendChild(document.createTextNode(css));

    // Append the style element to the head of the document
    document.head.appendChild(style);
})();