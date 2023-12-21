/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "34ae5d8fb72ed70bb896060f3a58d5c5"
  },
  {
    "url": "about/index.html",
    "revision": "ac87c5a393ef8424f18de809c925aa96"
  },
  {
    "url": "admin/index.html",
    "revision": "0b53282881860ed4acfb5511b1cbe75c"
  },
  {
    "url": "blog/2021-07-31-what-is-jamstack-✨/index.html",
    "revision": "7948a15eb4e1ce552cb3a38f9e656473"
  },
  {
    "url": "blog/2021-08-01-master-markdown-in-5minutes-⌚/index.html",
    "revision": "e6aaf1c8e8bf4736685c0483d714eeab"
  },
  {
    "url": "blog/2021-08-08-css-units-in-a-nutshell-🐚/index.html",
    "revision": "0b3db8be1eb977215af0cce5d9496547"
  },
  {
    "url": "blog/2021-08-15-css-best-practices-in-responsive-typography/index.html",
    "revision": "f55a46c9a901e05cb98173f8ff928a3a"
  },
  {
    "url": "blog/2021-10-05-css-logical-properties/index.html",
    "revision": "032ea2ffacdf70d8cc096e4aa7e2f8be"
  },
  {
    "url": "blog/2021-11-03-top-terminal-commands-i-use-for-productivity/index.html",
    "revision": "6acbf3c5217ea7cf9be9df74db32b45e"
  },
  {
    "url": "blog/2021-12-23-a-simple-web-accessibility-trick-that-you-most-probably-missed/index.html",
    "revision": "a464777e7ad8e8469f1ae8bedb177fe0"
  },
  {
    "url": "blog/2022-03-06-event-delegation-in-javascript/index.html",
    "revision": "709e4230024a0c2fba9675b65445e605"
  },
  {
    "url": "blog/2022-04-06-add-google-fonts-to-your-tailwindcss-project/index.html",
    "revision": "9c74c6e7b5f6a2d31d770e0a7a32a02b"
  },
  {
    "url": "blog/2022-04-16-file-explorer-recursive-react-component/index.html",
    "revision": "43a684605923c7c6d9fa41a6c505a5b0"
  },
  {
    "url": "blog/2022-05-21-recreating-css-tricks-fancy-grid-hover-effect/index.html",
    "revision": "eb5371159a126d67c7e059567e97fde7"
  },
  {
    "url": "blog/2022-07-23-image-masking-on-hover-using-css-clip-path-and-javascript/index.html",
    "revision": "190bed641e8abbd6ccbc2a86f66cf0bd"
  },
  {
    "url": "blog/2022-09-13-format-numbers-dates-and-currencies-with-the-intl-object-in-javascript/index.html",
    "revision": "f7ae55fb3373d8d0eb7437138ae881d8"
  },
  {
    "url": "blog/2022-11-05-controlled-versus-uncontrolled-components-in-react/index.html",
    "revision": "69476d1d6cb1988dfa5068f4fd0c3a4f"
  },
  {
    "url": "blog/2023-07-13-debugging-web-apps-with-browser-dev-tools-6-amazing-tricks/index.html",
    "revision": "9f2585c626b2ec233cea55761e6e7799"
  },
  {
    "url": "blog/2023-07-19-cloning-made-easy-discover-degit-and-wave-goodbye-to-repository-headaches/index.html",
    "revision": "a8ec95b05e46693fee2f2a0048a40b5a"
  },
  {
    "url": "blog/2023-07-27-react-portals-render-components-outside-the-current-dom-hierarchy/index.html",
    "revision": "55deb9cb064e677ca460d8e64c797e83"
  },
  {
    "url": "blog/2023-11-12-using-git-diff-and-git-apply-to-share-local-changes-with-peers/index.html",
    "revision": "2ee6bbf74c62b11e8bbb42fb20fdbafe"
  },
  {
    "url": "blog/2023-12-10-build-your-own-pinterest-style-masonry-grid-a-step-by-step-guide/index.html",
    "revision": "0095cb27c3a9b5dca162910dde523608"
  },
  {
    "url": "blogs/index.html",
    "revision": "9cceeff696ea54e5e2c1600cab207d1c"
  },
  {
    "url": "css/style.css",
    "revision": "296386732556e71781a561b9ef754e33"
  },
  {
    "url": "fonts/JosefinSans-Italic-VariableFont_wght.ttf",
    "revision": "fd0ed435ec08aae4c87867bf3068762d"
  },
  {
    "url": "fonts/JosefinSans-VariableFont_wght.ttf",
    "revision": "324a513cb9c683dc30777bdbccf59995"
  },
  {
    "url": "fonts/static/JosefinSans-Bold.ttf",
    "revision": "9ac2a60828c8f6e627f4f628899398f0"
  },
  {
    "url": "fonts/static/JosefinSans-BoldItalic.ttf",
    "revision": "b4436aa971b24be8f7823dbb18ea6fe5"
  },
  {
    "url": "fonts/static/JosefinSans-ExtraLight.ttf",
    "revision": "b416cdfefb8773398d7bde7095d7b48d"
  },
  {
    "url": "fonts/static/JosefinSans-ExtraLightItalic.ttf",
    "revision": "1feb71a31cb5136d62fa277568a2cfde"
  },
  {
    "url": "fonts/static/JosefinSans-Italic.ttf",
    "revision": "be73b06756c9cb723d17ece91228a008"
  },
  {
    "url": "fonts/static/JosefinSans-Light.ttf",
    "revision": "feb0ce986e5e893281a1f05b549a7db9"
  },
  {
    "url": "fonts/static/JosefinSans-LightItalic.ttf",
    "revision": "075ac7a067937bf14714771a7d3412f6"
  },
  {
    "url": "fonts/static/JosefinSans-Medium.ttf",
    "revision": "f03e35cea2a49996d4e149a2b82cf987"
  },
  {
    "url": "fonts/static/JosefinSans-MediumItalic.ttf",
    "revision": "a727e17c6b49b78755f14f05d68e2462"
  },
  {
    "url": "fonts/static/JosefinSans-Regular.ttf",
    "revision": "6762afeccd02d16a80409b78fb85251c"
  },
  {
    "url": "fonts/static/JosefinSans-SemiBold.ttf",
    "revision": "22108cbbdb8b3ab5b505fdedcd334efa"
  },
  {
    "url": "fonts/static/JosefinSans-SemiBoldItalic.ttf",
    "revision": "dbdb2755b1d107b4ea14cd5dc4674a47"
  },
  {
    "url": "fonts/static/JosefinSans-Thin.ttf",
    "revision": "8f1a5916c7986af420490768a218375a"
  },
  {
    "url": "fonts/static/JosefinSans-ThinItalic.ttf",
    "revision": "abac76c2ae47bd550b183ec45cf5fd8a"
  },
  {
    "url": "img/404.gif",
    "revision": "24a81c6b4a59269350112f76a4744acd"
  },
  {
    "url": "img/adrianPgoto.jpg",
    "revision": "ac12e2316ae56b7d4b499d5881a35566"
  },
  {
    "url": "img/codepen.svg",
    "revision": "b81b362a6b01a9f230a7d030da25deb4"
  },
  {
    "url": "img/cursor1 - Copy.png",
    "revision": "3ae66d0d380cccf33e54db2a7ba1747f"
  },
  {
    "url": "img/cursor1.png",
    "revision": "9206b6f40a22a6087a5aaf74c4f1accc"
  },
  {
    "url": "img/cursor2 - Copy.png",
    "revision": "34fa3bd02e25ee81d2d36841edc13ccf"
  },
  {
    "url": "img/cursor2.png",
    "revision": "a720a67b890a91bcc2725df596ad4271"
  },
  {
    "url": "img/dv pic.jpg",
    "revision": "ac12e2316ae56b7d4b499d5881a35566"
  },
  {
    "url": "img/eleventy.jpg",
    "revision": "2c8960aab5b245795ef4f80d2d9f2c35"
  },
  {
    "url": "img/facebook.svg",
    "revision": "4067d7e582989b83f662466606a69cd6"
  },
  {
    "url": "img/hand-wave.gif",
    "revision": "da5d6a9a48fc843c4da366c92ce598b3"
  },
  {
    "url": "img/hand-wave2.gif",
    "revision": "3b39e426cd6db96c1346ebf570799ed9"
  },
  {
    "url": "img/icon.png",
    "revision": "1fc0476592cf81b4531e1beffbebb8cb"
  },
  {
    "url": "img/icon2.png",
    "revision": "be09b5f98193d745d98d8637b83c17e1"
  },
  {
    "url": "img/insta.svg",
    "revision": "8807f95198c8e066228e795bb0c66414"
  },
  {
    "url": "img/omg.gif",
    "revision": "35a9431a963f49c4b87e6102a39b1b51"
  },
  {
    "url": "img/pinterest.svg",
    "revision": "42396adc9220069f2ba3941f5a702a2b"
  },
  {
    "url": "img/post/accessibilty.png",
    "revision": "28b3c0fb406f6d9e4c48a39b1d98da5d"
  },
  {
    "url": "img/post/default-social-css-tricks.webp",
    "revision": "772db7d0372e54c7c40af55cdbbf8c40"
  },
  {
    "url": "img/post/degit-cover.png",
    "revision": "d3a9dafb196527414d6415852db46d0e"
  },
  {
    "url": "img/post/degit-subdirectory-example.png",
    "revision": "0f7900ac8307a3cef49f792b1f08b56c"
  },
  {
    "url": "img/post/download-1-.png",
    "revision": "6f1c36d62f14ef0b1a37af41f6a874d3"
  },
  {
    "url": "img/post/download.jpg",
    "revision": "002c7f5f29fae90ef20700629d7402c8"
  },
  {
    "url": "img/post/download.png",
    "revision": "2fb1a33599622fe36cb8f7ab26c6fa57"
  },
  {
    "url": "img/post/finfotech.webp",
    "revision": "912f578d728c30436600bf9f17c86463"
  },
  {
    "url": "img/post/font.png",
    "revision": "07db729886ebaffa6873a8476b6dfd11"
  },
  {
    "url": "img/post/git_diff.png",
    "revision": "bea23e481edad038bc0af33268662411"
  },
  {
    "url": "img/post/google-fonts.png",
    "revision": "33181f6daebf78bc04b7a16038340b2b"
  },
  {
    "url": "img/post/grid-overlapping.png",
    "revision": "b5487d2d791f75f725d9cbd1810dd779"
  },
  {
    "url": "img/post/grid.png",
    "revision": "4f94dd593ee005fb6a004f3dea81b840"
  },
  {
    "url": "img/post/group-1.png",
    "revision": "ced422e65edd8b7189b2b2b4f484ce44"
  },
  {
    "url": "img/post/group-4-1-.png",
    "revision": "0e750254c4deefe0460b45e64ff8717f"
  },
  {
    "url": "img/post/headless-commerce.png",
    "revision": "a2f257d40209cc3e52d330cff99b0149"
  },
  {
    "url": "img/post/image-275.png",
    "revision": "d777b13e039f8274c325cebd33f36bd2"
  },
  {
    "url": "img/post/image-masking-effect.png",
    "revision": "0cd42dca54230f0b81220cf104eb42eb"
  },
  {
    "url": "img/post/instagram-post-210.png",
    "revision": "eef62c9edd70874b3bd33222d44f5687"
  },
  {
    "url": "img/post/intl-browser-support.png",
    "revision": "303aa8480649ef940a04c082ac69f330"
  },
  {
    "url": "img/post/javascript-logo-banner-1-.webp",
    "revision": "33eb7c1ebf0e43d79a887f31051478ec"
  },
  {
    "url": "img/post/numbers-banner.png",
    "revision": "cc7bf81d968dc4b00c0063642fd95e78"
  },
  {
    "url": "img/post/portal-to-another-universe-cinematic-acrylic-painting-trending-on-pixiv-fanbox-palette-knife-1.png",
    "revision": "8bc836358c43dd079166df27a0f57a3c"
  },
  {
    "url": "img/post/post-4.png",
    "revision": "f3c0653fbd3c08a6bfd1d6a7d5ca6c07"
  },
  {
    "url": "img/post/post-5.png",
    "revision": "1dcfa9e8ca660721ad4d44f56ba3aabb"
  },
  {
    "url": "img/post/post-6.png",
    "revision": "7635ba368edf7eab92aa928c1c74f86c"
  },
  {
    "url": "img/post/post-7.png",
    "revision": "0ca983383c74f7573f2c071684cf0dd5"
  },
  {
    "url": "img/post/pro-cv-builder.png",
    "revision": "acb9c13f4a3c969860754c1f1f325a84"
  },
  {
    "url": "img/post/reacttoolkit_banner03-1200x500.png",
    "revision": "c628ee4c4ef07a107fd1478aab5278e6"
  },
  {
    "url": "img/post/screenshot-2021-08-01-154511.png",
    "revision": "369e087be22141638bfc0bdb69ac03e2"
  },
  {
    "url": "img/post/thanos-infinity-war.gif",
    "revision": "5f0921b998b61bfa15db2021b3e7e54f"
  },
  {
    "url": "img/quote.svg",
    "revision": "5b6a2233801f6ad2929109b038d2c382"
  },
  {
    "url": "img/singhkunal2050.jpg",
    "revision": "e5849d650de32188ebfc3ddf4c04357f"
  },
  {
    "url": "img/singhkunal2050.svg",
    "revision": "eaa7853af42006d9bde857f7307ff570"
  },
  {
    "url": "img/socials/codepen.svg",
    "revision": "eabd99b399977107e6ad17cd27e05df4"
  },
  {
    "url": "img/socials/facebook.svg",
    "revision": "304ceaacd7eec215887d0d36bd9de54f"
  },
  {
    "url": "img/socials/github.svg",
    "revision": "50cbd3dafc10b49f336b4605f5c6a4e9"
  },
  {
    "url": "img/socials/insta.svg",
    "revision": "8807f95198c8e066228e795bb0c66414"
  },
  {
    "url": "img/socials/linkedin.svg",
    "revision": "38f23fa1fa4b1621dfcbe5922ead5325"
  },
  {
    "url": "img/socials/pinterest.svg",
    "revision": "49ee6d6f808e2238f86f083e9f2de585"
  },
  {
    "url": "img/socials/twitter.svg",
    "revision": "c349376f6a7de5ac4c03d99916e977bd"
  },
  {
    "url": "img/tech/image 10.png",
    "revision": "b140bdf2c30d2ff2a61aba73e2f9bee9"
  },
  {
    "url": "img/tech/image 11.png",
    "revision": "205204b7bb2737015dbb37f442530677"
  },
  {
    "url": "img/tech/image 12.png",
    "revision": "1386caceaac5f2eb099ee1c0f5b06991"
  },
  {
    "url": "img/tech/image 13.png",
    "revision": "f2a6cef782f3b21a254ae84dd6d30af5"
  },
  {
    "url": "img/tech/image 14.png",
    "revision": "f78a623e2115336a8fcaa99db41a88e5"
  },
  {
    "url": "img/tech/image 15.png",
    "revision": "c5204bae3a5439adb3a4435ec8e9bfe2"
  },
  {
    "url": "img/tech/image 16.png",
    "revision": "32b59d3793d70d731f853d6e8db29114"
  },
  {
    "url": "img/tech/image 17.png",
    "revision": "ea950fa352c0c9db20930367cc83f2e1"
  },
  {
    "url": "img/tech/image 18.png",
    "revision": "a9e0735039941a5c0dfc986cbb81b673"
  },
  {
    "url": "img/tech/image 19.png",
    "revision": "69578b9af25326730a40d3c3338a579b"
  },
  {
    "url": "img/tech/image 2.png",
    "revision": "fbe3b40cd04c5ec343410c89ed235147"
  },
  {
    "url": "img/tech/image 20.png",
    "revision": "58a7f5894306b72a5c74b42cef541cd0"
  },
  {
    "url": "img/tech/image 21.png",
    "revision": "a82d4157da9c1dcdf865267cb70c699d"
  },
  {
    "url": "img/tech/image 22.png",
    "revision": "3fb3c6c9c13bfbc67567127f26ec3c07"
  },
  {
    "url": "img/tech/image 23.png",
    "revision": "ff0e75b3adab9d8255447a7f5371e3ee"
  },
  {
    "url": "img/tech/image 24.png",
    "revision": "264d7e6f5df628b3f846ff48635758be"
  },
  {
    "url": "img/tech/image 3.png",
    "revision": "26d4b7e566a8909ca88c819eb252b8bb"
  },
  {
    "url": "img/tech/image 32.png",
    "revision": "5c4dc3c47a5a781d607459f692196f93"
  },
  {
    "url": "img/tech/image 4.png",
    "revision": "775f3ee2b28b6b7bcae7385cdeeccc44"
  },
  {
    "url": "img/tech/image 5.png",
    "revision": "2c3777f56a293eadecb52fce0446ddc3"
  },
  {
    "url": "img/tech/image 6.png",
    "revision": "b3cc5ce579c1f5a3139ded55fb7d2726"
  },
  {
    "url": "img/tech/image 7.png",
    "revision": "e7e2022719fa60bd4d048e463997de38"
  },
  {
    "url": "img/tech/image 8.png",
    "revision": "2e589e864aab6815c76b4fe00ed538c2"
  },
  {
    "url": "img/tech/image 9.png",
    "revision": "1074c3ff2413de0ffa30655a576a07e1"
  },
  {
    "url": "img/tech/New folder (2)/image 10.png",
    "revision": "97ae99c18e3f63bf5189dba94fdaba3e"
  },
  {
    "url": "img/tech/New folder (2)/image 11.png",
    "revision": "824a17ba9efd0258b540a509985e171b"
  },
  {
    "url": "img/tech/New folder (2)/image 12.png",
    "revision": "0dc1011df5c8b389101b1013c1d64e6e"
  },
  {
    "url": "img/tech/New folder (2)/image 13.png",
    "revision": "ed173ecd2d5f5234cce959c4c39dcb80"
  },
  {
    "url": "img/tech/New folder (2)/image 14.png",
    "revision": "0235a9ab7fac13532004fd02ebb08385"
  },
  {
    "url": "img/tech/New folder (2)/image 15.png",
    "revision": "7a758e3ab1f2c832b01ae72801b5dd77"
  },
  {
    "url": "img/tech/New folder (2)/image 16.png",
    "revision": "59e20f63b1f1696cead313c16180b906"
  },
  {
    "url": "img/tech/New folder (2)/image 17.png",
    "revision": "4444ee932d1af31edc43e335dc357c6a"
  },
  {
    "url": "img/tech/New folder (2)/image 18.png",
    "revision": "b322d52bf241b1eeb78064898eb762fd"
  },
  {
    "url": "img/tech/New folder (2)/image 19.png",
    "revision": "7fe468ad41183b0b0c252282460c5fb3"
  },
  {
    "url": "img/tech/New folder (2)/image 2.png",
    "revision": "c5f4f88fc031c5a9ba4131ef1cfc0542"
  },
  {
    "url": "img/tech/New folder (2)/image 20.png",
    "revision": "f293d43297dbc93e945ff816277d5d7d"
  },
  {
    "url": "img/tech/New folder (2)/image 21.png",
    "revision": "0e4db1ca89547c5ecaeea519dc757076"
  },
  {
    "url": "img/tech/New folder (2)/image 22.png",
    "revision": "cec4febe9ea950b3ddc3652e24878599"
  },
  {
    "url": "img/tech/New folder (2)/image 23.png",
    "revision": "a9dfbac0ec899e6d27a2f46aa7d772a9"
  },
  {
    "url": "img/tech/New folder (2)/image 24.png",
    "revision": "e011845c979f6474252f9ff0eedbefb5"
  },
  {
    "url": "img/tech/New folder (2)/image 3.png",
    "revision": "6c7e7e45d8a82b8a6e22f22e2d0e81cb"
  },
  {
    "url": "img/tech/New folder (2)/image 32.png",
    "revision": "2aa693c34930d22aade0de85549932c9"
  },
  {
    "url": "img/tech/New folder (2)/image 4.png",
    "revision": "815c156ffa29a898a1bcf1c0ebf0d368"
  },
  {
    "url": "img/tech/New folder (2)/image 5.png",
    "revision": "b787a465c36d4efa7a17b3e851c44a54"
  },
  {
    "url": "img/tech/New folder (2)/image 6.png",
    "revision": "b0018a073a41bf2b4aaff7b4f1965c3b"
  },
  {
    "url": "img/tech/New folder (2)/image 7.png",
    "revision": "83bc8ae892fcac56a07681c991ccfef1"
  },
  {
    "url": "img/tech/New folder (2)/image 8.png",
    "revision": "be8b37b5e546d681323012a462f304e1"
  },
  {
    "url": "img/tech/New folder (2)/image 9.png",
    "revision": "1fb4fec730388a13cca971a50ee50831"
  },
  {
    "url": "img/Vector-1.svg",
    "revision": "988c1c4fb710dd626fc9283ef0f9a050"
  },
  {
    "url": "img/Vector-2.svg",
    "revision": "ed69ca429688fbc249998f161223875f"
  },
  {
    "url": "img/Vector-3.svg",
    "revision": "3aba2a3e8421d8731ee842877721bc7f"
  },
  {
    "url": "img/Vector.svg",
    "revision": "2f4ce9070b88431c3341b45fe68cc65c"
  },
  {
    "url": "img/work/1.jpg",
    "revision": "01f9556eb26924b7ee8981ec11406727"
  },
  {
    "url": "img/work/1.webp",
    "revision": "a6ef1a7226a8144dbce81ce9b881be53"
  },
  {
    "url": "img/work/2.jpg",
    "revision": "6d77d18b3481a740adea123c22410460"
  },
  {
    "url": "img/work/2.webp",
    "revision": "669a40e4c8ddcaac3f6a9ec5c6e3eb3f"
  },
  {
    "url": "img/work/3.jpg",
    "revision": "97d2dc7000e1db6e9b26c0c099f6b8a9"
  },
  {
    "url": "img/work/3.webp",
    "revision": "d8d39fb3c7fab26e8783c9b929cf6d31"
  },
  {
    "url": "img/work/4.jpg",
    "revision": "f6d29ae4c7b2f87797d9d8a78e6fa52c"
  },
  {
    "url": "img/work/4.webp",
    "revision": "216f0ec4ead23d0f72fbc55e8accb052"
  },
  {
    "url": "img/work/5.jpg",
    "revision": "e68315290d9ccff4f1b7d84c7ea2a539"
  },
  {
    "url": "img/work/5.webp",
    "revision": "ee0e516a39461ed31acc01052e3b889d"
  },
  {
    "url": "img/work/6.jpg",
    "revision": "56f5bdcc82661fa8a858fed7823fc245"
  },
  {
    "url": "img/work/6.webp",
    "revision": "65837cd204718b870007c10188711f61"
  },
  {
    "url": "index.html",
    "revision": "4afba6fcedd2dca7c1492c0733f4c014"
  },
  {
    "url": "js/script.js",
    "revision": "e11a5a799def77177c1be0ed733f9115"
  },
  {
    "url": "js/sweetalert.min.js",
    "revision": "f3b8ce97ff6ce324da6232da353adf40"
  },
  {
    "url": "projects/index.html",
    "revision": "1004d9a17597dc732131c19f7a61ad1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
