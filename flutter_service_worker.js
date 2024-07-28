'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "67a39f4f7a2e2e704845162cc63a48dd",
"assets/AssetManifest.bin.json": "68a663a6d4216d888a178a28839888be",
"assets/AssetManifest.json": "1c86899f3bf06145c08b3cb888f3cc23",
"assets/assets/images/2022.png": "4851680fef907b8224ad8876aa9b8f62",
"assets/assets/images/2024.png": "f2632bf5a87fdb30ea4c3df89b72582f",
"assets/assets/images/about%2520me.png": "6734def5b359c16ec4ee373cee227538",
"assets/assets/images/ads/ADS.png": "6c24f1fa1ce1a9aeacb69ba17da8be54",
"assets/assets/images/ads/Asset87.png": "c045ba8b45f2ef46ec1a0e1d421a4d44",
"assets/assets/images/ads/Asset88.png": "b84e8c1397f5f20d103085650f33dedc",
"assets/assets/images/ads/Asset89.png": "d1a551c47cec78b118f4382fa3829369",
"assets/assets/images/ads/Asset90.png": "1e93a89d12f4055eb554c7c85627d904",
"assets/assets/images/ads/Asset91.png": "6e5342de021ea7ff6ffed14e32d88ca6",
"assets/assets/images/ads/Asset92.png": "443d7e476c4a46c56e9504c37d941995",
"assets/assets/images/ads/FUNDO.png": "2f3781e0aaf8e3c916d65869e1c64460",
"assets/assets/images/ads/MENU.png": "1caf8d7c8dfe1dc7ea5ee116aa9bc043",
"assets/assets/images/ads.png": "4ff10aa2497f5ba6d4e55e5b5b63d17f",
"assets/assets/images/albuns/DESIGN.png": "0c00c238a62df46f55aaa6fa41ca1f8e",
"assets/assets/images/albuns/FUNDO.png": "cff942da65cabd7e1873449a367b5f3c",
"assets/assets/images/albuns/FUNDOLINHAS.png": "dd177df3af7e46d49b9fa5e4e0909d1a",
"assets/assets/images/albuns/HEART.png": "467d7cdd690c9d55314491c161f0d546",
"assets/assets/images/albuns/LINES.png": "a54ec7de8bdb3fc9dff1d3ab41e9f19f",
"assets/assets/images/albuns/MENU.png": "75bfbd1648c752917a3b087cf2385b83",
"assets/assets/images/albuns/MUSIC.png": "a0f77ae9f4671e35759a31b280c3d03d",
"assets/assets/images/albuns/NANA.png": "37a595d3b114ea3d1c911cbb6481ecdd",
"assets/assets/images/albuns/PERSONAL.png": "cc15f89f80c862aac3f4e692a6d8c05d",
"assets/assets/images/albuns/PSYCHO.png": "6c70e6372acd2db9bd30da7c1345b7a7",
"assets/assets/images/albuns/REDANDBLUE.png": "edaaf04f9ab4045d07c38b5b5988ee9f",
"assets/assets/images/albuns/SHIRO.png": "13aa54604c057fc229644715bc0e75e1",
"assets/assets/images/albuns/STRAWBERRY.png": "8fc2c5699edab1b3b25d5a9d8b413665",
"assets/assets/images/ansiedade.png": "e21d92b7befe26fff6bb9ff6f7641e82",
"assets/assets/images/Asset79.png": "1fdac1f6add86f3cf37b01e4bff3e780",
"assets/assets/images/ASTRONAUT.png": "0d34e8b7de6abe678133363505c65793",
"assets/assets/images/ballon.png": "e371011b3399ffae32ff3d7cdddf6a6a",
"assets/assets/images/bipolaridade.png": "2859fa121a95fe7fbcf468d146b39e30",
"assets/assets/images/bloqueio.png": "f9f2382eeafa2d603a966d090b653c62",
"assets/assets/images/border.png": "2c22f0d069d67c8674f82bd1387fac95",
"assets/assets/images/checkout.png": "ff2a92e628a7d519d3a972c9e7ee0aad",
"assets/assets/images/circulos.png": "91291fc0d22e84f12e129d2651dca903",
"assets/assets/images/circulosmeio.png": "27d756bec954ce9ae42700f975c6a178",
"assets/assets/images/clown.png": "62e62203e146b784cb41f122b1d26f52",
"assets/assets/images/combo.png": "bb5faa95daf2bc2169ccc88a9c0bf12e",
"assets/assets/images/dell.png": "bf7fba01f1699e64bc38e61bf7c5445c",
"assets/assets/images/delltwo.png": "7d94b39fb8a47d5b48022e8b8fdab9ee",
"assets/assets/images/demona.png": "7e1aa1770e21914ea9fe0cbe2f53ff02",
"assets/assets/images/depre.png": "692a45f35234b8d330127cf400086728",
"assets/assets/images/design/designs.png": "8c218e4d279e66205c3343cd7d58697b",
"assets/assets/images/design/fundo%2520baixo.png": "edd66f630a45c1dcce82ab5869e4b7e2",
"assets/assets/images/design/fundo%2520topo.png": "e37bd8e408a9689220ec755ba9ba4f6a",
"assets/assets/images/design/fundototal.png": "5be3ea954ecb3c047df25a0e5290b6f5",
"assets/assets/images/design/fundototall.png": "d753daf5b7ea47edf3497948858d6b19",
"assets/assets/images/design/fundototallaaaaaa.png": "6d13c90f46498b9131b0bbf6cb97da72",
"assets/assets/images/design/genesis.png": "c118588b397a4146db778c27a0cef67a",
"assets/assets/images/design/menu.png": "f2befc5a0ab65ad4d4b296b6ff398033",
"assets/assets/images/design/musics.png": "fe862c8b55b1d7f9249edb34b0684743",
"assets/assets/images/design/nana.png": "9fb3822b584e2175f97e998442c2a4c7",
"assets/assets/images/design/personal.png": "0617b2670a4b7cfabde76e2658356f2b",
"assets/assets/images/design/psycho.png": "8d6c6ea94bce49e8a636e112fabafcce",
"assets/assets/images/design/shiro.png": "cabf9dcde5c4a4015e800e75687d9474",
"assets/assets/images/design/stickyfingers.png": "78080c323ee525d02ed8b1f9ef5dda56",
"assets/assets/images/design/strawberry.png": "8621182c0515e0ce6b1bc43d2aa0e552",
"assets/assets/images/designs.png": "8c218e4d279e66205c3343cd7d58697b",
"assets/assets/images/deviantart.png": "309aca6818a38a29e4ee3355b4d6b0a7",
"assets/assets/images/divisao.png": "7d9622ede99c648a0523e50eb7148b2a",
"assets/assets/images/dragon.png": "6f2fae81bf527778be83efd0e30dd459",
"assets/assets/images/DRAWINGS.png": "a3c5add899daf4067eb4af0fe70dc932",
"assets/assets/images/fallenangel.png": "7b83ad81532f4658ed0eaa4759d0c8bc",
"assets/assets/images/flame.png": "a095e11e65b533db485748083f065daa",
"assets/assets/images/footer/1-10.png": "482b44b0722d9b2792bfcf7582b57e29",
"assets/assets/images/footer/1-11.png": "8bdaafdb4d5d76ebd1fc9f969948cebd",
"assets/assets/images/footer/1-12.png": "37a38e0c7353c56f51fd50f0e4c7e644",
"assets/assets/images/footer/Artboard.png": "57b626fdd70bcbaafc993b19c5fa9fac",
"assets/assets/images/footer/Asset100.png": "669d51b04f4c8c40c4a49324ffb17718",
"assets/assets/images/footer/Asset97.png": "cfaaf1a216a89ccb3ea0ad3ff62815bc",
"assets/assets/images/footer/Asset98.png": "1c3c6c806758a1ee6a9db5d0e4703a28",
"assets/assets/images/footer/Asset99.png": "713f0dac796db925a1375a0a6359af7a",
"assets/assets/images/fudno.png": "dee48b680d28143cfdad876f26075fbb",
"assets/assets/images/fundotopo.png": "05e6ba39fb847fc0a0b268573029bf54",
"assets/assets/images/genesis.png": "c118588b397a4146db778c27a0cef67a",
"assets/assets/images/hearts.png": "372678ff7a927ac9ebbf8ff9beedd9be",
"assets/assets/images/here.png": "24c062b4a420f1a1e67d5771a5263c86",
"assets/assets/images/insta.png": "78294d2d330982397a2d4eb9c6f47538",
"assets/assets/images/iphone.png": "7aace564b333deb2b063497b90f5b2a4",
"assets/assets/images/Jesus.png": "3d773fc01b23aedf1a522d456e5c59cd",
"assets/assets/images/lenovo.png": "d6f2b3bc8028e3d473f5f5f24ecf3d44",
"assets/assets/images/linkedin.png": "0ad422c7c5f32ea1de9f74cfc45e0e34",
"assets/assets/images/me/art.png": "6e505d40ef5e55e50b3ff45feb604d93",
"assets/assets/images/me/eboutme.png": "5b81ac83e447ace884d3d66c9b200cea",
"assets/assets/images/me/fundo.png": "4210f98e80d651d253bf7a524bc17d1c",
"assets/assets/images/me/insta.png": "e0b88397affa55189f57541cd71395ef",
"assets/assets/images/me/line.png": "087915cb23a91e6d0d09c5213d7820bb",
"assets/assets/images/me/linkedin.png": "5282aa5223b70d8d8ac059fb9045dbbf",
"assets/assets/images/me/menu.png": "f81e112c56eaa92791aa423b234e456d",
"assets/assets/images/me/nana.png": "9c9d15fd6c8242161b7fefd9cbf71904",
"assets/assets/images/me/skills.png": "511ca8c470351067c76481d65fa08d22",
"assets/assets/images/me/social.png": "7100a31c3f9b3c0aefabcf9a6afce1c8",
"assets/assets/images/mobile/a.png": "18f40f5fc1e1b0ba872dd4f646bcf5a8",
"assets/assets/images/mobile/Asset66.png": "14d45596afb29c3113327dd1845c1ea1",
"assets/assets/images/mobile/Asset67.png": "b9e9e28bef159b4d822dcddf087a4c38",
"assets/assets/images/mobile/Asset68.png": "037136654ecf5992a84b8c4cd248b72d",
"assets/assets/images/mobile/Asset69.png": "224d09aeeeeaa07035b4745bf2034e3f",
"assets/assets/images/mobile/Asset71.png": "35fc2031364999b0fa8e5f9937b9ae0a",
"assets/assets/images/mobile/Asset72.png": "65e39ddc8cd8f9d32191f221846169f8",
"assets/assets/images/mobile/Asset73.png": "859a11ee28859a26d0d02a6d4c58a420",
"assets/assets/images/mobile/CAIXA.png": "15a03566b11b1472a49927fc771663ce",
"assets/assets/images/mobile/calling.png": "605a716eb61c9c5677cf23be24060cd6",
"assets/assets/images/mobile/casal.png": "b9b39501650eaf9a0077f4fc5b9ee38f",
"assets/assets/images/mobile/DESENHO.png": "b0c1362c3ae37e09798de6b09075debe",
"assets/assets/images/mobile/DRAWINGS.png": "f4df0cd2137d40b40561bdeb12330a95",
"assets/assets/images/mobile/drawingsa.png": "8a662f24a1091c87846c623bb24bd5f1",
"assets/assets/images/mobile/fundo%2520baixo%2520.png": "18ac89a6a2e81d28369af8b379f9f799",
"assets/assets/images/mobile/fundo.png": "77872477468319f4a58a3a0354fcd48e",
"assets/assets/images/mobile/fundodraw.png": "711c3ab0463c86debdea1cdb2f659f29",
"assets/assets/images/mobile/fundoo.png": "711c3ab0463c86debdea1cdb2f659f29",
"assets/assets/images/mobile/fundotopo.png": "bcd2511b21e7893b8b79816891fc0237",
"assets/assets/images/mobile/FUNDO_1.png": "57f5581516524f5ba0db1770a4fd6fa1",
"assets/assets/images/mobile/green.png": "5014c99654647fa8997b9cd6273be852",
"assets/assets/images/mobile/inicio.png": "8761fe4e4e6676f82a3fb3c6877defa9",
"assets/assets/images/mobile/INSTA.png": "82f922d10b132e23d9605469b28bf926",
"assets/assets/images/mobile/Jesus.png": "2c84cd439a9fdb0d0975b74a44929dea",
"assets/assets/images/mobile/MENU.png": "16d404462518fad7fe125a1666023f70",
"assets/assets/images/mobile/ootherwalking.png": "bc67684354490ada0594361a3669e7ee",
"assets/assets/images/mobile/samurai.png": "c3c2613b849d31c6fa225ddc780fdeea",
"assets/assets/images/mobile/sentado.png": "ef32c09c7fea570ec4b23c0ec50e1780",
"assets/assets/images/mobile/walking.png": "0a02fe279e936a7a635909cb21e08297",
"assets/assets/images/more.png": "a6ebe6d4a04ca6b5bf1cb56c332cda6e",
"assets/assets/images/musics.png": "fe862c8b55b1d7f9249edb34b0684743",
"assets/assets/images/nan.png": "846c3e390d6d819ebbe858dacbe001b1",
"assets/assets/images/nana.png": "9fb3822b584e2175f97e998442c2a4c7",
"assets/assets/images/nanaproblems.png": "652037f1a3429ff5da26f950f6812403",
"assets/assets/images/personalp.png": "0617b2670a4b7cfabde76e2658356f2b",
"assets/assets/images/petala.png": "08da25dc68e544f76e544f290842ad84",
"assets/assets/images/psycho.png": "8d6c6ea94bce49e8a636e112fabafcce",
"assets/assets/images/quadrado.png": "3dc97697a96706d3ac8a0c5fdb9b8a8a",
"assets/assets/images/redgirl.png": "319620ad4631d0566a090abeb673dc1c",
"assets/assets/images/shiro.png": "cabf9dcde5c4a4015e800e75687d9474",
"assets/assets/images/skills.png": "e89ad8dcc453b3be69fa789d370d02b8",
"assets/assets/images/social%2520medias%2520group.png": "b78e96d49681b107e63a63b448fd6bbc",
"assets/assets/images/social%2520medias.png": "aac250584f8fe6d51bdc89bb37723b96",
"assets/assets/images/sony.png": "d234aa3de722ac3b45b6ff2792c621d6",
"assets/assets/images/stickyfingers.png": "78080c323ee525d02ed8b1f9ef5dda56",
"assets/assets/images/strawberry.png": "8621182c0515e0ce6b1bc43d2aa0e552",
"assets/assets/images/TEA.png": "83372065283a13d0536f4d4378472c9f",
"assets/assets/images/teste/about%2520me.png": "6734def5b359c16ec4ee373cee227538",
"assets/assets/images/teste/ansiedade.png": "e21d92b7befe26fff6bb9ff6f7641e82",
"assets/assets/images/teste/bipolaridade.png": "2859fa121a95fe7fbcf468d146b39e30",
"assets/assets/images/teste/bloqueio.png": "f9f2382eeafa2d603a966d090b653c62",
"assets/assets/images/teste/border.png": "2c22f0d069d67c8674f82bd1387fac95",
"assets/assets/images/teste/circulos.png": "91291fc0d22e84f12e129d2651dca903",
"assets/assets/images/teste/depre.png": "692a45f35234b8d330127cf400086728",
"assets/assets/images/teste/deviantart.png": "309aca6818a38a29e4ee3355b4d6b0a7",
"assets/assets/images/teste/divisao.png": "7d9622ede99c648a0523e50eb7148b2a",
"assets/assets/images/teste/fundo%2520total.png": "27d5917408942de41e653fe05a23e301",
"assets/assets/images/teste/fundo.png": "a6d14cef70be21af956e011a0f2238cf",
"assets/assets/images/teste/fundobaixo.png": "043e8c944267fd32125afd81842f687f",
"assets/assets/images/teste/fundotopo.png": "5dc521f5867f9065177c38e5370f15b5",
"assets/assets/images/teste/insta.png": "78294d2d330982397a2d4eb9c6f47538",
"assets/assets/images/teste/linkedin.png": "0ad422c7c5f32ea1de9f74cfc45e0e34",
"assets/assets/images/teste/menu.png": "becff5241bd412ed41f4fb1a25628b79",
"assets/assets/images/teste/more.png": "a6ebe6d4a04ca6b5bf1cb56c332cda6e",
"assets/assets/images/teste/nana%2520problems.png": "652037f1a3429ff5da26f950f6812403",
"assets/assets/images/teste/quadrado.png": "3dc97697a96706d3ac8a0c5fdb9b8a8a",
"assets/assets/images/teste/skills.png": "e89ad8dcc453b3be69fa789d370d02b8",
"assets/assets/images/teste/social%2520medias.png": "aac250584f8fe6d51bdc89bb37723b96",
"assets/assets/images/teste/socialmediasgroup.png": "b78e96d49681b107e63a63b448fd6bbc",
"assets/assets/images/teste/TEA.png": "83372065283a13d0536f4d4378472c9f",
"assets/assets/images/teste/traumas.png": "f3019ab80af10466e495c946eb673935",
"assets/assets/images/traumas/ansiedade.png": "a8918e65ee33125fa19412617c34bd15",
"assets/assets/images/traumas/bipolaridade.png": "839cc352c7c1be013f0217cd4d8b06f1",
"assets/assets/images/traumas/bloqueio.png": "4ba28f89e0b2fa62746d12f9f7594be0",
"assets/assets/images/traumas/boderline.png": "d81bc20cdbffd94c8a0f86650690fc05",
"assets/assets/images/traumas/circle.png": "4410f4c57766fdb34729c24879b43e09",
"assets/assets/images/traumas/depre.png": "0c10720122dfbf4eb85710a7fdfcd945",
"assets/assets/images/traumas/fundo.png": "2922071ff6855e82d388c998fe57b9d0",
"assets/assets/images/traumas/fundored.png": "ee55a450e95b88a4a4586f3f804e6b88",
"assets/assets/images/traumas/gradient.png": "68629ecd6d5def200e221c3b438e9c86",
"assets/assets/images/traumas/menu.png": "9c01badf30e6f369c7157bdf3753d410",
"assets/assets/images/traumas/stars.png": "f11a477f651c13c4669078ba4ec475cc",
"assets/assets/images/traumas/tea.png": "eebdf5731b167490d7bf8f30519fcf7c",
"assets/assets/images/traumas/traumas.png": "79ac15cadf1332363852dacf5070ba23",
"assets/assets/images/traumas.png": "f3019ab80af10466e495c946eb673935",
"assets/assets/images/web/ASTRONAUT.png": "0d34e8b7de6abe678133363505c65793",
"assets/assets/images/web/DRAWINGS.png": "a3c5add899daf4067eb4af0fe70dc932",
"assets/assets/images/web/four.png": "4577674952cc4d1fff573800b19e68bd",
"assets/assets/images/web/FUNDO%2520TOTAL.png": "f218c68992ab62ab5a77b9826e31330f",
"assets/assets/images/web/FUNDOBAIXO.png": "9cf7cee66afced5084f9269068ba7f81",
"assets/assets/images/web/FUNDOTOPO.png": "05e6ba39fb847fc0a0b268573029bf54",
"assets/assets/images/web/grid1.png": "96a9e1bf3cbe5d3e922497e938db1575",
"assets/assets/images/web/grid2.png": "33e44086d713553bae86b9098dc5ed19",
"assets/assets/images/web/grid3.png": "f046cd23c3ef43d9dd26fa70fea20a28",
"assets/assets/images/web/grid4.png": "1bb4dd38a9f49f4195b4c0e73fc6afd0",
"assets/assets/images/web/MENU.png": "0c4580fbb2a0237a7323d3278e21fae4",
"assets/assets/images/web/one.png": "8cce755f5c1bdeb0ce2ad770b814f138",
"assets/assets/images/web/three.png": "0e27c4c2b9c1d22bb5b8d00ca09fbd3a",
"assets/assets/images/web/two.png": "a898878c6d2482e370bae756f073f428",
"assets/assets/images/year/2022.png": "4851680fef907b8224ad8876aa9b8f62",
"assets/assets/images/year/ballon.png": "e371011b3399ffae32ff3d7cdddf6a6a",
"assets/assets/images/year/clown.png": "62e62203e146b784cb41f122b1d26f52",
"assets/assets/images/year/demona.png": "7e1aa1770e21914ea9fe0cbe2f53ff02",
"assets/assets/images/year/dragon.png": "6f2fae81bf527778be83efd0e30dd459",
"assets/assets/images/year/fallenangel.png": "7b83ad81532f4658ed0eaa4759d0c8bc",
"assets/assets/images/year/fundo.png": "d6bf18f1b86d43aa554ee37bb0d3a2ef",
"assets/assets/images/year/fundototal.png": "681e378cc6a8301a1ca3e03e0fda86e1",
"assets/assets/images/year/hearts.png": "372678ff7a927ac9ebbf8ff9beedd9be",
"assets/assets/images/year/here.png": "24c062b4a420f1a1e67d5771a5263c86",
"assets/assets/images/year/herea.png": "32e68be7119255a6ef46c654aabaefc7",
"assets/assets/images/year/Jesus.png": "3d773fc01b23aedf1a522d456e5c59cd",
"assets/assets/images/year/menu.png": "734d0ad1005c63c35dee552f5adab862",
"assets/assets/images/year/nan.png": "846c3e390d6d819ebbe858dacbe001b1",
"assets/assets/images/year/petala.png": "08da25dc68e544f76e544f290842ad84",
"assets/assets/images/year/redgirl.png": "319620ad4631d0566a090abeb673dc1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a210a21d3303150606ca2520978fbcd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e486e1d7bc6d2375806862efc3d50012",
"/": "e486e1d7bc6d2375806862efc3d50012",
"main.dart.js": "6e6b21941b8ad45ce02925a84f5bf16c",
"manifest.json": "754966957c1b8e056472579ae0988dc5",
"version.json": "194c554b9bddcf80e031a1d4879fd807"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
