import { CardTranslation } from '@/app/i18n/cards'

/** The Spanish texts of every card, by id (docs/PLAN.md, section 7.6). */
export const CARDS_ES: Record<string, CardTranslation> = {
  'abyssal-glutton': {
    name: 'Glotón del Abismo',
    text: 'Cuando muere cualquier otro aliado: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    flavor: 'Siempre tiene hambre. Siempre.',
    ability: { name: 'Devorar', text: 'Destruí un aliado enemigo cuyo costo sea menor que la mitad de su ataque.' }
  },
  'acolyte-of-spirits': {
    name: 'Acólito de los Espíritus',
    text: 'Al entrar: tu héroe se cura 2 por cada aliado en tu pila (hasta 12).'
  },
  'acolyte-of-the-senate': {
    name: 'Acólito del Senado',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Oráculo tuyo. Al empezar cada fase: tu héroe se cura 2.'
  },
  'ada-copperwick': {
    name: 'Ada Copperwick',
    text: 'Plano Maestro (4): poné en juego un artefacto de tu mazo a elección, sin pagar su costo, y mezclá tu mazo. Cuando entra otro aliado tuyo, gana +1 de ataque.',
    flavor: 'La magia es ingeniería que nadie explicó todavía.',
    ability: {
      name: 'Plano Maestro',
      text: 'Poné en juego un artefacto de tu mazo a elección, sin pagar su costo, y mezclá tu mazo.'
    }
  },
  'adas-blueprint-vault': {
    name: 'Bóveda de Planos de Ada',
    text: 'Al empezar cada fase: tus artefactos con usos ganan 1 uso.'
  },
  'adas-strike': {
    name: 'Golpe de Ada',
    text: 'Hacé 3 de daño a un slot enemigo por cada artefacto tuyo, y robá una carta.',
    flavor: 'Medido dos veces, golpeado una.'
  },
  'adrenal-pump': {
    name: 'Bomba de Adrenalina',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque. Cuando muere, tu héroe gana 2 de energía.'
  },
  'aegis-of-rage': {
    name: 'Égida de la Ira',
    text: 'Tu héroe se cura 3 por cada aliado enemigo. Instantánea.',
    flavor: 'Cuanto más furioso el golpe, más fuerte el escudo.'
  },
  'aegis-of-the-first-fire': {
    name: 'Égida del Primer Fuego',
    text: 'Tu arma gana +3 de durabilidad. Robá una carta.',
    flavor: 'El primer fuego todavía protege a sus hijos.'
  },
  'airship-of-brass': {
    name: 'Dirigible de Latón',
    text: 'Al entrar: si tenés otra Aeronave, robá una carta. Al empezar cada fase: tu héroe se cura 2.'
  },
  'alchemist-of-the-clocktower': {
    name: 'Alquimista de la Torre del Reloj',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Inventor tuyo.'
  },
  'aldrics-beacon': {
    name: 'Faro de Aldric',
    text: 'Al empezar cada fase: tus Magos se curan 2 y ganan +1 de ataque. (3 usos)'
  },
  'altar-of-lost-time': {
    name: 'Altar del Tiempo Perdido',
    text: 'Todo daño que reciben tus Aeronaves es 2 menor.',
    flavor: 'Ofrendas a horas que nunca existieron.'
  },
  'altar-of-pistons': {
    name: 'Altar de Pistones',
    text: 'Al empezar cada fase: si tenés 3 artefactos o más, tu héroe gana 2 de energía.',
    flavor: 'Ofrendas de aceite al dios de las máquinas.'
  },
  'altar-of-the-hawk': {
    name: 'Altar del Halcón',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía.',
    flavor: 'Las plumas que se dejan acá nunca se pierden.'
  },
  'altar-of-the-shieldwall': {
    name: 'Altar del Muro de Escudos',
    text: 'Cuando el ataque de un aliado enemigo golpea a tu héroe: ese aliado recibe 3 de daño. (3 usos)'
  },
  'altar-of-the-sun-temple': {
    name: 'Altar del Templo del Sol',
    text: 'Al empezar cada fase: hacé 2 de daño de luz al héroe enemigo. (4 usos)'
  },
  'amber-eyed-blessing': {
    name: 'Bendición de Ojos de Ámbar',
    text: 'Tu héroe se cura 3 por cada aliado tuyo.',
    flavor: 'Los viejos espíritus miran con ojos de ámbar.'
  },
  'amber-eyed-wolf-pup': {
    name: 'Lobezno de Ojos de Ámbar',
    text: 'Al entrar: un aliado enemigo al azar queda como tu Presa.',
    flavor: 'Sus ojos brillan antes que sus dientes.'
  },
  'ancestral-sap': {
    name: 'Savia Ancestral',
    text: 'Un aliado tuyo gana +10 de vida.',
    flavor: 'Los árboles más viejos todavía comparten.'
  },
  'arcane-familiar': { name: 'Familiar Arcano', flavor: 'Un amigo hecho de pura luz de estrellas.' },
  'arcane-mine': {
    name: 'Mina Arcana',
    text: 'Cuando se invoca un aliado enemigo: hacele 3 de daño arcano y congelalo.',
    flavor: 'Pisá suave. Leé las runas. Tarde.'
  },
  'arcane-runecarver': {
    name: 'Tallarrunas Arcano',
    text: 'Al empezar cada fase: hacé 1 de daño arcano, más tu poder mágico, a un aliado enemigo al azar.'
  },
  'archmages-staff': {
    name: 'Bastón del Archimago',
    text: 'Poder mágico +2. Al equiparlo: robá el primer hechizo de tu mazo.'
  },
  'argos-the-silver-hound': {
    name: 'Argos, el Sabueso Plateado',
    text: 'Al entrar: tu arma gana +1 de ataque y +1 de durabilidad.'
  },
  'armored-dune-worm': {
    name: 'Gusano Acorazado de las Dunas',
    text: 'Al entrar: destruí una trampa del rival.',
    flavor: 'Las lanzas se doblan en sus anillos.'
  },
  'armored-fortune-teller': {
    name: 'Adivina Acorazada',
    text: 'Después de recibir daño: tu héroe se cura 2.',
    flavor: 'Leyó el futuro y se compró una armadura.'
  },
  'armored-fury': {
    name: 'Furia Acorazada',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea. Si un aliado enemigo es tu Presa, robá una carta.',
    flavor: 'Furia, ahora blindada.'
  },
  'armored-mace': {
    name: 'Maza Acorazada',
    text: 'Con Panoplia, los ataques de tu héroe con ella aturden al aliado que golpean.',
    flavor: 'Sutil, no es.'
  },
  'armored-sabotage': {
    name: 'Sabotaje Acorazado',
    text: 'Destruí un arma, una armadura o un adjunto enemigo, a elección. Rápida.',
    flavor: 'Toda armadura tiene una correa floja.'
  },
  'armored-tower-shield': {
    name: 'Escudo Torre Acorazado',
    text: 'Todo daño que reciben tus aliados con Protector es 1 menor.',
    flavor: 'Un muro que se puede llevar.'
  },
  'ash-covered-stonethrower': {
    name: 'Lanzapiedras Cubierto de Ceniza',
    text: 'Al empezar cada fase: hacé 2 de daño de tierra a cada aliado enemigo que sea tu Presa.',
    flavor: 'El volcán le enseñó a lanzar.'
  },
  'ash-terror': {
    name: 'Bestia de Ceniza',
    text: 'Al entrar: hace 4 de daño de fuego a cada otro aliado, también a los tuyos.',
    flavor: 'Nace gritando, y todo lo que está cerca también.'
  },
  'ashen-hierophant': {
    name: 'Hierofante Ceniciento',
    text: 'Al morir: tus Cultistas ganan +1 de ataque y +1 de vida. Al entrar: envenená al héroe enemigo (3).'
  },
  'ashen-pyromancer': {
    name: 'Piromante Ceniciento',
    text: 'Al entrar: quemá a todos los aliados enemigos (2) y a tu héroe (2).'
  },
  'ashen-skeleton': {
    name: 'Esqueleto Ceniciento',
    text: 'Cuando entra otro No-muerto tuyo: gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'ashen-stasis': {
    name: 'Estasis Cenicienta',
    text: 'Destruí a un aliado enemigo con 4 de vida o menos. Rápida.',
    flavor: 'Congelado en ceniza, como las ciudades antiguas.'
  },
  'astral-bolt': {
    name: 'Rayo Astral',
    text: 'Hacé 6 de daño de arcano a un slot enemigo. Rápida.',
    flavor: 'Una estrella fugaz, con puntería.'
  },
  'astral-daze': { name: 'Aturdimiento Astral', text: 'Congelá a todos los aliados enemigos con 5 de ataque o más.' },
  'astral-robe': {
    name: 'Túnica Astral',
    text: 'Al equiparla: devolvé a un aliado enemigo al azar a la mano de su dueño.',
    flavor: 'Tejida con el cielo nocturno, cosida con estrellas.'
  },
  'augmented-brute': { name: 'Bruto Aumentado', text: 'Sus ataques hacen 3 de daño más mientras está Mejorado.' },
  'augmented-thug': {
    name: 'Matón Aumentado',
    text: 'Al entrar: tus otros Sicarios ganan Sigilo.',
    flavor: 'Más cromo que cerebro.'
  },
  'augur-of-the-laurel': { name: 'Augur del Laurel', text: 'Al empezar cada fase: los aliados a su lado se curan 2.' },
  'axe-of-the-vanguard': {
    name: 'Hacha de la Vanguardia',
    text: 'Cuando tu héroe ataca a un aliado con ella: cada aliado a su lado recibe 2 de daño.',
    flavor: 'La primera en golpear, la última en mellarse.'
  },
  'back-alley-clinic': {
    name: 'Clínica Clandestina',
    text: 'Robá el primer implante de tu mazo y robá una carta.'
  },
  'back-alley-ripper': {
    name: 'Destripador del Callejón',
    text: 'Al atacar a un aliado con un adjunto: robá una carta.'
  },
  'balloon-scout-of-pistons': {
    name: 'Globo Explorador de Pistones',
    text: 'Cuando entra otra Aeronave tuya: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño a un slot enemigo.' }
  },
  'balloon-scout-of-the-foundry': {
    name: 'Globo Explorador de la Fundición',
    text: 'Al entrar: tu héroe se cura 7. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 8 de daño a un slot enemigo.' }
  },
  'banshee-of-grace': { name: 'Banshee de la Gracia', text: 'Al morir: tus aliados se curan 6.' },
  'banshee-of-light': {
    name: 'Banshee de la Luz',
    text: 'Cuando entra otro No-muerto tuyo: gana +1 de ataque y +1 de vida.'
  },
  'banshee-of-shadows': {
    name: 'Banshee de las Sombras',
    text: 'Al entrar: desterrá las últimas 3 cartas de la pila de descarte enemiga.'
  },
  'banshee-of-the-last-hour': {
    name: 'Banshee de la Última Hora',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada 3 cartas de tu pila.'
  },
  'barrage-of-chrome': {
    name: 'Andanada de Cromo',
    text: 'Hacé 3 de daño de rayo a un slot enemigo por cada aliado Mejorado tuyo.',
    flavor: 'Las balas cuestan plata. El cromo, más.'
  },
  'barrage-of-the-ambush': {
    name: 'Andanada de la Emboscada',
    text: 'Hacé 6 de daño a un aliado enemigo y 3 a cada aliado a su lado.',
    flavor: 'Los propios árboles disparan.'
  },
  'barrage-of-the-comet': {
    name: 'Andanada del Cometa',
    text: 'Hacé 5 de daño arcano a un slot enemigo. Si tenés poder mágico, robá una carta.',
    flavor: 'Pedirle deseos a una estrella fugaz rara vez termina así.'
  },
  'barrage-of-the-hawk': {
    name: 'Andanada del Halcón',
    text: 'Hacé 6 de daño de viento a un aliado enemigo. Rápida. Si muere, robá una carta.',
    flavor: 'El halcón llama y las flechas lo siguen.'
  },
  'battle-scarred-disarm': {
    name: 'Desarme Curtido',
    text: 'La armadura enemiga pierde 2 de durabilidad y el héroe enemigo recibe 3 de daño. Rápida.'
  },
  'battle-scarred-helm': {
    name: 'Yelmo Curtido',
    text: 'Todo daño que recibe tu héroe es 1 menor, pero tus aliados reciben 1 más.',
    flavor: 'Cada abolladura es una historia que sobrevivió.'
  },
  'battle-scarred-sentinel': { name: 'Centinela Curtido', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'battle-scarred-warplate': {
    name: 'Armadura de Guerra Curtida',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'Recuerda cada espada que fracasó.'
  },
  'beacon-of-mercy': {
    name: 'Faro de la Piedad',
    text: 'Cuando muere un aliado tuyo: tus otros aliados se curan 3. (4 usos)'
  },
  'binding-of-flame': {
    name: 'Atadura de Llamas',
    text: 'Congelá a un aliado enemigo y hacele 2 de daño de hielo.',
    flavor: 'Cadenas que queman mientras atan.'
  },
  'binding-of-lightning': {
    name: 'Atadura del Relámpago',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
    flavor: 'Cadenas que chispean y pican.'
  },
  'binding-of-ruin': {
    name: 'Atadura de la Ruina',
    text: 'Devolvé a un aliado tuyo a tu mano y robá una carta. Rápida.',
    flavor: 'Cadenas forjadas con cosas rotas.'
  },
  'binding-of-the-legion': {
    name: 'Atadura de la Legión',
    text: 'Aturdí a un aliado enemigo. Tus Legionarios ganan +1 de ataque y +1 de vida. Rápida.',
    flavor: 'Los escudos se cierran. No hay salida.'
  },
  'binding-of-the-moon': {
    name: 'Atadura de la Luna',
    text: 'Aturdí a todos los aliados enemigos congelados. Rápida.',
    flavor: 'La luz de luna es más suave que las cadenas, y más fuerte.'
  },
  'binding-of-the-pack': { name: 'Atadura de la Jauría', text: 'Congelá a un aliado enemigo durante 3 fases.' },
  'blast-of-lightning': {
    name: 'Estallido del Relámpago',
    text: 'Hacé 4 de daño de rayo a un aliado enemigo. Rápida.',
    flavor: 'El trueno llega un poco tarde.'
  },
  'blast-of-the-arcanum': {
    name: 'Estallido del Arcano',
    text: 'Hacé 9 de daño arcano a un slot enemigo. Si el aliado de ahí está congelado, hacé 18.',
    flavor: 'La biblioteca tenía una estricta regla de silencio.'
  },
  'blast-of-the-jungle': {
    name: 'Estallido de la Jungla',
    text: 'Hacé 10 de daño de tierra a un slot enemigo, +2 por cada Fiera tuya.'
  },
  'blast-of-thorns': {
    name: 'Estallido de Espinas',
    text: 'Hacé 2 de daño a un slot enemigo por cada punto de durabilidad de tu armadura (hasta 10).',
    flavor: 'El bosque devuelve los golpes.'
  },
  'blazing-daze': {
    name: 'Aturdimiento Ardiente',
    text: 'Aturdí a un aliado enemigo por dos fases. El héroe enemigo pierde 2 de energía. Rápida.',
    flavor: 'Demasiado brillante para pensar.'
  },
  'blazing-dragon': {
    name: 'Dragón Ardiente',
    text: 'Al entrar: hacé 1 de daño de fuego al héroe enemigo por cada Draco tuyo. Al morir: hacé 1 de daño de fuego a todos los aliados enemigos.'
  },
  'blazing-fireball': {
    name: 'Bola de Fuego Ardiente',
    text: 'Quemá un slot enemigo (4).',
    flavor: 'La sutileza nunca fue la idea.'
  },
  'blazing-strike': {
    name: 'Golpe Ardiente',
    text: 'Hacé 4 de daño de fuego a un slot enemigo y quemalo (2).',
    flavor: 'Primero el fuego, preguntas nunca.'
  },
  'blessed-deserter': { name: 'Desertor Bendito', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'blessed-halo': {
    name: 'Halo Bendito',
    text: 'Al equiparlo: tu héroe se cura 2 por cada aliado tuyo.',
    flavor: 'Más pesado de lo que parece, más liviano de lo que se siente.'
  },
  'blessed-idol': {
    name: 'Ídolo Bendito',
    text: 'Al empezar cada fase: tus aliados ganan +1 de vida. (3 usos)',
    flavor: 'Tocado por mil peregrinos.'
  },
  'blessed-secret': {
    name: 'Secreto Bendito',
    text: 'Robá una carta y tu héroe se cura 3.',
    flavor: 'Los dioses también guardan secretos.'
  },
  bloodclock: {
    name: 'Reloj de Sangre',
    text: 'Al empezar cada fase: tu héroe recibe 2 de daño de sombra y robá una carta.',
    flavor: 'Cada tic cuesta una gota. Cada gota compra un secreto.'
  },
  'blood-pact': {
    name: 'Pacto de Sangre',
    text: 'Tu héroe recibe 5 de daño de sombra. Ganás 3 Chronos en esta fase. Instantánea.'
  },
  'bloodied-echo': {
    name: 'Eco Ensangrentado',
    text: 'El último aliado tuyo que murió vuelve al juego. Lenta.',
    flavor: 'La batalla resuena mucho después de terminar.'
  },
  'bloodied-glaive': {
    name: 'Guja Ensangrentada',
    text: 'Cuando tu héroe ataca con ella: si tu pila tiene 10 cartas o más, tu héroe se cura 3.',
    flavor: 'La limpiaron una vez. Nunca más.'
  },
  'bloodied-helm': {
    name: 'Yelmo Ensangrentado',
    text: 'Al equiparlo: tus Colosos se curan 4 y ganan +1 de ataque.',
    flavor: 'No toda la sangre es de quien lo lleva.'
  },
  'bloodied-hitman': {
    name: 'Asesino a Sueldo Ensangrentado',
    text: 'Al entrar: tu héroe recibe 4 de daño de sombra y gana +4 de ataque.',
    flavor: 'Cobra por cicatriz.'
  },
  'bloodsworn-cutthroat': { name: 'Degollador Juramentado', text: 'Cuando mata a un aliado: tu héroe se cura 4.' },
  'bodyguard-of-the-vanguard': {
    name: 'Guardaespaldas de la Vanguardia',
    text: 'Cuando entra otro Sicario tuyo: gana Protector.',
    flavor: 'Cada golpe que te apuntan le llega primero a él.'
  },
  'bog-warden': {
    name: 'Vigía de la Ciénaga',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'El pantano se queda con lo que toma.',
    ability: { name: 'Hundir', text: 'Un aliado enemigo pierde todo su ataque.' }
  },
  'boilerguard-of-gears': {
    name: 'Guardacalderas de Engranajes',
    text: 'Al empezar cada fase: tus otros Autómatas se curan 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'bold-blessing': {
    name: 'Bendición Audaz',
    text: 'Tu héroe se cura 10. Robá una carta por cada aliado Protector tuyo.',
    flavor: 'La fortuna favorece a los ruidosos.'
  },
  'bold-gust': { name: 'Ráfaga Audaz', text: 'Al entrar: devolvé un aliado enemigo al azar a la mano de su dueño.' },
  'bold-rust': {
    name: 'Herrumbre Audaz',
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Tu héroe recibe 3 de daño de sombra. Rápida.'
  },
  'bold-traveler-cloak': {
    name: 'Capa de Viajero Audaz',
    text: 'Cuando se activa una trampa tuya: tu héroe se cura 4.',
    flavor: 'Vio todas las eras y se quejó en cada una.'
  },
  'bone-collector': {
    name: 'Coleccionista de Huesos',
    text: 'Al entrar: el último aliado de tu pila vuelve a tu mano.'
  },
  'bone-knight-of-dying-stars': {
    name: 'Caballero de Hueso de las Estrellas Moribundas',
    text: 'Cuando entra otro No-muerto tuyo: tu héroe se cura 2.'
  },
  'bone-knight-of-the-void': {
    name: 'Caballero de Hueso del Vacío',
    text: 'Al morir: si tu pila tiene 8 cartas o más, invocá un Esqueleto Alzado.',
    flavor: 'Juró lealtad a un reino que ya no existe.'
  },
  'bone-rattler': { name: 'Sonajero de Huesos', text: 'Al morir: envenená al héroe enemigo (3).' },
  'bone-shards': {
    name: 'Esquirlas de Hueso',
    text: 'Consumir 3 (desterrá 3 cartas de tu pila). Hacé 6 de daño de sombra a un slot enemigo.'
  },
  'bone-snare': {
    name: 'Cepo de Hueso',
    text: 'Adjuntá a un aliado enemigo: no puede atacar ni usar su habilidad.',
    flavor: 'Cuanto más se resiste, más aprieta.'
  },
  'borrowed-hour-of-grace': {
    name: 'Hora Prestada de la Gracia',
    text: 'Tu héroe gana 1 de energía por cada artefacto tuyo. Instantánea.',
    flavor: 'Una hora que no tenías, regalada.'
  },
  'borrowed-hour-of-lost-time': {
    name: 'Hora Prestada del Tiempo Perdido',
    text: 'Tu héroe gana 3 de energía. Instantánea.',
    flavor: 'Prestada de un día que nunca llegó.'
  },
  'bounty-hunter-of-borrowed-hours': {
    name: 'Cazarrecompensas de las Horas Prestadas',
    text: 'Al entrar: robá una carta si el rival tiene más aliados que vos.',
    flavor: 'Cobra deudas en minutos y segundos.'
  },
  'bounty-hunter-of-flame': {
    name: 'Cazarrecompensas de Llamas',
    text: 'Al entrar: quemá a todos los aliados enemigos (1).',
    flavor: 'Se busca: cualquiera que arda.'
  },
  'bounty-hunter-of-the-long-road': {
    name: 'Cazarrecompensas del Largo Camino',
    text: 'Al entrar: destruí la armadura enemiga.'
  },
  'bounty-hunter-of-the-rift': {
    name: 'Cazarrecompensas de la Grieta',
    text: 'Al entrar: tu héroe se cura 5. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño de tiempo a un slot enemigo.' }
  },
  'bounty-hunter-of-the-silent-trail': {
    name: 'Cazarrecompensas del Rastro Silencioso',
    text: 'Al morir: envenená a un aliado enemigo al azar (3).'
  },
  'bracers-of-the-ambush': {
    name: 'Brazales de la Emboscada',
    text: 'Cuando el ataque de un aliado enemigo golpea a tu héroe: ese aliado pierde 2 de ataque.',
    flavor: 'Silenciosos en la muñeca, ruidosos en la cacería.'
  },
  'bramble-of-the-wanderer': { name: 'Zarza del Errante', text: 'Al morir: robá el primer Elemental de tu mazo.' },
  'brand-of-the-comet': {
    name: 'Estigma del Cometa',
    text: 'Adjuntala a un aliado enemigo: no puede usar su habilidad y tiene -1 de ataque.'
  },
  'brass-bulwark': {
    name: 'Baluarte de Latón',
    text: 'Al empezar cada fase: si tenés 3 artefactos o más, gana +1 de durabilidad.'
  },
  'brass-golem-of-coal': {
    name: 'Gólem de Latón del Carbón',
    text: 'Cuando entra otro Autómata tuyo: gana +1 de ataque y +1 de vida.'
  },
  'brass-golem-of-gears': {
    name: 'Gólem de Latón de Engranajes',
    text: 'Al entrar: si tenés 2 artefactos o más, gana Protector y +3 de vida.',
    flavor: 'Diez mil engranajes, un propósito.'
  },
  'brass-steam-knight': { name: 'Caballero de Vapor de Latón', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'brassmaws-bolt': {
    name: 'Rayo de Bocabronce',
    text: 'Hacé 6 de daño sónico a un slot enemigo, y tus artefactos con usos ganan 1 uso.'
  },
  'brassmaws-gadgeteer': {
    name: 'Artilugista de Bocabronce',
    text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2. Al morir: invocá un Dron de Engranajes.'
  },
  'brave-fortune-teller': {
    name: 'Adivina Valiente',
    text: 'Después de recibir daño: tus aliados se curan 2.',
    flavor: 'Leyó su propia muerte y se rió.'
  },
  'brave-secret': {
    name: 'Secreto Valiente',
    text: 'Robá 2 cartas.',
    flavor: 'El coraje es más fácil cuando nadie sabe.'
  },
  'brave-squire': {
    name: 'Escudero Valiente',
    text: 'Al entrar: tu arma gana +2 de ataque.',
    flavor: 'Demasiado joven para conocer el miedo, lo bastante grande para enfrentarlo.'
  },

  'brazier-of-the-wanderer': {
    name: 'Brasero del Errante',
    text: 'Al empezar cada fase: hacé 1 de daño al héroe enemigo. (3 usos)'
  },
  'breastplate-of-rage': {
    name: 'Peto de la Ira',
    text: 'Al equiparla: tus aliados ganan +1 de ataque esta fase.',
    flavor: 'Forjado al rojo, llevado más al rojo todavía.'
  },
  'brother-ossian': {
    name: 'Hermano Osián',
    text: 'Al terminar cada fase: hacé 2 de daño de sombra a un aliado enemigo al azar y tu héroe se cura 2.',
    flavor: 'Siguió rezando después de morir. Por costumbre.'
  },
  'caelus-the-usurper': {
    name: 'Caelus el Usurpador',
    text: 'Tributo (5): el rival pierde 1 de capacidad de Cronos y vos la ganás. Al empezar cada fase, si tu héroe tiene un arma, tus aliados ganan +1 de ataque.',
    flavor: 'Robó una corona de una Roma que nunca existió, y quiere la verdadera.',
    ability: { name: 'Tributo', text: 'El rival pierde 1 de capacidad de Cronos y vos la ganás.' }
  },
  'caeluss-axe': {
    name: 'Hacha de Caelus',
    text: 'Cuando un ataque de tu héroe con ella mata a un aliado: tus Colosos ganan +1 de ataque y +1 de vida.',
    flavor: 'Arrebatada a un rey. Conservada por un usurpador.'
  },
  'caeluss-chimera': {
    name: 'Quimera de Caelus',
    text: 'Cuando entra otro Coloso tuyo: gana +2 de ataque y +2 de vida. Al atacar: tu héroe se cura 2.'
  },
  'camouflaged-brontosaur': {
    name: 'Brontosaurio Camuflado',
    text: 'Al atacar a un aliado: hacé 2 de daño a los aliados a su lado.'
  },
  'campfire-tales': {
    name: 'Relatos de Fogata',
    text: 'Tus aliados se curan 4. Robá una carta.',
    flavor: 'Cada cicatriz tiene una historia que vale contar.'
  },
  'carrion-feaster': {
    name: 'Devorador de Carroña',
    text: 'Cuando muere un aliado enemigo: ganás 1 Cronos esta fase.'
  },
  'cave-bear-of-the-hunt-moon': {
    name: 'Oso Cavernario de la Luna de Caza',
    text: 'Sus ataques a una Presa hacen 4 de daño más.',
    flavor: 'Solo se despierta bajo la luna de caza.'
  },
  'centurion-of-steel': {
    name: 'Centurión de Acero',
    text: 'Cuando entra otro Legionario tuyo: gana +1 de ataque y +1 de vida. Al atacar: gana +1 de ataque.'
  },
  'centurions-gladius': {
    name: 'Gladius del Centurión',
    text: 'Panoplia (tu héroe tiene arma y armadura): sus ataques hacen 2 de daño más.'
  },
  'centurions-resolve': {
    name: 'Temple del Centurión',
    text: 'Adjuntá a un aliado tuyo: gana +1 de ataque y +2 de vida, y todo daño que recibe es 2 menor.',
    flavor: 'Aguanten. Aguanten. Aguanten.'
  },
  'chancellor-brassmaw': {
    name: 'Canciller Bocabronce',
    text: 'Decreto de Hierro (4): aturdí a un aliado enemigo y hacele 8 de daño de sónico. Al final de cada fase, tu héroe se cura 1 por cada artefacto tuyo (hasta 3).',
    flavor: 'Es dueño de las fábricas, de la ciudad y de casi todos los relojes.',
    ability: { name: 'Decreto de Hierro', text: 'Aturdí a un aliado enemigo y hacele 8 de daño de sónico.' }
  },
  'charm-of-the-vanguard': {
    name: 'Dije de la Vanguardia',
    text: 'Adjuntalo a un aliado tuyo: gana +1 de ataque, +4 de vida y Protector. Cuando muere, robá una carta.'
  },
  'chief-mechanic': {
    name: 'Jefa de Mecánicos',
    text: 'Al entrar: tus artefactos con usos ganan 1 uso.'
  },
  'chimera-of-the-shieldwall': { name: 'Quimera del Muro de Escudos', text: 'Al morir: tu héroe se cura 8.' },
  'chimera-of-the-sun-temple': {
    name: 'Quimera del Templo del Sol',
    text: 'Al morir: tus otros aliados ganan +1 de ataque. Al empezar cada fase: tu héroe se cura 2.'
  },
  'chrome-medic': { name: 'Médica de Cromo', text: 'Al entrar: tus aliados Mejorados ganan Represalia.' },
  'chrome-skeleton': {
    name: 'Esqueleto de Cromo',
    text: 'Adjuntalo a un aliado tuyo: gana +3 de ataque, +6 de vida y Protector.'
  },
  chronometer: { name: 'Cronómetro', text: 'Al empezar cada fase: si tenés 4 artefactos o más, robá una carta.' },
  'circlet-of-flame': {
    name: 'Diadema de Llamas',
    text: 'Al equiparla: tus Dracos ganan Vuelo.',
    flavor: 'Bajo ella, las ideas arden más fuerte.'
  },
  'circlet-of-mana': {
    name: 'Diadema de Maná',
    text: 'Poder mágico +1. Canalizar: cuando lanzás un hechizo, tu héroe se cura 2.',
    flavor: 'Zumba cuando hay hechizos cerca.'
  },
  'clan-moon': {
    name: 'Luna del Clan',
    text: 'Hasta el final de la fase siguiente: hacés 3 de daño más al héroe y a los aliados enemigos, y tus aliados reciben 3 menos.',
    flavor: 'Con luna llena, el clan caza como uno solo.'
  },
  'cleaver-of-the-vanguard': {
    name: 'Cuchilla de la Vanguardia',
    text: 'Cuando tu héroe ataca con ella: tu armadura gana +1 de durabilidad.',
    flavor: 'Primera en entrar al combate, primera en salir con trofeos.'
  },
  'cleaver-of-valor': {
    name: 'Cuchilla del Valor',
    text: 'Al equiparla: robá la primera armadura de tu mazo.',
    flavor: 'Coraje afilado hasta el filo.'
  },
  'clever-chrononaut': {
    name: 'Crononauta Astuto',
    text: 'Al empezar cada fase: tus otros Errantes se curan 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'clever-fortune-teller': { name: 'Adivina Astuta', flavor: 'Te vio venir. Te cobró de más.' },
  'clever-merchant': {
    name: 'Mercader Astuto',
    text: 'Al entrar: destruí el artefacto enemigo más caro.',
    flavor: 'Todo tiene precio. Incluso el tiempo.'
  },
  'clever-scroll': {
    name: 'Pergamino Astuto',
    text: 'Destruí el arma o la armadura enemiga, a elección. Rápida.',
    flavor: 'Leelo al revés para el hechizo de verdad.'
  },
  'cloak-of-the-quarry': {
    name: 'Capa de la Presa',
    text: 'Todo daño que reciben tus Cavernarios es 1 menor.',
    flavor: 'La presa nunca la ve venir.'
  },
  'cloaking-module': {
    name: 'Módulo de Camuflaje',
    text: 'Adjuntalo a un aliado tuyo: gana Sigilo, y lo recupera al empezar cada fase.'
  },
  'clock-of-dusk': {
    name: 'Reloj del Ocaso',
    text: 'Al empezar cada fase: el héroe enemigo pierde 1 de energía. (3 usos)'
  },
  'clock-of-embers': {
    name: 'Reloj de Brasas',
    text: 'Al empezar cada fase: el arma y la armadura enemigas pierden 1 de durabilidad cada una. (3 usos)'
  },
  'clockwork-assembler': {
    name: 'Ensamblador de Relojería',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada artefacto tuyo.'
  },
  'clockwork-deluge': {
    name: 'Diluvio del Reloj',
    text: 'Ningún aliado, tuyo ni del rival, puede atacar hasta el final de la fase siguiente.',
    flavor: 'Cuando llueve en la Grieta, todos esperan.'
  },
  'clockwork-hound-of-coal': {
    name: 'Sabueso Mecánico del Carbón',
    text: 'Al morir: robá el primer artefacto de tu mazo.'
  },
  'cobraskin-shroud': {
    name: 'Vendas de Piel de Cobra',
    text: 'Al equiparla: los dos jugadores pierden 1 de capacidad de Cronos, y robás una carta.',
    flavor: 'El veneno está en el tejido.'
  },
  'codebreaker-of-neon': {
    name: 'Descifradora de Neón',
    text: 'Al morir: tus Hackers ganan +1 de ataque y +1 de vida.'
  },
  'codebreaker-of-the-hawk': {
    name: 'Descifradora del Halcón',
    text: 'Al entrar: robá el primer Hacker de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'cog-drone': { name: 'Dron de Engranajes', flavor: 'Chico, leal y un poco humeante.' },
  'coldgaze-serpent': {
    name: 'Sierpe de Mirada Fría',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Una mirada, y el guardia más valiente se hace a un lado.',
    ability: { name: 'Mirada Fría', text: 'Un aliado enemigo pierde Protector y Represalia en esta fase.' }
  },
  'copper-glider': {
    name: 'Planeador de Cobre',
    text: 'Al entrar: invocá un Dron de Engranajes. Al morir: invocá un Dron de Engranajes.'
  },
  'copper-gyrocopter': {
    name: 'Girocóptero de Cobre',
    text: 'Al entrar: un artefacto tuyo al azar con usos gana 2 usos.',
    flavor: 'Casi siempre vuela. A veces aterriza a propósito.'
  },
  'counterstrike-mesh': {
    name: 'Malla de Contragolpe',
    text: 'Cuando el ataque de un aliado enemigo le pega a tu héroe: ese aliado es destruido.',
    flavor: 'Tocame y vas a ver.'
  },
  'courage-of-iron': {
    name: 'Coraje de Hierro',
    text: 'Un aliado tuyo gana +5 de ataque y recibe 3 de daño de sombra.',
    flavor: 'El hierro no se dobla. Vos tampoco.'
  },
  'courage-of-spirits': {
    name: 'Coraje de los Espíritus',
    text: 'Un aliado tuyo gana +2 de ataque en esta fase por cada aliado tuyo. Instantánea.',
    flavor: 'Los espíritus susurran: no huyas.'
  },
  'courage-of-the-ancestors': {
    name: 'Coraje de los Ancestros',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.',
    flavor: 'Ellos fueron valientes. Vos también.'
  },
  'courage-of-the-last-stand': {
    name: 'Coraje de la Última Defensa',
    text: 'Un aliado tuyo gana +3 de ataque esta fase, o +8 con Panoplia (tu héroe tiene arma y armadura). Instantánea.',
    flavor: 'No queda otro lugar adonde ir más que adelante.'
  },
  'courier-of-the-mainframe': {
    name: 'Mensajero del Servidor Central',
    text: 'Al atacar: el héroe enemigo pierde 1 de energía; si no tenía, hacele 3 de daño.'
  },
  'crawler-of-the-grave': {
    name: 'Reptante de la Tumba',
    text: 'Al entrar: si tu pila tiene 6 cartas o más, robá una carta.'
  },
  'creeping-shadow': {
    name: 'Sombra Reptante',
    text: 'Al morir: tu héroe recibe 2 de daño de sombra y robás 2 cartas.'
  },
  'crimson-moon': {
    name: 'Luna Carmesí',
    text: 'Al terminar cada fase: robá una carta. (3 usos)',
    flavor: 'Bajo una luna roja, los secretos sangran solos.'
  },
  'crook-of-the-ancestors': {
    name: 'Báculo de los Ancestros',
    text: 'Cuando tu héroe ataca con él: tu héroe se cura 2 por cada aliado enemigo congelado.'
  },
  'crooked-moon-wolf': {
    name: 'Lobo de la Luna Torcida',
    text: 'Al empezar cada fase: se cura 2.',
    flavor: 'Bajo una luna torcida, las heridas se cierran.'
  },
  'crystal-cockatrice': {
    name: 'Cocatriz de Cristal',
    text: 'Al entrar: robá una carta. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'crystal-wisp': {
    name: 'Fuego Fatuo de Cristal',
    text: 'Canalizar: cuando lanzás un hechizo, hacé 1 de daño de fuego a un aliado enemigo al azar.'
  },
  'curse-of-binding': {
    name: 'Maldición de Atadura',
    text: 'Adjuntalo a un aliado enemigo: al empezar cada fase, si tu pila tiene 10 cartas o más, aturdilo.'
  },
  'curse-of-frailty': {
    name: 'Maldición de Fragilidad',
    text: 'Adjuntalo a un aliado enemigo: pierde todas sus palabras clave.'
  },
  'curse-of-ruin': {
    name: 'Maldición de la Ruina',
    text: 'Adjuntalo a un aliado enemigo: cuando muere, el rival descarta una carta al azar.'
  },
  'cursebound-acolyte': { name: 'Acólito Maldito', text: 'Al entrar: robá la primera maldición de tu mazo.' },
  'cursed-idol': {
    name: 'Ídolo Maldito',
    text: 'Al empezar cada fase: cada héroe recibe 2 de daño de sombra. (5 usos)'
  },
  'cursed-lich': {
    name: 'Liche Maldito',
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida.'
  },
  'cursed-trap': {
    name: 'Trampa Maldita',
    text: 'Cuando se invoca un aliado enemigo: devolvelo a la mano de su dueño.',
    flavor: 'Quien la armó tampoco sobrevivió.'
  },
  'cutlass-of-the-long-road': {
    name: 'Alfanje del Largo Camino',
    text: 'Los ataques de tu héroe con ella hacen 3 de daño más a los aliados con Protector.',
    flavor: 'Cruzó más fronteras que los mapas.'
  },
  'cyber-hound-of-the-grid': {
    name: 'Cibersabueso de la Red',
    text: 'Al entrar: si tenés un aliado Mejorado, gana +2 de ataque y +2 de vida.',
    flavor: 'Olfatea los datos como si fueran sangre.'
  },
  'cyber-surgeon': {
    name: 'Cirujano Cibernético',
    text: 'Al entrar: gana +2 de ataque y +2 de vida por cada aliado Mejorado tuyo.'
  },
  'cyborg-champion': { name: 'Campeón Cíborg', text: 'Todo daño que recibe es 1 menor por cada aliado Mejorado tuyo.' },
  'cyclops-of-rage': {
    name: 'Cíclope de la Ira',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Coloso tuyo.'
  },
  'dahlia-thornrose': {
    name: 'Dalia Espinarrosa',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Cada enredadera del valle le responde.',
    ability: {
      name: 'Atadura de Espinas',
      text: 'Un aliado enemigo no puede atacar hasta el final de la fase siguiente.'
    }
  },
  'dark-whisperer': { name: 'Susurrador Oscuro', text: 'Al entrar: quitale 1 de energía al héroe enemigo y ganala.' },
  'data-siphon': {
    name: 'Sifón de Datos',
    text: 'Adjuntalo a un aliado tuyo: cada vez que ataca, robale 1 de energía al héroe enemigo.'
  },
  'data-transfer': {
    name: 'Transferencia de Datos',
    text: 'Robá la carta de arriba del mazo del rival.',
    flavor: 'Tus archivos, mi disco.'
  },
  'dawn-almanac': {
    name: 'Almanaque del Amanecer',
    text: 'Estudiar (2): robá una carta.',
    flavor: 'Cada amanecer agrega una página.',
    ability: { name: 'Estudiar', text: 'Robá una carta.' }
  },
  'dawn-sigil': {
    name: 'Sello del Alba',
    text: 'Al empezar cada fase: tus aliados se curan 4.',
    flavor: 'Ninguna noche ganó jamás. Este sello se encarga de eso.',
    ability: { name: 'Romper el Eclipse', text: 'Destruye todos los Sellos del Eclipse en juego.' }
  },
  'dawnbell-healer': { name: 'Sanadora de la Campana del Alba', text: 'Al atacar: tus aliados se curan 1.' },
  'dawnguard-paladin': {
    name: 'Paladín de la Guardia del Alba',
    text: 'Todo daño que reciben tus otros aliados Protectores es 1 menor.'
  },
  'dawnlight-sentinel': { name: 'Centinela de la Luz del Alba', text: 'Al terminar cada fase: se cura por completo.' },
  'dawns-hope': {
    name: 'Esperanza del Alba',
    text: 'Robá cartas hasta tener tantas como el rival (hasta 3). Si no robás ninguna, tu héroe se cura 6.',
    flavor: 'La hora más oscura es la que llega justo antes de la luz.'
  },
  'dawnwing-griffin': {
    name: 'Grifo Ala del Alba',
    text: 'Al entrar: tu héroe y tus aliados pierden su veneno y su quemadura.'
  },
  'deathless-sentinel': { name: 'Centinela Inmortal', text: 'Al morir: Consumir 3; si lo hacés, vuelve al juego.' },
  'decoy-of-the-undercity': {
    name: 'Señuelo de la Ciudad Baja',
    text: 'Cuando el rival usa una habilidad: invocá un Cachorro Dientes de Sable y robá una carta.'
  },
  'devout-bell': {
    name: 'Campana Devota',
    text: 'Al equiparla: congelá al aliado enemigo con más ataque.',
    flavor: 'Cada tañido es una promesa cumplida.'
  },
  'devout-fury': {
    name: 'Furia Devota',
    text: 'Tu arma gana +1 de ataque. Si un aliado enemigo es tu Presa, robá una carta.',
    flavor: 'Los fieles pegan más fuerte.'
  },
  'devout-haruspex': { name: 'Arúspice Devoto', text: 'Al entrar: robá el primer Oráculo de tu mazo.' },
  'devout-prayer-staff': {
    name: 'Vara de Plegarias Devota',
    text: 'Cuando tu héroe ataca con él: devolvé a un aliado enemigo congelado al azar a la mano de su dueño.',
    flavor: 'Fe con una punta pesada.'
  },
  'devout-pythia': { name: 'Pitonisa Devota', text: 'Al entrar: tus aliados se curan 4.' },
  'devout-saddle': {
    name: 'Montura Devota',
    text: 'Se adjunta a un aliado tuyo: gana +1 de ataque y +3 de vida. Cuando ese aliado muere: invocá una Cría de Raptor.'
  },
  'dilophosaur-of-the-silent-trail': {
    name: 'Dilofosaurio del Rastro Silencioso',
    text: 'Al entrar: hacé 5 de daño a un aliado enemigo al azar.'
  },
  'dire-wolf-of-amber': {
    name: 'Lobo Terrible de Ámbar',
    text: 'Al morir: tus Fieras ganan +1 de ataque y +1 de vida.',
    flavor: 'Su pelaje brilla como resina al sol.'
  },
  'dire-wolf-of-the-fang': {
    name: 'Lobo Terrible del Colmillo',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otra Fiera tuya.'
  },
  'dire-wolf-of-the-first-fire': {
    name: 'Lobo Terrible del Primer Fuego',
    text: 'Cuando entra otra Fiera tuya: gana +1 de ataque y +1 de vida.'
  },
  'disruptor-field': {
    name: 'Campo Disruptor',
    text: 'Cuando entra un Autómata tuyo: gana Embestida. Interferir (1⚡): un aliado enemigo no puede atacar en esta fase.',
    flavor: 'Un zumbido, una chispa, y nada se mueve.',
    ability: { name: 'Interferir', text: 'Un aliado enemigo no puede atacar en esta fase.' }
  },
  'doomsayer-of-rot': { name: 'Agorero de la Podredumbre', text: 'Al morir: el rival descarta una carta al azar.' },
  'dormant-sentinel': {
    name: 'Centinela Dormido',
    text: 'Despertar (1⚡): deja los espacios de soporte y pasa a ser un aliado Centinela Despierto (6/10). Cuando ese aliado muere, vuelve como este artefacto.',
    flavor: 'Duerme con un engranaje abierto.',
    ability: {
      name: 'Despertar',
      text: 'Pasa a ser un aliado Centinela Despierto (6/10). Cuando ese aliado muere, vuelve como este artefacto.'
    }
  },
  'dormant-sentinel-awakened': {
    name: 'Centinela Despierto',
    text: 'Al morir: vuelve a tus espacios de soporte como Centinela Dormido.',
    flavor: 'Solo estaba descansando.'
  },
  'drake-of-the-tower': {
    name: 'Draco de la Torre',
    text: 'Cuando muere otro Draco tuyo: gana +3 de ataque.',
    flavor: 'Custodia la torre y se come a las visitas.'
  },
  'dreadnought-of-the-workshop': {
    name: 'Acorazado Volador del Taller',
    text: 'Al empezar cada fase: si tenés 3 artefactos o más, hacé 2 de daño a un aliado enemigo al azar.'
  },
  'dreaming-fury': {
    name: 'Furia Soñadora',
    text: 'Un aliado tuyo gana +5 de ataque y +7 de vida. Tu héroe recibe 5 de daño de sombra.',
    flavor: 'Una furia nacida en una pesadilla.'
  },
  'dreaming-pyre': {
    name: 'Pira Soñadora',
    text: 'Quemá a todos los aliados enemigos (1) durante 3 fases.',
    flavor: 'Arde con los colores de los sueños.'
  },
  'dreaming-pythia': {
    name: 'Pitonisa Soñadora',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Oráculo tuyo.'
  },
  'dreaming-seer': {
    name: 'Vidente Soñadora',
    text: 'Al empezar cada fase: robá una carta si tenés menos cartas en la mano que el rival.'
  },
  'drone-of-the-datastream': {
    name: 'Dron del Flujo de Datos',
    text: 'Al morir: tus Cíborgs ganan +1 de ataque y +1 de vida. Al atacar: hacé 1 de daño de sónico al héroe enemigo.'
  },
  'dryad-of-the-archmage': { name: 'Dríade del Archimago', text: 'Cuando entra otra Hada tuya: tu héroe se cura 2.' },
  'dusk-raider': {
    name: 'Saqueador del Ocaso',
    text: 'Al entrar: el rival descarta una carta al azar, y vos también.'
  },
  'echo-the-spirit-crow': {
    name: 'Eco, el Cuervo Espiritual',
    text: 'Al morir: un aliado al azar de tu pila de descarte vuelve al juego.'
  },
  'echoes-of-the-pile': {
    name: 'Ecos de la Pila',
    text: 'Robá una carta por cada 3 aliados en tu pila de descarte (hasta 3).',
    flavor: 'Los muertos hablan. Al Vacío le alcanza con escuchar.'
  },
  'eclipse-assassin': {
    name: 'Asesino del Eclipse',
    text: 'Al entrar: destruí a un aliado enemigo al azar que tenga 4 de vida o menos.'
  },
  'eclipse-sigil': {
    name: 'Sello del Eclipse',
    text: 'Al empezar cada fase: hace 2 de daño de sombra a todos los aliados, también a los tuyos. Si no hay aliados, se destruye.',
    flavor: 'Por un momento, ninguna hora es de nadie.',
    ability: { name: 'Devorar el Alba', text: 'Destruye todos los Sellos del Alba en juego.' }
  },
  'eclipse-witch': {
    name: 'Bruja del Eclipse',
    text: 'Al entrar: hacé 3 de daño de sombra a cada aliado enemigo y 3 a tu héroe.'
  },
  'electric-glitch': {
    name: 'Glitch Eléctrico',
    text: 'Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'electric-mech': { name: 'Mecha Eléctrico', text: 'Al entrar: tus otros Cíborgs ganan +1 de ataque y +1 de vida.' },
  'elk-of-the-wilds': {
    name: 'Alce de lo Salvaje',
    text: 'Al morir: hacé 2 de daño a cada aliado enemigo.',
    flavor: 'Rey del bosque, coronado de astas.'
  },
  'ember-gargoyle': {
    name: 'Gárgola de Brasa',
    text: 'Todo daño que recibe es 2 menor.',
    flavor: 'Piel de piedra, corazón ardiente.'
  },
  'ember-of-the-rift': { name: 'Ascua de la Grieta', text: 'Al entrar: quemá al héroe enemigo (3).' },
  'emergency-reboot': {
    name: 'Reinicio de Emergencia',
    text: 'Un aliado tuyo que tenga un adjunto se cura 8 y gana Sigilo. Rápida.'
  },
  'empowerment-of-the-dawnbell': {
    name: 'Potenciación de la Campana del Alba',
    text: 'Un aliado tuyo gana +1 de ataque y +1 de vida por cada Bestia tuya.',
    flavor: 'Suena la campana y vuelve la fuerza.'
  },
  'empowerment-of-the-last-stand': {
    name: 'Potenciación de la Última Defensa',
    text: 'Un aliado tuyo gana Barrido, y +2 de ataque esta fase. Instantánea.',
    flavor: 'Cuando todo parece perdido, llega la fuerza.'
  },
  'empowerment-of-the-warlord': {
    name: 'Potenciación del Caudillo',
    text: 'Un aliado tuyo gana +1 de ataque y +1 de vida (+3 y +3 si es un Cavernario).',
    flavor: 'Su grito vale cien espadas.'
  },
  'enchanted-cryomancer': {
    name: 'Criomante Encantada',
    text: 'Al entrar: si hay un aliado enemigo congelado, robá una carta.'
  },
  'enchanted-shot': {
    name: 'Disparo Encantado',
    text: 'Hacé 12 de daño arcano a un aliado enemigo. Si sobrevive, congelalo.',
    flavor: 'La flecha conoce el camino.'
  },
  'enchanted-wyvern': { name: 'Guiverno Encantado', text: 'Al entrar: robá el primer Draco de tu mazo.' },
  'enchantress-of-runes': {
    name: 'Encantadora de las Runas',
    text: 'Al entrar: congelá a un aliado enemigo al azar. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'enchantress-of-the-archmage': {
    name: 'Encantadora del Archimago',
    text: 'Al morir: congelá a todos los aliados enemigos.'
  },
  'enchantress-of-the-tower': {
    name: 'Encantadora de la Torre',
    text: 'Al entrar: si tenés poder mágico, robá una carta.',
    flavor: 'Sus canciones unen piedra y luz de estrellas.'
  },
  'encrypted-mech': { name: 'Mecha Encriptado', text: 'Al entrar: el héroe enemigo pierde 1 de energía.' },
  'encrypted-monolith': {
    name: 'Monolito Encriptado',
    text: 'Al empezar cada fase: robá el primer implante de tu mazo. (2 usos)'
  },
  'encrypted-street-samurai': {
    name: 'Samurái Callejero Encriptado',
    text: 'Al morir: hacé 4 de daño al aliado que lo mató.',
    flavor: 'Su honor tiene contraseña.'
  },
  'encrypted-thug': { name: 'Matón Encriptado', text: 'Cuando entra otro Sicario tuyo: tu héroe se cura 2.' },
  'endless-plan': {
    name: 'Plan Interminable',
    text: 'Robá una carta. Si tu pila tiene 10 cartas o más, robá otra.',
    flavor: 'Paso uno: esperar. Paso dos: esperar más.'
  },
  'endless-tentacle': { name: 'Tentáculo Interminable', text: 'Al morir: hacé 5 de daño de sombra al héroe enemigo.' },
  'endless-voidcaller': {
    name: 'Invocadora del Vacío Interminable',
    text: 'Cuando entra otro Cultista tuyo: gana +1 de ataque y +1 de vida.'
  },
  'eternal-haruspex': {
    name: 'Arúspice Eterno',
    text: 'Al entrar: hacé 1 de daño de tiempo al héroe enemigo por cada Oráculo tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'ethereal-apprentice': { name: 'Aprendiz Etéreo', text: 'Al entrar: congelá a un aliado enemigo al azar.' },
  'ethereal-basilisk': {
    name: 'Basilisco Etéreo',
    text: 'Al entrar: hacé 3 de daño de tierra al aliado enemigo con más vida.',
    flavor: 'Su mirada atraviesa paredes.'
  },
  'ethereal-beacon': {
    name: 'Faro Etéreo',
    text: 'Al empezar cada fase: hacé 2 de daño arcano, más tu poder mágico, a un aliado enemigo al azar. (4 usos)'
  },
  'ethereal-cockatrice': {
    name: 'Cocatriz Etérea',
    text: 'Al atacar: congelá al aliado al que ataca.',
    flavor: 'A medias presente, peligrosa por completo.'
  },
  'ethereal-runecarver': { name: 'Tallarrunas Etéreo', text: 'Al entrar: robá el primer Hechicero de tu mazo.' },
  'ethereal-terminal': {
    name: 'Terminal Etérea',
    text: 'Al empezar cada fase: robá una carta. (2 usos)',
    flavor: 'Se conecta a bibliotecas que ya no existen.'
  },
  'executioners-gauntlets': {
    name: 'Guanteletes del Verdugo',
    text: 'Sentencia (3⚡): un aliado enemigo pierde todo su ataque.',
    flavor: 'Un apretón, y la espada se te cae de la mano.',
    ability: { name: 'Sentencia', text: 'Un aliado enemigo pierde todo su ataque.' }
  },
  'experimental-aeronaut': { name: 'Aeronauta Experimental', text: 'Al entrar: invocá un Dron de Engranajes.' },
  'fae-channeler': {
    name: 'Canalizadora Feérica',
    text: 'Canalizar: cuando lanzás un hechizo, gana +1 de ataque y +1 de vida.'
  },
  'faithful-amulet': {
    name: 'Amuleto Fiel',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque, y +4 de vida con Panoplia.'
  },
  'faithful-bomb': {
    name: 'Bomba Fiel',
    text: 'Hacé 4 de daño a un slot enemigo y 2 a los aliados a su lado.',
    flavor: 'Nunca le falló a su dueño. Todavía.'
  },
  'faithful-cartographer': {
    name: 'Cartógrafa Fiel',
    text: 'Al entrar: robá el primer artefacto y el primer objeto de tu mazo.',
    flavor: 'Dibuja los caminos que todavía no existen.'
  },
  'faithful-moment': {
    name: 'Instante Fiel',
    text: 'Ganás 1 Cronos esta fase por cada artefacto tuyo. Instantánea.',
    flavor: 'Un segundo, guardado para siempre.'
  },
  'faithful-wanderer': {
    name: 'Vagabundo Fiel',
    text: 'Al entrar: robá el primer Errante de tu mazo.',
    flavor: 'Perdido en el tiempo, nunca en su propósito.'
  },
  'fang-the-sabertooth': {
    name: 'Colmillo, el Dientes de Sable',
    text: 'Sus ataques a una Presa hacen 5 de daño más, y se cura 3 cuando ataca a una.',
    flavor: 'La amiga más vieja de Kora, y la más filosa.'
  },
  'feral-healer': { name: 'Curandera Salvaje', text: 'Al atacar: el aliado al que ataca queda como tu Presa.' },
  'firedrake-of-the-arcanum': {
    name: 'Draco de Fuego del Arcano',
    text: 'Al entrar: congelá al aliado enemigo con más ataque.'
  },
  'firedrake-of-the-moon': {
    name: 'Draco de Fuego de la Luna',
    text: 'Cuando entra otro Draco tuyo: hacé 2 de daño de fuego a un aliado enemigo al azar.'
  },
  'firedrake-of-the-tower': {
    name: 'Draco de Fuego de la Torre',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Draco tuyo.'
  },
  'firewall-implant': {
    name: 'Implante Cortafuegos',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de vida, y el daño que recibe que no venga de un ataque se reduce a la mitad.'
  },
  'firmware-update': {
    name: 'Actualización de Firmware',
    text: 'Tus aliados Mejorados ganan +1 de ataque y +2 de vida.'
  },
  'fixer-of-the-datastream': {
    name: 'Intermediaria del Flujo de Datos',
    text: 'Al atacar a un aliado: primero destruí todos los adjuntos que tenga.'
  },
  'fixer-of-the-mainframe': {
    name: 'Intermediaria del Servidor Central',
    text: 'Al entrar: tus otros Sicarios ganan +2 de ataque y +2 de vida. Al morir: robá una carta.'
  },
  'fixer-of-the-undercity': {
    name: 'Intermediaria de la Ciudad Baja',
    text: 'Al morir: tus Sicarios ganan +1 de ataque y +1 de vida. Al entrar: robá una carta.'
  },
  'flail-of-the-vanguard': {
    name: 'Mangual de la Vanguardia',
    text: 'Cuando tu héroe ataca a un aliado con él: ese aliado pierde Protector esta fase.',
    flavor: 'Cadenas, púas y buenas intenciones.'
  },
  'flaming-oil': { name: 'Aceite Ardiente', text: 'Quemá a un aliado enemigo (4). Rápida.' },
  'flask-of-dawn': {
    name: 'Frasco del Alba',
    text: 'Robá el primer Elemental de tu mazo y robá el primer Elemental de tu mazo.'
  },
  'flask-of-dusk': {
    name: 'Frasco del Ocaso',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase y tu héroe recibe 3 de daño de sombra. Instantánea.',
    flavor: 'Sabe al final de un día largo.'
  },
  'flask-of-the-wanderer': {
    name: 'Frasco del Errante',
    text: 'Tu héroe se cura 6. Robá el primer artefacto de tu mazo.',
    flavor: 'Nunca vacía, nunca la misma bebida dos veces.'
  },
  'flickering-bolt': {
    name: 'Rayo Titilante',
    text: 'Hacé 3 de daño arcano a un slot enemigo y 3 al héroe enemigo. Rápida.',
    flavor: 'Se apaga, se prende, y atraviesa.'
  },
  'flickering-daze': {
    name: 'Aturdimiento Titilante',
    text: 'Congelá a un aliado enemigo. Si ya estaba congelado, destruilo.'
  },
  'flickering-frost-wyrm': {
    name: 'Sierpe de Escarcha Titilante',
    text: 'Al morir: congelá durante 2 fases al aliado enemigo que lo mató.',
    flavor: 'Parpadea entre inviernos.'
  },
  'flickering-mantle': {
    name: 'Manto Titilante',
    text: 'Cuando el ataque de un aliado enemigo golpea a tu héroe: congelá a ese aliado.',
    flavor: 'Ahora lo ves, ahora fallás.'
  },
  'flickering-mist': {
    name: 'Neblina Titilante',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Elemental tuyo.'
  },
  'flickering-muster': {
    name: 'Leva Titilante',
    text: 'Invocá un Familiar Arcano.',
    flavor: 'La mitad está acá. La otra mitad casi.'
  },
  'flickering-rust': {
    name: 'Herrumbre Titilante',
    text: 'Adjuntala a un aliado enemigo: cada vez que ataca, recibe 3 de daño de ácido.'
  },
  'flickering-stance': {
    name: 'Postura Titilante',
    text: 'Tu armadura gana +2 de durabilidad. Robá una carta.',
    flavor: 'Acá, allá, en ninguna parte.'
  },
  'flickering-ward': { name: 'Guarda Titilante', flavor: 'Parpadea justo antes de que llegue el golpe.' },
  'focus-of-lightning': { name: 'Foco del Relámpago', flavor: 'Sostenelo fuerte y rezá.' },
  'forbidden-lands-map': {
    name: 'Mapa de Tierras Prohibidas',
    text: 'Si el rival tiene tanta capacidad de Cronos como vos o más, pierde 1. Robá una carta.',
    flavor: 'Aquí hay monstruos. Aquí estás vos.'
  },
  'foreman-of-gears': {
    name: 'Capataz de Engranajes',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad.',
    flavor: 'Las máquinas trabajan más cuando él grita.'
  },
  'forest-wrath-mantle': {
    name: 'Manto de la Ira del Bosque',
    text: 'Cuando muere un aliado tuyo: robá una carta.',
    flavor: 'El bosque llora, y recuerda.'
  },
  'forgotten-king-crypt': {
    name: 'Cripta del Rey Olvidado',
    text: 'Exhumar (3⚡): el último aliado de tu pila va arriba de tu mazo.',
    flavor: 'El rey duerme. Sus guardias no.',
    ability: { name: 'Exhumar', text: 'El último aliado de tu pila va arriba de tu mazo.' }
  },
  'forked-lightning': {
    name: 'Rayo Bifurcado',
    text: 'Hacé 7 de daño de rayo a 2 slots enemigos distintos.',
    flavor: '¿Para qué elegir?'
  },
  'form-ranks': {
    name: 'Llamado a Formación',
    text: 'Robá una carta por cada par de aliados tuyos que estén uno al lado del otro (hasta 3).',
    flavor: 'Hombro con hombro, la legión piensa como uno.'
  },
  'forsaken-resurrection': {
    name: 'Resurrección Abandonada',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego. Lenta.',
    flavor: 'De vuelta de la muerte, y no muy contento.'
  },
  'forsaken-zombie': {
    name: 'Zombi Abandonado',
    text: 'Al entrar: desterrá hasta 2 cartas de tu pila; gana +2 de ataque por cada una.',
    flavor: 'Nadie volvió por él, así que él volvió por ellos.'
  },
  'frost-circlet': {
    name: 'Diadema de Escarcha',
    text: 'Poder mágico +1. Tus hechizos de hielo también congelan lo que dañan.'
  },
  'frost-of-grace': {
    name: 'Escarcha de la Gracia',
    text: 'Congelá a un aliado enemigo. Tu héroe se cura 3.',
    flavor: 'Un frío suave que calma la fiebre de la guerra.'
  },
  'frost-of-ruin': {
    name: 'Escarcha de la Ruina',
    text: 'Un aliado enemigo no puede atacar durante las próximas 3 fases. Rápida.',
    flavor: 'El frío que llega después del final.'
  },
  'frost-of-the-arcanum': {
    name: 'Escarcha del Arcano',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Hielo escrito en el idioma de la magia.'
  },
  'frost-of-the-hawk': {
    name: 'Escarcha del Halcón',
    text: 'Congelá a un aliado enemigo y hacé 3 de daño de hielo al héroe enemigo.'
  },
  'frost-of-the-oracle': {
    name: 'Escarcha del Oráculo',
    text: 'Aturdí a un aliado enemigo y a un aliado al azar a su lado. Rápida.',
    flavor: 'Vio venir el invierno y lo mandó adelante.'
  },
  'frost-of-the-pack': {
    name: 'Escarcha de la Jauría',
    text: 'Un aliado enemigo pierde Sigilo, Rápido y Represalia durante dos fases. Robá una carta.',
    flavor: 'Los lobos corren más rápido sobre suelo helado.'
  },
  'frost-storm': {
    name: 'Tormenta de Escarcha',
    text: 'Hacé 2 de daño de hielo a cada aliado enemigo y congelalos.'
  },
  'frozen-bolt': {
    name: 'Rayo Helado',
    text: 'Hacé 11 de daño de hielo a un slot enemigo.',
    flavor: 'Detiene al blanco, y después al corazón.'
  },
  'frozen-wand': {
    name: 'Varita Helada',
    text: 'Cuando tu héroe ataca a un aliado con ella: congelá a ese aliado.',
    flavor: 'Apuntala al verano y miralo terminar.'
  },
  'frozen-ward': {
    name: 'Guarda Helada',
    text: 'Al equiparla: congelá a un aliado enemigo al azar.',
    flavor: 'Tan fría que frena una espada en el aire.'
  },
  'furious-banner': {
    name: 'Estandarte Furioso',
    text: 'Al empezar cada fase: tus aliados con Protector ganan +1 de ataque. (3 usos)'
  },
  'furious-chrononaut': {
    name: 'Crononauta Furioso',
    text: 'Al morir: tu héroe gana 2 de energía.',
    flavor: 'Está enojado desde la Edad del Bronce.'
  },
  'furious-sabotage': {
    name: 'Sabotaje Furioso',
    text: 'Destruí el arma enemiga. Rápida.',
    flavor: 'Rompelo antes de que te rompa.'
  },
  'gadgeteer-of-steam': {
    name: 'Artilugista de Vapor',
    text: 'Al entrar: tu héroe se cura 6. Al morir: invocá un Dron de Engranajes.'
  },
  'gathering-of-flame': {
    name: 'Reunión de Llamas',
    text: 'Invocá una Chispa de la Grieta.',
    flavor: 'Chispas pequeñas, un gran fuego.'
  },
  'gathering-of-lightning': {
    name: 'Reunión del Relámpago',
    text: 'Invocá 2 Familiares Arcanos y congelá a un aliado enemigo al azar.',
    flavor: 'Toda tormenta empieza con una chispa.'
  },
  'gear-reliquary': {
    name: 'Relicario de Engranajes',
    text: 'Cuando otro artefacto tuyo sale del juego: robá una carta. (3 usos)'
  },
  'gearwright-artisan': {
    name: 'Artesano del Engranaje',
    text: 'Tus artefactos que cuestan 4 o más cuestan 2 menos. Su habilidad se paga con energía (⚡).',
    flavor: 'Máquinas grandes, cuentas chicas.',
    ability: { name: 'Encargo', text: 'Robá el primer artefacto de tu mazo que cueste 4 o más.' }
  },
  'gentle-balm': {
    name: 'Bálsamo Gentil',
    text: 'Tu héroe se cura 16 y tus aliados ganan +2 de vida.',
    flavor: 'Para rodillas raspadas y corazones rotos.'
  },
  'gentle-banner': { name: 'Estandarte Gentil', text: 'Cuando entra un Oráculo tuyo: gana +1 de ataque y +2 de vida.' },
  'gentle-bard': {
    name: 'Bardo Gentil',
    text: 'Al terminar cada fase: tu héroe se cura 2.',
    flavor: 'Sus canciones curan lo que las espadas no.'
  },
  'gentle-return': { name: 'Regreso Gentil', text: 'Tu héroe se cura 1 por cada carta de tu pila (hasta 10). Lenta.' },
  'gentle-ward': {
    name: 'Guarda Gentil',
    text: 'Cuando ataca un aliado enemigo: hacele 7 de daño de luz.',
    flavor: 'Suaviza cada golpe.'
  },
  'ghost-of-the-mainframe': {
    name: 'Fantasma Digital del Servidor Central',
    text: 'Al entrar: un aliado Mejorado tuyo al azar gana Sigilo.',
    flavor: 'Vive donde el código se olvidó de mirar.'
  },
  'ghoul-of-mercy': {
    name: 'Necrófago de la Misericordia',
    text: 'Al morir: tus otros No Muertos ganan +2 de ataque.',
    flavor: 'Solo come lo que ya está perdido.'
  },
  'gideons-hammer': {
    name: 'Martillo de Gideon',
    text: 'Cuando tu héroe ataca con él: tus Inventores ganan +1 de ataque y +1 de vida.',
    flavor: 'A vapor y con opiniones propias.'
  },
  'gleaming-wyvern': {
    name: 'Guiverno Reluciente',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Draco tuyo. Al morir: hacé 4 de daño de arcano a un aliado enemigo al azar.'
  },
  'glitched-glitch': {
    name: 'Glitch Corrupto',
    text: 'Al atacar: un aliado Mejorado tuyo al azar gana +1 de ataque y +1 de vida.'
  },
  'glitched-plan': {
    name: 'Plan Corrupto',
    text: 'Tomá una carta al azar de la mano del rival.',
    flavor: 'En la simulación funcionaba.'
  },
  'glyptodon-of-the-volcano': {
    name: 'Gliptodonte del Volcán',
    text: 'Al morir: invocá dos Cachorros Dientes de Sable.',
    flavor: 'Una fortaleza ambulante con el corazón caliente.'
  },
  'gorraks-cave-bear': {
    name: 'Oso Cavernario de Gorrak',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2. Al empezar cada fase: gana +1 de ataque y +1 de vida.'
  },
  'gorraks-recurve-bow': {
    name: 'Arco Recurvo de Gorrak',
    text: 'Al equiparlo: tus Saurios ganan +1 de ataque y +2 de vida.'
  },
  'grave-hound-of-grace': {
    name: 'Sabueso de Tumba de la Gracia',
    text: 'Cuando muere otro aliado tuyo: gana +1 de ataque.',
    flavor: 'Cuida a los muertos para que descansen.'
  },
  'grave-pact': {
    name: 'Pacto de la Tumba',
    text: 'Sacrificá a un aliado tuyo: un aliado enemigo al azar recibe tanto daño de sombra como su ataque.'
  },
  'grave-tyrant': {
    name: 'Tirano de la Tumba',
    text: 'Al entrar: gana +1 de ataque por cada 2 cartas de tu pila (hasta +8).'
  },
  'great-cog': {
    name: 'Gran Engranaje',
    text: 'Mientras tengas 3 o más artefactos: los ataques de tus aliados hacen 1 de daño más.'
  },
  'griffin-of-the-last-stand': {
    name: 'Grifo de la Última Defensa',
    text: 'Al entrar: robá el primer Coloso de tu mazo. Al atacar: gana +1 de ataque.'
  },
  'grim-collector': {
    name: 'Coleccionista Sombrío',
    text: 'Al terminar cada fase: hacé 1 de daño de sombra a cada aliado enemigo herido.'
  },
  'grim-shot': {
    name: 'Disparo Sombrío',
    text: 'Hacé 2 de daño de sombra a un slot enemigo, +2 por cada Horror tuyo.'
  },
  'grim-skeleton': {
    name: 'Esqueleto Sombrío',
    text: 'Al atacar: gana +1 de ataque esta fase por cada 5 cartas de tu pila.',
    flavor: 'No sonríe. Solo lo parece.'
  },
  'grimoire-of-curses': {
    name: 'Grimorio de Maldiciones',
    text: 'Los ataques de los aliados del rival hacen 2 de daño menos.',
    flavor: 'Cada página es una promesa de desgracia.'
  },
  'guard-of-the-ancestors': {
    name: 'Guardia de los Ancestros',
    text: 'Tu armadura gana +4 de durabilidad y tu héroe se cura 8. Robá una carta.',
    flavor: 'Los muertos montan guardia por los vivos.'
  },
  'guard-of-the-warlord': {
    name: 'Guardia del Caudillo',
    text: 'Tu arma gana +2 de ataque y +2 de durabilidad.',
    flavor: 'Nadie toca a la gente del señor de la guerra.'
  },
  'guardian-spirit': { name: 'Espíritu Guardián', flavor: 'Protege a quienes no pueden protegerse.' },
  'halberd-of-valor': {
    name: 'Alabarda del Valor',
    text: 'Los ataques de tu héroe con ella hacen 3 de daño más a los aliados.',
    flavor: 'Largo alcance, leyenda más larga.'
  },
  'hallowed-battle-cry': {
    name: 'Grito de Guerra Consagrado',
    text: 'Un aliado tuyo gana +2 de ataque, +2 de vida y Represalia.',
    flavor: 'La oyen los vivos y los muertos.'
  },
  'hallowed-deserter': {
    name: 'Desertor Consagrado',
    text: 'Al entrar: tus otros aliados se curan 3 y ganan Represalia.'
  },
  'hallowed-dream-reader': { name: 'Lectora de Sueños Consagrada', text: 'Al entrar: tu héroe se cura 7.' },
  'hallowed-revenant': {
    name: 'Aparecido Consagrado',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada No-muerto tuyo.'
  },
  'harpoon-of-the-ambush': {
    name: 'Arpón de la Emboscada',
    text: 'Cuando tu héroe ataca a un aliado con él: ese aliado no puede atacar en la próxima fase.',
    flavor: 'Lanzado desde los juncos, sentido en los huesos.'
  },
  'harpoon-of-the-quarry': {
    name: 'Arpón de la Presa',
    text: 'Al equiparla: hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Con púas para la presa más grande.'
  },
  'hatchet-of-dawn': {
    name: 'Hachuela del Alba',
    text: 'Cuando tu héroe ataca con ella: tu héroe se cura 2.',
    flavor: 'Corta las últimas sombras de la noche.'
  },
  'healing-amulet': {
    name: 'Amuleto Sanador',
    text: 'Poder mágico +1. Al empezar cada fase: tu héroe se cura 2.',
    flavor: 'Tibio al tacto, incluso en invierno.'
  },
  'healing-muster': {
    name: 'Leva Sanadora',
    text: 'Invocá un Espíritu Guardián.',
    flavor: 'Reuní a los heridos. Devolvé soldados.'
  },
  'healing-prayer': {
    name: 'Plegaria Sanadora',
    text: 'Tu héroe se cura 10 y robá una carta.',
    flavor: 'Dicha en voz baja, oída en todas partes.'
  },
  'heart-of-the-volcano': {
    name: 'Corazón del Volcán',
    text: 'Hacé 3 de daño de fuego a todos los aliados enemigos y 5 de daño de fuego al héroe enemigo.',
    flavor: 'Todavía late, una vez cada cien años.'
  },
  'herald-of-first-light': {
    name: 'Heraldo de la Primera Luz',
    text: 'Al entrar: poné en tu mano el primer aliado de tu pila.'
  },
  'heros-laurel': {
    name: 'Laurel del Héroe',
    text: 'Adjuntá a un aliado tuyo: gana +3 de ataque y +3 de vida, y el rival no le puede adjuntar cartas.',
    flavor: 'Una leyenda empieza cuando la multitud corea.'
  },
  'hex-of-dawn': {
    name: 'Maleficio del Alba',
    text: 'Adjuntalo a un aliado enemigo: tiene -3 de ataque. Cuando muere, tu héroe se cura 5.',
    flavor: 'Una maldición que solo funciona de día.'
  },
  'hex-of-lightning': {
    name: 'Maleficio del Relámpago',
    text: 'Aturdí a un aliado enemigo y hacele 2 de daño de rayo. Rápida.',
    flavor: 'Maldecí al cielo y te maldice de vuelta.'
  },
  'hex-of-runes': {
    name: 'Maleficio de las Runas',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'hex-of-steel': { name: 'Maleficio de Acero', text: 'Congelá a un aliado enemigo y a los aliados a su lado.' },
  'hex-of-the-enchanted-wood': {
    name: 'Maleficio del Bosque Encantado',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida. Robá una carta.',
    flavor: 'Los árboles recuerdan quién los taló.'
  },
  'hex-of-the-hunt': {
    name: 'Maleficio de la Cacería',
    text: 'Hacé 4 de daño de hielo a cada aliado enemigo congelado.'
  },
  'hex-of-the-oracle': {
    name: 'Maleficio del Oráculo',
    text: 'Adjuntalo a un aliado enemigo: cuando muere, un aliado al azar de tu pila vuelve al juego.',
    flavor: 'Ella vio tu debilidad hace mucho.'
  },
  'hex-of-thorns': {
    name: 'Maleficio de Espinas',
    text: 'Congelá a un aliado enemigo al azar.',
    flavor: 'Cada paso cuesta un poco de sangre.'
  },
  'hex-of-weakness': {
    name: 'Maleficio de Debilidad',
    text: 'Un aliado enemigo no puede atacar en la próxima fase. Tu héroe recibe 1 de daño de sombra. Rápida.'
  },
  'hollow-vision': {
    name: 'Visión Hueca',
    text: 'Consumir 2 (desterrá 2 cartas de tu pila). Robá 3 cartas.',
    flavor: 'Muestra lo que falta.'
  },
  'hollow-void-spawn': {
    name: 'Engendro del Vacío Hueco',
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 6.' }
  },
  'holo-decoy': { name: 'Señuelo Holográfico', flavor: 'Dispárenle. No le molesta.' },
  'holo-mech': { name: 'Mecha Holográfico', text: 'Al atacar: si está Mejorado, robá una carta.' },
  'holo-secret': {
    name: 'Secreto Holográfico',
    text: 'Robá 2 cartas. Tus aliados Mejorados ganan +2 de ataque esta fase.',
    flavor: 'Encriptado dos veces, susurrado una.'
  },
  'hoplite-conscript': { name: 'Conscripto Hoplita', flavor: 'Ayer campesino. Hoy, un muro.' },
  'hostile-firmware': {
    name: 'Firmware Hostil',
    text: 'Destruí todos los adjuntos de un aliado enemigo y hacele 3 de daño por cada uno.'
  },
  'hostile-takeover': {
    name: 'Adquisición Hostil',
    text: 'Cuando el rival invoca un aliado: aturdilo y robá 2 cartas.',
    flavor: 'Leé la letra chica. La escribió él.'
  },
  'hourglass-of-ice': {
    name: 'Reloj de Arena de Hielo',
    text: 'Ganás 2 Chronos en esta fase y robás una carta. Instantánea.',
    flavor: 'El tiempo se congela, grano por grano.'
  },
  'hourglass-of-storms': {
    name: 'Reloj de Arena de Tormentas',
    text: 'Tu héroe gana 1 de energía y ganás 1 Chronos en esta fase. Instantánea.',
    flavor: 'Su arena está hecha de rayos.'
  },
  'hourglass-shard-of-borrowed-hours': {
    name: 'Esquirla de Reloj de las Horas Prestadas',
    text: 'Ganás 1 Chronos en esta fase por cada carta en tu mano (hasta 4). Instantánea.',
    flavor: 'Una astilla de tiempo, filosa en las dos puntas.'
  },
  'hungry-banner': {
    name: 'Estandarte Hambriento',
    text: 'Al empezar cada fase: hacé 3 de daño de hielo a un aliado enemigo al azar. (3 usos)'
  },
  'hungry-blessing': {
    name: 'Bendición Hambrienta',
    text: 'Se adjunta a un aliado tuyo: gana +1 de ataque y +3 de vida. Cuando se activa una trampa tuya: ese aliado gana +1 de ataque y +1 de vida.'
  },
  'hungry-cave-painter': {
    name: 'Pintora de Cuevas Hambrienta',
    text: 'Cuando entra otro Cavernario tuyo: gana +1 de ataque y +1 de vida.'
  },
  'hunters-snare': {
    name: 'Lazo del Cazador',
    text: 'Cuando se invoca un aliado enemigo: queda como tu Presa.',
    flavor: 'La selva marca a los suyos.'
  },
  huntmistress: {
    name: 'Señora de la Caza',
    text: 'Al entrar: robá la primera trampa de tu mazo.',
    flavor: 'Sabe dónde está cada lazo de la selva.'
  },
  'hydra-of-the-senate': { name: 'Hidra del Senado', text: 'Al morir: invocá 2 Conscriptos Hoplitas.' },
  'ilyra-starweaver': {
    name: 'Ilyra Starweaver',
    text: 'Lluvia de Estrellas (3): hacé 5 de daño de arcano a 3 slots enemigos distintos. Poder mágico +1 (tus hechizos hacen 1 de daño más).',
    flavor: 'Lee el futuro en las constelaciones, y después lo reescribe.',
    ability: { name: 'Lluvia de Estrellas', text: 'Hacé 5 de daño de arcano a 3 slots enemigos distintos.' }
  },
  'ilyras-slash': {
    name: 'Tajo de Ilyra',
    text: 'Hacé 6 de daño arcano a un slot enemigo, +2 por cada aliado enemigo congelado, y robá una carta.'
  },
  'imperial-arsenal': {
    name: 'Arsenal Imperial',
    text: 'Robá la primera arma y la primera armadura de tu mazo.'
  },
  'imperial-charioteer': {
    name: 'Auriga Imperial',
    text: 'Al morir: tus Legionarios ganan +1 de ataque y +1 de vida.'
  },
  'imperial-haruspex': {
    name: 'Arúspice Imperial',
    text: 'Al atacar: los aliados a su lado ganan +1 de ataque esta fase.'
  },
  'imperial-horn': {
    name: 'Cuerno Imperial',
    text: 'Invocá un Conscripto Hoplita.',
    flavor: 'Cuando suena, el imperio marcha.'
  },
  'implant-clinic': {
    name: 'Clínica de Implantes',
    text: 'Al empezar cada fase: si tenés un aliado Mejorado, robá una carta. (3 usos)'
  },
  'implant-of-spirits': {
    name: 'Implante de los Espíritus',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque y Robo de vida. Cuando muere, este implante vuelve a tu mano.'
  },
  'implant-of-the-quarry': {
    name: 'Implante de la Presa',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +2 de vida.'
  },
  'infiltrator-of-midnight': {
    name: 'Infiltradora de Medianoche',
    text: 'Cuando entra otro Hacker tuyo: gana Rápido.'
  },
  'infiltrator-of-static': {
    name: 'Infiltradora de Estática',
    text: 'Al atacar a un aliado con un adjunto: gana +4 de ataque esta fase.'
  },
  'infiltrator-of-the-ambush': {
    name: 'Infiltradora de la Emboscada',
    text: 'Al entrar: destruí el arma enemiga.',
    flavor: 'Para cuando la ves, ya terminó.'
  },
  'infiltrator-of-the-silent-trail': {
    name: 'Infiltradora del Rastro Silencioso',
    text: 'Al morir: el héroe enemigo pierde 2 de energía.',
    flavor: 'No se mueve una hoja cuando pasa.'
  },
  'insight-of-still-waters': {
    name: 'Revelación de las Aguas Quietas',
    text: 'Robá una carta, o 2 si no tenés aliados.',
    flavor: 'El agua quieta muestra el futuro más claro.'
  },
  'insight-of-the-warlord': {
    name: 'Revelación del Caudillo',
    text: 'Robá el primer Coloso y la primera arma de tu mazo.'
  },
  'iris-shadehunter': {
    name: 'Iris Cazasombras',
    text: 'Su sigilo no se pierde al atacar.',
    flavor: 'Solo la vas a ver en los registros.'
  },
  'iron-gorgon': {
    name: 'Gorgona de Hierro',
    text: 'Al entrar: robá la primera arma de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'iron-mark': {
    name: 'Marca de Hierro',
    text: 'Adjuntalo a un aliado enemigo: al terminar cada fase, pierde 1 de ataque.',
    flavor: 'Marcado una vez, perseguido para siempre.'
  },
  'iron-terminal': {
    name: 'Terminal de Hierro',
    text: 'Al empezar cada fase: tu héroe se cura 3. (4 usos)',
    flavor: 'Hardware viejo, todavía peligroso.'
  },
  'ironsteam-exosuit': { name: 'Exotraje Ironsteam', text: 'Al empezar cada fase: ganás 1 Cronos en esta fase.' },
  'javelin-of-the-wilds': {
    name: 'Jabalina de lo Salvaje',
    text: 'Cuando tu héroe ataca con ella: el aliado al que golpea queda como tu Presa.',
    flavor: 'Lanzada por la selva, atrapada por nadie.'
  },
  'jetpack-courier': { name: 'Mensajero a Reacción', text: 'Mientras tenga 2 o más adjuntos, tiene Vuelo.' },
  'kades-cleaver': {
    name: 'Cuchilla de Plasma de Kade',
    text: 'Cuando tu héroe ataca con ella: tus Sicarios ganan +1 de ataque esta fase.',
    flavor: 'El orden, de un corte por vez.'
  },
  'kades-courier': {
    name: 'Mensajero de Kade',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Sicario tuyo. Al atacar: hacé 3 de daño al héroe enemigo.'
  },
  'kazhuls-brontosaur': {
    name: 'Brontosaurio de Kazhul',
    text: 'Al entrar: tus otros Saurios ganan +2 de ataque y +2 de vida. Al empezar cada fase: gana +1 de ataque y +1 de vida.'
  },
  'kazhuls-longbow': {
    name: 'Arco Largo de Kazhul',
    text: 'Cuando tu héroe ataca con él: tus Cavernarios ganan +1 de ataque.'
  },
  'keen-eyed-blight': {
    name: 'Plaga de Ojo Certero',
    text: 'Envenená a un aliado enemigo (1) por cada 2 cartas de tu pila (hasta 5).',
    flavor: 'La podredumbre encuentra primero el punto débil.'
  },
  'keen-eyed-crossbow': {
    name: 'Ballesta de Ojo Certero',
    text: 'Cuando un ataque de tu héroe con ella mata a un aliado: robá una carta.',
    flavor: 'Ve el hueco en cada armadura.'
  },
  'keen-eyed-daze': {
    name: 'Aturdimiento de Ojo Certero',
    text: 'Devolvé a un aliado enemigo a la mano de su dueño y congelá a otro. Rápida.'
  },
  'keen-eyed-hide': { name: 'Piel Curtida de Ojo Certero', flavor: 'Curtida por un cazador que nunca falló.' },
  'keen-eyed-secret': {
    name: 'Secreto de Ojo Certero',
    text: 'Robá una carta.',
    flavor: 'Los mejores cazadores no dicen nada.'
  },
  'kill-switch': {
    name: 'Interruptor de Apagado',
    text: 'Adjuntalo a un aliado enemigo: no puede usar su habilidad. Cuando muere, robá una carta.'
  },
  'kite-shield-of-iron': { name: 'Escudo Cometa de Hierro', flavor: 'Hierro simple. Simplemente irrompible.' },
  'kite-shield-of-rage': {
    name: 'Escudo Cometa de la Ira',
    text: 'Al equiparlo: tus Colosos ganan Protector.',
    flavor: 'Golpealo y te devuelve el golpe más fuerte.'
  },
  'kora-wildfang': {
    name: 'Kora Wildfang',
    text: 'Disparo Explorador (3): hacé 6 de daño de viento a un slot enemigo y robá una carta; el aliado alcanzado queda como tu Presa. Cuando se activa una trampa tuya, tu héroe gana 1 de energía.',
    flavor: 'La jungla le enseñó una regla: disparar primero.',
    ability: {
      name: 'Disparo Explorador',
      text: 'Hacé 6 de daño de viento a un slot enemigo y robá una carta; el aliado alcanzado queda como tu Presa.'
    }
  },
  'koras-blowgun': {
    name: 'Cerbatana de Kora',
    text: 'Cuando tu héroe ataca con ella: el aliado al que golpea queda como tu Presa y recibe 2 de veneno.'
  },
  'koras-hunting-call': {
    name: 'Llamado de Caza de Kora',
    text: 'Todos los aliados enemigos quedan como tu Presa. Tus Bestias ganan +2 de ataque en esta fase. Instantánea.'
  },
  'labrys-of-the-labyrinth': {
    name: 'Labrys del Laberinto',
    text: 'Al equiparla: aturdí a un aliado enemigo al azar.',
    flavor: 'Dos filos, una sola salida.'
  },
  'lamplighter-of-the-crossroads': {
    name: 'Farolera de la Encrucijada',
    text: 'Al morir: invocá una Chispa de la Grieta. Al entrar: tu héroe se cura 4.'
  },
  'lamplighter-of-the-dawnbell': {
    name: 'Farolera de la Campana del Alba',
    text: 'Al entrar: tus otros aliados se curan 5.',
    flavor: 'Cada amanecer empieza con su pequeña llama.'
  },
  'lamplighter-of-the-wanderer': {
    name: 'Farolera del Errante',
    text: 'Al entrar: tus otros Errantes ganan +1 de ataque y +1 de vida.'
  },
  'lamplighter-of-thorns': {
    name: 'Farolera de Espinas',
    text: 'Al morir: hacé 5 de daño a un aliado enemigo al azar.',
    flavor: 'Sus faroles arden en los matorrales más oscuros.'
  },
  'lance-of-mana': {
    name: 'Lanza de Maná',
    text: 'Hacé 9 de daño arcano a un aliado enemigo congelado, o 3 si no lo está.',
    flavor: 'Magia pura, lanzada como una jabalina.'
  },
  'lance-of-runes': {
    name: 'Lanza de las Runas',
    text: 'Hacé 3 de daño arcano a un aliado enemigo, +2 por cada Mago tuyo.',
    flavor: 'Cada runa suma un motivo para doler.'
  },
  'lance-of-the-wilds': {
    name: 'Lanza de lo Salvaje',
    text: 'Hacé 4 de daño a un slot enemigo, o 9 con Panoplia.',
    flavor: 'Tallada en un árbol que alcanzó un rayo.'
  },
  'lantern-of-flame': {
    name: 'Farol de Llamas',
    text: 'Al empezar cada fase: hacé 2 de daño de fuego al héroe enemigo por cada otro artefacto tuyo. (2 usos)'
  },
  'lantern-of-the-foundry': {
    name: 'Farol de la Fundición',
    text: 'Al empezar cada fase: invocá un Dron de Engranajes. (2 usos)'
  },
  'lantern-of-the-wanderer': {
    name: 'Farol del Errante',
    text: 'Al empezar cada fase: tu arma gana +1 de durabilidad. (3 usos)'
  },
  'lantern-staff-of-mercy': {
    name: 'Bastón Farol de la Misericordia',
    text: 'Cuando tu héroe ataca con él: un aliado tuyo al azar se cura 4.',
    flavor: 'Su luz encuentra a los perdidos y a los heridos.'
  },
  'lantern-staff-of-renewal': {
    name: 'Bastón Farol de la Renovación',
    text: 'Cuando tu héroe ataca con él: tus aliados Protectores se curan 2.',
    flavor: 'Su luz recuerda cómo eran las cosas.'
  },
  'lantern-staff-of-the-dawnbell': {
    name: 'Bastón Farol de la Campana del Alba',
    text: 'Al equiparlo: tus Magos ganan Robo de vida.',
    flavor: 'Ilumina el camino hacia la mañana.'
  },
  'laureled-dream-reader': {
    name: 'Lectora de Sueños Laureada',
    text: 'Al entrar: con Panoplia, robá 2 cartas.',
    flavor: 'Lee los sueños del imperio y corrige los malos.'
  },
  'laureled-sentinel': { name: 'Centinela Laureado', text: 'Al entrar: robá el primer Coloso de tu mazo.' },
  'lava-jackal': {
    name: 'Chacal de Lava',
    text: 'Al morir: si lo mató un aliado enemigo, ese aliado es destruido; si lo mató el héroe enemigo, le hace 2 de daño de fuego.',
    flavor: 'Matalo y te lleva con él.'
  },
  'learned-cryomancer': {
    name: 'Criomante Erudita',
    text: 'Al entrar: hacé 3 de daño de hielo a cada aliado enemigo.'
  },
  'learned-mist': { name: 'Neblina Erudita', text: 'Al entrar: quemá a un aliado enemigo al azar (5).' },
  'learned-wyvern': { name: 'Guiverno Erudito', text: 'Cuando entra otro Draco tuyo: gana +1 de ataque y +1 de vida.' },
  'leech-of-lost-time': {
    name: 'Sanguijuela del Tiempo Perdido',
    text: 'Se adjunta a un aliado enemigo: tiene -1 de ataque. Al empezar cada fase: recibe 1 de daño de sombra y tu héroe se cura 1.'
  },
  'leech-of-mercy': {
    name: 'Sanguijuela de la Misericordia',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.',
    flavor: 'Se lleva el dolor. Y un poco más.'
  },
  'leech-of-runes': {
    name: 'Sanguijuela de las Runas',
    text: 'Adjuntalo a un aliado enemigo: cada vez que recibe daño, tu héroe se cura 2.',
    flavor: 'Se alimenta de magia, runa por runa.'
  },
  'leech-of-the-quarry': {
    name: 'Sanguijuela de la Presa',
    text: 'Adjuntala a un aliado enemigo: no puede atacar.',
    flavor: 'Bebe mientras corrés.'
  },
  'legate-varro': {
    name: 'Legado Varro',
    text: 'Testudo (4): hasta el final de la próxima fase, tus aliados reciben 2 de daño menos y vos hacés 2 de daño más al héroe y a los aliados enemigos. Instantánea. Panoplia (tu héroe tiene arma y armadura): los ataques de tus Legionarios hacen 1 de daño más.',
    flavor: 'Aguantó la línea en más siglos de los que puede contar.',
    ability: {
      name: 'Testudo',
      text: 'Hasta el final de la próxima fase, tus aliados reciben 2 de daño menos y vos hacés 2 de daño más al héroe y a los aliados enemigos.'
    }
  },
  'legion-shield': {
    name: 'Escudo de la Legión',
    text: 'Al equiparla, y mientras está: tus Legionarios ganan +2 de vida.',
    flavor: 'Un escudo, cien hermanos detrás.'
  },
  'legion-smith': {
    name: 'Herrero de la Legión',
    text: 'Al entrar: tu arma y tu armadura ganan +1 de durabilidad cada una.'
  },
  'legion-war-banner': {
    name: 'Estandarte de la Legión',
    text: 'Los ataques de tus aliados hacen 2 de daño más. Al jugarlo, si no tenés aliados: robá una carta.',
    flavor: 'Levantalo, y vendrán.'
  },
  'lich-apprentice': { name: 'Aprendiz de Liche', text: 'Al entrar: si tu pila tiene 10 cartas o más, robá 2 cartas.' },
  'lightbringer-squire': {
    name: 'Escudero Portaluz',
    text: 'Al entrar: hacé 2 de daño de luz al héroe enemigo y tu héroe se cura 2.'
  },
  'lonely-howl': {
    name: 'Aullido Solitario',
    text: 'Al empezar cada fase, si no tenés aliados: tu héroe se cura 4. (6 usos)',
    flavor: 'Solo, pero nunca en silencio.'
  },
  'longbow-of-the-hawk': {
    name: 'Arco Largo del Halcón',
    text: 'Cuando tu héroe ataca a una Presa con él: gana +1 de durabilidad.',
    flavor: 'Ve más lejos que su arquero.'
  },
  'longbow-of-the-silent-trail': {
    name: 'Arco Largo del Rastro Silencioso',
    text: 'Al equiparlo: envenená a un aliado enemigo al azar (2).',
    flavor: 'La flecha llega antes que el sonido.'
  },
  'lost-chrononaut': { name: 'Crononauta Perdido', flavor: 'Partió en el año 3000. Todavía no lo encuentra.' },
  'lost-stance': {
    name: 'Postura Perdida',
    text: 'Tu arma y tu armadura ganan +3 de durabilidad cada una. Robá una carta.',
    flavor: 'Fuera del tiempo, nunca fuera de equilibrio.'
  },
  'lost-vision': {
    name: 'Visión Perdida',
    text: 'Robá 3 cartas y después descartá una al azar.',
    flavor: 'Un vistazo a un siglo que nadie vivió.'
  },
  'loyal-charioteer': {
    name: 'Auriga Leal',
    text: 'Al entrar: los aliados a su lado ganan Protector.',
    flavor: 'Los caballos confían en él. La legión también.'
  },
  'loyal-gorgon': {
    name: 'Gorgona Leal',
    text: 'Al entrar: hacé 1 de daño de luz al héroe enemigo por cada Coloso tuyo.'
  },
  'lucky-blessing': {
    name: 'Bendición Afortunada',
    text: 'Tu héroe se cura 12. Si tenés una trampa puesta, robá una carta.',
    flavor: 'La suerte es una habilidad, según los afortunados.'
  },
  'lucky-shrine': {
    name: 'Santuario Afortunado',
    text: 'Al empezar cada fase: hacé 3 de daño de sombra al héroe enemigo y 1 al tuyo. (3 usos)'
  },
  'lucky-stasis': {
    name: 'Estasis Afortunada',
    text: 'Devolvé a un aliado enemigo congelado a la mano de su dueño y robá 2 cartas. Rápida.'
  },
  'luminous-resurrection': {
    name: 'Resurrección Luminosa',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'luminous-squire': { name: 'Escudero Luminoso', text: 'Al morir: tus aliados ganan +1 de ataque y +1 de vida.' },
  'machinist-of-brass': {
    name: 'Maquinista de Latón',
    text: 'Al entrar: si tenés otro Inventor, robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'machinist-of-the-foundry': {
    name: 'Maquinista de la Fundición',
    text: 'Al entrar: tus otros Inventores ganan Escudo.',
    flavor: 'Si hace tic tac, ella lo arregla.'
  },
  'magma-brute-of-mana': {
    name: 'Bruto de Magma de Maná',
    text: 'Al empezar cada fase: si no tenés cartas en la mano, robá una carta.'
  },
  'magma-brute-of-the-long-road': {
    name: 'Bruto de Magma del Largo Camino',
    text: 'Al morir: tus Elementales ganan +1 de ataque y +1 de vida.'
  },
  'malachar-the-unmade': {
    name: 'Malachar el Deshecho',
    text: 'Escarcha del Deshecho (6), un hechizo: congelá a cada aliado enemigo. Cuando jugás un hechizo, hacé 1 de daño de sombra al héroe enemigo.',
    flavor: 'Se deshizo a sí mismo para ver qué hay más allá del tiempo.',
    ability: {
      name: 'Escarcha del Deshecho',
      text: 'Un hechizo: congelá a cada aliado enemigo.'
    }
  },
  'malachars-blast': {
    name: 'Estallido de Malachar',
    text: 'Hacé 10 de daño de sombra a un slot enemigo; si mata a un aliado, robá 2 cartas.'
  },
  'mammoth-of-the-hunt': {
    name: 'Mamut de la Cacería',
    text: 'Cuando entra otra Fiera tuya: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'mana-bound-mine': {
    name: 'Mina Atada al Maná',
    text: 'Cuando el enemigo usa una habilidad: congelá a un aliado enemigo al azar y robá una carta.'
  },
  'mana-bound-pyromancer': {
    name: 'Piromante Atado al Maná',
    text: 'Al entrar: robá la primera habilidad de tu mazo.'
  },
  'manacle-of-the-hawk': {
    name: 'Grillete del Halcón',
    text: 'Se adjunta a un aliado enemigo: cada vez que ataca, tu héroe se cura 3.'
  },
  'map-of-the-long-road': {
    name: 'Mapa del Largo Camino',
    text: 'Destruí el arma enemiga. Tu héroe gana 1 de energía por cada punto de ataque que tenía. Rápida.',
    flavor: 'Los caminos se mueven. El mapa se mueve con ellos.'
  },
  'map-of-the-wanderer': {
    name: 'Mapa del Errante',
    text: 'Tus aliados con 3 de ataque o menos ganan +3 de ataque en esta fase. Instantánea.',
    flavor: 'Siempre señala donde no estás.'
  },
  'marble-fury': {
    name: 'Furia de Mármol',
    text: 'Un aliado tuyo con Protector gana +7 de ataque esta fase. Instantánea.',
    flavor: 'Fría como el mármol, dura como un emperador.'
  },
  'mark-of-the-doomed': {
    name: 'Marca del Condenado',
    text: 'Adjuntala a un aliado enemigo: al empezar cada fase, hacele 2 de daño de sombra. Cuando muere: invocá un Esqueleto Alzado.'
  },
  'master-forger': {
    name: 'Maestro Forjador',
    text: 'La última arma o armadura de tu pila vuelve a tu mano.',
    flavor: 'En su fragua, nada roto queda roto.'
  },
  'maw-the-elder-rex': {
    name: 'Fauces, el Rex Anciano',
    text: 'Al entrar: un aliado enemigo al azar queda como tu Presa y recibe 6 de daño de tierra.',
    flavor: 'Más viejo que la jungla, y con más hambre.'
  },
  'memory-core': { name: 'Núcleo de Memoria', text: 'Adjuntalo a un aliado tuyo: cuando muere, robá 2 cartas.' },
  'mending-of-light': {
    name: 'Remedio de la Luz',
    text: 'Tu héroe se cura 9.',
    flavor: 'La luz llena primero las grietas.'
  },
  'mending-of-mercy': {
    name: 'Remedio de la Misericordia',
    text: 'Tu héroe y tus aliados se curan 5.',
    flavor: 'La misericordia también cura a quien la da.'
  },
  'mercenary-of-borrowed-hours': {
    name: 'Mercenario de las Horas Prestadas',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 6 de daño de tiempo a un slot enemigo.' }
  },
  'mercenary-of-the-crossroads': {
    name: 'Mercenario de la Encrucijada',
    text: 'Al entrar: la armadura enemiga pierde 2 de durabilidad.',
    flavor: 'Leal al que pague, en el siglo que sea.'
  },
  'mercenary-of-the-wanderer': {
    name: 'Mercenario del Errante',
    text: 'Al empezar cada fase: tu héroe se cura 1 por cada Errante tuyo.'
  },
  'midnight-bargain': {
    name: 'Trato de Medianoche',
    text: 'Tu héroe recibe 3 de daño de sombra. Robá el primer aliado de tu mazo.'
  },
  'midnight-chrome-brawler': {
    name: 'Peleador Cromado de Medianoche',
    text: 'Después de recibir daño: si está Mejorado, gana +2 de ataque.'
  },
  'midnight-countermeasure': {
    name: 'Contramedida de Medianoche',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño de sombra al héroe enemigo.'
  },
  'midnight-daze': {
    name: 'Aturdimiento de Medianoche',
    text: 'Aturdí por dos fases a un aliado enemigo de costo 3 o menos. Rápida.',
    flavor: 'Demasiadas luces, muy poco tiempo.'
  },
  'midnight-insignia': {
    name: 'Insignia de Medianoche',
    text: 'Adjuntalo a un aliado tuyo: gana +1 de ataque y Rápido. Al empezar cada fase, gana +1 de ataque y +1 de vida.'
  },
  'midnight-mech': { name: 'Mecha de Medianoche', text: 'Al entrar: robá el primer Cíborg de tu mazo.' },
  'might-of-iron': {
    name: 'Fuerza de Hierro',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase y Barrido. Instantánea.',
    flavor: 'Fuerza forjada, no heredada.'
  },
  'might-of-light': {
    name: 'Fuerza de la Luz',
    text: 'Tus Hadas ganan +2 de ataque y +3 de vida.',
    flavor: 'Hasta las sombras se corren.'
  },
  'might-of-lost-time': {
    name: 'Fuerza del Tiempo Perdido',
    text: 'Tus aliados ganan +3 de ataque esta fase. Instantánea.',
    flavor: 'Poder prestado de héroes olvidados.'
  },
  'might-of-the-long-road': {
    name: 'Fuerza del Largo Camino',
    text: 'Un aliado tuyo gana +3 de ataque, +4 de vida y Embestida. Instantánea.',
    flavor: 'Cada milla recorrida fortalece el brazo.'
  },
  'might-of-the-tar-pits': {
    name: 'Fuerza de los Pozos de Brea',
    text: 'Un aliado tuyo gana +2 de ataque y Sigilo.',
    flavor: 'Fuerza de la tierra negra y profunda.'
  },
  'might-of-the-vanguard': {
    name: 'Fuerza de la Vanguardia',
    text: 'Los aliados al lado de un aliado tuyo ganan +3 de ataque esta fase. Instantánea.',
    flavor: 'La primera línea es donde empiezan las leyendas.'
  },
  'might-of-the-warlord': {
    name: 'Fuerza del Caudillo',
    text: 'Un aliado tuyo gana +5 de ataque en esta fase y recibe 2 de daño de sombra. Instantánea.',
    flavor: 'Su fuerza fluye a cada soldado.'
  },
  'might-of-valor': {
    name: 'Fuerza del Valor',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'Los corazones valientes golpean más fuerte.'
  },
  'molten-slag-automaton': {
    name: 'Autómata de Escoria Fundida',
    text: 'Sus espinas son de fuego: queman a quien lo ataca.',
    flavor: 'Tocalo una vez. Solo una.'
  },
  'moonlit-basilisk': {
    name: 'Basilisco Lunar',
    text: 'Al morir: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'moonlit-battlemage': {
    name: 'Mago de Batalla Lunar',
    text: 'Cuando entra otro Hechicero tuyo: tu héroe se cura 2.'
  },
  'moonlit-wisp': {
    name: 'Fuego Fatuo Lunar',
    text: 'Al entrar: devolvé a la mano de su dueño a un aliado enemigo al azar de costo 2 o menos.'
  },
  'morgrath-lich-abbot': {
    name: 'Morgrath, el Abad Liche',
    text: 'Alzamiento Impío (4): el último aliado tuyo que fue derrotado vuelve al juego. Cuando muere otro aliado tuyo, hacé 2 de daño de sombra a un aliado enemigo al azar.',
    flavor: 'Rezó por la vida eterna. Algo le contestó.',
    ability: {
      name: 'Alzamiento Impío',
      text: 'El último aliado tuyo que fue derrotado vuelve al juego.'
    }
  },
  'morgraths-blast': {
    name: 'Estallido de Morgrath',
    text: 'Hacé 8 de daño de sombra a un slot enemigo. Después Consumir 2; si lo hacés, robá 2 cartas.'
  },
  'morgraths-satyr': {
    name: 'Sátiro de Morgrath',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otra Hada tuya. Al morir: hacé 6 de daño de sombra a un aliado enemigo al azar.'
  },
  'morning-star-pilgrim': { name: 'Peregrina del Lucero', text: 'Al morir: tu héroe se cura 6 y robás una carta.' },
  'nameless-saddle': {
    name: 'Montura Sin Nombre',
    text: 'Se adjunta a un aliado tuyo: gana +2 de ataque y +3 de vida. Cuando ese aliado ataca: gana +1 de ataque.'
  },
  'nanite-swarm': { name: 'Enjambre de Nanitos', text: 'Adjuntalo a un aliado tuyo: al empezar cada fase, se cura 3.' },
  'neon-mech': { name: 'Mecha de Neón', text: 'Al atacar: hacé 2 de daño de rayo al héroe enemigo.' },
  'neon-thug': {
    name: 'Matón de Neón',
    text: 'Al empezar cada fase: si está Mejorado, hacé 2 de daño a un aliado enemigo al azar.',
    flavor: 'Se vence el alquiler. Y tus dientes también.'
  },
  'net-of-ice': {
    name: 'Red de Hielo',
    text: 'Cuando se invoca un aliado enemigo: congelalo durante 2 fases y queda como tu Presa.',
    flavor: 'Atrapa y conserva.'
  },
  'net-of-the-pack': {
    name: 'Red de la Jauría',
    text: 'Cuando se invoca un aliado enemigo: hacele 6 de daño y tus Bestias ganan +1 de ataque.',
    flavor: 'La jauría empuja, la red atrapa.'
  },
  'net-of-the-quarry': {
    name: 'Red de la Presa',
    text: 'Cuando se invoca un aliado enemigo: hacele 3 de daño y robá una carta.',
    flavor: 'Lo que cae, se queda.'
  },
  'net-of-the-volcano': {
    name: 'Red del Volcán',
    text: 'Cuando se invoca un aliado enemigo: hacé 4 de daño de fuego a él y a los aliados a su lado.',
    flavor: 'Tejida con lava y paciencia.'
  },
  'netrunner-of-the-grid': {
    name: 'Corredora de Red de la Red',
    text: 'Al entrar: tus otros Hackers ganan +1 de ataque y +1 de vida.'
  },
  'netrunner-of-the-pack': {
    name: 'Corredora de Red de la Jauría',
    text: 'Al entrar: el héroe enemigo pierde 1 de energía por cada Hacker tuyo.',
    flavor: 'Caza en paquetes de datos, no en manadas.'
  },
  'neural-hijack': {
    name: 'Secuestro Neural',
    text: 'Un aliado enemigo ataca a su propio héroe y después es destruido.',
    flavor: 'Tu soldado. Mis órdenes.'
  },
  'neural-implant': {
    name: 'Implante Neural',
    text: 'Adjuntalo a un aliado tuyo: gana +1 de ataque, +1 de vida y Rápido.'
  },
  'night-ambusher': { name: 'Emboscador Nocturno', text: 'Sus ataques a un aliado herido hacen 3 de daño más.' },
  'night-prowler-suit': {
    name: 'Traje de Merodeador Nocturno',
    text: 'Cuando el ataque de tu héroe le pega al héroe enemigo: sacale una carta al azar de la mano al rival.',
    flavor: 'Cada bolsillo es una puerta abierta.'
  },
  'nightmare-of-the-abyss': { name: 'Pesadilla del Abismo', text: 'Al entrar: envenená al héroe enemigo (3).' },
  'nightmare-of-the-void': {
    name: 'Pesadilla del Vacío',
    text: 'Al morir: tus Horrores ganan +1 de ataque y +1 de vida.'
  },
  'nightwire-net': {
    name: 'Red Nightwire',
    text: 'Cuando ataca un aliado enemigo: cancelá el ataque, destruilo y robá una carta.'
  },
  'nocturnal-call': {
    name: 'Llamado Nocturno',
    text: 'Invocá un Cachorro de Dientes de Sable.',
    flavor: 'La noche tiene oídos, y escucha.'
  },
  'nocturnal-idol': {
    name: 'Ídolo Nocturno',
    text: 'Al empezar cada fase: Consumir 1; si lo hacés, hacé 3 de daño de sombra al héroe enemigo.'
  },
  'nocturnal-shot': {
    name: 'Disparo Nocturno',
    text: 'Hacé 5 de daño de sombra a un slot enemigo, +2 por cada Errante tuyo.'
  },
  'nocturnal-vest': {
    name: 'Chaleco Nocturno',
    text: 'Al equiparla: el héroe enemigo pierde 2 de energía.',
    flavor: 'Más oscuro que la noche en la que se esconde.'
  },
  'nymph-of-grace': { name: 'Ninfa de la Gracia', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'nymph-of-the-ancestors': { name: 'Ninfa de los Ancestros', text: 'Al morir: invocá un Espíritu Guardián.' },
  'nymph-of-the-tower': {
    name: 'Ninfa de la Torre',
    text: 'Canalizar: cuando lanzás un hechizo, se cura 3.',
    flavor: 'Le canta al musgo de las piedras viejas.'
  },
  'nysas-bow': { name: 'Arco de Nysa', text: 'Cuando tu héroe ataca a una Presa con él: robá una carta.' },
  'nyx-hollowsong': {
    name: 'Nyx Hollowsong',
    text: 'Debilitación Total (5): todos los aliados enemigos tienen -2 de ataque. Cuando muere un aliado enemigo con una maldición, tu héroe se cura 3.',
    flavor: 'Su canto llega a los muertos. Siempre vuelven a escuchar.',
    ability: { name: 'Debilitación Total', text: 'Todos los aliados enemigos tienen -2 de ataque.' }
  },
  'nyxs-idol': { name: 'Ídolo de Nyx', text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.' },

  'nyxs-lantern-of-return': {
    name: 'Farol del Retorno de Nyx',
    text: 'Al empezar cada fase: Consumir 3; si lo hacés, un aliado al azar de tu pila vuelve al juego.'
  },
  'oath-of-the-dawn': { name: 'Juramento del Alba', text: 'Tus aliados ganan Represalia.' },
  'obelisk-of-flame': {
    name: 'Obelisco de Llamas',
    text: 'Al empezar cada fase: quemá a un aliado enemigo al azar (2). (3 usos)'
  },
  'obelisk-of-the-grave': {
    name: 'Obelisco de la Tumba',
    text: 'Cuando muere un aliado tuyo: tu héroe se cura 3. (4 usos)'
  },
  'offering-lamb': {
    name: 'Cordero del Sacrificio',
    text: 'Sacrificá un aliado tuyo: robá tantas cartas como su costo (hasta 3).',
    flavor: 'Los dioses comen. Las páginas pasan.'
  },
  'oiled-clockmaker': { name: 'Relojero Aceitado', text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2.' },
  'oiled-monolith': {
    name: 'Monolito Aceitado',
    text: 'Cuando entra un Autómata tuyo: gana +1 de ataque y +2 de vida.'
  },
  'old-blessing': {
    name: 'Bendición Vieja',
    text: 'Tu héroe se cura 6. Robá la primera trampa de tu mazo.',
    flavor: 'Más vieja que los dioses que la dieron.'
  },
  'old-cartographer': {
    name: 'Cartógrafa Vieja',
    text: 'Al morir: robá el primer aliado de tu mazo.',
    flavor: 'Dibujó la Grieta antes de que se abriera.'
  },
  'old-chrononaut': {
    name: 'Crononauta Viejo',
    text: 'Al entrar: robá una carta.',
    flavor: 'Recuerda el mañana mejor que el ayer.'
  },
  'old-potion': {
    name: 'Poción Vieja',
    text: 'Aturdí a un aliado enemigo. Rápida.',
    flavor: 'La etiqueta se borró hace siglos.'
  },
  'old-tusk': {
    name: 'Viejo Colmillo',
    text: 'Al empezar cada fase: tus otras Bestias se curan 3.',
    flavor: 'El compañero más viejo de Ooma, y el más pesado.'
  },
  'omnigears-gyrocopter': {
    name: 'Girocóptero de Omnigear',
    text: 'Al entrar: tus otras Aeronaves ganan +2 de ataque y +2 de vida. Al empezar cada fase: tu héroe se cura 2.'
  },
  'omnigears-hammer': {
    name: 'Martillo de Omnigear',
    text: 'Cuando tu héroe ataca con él: invocá un Dron de Engranajes.',
    flavor: 'Calibrado al nanómetro, empuñado con furia.'
  },
  'ooma-bonewhisper': {
    name: 'Ooma Bonewhisper',
    text: 'Crecimiento Ancestral (4): un aliado tuyo gana +5 de ataque y +6 de vida. Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'Los huesos de los ancestros hablan. Ella escucha.',
    ability: { name: 'Crecimiento Ancestral', text: 'Un aliado tuyo gana +5 de ataque y +6 de vida.' }
  },
  'oomas-banner': {
    name: 'Estandarte de Ooma',
    text: 'Al empezar cada fase: un aliado enemigo al azar queda como tu Presa.'
  },
  'oomas-spirit-snare': {
    name: 'Lazo Espiritual de Ooma',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, queda como tu Presa e invocá un Cachorro Dientes de Sable.'
  },
  'open-grimoire': {
    name: 'Grimorio Abierto',
    text: 'Robá los 2 primeros hechizos de tu mazo.'
  },
  'optic-implant': { name: 'Implante Óptico', text: 'Adjuntalo a un aliado tuyo: gana +1 de ataque y A distancia.' },
  'orb-of-flame': {
    name: 'Orbe de Llamas',
    text: 'Cuando tu héroe ataca con él: quemá al objetivo (2).',
    flavor: 'Un pequeño sol que obedece.'
  },
  'orb-of-storms': {
    name: 'Orbe de Tormentas',
    text: 'Cuando tu héroe ataca con él: hacé 2 de daño de rayo a un aliado enemigo al azar.',
    flavor: 'Una tormenta en un frasco, sin el frasco.'
  },
  'ossuary-altar': {
    name: 'Altar del Osario',
    text: 'Cuando muere un aliado enemigo que tenía una maldición: robá una carta. (3 usos)'
  },
  'ossuary-knight': {
    name: 'Caballero Osario',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Lo enterraron con su espada, y se la quedó.',
    ability: { name: 'Furia de Hueso', text: 'Gana +4 de ataque en esta fase.' }
  },
  'overclock-chip': {
    name: 'Chip de Sobrecarga',
    text: 'Adjuntalo a un aliado tuyo: gana +3 de ataque. Al terminar cada fase, recibe 1 de daño.'
  },
  'overclock-gadget': {
    name: 'Sobrecarga Total',
    text: 'Destruí todos tus artefactos: por cada uno, hacé 2 de daño al héroe enemigo y robá una carta (hasta 3 cartas).'
  },
  'overclock-hacker': {
    name: 'Hacker Sobrecargado',
    text: 'Tus aliados Mejorados (con un implante) tienen Sigilo hasta que atacan.'
  },
  'overclocked-piston-titan': {
    name: 'Titán de Pistones Acelerado',
    text: 'Al terminar cada fase: recibe 2 de daño y gana +2 de ataque.'
  },
  'overdriven-sentry-bot': {
    name: 'Robot Centinela Sobrecargado',
    text: 'Al terminar cada fase: tus aliados Mejorados se curan 2.'
  },
  'pain-for-power': {
    name: 'Dolor por Poder',
    text: 'Destruí a un aliado tuyo. Robá 2 cartas y tu héroe gana 2 de energía.'
  },
  'pale-voidcaller': {
    name: 'Invocadora del Vacío Pálida',
    text: 'Al entrar: Consumir 3; si lo hacés, gana +4 de ataque y +4 de vida.',
    flavor: 'Cuando habla, la oscuridad responde.'
  },
  'pale-zealot': {
    name: 'Fanática Pálida',
    text: 'Al entrar: robá el primer Cultista de tu mazo. Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'panopticon-feed': {
    name: 'Señal del Panóptico',
    text: 'Robá 2 cartas y aturdí a un aliado enemigo al azar.',
    flavor: 'Sonreí. Siempre estás en cámara.'
  },
  'parasite-code': {
    name: 'Código Parásito',
    text: 'Adjuntalo a un aliado enemigo: tiene -2 de ataque, y su héroe pierde 1 de energía al empezar cada fase.'
  },
  'patchwork-armor-of-lost-time': {
    name: 'Armadura de Retazos del Tiempo Perdido',
    text: 'Cuando un artefacto tuyo sale del juego: esta armadura gana +1 de durabilidad.',
    flavor: 'Una placa romana, una manga samurái, una hebilla del futuro.'
  },
  'patented-tick': {
    name: 'Tic Patentado',
    text: 'Destruí un artefacto tuyo: tu héroe gana tanta energía como su costo. Instantánea.',
    flavor: 'Patente en trámite desde 1887.'
  },
  'patented-tripwire': {
    name: 'Cable Trampa Patentado',
    text: 'Cuando el rival invoca un aliado: hacele 7 de daño.',
    flavor: 'Modelo 7. Los modelos 1 al 6 atraparon a sus inventores.'
  },
  'patient-bard': {
    name: 'Bardo Paciente',
    text: 'Al entrar: robá el primer adjunto de tu mazo.',
    flavor: 'Espera el momento perfecto para cantar.'
  },
  'patient-sabertooth': {
    name: 'Dientes de Sable Paciente',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable. Al morir: hacé 8 de daño a un aliado enemigo al azar.'
  },
  'patient-sabotage': {
    name: 'Sabotaje Paciente',
    text: 'El arma enemiga pierde 1 de durabilidad por cada artefacto tuyo. Rápida.'
  },
  'patient-vest': {
    name: 'Chaleco Paciente',
    text: 'Todo daño que reciben tus aliados Mejorados es 1 menor.',
    flavor: 'Espera, igual que quien lo lleva.'
  },
  'pegasus-of-still-waters': {
    name: 'Pegaso de las Aguas Quietas',
    text: 'Al entrar: devolvé un aliado enemigo que cueste 2 o menos a la mano de su dueño.',
    flavor: 'Solo bebe de lagos que reflejan las estrellas.'
  },
  'pegasus-of-the-tower': { name: 'Pegaso de la Torre', text: 'Al entrar: robá la primera Hada de tu mazo.' },
  'phalanx-oath': {
    name: 'Juramento de la Falange',
    text: 'Al empezar cada fase, si tenés al menos un aliado: tu héroe se cura 2.',
    flavor: 'Juntos resistimos. Solos caemos.'
  },
  'phalanx-of-bronze': {
    name: 'Falange de Bronce',
    text: 'Sus ataques hacen 2 de daño más por cada aliado a su lado.',
    flavor: 'Un escudo es un muro. Doce son un imperio.'
  },
  'phalanx-of-steel': { name: 'Falange de Acero', text: 'Al entrar: si tenés otro Legionario, robá una carta.' },
  'phalanx-of-the-legion': {
    name: 'Falange de la Legión',
    text: 'Al entrar: tu héroe se cura 3 por cada Legionario tuyo.',
    flavor: 'La columna de la legión, el muro del enemigo.'
  },
  'phalanx-of-the-warlord': {
    name: 'Falange del Caudillo',
    text: 'Al atacar: gana +2 de ataque y tu héroe recibe 1 de daño de sombra.',
    flavor: 'Se mueven como uno y no cae ninguno.'
  },
  'pickaxe-of-borrowed-hours': {
    name: 'Pico de las Horas Prestadas',
    text: 'Cuando tu héroe ataca con ella: ganás 1 Cronos esta fase.',
    flavor: 'Cava a través del tiempo en lugar de la piedra.'
  },
  'pickaxe-of-lost-time': {
    name: 'Pico del Tiempo Perdido',
    text: 'Los ataques de tu héroe con ella hacen 2 de daño más por cada artefacto tuyo (hasta +6).',
    flavor: 'Extrae las horas que nadie usa.'
  },
  'pilgrim-of-dawn': {
    name: 'Peregrina del Alba',
    text: 'Al entrar: tu héroe pierde su veneno y su quemadura y se cura 4.'
  },
  'pilgrim-of-dusk': {
    name: 'Peregrina del Ocaso',
    text: 'Al entrar: el rival descarta una carta al azar y tu héroe recibe 3 de daño de sombra.'
  },
  'pilgrim-of-ice': {
    name: 'Peregrina de Hielo',
    text: 'Al entrar: congelá a un aliado enemigo al azar. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'pilgrim-of-the-crossroads': {
    name: 'Peregrina de la Encrucijada',
    text: 'Al entrar: ganás 1 Cronos en esta fase. Al morir: invocá una Chispa de la Grieta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'pit-of-iron': {
    name: 'Foso de Hierro',
    text: 'Cuando se invoca un aliado enemigo: aturdilo y hacele 3 de daño de tierra.',
    flavor: 'El fondo está más lejos de lo que parece.'
  },
  'pit-of-spirits': {
    name: 'Foso de los Espíritus',
    text: 'Cuando el rival usa una habilidad: hacé 5 de daño de luz a cada aliado enemigo que sea tu Presa.'
  },
  'pixie-of-spirits': {
    name: 'Hadita de los Espíritus',
    text: 'Al entrar: hacé 1 de daño de luz al héroe enemigo por cada Hada tuya.'
  },
  'pixie-of-the-ancestors': { name: 'Hadita de los Ancestros', text: 'Al morir: robá la primera Hada de tu mazo.' },
  'plague-bearer': {
    name: 'Portador de la Plaga',
    text: 'Al empezar cada fase: hacé 1 de daño de sombra a cada aliado enemigo que tenga una maldición.'
  },
  'plasma-arm': {
    name: 'Brazo de Plasma',
    text: 'Adjuntalo a un aliado tuyo: gana +3 de ataque y sus ataques hacen daño de rayo.'
  },
  'plasma-colossus': {
    name: 'Coloso de Plasma',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Su cañón se calienta como un sol.',
    ability: { name: 'Cañón de Plasma', text: 'Hacé 8 de daño de fuego a un slot enemigo.' }
  },
  'plate-of-rage': {
    name: 'Coraza de la Ira',
    text: 'Al empezar cada fase: si tu héroe tiene un arma, hacé 1 de daño al héroe enemigo.',
    flavor: 'La furia es el mejor remache.'
  },
  'plate-of-steel': { name: 'Coraza de Acero', flavor: 'Acero viejo, promesas más viejas.' },
  'plate-of-the-last-stand': {
    name: 'Coraza de la Última Defensa',
    text: 'Al equiparla: si tu héroe tiene un arma, robá 2 cartas.',
    flavor: 'La usan los que no van a dar un paso atrás.'
  },
  'plating-of-mana': {
    name: 'Blindaje de Maná',
    text: 'Adjuntalo a un aliado tuyo: gana +5 de vida, y todo daño que recibe es 2 menor.'
  },
  'poisoned-gift': {
    name: 'Regalo Envenenado',
    text: 'Cada jugador roba 3 cartas.',
    flavor: 'Todos reciben un regalo. No todos lo quieren.'
  },
  'portable-workshop': {
    name: 'Taller Portátil',
    text: 'Al empezar cada fase: robá el primer artefacto de tu mazo. (2 usos)'
  },
  'praetor-sabina': {
    name: 'Pretora Sabina',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque.',
    flavor: 'Leal a la corona, la lleve quien la lleve.'
  },
  'prayer-of-renewal': { name: 'Plegaria de Renovación', text: 'Tus aliados se curan por completo.' },
  'precise-clockmaker': {
    name: 'Relojero Preciso',
    text: 'Al entrar: ganás 1 Cronos esta fase por cada artefacto tuyo.',
    flavor: 'Nunca llega tarde. No lo permite.'
  },
  'pressure-valve': {
    name: 'Válvula de Presión',
    text: 'Al empezar cada fase: si tenés 5 artefactos o más, hacé 3 de daño al héroe enemigo.'
  },
  'prismatic-battlemage': {
    name: 'Mago de Batalla Prismático',
    text: 'Al morir: tus Hechiceros ganan +1 de ataque y +1 de vida. Al entrar: tu héroe gana 1 de energía.'
  },
  'prophet-of-the-labyrinth': {
    name: 'Profeta del Laberinto',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'prototype-zero': {
    name: 'Prototipo Cero',
    text: 'Al entrar: invocá 2 Drones de Engranajes.',
    flavor: 'La primera máquina que construyó Omnigear. La única que conservó.'
  },
  'proud-gorgon': {
    name: 'Gorgona Orgullosa',
    text: 'Al entrar: invocá un Conscripto Hoplita. Al atacar: tu héroe se cura 2.'
  },
  'pulse-blaster': {
    name: 'Bláster de Pulso',
    text: 'Mientras tengas un aliado Mejorado (con un implante): tus ataques hacen 2 de daño más.'
  },
  'purge-protocol-bot': {
    name: 'Bot de Protocolo de Purga',
    text: 'Al entrar: destruí todos los adjuntos de los aliados enemigos.'
  },
  'queen-static': {
    name: 'Reina Estática',
    text: 'Interferencia (4): al terminar esta fase, el rival descarta 2 cartas al azar. Al final de cada fase, hacé 2 de daño de rayo al héroe enemigo.',
    flavor: 'Vive en el ruido entre los canales.',
    ability: { name: 'Interferencia', text: 'Al terminar esta fase, el rival descarta 2 cartas al azar.' }
  },
  'queen-statics-blowgun': {
    name: 'Pistola de Arco de la Reina Estática',
    text: 'Cuando tu héroe ataca con ella: el héroe enemigo pierde 1 de energía.'
  },
  'queen-statics-gunslinger': {
    name: 'Pistolera de la Reina Estática',
    text: 'Al morir: tus Sicarios ganan +1 de ataque y +1 de vida. Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'radiant-fury': {
    name: 'Furia Radiante',
    text: 'Un aliado tuyo gana +2 de ataque esta fase y se cura 4. Instantánea.',
    flavor: 'La ira sagrada brilla fuerte.'
  },
  'radiant-halo': {
    name: 'Halo Radiante',
    text: 'Al empezar cada fase: con Panoplia, tu héroe se cura 3.',
    flavor: 'Una luz que se niega a apagarse.'
  },
  'radiant-insignia': {
    name: 'Insignia Radiante',
    text: 'Adjuntala a un aliado tuyo: gana +2 de vida.',
    flavor: 'Llevada con orgullo, brilla con propósito.'
  },
  'radiant-stance': {
    name: 'Postura Radiante',
    text: 'Tu armadura gana +3 de durabilidad y tu héroe se cura 5.',
    flavor: 'Quedate en la luz y no te muevas.'
  },
  'radiant-zombie': {
    name: 'Zombi Radiante',
    text: 'Al entrar: tus otros No Muertos ganan +2 de vida.',
    flavor: 'Bendecido por error.'
  },
  'rally-of-grace': {
    name: 'Arenga de la Gracia',
    text: 'Los aliados al lado de un aliado tuyo ganan +1 de ataque y +3 de vida.',
    flavor: 'Reúnanse en la luz.'
  },
  'rally-of-light': {
    name: 'Arenga de la Luz',
    text: 'Tus Legionarios ganan +3 de ataque esta fase. Instantánea.',
    flavor: 'Reúnanse, hijos del alba.'
  },
  'rally-of-lost-time': {
    name: 'Arenga del Tiempo Perdido',
    text: 'Un aliado tuyo gana +2 de ataque esta fase. Robá una carta. Instantánea.',
    flavor: 'Soldados de todas las eras responden al llamado.'
  },
  'rally-of-steel': {
    name: 'Arenga de Acero',
    text: 'Tus Colosos ganan +1 de ataque y +2 de vida.',
    flavor: 'Alcen las espadas. Alcen la voz.'
  },
  'rally-of-the-arcanum': {
    name: 'Arenga del Arcano',
    text: 'Un aliado tuyo que tenga un adjunto gana +6 de ataque esta fase. Instantánea.',
    flavor: '¡Magos a la torre! ¡Traigan sus libros!'
  },
  'rally-of-the-hawk': {
    name: 'Arenga del Halcón',
    text: 'Un aliado tuyo gana +2 de ataque y +2 de vida por cada aliado tuyo a su lado. Instantánea.',
    flavor: 'El halcón vuela en círculos. Los cazadores se reúnen.'
  },
  'rally-of-the-hunt-moon': {
    name: 'Arenga de la Luna de Caza',
    text: 'Tus Bestias ganan +2 de ataque y +2 de vida. Instantánea.',
    flavor: 'Bajo la luna de caza, la tribu es una.'
  },
  'rally-of-the-labyrinth': {
    name: 'Arenga del Laberinto',
    text: 'Tu aliado con menos ataque gana +5 de ataque esta fase. Instantánea.',
    flavor: 'Perdidos en el laberinto, reencontrados en la pelea.'
  },
  'rally-of-the-volcano': {
    name: 'Arenga del Volcán',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase y Rápido. Instantánea.',
    flavor: 'La montaña ruge y la tribu responde.'
  },
  'rally-of-valor': {
    name: 'Arenga del Valor',
    text: 'Un aliado tuyo gana +1 de ataque y +1 de vida. Con Panoplia, robá una carta.',
    flavor: 'El valor es contagioso.'
  },
  'raptor-hatchling': { name: 'Cría de Raptor', flavor: 'Nació con hambre.' },
  'recirculation-core': {
    name: 'Núcleo de Recirculación',
    text: 'Reciclar (2⚡): mezclá el último aliado de tu pila en tu mazo, y tu héroe se cura 4.',
    flavor: 'Nada se pierde. Todo se reconstruye.',
    ability: { name: 'Reciclar', text: 'Mezclá el último aliado de tu pila en tu mazo, y tu héroe se cura 4.' }
  },
  'reckless-berserker': {
    name: 'Berserker Temerario',
    text: 'Al atacar: gana +2 de ataque en esta fase y tu héroe recibe 2 de daño de sombra.'
  },
  'recruit-of-the-warlord': { name: 'Recluta del Caudillo', text: 'Al entrar: robá la primera arma de tu mazo.' },
  'reflex-booster': {
    name: 'Potenciador de Reflejos',
    text: 'Adjuntalo a un aliado tuyo: cada vez que ataca, gana +2 de ataque esta fase.'
  },
  'rejuvenation-pod': {
    name: 'Cápsula de Rejuvenecimiento',
    text: 'Cuando entra un Autómata tuyo: gana +2 de vida. Reconstruir (1⚡): mezclá el último Autómata de tu pila en tu mazo.',
    flavor: 'Entra roto, sale como nuevo.',
    ability: { name: 'Reconstruir', text: 'Mezclá el último Autómata de tu pila en tu mazo.' }
  },
  'rekindled-hope': { name: 'Esperanza Reavivada', text: 'El último aliado tuyo que murió vuelve al juego.' },
  'relentless-fury': {
    name: 'Furia Implacable',
    text: 'Un aliado tuyo gana +3 de ataque esta fase, o +6 si es tu único aliado. Instantánea.',
    flavor: 'No se detiene. No se cansa.'
  },
  'relentless-hitman': {
    name: 'Asesino a Sueldo Implacable',
    text: 'Al morir: tus otros Sicarios ganan +2 de ataque.',
    flavor: 'Nunca falla un plazo.'
  },
  'relentless-rune': {
    name: 'Runa Implacable',
    text: 'Adjuntalo a un aliado enemigo: al empezar cada fase, congelalo.'
  },
  'relic-of-the-ancestors': {
    name: 'Reliquia de los Ancestros',
    text: 'Al empezar cada fase: tu héroe se cura 1 y hacé 1 de daño de luz al héroe enemigo.'
  },
  'repair-bay': { name: 'Taller de Reparación', text: 'Al empezar cada fase: tus aliados se curan 2. (3 usos)' },
  'respite-of-mercy': {
    name: 'Respiro de la Misericordia',
    text: 'Un aliado tuyo se cura 12 y gana Represalia.',
    flavor: 'Un respiro entre batallas es un regalo.'
  },
  'respite-of-renewal': {
    name: 'Respiro de la Renovación',
    text: 'Tu héroe se cura 9, o 18 si tiene menos de la mitad de su vida.',
    flavor: 'Descansá. La guerra puede esperar.'
  },
  'respite-of-the-crossroads': {
    name: 'Respiro de la Encrucijada',
    text: 'Tu héroe se cura 6 y pierde su veneno y su quemadura.',
    flavor: 'Todos los caminos terminan en una fogata.'
  },
  'restless-banner': {
    name: 'Estandarte Inquieto',
    text: 'Al empezar cada fase: hacé 3 de daño a un aliado enemigo al azar. (3 usos)'
  },
  'restless-deserter': {
    name: 'Desertor Inquieto',
    text: 'Al entrar: tu héroe gana 1 de energía.',
    flavor: 'Él dejó la guerra. La guerra no lo dejó a él.'
  },
  'restless-icicle': {
    name: 'Carámbano Inquieto',
    text: 'Al entrar: congelá a todos los aliados enemigos con 3 de ataque o menos.'
  },
  'restless-ration': {
    name: 'Ración Inquieta',
    text: 'Un aliado tuyo gana +3 de ataque y se cura 5. Instantánea.',
    flavor: 'Comida del futuro. Sabe a pasado.'
  },
  'restless-wanderer': {
    name: 'Vagabundo Inquieto',
    text: 'Al empezar cada fase: un aliado tuyo al azar se cura 3.',
    flavor: 'Dormir es para los que tienen un solo siglo.'
  },
  'retreat-order': {
    name: '¡Retirada!',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Vivir para pelear otra hora.'
  },
  'ridge-render': {
    name: 'Rasgadora del Monte',
    text: 'Al atacar a un aliado que sobrevive: ese aliado pierde todo su ataque.',
    flavor: 'No mata a la bestia. La quiebra.'
  },
  'rift-spark': { name: 'Chispa de la Grieta', flavor: 'Un pedacito de la Grieta, muy vivo.' },
  'rift-touched-idol': {
    name: 'Ídolo Tocado por la Grieta',
    text: 'Al empezar cada fase: tu héroe se cura 2 por cada aliado Protector tuyo. (3 usos)',
    flavor: 'Venerado en siete eras a la vez.'
  },
  'rift-touched-squire': {
    name: 'Escudero Tocado por la Grieta',
    text: 'Al morir: el rival descarta una carta al azar.',
    flavor: 'Sirve a un caballero de otro siglo.'
  },
  'rift-touched-wanderer': {
    name: 'Vagabundo Tocado por la Grieta',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'risen-skeleton': { name: 'Esqueleto Alzado', flavor: 'La muerte fue solo una siesta larga.' },
  'rite-of-ashes': {
    name: 'Rito de las Cenizas',
    text: 'Consumir 4 (desterrá 4 cartas de tu pila). El último aliado de tu pila vuelve al juego con +2 de ataque y +2 de vida.'
  },
  'ritual-dagger': {
    name: 'Daga Ritual',
    text: 'Al equiparla: sacrificá un aliado tuyo (el que elijas, o el más débil); gana tanto ataque como tenía ese aliado.'
  },
  'ritualist-of-ash': {
    name: 'Ritualista de Ceniza',
    text: 'Al entrar: sacrificá a tu otro aliado más débil: si lo hacés, robá 2 cartas.'
  },
  'riveted-blessing': {
    name: 'Bendición Remachada',
    text: 'Adjuntalo a un aliado tuyo: gana +1 de ataque y +2 de vida por cada artefacto tuyo.'
  },
  'riveted-tick': {
    name: 'Tic Remachado',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.',
    flavor: 'Cada remache, un segundo ganado.'
  },
  'rod-of-ruin': {
    name: 'Vara de la Ruina',
    text: 'Al equiparla: tus Dracos ganan +2 de ataque y +2 de vida.',
    flavor: 'Todo lo que toca envejece.'
  },
  'rot-wave': {
    name: 'Ola de Podredumbre',
    text: 'Hacé 2 de daño de sombra a cada aliado enemigo, +1 por cada 5 cartas de tu pila.'
  },
  'rotting-eye-of-nothing': {
    name: 'Ojo de la Nada Putrefacto',
    text: 'Al entrar: tus otros Horrores ganan +1 de ataque y +1 de vida.'
  },
  'rotting-hierophant': {
    name: 'Hierofante Putrefacto',
    text: 'Al morir: invocá un Esqueleto Alzado.',
    flavor: 'Predica el evangelio de la putrefacción.'
  },
  'rotting-zombie': {
    name: 'Zombi Putrefacto',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada No-muerto tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño de sombra a un slot enemigo.' }
  },
  'runic-pyromancer': {
    name: 'Piromante Rúnico',
    text: 'Al entrar: robá el primer Hechicero de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 5.' }
  },
  'rusty-sabotage': {
    name: 'Sabotaje Oxidado',
    text: 'La armadura enemiga pierde 3 de durabilidad. Rápida.',
    flavor: 'Un poco de agua en los engranajes rinde mucho.'
  },
  'ryns-mace': {
    name: 'Bastón de Plasma de Ryn',
    text: 'Cuando tu héroe ataca con ella: un Hacker tuyo al azar gana Sigilo.',
    flavor: 'Zumba con cada golpe.'
  },
  'sabertooth-cub': { name: 'Cachorro de Dientes de Sable', flavor: 'Colmillos chicos, planes grandes.' },
  'salve-of-the-wanderer': {
    name: 'Ungüento del Errante',
    text: 'Un aliado tuyo se cura 6 y pierde su veneno y su quemadura.',
    flavor: 'Huele a cinco siglos de hierbas.'
  },
  'sanctuary-bell': {
    name: 'Campana del Santuario',
    text: 'Al empezar cada fase: robá una carta si tu héroe tiene más vida que el héroe enemigo. (4 usos)'
  },
  'sandstorm-of-dawn': {
    name: 'Tormenta de Arena del Alba',
    text: 'Al entrar: congelá a un aliado enemigo al azar durante 2 fases.'
  },
  'satyr-of-embers': { name: 'Sátiro de Brasas', text: 'Al entrar: tus otras Hadas ganan +2 de ataque y +2 de vida.' },
  'satyr-of-renewal': { name: 'Sátiro de la Renovación', text: 'Al empezar cada fase: tus Hadas se curan 2.' },
  'saurian-bone-bow': {
    name: 'Arco de Hueso Saurio',
    text: 'Tus ataques a una Presa hacen 3 de daño más.',
    flavor: 'Tallado de la costilla de la bestia que debía cazar.'
  },
  'scarred-cave-painter': {
    name: 'Pintora de Cuevas Marcada',
    text: 'Al entrar: tus otros Cavernarios ganan +1 de ataque y +1 de vida.'
  },
  'scarred-raptor': {
    name: 'Raptor Marcado',
    text: 'Al morir: un aliado enemigo al azar queda como tu Presa.',
    flavor: 'Cada cicatriz le enseñó un truco nuevo.'
  },
  'scarred-spearman': {
    name: 'Lancero Marcado',
    text: 'Cuando se activa una trampa tuya: gana +2 de ataque en esta fase y se cura 4.'
  },
  'scavenger-of-borrowed-hours': {
    name: 'Carroñera de las Horas Prestadas',
    text: 'Al entrar: destruí el artefacto enemigo más caro. Al morir: robá una carta.'
  },
  'scavenger-of-storms': {
    name: 'Carroñera de Tormentas',
    text: 'Al entrar: hacé 2 de daño de rayo al héroe enemigo y a un aliado enemigo al azar.'
  },
  'scavenger-of-the-ambush': {
    name: 'Carroñera de la Emboscada',
    text: 'Al atacar: hacé 2 de daño al héroe enemigo.',
    flavor: 'Nada en el campo de batalla se desperdicia.'
  },
  'scavenger-of-the-crossroads': {
    name: 'Carroñera de la Encrucijada',
    text: 'Al entrar: ganás 1 Cronos en esta fase. Al morir: robá una carta.'
  },
  'scavenger-of-the-rift': {
    name: 'Carroñera de la Grieta',
    text: 'Cuando entra otro Errante tuyo: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 4 de daño de tiempo a un slot enemigo.' }
  },
  'scepter-of-flame': {
    name: 'Cetro de Llamas',
    text: 'Al equiparlo: robá el primer hechizo de tu mazo.',
    flavor: 'Agitalo y el mundo se calienta.'
  },
  'scepter-of-storms': {
    name: 'Cetro de Tormentas',
    text: 'Canalizar: cuando lanzás un hechizo, gana +1 de durabilidad.',
    flavor: 'El cielo lo obedece, casi siempre.'
  },
  'scholarly-daze': {
    name: 'Aturdimiento Docto',
    text: 'Destruí un adjunto, arma o armadura enemiga; si estaba en un aliado, aturdilo. Rápida.',
    flavor: 'Una lección tan densa que aturde.'
  },
  'scholarly-pyromancer': {
    name: 'Piromante Docto',
    text: 'Al entrar: hacé 5 de daño de fuego a un aliado enemigo al azar.'
  },
  'scholarly-rust': {
    name: 'Herrumbre Docta',
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Rápida.'
  },
  'scholarly-stasis': { name: 'Estasis Docta', text: 'Congelá a un aliado enemigo y tus artefactos ganan 1 uso.' },
  'scrap-automaton': {
    name: 'Autómata de Chatarra',
    text: 'Chatarra: cuando un artefacto tuyo deja el juego, gana +2 de ataque y +2 de vida.',
    flavor: 'Hecho con lo que los demás tiraron.'
  },
  'scrap-collector': {
    name: 'Recolector de Chatarra',
    text: 'Chatarra: cuando un artefacto tuyo sale del juego, ganás 1 Cronos esta fase.'
  },
  'scrap-down': {
    name: 'Desguace',
    text: 'Destruí un artefacto tuyo: robá 2 cartas, o 3 si costaba 4 o más.',
    flavor: 'En el taller nada se tira. Mucho menos un buen engranaje.'
  },
  'scrap-plate-of-the-rift': {
    name: 'Coraza de Chatarra de la Grieta',
    text: 'Al equiparla: invocá un Dron de Engranajes.',
    flavor: 'Piezas de doce siglos, unidas por la esperanza.'
  },
  'scythe-of-the-last-dusk': {
    name: 'Guadaña del Último Ocaso',
    text: 'Cuando un ataque de tu héroe con ella mata a un aliado: gana +1 de durabilidad.',
    flavor: 'Siega la última luz de cada día.'
  },
  'senate-archive': {
    name: 'Archivo del Senado',
    text: 'Consultar (2⚡): robá una carta.',
    flavor: 'El imperio lo recuerda todo. Por un precio.',
    ability: { name: 'Consultar', text: 'Robá una carta.' }
  },
  'serene-prayer-staff': {
    name: 'Vara de Plegarias Serena',
    text: 'Al equiparlo: tus Magos se curan 4.',
    flavor: 'Cada nudo guarda una oración silenciosa.'
  },
  'serene-return': {
    name: 'Regreso Sereno',
    text: 'Consumir 5 (desterrá 5 cartas de tu pila). Los últimos 2 aliados de tu pila vuelven al juego. Lenta.'
  },
  'serene-rune': {
    name: 'Runa Serena',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque y +4 de vida. Cuando muere, robá el primer hechizo de tu mazo.'
  },
  'serene-saddle': {
    name: 'Montura Serena',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida. Cuando ese aliado muere: robá una carta.'
  },
  'serene-stance': {
    name: 'Postura Serena',
    text: 'Un aliado tuyo gana Protector y +3 de vida. Instantánea.',
    flavor: 'Quieta como una montaña, suave como la brisa.'
  },
  'servo-legs': { name: 'Piernas Servo', text: 'Adjuntalo a un aliado tuyo: gana +2 de vida y Ágil.' },
  'shackle-of-dawn': {
    name: 'Grillete del Alba',
    text: 'Aturdí a un aliado enemigo. Tus aliados Mejorados se curan 3. Rápida.',
    flavor: 'Hasta el amanecer puede tomar prisioneros.'
  },
  'shackle-of-the-pack': {
    name: 'Grillete de la Jauría',
    text: 'Drená toda la energía del héroe enemigo: hacé 2 de daño de rayo a un aliado enemigo al azar por cada punto drenado.',
    flavor: 'La jauría nunca suelta.'
  },
  'shade-of-dying-stars': {
    name: 'Sombra de las Estrellas Moribundas',
    text: 'Cuando muere un aliado enemigo: hacé 1 de daño de sombra al héroe enemigo.',
    flavor: 'Lleva la luz de estrellas que ya murieron.'
  },
  'shadow-stalker': { name: 'Acechador de las Sombras', text: 'Sus ataques al héroe enemigo hacen 3 de daño más.' },
  'shadow-tithe': {
    name: 'Diezmo de Sombra',
    text: 'Tu héroe recibe 6 de daño de sombra. Robá 2 cartas.',
    flavor: 'El Eclipse siempre cobra. En sangre, si te falta moneda.'
  },
  'shadow-well': {
    name: 'Pozo de Sombra',
    text: 'Tu héroe recibe 4 de daño de sombra y gana 4 de energía. Instantánea.',
    flavor: 'Tomá hondo. Pagá después.'
  },
  'sharp-blessing': {
    name: 'Bendición Afilada',
    text: 'Se adjunta a un aliado tuyo: gana +1 de ataque y +4 de vida. Cuando ese aliado muere: tu héroe se cura 4.'
  },
  'sharp-boar': {
    name: 'Jabalí Afilado',
    text: 'Al entrar: hacé 3 de daño al héroe enemigo y 1 de daño de sombra al tuyo.',
    flavor: 'Sus colmillos son su único argumento.'
  },
  'sharp-crossbow': { name: 'Ballesta Afilada', flavor: 'Una saeta, una lección.' },
  'sharp-jerkin': {
    name: 'Jubón Afilado',
    text: 'Al equiparla: robá el primer adjunto de tu mazo.',
    flavor: 'Abrazar bajo tu propio riesgo.'
  },
  'sharp-raptor': { name: 'Raptor Afilado', text: 'Al morir: tus Saurios ganan +1 de ataque y +1 de vida.' },
  'shatter-of-the-long-road': {
    name: 'Quiebre del Largo Camino',
    text: 'Si la armadura enemiga tiene 2 de durabilidad o menos, destruila; si no, pierde 2. Rápida.'
  },
  'shock-gauntlet': {
    name: 'Guantelete de Choque',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque. Cada vez que ataca, hacé 1 de daño de rayo a un aliado enemigo al azar.'
  },
  'shroud-of-the-final-bell': {
    name: 'Sudario de la Última Campana',
    text: 'Al empezar cada fase: hacé 2 de daño de tiempo al héroe enemigo.',
    flavor: 'Quien lo viste vive cada hora como la última.'
  },
  'shroud-of-the-thousand': {
    name: 'Mortaja de los Mil',
    text: 'Al empezar cada fase: Consumir 1 (desterrá una carta de tu pila) y gana +1 de durabilidad.'
  },
  'signal-wraith': {
    name: 'Espectro de la Señal',
    text: 'Al entrar: al terminar esta fase, el rival descarta una carta al azar.',
    flavor: 'Entre dos canales, alguien está mirando.'
  },
  'signifer-lucius': { name: 'Signífero Lucio', text: 'Al entrar: tus otros aliados ganan +1 de ataque y +2 de vida.' },
  'silent-contract': {
    name: 'Contrato Silencioso',
    text: 'Un aliado tuyo que no esté aturdido ni congelado destruye a un aliado enemigo, y después queda aturdido en esta fase.',
    flavor: 'Pagado por adelantado. Hecho en silencio.'
  },
  'silent-monolith': {
    name: 'Monolito Silencioso',
    text: 'Cada daño que reciben tus aliados es 1 menor.',
    flavor: 'No transmite nada. A todo volumen.'
  },
  'silent-winter-scepter': {
    name: 'Cetro del Invierno Mudo',
    text: 'Cuando entra cualquier aliado, tuyo o del rival: queda congelado 2 fases.',
    flavor: 'En su presencia, nada se mueve.'
  },
  'silk-wrap-of-ruin': {
    name: 'Envoltura de Seda de la Ruina',
    text: 'Cuando muere un aliado tuyo: esta armadura gana +1 de durabilidad.',
    flavor: 'Suave como la seda, frío como un final.'
  },
  'silver-sprite': {
    name: 'Duende Plateado',
    text: 'Al entrar: congelá a los 2 aliados enemigos con más ataque.',
    flavor: 'Rápido como la luz de luna, el doble de curioso.'
  },
  'silver-wisp': {
    name: 'Fuego Fatuo Plateado',
    text: 'Al terminar cada fase: congelá a un aliado enemigo al azar.',
    flavor: 'Seguila y quizás nunca vuelvas.'
  },
  'sky-tinker': {
    name: 'Hojalatero del Cielo',
    text: 'Al entrar: robá el primer artefacto de tu mazo que cueste 2 o menos.'
  },
  'slash-of-rot': {
    name: 'Tajo de la Podredumbre',
    text: 'Hacé a un aliado enemigo tanto daño de sombra como cartas tenga tu pila (hasta 15).',
    flavor: 'Hasta la herida se pudre.'
  },
  'slash-of-the-last-stand': {
    name: 'Tajo de la Última Defensa',
    text: 'Hacé 6 de daño a un slot enemigo, o 9 si tu héroe tiene un arma.',
    flavor: 'Un golpe más. Siempre uno más.'
  },
  'slash-of-the-long-road': {
    name: 'Tajo del Largo Camino',
    text: 'Hacé a un aliado enemigo tanto daño como el ataque de tu arma +3.',
    flavor: 'Un corte que atraviesa tres siglos.'
  },
  'sling-of-thorns': {
    name: 'Honda de Espinas',
    text: 'Cuando tu héroe ataca con ella: hacé 2 de daño a los aliados al lado del objetivo.',
    flavor: 'Cada piedra echa dientes.'
  },
  'slinger-of-bronze': {
    name: 'Hondero de Bronce',
    text: 'Al morir: tus otros aliados ganan +1 de ataque.',
    flavor: 'Una piedra de bronce, un arco perfecto.'
  },
  'slinger-of-the-sun-temple': {
    name: 'Hondero del Templo del Sol',
    text: 'Al entrar: invocá un Conscripto Hoplita.',
    flavor: 'Bajo el sol nunca falla.'
  },
  'snare-of-dusk': {
    name: 'Lazo del Ocaso',
    text: 'Devolvé a un aliado enemigo a la mano de su dueño y hacé 3 de daño arcano al héroe enemigo. Rápida.',
    flavor: 'Armada al atardecer, disparada al salir la luna.'
  },
  'snare-of-embers': {
    name: 'Lazo de Brasas',
    text: 'Devolvé a la mano de su dueño al aliado enemigo con más ataque. Lenta.',
    flavor: 'Brasas escondidas bajo las hojas.'
  },
  'snare-of-rage': {
    name: 'Lazo de la Ira',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño al héroe enemigo.'
  },
  'snare-of-the-ambush': {
    name: 'Lazo de la Emboscada',
    text: 'Devolvé a la mano de su dueño a todos los aliados enemigos con Vuelo.'
  },
  'snare-of-the-rift': {
    name: 'Lazo de la Grieta',
    text: 'Aturdí a todos los aliados enemigos que tengan un adjunto. Rápida.',
    flavor: 'Una trampa armada en un siglo, disparada en otro.'
  },
  'snare-of-the-wilds': {
    name: 'Lazo de lo Salvaje',
    text: 'Cuando ataca un aliado enemigo: cancelá el ataque y aturdilo.',
    flavor: 'La selva arma sus propias trampas.'
  },
  'solar-archer': {
    name: 'Arquero Solar',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Legionario tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'solar-idol': {
    name: 'Ídolo Solar',
    text: 'Al empezar cada fase: si tenés 3 o más aliados, robá una carta. (3 usos)',
    flavor: 'Bebe el sol y devuelve coraje.'
  },
  'solar-muster': {
    name: 'Leva Solar',
    text: 'Invocá 2 Conscriptos Hoplitas.',
    flavor: 'Se levantan con el sol y pelean hasta que se pone.'
  },
  'soul-harvester': {
    name: 'Segador de Almas',
    text: 'Al entrar: Consumir 4; si lo hacés, destruí a un aliado enemigo al azar.'
  },
  'soul-leech': {
    name: 'Sanguijuela de Almas',
    text: 'Hacé 4 de daño de sombra a un aliado enemigo y tu héroe se cura 4.'
  },
  'soul-tithe': {
    name: 'Diezmo de Almas',
    text: 'Cada jugador destierra las últimas 3 cartas de su pila. Robá una carta por cada carta enemiga desterrada.'
  },
  'soulreaper-scythe': {
    name: 'Guadaña Segadora de Almas',
    text: 'Los ataques de tu héroe con ella hacen 1 de daño más por cada 5 cartas de tu pila.'
  },
  'soulseeker-bow': {
    name: 'Arco Buscaalmas',
    text: 'Cuando un ataque de tu héroe con él mata a un aliado: tu héroe se cura 6.',
    flavor: 'Cada flecha vuelve con algo.'
  },
  'spark-of-dusk': {
    name: 'Chispa del Ocaso',
    text: 'Al empezar cada fase: tu héroe recibe 1 de daño de sombra y gana +1 de ataque.'
  },
  'spark-of-the-crossroads': {
    name: 'Chispa de la Encrucijada',
    text: 'Al morir: ganás 2 Chronos en esta fase.',
    flavor: 'Nacida donde se cruzan todos los caminos.'
  },
  'spider-engine-of-the-foundry': {
    name: 'Araña Mecánica de la Fundición',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Autómata tuyo.'
  },
  'spike-of-storms': {
    name: 'Púa de Tormentas',
    text: 'Hacé 11 de daño de rayo a un aliado enemigo.',
    flavor: 'Un rayo que decidió quedarse.'
  },
  'spike-of-the-ambush': {
    name: 'Púa de la Emboscada',
    text: 'Hacé 3 de daño a un slot enemigo, +2 por cada Sicario tuyo.'
  },
  'spike-of-the-comet': {
    name: 'Púa del Cometa',
    text: 'Hacé 2 de daño arcano a cada aliado enemigo y al héroe enemigo.',
    flavor: 'Caída del cielo, todavía ardiendo.'
  },
  'spike-of-the-hawk': {
    name: 'Púa del Halcón',
    text: 'Hacé 5 de daño de viento a un aliado enemigo; si tiene Vuelo, devolvelo a la mano de su dueño.',
    flavor: 'Veloz como el halcón que la guía.'
  },
  'spike-of-the-hunt': {
    name: 'Púa de la Cacería',
    text: 'Hacé 4 de daño a un aliado enemigo. Rápida.',
    flavor: 'El propio suelo se une a la cacería.'
  },
  'spike-of-the-oracle': {
    name: 'Púa del Oráculo',
    text: 'Hacé 2 de daño de luz a un slot enemigo, +2 por cada Oráculo tuyo.',
    flavor: 'Ella previó dónde golpear.'
  },
  'spike-of-the-wanderer': {
    name: 'Púa del Errante',
    text: 'Hacé 11 de daño a un slot enemigo.',
    flavor: 'La Grieta tiene sus propias espinas.'
  },
  'spike-pit': {
    name: 'Fosa de Estacas',
    text: 'Cuando un aliado enemigo ataca: hacele 4 de daño y queda como tu Presa.'
  },
  'spinosaur-of-the-hunt': {
    name: 'Espinosaurio de la Cacería',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Saurio tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño a un slot enemigo.' }
  },
  'spinosaur-of-the-tar-pits': {
    name: 'Espinosaurio de los Pozos de Brea',
    text: 'Cuando entra otro Saurio tuyo: gana +2 de ataque y +2 de vida.'
  },
  'spirit-bound-bell': {
    name: 'Campana Ligada a los Espíritus',
    flavor: 'Su tañido llama a los muertos a sus puestos.'
  },
  'spirit-bound-disarm': {
    name: 'Desarme Ligado a los Espíritus',
    text: 'El arma enemiga pierde 2 de durabilidad y la tuya gana 2. Rápida.'
  },
  'spirit-bound-shroud': {
    name: 'Sudario Ligado a los Espíritus',
    flavor: 'Los ancestros vigilan desde sus pliegues.'
  },
  'spiteful-skeleton': {
    name: 'Esqueleto Rencoroso',
    text: 'Al morir: hace 3 de daño de sombra a quien lo mató.',
    flavor: 'Guarda rencor más tiempo del que guardó una vida.'
  },
  'stalkers-eye': {
    name: 'Ojo del Acechador',
    text: 'Un aliado enemigo queda como tu Presa. Rápida.'
  },
  'stalking-blight': {
    name: 'Plaga Acechante',
    text: 'Envenená a todos los aliados enemigos que tengan una maldición (3).',
    flavor: 'Te sigue hasta tu casa.'
  },
  'stalking-fortune-teller': {
    name: 'Adivina Acechante',
    text: 'Al entrar: hacé 3 de daño a un aliado enemigo al azar. Al atacar: hacé 1 de daño al héroe enemigo.'
  },
  'stalwart-battle-cry': {
    name: 'Grito de Guerra Firme',
    text: 'Tus Colosos ganan +3 de ataque esta fase. Instantánea.',
    flavor: 'Un grito que afirma cien manos.'
  },
  'stalwart-saddle': {
    name: 'Montura Firme',
    text: 'Se adjunta a un aliado tuyo: gana +2 de ataque y +5 de vida. Cuando ese aliado ataca: un aliado enemigo al azar queda como tu Presa.'
  },
  'stalwart-street-samurai': {
    name: 'Samurái Callejero Firme',
    text: 'Al entrar: tus otros Sicarios se curan 6 y ganan +1 de ataque.',
    flavor: 'Espada de neón, código antiguo.'
  },
  'standard-bearer-of-the-last-stand': {
    name: 'Abanderado de la Última Defensa',
    text: 'Al atacar: tus otros Legionarios ganan +1 de ataque.',
    flavor: 'Mientras la bandera siga en pie, nosotros también.'
  },
  'standard-bearer-of-the-laurel': {
    name: 'Abanderado del Laurel',
    text: 'Al entrar: tu héroe se cura 7. Al empezar cada fase: tu héroe se cura 2.'
  },
  'stardust-drill': {
    name: 'Taladro de Polvo Estelar',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Perfora el cielo buscando brillitos.',
    ability: { name: 'Extraer', text: 'Recibe 2 de daño y robás una carta.' }
  },
  'starlit-dragon': { name: 'Dragón Estelar', text: 'Al entrar: aturdí a un aliado enemigo al azar.' },
  'starving-spawn': {
    name: 'Engendro Hambriento',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada 3 cartas de tu pila de descarte (hasta +5).',
    flavor: 'Un pedacito del hambre. Igual es más grande que vos.'
  },
  'starweavers-astrolabe': {
    name: 'Astrolabio de Ilyra',
    text: 'Robá 2 cartas y ganás 2 Cronos en esta fase.',
    flavor: 'Ilyra traza las estrellas que la trazaron a ella.'
  },
  'steam-exosuit': {
    name: 'Exotraje de Vapor',
    text: 'Cada daño que recibe tu héroe es 1 menor por cada artefacto tuyo (hasta 3).'
  },
  'steam-turret': {
    name: 'Torreta de Vapor',
    text: 'Al empezar cada fase: hacé 2 de daño al aliado enemigo con más ataque. (4 usos)'
  },
  'stegosaur-of-the-first-fire': {
    name: 'Estegosaurio del Primer Fuego',
    text: 'Al atacar a una Presa: gana +2 de ataque y +2 de vida.'
  },
  'stegosaur-of-the-hunt': {
    name: 'Estegosaurio de la Cacería',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Placas en el lomo, un mazo en la cola.'
  },
  'sting-of-the-silent-trail': {
    name: 'Aguijón del Rastro Silencioso',
    text: 'Duplicá el veneno de todos los aliados enemigos.',
    flavor: 'No lo vas a oír. Lo vas a sentir.'
  },
  'stole-of-light': {
    name: 'Estola de la Luz',
    text: 'Todo daño que reciben tus Magos es 1 menor.',
    flavor: 'Un hilo de amanecer sobre los hombros.'
  },
  'stole-of-renewal': {
    name: 'Estola de la Renovación',
    text: 'Canalizar: cuando lanzás un hechizo, un aliado tuyo al azar se cura 3.',
    flavor: 'Cada herida que toca se olvida de sí misma.'
  },
  'stone-golem-of-dawn': { name: 'Gólem de Piedra del Alba', text: 'Al entrar: tu armadura gana +2 de durabilidad.' },
  'stone-golem-of-lightning': {
    name: 'Gólem de Piedra del Relámpago',
    text: 'Al entrar: hacé 7 de daño de tierra al héroe enemigo.'
  },
  'stone-golem-of-mana': {
    name: 'Gólem de Piedra de Maná',
    text: 'Al morir: hacé 1 de daño de tierra a todos los aliados enemigos.'
  },
  'stonehide-wolf': {
    name: 'Lobo Piel de Piedra',
    text: 'No recibe daño de ataques (solo lo lastiman los efectos).',
    flavor: 'Garras y espadas resbalan en su piel.'
  },
  'storm-called-cartographer': {
    name: 'Cartógrafa de la Tormenta',
    text: 'Al morir: hacé 2 de daño de rayo al héroe enemigo y a un aliado enemigo al azar.'
  },
  'storm-called-strike': {
    name: 'Golpe de la Tormenta',
    text: 'Hacé 2 de daño de rayo a un slot enemigo, +2 por cada Inventor tuyo.'
  },
  'storm-plate': {
    name: 'Armadura de Tormenta',
    text: 'Al empezar cada fase: hacé 2 de daño de rayo a un aliado enemigo al azar.'
  },
  'stray-cartographer': {
    name: 'Cartógrafa Extraviada',
    text: 'Al entrar: robá el primer objeto de tu mazo.',
    flavor: 'Sus mapas están mal, pero están mal con belleza.'
  },
  'stray-fury': {
    name: 'Furia Extraviada',
    text: 'Un aliado tuyo gana +2 de ataque y +2 de vida por cada trampa que tengas puesta.',
    flavor: 'Una furia que llegó desde otra era.'
  },
  'stray-leather-coat': {
    name: 'Abrigo de Cuero Extraviado',
    text: 'Al equiparla: robá el primer arco de tu mazo.',
    flavor: 'Encontrado en un siglo, perdido en tres más.'
  },
  'stray-strike': {
    name: 'Golpe Extraviado',
    text: 'Hacé 8 de daño a un aliado enemigo.',
    flavor: 'No apuntaba a nadie. Le dio a alguien.'
  },
  'street-surgeon': {
    name: 'Cirujana Callejera',
    text: 'Al entrar: el último implante de tu pila vuelve a tu mano.'
  },
  'study-of-dawn': {
    name: 'Estudio del Alba',
    text: 'Robá una carta. Tus aliados se curan 3.',
    flavor: 'Aprendé de la luz antes de que salga.'
  },
  'study-of-flame': {
    name: 'Estudio de Llamas',
    text: 'Hackeá a un aliado enemigo: ataca a otro aliado enemigo y después queda aturdido.',
    flavor: 'Página uno: no tocar. Página dos: tarde.'
  },
  'subdermal-mesh': { name: 'Malla Subdérmica', text: 'Adjuntalo a un aliado tuyo: gana +4 de vida y Represalia.' },
  'sudden-sprout': {
    name: 'Brote Espontáneo',
    text: 'Un aliado tuyo gana +2 de ataque y +2 de vida (+3 y +4 si es un Saurio). Robá una carta.',
    flavor: 'De la noche a la mañana, la selva se duplica.'
  },
  'summons-of-steam': {
    name: 'Convocatoria de Vapor',
    text: 'Invocá un Dron de Engranajes.',
    flavor: 'Suena el silbato. Algo responde.'
  },
  'summons-of-the-wilds': {
    name: 'Convocatoria de lo Salvaje',
    text: 'Invocá un Cachorro Dientes de Sable. Un aliado enemigo al azar queda como tu Presa.',
    flavor: 'El bosque responde a los suyos.'
  },
  'sundial-of-borrowed-hours': {
    name: 'Reloj de Sol de las Horas Prestadas',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía. (3 usos)'
  },
  'sundial-of-the-last-hour': {
    name: 'Reloj de Sol de la Última Hora',
    text: 'Al empezar cada fase: ganás 1 de capacidad de Cronos. (2 usos)',
    flavor: 'Su sombra señala el final.'
  },
  'sunlit-chaplain': { name: 'Capellán Soleado', text: 'Al empezar cada fase: tu aliado más herido se cura 4.' },
  'sure-bite': {
    name: 'Mordida Certera',
    text: 'Destruí un aliado enemigo que cueste 3 o menos. Rápida.',
    flavor: 'Presa chica, un mordisco.'
  },
  'swift-pterodon': {
    name: 'Pterodonte Veloz',
    text: 'Al entrar: hacé 3 de daño de viento a cada aliado enemigo que sea tu Presa.',
    flavor: 'El cielo fue suyo primero.'
  },
  'swift-stonethrower': { name: 'Lanzapiedras Veloz', text: 'Al empezar cada fase: gana +1 de ataque y +1 de vida.' },
  'talos-of-the-laurel': {
    name: 'Talos del Laurel',
    text: 'Al entrar: tus otros Colosos ganan +1 de ataque y +1 de vida.'
  },
  'tar-pit-trapper': {
    name: 'Trampero del Pozo de Brea',
    text: 'Cuando se activa una trampa tuya: gana +2 de ataque y +2 de vida.'
  },
  'tar-soaked-ankylosaur': { name: 'Anquilosaurio Empapado de Brea', text: 'Al entrar: tus otros Saurios se curan 4.' },
  'tar-soaked-pterodon': {
    name: 'Pterodonte Empapado de Brea',
    text: 'Cuando entra otro Saurio tuyo: tu héroe se cura 2. Al atacar: tu héroe se cura 3.'
  },
  'tar-soaked-sabertooth': {
    name: 'Dientes de Sable Empapado de Brea',
    text: 'Al atacar a una Presa: se cura 4.',
    flavor: 'Salió del pozo de brea más enojado que nunca.'
  },
  'targeting-chip': {
    name: 'Chip de Puntería',
    text: 'Adjuntalo a un aliado tuyo: sus ataques hacen 3 de daño más a los aliados aturdidos.'
  },
  'taurons-halberd': {
    name: 'Alabarda de Tauron',
    text: 'Cuando tu héroe ataca con ella: un aliado tuyo al azar gana +2 de ataque esta fase.',
    flavor: 'Forjada en el corazón del laberinto.'
  },
  'taurons-prophet': {
    name: 'Profeta de Tauron',
    text: 'Al entrar: si tenés otro Oráculo, robá una carta. Al morir: tus otros aliados ganan +1 de ataque.'
  },
  'temper-the-steel': {
    name: 'Templar el Acero',
    text: 'Tu arma y tu armadura ganan +2 de durabilidad cada una. Instantánea.'
  },
  'tempest-of-the-arcanum': {
    name: 'Tempestad del Arcano',
    text: 'Hacé 6 de daño de viento a todos los aliados enemigos. Lenta.',
    flavor: 'Los grimorios se abren solos cuando sopla.'
  },
  'temple-keeper-of-the-laurel': {
    name: 'Guardiana del Templo del Laurel',
    text: 'Al entrar: si tenés otro Oráculo, robá una carta.'
  },
  'temple-keeper-of-the-sun-temple': {
    name: 'Guardiana del Templo del Templo del Sol',
    text: 'Todo daño que reciben los aliados a su lado es 2 menor.',
    flavor: 'El sol sale cuando ella lo dice.'
  },
  'the-astronomers-dryad': {
    name: 'Dríade del Astrónomo',
    text: 'Al entrar: tus otras Hadas ganan +2 de ataque y +2 de vida. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'the-astronomers-lance': {
    name: 'Lanza del Astrónomo',
    text: 'Hacé 10 de daño de arcano a un slot enemigo y robá una carta.'
  },
  'the-copperwick-engine': {
    name: 'La Máquina Copperwick',
    text: 'Ganás 2 Cronos en esta fase, robá 2 cartas y invocá un Dron de Engranajes.'
  },
  'the-dawn-angel': {
    name: 'El Ángel del Alba',
    text: 'Al entrar: tu héroe se cura 8 y un aliado al azar de tu pila de descarte vuelve al juego.'
  },
  'the-dying-star': {
    name: 'La Estrella Moribunda',
    text: 'Hacé 8 de daño de arcano a un slot enemigo y 3 a los slots vecinos.',
    flavor: 'Una menos.'
  },
  'thief-of-dusk': {
    name: 'Ladrón del Ocaso',
    text: 'Cuando ataca al héroe enemigo: el rival descarta una carta al azar.'
  },
  'thunderhead-of-dawn': { name: 'Nubarrón del Alba', text: 'Al entrar: tu héroe se cura 4 y gana 1 de energía.' },
  'thunderhead-of-dusk': {
    name: 'Nubarrón del Ocaso',
    text: 'Al entrar: tu héroe recibe 3 de daño de sombra y robás 2 cartas.'
  },
  'thunderhead-of-the-comet': {
    name: 'Nubarrón del Cometa',
    text: 'Al entrar: tus otros Elementales ganan +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 5.' }
  },
  'thundering-gatherer': { name: 'Recolectora Atronadora', text: 'Cuando se activa una trampa tuya: robá una carta.' },
  'thundering-raptor': {
    name: 'Raptor Atronador',
    text: 'Al morir: invocá una Cría de Raptor.',
    flavor: 'Sus pasos suenan como una tormenta.'
  },
  'thundering-sabertooth': {
    name: 'Dientes de Sable Atronador',
    text: 'Al entrar: invocá un Cachorro Dientes de Sable por cada trampa que tengas puesta.',
    flavor: 'Lo oís antes del final.'
  },
  'tide-of-souls': {
    name: 'Marea de Almas',
    text: 'Todos los aliados de tu pila vuelven arriba de tu mazo.',
    flavor: 'Los muertos no se fueron. Están haciendo fila.'
  },
  'time-plague': {
    name: 'Peste del Tiempo',
    text: 'El rival pierde 2 de capacidad de Cronos (le quedan al menos 2), y vos perdés 1.',
    flavor: 'El tiempo se pudre para todos. Para algunos, más.'
  },
  'timeless-fortune-teller': {
    name: 'Adivina Atemporal',
    text: 'Al entrar: ganás 1 Chronos en esta fase por cada otro aliado tuyo.'
  },
  'timeless-gust': { name: 'Ráfaga Atemporal', text: 'Al morir: invocá una Chispa de la Grieta.' },
  'timeless-icicle': {
    name: 'Carámbano Atemporal',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad. Al morir: robá una carta.'
  },
  'timeless-rune': {
    name: 'Runa Atemporal',
    text: 'Se adjunta a un aliado tuyo: gana +1 de ataque y +4 de vida. Al empezar cada fase: ese aliado se cura 2.'
  },
  'timeless-tick': {
    name: 'Tic Atemporal',
    text: 'Ganás 2 Cronos esta fase, y 2 más si tenés 3 artefactos o más. Instantánea.',
    flavor: 'El reloj que no marca la hora de nadie.'
  },
  'timeless-tide': {
    name: 'Marea Atemporal',
    text: 'Al terminar cada fase: hacé 2 de daño a un aliado enemigo al azar.',
    flavor: 'Sube en todos los siglos a la vez.'
  },
  'timeless-wanderer': {
    name: 'Vagabundo Atemporal',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'tin-scout': {
    name: 'Explorador de Hojalata',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Encuentra a sus hermanos por el tic-tac.',
    ability: { name: 'Reclutar', text: 'Robá el primer Autómata de tu mazo.' }
  },
  'tireless-zeppelin': {
    name: 'Zepelín Incansable',
    text: 'Al entrar: robá la primera Aeronave de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'titan-of-valor': { name: 'Titán del Valor', text: 'Al atacar: gana +1 de ataque.' },
  'tome-of-endings': {
    name: 'Tomo de los Finales',
    text: 'Hacé 5 de daño de sombra a todos los aliados enemigos, un aliado al azar de tu pila de descarte vuelve al juego y robá 2 cartas.'
  },
  'tonic-of-the-wanderer': {
    name: 'Tónico del Errante',
    text: 'Robá el primer aliado y la primera habilidad de tu mazo.'
  },
  'torque-wrench': {
    name: 'Llave de Torsión',
    text: 'Cuando tu héroe ataca con ella: un artefacto tuyo al azar con usos gana 1 uso.'
  },
  'totem-of-coal': { name: 'Tótem del Carbón', text: 'Cuando entra una Aeronave tuya: robá una carta. (3 usos)' },
  'totem-of-the-herd': {
    name: 'Tótem de la Manada',
    text: 'Al empezar cada fase: tus Bestias se curan 2.',
    flavor: 'La manada recuerda dónde está.'
  },
  'tower-apprentice': {
    name: 'Aprendiz de la Torre',
    text: 'Poder mágico +1 (tus hechizos hacen 1 de daño más).',
    flavor: 'Lee cada libro dos veces. Quema la mitad.'
  },
  'towering-boss': { name: 'Jefa Imponente', text: 'Al entrar: tus otros Sicarios ganan +1 de ataque y +1 de vida.' },
  'towering-disarm': {
    name: 'Desarme Imponente',
    text: 'Destruí un artefacto enemigo o una trampa boca abajo. Rápida.',
    flavor: 'Soltalo. Ya.'
  },
  'towering-mace': { name: 'Maza Imponente', flavor: 'Hecha para gigantes. Empuñada por tercos.' },
  'toxic-cloud': { name: 'Nube Tóxica', text: 'Envenená a todos los aliados, también a los tuyos (3).' },
  'toxin-of-midnight': {
    name: 'Toxina de Medianoche',
    text: 'Envenená a un aliado enemigo (2), +2 por cada Sicario tuyo.',
    flavor: 'Destilada entre neones, servida fría.'
  },
  'toxin-of-pistons': {
    name: 'Toxina de Pistones',
    text: 'Envenená a un aliado enemigo (2).',
    flavor: 'El aceite de máquina no es para tomar.'
  },
  'tracking-countermeasure': {
    name: 'Contramedida Rastreadora',
    text: 'Cuando el rival usa una habilidad: el héroe enemigo pierde 3 de energía.'
  },
  'tracking-dagger': {
    name: 'Daga Rastreadora',
    text: 'Cuando tu héroe ataca a un aliado con ella: envenenalo (3).',
    flavor: 'Apunta hacia su última víctima.'
  },
  'tracking-horn': {
    name: 'Cuerno Rastreador',
    text: 'Invocá un Cachorro Dientes de Sable y una Cría de Raptor.',
    flavor: 'Un toque y la jauría sabe el camino.'
  },
  'tracking-stasis': {
    name: 'Estasis Rastreadora',
    text: 'Congelá a un aliado enemigo. Robá una carta si tiene 6 de ataque o más.',
    flavor: 'Quieto ahí. Se terminó la cacería.'
  },
  'tracking-vest': {
    name: 'Chaleco Rastreador',
    text: 'Al equiparlo: un aliado enemigo al azar queda como tu Presa.',
    flavor: 'Bolsillos para cada rastro.'
  },
  'tracking-woolly-rhino': {
    name: 'Rinoceronte Lanudo Rastreador',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2.',
    flavor: 'Sigue el rastro con el olfato y lo termina embistiendo.'
  },
  'triceratops-of-the-herd': {
    name: 'Triceratops de la Manada',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Saurio tuyo.'
  },
  'trojan-virus': {
    name: 'Virus Troyano',
    text: 'Hackeá un artefacto o una trampa boca abajo del rival: no hace nada hasta el final de las 2 fases siguientes. Rápida.'
  },
  'twilight-cryomancer': {
    name: 'Criomante Crepuscular',
    text: 'Los ataques de tus aliados hacen 2 de daño más a los aliados congelados.',
    flavor: 'Congela el atardecer para que dure más.'
  },
  'unbound-hierophant': {
    name: 'Hierofante Desatado',
    text: 'Al entrar: envenená al héroe enemigo (3). Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'unbound-ruin': {
    name: 'Ruina Desatada',
    text: 'Destruí a un aliado enemigo. Lenta.',
    flavor: 'Ya nada lo detiene.'
  },
  'unbroken-bond': {
    name: 'Lazo Imperecedero',
    text: 'Los 2 últimos aliados de tu pila vuelven a tu mano. Tus No-muertos ganan +2 de ataque en esta fase.',
    flavor: 'La muerte es una puerta que abre para los dos lados.'
  },
  'unbroken-hitman': {
    name: 'Asesino a Sueldo Invicto',
    text: 'Al atacar: envenená al aliado al que ataca (2).',
    flavor: 'Le dispararon dos veces. Sigue trabajando.'
  },
  'unbroken-merchant': {
    name: 'Mercader Invicto',
    text: 'Cuando mata a un aliado: robá una carta.',
    flavor: 'Lo robaron nueve veces. Sigue abierto.'
  },
  'unbroken-plan': {
    name: 'Plan Invicto',
    text: 'Robá el primer Errante de tu mazo y tu héroe se cura 3.',
    flavor: 'El plan sobrevivió al contacto con el enemigo.'
  },
  'unstable-shard': {
    name: 'Esquirla Inestable',
    text: 'Los ataques de tus aliados hacen 3 de daño más. Cuando un aliado tuyo recibe daño: muere.',
    flavor: 'Poder infinito, paciencia finita.'
  },
  'unyielding-charioteer': { name: 'Auriga Inquebrantable', text: 'Al entrar: robá el primer Legionario de tu mazo.' },
  'unyielding-trap': {
    name: 'Trampa Inquebrantable',
    text: 'Cuando el enemigo usa una habilidad: tu arma y tu armadura ganan +2 de durabilidad cada una, y robás una carta.'
  },
  'upgrade-broker': {
    name: 'Corredor de Mejoras',
    text: 'Al terminar cada fase: si tenés 3 o más aliados Mejorados, robá una carta.'
  },
  'uprooting-dagger': {
    name: 'Daga del Desarraigo',
    text: 'Cuando tu héroe golpea a un aliado con ella y no lo mata: ese aliado vuelve a la mano de su dueño.',
    flavor: 'Te corta del momento.'
  },
  'varros-glaive': {
    name: 'Guja de Varro',
    text: 'Al equiparla: tus Legionarios ganan +1 de ataque y +1 de vida.',
    flavor: 'La palabra del legado, hecha acero.'
  },
  'varros-legion-standard': {
    name: 'Estandarte de la Legión de Varro',
    text: 'Los ataques de tus Legionarios que tengan un aliado al lado hacen 2 de daño más.'
  },
  'venom-of-the-hunt': {
    name: 'Veneno de la Cacería',
    text: 'Envenená a un aliado enemigo (3) y al héroe enemigo (3).',
    flavor: 'Una gota para la presa, dos para el orgulloso.'
  },
  'venom-peddler': {
    name: 'Vendedor de Venenos',
    text: 'Al empezar cada fase: envenená a un aliado enemigo al azar (1).'
  },
  'venomous-data-thief': {
    name: 'Ladrón de Datos Venenoso',
    text: 'Al entrar: envenená a todos los aliados enemigos (1).',
    flavor: 'Te roba los secretos y te deja una mordida.'
  },
  'venomous-jerkin': {
    name: 'Jubón Venenoso',
    text: 'Cuando el ataque de un aliado enemigo golpea a tu héroe: envenenalo (2).',
    flavor: 'Forrada con pieles de bichos que muerden.'
  },
  'venomous-tripwire': {
    name: 'Cable Trampa Venenoso',
    text: 'Cuando el rival invoca un aliado: hacele 7 de daño de ácido.',
    flavor: 'Chasquido, picadura, sueño.'
  },
  'vestments-of-renewal': {
    name: 'Hábito de la Renovación',
    text: 'Al equiparla: tus Hadas ganan +1 de ataque y +2 de vida.',
    flavor: 'La visten sanadores que nunca duermen.'
  },
  'veteran-of-a-thousand-battles': {
    name: 'Veterano de Mil Batallas',
    text: 'Al entrar, con Panoplia (tu héroe tiene arma y armadura): gana +3 de ataque, +3 de vida y Represalia.',
    flavor: 'Cada cicatriz es una batalla que ganó.'
  },
  'veteran-of-the-shieldwall': {
    name: 'Veterano del Muro de Escudos',
    text: 'Al atacar: se cura 3.',
    flavor: 'Sostiene la línea desde antes de que nacieras.'
  },
  'vex-nightwire': {
    name: 'Vex Nightwire',
    text: 'Protocolo Fantasma (3): tu héroe y tus aliados ganan Sigilo (el rival no puede atacarlos ni elegirlos como objetivo) hasta el final de esta fase; atacar no lo rompe. Tus aliados Mejorados (con un implante) son Rápidos.',
    flavor: 'Caza blancos que nadie más puede encontrar.',
    ability: {
      name: 'Protocolo Fantasma',
      text: 'Tu héroe y tus aliados ganan Sigilo (el rival no puede atacarlos ni elegirlos como objetivo) hasta el final de esta fase; atacar no lo rompe.'
    }
  },
  'vexs-neural-crown': {
    name: 'Corona Neural de Vex',
    text: 'Adjuntalo a un aliado tuyo: gana +2 de ataque y Sigilo. Cada vez que ataca, tus otros aliados Mejorados ganan +1 de ataque esta fase.'
  },
  'vexs-sling': {
    name: 'Blaster Nightwire de Vex',
    text: 'Cuando tu héroe ataca con ella: si tenés 2 o más aliados Mejorados, robá una carta.'
  },
  'victorious-bronze-giant': {
    name: 'Gigante de Bronce Victorioso',
    text: 'Al entrar: con Panoplia, destruí el arma enemiga.'
  },
  'victorious-minotaur': {
    name: 'Minotauro Victorioso',
    text: 'Después de recibir daño: tus otros Colosos ganan +1 de ataque.',
    flavor: 'Encontró la salida del laberinto. Y volvió a entrar.'
  },
  'victors-rampage': {
    name: 'Furia del Vencedor',
    text: 'Cuando muere un aliado enemigo: tu héroe se cura 4. (6 usos)',
    flavor: 'Cada enemigo caído es un respiro de vida.'
  },
  'vigor-of-dusk': {
    name: 'Vigor del Ocaso',
    text: 'Un aliado tuyo gana tanto ataque esta fase como vida tenga. Instantánea.',
    flavor: 'La tarde trae un segundo aire.'
  },
  'vigor-of-the-ancestors': {
    name: 'Vigor de los Ancestros',
    text: 'Un aliado tuyo gana +2 de ataque esta fase por cada carta adjunta a él y por tu arma y tu armadura. Instantánea.',
    flavor: 'La sangre antigua todavía corre fuerte.'
  },
  'vigor-of-the-archmage': {
    name: 'Vigor del Archimago',
    text: 'Un aliado tuyo gana Vuelo y +2 de vida.',
    flavor: 'El archimago comparte una chispa de su energía infinita.'
  },
  'vigor-of-the-jungle': {
    name: 'Vigor de la Jungla',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase, o +8 si un aliado enemigo es tu Presa. Instantánea.',
    flavor: 'Crecé salvaje, crecé fuerte.'
  },
  'vigor-of-the-shieldwall': {
    name: 'Vigor del Muro de Escudos',
    text: 'Tus aliados ganan +1 de ataque y +2 de vida. Robá una carta por cada trampa que tengas puesta.',
    flavor: 'Trabá los escudos, respirá con ellos, resistí con ellos.'
  },
  'virus-of-dusk': {
    name: 'Virus del Ocaso',
    text: 'Adjuntala a un aliado enemigo: tiene -5 de ataque.',
    flavor: 'Se propaga cuando se apagan las luces.'
  },
  'virus-of-neon': {
    name: 'Virus de Neón',
    text: 'Al entrar: tu héroe gana 1 de energía por cada aliado Mejorado tuyo.'
  },
  'virus-of-the-silent-trail': {
    name: 'Virus del Rastro Silencioso',
    text: 'Cuando entra otro Hacker tuyo: tu héroe se cura 2.'
  },
  'void-high-priest': {
    name: 'Sumo Sacerdote del Vacío',
    text: 'Cuando muere un aliado enemigo con una maldición: tu héroe se cura 4.'
  },
  'volatile-fortune-teller': {
    name: 'Adivina Volátil',
    text: 'Al entrar: quemá a un aliado enemigo al azar (3). Al morir: hacé 1 de daño de fuego a todos los aliados enemigos.'
  },
  'volatile-mark': {
    name: 'Marca Volátil',
    text: 'Adjuntalo a un aliado enemigo: cuando muere, hacé 4 de daño de sombra al héroe enemigo.'
  },
  'volatile-runecarver': { name: 'Tallarrunas Volátil', text: 'Al entrar: si tenés otro Hechicero, robá una carta.' },
  'vorhals-flagellant': {
    name: 'Flagelante de Vorhal',
    text: 'Cuando entra otro Cultista tuyo: tu héroe se cura 2. Al morir: invocá un Esqueleto Alzado.'
  },
  'vorhals-spike': {
    name: 'Púa de Vorhal',
    text: 'Hacé 10 de daño de tiempo a un slot enemigo. Consumir 2; si lo hacés, robá 2 cartas.'
  },
  'vow-of-the-dawn': { name: 'Voto del Alba', text: 'Un aliado tuyo gana +2 de vida y Robo de vida.' },
  'wandering-ferryman': {
    name: 'Barquero Errante',
    text: 'Al morir: poné una copia de él en tu mano.',
    flavor: 'Rema por ríos de tiempo.'
  },
  'wandering-gust': { name: 'Ráfaga Errante', text: 'Al entrar: tu héroe se cura 5. Al morir: robá una carta.' },
  'wandering-mist': {
    name: 'Neblina Errante',
    text: 'Cuando entra otro Elemental tuyo: gana +1 de ataque y +1 de vida. Al empezar cada fase: tu héroe se cura 2.'
  },
  'wandering-monolith': {
    name: 'Monolito Errante',
    text: 'Al empezar cada fase: un aliado tuyo al azar gana +1 de ataque y +1 de vida. (3 usos)'
  },
  'wandering-plan': {
    name: 'Plan Errante',
    text: 'Robá una carta por cada aliado enemigo (hasta 3).',
    flavor: 'El plan cambia en cada era.'
  },
  'wandering-rune': {
    name: 'Runa Errante',
    text: 'Adjuntalo a un aliado tuyo: gana +4 de vida. Canalizar: cuando lanzás un hechizo, gana +1 de ataque.'
  },
  'wandering-sage-staff': {
    name: 'Báculo del Sabio Errante',
    text: 'Meditar (1⚡): robá una carta.',
    flavor: 'Cada nudo de la madera es una lección.',
    ability: { name: 'Meditar', text: 'Robá una carta.' }
  },
  'wandering-stasis': {
    name: 'Estasis Errante',
    text: 'Devolvé a la mano de su dueño a todos los aliados enemigos de costo 2 o menos.',
    flavor: 'El tiempo se detiene a mirar alrededor.'
  },
  'wandering-wanderer': { name: 'Vagabundo Errante', flavor: 'Ni él sabe adónde va.' },
  'war-fang-tiger': {
    name: 'Tigre Colmillo de Guerra',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Gasta su vida entera en un solo salto.',
    ability: { name: 'Último Salto', text: 'Destruí un aliado enemigo. Al final de esta fase, este aliado muere.' }
  },
  'warpick-of-iron': {
    name: 'Pico de Guerra de Hierro',
    text: 'Al equiparlo: destruí la armadura enemiga.',
    flavor: 'Hecho para abrir yelmos como nueces.'
  },
  'warpick-of-rage': {
    name: 'Pico de Guerra de la Ira',
    text: 'Cuando tu héroe ataca con él: gana +1 de ataque.',
    flavor: 'Atraviesa armaduras y paciencias por igual.'
  },
  'warpick-of-the-last-stand': {
    name: 'Pico de Guerra de la Última Defensa',
    text: 'Cuando tu héroe ataca con él: la armadura enemiga pierde 1 de durabilidad.',
    flavor: 'La llevan quienes se niegan a retroceder.'
  },
  'warpick-of-the-warlord': {
    name: 'Pico de Guerra del Caudillo',
    text: 'Al equiparlo: tu armadura gana +2 de durabilidad.',
    flavor: 'Rompió coronas.'
  },
  'weary-merchant': {
    name: 'Mercader Cansado',
    text: 'Al morir: robá una carta.',
    flavor: 'Vendió todo menos su descanso.'
  },
  'weary-plan': {
    name: 'Plan Cansado',
    text: 'Robá una carta por cada aliado Mejorado tuyo (hasta 3).',
    flavor: 'No es elegante, pero funciona.'
  },
  'weary-stasis': {
    name: 'Estasis Cansada',
    text: 'Congelá a un aliado enemigo de costo 2 o menos.',
    flavor: 'Hasta el tiempo necesita descansar.'
  },
  'whisper-of-the-pit': { name: 'Susurro del Foso', text: 'Al morir: envenená a todos los aliados enemigos (1).' },
  'whispering-void-spawn': {
    name: 'Engendro del Vacío Susurrante',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada Horror tuyo. Al morir: invocá un Esqueleto Alzado.'
  },
  'wild-boar': {
    name: 'Jabalí Silvestre',
    text: 'Al atacar: el héroe enemigo pierde 1 de energía.',
    flavor: 'Primero embiste, después nunca piensa.'
  },
  'wild-crossbow': {
    name: 'Ballesta Silvestre',
    text: 'Al equiparla: hacé 4 de daño a cada aliado enemigo que sea tu Presa.',
    flavor: 'Encordada con lianas y mal genio.'
  },
  'wild-shot': {
    name: 'Disparo Silvestre',
    text: 'Hacé 7 de daño a un aliado enemigo, o 14 si es tu Presa. Rápida.',
    flavor: '¿Apuntado? No mucho. ¿Letal? Mucho.'
  },
  'wild-tyrant': {
    name: 'Tirano Silvestre',
    text: 'Al entrar: invocá una Cría de Raptor.',
    flavor: 'La selva tiembla cuando se despierta.'
  },
  'wind-up-mechanic': {
    name: 'Mecánica a Cuerda',
    text: 'Al terminar cada fase: un artefacto tuyo al azar con usos gana 1 uso.',
    flavor: 'Girá la llave y alejate.'
  },
  'wind-up-soldier-of-pistons': {
    name: 'Soldado de Cuerda de Pistones',
    text: 'Al entrar: hacé 1 de daño a un aliado enemigo al azar por cada artefacto tuyo.'
  },
  'wind-up-tin-sentry': {
    name: 'Centinela de Hojalata a Cuerda',
    text: 'Al entrar: robá el primer Autómata de tu mazo.'
  },
  'wired-tripwire': {
    name: 'Cable Trampa Conectado',
    text: 'Cuando se invoca un aliado enemigo: congelalo y robá una carta.',
    flavor: 'Un cable, cien voltios.'
  },
  'wise-stasis': {
    name: 'Estasis Sabia',
    text: 'Congelá a un aliado enemigo. Si ya estaba congelado, robá una carta.',
    flavor: 'Los sabios saben cuándo detener el reloj.'
  },
  'xulthars-crystal': {
    name: 'Cristal de Xulthar',
    text: 'Al empezar cada fase: Consumir 2; si lo hacés, tus aliados ganan +1 de ataque y +1 de vida.'
  },
  'xulthars-void-spawn': {
    name: 'Engendro del Vacío de Xulthar',
    text: 'Cuando entra otro Horror tuyo: tu héroe se cura 2. Al morir: hacé 4 de daño de sombra al héroe enemigo.'
  },
  'young-stonethrower': {
    name: 'Lanzapiedras Joven',
    text: 'Cuando entra otro Cavernario tuyo: tu héroe se cura 2. Al atacar: tu héroe se cura 3.'
  },
  'young-tyrant': {
    name: 'Tirano Joven',
    text: 'Al atacar a una Presa: robá una carta.',
    flavor: 'Un rey en formación, ya un tirano.'
  }
}
