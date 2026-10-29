/* ==========================================================
   TEXAS RANCH STEAKHOUSE — textos en castellano (por defecto),
   català, english y français. Lo que falte sale en castellano.
   La carta está en carta.js.
   ========================================================== */
window.TR_I18N = {
  langs: [
    { c: 'es', n: 'Castellano', loc: 'es-ES' },
    { c: 'ca', n: 'Català', loc: 'ca-ES' },
    { c: 'en', n: 'English', loc: 'en-GB' },
    { c: 'fr', n: 'Français', loc: 'fr-FR' }
  ],
  ui: {
    /* ------------------------------------------------ CASTELLANO */
    es: {
      'meta.title': 'Texas Ranch Steakhouse · Carnes a la brasa frente al mar · Blanes',
      'meta.desc': 'Texas Ranch Steakhouse, en el Passeig de s’Abanell de Blanes desde 1999: carnes a la parrilla, parrillada, baby back ribs, Texas nachos, fajitas y hamburguesas caseras, con la playa delante. Tel. 972 03 69 28.',
      'nav.home': 'Texas Ranch Steakhouse, inicio', 'nav.menu': 'Menú',
      'nav.rancho': 'El rancho', 'nav.parri': 'Parrillada', 'nav.corte': 'El corte', 'nav.carta': 'Carta', 'nav.wanted': 'Se busca', 'nav.terraza': 'Terraza', 'nav.visita': 'Visita',
      'lang.change': 'Cambiar idioma', 'lang.label': 'Idioma',
      'live.open': 'Abierto ahora · cocina hasta las {h}', 'live.closed': 'Cerrado · abre {when} a las {h}', 'live.today': 'hoy', 'live.tomorrow': 'mañana', 'live.on': 'el {d}',

      'intro.enter': 'Entra al rancho', 'intro.sub': 'Steakhouse · Est. 1999 · Blanes',

      'hero.kicker': 'Steakhouse · Est. 1999 · Passeig de s’Abanell',
      'hero.h1': 'Texas Ranch Steakhouse, carnes a la brasa frente al mar en Blanes',
      'hero.lead': 'Carnes a la parrilla, Texas nachos, fajitas y hamburguesas hechas en casa desde 1999. Decoración del Oeste dentro, la playa de s’Abanell delante.',
      'hero.rating': '<b>4,5</b> · 1.765 opiniones en Google',
      'hero.ctaCarta': 'Ver la carta', 'hero.ctaCall': 'Reservar mesa',

      'ran.kicker': 'El rancho',
      'ran.title': 'Indios, vaqueros y <em>brasa</em> frente al mar.',
      'ran.lead': 'Un restaurante familiar de comida casera americana y mexicana, con raciones generosas y carnes a la brasa. Lo llevan desde 1999 en el paseo de s’Abanell, con la terraza mirando a la playa.',
      'ran.p2': 'Dentro: tótems, jefes indios de madera, cactus, calaveras de buey y una barra con ruedas de carreta. Y si te apetece, te prestan el sombrero y la pistola para la foto.',
      'ran.f1': 'abrió el rancho', 'ran.f2': 'opiniones en Google · 4,5', 'ran.f3': 'la playa, al otro lado del paseo',
      'ran.vid': 'Parrillada en la mesa (vídeo de un cliente en Google)',
      'ran.c1': 'El salón', 'ran.c2': 'Jefe indio de la entrada', 'ran.c3': 'La pared del rancho', 'ran.c4': '«Espere aquí, por favor»',
      'q.src': 'Opinión en Google',
      'q.1': '«Ambientado en una decoración del Oeste, con indios y vaqueros, y te dan los sombreros y pistolas para que te hagas una foto. La comida muy rica y el servicio muy atento. Además está justo delante del mar.»',
      'q.2': '«La carne estaba espectacular y las raciones muy generosas. El personal súper amable. Las vistas al mar son un plus increíble.»',

      'par.kicker': 'La parrillada · 24,95 €',
      'par.title': 'Cinco carnes, <em>un plato</em>',
      'par.lead': 'Secreto, pechuga de pollo, chorizo, hamburguesa y costillas de cerdo a la brasa con salsa BBQ de la casa, con patatas y champiñones. Toca cada pieza.',
      'hs.chorizo': 'Chorizo', 'hs.chorizo.d': 'A la brasa, entero.',
      'hs.secreto': 'Secreto', 'hs.secreto.d': 'El corte jugoso del cerdo, a la parrilla.',
      'hs.pollo': 'Pechuga de pollo', 'hs.pollo.d': 'Sazonada y con las marcas de la parrilla.',
      'hs.burger': 'Hamburguesa', 'hs.burger.d': 'Hecha en casa, con salsa BBQ.',
      'hs.ribs': 'Costillas de cerdo', 'hs.ribs.d': 'Bañadas en nuestra salsa BBQ.',
      'hs.champ': 'Champiñones', 'hs.champ.d': 'La guarnición de todas las carnes.',
      'hs.patatas': 'Patatas fritas', 'hs.patatas.d': 'Y nunca faltan.',
      'par.foto': 'Foto de un cliente en Google',

      'cor.kicker': 'El corte',
      'cor.title': '¿De qué parte <em>sale</em>?',
      'cor.lead': 'Como en el mantel del rancho: toca la vaca y te decimos qué hay en la carta de cada corte.',
      'cor.pick': 'Toca un corte',
      'cor.none': 'Este corte no está en la parrilla… pero las hamburguesas son 100 % carne de primera, hechas en casa.',
      'cor.rib': 'Rib · lomo alto', 'cor.rib.d': 'Entrecot de 225 g al estilo de Texas, con mantequilla de hierbas.',
      'cor.short': 'Short loin · lomo bajo', 'cor.short.d': 'T-bone de 450 g: el chuletón con el hueso en T, a tu gusto.',
      'cor.tender': 'Tenderloin · solomillo', 'cor.tender.d': 'Filete de ternera de 200 g, el corte más tierno.',
      'cor.more': 'Del cerdo: baby back ribs, filete, secreto y escalope. Del pollo: alitas, filete, pinchos satay y fajitas.',

      'car.kicker': 'La carta',
      'car.title': 'La pizarra del <em>rancho</em>',
      'car.lead': 'La carta impresa en el mantel. Las guindillas marcan el picante.',
      'car.single': 'Simple', 'car.double': 'Doble', 'car.hot': 'Picante', 'car.burgerSize': 'Tamaño de la hamburguesa',
      'car.note': 'Precios de la carta del local, leídos de la foto de un cliente en Google: pueden haber cambiado. Una cuenta por mesa, no se cobra por separado. Bebidas y cócteles: carta aparte.',

      'wan.kicker': 'Se busca',
      'wan.title': 'Wanted: <em>vivos o a la brasa</em>',
      'wan.lead': 'Los más pedidos del rancho, con su recompensa. Fotos de clientes en Google.',
      'wan.word': 'Se busca', 'wan.reward': 'Recompensa', 'wan.from': 'desde', 'wan.drinks': 'carta de bebidas',
      'w.nachos': 'Texas Nachos', 'w.parri': 'Parrillada', 'w.ribs': 'Baby back ribs', 'w.burger': 'Burger de la casa', 'w.fajitas': 'Fajitas', 'w.cesar': 'César con pollo', 'w.champ': 'Champiñones rebozados', 'w.coc': 'Cócteles',

      'ter.kicker': 'La terraza',
      'ter.title': 'Cenar con la playa <em>delante</em>',
      'ter.lead': 'La terraza está en el Passeig de s’Abanell, con el mar al otro lado del paseo. En julio, durante el concurso internacional de fuegos artificiales de Blanes, se ven desde la mesa.',
      'ter.tap': 'Toca el cielo para lanzar un cohete',
      'ter.cap': 'Fuegos vistos desde la terraza (foto de un cliente)',

      'vis.kicker': 'Visita', 'vis.title': 'Te esperamos en el <em>rancho</em>',
      'vis.addr': 'Passeig de s’Abanell, 2<br>17300 Blanes (Girona)',
      'vis.hours': 'Horario', 'vis.closed': 'Cerrado', 'vis.today': 'hoy',
      'vis.season': 'Horario actual según Google; en verano puede ampliarse. Llama para confirmar.',
      'vis.bill': 'Una cuenta por mesa: no se cobra por separado.',
      'vis.shack': 'Al salir, una copa en su bar <b>The Shack</b> (Passeig de s’Abanell, 29), a cinco minutos.',
      'vis.maps': 'Abrir en Google Maps', 'vis.call': 'Llamar',

      'foot.photos': 'Fotos y vídeo: clientes del Texas Ranch en Google Maps. Carta: mantel del local.',
      'lb.close': 'Cerrar'
    },

    /* ------------------------------------------------ CATALÀ */
    ca: {
      'meta.title': 'Texas Ranch Steakhouse · Carns a la brasa davant del mar · Blanes',
      'meta.desc': 'Texas Ranch Steakhouse, al passeig de s’Abanell de Blanes des de 1999: carns a la graella, graellada, baby back ribs, Texas nachos, fajitas i hamburgueses casolanes, amb la platja al davant. Tel. 972 03 69 28.',
      'nav.home': 'Texas Ranch Steakhouse, inici', 'nav.menu': 'Menú',
      'nav.rancho': 'El ranxo', 'nav.parri': 'Graellada', 'nav.corte': 'El tall', 'nav.carta': 'Carta', 'nav.wanted': 'Es busca', 'nav.terraza': 'Terrassa', 'nav.visita': 'Visita',
      'lang.change': 'Canviar d’idioma', 'lang.label': 'Idioma',
      'live.open': 'Obert ara · cuina fins a les {h}', 'live.closed': 'Tancat · obre {when} a les {h}', 'live.today': 'avui', 'live.tomorrow': 'demà', 'live.on': 'el {d}',

      'intro.enter': 'Entra al ranxo', 'intro.sub': 'Steakhouse · Est. 1999 · Blanes',

      'hero.kicker': 'Steakhouse · Est. 1999 · Passeig de s’Abanell',
      'hero.h1': 'Texas Ranch Steakhouse, carns a la brasa davant del mar a Blanes',
      'hero.lead': 'Carns a la graella, Texas nachos, fajitas i hamburgueses fetes a casa des de 1999. Decoració del Far West a dins, la platja de s’Abanell al davant.',
      'hero.rating': '<b>4,5</b> · 1.765 opinions a Google',
      'hero.ctaCarta': 'Veure la carta', 'hero.ctaCall': 'Reservar taula',

      'ran.kicker': 'El ranxo',
      'ran.title': 'Indis, vaquers i <em>brasa</em> davant del mar.',
      'ran.lead': 'Un restaurant familiar de cuina casolana americana i mexicana, amb racions generoses i carns a la brasa. El porten des de 1999 al passeig de s’Abanell, amb la terrassa mirant a la platja.',
      'ran.p2': 'A dins: tòtems, caps indis de fusta, cactus, cranis de bou i una barra amb rodes de carro. I si et ve de gust, et deixen el barret i la pistola per a la foto.',
      'ran.f1': 'va obrir el ranxo', 'ran.f2': 'opinions a Google · 4,5', 'ran.f3': 'la platja, a l’altra banda del passeig',
      'ran.vid': 'Graellada a taula (vídeo d’un client a Google)',
      'ran.c1': 'El saló', 'ran.c2': 'El cap indi de l’entrada', 'ran.c3': 'La paret del ranxo', 'ran.c4': '«Espereu aquí, si us plau»',
      'q.src': 'Opinió a Google, traduïda del castellà',
      'q.1': '«Ambientat amb decoració del Far West, amb indis i vaquers, i et donen els barrets i les pistoles per fer-te una foto. El menjar molt bo i el servei molt atent. A més, és just davant del mar.»',
      'q.2': '«La carn era espectacular i les racions molt generoses. El personal súper amable. Les vistes al mar són un plus increïble.»',

      'par.kicker': 'La graellada · 24,95 €',
      'par.title': 'Cinc carns, <em>un plat</em>',
      'par.lead': 'Secret, pit de pollastre, xoriço, hamburguesa i costelles de porc a la brasa amb salsa BBQ de la casa, amb patates i xampinyons. Toca cada peça.',
      'hs.chorizo': 'Xoriço', 'hs.chorizo.d': 'A la brasa, sencer.',
      'hs.secreto': 'Secret', 'hs.secreto.d': 'El tall sucós del porc, a la graella.',
      'hs.pollo': 'Pit de pollastre', 'hs.pollo.d': 'Assaonat i amb les marques de la graella.',
      'hs.burger': 'Hamburguesa', 'hs.burger.d': 'Feta a casa, amb salsa BBQ.',
      'hs.ribs': 'Costelles de porc', 'hs.ribs.d': 'Banyades amb la nostra salsa BBQ.',
      'hs.champ': 'Xampinyons', 'hs.champ.d': 'La guarnició de totes les carns.',
      'hs.patatas': 'Patates fregides', 'hs.patatas.d': 'I no falten mai.',
      'par.foto': 'Foto d’un client a Google',

      'cor.kicker': 'El tall',
      'cor.title': 'De quina part <em>surt</em>?',
      'cor.lead': 'Com a les estovalles del ranxo: toca la vaca i et diem què hi ha a la carta de cada tall.',
      'cor.pick': 'Toca un tall',
      'cor.none': 'Aquest tall no és a la graella… però les hamburgueses són 100 % carn de primera, fetes a casa.',
      'cor.rib': 'Rib · llom alt', 'cor.rib.d': 'Entrecot de 225 g a l’estil de Texas, amb mantega d’herbes.',
      'cor.short': 'Short loin · llom baix', 'cor.short.d': 'T-bone de 450 g: el txuletó amb l’os en T, al teu gust.',
      'cor.tender': 'Tenderloin · filet', 'cor.tender.d': 'Filet de vedella de 200 g, el tall més tendre.',
      'cor.more': 'Del porc: baby back ribs, filet, secret i escalopa. Del pollastre: aletes, filet, pinxos satay i fajitas.',

      'car.kicker': 'La carta',
      'car.title': 'La pissarra del <em>ranxo</em>',
      'car.lead': 'La carta impresa a les estovalles. Els bitxos marquen el picant.',
      'car.single': 'Simple', 'car.double': 'Doble', 'car.hot': 'Picant', 'car.burgerSize': 'Mida de l’hamburguesa',
      'car.note': 'Preus de la carta del local, llegits de la foto d’un client a Google: poden haver canviat. Un compte per taula, no es cobra per separat. Begudes i còctels: carta a part.',

      'wan.kicker': 'Es busca',
      'wan.title': 'Wanted: <em>vius o a la brasa</em>',
      'wan.lead': 'Els més demanats del ranxo, amb la seva recompensa. Fotos de clients a Google.',
      'wan.word': 'Es busca', 'wan.reward': 'Recompensa', 'wan.from': 'des de', 'wan.drinks': 'carta de begudes',
      'w.nachos': 'Texas Nachos', 'w.parri': 'Graellada', 'w.ribs': 'Baby back ribs', 'w.burger': 'Burger de la casa', 'w.fajitas': 'Fajitas', 'w.cesar': 'Cèsar amb pollastre', 'w.champ': 'Xampinyons arrebossats', 'w.coc': 'Còctels',

      'ter.kicker': 'La terrassa',
      'ter.title': 'Sopar amb la platja <em>al davant</em>',
      'ter.lead': 'La terrassa és al passeig de s’Abanell, amb el mar a l’altra banda. Al juliol, durant el concurs internacional de focs d’artifici de Blanes, es veuen des de la taula.',
      'ter.tap': 'Toca el cel per llançar un coet',
      'ter.cap': 'Focs vistos des de la terrassa (foto d’un client)',

      'vis.kicker': 'Visita', 'vis.title': 'T’esperem al <em>ranxo</em>',
      'vis.addr': 'Passeig de s’Abanell, 2<br>17300 Blanes (Girona)',
      'vis.hours': 'Horari', 'vis.closed': 'Tancat', 'vis.today': 'avui',
      'vis.season': 'Horari actual segons Google; a l’estiu es pot ampliar. Truca per confirmar-ho.',
      'vis.bill': 'Un compte per taula: no es cobra per separat.',
      'vis.shack': 'En sortir, una copa al seu bar <b>The Shack</b> (passeig de s’Abanell, 29), a cinc minuts.',
      'vis.maps': 'Obrir a Google Maps', 'vis.call': 'Trucar',

      'foot.photos': 'Fotos i vídeo: clients del Texas Ranch a Google Maps. Carta: estovalles del local.',
      'lb.close': 'Tancar'
    },

    /* ------------------------------------------------ ENGLISH */
    en: {
      'meta.title': 'Texas Ranch Steakhouse · Chargrilled steaks by the sea · Blanes',
      'meta.desc': 'Texas Ranch Steakhouse on Passeig de s’Abanell in Blanes since 1999: steaks off the grill, mixed grill, baby back ribs, Texas nachos, fajitas and home-made burgers, right across from the beach. Tel. +34 972 03 69 28.',
      'nav.home': 'Texas Ranch Steakhouse, home', 'nav.menu': 'Menu',
      'nav.rancho': 'The ranch', 'nav.parri': 'Mixed grill', 'nav.corte': 'The cuts', 'nav.carta': 'Menu', 'nav.wanted': 'Wanted', 'nav.terraza': 'Terrace', 'nav.visita': 'Visit',
      'lang.change': 'Change language', 'lang.label': 'Language',
      'live.open': 'Open now · kitchen until {h}', 'live.closed': 'Closed · opens {when} at {h}', 'live.today': 'today', 'live.tomorrow': 'tomorrow', 'live.on': 'on {d}',

      'intro.enter': 'Step into the ranch', 'intro.sub': 'Steakhouse · Est. 1999 · Blanes',

      'hero.kicker': 'Steakhouse · Est. 1999 · Passeig de s’Abanell',
      'hero.h1': 'Texas Ranch Steakhouse, chargrilled steaks by the sea in Blanes',
      'hero.lead': 'Steaks off the grill, Texas nachos, fajitas and home-made burgers since 1999. Wild West inside, s’Abanell beach out front.',
      'hero.rating': '<b>4.5</b> · 1,765 reviews on Google',
      'hero.ctaCarta': 'See the menu', 'hero.ctaCall': 'Book a table',

      'ran.kicker': 'The ranch',
      'ran.title': 'Cowboys, chiefs and a <em>grill</em> by the sea.',
      'ran.lead': 'A family restaurant serving home-style American and Mexican food, generous portions and chargrilled meat. Running since 1999 on the s’Abanell promenade, with the terrace facing the beach.',
      'ran.p2': 'Inside: totem poles, carved wooden chiefs, cacti, bull skulls and a bar with wagon wheels. And if you fancy it, they’ll lend you the hat and the pistol for a photo.',
      'ran.f1': 'the ranch opened', 'ran.f2': 'reviews on Google · 4.5', 'ran.f3': 'the beach, across the promenade',
      'ran.vid': 'Mixed grill at the table (a customer’s video on Google)',
      'ran.c1': 'The dining room', 'ran.c2': 'The chief at the door', 'ran.c3': 'The ranch wall', 'ran.c4': '“Please wait here to be seated”',
      'q.src': 'Google review, translated from Spanish',
      'q.1': '“Wild West decor with cowboys and Indians, and they give you hats and pistols for a photo. Delicious food and very attentive service. And it’s right in front of the sea.”',
      'q.2': '“The meat was spectacular and the portions very generous. Super friendly staff. The sea views are an incredible bonus.”',

      'par.kicker': 'The mixed grill · €24.95',
      'par.title': 'Five meats, <em>one plate</em>',
      'par.lead': 'Secreto pork, chicken breast, chorizo, a burger and pork ribs off the grill with the house BBQ sauce, plus chips and mushrooms. Tap each piece.',
      'hs.chorizo': 'Chorizo', 'hs.chorizo.d': 'Whole, off the grill.',
      'hs.secreto': 'Secreto', 'hs.secreto.d': 'The juiciest pork cut, grilled.',
      'hs.pollo': 'Chicken breast', 'hs.pollo.d': 'Seasoned, with grill marks.',
      'hs.burger': 'Burger', 'hs.burger.d': 'Home-made, with BBQ sauce.',
      'hs.ribs': 'Pork ribs', 'hs.ribs.d': 'Glazed in our own BBQ sauce.',
      'hs.champ': 'Mushrooms', 'hs.champ.d': 'The side for every grilled meat.',
      'hs.patatas': 'Chips', 'hs.patatas.d': 'Always there.',
      'par.foto': 'A customer’s photo on Google',

      'cor.kicker': 'The cuts',
      'cor.title': 'Where does it <em>come from</em>?',
      'cor.lead': 'Just like the ranch placemat: tap the cow and we’ll tell you what’s on the menu from each cut.',
      'cor.pick': 'Tap a cut',
      'cor.none': 'This cut isn’t on the grill… but the burgers are 100% prime beef, made in house.',
      'cor.rib': 'Rib', 'cor.rib.d': '225 g Texas-style entrecôte with herb butter.',
      'cor.short': 'Short loin', 'cor.short.d': '450 g T-bone: the big chop with the T-shaped bone, cooked as you like.',
      'cor.tender': 'Tenderloin', 'cor.tender.d': '200 g beef fillet, the most tender cut.',
      'cor.more': 'From the pig: baby back ribs, pork fillet, secreto and escalope. From the chicken: wings, breast, satay skewers and fajitas.',

      'car.kicker': 'The menu',
      'car.title': 'The ranch <em>chalkboard</em>',
      'car.lead': 'The menu printed on the placemat. Chillies mark the heat. Translated from the Spanish menu.',
      'car.single': 'Single', 'car.double': 'Double', 'car.hot': 'Spicy', 'car.burgerSize': 'Burger size',
      'car.note': 'Prices from the restaurant’s menu, read from a customer’s photo on Google: they may have changed. One bill per table, no split bills. Drinks and cocktails: separate menu.',

      'wan.kicker': 'Wanted',
      'wan.title': 'Wanted: <em>dead or grilled</em>',
      'wan.lead': 'The ranch’s most-ordered, with their reward. Customers’ photos on Google.',
      'wan.word': 'Wanted', 'wan.reward': 'Reward', 'wan.from': 'from', 'wan.drinks': 'drinks menu',
      'w.nachos': 'Texas Nachos', 'w.parri': 'Mixed grill', 'w.ribs': 'Baby back ribs', 'w.burger': 'House burger', 'w.fajitas': 'Fajitas', 'w.cesar': 'Chicken Caesar', 'w.champ': 'Battered mushrooms', 'w.coc': 'Cocktails',

      'ter.kicker': 'The terrace',
      'ter.title': 'Dinner with the beach <em>out front</em>',
      'ter.lead': 'The terrace sits on Passeig de s’Abanell, with the sea just across the promenade. In July, during Blanes’ international fireworks contest, you can watch them from your table.',
      'ter.tap': 'Tap the sky to launch a rocket',
      'ter.cap': 'Fireworks seen from the terrace (a customer’s photo)',

      'vis.kicker': 'Visit', 'vis.title': 'See you at the <em>ranch</em>',
      'vis.addr': 'Passeig de s’Abanell, 2<br>17300 Blanes (Girona)',
      'vis.hours': 'Opening hours', 'vis.closed': 'Closed', 'vis.today': 'today',
      'vis.season': 'Current hours on Google; they may be longer in summer. Call to check.',
      'vis.bill': 'One bill per table: no split bills.',
      'vis.shack': 'Afterwards, a drink at their bar <b>The Shack</b> (Passeig de s’Abanell, 29), five minutes away.',
      'vis.maps': 'Open in Google Maps', 'vis.call': 'Call',

      'foot.photos': 'Photos and video: Texas Ranch customers on Google Maps. Menu: the restaurant’s placemat.',
      'lb.close': 'Close'
    },

    /* ------------------------------------------------ FRANÇAIS */
    fr: {
      'meta.title': 'Texas Ranch Steakhouse · Viandes grillées face à la mer · Blanes',
      'meta.desc': 'Texas Ranch Steakhouse, sur le Passeig de s’Abanell à Blanes depuis 1999 : viandes au gril, grillade mixte, baby back ribs, Texas nachos, fajitas et burgers maison, face à la plage. Tél. +34 972 03 69 28.',
      'nav.home': 'Texas Ranch Steakhouse, accueil', 'nav.menu': 'Menu',
      'nav.rancho': 'Le ranch', 'nav.parri': 'Grillade', 'nav.corte': 'Les morceaux', 'nav.carta': 'Carte', 'nav.wanted': 'Recherché', 'nav.terraza': 'Terrasse', 'nav.visita': 'Venir',
      'lang.change': 'Changer de langue', 'lang.label': 'Langue',
      'live.open': 'Ouvert · cuisine jusqu’à {h}', 'live.closed': 'Fermé · ouvre {when} à {h}', 'live.today': 'aujourd’hui', 'live.tomorrow': 'demain', 'live.on': '{d}',

      'intro.enter': 'Entrez au ranch', 'intro.sub': 'Steakhouse · Est. 1999 · Blanes',

      'hero.kicker': 'Steakhouse · Est. 1999 · Passeig de s’Abanell',
      'hero.h1': 'Texas Ranch Steakhouse, viandes grillées face à la mer à Blanes',
      'hero.lead': 'Viandes au gril, Texas nachos, fajitas et burgers maison depuis 1999. Le Far West à l’intérieur, la plage de s’Abanell devant.',
      'hero.rating': '<b>4,5</b> · 1 765 avis sur Google',
      'hero.ctaCarta': 'Voir la carte', 'hero.ctaCall': 'Réserver',

      'ran.kicker': 'Le ranch',
      'ran.title': 'Cow-boys, chefs indiens et <em>braise</em> face à la mer.',
      'ran.lead': 'Un restaurant familial de cuisine maison américaine et mexicaine, aux portions généreuses et aux viandes grillées. Depuis 1999 sur la promenade de s’Abanell, terrasse face à la plage.',
      'ran.p2': 'À l’intérieur : totems, chefs indiens en bois, cactus, crânes de bœuf et un bar à roues de chariot. Et si ça vous tente, on vous prête le chapeau et le pistolet pour la photo.',
      'ran.f1': 'ouverture du ranch', 'ran.f2': 'avis sur Google · 4,5', 'ran.f3': 'la plage, de l’autre côté de la promenade',
      'ran.vid': 'Grillade à table (vidéo d’un client sur Google)',
      'ran.c1': 'La salle', 'ran.c2': 'Le chef indien de l’entrée', 'ran.c3': 'Le mur du ranch', 'ran.c4': '« Merci de patienter ici »',
      'q.src': 'Avis Google, traduit de l’espagnol',
      'q.1': '« Décor du Far West, Indiens et cow-boys, et on vous donne chapeaux et pistolets pour une photo. Cuisine délicieuse, service très attentionné. Et c’est juste devant la mer. »',
      'q.2': '« La viande était spectaculaire et les portions très généreuses. Personnel super aimable. La vue sur la mer est un plus incroyable. »',

      'par.kicker': 'La grillade · 24,95 €',
      'par.title': 'Cinq viandes, <em>une assiette</em>',
      'par.lead': 'Secreto de porc, blanc de poulet, chorizo, steak haché et travers de porc grillés, sauce BBQ maison, avec frites et champignons. Touchez chaque morceau.',
      'hs.chorizo': 'Chorizo', 'hs.chorizo.d': 'Entier, grillé.',
      'hs.secreto': 'Secreto', 'hs.secreto.d': 'Le morceau le plus juteux du porc, au gril.',
      'hs.pollo': 'Blanc de poulet', 'hs.pollo.d': 'Assaisonné, marqué au gril.',
      'hs.burger': 'Steak haché', 'hs.burger.d': 'Fait maison, sauce BBQ.',
      'hs.ribs': 'Travers de porc', 'hs.ribs.d': 'Nappés de notre sauce BBQ.',
      'hs.champ': 'Champignons', 'hs.champ.d': 'La garniture de toutes les viandes.',
      'hs.patatas': 'Frites', 'hs.patatas.d': 'Toujours là.',
      'par.foto': 'Photo d’un client sur Google',

      'cor.kicker': 'Les morceaux',
      'cor.title': 'D’où ça <em>vient</em> ?',
      'cor.lead': 'Comme sur le set de table du ranch : touchez la vache, on vous dit ce qu’il y a à la carte pour chaque morceau.',
      'cor.pick': 'Touchez un morceau',
      'cor.none': 'Ce morceau n’est pas au gril… mais les burgers sont 100 % viande de premier choix, faits maison.',
      'cor.rib': 'Rib · entrecôte', 'cor.rib.d': 'Entrecôte de 225 g façon Texas, au beurre aux herbes.',
      'cor.short': 'Short loin · aloyau', 'cor.short.d': 'T-bone de 450 g, l’os en T, cuisson à votre goût.',
      'cor.tender': 'Tenderloin · filet', 'cor.tender.d': 'Filet de bœuf de 200 g, le morceau le plus tendre.',
      'cor.more': 'Du porc : baby back ribs, filet, secreto et escalope. Du poulet : ailes, blanc, brochettes satay et fajitas.',

      'car.kicker': 'La carte',
      'car.title': 'L’ardoise du <em>ranch</em>',
      'car.lead': 'La carte imprimée sur le set de table. Les piments indiquent le piquant. Traduit de la carte en espagnol.',
      'car.single': 'Simple', 'car.double': 'Double', 'car.hot': 'Épicé', 'car.burgerSize': 'Taille du burger',
      'car.note': 'Prix de la carte du restaurant, lus sur la photo d’un client sur Google : ils peuvent avoir changé. Une addition par table, pas de paiement séparé. Boissons et cocktails : carte à part.',

      'wan.kicker': 'Recherché',
      'wan.title': 'Wanted : <em>morts ou grillés</em>',
      'wan.lead': 'Les plus commandés du ranch, avec leur récompense. Photos de clients sur Google.',
      'wan.word': 'Recherché', 'wan.reward': 'Récompense', 'wan.from': 'dès', 'wan.drinks': 'carte des boissons',
      'w.nachos': 'Texas Nachos', 'w.parri': 'Grillade mixte', 'w.ribs': 'Baby back ribs', 'w.burger': 'Burger maison', 'w.fajitas': 'Fajitas', 'w.cesar': 'César au poulet', 'w.champ': 'Champignons en beignet', 'w.coc': 'Cocktails',

      'ter.kicker': 'La terrasse',
      'ter.title': 'Dîner face à la <em>plage</em>',
      'ter.lead': 'La terrasse est sur le Passeig de s’Abanell, la mer de l’autre côté de la promenade. En juillet, pendant le concours international de feux d’artifice de Blanes, on les voit depuis la table.',
      'ter.tap': 'Touchez le ciel pour lancer une fusée',
      'ter.cap': 'Feux d’artifice vus de la terrasse (photo d’un client)',

      'vis.kicker': 'Venir', 'vis.title': 'On vous attend au <em>ranch</em>',
      'vis.addr': 'Passeig de s’Abanell, 2<br>17300 Blanes (Girona)',
      'vis.hours': 'Horaires', 'vis.closed': 'Fermé', 'vis.today': 'aujourd’hui',
      'vis.season': 'Horaires actuels sur Google ; ils peuvent s’allonger l’été. Appelez pour confirmer.',
      'vis.bill': 'Une addition par table : pas de paiement séparé.',
      'vis.shack': 'Après le repas, un verre dans leur bar <b>The Shack</b> (Passeig de s’Abanell, 29), à cinq minutes.',
      'vis.maps': 'Ouvrir dans Google Maps', 'vis.call': 'Appeler',

      'foot.photos': 'Photos et vidéo : clients du Texas Ranch sur Google Maps. Carte : set de table du restaurant.',
      'lb.close': 'Fermer'
    }
  }
};
