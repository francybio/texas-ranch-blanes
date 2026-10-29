/* ==========================================================
   TEXAS RANCH STEAKHOUSE — carta
   Leída del mantel-carta del local (foto de un cliente en
   Google Maps). Original en castellano; català, english y
   français son traducciones nuestras. Precios en €.
   hot = nivel de picante (guindillas de la carta).
   ========================================================== */
window.TR_CARTA = {
  sections: [
    { id: 'entrantes', es: 'Entrantes', ca: 'Entrants', en: 'Starters', fr: 'Entrées' },
    { id: 'parrilla', es: 'Parrilla', ca: 'Graella', en: 'From the grill', fr: 'Grillades',
      note: { es: 'Todas nuestras carnes de ternera y cerdo se cocinan a la parrilla y se sirven con patatas y champiñones.', ca: 'Totes les carns de vedella i porc es fan a la graella i se serveixen amb patates i xampinyons.', en: 'All our beef and pork is cooked on the grill and served with chips and mushrooms.', fr: 'Toutes nos viandes de bœuf et de porc sont grillées et servies avec frites et champignons.' } },
    { id: 'burgers', es: 'Hamburguesas', ca: 'Hamburgueses', en: 'Burgers', fr: 'Burgers', double: true,
      note: { es: 'Hechas en casa, 100 % carne de primera con nuestra receta. En pan de sésamo con patatas y ensalada americana.', ca: 'Fetes a casa, 100 % carn de primera amb la nostra recepta. En pa de sèsam amb patates i amanida americana.', en: 'Made in house, 100% prime beef, our own recipe. On a sesame bun with chips and coleslaw.', fr: 'Faits maison, 100 % viande de premier choix, notre recette. Pain aux sésames, frites et salade américaine.' } },
    { id: 'fajitas', es: 'Fajitas', ca: 'Fajitas', en: 'Fajitas', fr: 'Fajitas',
      note: { es: 'Tortilla de harina tostada con pimientos, cebolla salteada y pico de gallo, crema y guacamole, con arroz.', ca: 'Truita de farina torrada amb pebrots, ceba saltada i pico de gallo, crema i guacamole, amb arròs.', en: 'Toasted flour tortilla with peppers, sautéed onion and pico de gallo, sour cream and guacamole, with rice.', fr: 'Tortilla de blé grillée, poivrons, oignons sautés et pico de gallo, crème et guacamole, avec du riz.' } },
    { id: 'ensaladas', es: 'Ensaladas', ca: 'Amanides', en: 'Salads', fr: 'Salades' },
    { id: 'mas', es: 'Y más', ca: 'I més', en: 'And more', fr: 'Et aussi' },
    { id: 'extras', es: 'Salsas y extras', ca: 'Salses i extres', en: 'Sauces & sides', fr: 'Sauces & extras' }
  ],
  // { s: sección, n: nombre (como en la carta), d: descripción {es,ca,en,fr}, p: precio, p2: doble, hot }
  items: [
    { s: 'entrantes', n: 'Baguette crujiente', p: 4.5, d: { es: 'Con mantequilla de hierbas o alioli.', ca: 'Amb mantega d’herbes o allioli.', en: 'With herb butter or allioli.', fr: 'Au beurre aux herbes ou à l’aïoli.' } },
    { s: 'entrantes', n: 'Crema de tomate', p: 6.5, d: { es: 'Nuestra crema casera con picatostes.', ca: 'La nostra crema casolana amb crostons.', en: 'Our home-made tomato soup with croutons.', fr: 'Notre velouté maison, croûtons.' } },
    { s: 'entrantes', n: 'Sopa Texas Ranch', p: 7.5, hot: 1, d: { es: 'Sopa de chili con carne picante.', ca: 'Sopa de chili amb carn picant.', en: 'Spicy chili con carne soup.', fr: 'Soupe de chili con carne épicée.' } },
    { s: 'entrantes', n: 'Champiñones rebozados', p: 7.5, d: { es: 'Con salsa de ajo.', ca: 'Amb salsa d’all.', en: 'With garlic sauce.', fr: 'Sauce à l’ail.' } },
    { s: 'entrantes', n: 'Texas Nachos · regular', p: 8.95, hot: 2, d: { es: 'Nachos con carne de chili, queso fundido, crema, guacamole y jalapeños.', ca: 'Nachos amb carn de chili, formatge fos, crema, guacamole i jalapeños.', en: 'Nachos with chili beef, melted cheese, sour cream, guacamole and jalapeños.', fr: 'Nachos, viande au chili, fromage fondu, crème, guacamole et jalapeños.' } },
    { s: 'entrantes', n: 'Texas Nachos · XXL', p: 13.95, hot: 2, d: { es: 'La ración grande, para compartir.', ca: 'La ració gran, per compartir.', en: 'The big one, for sharing.', fr: 'La grande portion, à partager.' } },
    { s: 'entrantes', n: 'Alitas de pollo', p: 8.95, hot: 3, d: { es: 'Alitas picantes con salsa de chili.', ca: 'Aletes picants amb salsa de chili.', en: 'Hot wings with chili sauce.', fr: 'Ailes de poulet piquantes, sauce chili.' } },
    { s: 'entrantes', n: 'Gambas al ajillo', p: 11.5, d: { es: 'Con pan crujiente.', ca: 'Amb pa cruixent.', en: 'Garlic prawns with crusty bread.', fr: 'Crevettes à l’ail et pain croustillant.' } },
    { s: 'entrantes', n: 'Aros de cebolla', p: 6.95, d: { es: 'Con salsa de ajo.', ca: 'Amb salsa d’all.', en: 'Onion rings with garlic sauce.', fr: 'Rondelles d’oignon, sauce à l’ail.' } },

    { s: 'parrilla', n: 'Entrecot (225 g)', p: 19.95, d: { es: 'El favorito de las Américas, al estilo de Texas, con mantequilla de hierbas.', ca: 'El preferit de les Amèriques, a l’estil de Texas, amb mantega d’herbes.', en: 'The Americas’ favourite, Texas style, topped with herb butter.', fr: 'Le préféré des Amériques, façon Texas, au beurre aux herbes.' } },
    { s: 'parrilla', n: 'T-Bone steak (450 g)', p: 28.95, d: { es: 'Chuletón a la parrilla, a su gusto.', ca: 'Txuletó a la graella, al vostre gust.', en: 'Grilled T-bone, cooked as you like it.', fr: 'T-bone grillé, cuisson à votre goût.' } },
    { s: 'parrilla', n: 'Filete de ternera (200 g)', p: 28, d: { es: 'Tierno filete a la parrilla.', ca: 'Filet tendre a la graella.', en: 'Tender grilled beef fillet.', fr: 'Filet de bœuf tendre grillé.' } },
    { s: 'parrilla', n: 'Filete de cerdo', p: 18.95, d: { es: 'Tierna carne de cerdo a la parrilla.', ca: 'Carn de porc tendra a la graella.', en: 'Tender grilled pork.', fr: 'Porc tendre grillé.' } },
    { s: 'parrilla', n: 'Filete de pollo', p: 16.95, d: { es: 'Pechuga sazonada y asada, con patatas y mayonesa de ajo.', ca: 'Pit assaonat i rostit, amb patates i maionesa d’all.', en: 'Seasoned roast chicken breast, chips and garlic mayo.', fr: 'Blanc de poulet assaisonné, frites et mayonnaise à l’ail.' } },
    { s: 'parrilla', n: 'Parrillada', p: 24.95, d: { es: 'Secreto, pechuga de pollo, chorizo, hamburguesa y costillas de cerdo a la brasa con nuestra salsa BBQ.', ca: 'Secret, pit de pollastre, xoriço, hamburguesa i costelles de porc a la brasa amb la nostra salsa BBQ.', en: 'Secreto pork, chicken breast, chorizo, burger and pork ribs off the grill with our BBQ sauce.', fr: 'Secreto de porc, blanc de poulet, chorizo, steak haché et travers de porc grillés, notre sauce BBQ.' } },
    { s: 'parrilla', n: 'Baby back ribs', p: 18.95, d: { es: 'Costillas de cerdo a fuego lento con nuestra salsa BBQ, patatas fritas y ensalada de la casa.', ca: 'Costelles de porc a foc lent amb la nostra salsa BBQ, patates fregides i amanida de la casa.', en: 'Slow-cooked pork ribs in our own BBQ sauce, chips and house salad.', fr: 'Travers de porc cuits lentement, notre sauce BBQ, frites et salade maison.' } },

    { s: 'burgers', n: 'Burger', p: 11.95, p2: 14.95 },
    { s: 'burgers', n: 'Cheese burger', p: 12.5, p2: 15.5, d: { es: 'Con queso cheddar.', ca: 'Amb formatge cheddar.', en: 'With cheddar.', fr: 'Au cheddar.' } },
    { s: 'burgers', n: 'La Original', p: 13.5, p2: 16.5, d: { es: 'Cheddar, tomate, lechuga y pepinillo.', ca: 'Cheddar, tomàquet, enciam i cogombret.', en: 'Cheddar, tomato, lettuce and pickle.', fr: 'Cheddar, tomate, salade et cornichon.' } },
    { s: 'burgers', n: 'Chicken burger', p: 13.5, p2: 16.5, d: { es: 'Filete de pollo rebozado, tomate, lechuga y mayonesa.', ca: 'Filet de pollastre arrebossat, tomàquet, enciam i maionesa.', en: 'Breaded chicken fillet, tomato, lettuce and mayo.', fr: 'Filet de poulet pané, tomate, salade et mayonnaise.' } },
    { s: 'burgers', n: 'Texas burger', p: 14.5, p2: 17.5, d: { es: 'Cheddar, beicon, cebolla frita y nuestra salsa BBQ.', ca: 'Cheddar, bacó, ceba fregida i la nostra salsa BBQ.', en: 'Cheddar, bacon, fried onion and our BBQ sauce.', fr: 'Cheddar, bacon, oignon frit et notre sauce BBQ.' } },
    { s: 'burgers', n: 'Pepper burger', p: 13.95, p2: 16.95, d: { es: 'Con salsa de pimienta.', ca: 'Amb salsa de pebre.', en: 'With pepper sauce.', fr: 'Sauce au poivre.' } },
    { s: 'burgers', n: 'Roquefort burger', p: 13.95, p2: 16.95, d: { es: 'Con salsa de roquefort.', ca: 'Amb salsa de rocafort.', en: 'With Roquefort sauce.', fr: 'Sauce au roquefort.' } },
    { s: 'burgers', n: 'Mushroom burger', p: 13.95, p2: 16.95, d: { es: 'Con salsa de champiñones.', ca: 'Amb salsa de xampinyons.', en: 'With mushroom sauce.', fr: 'Sauce aux champignons.' } },
    { s: 'burgers', n: 'Chili cheese burger', p: 15.5, p2: 18.5, hot: 1, d: { es: 'Con chili con carne y queso rallado.', ca: 'Amb chili amb carn i formatge ratllat.', en: 'With chili con carne and grated cheese.', fr: 'Chili con carne et fromage râpé.' } },
    { s: 'burgers', n: 'Hamburguesa vegetal', p: 13.95, p2: 16.95, d: { es: 'Con beicon… ¡es broma! Hecha con verduras, con cheddar, tomate, lechuga y cebolla cruda.', ca: 'Amb bacó… és broma! Feta amb verdures, amb cheddar, tomàquet, enciam i ceba crua.', en: 'With bacon… just kidding! Made with vegetables, with cheddar, tomato, lettuce and raw onion.', fr: 'Au bacon… on plaisante ! Aux légumes, avec cheddar, tomate, salade et oignon cru.' } },
    { s: 'burgers', n: 'The Big One', p: 19.95, hot: 1, d: { es: 'Hamburguesa doble, chili con carne, queso y aros de cebolla.', ca: 'Hamburguesa doble, chili amb carn, formatge i anelles de ceba.', en: 'Double burger, chili con carne, cheese and onion rings.', fr: 'Burger double, chili con carne, fromage et rondelles d’oignon.' } },

    { s: 'fajitas', n: 'Pollo', nn: { ca: 'Pollastre', en: 'Chicken', fr: 'Poulet' }, p: 16.95 },
    { s: 'fajitas', n: 'Carne de ternera', nn: { ca: 'Vedella', en: 'Beef', fr: 'Bœuf' }, p: 17.95 },
    { s: 'fajitas', n: 'Verduras', nn: { ca: 'Verdures', en: 'Vegetables', fr: 'Légumes' }, p: 15.95 },
    { s: 'fajitas', n: 'Chili con carne', p: 16.95, hot: 1 },
    { s: 'fajitas', n: 'Salmón', nn: { ca: 'Salmó', en: 'Salmon', fr: 'Saumon' }, p: 17.95 },

    { s: 'ensaladas', n: 'Ensalada clásica', nn: { ca: 'Amanida clàssica', en: 'Classic salad', fr: 'Salade classique' }, p: 8.25, d: { es: 'Hojas frescas, tomate, pepino, cebolla, pimiento rojo y aliño casero.', ca: 'Fulles fresques, tomàquet, cogombre, ceba, pebrot vermell i amaniment casolà.', en: 'Fresh leaves, tomato, cucumber, onion, red pepper and house dressing.', fr: 'Jeunes pousses, tomate, concombre, oignon, poivron rouge et vinaigrette maison.' } },
    { s: 'ensaladas', n: 'Ensalada de atún', nn: { ca: 'Amanida de tonyina', en: 'Tuna salad', fr: 'Salade au thon' }, p: 9.95, d: { es: 'Atún sobre hojas frescas, tomate, pepino, cebolla, olivas y aliño casero.', ca: 'Tonyina sobre fulles fresques, tomàquet, cogombre, ceba, olives i amaniment casolà.', en: 'Tuna on fresh leaves, tomato, cucumber, onion, olives and house dressing.', fr: 'Thon sur jeunes pousses, tomate, concombre, oignon, olives et vinaigrette maison.' } },
    { s: 'ensaladas', n: 'Ensalada César con pollo', nn: { ca: 'Amanida Cèsar amb pollastre', en: 'Chicken Caesar salad', fr: 'Salade César au poulet' }, p: 12.95, d: { es: 'Hojas crujientes, parmesano fresco, picatostes de ajo y nuestra salsa César.', ca: 'Fulles cruixents, parmesà fresc, crostons d’all i la nostra salsa Cèsar.', en: 'Crisp leaves, fresh parmesan, garlic croutons and our Caesar dressing.', fr: 'Salade croquante, parmesan frais, croûtons à l’ail et notre sauce César.' } },
    { s: 'ensaladas', n: 'Cóctel de gambas', nn: { ca: 'Còctel de gambes', en: 'Prawn cocktail', fr: 'Cocktail de crevettes' }, p: 10.5, d: { es: 'Gambas con lechuga iceberg y nuestra salsa rosa.', ca: 'Gambes amb enciam iceberg i la nostra salsa rosa.', en: 'Prawns with iceberg lettuce and our Marie Rose sauce.', fr: 'Crevettes, iceberg et notre sauce cocktail.' } },

    { s: 'mas', n: 'Pinchos de pollo satay', p: 16.95, hot: 1, d: { es: 'Pechuga con salsa de cacahuete, pepinillos, pan de gambas y patatas fritas.', ca: 'Pit amb salsa de cacauet, cogombrets, pa de gambes i patates fregides.', en: 'Chicken skewers in peanut sauce, pickles, prawn crackers and chips.', fr: 'Brochettes de poulet sauce cacahuète, cornichons, chips de crevette et frites.' } },
    { s: 'mas', n: 'Escalope de cerdo', p: 15.5, d: { es: 'Chuletas de cerdo empanadas con guisantes y patatas fritas.', ca: 'Costelles de porc arrebossades amb pèsols i patates fregides.', en: 'Breaded pork chops with peas and chips.', fr: 'Côtelettes de porc panées, petits pois et frites.' } },
    { s: 'mas', n: 'Salmón al estilo Texas', p: 19.95, d: { es: 'Filete de salmón sazonado con pico de gallo y arroz.', ca: 'Filet de salmó assaonat amb pico de gallo i arròs.', en: 'Seasoned salmon fillet with pico de gallo and rice.', fr: 'Pavé de saumon assaisonné, pico de gallo et riz.' } },
    { s: 'mas', n: 'Texas chili con carne', p: 15.5, hot: 1, d: { es: 'Nuestra receta picante con crema, cheddar rallado, guacamole y arroz.', ca: 'La nostra recepta picant amb crema, cheddar ratllat, guacamole i arròs.', en: 'Our spicy recipe with sour cream, grated cheddar, guacamole and rice.', fr: 'Notre recette épicée, crème, cheddar râpé, guacamole et riz.' } },

    { s: 'extras', n: 'Salsas', nn: { ca: 'Salses', en: 'Sauces', fr: 'Sauces' }, p: 2.95, d: { es: 'Pimienta, champiñones, roquefort o cacahuete. Por ración.', ca: 'Pebre, xampinyons, rocafort o cacauet. Per ració.', en: 'Pepper, mushroom, Roquefort or peanut. Per portion.', fr: 'Poivre, champignons, roquefort ou cacahuète. La portion.' } },
    { s: 'extras', n: 'Extras', p: 4, d: { es: 'Mazorca de maíz, patata asada, patatas fritas o champiñones fritos. Por ración.', ca: 'Panotxa, patata al forn, patates fregides o xampinyons fregits. Per ració.', en: 'Corn on the cob, baked potato, chips or fried mushrooms. Per portion.', fr: 'Épi de maïs, pomme de terre au four, frites ou champignons frits. La portion.' } }
  ]
};
