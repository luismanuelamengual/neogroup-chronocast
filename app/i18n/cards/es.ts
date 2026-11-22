import { CardTranslation } from '@/app/i18n/cards'

/** The Spanish texts of every card, by id (docs/PLAN.md, section 7.6). */
export const CARDS_ES: Record<string, CardTranslation> = {
  'abyssal-hound': { name: 'Sabueso Abisal', flavor: 'Persigue el olor del miedo hasta el fin de los tiempos.' },
  'acolyte-vestments': {
    name: 'Vestiduras de Acólito',
    text: 'Al jugarla: tu héroe se cura 4.',
    flavor: 'Simples, blancas y bendecidas.'
  },
  'ada-copperwick': {
    name: 'Ada Copperwick',
    text: 'Inventar (2): un aliado tuyo gana +4 de ataque y +4 de vida. Cuando entra otro aliado tuyo, gana +1 de ataque.',
    flavor: 'La magia es ingeniería que nadie explicó todavía.',
    ability: { name: 'Inventar', text: 'Un aliado tuyo gana +4 de ataque y +4 de vida.' }
  },
  'adrenaline-shot': {
    name: 'Dosis de Adrenalina',
    text: 'Un aliado tuyo gana +8 de ataque esta fase. Instantánea.',
    flavor: 'Efectos secundarios: ganar.'
  },
  'aegis-android': {
    name: 'Androide Égida',
    text: 'Cuando entra otro aliado tuyo, gana +6 de vida.',
    flavor: 'Protocolo uno: proteger. No hay protocolo dos.'
  },
  'aegis-lantern': {
    name: 'Farol de la Égida',
    text: 'Artefacto. Cada daño que reciben tus aliados se reduce en 1.',
    flavor: 'Su luz cae sobre todos los escudos a la vez.'
  },
  'aegis-of-eternity': {
    name: 'Égida de la Eternidad',
    text: 'Al empezar cada fase, tu héroe gana 3 de armadura.',
    flavor: 'Nunca se rompe. Solo espera.'
  },
  'aegis-of-faith': {
    name: 'Égida de la Fe',
    text: 'Al jugarla: tu héroe se cura 10.',
    flavor: 'La fe es la armadura más fuerte.'
  },
  'aegis-of-the-warlord': {
    name: 'Égida del Señor de la Guerra',
    text: 'Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Nunca la atravesaron. Ni una vez.'
  },
  'aeon-phoenix': {
    name: 'Fénix del Eón',
    text: 'Al entrar: hacé 6 de daño a cada aliado enemigo.',
    flavor: 'Ardió al final de cada era y renació al comienzo de la siguiente.'
  },
  'aimed-shot': {
    name: 'Disparo Certero',
    text: 'Hacé 10 de daño a un slot enemigo.',
    flavor: 'Inspirá. Exhalá. Soltá.'
  },
  'airship-bombardier': {
    name: 'Bombardera del Dirigible',
    text: 'Al entrar: hacé 6 de daño a un aliado enemigo al azar.',
    flavor: '¡Bombas fuera! Casi todas.',
    ability: { name: 'Bombardeo', text: 'Hacé 10 de daño a un aliado enemigo al azar.' }
  },
  'aldric-dawnkeeper': {
    name: 'Aldric Dawnkeeper',
    text: 'Luz del Alba (2): tu héroe se cura 10 y tus aliados se curan 6. Al final de cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Todas las noches terminan. Él se ocupa de eso.',
    ability: { name: 'Luz del Alba', text: 'Tu héroe se cura 10 y tus aliados se curan 6.' }
  },
  'amber-totem': {
    name: 'Tótem de Ámbar',
    text: 'Tus aliados ganan +1 de ataque y +3 de vida y tu héroe se cura 4.',
    flavor: 'Un bicho atrapado en ámbar, un espíritu atrapado en el bicho.'
  },
  'ambush-of-raptors': {
    name: 'Emboscada de Raptores',
    text: 'Cuando el rival invoca un aliado: hacele 10 de daño y invocá una Manada de Raptores.',
    flavor: 'Chicas listas.'
  },
  'analytical-engine': {
    name: 'Máquina Analítica',
    text: 'Artefacto con 3 usos. Al empezar cada fase, robá una carta.',
    flavor: 'Piensa para que no tengas que hacerlo. Solo necesita más cartas.'
  },
  'ancient-treant': {
    name: 'Ent Ancestral',
    text: 'Al empezar cada fase, gana +2 de ataque y +4 de vida y tu héroe se cura 4.',
    flavor: 'Era una semilla cuando el mundo era joven.'
  },
  antidote: {
    name: 'Antídoto',
    text: 'Tu héroe y tus aliados pierden todos sus estados (veneno, quemadura y congelación). Rápida.',
    flavor: 'Sabe horrible. Funciona de maravilla.'
  },
  'apprentice-mage': {
    name: 'Aprendiz de Mago',
    text: 'Al entrar: hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Apunta al blanco. Casi siempre le pega a algo.'
  },
  'apprentice-wand': { name: 'Varita de Aprendiz', flavor: 'Apuntá, agitá, esperá lo mejor.' },
  'aqueduct-engineer': {
    name: 'Ingeniera de Acueductos',
    text: 'Al entrar: tu héroe gana 8 de armadura.',
    flavor: 'Agua, caminos y murallas. Los imperios los construyen los plomeros.'
  },
  'aquila-of-the-ninth': {
    name: 'Águila de la Novena',
    text: 'Al empezar cada fase, tus aliados ganan +1 de ataque y +3 de vida.',
    flavor: 'La legión perdida encontró el camino de vuelta, con un siglo de retraso.'
  },
  'arc-trooper': {
    name: 'Soldado de Arco',
    text: 'Al atacar: hacé 3 de daño a un aliado enemigo al azar.',
    flavor: 'Cada disparo salta al blanco siguiente.',
    ability: { name: 'Sobrecarga', text: 'Hacé 12 de daño a un aliado enemigo.' }
  },
  'arcane-backlash': {
    name: 'Contragolpe Arcano',
    text: 'Cuando el héroe enemigo usa su habilidad: cancelala, hacé 10 de daño al héroe enemigo y robá una carta.',
    flavor: 'La magia siempre vuelve a quien la tira.'
  },
  'arcane-explosion': {
    name: 'Explosión Arcana',
    text: 'Hacé 20 de daño a un slot enemigo y hacé 6 de daño a cada aliado enemigo. Lenta.',
    flavor: 'La torre perdió una pared. El enemigo, todo.'
  },
  'arcane-familiar': {
    name: 'Familiar Arcano',
    text: 'Al entrar: robá una carta.',
    flavor: 'Siempre sabe qué libro estabas buscando.'
  },
  'arcane-intellect': {
    name: 'Intelecto Arcano',
    text: 'Robá 2 cartas y ganá 1 de Cronos.',
    flavor: 'El conocimiento es el único poder que crece cuando lo gastás.'
  },
  'arcane-missiles': {
    name: 'Proyectiles Arcanos',
    text: 'Hacé 6 de daño a un aliado enemigo al azar. Rápida.',
    flavor: 'Tres lucecitas, un gran problema.'
  },
  'archive-guardian': {
    name: 'Guardiana del Archivo',
    text: 'Al entrar: robá una carta y tu héroe gana 5 de armadura.',
    flavor: 'Silencio en la biblioteca. O si no...'
  },
  'archmage-of-the-spire': {
    name: 'Archimago de la Aguja',
    text: 'Al entrar: hacé 10 de daño a un aliado enemigo al azar. Al empezar cada fase, hacé 3 de daño al héroe enemigo.',
    flavor: 'Desde lo alto de la aguja gobierna el clima y la guerra.'
  },
  'archwizard-morvane': {
    name: 'Archimago Morvane',
    text: 'Al entrar: hacé 8 de daño a cada aliado enemigo y robá una carta.',
    flavor: 'Vivió en todos los siglos. En la mayoría fue el villano.'
  },
  'arena-champion': { name: 'Campeona de la Arena', flavor: 'El público canta su nombre en once idiomas.' },
  'argos-the-silver-hound': {
    name: 'Argos, el Sabueso Plateado',
    text: 'Al entrar: hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'La esperó veinte años. Esperaría veinte más.'
  },
  'arrow-of-the-sun': {
    name: 'Flecha del Sol',
    text: 'Hacé 8 de daño a un aliado enemigo y robá una carta. Rápida.',
    flavor: 'Disparada al amanecer, cae al mediodía.'
  },
  'ash-drake': { name: 'Draco de Ceniza', flavor: 'Sus hijos son más chicos. Solo un poco.' },
  'automaton-duelist': { name: 'Duelista Autómata', flavor: 'Programado para la elegancia. Y para apuñalar.' },
  'ballista-crew': {
    name: 'Dotación de Balista',
    text: 'Al entrar: hacé 6 de daño a un aliado enemigo al azar.',
    flavor: 'Apuntá, tensá y que los dioses decidan.',
    ability: { name: 'Andanada', text: 'Hacé 8 de daño a un aliado enemigo al azar.' }
  },
  'banner-of-the-rift': {
    name: 'Estandarte de la Grieta',
    text: 'Tus aliados ganan +3 de ataque y +6 de vida.',
    flavor: 'Bajo él, todas las eras pelean como una.'
  },
  'bannerman-sash': {
    name: 'Banda del Abanderado',
    text: 'Adjuntala a un aliado tuyo: tiene +6 de vida y protector.',
    flavor: 'Ponetela y las flechas te buscan a vos.'
  },
  'battle-cry': {
    name: 'Grito de Batalla',
    text: 'Tus aliados ganan +2 de ataque y +2 de vida.',
    flavor: 'Más fuerte que los tambores de guerra.'
  },
  'battle-herald': {
    name: 'Heraldo de Batalla',
    text: 'Al entrar: tus otros aliados ganan +3 de ataque.',
    flavor: 'Cuando sopla el cuerno, todas las eras responden.'
  },
  'battlemage-squire': { name: 'Escudero Hechicero', flavor: 'Mitad espada, mitad hechizo, todo entusiasmo.' },
  'bazaar-of-ages': {
    name: 'Bazar de las Eras',
    text: 'Artefacto. Al empezar cada fase, cada jugador roba una carta.',
    flavor: 'Todo está a la venta. Hasta el mañana.'
  },
  'bear-trap': {
    name: 'Trampa para Osos',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y aturdilo.',
    flavor: 'Clac.'
  },
  'bear-trap-gears': {
    name: 'Trampa de Engranajes',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y hacele 6 de daño.',
    flavor: '¡Clac!'
  },
  'berserker-pact': {
    name: 'Pacto del Berserker',
    text: 'Adjuntalo a un aliado tuyo: su vida pasa a ser 1 y tiene +12 de ataque.',
    flavor: 'Todo o nada. Nada guardado.'
  },
  'black-comet': {
    name: 'Cometa Negro',
    text: 'Hacé 9 de daño a cada aliado enemigo. Lenta.',
    flavor: 'No brilla. Solo cae.'
  },
  'black-grimoire': {
    name: 'Grimorio Negro',
    text: 'Un aliado al azar de tu descarte vuelve al juego, un aliado al azar de tu descarte vuelve al juego y robá una carta.',
    flavor: 'Cada página es una puerta. Cada puerta se abre hacia adentro.'
  },
  'black-ice-hacker': {
    name: 'Hacker de Hielo Negro',
    text: 'Al entrar: robá 2 cartas.',
    flavor: 'No entra. Siempre estuvo adentro.'
  },
  'blackout-specialist': {
    name: 'Especialista en Apagones',
    text: 'Al entrar: aturdí a cada aliado enemigo.',
    flavor: 'Se apagan las luces. Fin del juego.'
  },
  'blade-dancer': { name: 'Danzarina de Hojas', flavor: 'A su danza ya no le queda público.' },
  'blade-of-ages': { name: 'Hoja de las Eras', flavor: 'Bebe los años de quienes corta.' },
  'blessed-mail': { name: 'Malla Bendita', flavor: 'Cada anillo lo bendijo un santo distinto.' },
  blessing: { name: 'Bendición', text: 'Un aliado tuyo gana +3 de ataque y +8 de vida.', flavor: 'Andá, y sé más.' },
  blizzard: {
    name: 'Ventisca',
    text: 'Hacé 6 de daño a cada aliado enemigo y aturdí a cada aliado enemigo. Lenta.',
    flavor: 'El invierno llegó temprano. Y enojado.'
  },
  'bloodthirst-cleaver': { name: 'Cuchilla Sedienta', flavor: 'Nunca está satisfecha.' },
  blueprint: { name: 'Plano', text: 'Robá 2 cartas.', flavor: 'Versión cuarenta y dos. Esta va a funcionar.' },
  'blueprint-cache': {
    name: 'Tubo de Planos',
    text: 'Robá una carta y ganá 1 Cronos.',
    flavor: 'Todo invento empieza con las notas de otro.'
  },
  'boiler-brute': { name: 'Bruto de Caldera', flavor: 'Seguí echándole carbón. No preguntes qué pasa si parás.' },
  'boiler-burst': {
    name: 'Estallido de Caldera',
    text: 'Hacé 8 de daño a un aliado enemigo y ganá 1 de Cronos.',
    flavor: 'Presión: demasiada. Resultado: excelente.'
  },
  'bolt-the-iron-bulldog': {
    name: 'Bolt, el Bulldog de Hierro',
    text: 'Al entrar: tu héroe gana 6 de armadura.',
    flavor: 'Lo construyeron para cuidar la fábrica. Decidió cuidar a Gideon.'
  },
  'bone-carver': {
    name: 'Talladora de Huesos',
    text: 'Al morir: tu héroe se cura 8.',
    flavor: 'No se desperdicia nada. Ni siquiera vos.'
  },
  'bone-crawler': { name: 'Reptador de Huesos', flavor: 'Matalo. Vuelve para el almuerzo.' },
  'bone-dragon': { name: 'Dragón de Hueso', flavor: 'Murió hace mil años. Se olvidó de parar.' },
  'bone-reading': {
    name: 'Lectura de Huesos',
    text: 'Robá una carta y tu héroe se cura 4. Rápida.',
    flavor: 'Caen los huesos. Se muestra el futuro.'
  },
  'bonefang-bow': { name: 'Arco Colmillo de Hueso', flavor: 'Tallado del diente del primer tirano.' },
  boneyard: {
    name: 'El Osario',
    text: 'Al empezar cada fase, si tu descarte tiene 5 cartas o más, tus aliados ganan +1 de ataque y +1 de vida.',
    flavor: 'Cada hueso de acá fue un héroe alguna vez.'
  },
  'bounty-contract': {
    name: 'Contrato de Recompensa',
    text: 'Destruí un aliado enemigo. Lenta.',
    flavor: 'Nada personal. Solo negocios.'
  },
  brace: {
    name: 'Afirmarse',
    text: 'Tu héroe gana 8 de armadura. Instantánea.',
    flavor: 'Plantá los pies. Ahí viene.'
  },
  'brass-behemoth': { name: 'Behemot de Latón', flavor: 'La fábrica lo construyó. Después, ya no hubo fábrica.' },
  'brass-enforcer': { name: 'Ejecutor de Latón', flavor: 'Los impuestos se pagan. Ya.' },
  'brass-musketeer': { name: 'Mosquetero de Latón', flavor: 'Un disparo, una nube de humo, un problema menos.' },
  'brittle-hex': {
    name: 'Maleficio Quebradizo',
    text: 'Adjuntalo a un aliado enemigo: cada daño que recibe se duplica.',
    flavor: 'Su piel se vuelve vidrio; su armadura, papel.'
  },
  'broken-clocktower': {
    name: 'Torre del Reloj Rota',
    text: 'Tus aliados entran con +6 de vida.',
    flavor: 'Se detuvo en el momento justo.'
  },
  'bronze-cohort': {
    name: 'Cohorte de Bronce',
    text: 'Al entrar: si tiene al lado otro aliado de Bronce, gana +2 de ataque y +4 de vida.',
    flavor: 'Solo, un soldado. Juntos, una muralla.'
  },
  'bronze-colossus-guard': {
    name: 'Guardia Coloso de Bronce',
    flavor: 'Fundido en bronce, enfriado en sangre de gigantes.'
  },
  'bronze-cuirass': { name: 'Coraza de Bronce', flavor: 'Lustrada cada mañana, abollada cada tarde.' },
  'bronze-legionary': {
    name: 'Legionario de Bronce',
    text: 'Al entrar: si tiene al lado otro aliado de Bronce, robá una carta.',
    flavor: 'Primero el escudo, después el nombre.'
  },
  'bulwark-totem': {
    name: 'Tótem Baluarte',
    text: 'Artefacto. Cada daño que recibe tu héroe se reduce en 2.',
    flavor: 'Tallado de una muralla que nunca cayó.'
  },
  'buried-capsule': {
    name: 'Cápsula Enterrada',
    text: 'Artefacto con 2 usos. Cuando se gasta el último, al empezar una fase, robás 3 cartas.',
    flavor: 'Abrir en dos fases. No antes.'
  },
  'caelus-the-usurper': {
    name: 'Caelus el Usurpador',
    text: 'Diezmar (4): hacé 2 de daño a cada aliado enemigo. Al empezar cada fase, tus aliados ganan +1 de ataque.',
    flavor: 'Robó una corona de una Roma que nunca existió, y quiere la verdadera.',
    ability: { name: 'Diezmar', text: 'Hacé 2 de daño a cada aliado enemigo.' }
  },
  'call-of-the-wild': {
    name: 'Llamado de la Naturaleza',
    text: 'Invocá una Manada de Raptores y tu héroe se cura 6.',
    flavor: 'La jungla te escucha. Y manda ayuda.'
  },
  'candle-keeper': {
    name: 'Guardián de las Velas',
    text: 'Al morir: robá una carta.',
    flavor: 'Cuando se apaga su vela, se da vuelta una página.'
  },
  'carrion-swarm': {
    name: 'Enjambre Carroñero',
    text: 'Al entrar: si tu descarte tiene 4 cartas o más, robá una carta.',
    flavor: 'Siempre saben dónde fue la batalla.'
  },
  'cave-bear': {
    name: 'Oso de las Cavernas',
    text: 'Al recibir daño: gana +3 de ataque.',
    flavor: 'Despertarlo fue el último error de muchos cazadores.'
  },
  'cave-scout': { name: 'Exploradora de las Cavernas', flavor: 'Conoce todas las cuevas. Y lo que vive en ellas.' },
  'celestial-phoenix': {
    name: 'Fénix Celestial',
    text: 'Al entrar: hacé 10 de daño al héroe enemigo. Al morir: hacé 6 de daño a cada aliado enemigo.',
    flavor: 'Arde en azul, y nunca se queda muerto.'
  },
  'censer-of-souls': {
    name: 'Incensario de Almas',
    text: 'Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'Su humo lleva plegarias a todas las eras.'
  },
  'centurion-drillmaster': {
    name: 'Centurión Instructor',
    text: 'Al entrar: los aliados de al lado ganan +2 de ataque.',
    flavor: '¡Otra vez! ¡Más rápido! ¡Hasta que se cansen los dioses!'
  },
  'centurion-maximus': {
    name: 'Centurión Máximo',
    text: 'Al morir: invocá un Legionario de Bronce.',
    flavor: 'El primero en llegar, el último en irse.'
  },
  'chain-lightning': {
    name: 'Rayo en Cadena',
    text: 'Hacé 8 de daño a cada aliado enemigo. Lenta.',
    flavor: 'Nunca cae una sola vez en el mismo lugar.'
  },
  chainmail: { name: 'Cota de Malla', flavor: 'Mil anillos chiquitos, un gran consuelo.' },
  'chancellor-brassmaw': {
    name: 'Canciller Bocabronce',
    text: 'Decreto de Hierro (3): aturdí a un aliado enemigo y hacele 6 de daño. Al final de cada fase, tu héroe gana 3 de armadura.',
    flavor: 'Es dueño de las fábricas, de la ciudad y de casi todos los relojes.',
    ability: { name: 'Decreto de Hierro', text: 'Aturdí a un aliado enemigo y hacele 6 de daño.' }
  },
  'charge-in': {
    name: 'A la Carga',
    text: 'Un aliado tuyo gana +12 de ataque esta fase. Rápida.',
    flavor: 'Las preguntas, después.'
  },
  'charged-shard': {
    name: 'Esquirla Cargada',
    text: 'Tu héroe gana 2 de energía.',
    flavor: 'Una astilla de rayo, guardada en un frasco.'
  },
  'chariot-racer': { name: 'Auriga', flavor: 'Siete vueltas. Sin frenos.' },
  'chief-engineer-vance': {
    name: 'Ingeniera Jefa Vance',
    text: 'Cuando entra otro aliado tuyo, gana +2 de ataque y +4 de vida. Al entrar: ganá 2 de Cronos.',
    flavor: 'Si tiene engranajes, ella lo puede mejorar.'
  },
  'chrome-medic': {
    name: 'Médica Cromada',
    text: 'Al final de cada fase, tus aliados se curan 3.',
    flavor: 'Entran nanobots, salen heridas.',
    ability: { name: 'Nanobots', text: 'Un aliado tuyo se cura 8.' }
  },
  'chrono-acrobat': { name: 'Acróbata del Tiempo', flavor: 'Dobla un segundo hasta que se rompe.' },
  'chrono-anchor': {
    name: 'Ancla Temporal',
    text: 'Adjuntala a un aliado enemigo: tiene -4 de ataque y queda aturdido hasta el final de la fase siguiente.',
    flavor: 'Atrapado entre dos segundos.'
  },
  'chrono-battery': {
    name: 'Batería de Cronos',
    text: 'Ganás 2 de Cronos. Instantánea.',
    flavor: 'Tiempo embotellado. Agitar antes de usar.'
  },
  'chrono-golem': { name: 'Gólem del Tiempo', flavor: 'Su corazón es un reloj al que nunca le dieron cuerda.' },
  'chronomancer-adept': {
    name: 'Adepta Cronomante',
    text: 'Al entrar: ganás 2 de Cronos.',
    flavor: 'Guarda segundos de repuesto en un frasco.'
  },
  'chronometer-savant': {
    name: 'Sabio del Cronómetro',
    text: 'Al entrar: ganá 1 de Cronos y robá una carta.',
    flavor: 'Mide el tiempo hasta la millonésima de segundo. Después lo roba.'
  },
  'chronos-leviathan': {
    name: 'Leviatán de Cronos',
    text: 'Al entrar: aturdí a cada aliado enemigo.',
    flavor: 'Se traga las horas enteras.'
  },
  'cleaving-strike': {
    name: 'Tajo Partidor',
    text: 'Hacé 14 de daño a un aliado enemigo.',
    flavor: 'Un golpe, dos mitades.'
  },
  'cloaking-device': {
    name: 'Dispositivo de Camuflaje',
    text: 'Un aliado tuyo gana +2 de ataque y +6 de vida y robá una carta. Instantáneo.',
    flavor: 'Ahora lo ves. Ahora no.'
  },
  'clockheart-engine': {
    name: 'Motor Corazón de Reloj',
    text: 'Artefacto. Al empezar cada fase, ganás 1 Cronos y robás una carta.',
    flavor: 'Un corazón de engranajes que late en Cronos.'
  },
  'clocktower-watchman': {
    name: 'Sereno del Campanario',
    text: 'Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Toca la hora hace doscientos años. Nunca llegó tarde.'
  },
  'clockwork-dragon': {
    name: 'Dragón Mecánico',
    text: 'Al entrar: hacé 4 de daño a cada aliado enemigo.',
    flavor: 'Su fuego funciona a carbón y muy malas intenciones.'
  },
  'cog-apprentice': {
    name: 'Aprendiz de Engranajes',
    text: 'Al entrar: ganá 1 de Cronos.',
    flavor: 'Cuidá los dedos. Los engranajes no lo hacen.'
  },
  'cogsworth-the-assistant': {
    name: 'Cogsworth, el Asistente',
    text: 'Al entrar: ganá 1 de Cronos y robá una carta. Al morir: invocá un Dron de Engranajes.',
    flavor: 'Asistente de laboratorio, mayordomo y extintor ocasional.',
    ability: { name: 'Arreglo Rápido', text: 'Un aliado tuyo se cura 8.' }
  },
  'cogwork-courier': {
    name: 'Mensajero de Engranajes',
    text: 'Al morir: robá 2 cartas.',
    flavor: 'Entrega garantizada. El mensajero, no tanto.'
  },
  'cohort-banner': {
    name: 'Estandarte de la Cohorte',
    text: 'Tus aliados ganan +1 de ataque y +4 de vida.',
    flavor: 'Perdelo y toda la cohorte responde por eso.'
  },
  colosseum: {
    name: 'Coliseo',
    text: 'Tus aliados entran con +4 de ataque.',
    flavor: 'Cincuenta mil voces, un solo rugido.'
  },
  'colossus-mark-ix': {
    name: 'Coloso Mark IX',
    text: 'Al entrar: invocá un Dron de Engranajes y invocá un Dron de Engranajes.',
    flavor: 'De los Mark I al VIII no se habla.'
  },
  'colossus-of-the-harbor': {
    name: 'Coloso del Puerto',
    text: 'Al entrar: tu héroe gana 15 de armadura.',
    flavor: 'Los barcos pasan entre sus pies. Los ejércitos, no.'
  },
  'constellation-weave': {
    name: 'Tejido de Constelaciones',
    text: 'Hacé 6 de daño a cada aliado enemigo y aturdí a un aliado enemigo al azar. Lenta.',
    flavor: 'Ata las estrellas entre sí, y el cielo obedece.'
  },
  'core-meltdown': {
    name: 'Fusión del Núcleo',
    text: 'Hacé 10 de daño a cada aliado enemigo. Lenta.',
    flavor: 'Atención. Atención. Aten-'
  },
  'counter-rune': {
    name: 'Runa de Contrahechizo',
    text: 'Cuando el héroe enemigo usa su habilidad: cancelala.',
    flavor: 'Lindo hechizo. Lástima el final.'
  },
  'counterspell-glyph': {
    name: 'Glifo de Contrahechizo',
    text: 'Cuando el héroe enemigo usa su habilidad: la cancelás.',
    flavor: 'Hoy no. En ninguna era.'
  },
  'court-illusionist': {
    name: 'Ilusionista de la Corte',
    text: 'Al entrar: robá una carta.',
    flavor: '¿Está realmente ahí? Preguntale. Esperá, ¿adónde se fue?'
  },
  'cowards-brand': {
    name: 'Marca del Cobarde',
    text: 'Adjuntala a un aliado enemigo: pierde protector y tiene -2 de ataque.',
    flavor: 'Nadie sigue a un cobarde a la batalla.'
  },
  'crown-of-the-arcanist': {
    name: 'Corona del Arcanista',
    text: 'Al empezar cada fase, robá una carta.',
    flavor: 'Te susurra hechizos en los sueños.'
  },
  'cryo-turret': {
    name: 'Torreta Criogénica',
    text: 'Cuando ataca, congela a su objetivo por el resto de la fase y la siguiente.',
    flavor: 'Calmate. Es una orden.'
  },
  'crystal-sentinel': { name: 'Centinela de Cristal', flavor: 'La luz lo atraviesa. Nada más.' },
  'cursed-crown': {
    name: 'Corona Maldita',
    text: 'Adjuntala a un aliado enemigo: no puede atacar ni usar su habilidad, y cada daño que recibe es 2 mayor.',
    flavor: 'Pesada es la cabeza. Más pesada, la maldición.'
  },
  'cursed-idol': {
    name: 'Ídolo Maldito',
    text: 'Artefacto con 4 usos. Al empezar cada fase, le hace 3 de daño al héroe enemigo.',
    flavor: 'Sonríe. Nadie sabe a quién.'
  },
  'cursed-skull': {
    name: 'Calavera Maldita',
    text: 'Hacé 4 de daño al héroe enemigo y robá una carta.',
    flavor: 'Se ríe de noche. Solo de noche.'
  },
  'cyber-samurai': {
    name: 'Samurái Cibernético',
    text: 'Al atacar: robá una carta.',
    flavor: 'Un código antiguo, reescrito en luz.'
  },
  'dark-pact': {
    name: 'Pacto Oscuro',
    text: 'Destruí tu otro aliado más débil: si lo hacés, robá 2 cartas y tu héroe se cura 5.',
    flavor: 'Todo tiene un precio. Pagalo con otro.'
  },
  'dark-sermon': {
    name: 'Sermón Oscuro',
    text: 'Hacé 6 de daño a cada aliado enemigo. Lenta.',
    flavor: 'La congregación escucha. Para siempre.'
  },
  'data-burst': {
    name: 'Ráfaga de Datos',
    text: 'Robá 2 cartas. Rápida.',
    flavor: 'Descargado en un parpadeo.'
  },
  'data-courier': {
    name: 'Mensajero de Datos',
    text: 'Al entrar: robá una carta.',
    flavor: 'Tus secretos, entregados cifrados. Casi siempre.'
  },
  'dead-end': {
    name: 'Callejón sin Salida',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y aturdilo.',
    flavor: 'Doblaste mal.'
  },
  'death-mark': {
    name: 'Marca de la Muerte',
    text: 'Cuando el rival invoca un aliado: hacele 10 de daño y robá una carta.',
    flavor: 'Tiene tu nombre. Siempre lo tuvo.'
  },
  'devourer-of-light': {
    name: 'Devorador de Luz',
    text: 'Al entrar: destruí tu otro aliado más débil: si lo hacés, hacé 8 de daño a cada aliado enemigo.',
    flavor: 'Las estrellas se apagan por donde pasa.'
  },
  'dino-egg': {
    name: 'Huevo Gigante',
    text: 'Invocá una Cría de Dinosaurio y robá una carta.',
    flavor: 'No preguntes quién lo puso.'
  },
  'dino-hatchling': {
    name: 'Cría de Dinosaurio',
    text: 'Al empezar cada fase, gana +1 de ataque y +1 de vida.',
    flavor: 'Come, crece, vuelve a comer.'
  },
  'divine-shield': {
    name: 'Escudo Divino',
    text: 'Un aliado tuyo gana +14 de vida y tu héroe gana 6 de armadura. Instantánea.',
    flavor: 'A los fieles no los toca nada.'
  },
  'dragon-of-runes': {
    name: 'Dragón de las Runas',
    text: 'Al entrar: hacé 5 de daño a cada aliado enemigo.',
    flavor: 'Cada escama es un hechizo más viejo que el reino.'
  },
  'drakescale-vest': { name: 'Chaleco de Escamas de Draco', flavor: 'El draco ya no lo necesitaba.' },
  'dread-knight': {
    name: 'Caballero del Terror',
    flavor: 'Su juramento sobrevivió a su reino, a su cuerpo y a su nombre.'
  },
  'drifting-merchant': {
    name: 'Mercader a la Deriva',
    text: 'Al entrar: tu héroe se cura 6.',
    flavor: 'Pociones de mañana a precios de ayer.'
  },
  'drone-swarm': { name: 'Enjambre de Drones', flavor: 'Uno es un juguete. Mil son un fenómeno climático.' },
  'dynamo-golem': {
    name: 'Gólem Dínamo',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Funciona con rayos guardados y terquedad.',
    ability: { name: 'Descarga', text: 'Ganá 2 Cronos y robá una carta.' }
  },
  'eater-of-worlds': {
    name: 'Devoradora de Mundos',
    text: 'Al entrar: destruí tu otro aliado más débil: si lo hacés, hacé 12 de daño a cada aliado enemigo y robá 2 cartas.',
    flavor: 'Los planetas son solo la entrada.'
  },
  'echo-the-spirit-crow': {
    name: 'Eco, el Cuervo Espiritual',
    text: 'Al morir: un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Murió nueve veces. Siempre vuelve con alguien.'
  },
  'echoing-knight': { name: 'Caballero del Eco', flavor: 'Vencelo una vez y vuelve un momento antes.' },
  'elder-mammoth': { name: 'Mamut Anciano', flavor: 'La tierra recuerda cada paso que da.' },
  'elixir-of-vigor': { name: 'Elixir de Vigor', text: 'Tu héroe se cura 25.', flavor: 'Sirve para otros cien años.' },
  'emp-mine': {
    name: 'Mina de Pulso',
    text: 'Cuando el rival invoca un aliado: aturdilo por dos fases, aturdí a cada aliado enemigo y robá una carta.',
    flavor: 'Todas las luces del distrito se apagan a la vez.'
  },
  'end-of-days': {
    name: 'Fin de los Días',
    text: 'Hacé 20 de daño a cada aliado, también a los tuyos. Lenta.',
    flavor: 'Todas las eras terminan. Así.'
  },
  'endless-hunger': {
    name: 'Hambre Infinita',
    text: 'Un aliado al azar de tu descarte vuelve al juego y un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Nada de lo que come se queda ido.'
  },
  'entropy-mage': {
    name: 'Mago de la Entropía',
    text: 'Al entrar: hacé 6 de daño a un aliado enemigo al azar.',
    flavor: 'Todo se desarma. Él solo ayuda.',
    ability: { name: 'Decadencia', text: 'Hacé 9 de daño a un aliado enemigo.' }
  },
  'era-hopper': { name: 'Saltaeras', flavor: 'Nunca dos veces en el mismo siglo.' },
  eruption: {
    name: 'Erupción',
    text: 'Hacé 8 de daño a cada aliado enemigo. Lenta.',
    flavor: 'La montaña se despierta enojada.'
  },
  'eternal-emperor': {
    name: 'El Emperador Eterno',
    text: 'Al entrar: tus otros aliados ganan +4 de ataque y +10 de vida y tu héroe gana 20 de armadura.',
    flavor: 'Roma cayó cien veces. Él nunca.'
  },
  execute: { name: 'Ejecutar', text: 'Destruí un aliado enemigo. Lenta.', flavor: 'El veredicto es acero.' },
  'explosive-trap': {
    name: 'Trampa Explosiva',
    text: 'Cuando un aliado enemigo ataca: hacele 8 de daño y hacé 4 de daño a cada aliado enemigo.',
    flavor: 'Pisá despacito.'
  },
  'eye-of-the-storm': {
    name: 'Ojo de la Tormenta',
    text: 'Al empezar cada fase, hacé 5 de daño al héroe enemigo.',
    flavor: 'Calma en el centro. Ruina alrededor.'
  },
  'factory-foreman': {
    name: 'Capataz de la Fábrica',
    text: 'Al entrar: invocá un Dron de Engranajes.',
    flavor: 'Más producción, menos quejas.'
  },
  'falling-star': {
    name: 'Estrella Fugaz',
    text: 'Hacé 10 de daño a un slot enemigo y robá una carta.',
    flavor: 'Pedí un deseo. Después agachate.'
  },
  'fang-the-sabertooth': {
    name: 'Colmillo, el Dientes de Sable',
    flavor: 'Kora lo crió. El rey tirano aprendió a temerle.'
  },
  'feral-growth': {
    name: 'Crecimiento Salvaje',
    text: 'Un aliado tuyo gana +4 de ataque y +8 de vida.',
    flavor: 'Comete la verdura. Toda.'
  },
  'ferryman-of-hours': {
    name: 'Barquero de las Horas',
    text: 'Al entrar: robá una carta.',
    flavor: 'Por una moneda, te lleva remando al día que quieras.'
  },
  'final-toll': {
    name: 'El Toque Final',
    text: 'Hacé 20 de daño a un slot enemigo y hacé 4 de daño a cada aliado enemigo. Lenta.',
    flavor: 'La campana suena una vez. Solo una.'
  },
  'fire-flask': {
    name: 'Frasco de Fuego',
    text: 'Hacé 14 de daño a un slot enemigo. Rápida.',
    flavor: 'Manipular con guantes de cocina.'
  },
  fireball: {
    name: 'Bola de Fuego',
    text: 'Hacé 18 de daño a un slot enemigo. Lenta.',
    flavor: 'El hechizo más viejo de todas las eras.'
  },
  firewall: {
    name: 'Cortafuegos',
    text: 'Cuando el héroe enemigo usa su habilidad: cancelala y robá una carta.',
    flavor: 'Acceso denegado.'
  },
  'flame-legionary': {
    name: 'Legionario de las Llamas',
    text: 'Cuando ataca, prende fuego a su objetivo (2 por fase durante 3 fases).',
    flavor: 'La legión le trajo el fuego al mundo. Él te lo trae a vos.'
  },
  'flame-wave': {
    name: 'Ola de Llamas',
    text: 'Hacé 6 de daño a cada aliado enemigo. Lenta.',
    flavor: 'Manos tibias, corazones fríos.'
  },
  'flash-powder': {
    name: 'Polvo Cegador',
    text: 'Hacé 4 de daño a cada aliado enemigo.',
    flavor: 'Ciega, y pica un poquito.'
  },
  'flesh-weaver': {
    name: 'Tejedora de Carne',
    text: 'Cuando entra otro aliado tuyo, gana +4 de vida. Al morir: invocá un Engendro del Vacío.',
    flavor: 'Cose a los caídos de nuevo. No siempre bien.'
  },
  'forced-march': {
    name: 'Marcha Forzada',
    text: 'Un aliado tuyo gana +10 de ataque esta fase y robá una carta. Instantánea.',
    flavor: 'Dormir es para los conquistados.'
  },
  'forum-of-heroes': {
    name: 'Foro de los Héroes',
    text: 'Al empezar cada fase, tu héroe gana 4 de armadura y tus aliados se curan 2.',
    flavor: 'Cada estatua de acá fue un soldado con nombre.'
  },
  'freezing-trap': {
    name: 'Trampa Congelante',
    text: 'Cuando el rival invoca un aliado: aturdilo por dos fases, hacele 6 de daño y robá una carta.',
    flavor: 'Bienvenido. Quedate un rato.'
  },
  'frost-adept': {
    name: 'Adepto de Escarcha',
    text: 'Al entrar: aturdí a un aliado enemigo al azar.',
    flavor: 'Quedate quieto. Solo va a doler un poco.',
    ability: { name: 'Rayo de Escarcha', text: 'Hacé 6 de daño a un aliado enemigo.' }
  },
  'frost-nova': {
    name: 'Nova de Escarcha',
    text: 'Hacé 6 de daño a cada aliado enemigo. Lenta.',
    flavor: 'El invierno, todo de golpe.'
  },
  'frost-sigil': {
    name: 'Sello de Escarcha',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y aturdilo.',
    flavor: 'Un paso sobre el sello y el invierno viene por vos.'
  },
  'frost-spear': {
    name: 'Pica de Escarcha',
    text: 'Hacé 4 de daño a un slot enemigo y congelalo por el resto de esta fase y la siguiente.',
    flavor: 'Fría, filosa y al grano.'
  },
  'frost-staff': {
    name: 'Bastón de Escarcha',
    text: 'Al jugarla: aturdí a un aliado enemigo al azar.',
    flavor: 'Agarralo con guantes.'
  },
  'frozen-shackles': {
    name: 'Grilletes Congelados',
    text: 'Adjuntalos a un aliado enemigo: queda congelado mientras estén adjuntos.',
    flavor: 'Hielo que nunca se derrite, para un preso que nunca sale.'
  },
  'full-steam-ahead': {
    name: 'A Todo Vapor',
    text: 'Tus aliados ganan +3 de ataque y +3 de vida y ganá 1 de Cronos.',
    flavor: '¡Todos los motores, ya!'
  },
  'gag-of-silence': {
    name: 'Mordaza del Silencio',
    text: 'Adjuntala a un aliado enemigo: no puede usar su habilidad.',
    flavor: 'Ni cantos, ni órdenes, ni hechizos.'
  },
  'galvanic-spark': {
    name: 'Chispa Galvánica',
    text: 'Hacé 6 de daño a un slot enemigo. Rápida.',
    flavor: 'Un poco de electricidad para despertar las cosas.'
  },
  'garden-of-forever': {
    name: 'Jardín del Para Siempre',
    text: 'Al empezar cada fase, tus aliados ganan +2 de ataque y +2 de vida, y tu héroe se cura 4.',
    flavor: 'Acá nada se marchita. Nunca.'
  },
  'gate-of-oblivion': {
    name: 'Portal del Olvido',
    text: 'Al empezar cada fase, hacé 5 de daño a un aliado enemigo al azar. Si tu descarte tiene 10 cartas o más, un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Lo que entra nunca vuelve. Casi nunca.'
  },
  'gear-drone': { name: 'Dron de Engranajes', flavor: 'Dale cuerda y soltalo. Sabe el camino.' },
  'gear-weaver': {
    name: 'Tejedora de Engranajes',
    text: 'Cuando entra otro aliado tuyo, gana +1 de ataque y +2 de vida.',
    flavor: 'Les construye mejoras chiquitas a todos los que conoce.'
  },
  'gearworks-tower': {
    name: 'Torre de los Engranajes',
    text: 'Al empezar cada fase, ganá 1 de Cronos. Al final de cada fase, tu héroe gana 3 de armadura.',
    flavor: 'Sus campanas suenan cada hora de cada era.'
  },
  'ghillie-cloak': { name: 'Capa de Camuflaje', text: 'Al jugarla: robá una carta.', flavor: 'Ahora sos el bosque.' },
  'gideon-ironsteam': {
    name: 'Gideon Ironsteam',
    text: 'Puño de Pistón (2): hacé 10 de daño a un slot enemigo y tu héroe gana 4 de armadura.',
    flavor: 'Mitad hombre, mitad motor, todo testarudez.',
    ability: { name: 'Puño de Pistón', text: 'Hacé 10 de daño a un slot enemigo y tu héroe gana 4 de armadura.' }
  },
  'glacial-pulse': {
    name: 'Pulso Glacial',
    text: 'Congelá a todos los aliados enemigos por el resto de esta fase y la siguiente.',
    flavor: 'Todo se detiene. Hasta los gritos.'
  },
  'gladiator-twins': { name: 'Gladiadores Gemelos', flavor: 'Nadie recuerda cuál ganó. Ganaron los dos.' },
  'gladius-of-the-legate': {
    name: 'Gladius del Legado',
    text: 'Al jugarla: tu héroe gana 5 de armadura.',
    flavor: 'Cada muesca de su hoja es un siglo.'
  },
  'glitch-runner': { name: 'Corredor Glitch', flavor: 'Ahora lo ves. Ahora ves un mensaje de error.' },
  goldbow: {
    name: 'El Arco Dorado',
    text: 'Al jugarla: robá una carta.',
    flavor: 'Un regalo del sol al mejor arquero bajo su luz.'
  },
  'golden-laurel': {
    name: 'Laurel Dorado',
    text: 'Un aliado tuyo gana +6 de ataque y +12 de vida y robá 2 cartas.',
    flavor: 'No pesa nada. Vale todo.'
  },
  'gorrak-tyrant-king': {
    name: 'Gorrak, Rey Tirano',
    text: 'Devorar (2): hacé 8 de daño a un slot enemigo y tu héroe se cura 8. Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'La jungla tiene un solo rey. Se come a los demás.',
    ability: { name: 'Devorar', text: 'Hacé 8 de daño a un slot enemigo y tu héroe se cura 8.' }
  },
  'grail-of-ages': {
    name: 'Grial de las Eras',
    text: 'Artefacto. Al empezar cada fase, tu héroe se cura 4.',
    flavor: 'Cada siglo vertió una gota.'
  },
  'grand-conjurer': {
    name: 'Gran Conjurador',
    text: 'Al entrar: invocá un Familiar Arcano.',
    flavor: '¿Para qué pelear solo si podés traer amigos del aire?',
    ability: { name: 'Lanza Arcana', text: 'Hacé 10 de daño a un aliado enemigo.' }
  },
  'grand-triumph': {
    name: 'Gran Triunfo',
    text: 'Tus aliados ganan +4 de ataque y +6 de vida y tu héroe se cura 10.',
    flavor: 'Pétalos de rosa, carros dorados y una ciudad de pie.'
  },
  'grappling-hook': {
    name: 'Garfio',
    text: 'Hacé 6 de daño a un slot enemigo y robá una carta.',
    flavor: 'Acercá un poco el futuro.'
  },
  'grasping-dead': {
    name: 'Manos de los Muertos',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y aturdilo.',
    flavor: 'La tierra te agarra. Ellos también.'
  },
  'grave-whisperer': {
    name: 'Susurradora de Tumbas',
    text: 'Al morir: robá una carta.',
    flavor: 'Los muertos le cuentan todo. Ella no le cuenta a nadie.'
  },
  'gravebound-colossus': { name: 'Coloso de las Tumbas', flavor: 'Mil tumbas, un solo cuerpo.' },
  'gravekeeper-of-eras': {
    name: 'Sepulturero de las Eras',
    text: 'Al entrar: un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'En la Grieta nadie queda enterrado.'
  },
  'grawl-the-dire-wolf': {
    name: 'Grawl, el Lobo Huargo',
    text: 'Al atacar: tu héroe se cura 3.',
    flavor: 'Era el más chico de la manada. Después se comió a la manada.'
  },
  'great-foundry': {
    name: 'La Gran Fundición',
    text: 'Al empezar cada fase, si tenés menos de 3 aliados, invocá un Dron de Engranajes.',
    flavor: 'Día y noche fabrica más de todo.'
  },
  'greatsword-of-dawn': { name: 'Mandoble del Alba', flavor: 'Brilla más con la primera luz de la batalla.' },
  'hall-of-echoes': {
    name: 'Salón de los Ecos',
    text: 'Al final de cada fase, robá una carta si tenés 3 o menos en la mano.',
    flavor: 'Cada palabra dicha alguna vez todavía resuena acá.'
  },
  'hall-of-mirrors': {
    name: 'Salón de los Espejos',
    text: 'Al final de cada fase, hacé 3 de daño a un aliado enemigo al azar. Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'Cada reflejo es un hechizo esperando su turno.'
  },
  'halo-of-dawn': {
    name: 'Halo del Alba',
    text: 'Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'Cada mañana brilla un poco más.'
  },
  'hammer-of-the-ages': {
    name: 'Martillo de las Eras',
    text: 'Al jugarla: hacé 6 de daño a cada aliado enemigo y tu héroe gana 10 de armadura.',
    flavor: 'Cada era forjó una parte.'
  },
  headshot: {
    name: 'Disparo a la Cabeza',
    text: 'Destruí un aliado enemigo. Lenta.',
    flavor: 'Alcanza con una flecha.'
  },
  'healing-draught': {
    name: 'Brebaje Curativo',
    text: 'Tu héroe se cura 15.',
    flavor: 'Tiene gusto a frutillas del año 3000.'
  },
  'healing-herbs': {
    name: 'Hierbas Curativas',
    text: 'Tu héroe se cura 8 y tus aliados se curan 3.',
    flavor: 'Masticá, tragá y tratá de no poner cara.'
  },
  'healing-spring': {
    name: 'Manantial Sanador',
    text: 'Artefacto. Al empezar cada fase, tus aliados se curan 3.',
    flavor: 'El agua recuerda cuando estabas entero.'
  },
  'herald-of-the-end': {
    name: 'Heraldo del Fin',
    text: 'Al entrar: hacé 6 de daño a cada aliado, también a los tuyos y robá una carta.',
    flavor: 'No trae el fin. Lo anuncia.'
  },
  'herd-mother': {
    name: 'Madre de la Manada',
    text: 'Cuando entra otro aliado tuyo, gana +4 de vida.',
    flavor: 'Todas las crías del valle le dicen mamá.',
    ability: { name: 'Llamar a la Manada', text: 'Invocá una Cría de Dinosaurio.' }
  },
  'hold-the-line': {
    name: 'Mantener la Línea',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, aturdilo por dos fases y tus aliados ganan +8 de vida.',
    flavor: 'La línea aguanta. La línea siempre aguanta.'
  },
  'hollow-astronomer': {
    name: 'El Astrónomo Hueco',
    text: 'Colapsar Estrella (3): hacé 10 de daño a un slot enemigo. Al empezar cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Trazó el mapa de cada estrella, y después empezó a apagarlas.',
    ability: { name: 'Colapsar Estrella', text: 'Hacé 10 de daño a un slot enemigo.' }
  },
  'hollow-cultist': {
    name: 'Cultista Hueco',
    text: 'Al entrar: destruí tu otro aliado más débil: si lo hacés, gana +4 de ataque y +6 de vida.',
    flavor: 'Le dio su nombre al vacío. El vacío le dio dientes.'
  },
  'hollow-harp': {
    name: 'El Arpa Hueca',
    text: 'Al empezar cada fase, si tu descarte tiene 6 cartas o más, tus aliados se curan 3.',
    flavor: 'Sus cuerdas son el último aliento de los muertos.'
  },
  'holo-crossbow': { name: 'Ballesta Holográfica', flavor: 'Las flechas son de luz. Los agujeros son reales.' },
  'holo-decoy': { name: 'Señuelo Holográfico', flavor: 'Pegale todo lo que quieras. No está ahí de verdad.' },
  'holy-smite': {
    name: 'Castigo Sagrado',
    text: 'Hacé 8 de daño a un slot enemigo y tu héroe se cura 4.',
    flavor: 'La luz cura. La luz también quema.'
  },
  'holy-water': {
    name: 'Agua Bendita',
    text: 'Tu héroe se cura 8 y tus aliados se curan 4.',
    flavor: 'Salpicá con generosidad.'
  },
  'hoplite-sentry': { name: 'Hoplita Centinela', flavor: 'Detrás de su escudo duerme una ciudad entera.' },
  'hour-wraith': { name: 'Espectro de las Horas', flavor: 'Hecho de minutos que nadie usó.' },
  'hourglass-dagger': { name: 'Daga del Reloj de Arena', flavor: 'Un corte, y la arena empieza a caer.' },
  'hourglass-plating': {
    name: 'Placas de Reloj de Arena',
    text: 'Adjuntalas a un aliado tuyo: cada daño que recibe se reduce en 2.',
    flavor: 'Cada golpe llega un poco tarde, y un poco más débil.'
  },
  'hourglass-sentry': { name: 'Centinela del Reloj de Arena', flavor: 'Cuenta cada segundo que pasás frente a él.' },
  'hourglass-warden': { name: 'Guardiana del Reloj', flavor: 'El tiempo se detiene en su escudo.' },
  'hover-biker': { name: 'Motociclista Flotante', flavor: 'Sin ruedas, sin frenos, sin arrepentimientos.' },
  'hunt-of-the-goddess': {
    name: 'Cacería de la Diosa',
    text: 'Hacé 8 de daño a un aliado enemigo al azar y hacé 8 de daño a un aliado enemigo al azar.',
    flavor: 'Corré, si creés que sirve.'
  },
  'hunters-mark': {
    name: 'Marca del Cazador',
    text: 'Hacé 4 de daño a un aliado enemigo y robá una carta. Instantánea.',
    flavor: 'Una vez marcado, no hay dónde esconderse.'
  },
  'hunting-bow': { name: 'Arco de Caza', flavor: 'Hueso, tendón y paciencia.' },
  'hunting-horn': {
    name: 'Cuerno de Caza',
    text: 'Tus aliados ganan +3 de ataque. Rápido.',
    flavor: 'Empieza la cacería.'
  },
  'hunting-party': {
    name: 'Partida de Caza',
    text: 'Hacé 4 de daño a un aliado enemigo y robá una carta.',
    flavor: 'Esta noche comen todos.'
  },
  'ice-lance': {
    name: 'Lanza de Hielo',
    text: 'Hacé 8 de daño a un aliado enemigo y aturdilo.',
    flavor: 'Fría, filosa y al grano.'
  },
  'ilyra-starweaver': {
    name: 'Ilyra Starweaver',
    text: 'Rayo Arcano (2): hacé 12 de daño a un slot enemigo.',
    flavor: 'Lee el futuro en las constelaciones, y después lo reescribe.',
    ability: { name: 'Rayo Arcano', text: 'Hacé 12 de daño a un slot enemigo.' }
  },
  'imperator-solis': {
    name: 'Imperator Solis',
    text: 'Al empezar cada fase, tus aliados ganan +2 de ataque y +2 de vida.',
    flavor: 'Bajo su sol, ninguna legión se pone.'
  },
  'information-broker': {
    name: 'Traficante de Información',
    text: 'Al empezar cada fase, robá una carta.',
    flavor: 'Todos tienen un precio. Ella los conoce todos.'
  },
  'inner-fire': {
    name: 'Fuego Interior',
    text: 'Un aliado tuyo gana +6 de ataque esta fase y se cura 6. Rápida.',
    flavor: 'La llama siempre estuvo ahí.'
  },
  'inventor-of-hours': {
    name: 'Inventor de Horas',
    text: 'Al empezar cada fase, ganá 1 de Cronos.',
    flavor: 'Inventó la hora veinticinco. Nadie más la encuentra.',
    ability: { name: 'Resorte del Tiempo', text: 'Robá 2 cartas.' }
  },
  'iron-buckler': {
    name: 'Rodela de Hierro',
    text: 'Adjuntala a un aliado tuyo: tiene +6 de vida.',
    flavor: 'Chica, redonda y testaruda.'
  },
  'iron-gladius': { name: 'Gladius de Hierro', flavor: 'Corto, filoso y muy, muy confiable.' },
  'iron-manacles': {
    name: 'Esposas de Hierro',
    text: 'Adjuntalas a un aliado enemigo: no puede atacar.',
    flavor: 'Todavía te puede mirar feo.'
  },
  'iron-rations': {
    name: 'Raciones de Hierro',
    text: 'Un aliado tuyo gana +10 de vida.',
    flavor: 'Saben a hierro. Funcionan como hierro.'
  },
  'iron-resolve': {
    name: 'Determinación de Hierro',
    text: 'Tu héroe gana 12 de armadura y ganá 1 de Cronos. Instantánea.',
    flavor: 'Los remaches no se doblan.'
  },
  'iron-walker': { name: 'Caminante de Hierro', flavor: 'Lento, ruidoso y absolutamente imparable.' },
  'iron-will': {
    name: 'Voluntad de Hierro',
    text: 'Tu héroe gana 12 de armadura y tu héroe se cura 10.',
    flavor: 'Doblarse, nunca romperse.'
  },
  'ironsteam-exosuit': {
    name: 'Exotraje Ironsteam',
    text: 'Al empezar cada fase, ganá 1 de Cronos.',
    flavor: 'Doce calderas, ochenta engranajes y un hombre muy enojado.'
  },
  'jammer-unit': {
    name: 'Unidad Bloqueadora',
    text: 'Al entrar: aturdí a un aliado enemigo al azar.',
    flavor: 'Todas las frecuencias: estática.'
  },
  'jungle-druid': {
    name: 'Druida de la Jungla',
    text: 'Al empezar cada fase, tus aliados se curan 4 y tus aliados ganan +1 de ataque.',
    flavor: 'Les habla a los árboles. Ellos contestan creciendo.',
    ability: { name: 'Rejuvenecer', text: 'Un aliado tuyo se cura 10.' }
  },
  'kaze-the-cyber-ronin': {
    name: 'Kaze, el Ronin Cibernético',
    flavor: 'Su viejo maestro. Su nuevo rival. Su único amigo.'
  },
  'kazhul-mother-of-ash': {
    name: 'Kazhul, Madre de la Ceniza',
    text: 'Aliento de Ceniza (4): hacé 5 de daño a cada aliado enemigo. Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'Duerme bajo el volcán. Nadie la quiere despierta.',
    ability: { name: 'Aliento de Ceniza', text: 'Hacé 5 de daño a cada aliado enemigo.' }
  },
  'keeper-of-moments': {
    name: 'Guardiana de los Momentos',
    text: 'Al empezar cada fase, tu héroe se cura 6 y gana 4 de armadura.',
    flavor: 'Guarda los mejores momentos, y los protege.'
  },
  'kill-command': {
    name: 'Orden de Matar',
    text: 'Hacé 12 de daño a un aliado enemigo y un aliado tuyo gana +4 de ataque esta fase.',
    flavor: 'Atacá.'
  },
  'knights-plate': { name: 'Placas de Caballero', flavor: 'Hace mucho ruido. Sobrevive mucho más.' },
  'kora-wildfang': {
    name: 'Kora Wildfang',
    text: 'Disparo Rápido (1): hacé 5 de daño a un slot enemigo. Rápida.',
    flavor: 'La jungla le enseñó una regla: disparar primero.',
    ability: { name: 'Disparo Rápido', text: 'Hacé 5 de daño a un slot enemigo.' }
  },
  'labyrinth-guardian': { name: 'Guardián del Laberinto', flavor: 'Cada pasillo tiene uno.' },
  'lantern-of-dawn': {
    name: 'Linterna del Alba',
    text: 'Al empezar cada fase, tu héroe se cura 2.',
    flavor: 'Nunca se apagó.'
  },
  'laser-grid': {
    name: 'Rejilla Láser',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y hacele 5 de daño.',
    flavor: 'Cuidado con las líneas rojas.'
  },
  'last-oath': {
    name: 'Último Juramento',
    text: 'Adjuntalo a un aliado tuyo: tiene +2 de ataque. Cuando muere, robás 2 cartas.',
    flavor: 'Juralo, y tu muerte no será en vano.'
  },
  'last-stand': {
    name: 'Última Resistencia',
    text: 'Tu héroe gana 10 de armadura. Si tu héroe tiene menos de la mitad de su vida, tu héroe gana 10 de armadura y robá una carta. Instantánea.',
    flavor: 'Hoy no.'
  },
  'leather-jerkin': { name: 'Jubón de Cuero', flavor: 'Silencioso, liviano y cómodo.' },
  'leeching-mark': {
    name: 'Marca Sanguijuela',
    text: 'Adjuntala a un aliado enemigo: al empezar cada fase, pierde 3 de vida y tu héroe se cura 3.',
    flavor: 'Su fuerza se vuelve tuya, gota a gota.'
  },
  'legate-of-the-eagle': {
    name: 'Legado del Águila',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque. Si tenés 3 aliados de Bronce o más, robá 2 cartas.',
    flavor: 'Adonde va el águila, van las legiones.'
  },
  'legate-varro': {
    name: 'Legado Varro',
    text: 'Fortificar (2): tu héroe gana 10 de armadura. Instantánea.',
    flavor: 'Aguantó la línea en más siglos de los que puede contar.',
    ability: { name: 'Fortificar', text: 'Tu héroe gana 10 de armadura.' }
  },
  'legion-quartermaster': {
    name: 'Intendente de la Legión',
    text: 'Al entrar: robá una carta por cada otro aliado Bronce que tengas (hasta 2).',
    flavor: 'Cada escudo contado, cada lanza en su lugar.'
  },
  'legion-rations': {
    name: 'Raciones de la Legión',
    text: 'Tus aliados se curan 6.',
    flavor: 'Pan, queso y un trago de vino. Alcanza para conquistar la Galia.'
  },
  'legion-slinger': { name: 'Hondero de la Legión', flavor: 'Una piedra de lejos igual duele.' },
  'ley-line-conduit': {
    name: 'Conducto de Líneas Ley',
    text: 'Artefacto. Al empezar cada fase, tu héroe gana 1 de energía más.',
    flavor: 'Aprovechá el río de poder bajo el mundo.'
  },
  'lich-of-the-last-hour': {
    name: 'Liche de la Última Hora',
    flavor: 'A la última hora, los muertos se levantan por él.',
    ability: { name: 'Drenar Vida', text: 'Hacé 6 de daño al héroe enemigo y tu héroe se cura 6.' }
  },
  lightbringer: { name: 'Portadora de Luz', flavor: 'Corta la oscuridad misma.' },
  'lightning-bolt': {
    name: 'Relámpago',
    text: 'Hacé 12 de daño a un slot enemigo. Rápida.',
    flavor: 'Desde el cielo, con cariño.'
  },
  'lightning-dash': {
    name: 'Carrera Relámpago',
    text: 'Hacé 8 de daño a un aliado enemigo y tu héroe gana 4 de armadura. Instantánea.',
    flavor: 'Parpadeaste. Ya está detrás tuyo.'
  },
  longbow: { name: 'Arco Largo', flavor: 'Dispara más lejos de lo que ve el ojo.' },
  'lost-squire': { name: 'Escudero Perdido', flavor: 'Lo mandaron a buscar agua. Hace seis siglos.' },
  'lullaby-of-the-lost': {
    name: 'Canción de Cuna de los Perdidos',
    text: 'Aturdí a un aliado enemigo al azar y tu héroe se cura 5.',
    flavor: 'Dormí. Al final, todos duermen.'
  },
  'lumen-the-star-owl': {
    name: 'Lumen, la Lechuza Estelar',
    text: 'Al entrar: robá una carta. Al empezar cada fase, hacé 3 de daño a un aliado enemigo al azar.',
    flavor: 'Ilyra la encontró adentro de una estrella fugaz.'
  },
  'magic-bolt': {
    name: 'Saeta Mágica',
    text: 'Hacé 7 de daño a un slot enemigo. Rápida.',
    flavor: 'El primer hechizo que aprende un aprendiz. Y el último que ven algunos.'
  },
  'malachar-the-unmade': {
    name: 'Malachar el Deshecho',
    text: 'Deshacer (2): hacé 8 de daño a un slot enemigo. Si tu descarte tiene 6 cartas o más, tu héroe se cura 4. Al empezar cada fase, si tu descarte tiene 8 cartas o más, hacé 2 de daño al héroe enemigo.',
    flavor: 'Se deshizo a sí mismo para ver qué hay más allá del tiempo.',
    ability: {
      name: 'Deshacer',
      text: 'Hacé 8 de daño a un slot enemigo. Si tu descarte tiene 6 cartas o más, tu héroe se cura 4.'
    }
  },
  'mammoth-skull-staff': {
    name: 'Bastón de Cráneo de Mamut',
    text: 'Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'El mamut todavía recuerda el hielo.'
  },
  'mana-crystal': { name: 'Cristal de Maná', text: 'Ganá 1 de Cronos.', flavor: 'Zumba cuando está lleno.' },
  'mana-potion': {
    name: 'Poción de Maná',
    text: 'Ganá 2 de Cronos.',
    flavor: 'Azul, burbujeante y llena de posibilidades.'
  },
  'mana-shield': { name: 'Escudo de Maná', flavor: 'Una pared de pensamiento.' },
  'mantle-of-the-hunt': {
    name: 'Manto de la Cacería',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'La presa siempre lo siente primero.'
  },
  'marching-legion': { name: 'Legión en Marcha', flavor: 'Los escuchás una hora antes de verlos.' },
  'mark-of-the-hunted': {
    name: 'Marca del Cazado',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.',
    flavor: 'Una vez marcado, no hay dónde esconderse.'
  },
  'mass-revival': {
    name: 'Resurrección en Masa',
    text: 'Un aliado al azar de tu descarte vuelve al juego, un aliado al azar de tu descarte vuelve al juego y tus aliados se curan 6. Lenta.',
    flavor: 'Levántense, todos.'
  },
  'master-artificer': {
    name: 'Maestro Artífice',
    text: 'Al entrar: invocá un Dron de Engranajes y ganá 1 de Cronos.',
    flavor: 'Dale un resorte y una moneda y te construye una ciudad.',
    ability: { name: 'Ajuste Fino', text: 'Un aliado tuyo gana +2 de ataque y +4 de vida.' }
  },
  'maw-of-xulthar': { name: "Fauces de Xul'thar", flavor: 'Solo una de sus bocas.' },
  'mech-trooper': { name: 'Soldado Mecha', flavor: 'Equipo estándar. Exceso estándar.' },
  'mechanical-heart': {
    name: 'Corazón Mecánico',
    text: 'Un aliado tuyo gana +8 de ataque y +20 de vida y ganá 2 de Cronos.',
    flavor: 'Late sesenta veces por minuto, para siempre.'
  },
  'mechanical-knight': { name: 'Caballero Mecánico', flavor: 'Pulido, aceitado y leal a quien tenga la llave.' },
  'megacity-titan': {
    name: 'Titán de la Megaciudad',
    text: 'Al entrar: hacé 10 de daño a cada aliado enemigo y robá 2 cartas.',
    flavor: 'La ciudad lo construyó para protegerse. Se equivocó.'
  },
  mend: { name: 'Sanar', text: 'Un aliado tuyo se cura 12. Rápida.', flavor: 'Un toque de luz, un suspiro de alivio.' },
  'mend-the-timeline': {
    name: 'Remendar la Línea',
    text: 'Tu héroe se cura 12 y tus aliados se curan 6.',
    flavor: 'Puntada a puntada, el pasado sana.'
  },
  meteor: {
    name: 'Meteoro',
    text: 'Hacé 26 de daño a un slot enemigo y hacé 4 de daño a cada aliado enemigo. Lenta.',
    flavor: 'Mirá para arriba. Después corré.'
  },
  'mighty-blow': {
    name: 'Golpe Poderoso',
    text: 'Hacé 20 de daño a un slot enemigo y tu héroe gana 6 de armadura.',
    flavor: 'Puso toda una carrera en ese golpe.'
  },
  'mind-freeze': {
    name: 'Mente Congelada',
    text: 'Aturdí a un aliado enemigo y hacele 6 de daño.',
    flavor: 'Pensar está sobrevalorado.'
  },
  miracle: {
    name: 'Milagro',
    text: 'Tu héroe se cura 30, un aliado al azar de tu descarte vuelve al juego y robá 2 cartas. Lenta.',
    flavor: 'Nadie lo puede explicar. Nadie lo necesita.'
  },
  'mirror-mage': {
    name: 'Mago del Espejo',
    text: 'Al entrar: hacé 6 de daño a un aliado enemigo al azar.',
    flavor: 'Rompé el espejo y aparecen dos.'
  },
  'mirror-mantle': {
    name: 'Manto de Espejos',
    text: 'Al empezar cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Lo que tirás vuelve.'
  },
  'mirror-ward': {
    name: 'Guarda del Espejo',
    text: 'Cuando un aliado enemigo ataca: cancelás el ataque y le hacés 8 de daño.',
    flavor: 'Se pega a sí mismo y nunca sabe por qué.'
  },
  'moonlight-enchantress': {
    name: 'Encantadora de la Luna',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Bajo la luna, cada deseo tiene un precio.'
  },
  'morgrath-lich-abbot': {
    name: 'Morgrath, el Abad Liche',
    text: 'Rayo Impío (3): hacé 12 de daño a un slot enemigo y tu héroe se cura 6. Al empezar cada fase, hacé 5 de daño a un aliado enemigo al azar.',
    flavor: 'Rezó por la vida eterna. Algo le contestó.',
    ability: { name: 'Rayo Impío', text: 'Hacé 12 de daño a un slot enemigo y tu héroe se cura 6.' }
  },
  'morning-prayer': {
    name: 'Plegaria Matinal',
    text: 'Tu héroe se cura 6 y robá una carta.',
    flavor: 'La reza todas las mañanas hace trescientos años.'
  },
  'mossback-tortoise': {
    name: 'Tortuga Musgosa',
    text: 'Al final de cada fase, tus aliados se curan 2.',
    flavor: 'Sobre su caparazón crece un bosquecito.'
  },
  'mother-of-beasts': {
    name: 'Madre de las Bestias',
    text: 'Al entrar: invocá una Manada de Raptores y invocá un Jabalí Espinoso.',
    flavor: 'Todas las bestias de la jungla nacieron de su canto.'
  },
  'mother-of-shadows': {
    name: 'Madre de las Sombras',
    text: 'Al morir: invocá un Engendro del Vacío y invocá un Engendro del Vacío. Al empezar cada fase, si tu descarte tiene 8 cartas o más, invocá un Engendro del Vacío.',
    flavor: 'Toda oscuridad viene de algún lado. Viene de ella.'
  },
  'multi-shot': {
    name: 'Disparo Múltiple',
    text: 'Hacé 6 de daño a un aliado enemigo al azar y hacé 6 de daño a un aliado enemigo al azar. Rápida.',
    flavor: '¿Para qué elegir?'
  },
  'murmillo-champion': { name: 'Campeón Murmillo', flavor: 'Pelea dos veces antes de que el público respire.' },
  'necro-scholar': {
    name: 'Erudito Nigromante',
    text: 'Al entrar: un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'La muerte es solo un capítulo. Él se lo saltea.',
    ability: { name: 'Alzar a los Muertos', text: 'Un aliado al azar de tu descarte vuelve al juego.' }
  },
  'neon-battery': {
    name: 'Batería de Neón',
    text: 'Tu héroe gana 1 de energía. Instantánea.',
    flavor: 'Carga completa en un latido.'
  },
  'neon-blade': { name: 'Hoja de Neón', flavor: 'Cuanto más rápido el corte, más brilla.' },
  'neon-dancer': { name: 'Bailarina de Neón', flavor: 'Esquiva balas al ritmo de la música.' },
  'neon-district': {
    name: 'Distrito Neón',
    text: 'Al empezar cada fase, robá una carta. Al final de cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Nunca duerme. Nunca olvida.'
  },
  'nest-keeper': {
    name: 'Guardiana del Nido',
    text: 'Al empezar cada fase, si tenés 3 aliados o más, robá una carta.',
    flavor: 'Un nido lleno es un nido feliz.'
  },
  'net-fighter': {
    name: 'Reciario',
    text: 'Al entrar: aturdí a un aliado enemigo al azar.',
    flavor: 'Primero la red. Después el tridente. Después el aplauso.'
  },
  netrunner: {
    name: 'Netrunner',
    text: 'Al entrar: robá una carta y hacé 3 de daño al héroe enemigo.',
    flavor: 'Tu firewall es tierno.',
    ability: { name: 'Hackeo', text: 'Aturdí a un aliado enemigo al azar.' }
  },
  'nightmare-steed': { name: 'Corcel de Pesadilla', flavor: 'Corre a base de gritos.' },
  'nightwire-net': {
    name: 'Red Nightwire',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, destruilo y robá una carta.',
    flavor: 'Invisible, irrompible, ineludible.'
  },
  'null-field': {
    name: 'Campo Nulo',
    text: 'Trampa: cuando el rival usa una habilidad, cancelala y el héroe enemigo pierde 2 de energía.',
    flavor: 'Acá, la magia simplemente se detiene.'
  },
  'nysa-goldbow': {
    name: 'Nysa Goldbow',
    text: 'Flecha Dorada (2): hacé 8 de daño a un slot enemigo. Cuando entra otro aliado tuyo, gana +1 de ataque.',
    flavor: 'Una vez cazó con los dioses. Ahora caza para ella.',
    ability: { name: 'Flecha Dorada', text: 'Hacé 8 de daño a un slot enemigo.' }
  },
  'nyx-hollowsong': {
    name: 'Nyx Hollowsong',
    text: 'Llamar a los Caídos (2): un aliado al azar de tu descarte vuelve al juego. Al final de cada fase, tu héroe se cura 2.',
    flavor: 'Su canto llega a los muertos. Siempre vuelven a escuchar.',
    ability: { name: 'Llamar a los Caídos', text: 'Un aliado al azar de tu descarte vuelve al juego.' }
  },
  'oak-scepter': { name: 'Cetro de Roble', text: 'Al jugarla: tu héroe se cura 4.', flavor: 'Cultivado, no forjado.' },
  oblivion: {
    name: 'Olvido',
    text: 'Destruí un aliado enemigo. Si tu descarte tiene 6 cartas o más, robá una carta. Lenta.',
    flavor: 'No murió. Simplemente nunca existió.'
  },
  'old-tusk': {
    name: 'Viejo Colmillo',
    text: 'Al entrar: tus aliados se curan 6.',
    flavor: 'Llevó a la tribu a través del hielo. Dos veces.'
  },
  'omnigear-prime': {
    name: 'Omnigear Prime',
    text: 'Línea de Montaje (3): tus aliados ganan +2 de ataque y +4 de vida. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'La máquina que construye máquinas decidió que ya no necesita constructores.',
    ability: { name: 'Línea de Montaje', text: 'Tus aliados ganan +2 de ataque y +4 de vida.' }
  },
  'omnigear-sentinel': { name: 'Centinela Omnigear', flavor: 'Perfecto. Idéntico. Infinito.' },
  'ooma-bonewhisper': {
    name: 'Ooma Bonewhisper',
    text: 'Crecimiento Ancestral (2): un aliado tuyo gana +2 de ataque y +3 de vida. Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'Los huesos de los ancestros hablan. Ella escucha.',
    ability: { name: 'Crecimiento Ancestral', text: 'Un aliado tuyo gana +2 de ataque y +3 de vida.' }
  },
  'open-market': {
    name: 'Mercado Abierto',
    text: 'Cada jugador roba 2 cartas.',
    flavor: 'Las puertas se abren para todos. Quién gana más depende de vos.'
  },
  'orbital-strike': {
    name: 'Ataque Orbital',
    text: 'Hacé 24 de daño a un slot enemigo. Rápida.',
    flavor: 'Mirá para arriba. Sonreí.'
  },
  overclock: {
    name: 'Sobrecarga',
    text: 'Un aliado tuyo gana +8 de ataque esta fase. Instantánea.',
    flavor: '¡Más rápido! ¡Más rápido! Uy, no.'
  },
  'overdrive-mech': { name: 'Mecha en Sobremarcha', flavor: 'Límites de seguridad desactivados.' },
  'overseer-kade': {
    name: 'Supervisor Kade',
    text: 'Bloqueo Total (3): aturdí a un aliado enemigo por dos fases. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Ve todas las cámaras de la megaciudad. Todas a la vez.',
    ability: { name: 'Bloqueo Total', text: 'Aturdí a un aliado enemigo por dos fases.' }
  },
  'owl-messenger': {
    name: 'Lechuza Mensajera',
    text: 'Al entrar: robá una carta.',
    flavor: 'Entrega las cartas que vas a escribir mañana.'
  },
  'pact-keeper': {
    name: 'Guardián del Pacto',
    text: 'Al entrar: destruí tu otro aliado más débil: si lo hacés, robá 2 cartas.',
    flavor: 'Firmá acá. Y acá. Y acá.'
  },
  'pact-of-hunger': {
    name: 'Pacto del Hambre',
    text: 'Tu héroe pierde 4 de vida. Robá 2 cartas.',
    flavor: 'El vacío te alimenta. Después se alimenta de vos.'
  },
  'paradox-loop': {
    name: 'Bucle Paradoja',
    text: 'Cuando un aliado enemigo ataca: cancelás el ataque, vuelve a la mano de su dueño y robás una carta.',
    flavor: 'Atacó. Atacará. Nunca lo hizo.'
  },
  'paradox-twin': {
    name: 'Gemelo Paradoja',
    text: 'Al morir: robá una carta y tu héroe se cura 8.',
    flavor: 'Eran dos. Siempre lo serán.'
  },
  'patched-leather': { name: 'Cuero Remendado', flavor: 'Cada parche, de un siglo distinto.' },
  'patchwork-golem': { name: 'Gólem de Retazos', flavor: 'Hecho con restos de cinco siglos distintos.' },
  'perpetual-engine': {
    name: 'Motor Perpetuo',
    text: 'Al empezar cada fase, ganá 1 de Cronos y robá una carta.',
    flavor: 'Nunca lo encendieron. Nunca va a parar.'
  },
  'phalanx-general': {
    name: 'General de la Falange',
    text: 'Cuando entra otro aliado tuyo, gana +6 de vida.',
    flavor: 'Una lanza es un palo. Mil son una fortaleza.',
    ability: { name: 'Muro de Escudos', text: 'Tu héroe gana 8 de armadura.' }
  },
  'phalanx-recruit': {
    name: 'Recluta de la Falange',
    text: 'Al entrar: los aliados de al lado ganan +4 de vida.',
    flavor: 'Hombro con hombro, incluso el primer día.'
  },
  'phantom-assassin': { name: 'Asesina Fantasma', flavor: 'Su camuflaje óptico es lo último que no vas a ver.' },
  'phase-cloak': {
    name: 'Capa de Fase',
    text: 'Adjuntala a un aliado tuyo: gana sigilo y ágil.',
    flavor: 'Ahora lo ves. Casi siempre, no.'
  },
  'phase-stalker': { name: 'Acechador de Fase', flavor: 'Ataca desde el instante entre dos instantes.' },
  'philosophers-hourglass': {
    name: 'Reloj del Filósofo',
    text: 'Ganás 4 de Cronos y robá una carta. Rápida.',
    flavor: 'Dalo vuelta y la hora es tuya.'
  },
  'phoenix-feather': {
    name: 'Pluma de Fénix',
    text: 'Adjuntala a un aliado tuyo: gana eco (la primera vez que muere, vuelve a tu mano).',
    flavor: 'Las cenizas son solo una pausa.'
  },
  'pila-volley': {
    name: 'Lluvia de Pilos',
    text: 'Cuando el rival invoca un aliado: hacele 8 de daño.',
    flavor: 'Primero se tira, después se pregunta.'
  },
  'piston-golem': {
    name: 'Gólem de Pistones',
    text: 'Al recibir daño: gana +2 de ataque.',
    flavor: 'Cada golpe le da un poco más de cuerda.'
  },
  'pit-trap': {
    name: 'Pozo Trampa',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y hacele 6 de daño.',
    flavor: 'Cuidado con las hojas.'
  },
  pitfall: {
    name: 'Foso',
    text: 'Cuando un aliado enemigo ataca: le hacés 14 de daño.',
    flavor: 'La trampa más vieja que hay, y todavía la mejor.'
  },
  'pixel-the-drone-fox': {
    name: 'Pixel, el Zorro Dron',
    text: 'Al entrar: robá una carta.',
    flavor: 'Mitad zorro, mitad dron, todo problemas.'
  },
  'plague-brand': {
    name: 'Marca de la Peste',
    text: 'Adjuntala a un aliado enemigo: al empezar cada fase, queda envenenado (2).',
    flavor: 'La enfermedad se esparce desde adentro.'
  },
  'plague-vial': {
    name: 'Frasco de Peste',
    text: 'Envenená a todos los aliados enemigos (2).',
    flavor: 'Rompelo y alejate. Rápido.'
  },
  'pocket-watch': { name: 'Reloj de Bolsillo', text: 'Ganá 1 de Cronos.', flavor: 'No da la hora. La presta.' },
  'poison-arrows': {
    name: 'Flechas Envenenadas',
    text: 'Hacé 2 de daño a un slot enemigo y envenenalo (3).',
    flavor: 'La flecha es el mensaje. El veneno, el final.'
  },
  'poisoned-crossbow': { name: 'Ballesta Envenenada', flavor: 'Alcanza con un rasguño.' },
  polymorph: {
    name: 'Polimorfia',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta.',
    flavor: 'Ahora es un sapo. Un sapo muy confundido.'
  },
  pounce: {
    name: 'Abalanzarse',
    text: 'Hacé 10 de daño a un aliado enemigo y tu héroe se cura 4. Rápida.',
    flavor: 'La jungla no espera. Kora tampoco.'
  },
  'praetorian-guard': { name: 'Guardia Pretoriana', flavor: 'Leal al trono, se siente quien se siente.' },
  'prayer-of-healing': {
    name: 'Plegaria de Curación',
    text: 'Tu héroe se cura 10 y tus aliados se curan 8.',
    flavor: 'Cada voz alzada, cada herida cerrada.'
  },
  'primal-grove': {
    name: 'Arboleda Primigenia',
    text: 'Al empezar cada fase, tus aliados se curan 4.',
    flavor: 'El bosque más viejo cura las heridas más viejas.'
  },
  'primal-rage': {
    name: 'Furia Primigenia',
    text: 'Un aliado tuyo gana +14 de ataque esta fase y gana +10 de vida. Instantánea.',
    flavor: 'Sangre vieja, rabia más vieja.'
  },
  'primal-roar': {
    name: 'Rugido Primigenio',
    text: 'Tus aliados ganan +7 de ataque esta fase. Rápida.',
    flavor: 'Todas las bestias a una legua lo escuchan, y obedecen.'
  },
  'primeval-titan': {
    name: 'El Titán Primigenio',
    text: 'Al empezar cada fase, tus aliados ganan +2 de ataque y +4 de vida y tu héroe se cura 5.',
    flavor: 'Antes de las eras, solo existía él.'
  },
  'pterodactyl-rider': {
    name: 'Jinete de Pterodáctilo',
    flavor: 'El primer piloto de la historia. También el primero en estrellarse.'
  },
  'pulse-sniper': { name: 'Francotiradora de Pulso', flavor: 'Apunta al futuro. Al tuyo.' },
  pyroblast: {
    name: 'Piroexplosión',
    text: 'Hacé 40 de daño a un slot enemigo. Lenta.',
    flavor: 'Tarda mucho en lanzarse. No tarda nada en terminar.'
  },
  pyromancer: {
    name: 'Piromante',
    text: 'Al entrar: hacé 8 de daño a un aliado enemigo al azar.',
    flavor: 'Le pidieron que prendiera la chimenea. Prendió el castillo.'
  },
  'quantum-chip': {
    name: 'Chip Cuántico',
    text: 'Robá 3 cartas. Rápido.',
    flavor: 'Tiene todas las respuestas. Algunas al mismo tiempo.'
  },
  'queen-static': {
    name: 'Reina Estática',
    text: 'Retroalimentación (2): hacé 8 de daño a un slot enemigo. Rápida. Al final de cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Vive en el ruido entre los canales.',
    ability: { name: 'Retroalimentación', text: 'Hacé 8 de daño a un slot enemigo.' }
  },
  'quick-hack': {
    name: 'Hackeo Rápido',
    text: 'Hacé 6 de daño a un aliado enemigo y robá una carta. Instantánea.',
    flavor: 'Tres teclas. Listo.'
  },
  quicken: {
    name: 'Acelerar',
    text: 'Un aliado tuyo gana +8 de ataque esta fase. Instantánea.',
    flavor: 'Más rápido que el instante.'
  },
  'quiver-of-plenty': {
    name: 'Carcaj Infinito',
    text: 'Robá 2 cartas. Rápido.',
    flavor: 'De alguna forma, siempre queda una flecha más.'
  },
  radiance: {
    name: 'Resplandor',
    text: 'Tu héroe se cura 15, tus aliados se curan 10 y tus aliados ganan +2 de ataque.',
    flavor: 'Por un momento, todas las eras brillan.'
  },
  'raise-the-dead': {
    name: 'Levantar a los Muertos',
    text: 'Un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Arriba. A trabajar.'
  },
  'rally-the-cohort': {
    name: 'Reunir la Cohorte',
    text: 'Tus aliados ganan +2 de ataque y +4 de vida.',
    flavor: 'Suena el cuerno. Todos los escudos giran.'
  },
  rampage: {
    name: 'Arrasar',
    text: 'Hacé 10 de daño a cada aliado enemigo y tu héroe gana 10 de armadura. Lenta.',
    flavor: 'No paró hasta que el campo quedó vacío.'
  },
  'raptor-alpha': {
    name: 'Raptor Alfa',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque.',
    flavor: 'Un llamado y viene corriendo toda la manada.'
  },
  'raptor-pack': { name: 'Manada de Raptores', flavor: 'Nunca ves uno solo.' },
  'raptor-scout': {
    name: 'Raptor Explorador',
    text: 'Al morir: robá una carta.',
    flavor: 'Siempre vuelve con noticias, aun cuando no vuelve.'
  },
  'recruiting-tent': {
    name: 'Carpa de Reclutamiento',
    text: 'Artefacto. Cada aliado tuyo que entra tiene +4 de vida.',
    flavor: 'Firmá acá, agarrá un casco, marchá.'
  },
  'regrowth-moss': {
    name: 'Musgo Regenerador',
    text: 'Adjuntalo a un aliado tuyo: al empezar cada fase, se cura 5.',
    flavor: 'Crece sobre las heridas, no sobre las piedras.'
  },
  'relic-of-the-saints': {
    name: 'Reliquia de los Santos',
    text: 'Un aliado al azar de tu descarte vuelve al juego y robá una carta.',
    flavor: 'Todavía recuerda las manos que la sostuvieron.'
  },
  'repair-kit': {
    name: 'Kit de Reparación',
    text: 'Tu héroe gana 12 de armadura.',
    flavor: 'Martillo, remaches y mucha esperanza.'
  },
  requiem: {
    name: 'Réquiem',
    text: 'Un aliado al azar de tu descarte vuelve al juego y tus aliados se curan 6.',
    flavor: 'Por los que cayeron. Y los que van a caer.'
  },
  resurrection: {
    name: 'Resurrección',
    text: 'Un aliado al azar de tu descarte vuelve al juego y tu héroe se cura 5.',
    flavor: 'Todavía no. Todavía no terminaste.'
  },
  rewind: { name: 'Rebobinar', text: 'Devolvé un aliado enemigo a la mano de su dueño.', flavor: 'Probemos de nuevo.' },
  'rewind-the-gears': {
    name: 'Rebobinar los Engranajes',
    text: 'Ganá 2 de Cronos y robá una carta. Rápida.',
    flavor: 'Una vuelta a la izquierda te devuelve un minuto.'
  },
  'rex-the-unbroken': {
    name: 'Rex el Indomable',
    text: 'Al atacar: gana +2 de ataque y +2 de vida.',
    flavor: 'Los reyes vienen y van. Rex se queda.'
  },
  'rift-behemoth': { name: 'Behemot de la Grieta', flavor: 'Cuando camina, tiemblan los siglos.' },
  'rift-bomb': {
    name: 'Bomba de la Grieta',
    text: 'Hacé 10 de daño a un aliado enemigo.',
    flavor: 'Manejala con cuidado. Y de lejos.'
  },
  'rift-collapse': {
    name: 'Colapso de la Grieta',
    text: 'Cuando un aliado enemigo ataca: lo destruís.',
    flavor: 'La Grieta se cierra y se lleva algo con ella.'
  },
  'rift-dragonling': { name: 'Dragoncito de la Grieta', flavor: 'Alas chicas, carácter enorme.' },
  'rift-grenade': {
    name: 'Granada de la Grieta',
    text: 'Hacé 12 de daño a un aliado enemigo y 6 a los aliados de al lado.',
    flavor: 'Sacá el seguro. Retrocedé unos siglos.'
  },
  'rift-guardian': { name: 'Guardián de la Grieta', flavor: 'No pasa nada. Ni siquiera el tiempo.' },
  'rift-hound': { name: 'Sabueso de la Grieta', flavor: 'Huele el miedo a través de los siglos.' },
  'rift-leech': { name: 'Sanguijuela de la Grieta', flavor: 'Se alimenta de segundos robados.' },
  'rift-mail': { name: 'Malla de la Grieta', flavor: 'Los eslabones titilan entre el ahora y el antes.' },
  'rift-market': {
    name: 'Mercado de la Grieta',
    text: 'Al empezar cada fase, ganás 1 de Cronos.',
    flavor: 'Todo está a la venta. Sobre todo el tiempo.'
  },
  'rift-medic': {
    name: 'Médica de la Grieta',
    text: 'Al final de cada fase, tus aliados se curan 4.',
    flavor: 'Cura heridas que todavía no pasaron.'
  },
  'rift-moth': { name: 'Polilla de la Grieta', flavor: 'La atrae la luz de las grietas abiertas.' },
  'rift-scavenger': {
    name: 'Carroñero de la Grieta',
    text: 'Al morir: robá una carta.',
    flavor: 'La basura de una era es el tesoro de otra.'
  },
  'rift-snare': {
    name: 'Lazo de la Grieta',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y aturdilo.',
    flavor: 'Un bolsillito de tiempo congelado, esperando.'
  },
  'riot-enforcer': { name: 'Antidisturbios', flavor: 'Dispérsense. Ya.' },
  'rivet-hound': { name: 'Sabueso de Remaches', flavor: '¡Buscá! ¡No, el brazo no!' },
  'robe-of-stars': {
    name: 'Túnica Estelar',
    text: 'Al empezar cada fase, ganá 1 de Cronos.',
    flavor: 'Vestí la noche. Mandá en el día.'
  },
  'rotting-giant': { name: 'Gigante Putrefacto', flavor: 'El olor aguanta la línea mejor que el escudo.' },
  'rune-golem': { name: 'Gólem Rúnico', flavor: 'Cada runa de su cuerpo es una orden que nunca va a olvidar.' },
  'rune-sprite': { name: 'Duende Rúnico', flavor: 'Escribe su nombre en el aire y después lo borra.' },
  runeblade: {
    name: 'Hoja Rúnica',
    text: 'Al jugarla: robá una carta.',
    flavor: 'Mitad espada, mitad libro de hechizos.'
  },
  'rusted-shackles': {
    name: 'Grilletes Oxidados',
    text: 'Adjuntalos a un aliado enemigo: tiene -6 de ataque.',
    flavor: 'Las cadenas viejas igual muerden.'
  },
  'rusty-sword': { name: 'Espada Oxidada', flavor: 'Vieja, mellada y todavía bastante filosa.' },
  'ryn-voltblade': {
    name: 'Ryn Voltblade',
    text: 'Sobrecarga (1): un aliado tuyo gana +8 de ataque esta fase. Instantánea. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'La hoja más rápida de la megaciudad.',
    ability: { name: 'Sobrecarga', text: 'Un aliado tuyo gana +8 de ataque esta fase.' }
  },
  'sabertooth-stalker': { name: 'Acechador Dientes de Sable', flavor: 'El pasto se mueve. Después ya es tarde.' },
  'sanctum-of-hours': {
    name: 'Santuario de las Horas',
    text: 'Al empezar cada fase, tu héroe se cura 5 y tus aliados se curan 5.',
    flavor: 'Acá cada herida tiene todo el tiempo del mundo para sanar.'
  },
  'sand-wraith': { name: 'Espectro de Arena', flavor: 'Nunca lo ves venir. Solo escuchás la arena.' },
  'scent-of-prey': {
    name: 'Olor a Presa',
    text: 'Robá una carta. Si tenés un aliado Primal, robá 2.',
    flavor: 'La manada siempre sabe adónde ir.'
  },
  'scepter-of-storms': { name: 'Cetro de las Tormentas', flavor: 'Zumba antes del trueno.' },
  'scepter-of-unmaking': { name: 'Cetro del Deshacer', flavor: 'Termina lo que toca.' },
  'scholars-lens': {
    name: 'Lente del Erudito',
    text: 'Artefacto con 3 usos. Al empezar cada fase, robás una carta.',
    flavor: 'Lee lo que todavía no se escribió.'
  },
  'scroll-of-wisdom': {
    name: 'Pergamino de Sabiduría',
    text: 'Robá 2 cartas.',
    flavor: 'Leelo dos veces. La segunda dice otra cosa.'
  },
  'scry-the-stars': {
    name: 'Leer las Estrellas',
    text: 'Robá una carta. Tu héroe gana 1 de energía.',
    flavor: 'Las constelaciones nunca mienten. Solo hablan despacio.'
  },
  'searing-brand': {
    name: 'Marca Abrasadora',
    text: 'Prendé fuego un slot enemigo: pierde 3 de vida al empezar cada una de las próximas 3 fases.',
    flavor: 'La marca se borra. El dolor, no tan pronto.'
  },
  'security-drone': { name: 'Dron de Seguridad', flavor: 'Por favor, quedate quieto mientras te escaneamos.' },
  'senator-of-coin': {
    name: 'Senador de las Monedas',
    text: 'Al entrar: robá una carta y ganá 1 de Cronos.',
    flavor: 'Cada voto tiene un precio. Cada precio tiene un voto.'
  },
  'server-farm': {
    name: 'Granja de Servidores',
    text: 'Al empezar cada fase, robá una carta y ganá 1 de Cronos.',
    flavor: 'Cada byte de cada era, guardado y zumbando.'
  },
  'shade-lurker': { name: 'Sombra Acechante', flavor: 'Cada sombra del vacío tiene a alguien adentro.' },
  'shaman-of-the-tribe': {
    name: 'Chamán de la Tribu',
    text: 'Al final de cada fase, tu héroe se cura 2.',
    flavor: 'Sus cantos son más viejos que las palabras.'
  },
  'sharpening-stone': {
    name: 'Piedra de Afilar',
    text: 'Un aliado tuyo gana +4 de ataque.',
    flavor: 'Todo filo puede ser más filoso.'
  },
  'shatter-time': {
    name: 'Romper el Tiempo',
    text: 'Destruí un aliado enemigo. Lenta.',
    flavor: 'Hay momentos que es mejor romper.'
  },
  'shield-bash': {
    name: 'Golpe de Escudo',
    text: 'Hacé 5 de daño a un aliado enemigo y tu héroe gana 4 de armadura. Rápida.',
    flavor: 'La mejor defensa es un escudo en la cara.'
  },
  'shield-wall': {
    name: 'Muro de Escudos',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque y tu héroe gana 8 de armadura.',
    flavor: 'No pasa nada. Nada.'
  },
  'shieldbearer-of-ages': {
    name: 'Escudera de las Eras',
    flavor: 'Su escudo tiene abolladuras de cien batallas, algunas todavía no peleadas.'
  },
  'shields-up': {
    name: 'Escudos Arriba',
    text: 'Un aliado tuyo gana +14 de vida. Rápida.',
    flavor: '¡Arriba! ¡Ya! ¡Todos juntos!'
  },
  'shieldwall-veteran': {
    name: 'Veterano del Muro de Escudos',
    text: 'Al entrar: los aliados de al lado ganan +4 de vida.',
    flavor: 'Treinta años en la primera fila. Ni un paso atrás.'
  },
  'shifting-sands': {
    name: 'Arenas Movedizas',
    text: 'Al empezar cada fase, hacé 2 de daño a cada aliado enemigo.',
    flavor: 'El suelo mismo se olvida de dónde estaba.'
  },
  shortbow: { name: 'Arco Corto', flavor: 'Liviano, rápido y siempre a mano.' },
  'siege-engine': {
    name: 'Máquina de Asedio',
    text: 'Artefacto con 3 usos. Al empezar cada fase, le hace 6 de daño a un aliado enemigo al azar.',
    flavor: 'No la apunta nadie. Le pega a cualquiera.'
  },
  'signal-storm': {
    name: 'Tormenta de Señales',
    text: 'Hacé 6 de daño a cada aliado enemigo y robá una carta.',
    flavor: 'Todas las pantallas de la ciudad gritan a la vez.'
  },
  'signifer-lucius': {
    name: 'Signífero Lucio',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque y +4 de vida.',
    flavor: 'Llevó el estandarte entre el fuego, la inundación y el tiempo.'
  },
  'silk-robe': {
    name: 'Túnica de Seda',
    text: 'Al jugarla: robá una carta.',
    flavor: 'Bolsillos para cada pergamino.'
  },
  'siphon-rune': {
    name: 'Runa Sifón',
    text: 'El héroe enemigo pierde 2 de energía. El tuyo gana 1.',
    flavor: 'Lo suyo fluye, despacio, hacia vos.'
  },
  'sister-elowen': {
    name: 'Hermana Elowen',
    text: 'Al final de cada fase, tus aliados se curan 3.',
    flavor: 'Fue su primera alumna. Ahora le cuida la espalda.',
    ability: { name: 'Bendición', text: 'Tu héroe se cura 8.' }
  },
  'skeletal-monk': { name: 'Monje Esqueleto', flavor: 'Votos de silencio. Huesos en silencio.' },
  'sky-courier': { name: 'Mensajero del Cielo', flavor: 'Entrega cartas al pasado. Tarde, como siempre.' },
  'skyship-gunner': {
    name: 'Artillera del Aeronave',
    flavor: 'Desde la cubierta de su barco volador, nada queda fuera de alcance.'
  },
  'smoke-bomb': { name: 'Bomba de Humo', text: 'Aturdí a un aliado enemigo.', flavor: 'Ahora los ves, ahora esperás.' },
  'snare-trap': {
    name: 'Trampa de Lazo',
    text: 'Cuando un aliado enemigo ataca: hacele 10 de daño.',
    flavor: 'Escondida bajo las hojas, esperando un paso descuidado.'
  },
  'soul-drain': {
    name: 'Drenar Almas',
    text: 'Hacé 12 de daño a un aliado enemigo y tu héroe se cura 8.',
    flavor: 'Tu fuerza me queda mejor a mí.'
  },
  'soul-harvester': {
    name: 'Cosechador de Almas',
    text: 'Al entrar: si tu descarte tiene 5 cartas o más, gana +4 de ataque y +4 de vida.',
    flavor: 'Cosecha donde otros cayeron.'
  },
  'soul-jar': {
    name: 'Frasco de Almas',
    text: 'Si tu descarte tiene 4 cartas o más, robá 2 cartas. Tu héroe se cura 4.',
    flavor: 'Agitar antes de usar. Después correr.'
  },
  'soul-reaver': {
    name: 'Segadora de Almas',
    text: 'Al atacar: gana +1 de ataque y +2 de vida.',
    flavor: 'Cada alma que toma la hace más fuerte.'
  },
  'spare-parts': {
    name: 'Repuestos',
    text: 'Un aliado tuyo se cura 10 y gana +1 de ataque.',
    flavor: 'Un tornillo acá, un resorte allá. Como nuevo.'
  },
  'spark-engineer': {
    name: 'Ingeniera de Chispas',
    text: 'Al final de cada fase, hacé 2 de daño a un aliado enemigo al azar.',
    flavor: 'Todo lo que inventa explota. Algunas cosas a propósito.'
  },
  'spell-eater': {
    name: 'Devorador de Hechizos',
    text: 'Al recibir daño: gana +2 de ataque.',
    flavor: 'Fuego, hielo, rayo. Los prueba todos.'
  },
  spellbinder: {
    name: 'Atadora de Hechizos',
    text: 'Al atacar: hacé 2 de daño al héroe enemigo.',
    flavor: 'Cada golpe lleva una pequeña maldición.'
  },
  spellbook: { name: 'Libro de Hechizos', text: 'Robá 3 cartas.', flavor: 'Capítulo uno: no leas el capítulo dos.' },
  'spellward-knight': { name: 'Caballera Rúnica', flavor: 'Su armadura tiene grabadas mil runas de protección.' },
  'spiked-pauldrons': {
    name: 'Hombreras con Púas',
    text: 'Al empezar cada fase, hacé 2 de daño a un aliado enemigo al azar.',
    flavor: 'No se recomiendan los abrazos.'
  },
  'spinosaur-hunter': { name: 'Espinosaurio Cazador', flavor: 'El río es su coto de caza. Y su mesa.' },
  'spirit-caller': {
    name: 'Invocadora de Espíritus',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Los viejos espíritus de la selva curan lo que desgarran las garras.',
    ability: { name: 'Llamado de los Ancestros', text: 'Un aliado tuyo se cura 8 y gana +2 de ataque.' }
  },
  'spirit-guardian': {
    name: 'Guardián Espiritual',
    text: 'Invocá un Guardián de la Grieta y tu héroe gana 6 de armadura.',
    flavor: 'Un viejo amigo del más allá responde al llamado.'
  },
  'spirit-link': {
    name: 'Vínculo Espiritual',
    text: 'Tus aliados ganan +1 de ataque y +4 de vida.',
    flavor: 'Un corazón, muchos cuerpos.'
  },
  'spirit-of-the-herd': {
    name: 'Espíritu de la Manada',
    text: 'Tus aliados ganan +2 de ataque y +4 de vida y tu héroe se cura 4.',
    flavor: 'Mil pezuñas, un solo corazón.'
  },
  'spirit-ward': {
    name: 'Amparo Espiritual',
    text: 'Al empezar cada fase, tu héroe se cura 2.',
    flavor: 'Los ancestros se ponen entre vos y el golpe.'
  },
  spyglass: { name: 'Catalejo', text: 'Robá una carta.', flavor: 'Mirá lo que viene.' },
  'spoils-of-war': {
    name: 'Botín de Guerra',
    text: 'Artefacto. Al empezar cada fase, si tenés más aliados que el rival, robá una carta.',
    flavor: 'Al ganador, los cofres.'
  },
  'staff-of-embers': { name: 'Bastón de Brasas', flavor: 'Siempre tibio, nunca se apaga.' },
  'staff-of-eternity': {
    name: 'Bastón de la Eternidad',
    text: 'Al jugarla: un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Curó a todos los héroes de todas las épocas.'
  },
  'staff-of-renewal': {
    name: 'Bastón de la Renovación',
    text: 'Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'Donde toca el suelo crecen flores.'
  },
  'staff-of-the-archmage': {
    name: 'Bastón del Archimago',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar. Al jugarla: ganá 2 de Cronos.',
    flavor: 'Solo una mano por era lo puede sostener.'
  },
  'staff-of-the-starweaver': {
    name: 'Bastón de la Tejeestrellas',
    text: 'Al empezar cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Su punta es una estrella capturada. Sigue enojada.'
  },
  stampede: {
    name: 'Estampida',
    text: 'Hacé 6 de daño a cada aliado enemigo y tus aliados ganan +2 de ataque. Lenta.',
    flavor: 'No te quedes en el valle. Nunca.'
  },
  'starlit-unicorn': {
    name: 'Unicornio Estelar',
    text: 'Al entrar: tu héroe se cura 8. Al final de cada fase, tus aliados se curan 2.',
    flavor: 'Su cuerno apunta siempre a la estrella más brillante.'
  },
  'starshot-bow': {
    name: 'Arco Estelar',
    text: 'Al jugarla: hacé 6 de daño a cada aliado enemigo.',
    flavor: 'Sus flechas son estrellas fugaces.'
  },
  'starweavers-astrolabe': {
    name: 'Astrolabio de Ilyra',
    text: 'Robá 2 cartas y ganá 2 de Cronos. Rápido.',
    flavor: 'Muestra dónde estaba cada estrella, y dónde va a estar.'
  },
  'stasis-bubble': {
    name: 'Burbuja de Estasis',
    text: 'Adjuntala a un aliado tuyo: gana escudo (ignora el primer daño que recibe).',
    flavor: 'El tiempo se frena a un dedo de la espada.'
  },
  'static-wraith': { name: 'Espectro de Estática', flavor: 'Apagalo. Sigue ahí.' },
  'steam-blast': {
    name: 'Chorro de Vapor',
    text: 'Hacé 10 de daño a un aliado enemigo y aturdilo.',
    flavor: 'Bastante caliente para cocinar a un caballero en su armadura.'
  },
  'steam-hammer': {
    name: 'Martillo a Vapor',
    text: 'Al jugarla: ganá 1 de Cronos.',
    flavor: 'Cada golpe viene con un silbido.'
  },
  'steam-sentry': { name: 'Centinela a Vapor', flavor: 'Silba antes de pelear. Por educación.' },
  'steam-tank': { name: 'Tanque a Vapor', flavor: 'A carbón y muy, muy enojado.' },
  'stim-pack': {
    name: 'Estimulante',
    text: 'Tu héroe se cura 6 y robá una carta. Rápido.',
    flavor: 'Tiene gusto a pila.'
  },
  'stone-thrower': { name: 'Lanzapiedras', flavor: 'Tecnología: una piedra grande. Estrategia: tirarla.' },
  'storm-adept': {
    name: 'Adepta de la Tormenta',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'El rayo responde cuando lo llama, pero cobra.',
    ability: { name: 'Trueno', text: 'Hacé 6 de daño a un slot enemigo.' }
  },
  'storm-caller': {
    name: 'Invocador de Tormentas',
    flavor: 'Las nubes le contestan antes de que termine la palabra.',
    ability: { name: 'Cadena de Rayos', text: 'Hacé 4 de daño a cada aliado enemigo.' }
  },
  'storm-plate': {
    name: 'Armadura de Tormenta',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Chisporrotea cuando la tocás. Y cuando pensás en ella.'
  },
  'street-runner': { name: 'Corredora Callejera', flavor: 'Entregas en menos de un segundo, o la próxima es gratis.' },
  'sun-chariot': {
    name: 'Carro del Sol',
    text: 'Al entrar: hacé 6 de daño al héroe enemigo.',
    flavor: 'Cruza el cielo todos los días. Hoy te cruza a vos.'
  },
  'sun-mace': { name: 'Maza Solar', flavor: 'Un poco de luz de sol, aplicada con firmeza.' },
  sunrise: {
    name: 'Amanecer',
    text: 'Tus aliados se curan 10 y tus aliados ganan +2 de ataque y +2 de vida.',
    flavor: 'Vuelve la luz. Y la esperanza.'
  },
  'sundial-of-plenty': {
    name: 'Reloj de Sol de la Abundancia',
    text: 'Artefacto. Al empezar cada fase, ganás 1 Cronos.',
    flavor: 'Su sombra siempre marca el ahora.'
  },
  'surveillance-net': {
    name: 'Red de Vigilancia',
    text: 'Cuando el rival invoca un aliado: aturdilo por dos fases y robá una carta.',
    flavor: 'Sonreí. Te están filmando.'
  },
  'swamp-croc': { name: 'Cocodrilo del Pantano', flavor: 'Espera en este pantano desde antes de los dinosaurios.' },
  'swamp-viper': {
    name: 'Víbora del Pantano',
    text: 'Cuando ataca, envenena a su objetivo (2).',
    flavor: 'Su mordida es rápida. Lo demás, lento.'
  },
  'syndicate-enforcer': { name: 'Ejecutor del Sindicato', flavor: 'Política de la empresa, entregada en mano.' },
  'synth-brawler': { name: 'Peleador Sintético', flavor: 'Puños mejorados. Actitud original.' },
  'system-crash': {
    name: 'Caída del Sistema',
    text: 'Aturdí a un aliado enemigo por dos fases. Rápida.',
    flavor: '¿Probaste apagarlo y no prenderlo nunca más?'
  },
  'tame-beast': {
    name: 'Domar Bestia',
    text: 'Invocá un Jabalí Espinoso y tu héroe se cura 5.',
    flavor: 'Despacito. Despacito. Buen chico.'
  },
  'tar-pits': {
    name: 'Pozos de Brea',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar y tu héroe se cura 3.',
    flavor: 'Entraron muchos. Salieron pocos.'
  },
  'target-lock': {
    name: 'Fijar Blanco',
    text: 'Hacé 4 de daño a un aliado enemigo y robá una carta. Instantánea.',
    flavor: 'Fijado. Cargado. Me voy.'
  },
  'tauron-labyrinth-lord': {
    name: 'Tauron, Señor del Laberinto',
    text: 'Cornada (3): hacé 12 de daño a un slot enemigo. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Nadie que entró a su laberinto encontró la salida.',
    ability: { name: 'Cornada', text: 'Hacé 12 de daño a un slot enemigo.' }
  },
  'tavern-brawler': { name: 'Camorrero de Taberna', flavor: 'Cada era tiene una taberna. Cada taberna lo tiene a él.' },
  'tax-automaton': {
    name: 'Autómata Recaudador',
    text: 'Al entrar: robá una carta.',
    flavor: 'Cuenta todo. Incluso a vos.'
  },
  'temple-acolyte': {
    name: 'Acólita del Templo',
    text: 'Al entrar: tu héroe se cura 5.',
    flavor: 'Prende una vela por cada soldado que vuelve.'
  },
  'temple-of-the-huntress': {
    name: 'Templo de la Cazadora',
    text: 'Al empezar cada fase, hacé 4 de daño a un aliado enemigo al azar y tus aliados ganan +1 de ataque.',
    flavor: 'Cada flecha que sale de acá es una plegaria.'
  },
  'temple-oracle': {
    name: 'Oráculo del Templo',
    text: 'Al entrar: robá una carta.',
    flavor: 'Ve el futuro. Casi todo es humo.',
    ability: { name: 'Augurio', text: 'Robá una carta.' }
  },
  'temporal-prison': {
    name: 'Prisión Temporal',
    text: 'Cuando el rival invoca un aliado: lo aturdís por dos fases.',
    flavor: 'Bienvenido. Por favor, espere.'
  },
  'temporal-shock': {
    name: 'Choque Temporal',
    text: 'Hacé 10 de daño a un aliado enemigo. Rápida.',
    flavor: 'Una sacudida de un segundo que salió mal.'
  },
  'tesla-sentinel': { name: 'Centinela Tesla', flavor: 'Tocalo. Dale.' },
  'tesla-wand': {
    name: 'Varita Tesla',
    text: 'Al empezar cada fase, hacé 2 de daño a un aliado enemigo al azar.',
    flavor: 'Apuntala lejos del pelo.'
  },
  'testudo-squad': { name: 'Escuadra Tortuga', flavor: 'Llueven flechas. La tortuga sigue caminando.' },
  'the-ancestor-tree': {
    name: 'El Árbol de los Ancestros',
    text: 'Al empezar cada fase, tus aliados se curan 4 y tus aliados ganan +1 de ataque y +2 de vida.',
    flavor: 'Cada hoja es un nombre. Cada raíz, una historia.'
  },
  'the-clockmaker': {
    name: 'El Relojero',
    text: 'Al entrar: ganá 4 de Cronos y robá 2 cartas. Al empezar cada fase, ganá 1 de Cronos y tus aliados ganan +1 de ataque y +2 de vida.',
    flavor: 'Construyó el primer reloj. Después construyó el tiempo para ponerle adentro.'
  },
  'the-copperwick-engine': {
    name: 'La Máquina Copperwick',
    text: 'Ganá 3 de Cronos, robá 2 cartas y invocá un Dron de Engranajes.',
    flavor: 'Su obra maestra. Funciona a tiempo puro.'
  },
  'the-dawn-angel': {
    name: 'El Ángel del Alba',
    text: 'Al entrar: tu héroe se cura 15 y un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Aparece una vez cada mil años, con la primera luz.'
  },
  'the-final-silence': {
    name: 'El Silencio Final',
    text: 'Al entrar: hacé 15 de daño a cada aliado, también a los tuyos y un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Después del último sonido, solo esto.'
  },
  'the-first-wizard': {
    name: 'El Primer Mago',
    text: 'Al entrar: aturdí a cada aliado enemigo y robá 2 cartas. Al empezar cada fase, hacé 6 de daño a un aliado enemigo al azar.',
    flavor: 'Antes de él, la magia era una palabra que nadie sabía decir.'
  },
  'the-grand-orrery': {
    name: 'El Gran Planetario',
    text: 'Al entrar: ganá 3 de Cronos y robá 2 cartas.',
    flavor: 'Mueve los planetas, y los planetas mueven la guerra.'
  },
  'the-hollow-crown': {
    name: 'La Corona Hueca',
    text: 'Al entrar: destruí tu otro aliado más débil: si lo hacés, robá 2 cartas y hacé 6 de daño a cada aliado enemigo.',
    flavor: 'Era su corona. Ahora es su único sirviente.'
  },
  'the-last-king': {
    name: 'El Último Rey',
    text: 'Al entrar: un aliado al azar de tu descarte vuelve al juego y un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Gobierna el fin de los tiempos. Todos sus súbditos están muertos.'
  },
  'the-last-sentinel': {
    name: 'El Último Centinela',
    flavor: 'Cuando el tiempo termine, todavía va a estar de guardia.'
  },
  'the-nexus': {
    name: 'El Nexo',
    text: 'Al empezar cada fase, ganás 1 de Cronos y robá una carta.',
    flavor: 'Donde se cruzan todas las eras y empiezan todos los caminos.'
  },
  'the-ninths-stand': {
    name: 'La Resistencia de la Novena',
    text: 'Tu héroe gana 15 de armadura y tus aliados ganan +6 de vida. Instantánea.',
    flavor: 'Aguantaron un siglo. Pueden aguantar un minuto.'
  },
  'the-oracle-ai': {
    name: 'La IA Oráculo',
    text: 'Al entrar: robá 2 cartas. Al empezar cada fase, robá una carta.',
    flavor: 'Calculó todos los futuros posibles. Perdés en todos.'
  },
  'the-singing-graves': {
    name: 'Las Tumbas que Cantan',
    text: 'Al empezar cada fase, un aliado al azar de tu descarte vuelve al juego y tu héroe se cura 3.',
    flavor: 'Escuchá bien. Están cantando tu nombre.'
  },
  'the-starlight-oracle': {
    name: 'El Oráculo Estelar',
    text: 'Al empezar cada fase, robá una carta.',
    flavor: 'Vio esta partida hace mucho. Le gustó el final.'
  },
  'the-world-serpent': {
    name: 'La Serpiente del Mundo',
    text: 'Al entrar: hacé 8 de daño a cada aliado enemigo.',
    flavor: 'Su cola está en el pasado. Su cabeza, en el futuro.'
  },
  'thorn-collar': {
    name: 'Collar de Espinas',
    text: 'Adjuntalo a un aliado enemigo: cada vez que ataca, pierde 4 de vida.',
    flavor: 'Cada golpe lo aprieta más.'
  },
  'thornback-boar': { name: 'Jabalí Espinoso', flavor: 'No se recomienda acariciarlo.' },
  'thorned-colossus': { name: 'Coloso Espinoso', flavor: 'Abrazalo bajo tu propio riesgo.' },
  'thorned-mail': {
    name: 'Malla de Espinas',
    text: 'Adjuntala a un aliado tuyo: tiene +3 de vida y espinas 4.',
    flavor: 'Abrazalo si te animás.'
  },
  'thunder-lizard': {
    name: 'Lagarto del Trueno',
    text: 'Al entrar: tus aliados se curan 8.',
    flavor: 'Cuando camina, la lluvia cae para arriba.'
  },
  thunderclap: {
    name: 'Trueno',
    text: 'Hacé 6 de daño a cada aliado enemigo y tu héroe gana 6 de armadura. Rápida.',
    flavor: 'Todos lo escuchan. Nadie queda de pie.'
  },
  'time-capsule': {
    name: 'Cápsula del Tiempo',
    text: 'Robá 3 cartas. Lenta.',
    flavor: 'Enterrada en el pasado, abierta justo a tiempo.'
  },
  'time-lock': {
    name: 'Cerrojo del Tiempo',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, aturdilo por dos fases y ganá 2 de Cronos.',
    flavor: 'Tus minutos ahora están en mi caja fuerte.'
  },
  'time-thief': {
    name: 'Ladrona de Tiempo',
    text: 'Al entrar: hacé 3 de daño al héroe enemigo y ganás 1 de Cronos.',
    flavor: 'Tus segundos quedan mejor en su bolsillo.'
  },
  'time-wanderer': { name: 'Viajero del Tiempo', flavor: 'Perdido en algún lugar entre ayer y mañana.' },
  'time-warp': {
    name: 'Distorsión Temporal',
    text: 'Ganá 3 de Cronos y robá 2 cartas. Rápida.',
    flavor: 'Un poquito más de tiempo. Solo un poquito.'
  },
  'timeguard-plate': { name: 'Placas del Guardián del Tiempo', flavor: 'Forjada para sobrevivir al fin del tiempo.' },
  'timeworn-champion': { name: 'Campeón Gastado', flavor: 'Peleó en todas las batallas finales. Dos veces.' },
  'tinker-gnome': {
    name: 'Gnomo Hojalatero',
    text: 'Al morir: invocá un Dron de Engranajes.',
    flavor: 'Nunca se va sin dejar algo atrás.'
  },
  'titan-gauntlet': {
    name: 'Guantelete del Titán',
    text: 'Adjuntalo a un aliado tuyo: tiene +8 de ataque, +8 de vida y barrido.',
    flavor: 'Forjado para una mano tres veces más grande. Igual te queda.'
  },
  'tomb-listener': {
    name: 'Oyente de Tumbas',
    text: 'Al entrar: robá una carta por cada 5 cartas de tu pila de descarte (hasta 3).',
    flavor: 'Los muertos hablan. Ella escucha.'
  },
  'tomb-warden': {
    name: 'Guardián de la Cripta',
    text: 'Al morir: un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Cuida a los muertos. Los muertos lo cuidan a él.'
  },
  'tome-of-endings': {
    name: 'Tomo de los Finales',
    text: 'Hacé 10 de daño a cada aliado enemigo, un aliado al azar de tu descarte vuelve al juego y robá 2 cartas.',
    flavor: 'Todas las historias terminan. Este libro sabe cómo.'
  },
  'tome-of-whispers': {
    name: 'Tomo de los Susurros',
    text: 'Artefacto. Al empezar cada fase, robá una carta y tu héroe pierde 2 de vida.',
    flavor: 'Lo sabe todo. Pide un poco a cambio.'
  },
  'tower-mace': { name: 'Maza de Torre', text: 'Al jugarla: tu héroe gana 5 de armadura.', flavor: 'Toc, toc.' },
  'tower-novice': {
    name: 'Novicia de la Torre',
    text: 'Al entrar: hacé 2 de daño al héroe enemigo.',
    flavor: 'Su primer hechizo fue un accidente. El segundo también.'
  },
  'tower-of-stars': {
    name: 'Torre de las Estrellas',
    text: 'Al empezar cada fase, hacé 3 de daño al héroe enemigo.',
    flavor: 'Desde arriba, todas las eras se ven chiquitas.'
  },
  track: {
    name: 'Rastrear',
    text: 'Robá una carta. Rápida.',
    flavor: 'Ramitas rotas, pasto doblado, huellas frescas.'
  },
  'training-grounds': {
    name: 'Campo de Entrenamiento',
    text: 'Al empezar cada fase, un aliado tuyo al azar gana +2 de ataque.',
    flavor: 'La práctica hace eterno.'
  },
  'tribal-warchief': {
    name: 'Jefe de Guerra Tribal',
    flavor: 'Su grito de guerra puede empezar una avalancha.',
    ability: { name: 'Grito de Guerra', text: 'Un aliado tuyo gana +8 de ataque esta fase.' }
  },
  'tribune-of-the-legion': {
    name: 'Tribuno de la Legión',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque y +2 de vida.',
    flavor: 'Su voz se escucha por encima del choque de mil escudos.'
  },
  'triceratops-matriarch': {
    name: 'Matriarca Triceratops',
    text: 'Cuando entra otro aliado tuyo, gana +2 de ataque y +2 de vida.',
    flavor: 'Tres cuernos, una regla: a la manada no la toca nadie.'
  },
  tripwire: {
    name: 'Cable Trampa',
    text: 'Cuando el rival invoca un aliado: le hacés 6 de daño.',
    flavor: 'Cuidado dónde pisás. Y cuándo.'
  },
  'tripwire-turret': {
    name: 'Torreta de Alambre',
    text: 'Cuando el rival invoca un aliado: hacele 12 de daño.',
    flavor: 'Solo le dispara a los amigos nuevos.'
  },
  'tusked-hog': { name: 'Cerdo Colmilludo', flavor: 'Mal carácter, peor aliento.' },
  'twin-blades': {
    name: 'Hojas Gemelas',
    text: 'Adjuntalas a un aliado tuyo: tiene +3 de ataque y frenesí (puede atacar dos veces por fase).',
    flavor: 'Dos filos, un solo ritmo.'
  },
  'twin-hunting-knives': {
    name: 'Cuchillos de Caza Gemelos',
    text: 'Al jugarla: robá una carta.',
    flavor: 'Uno para despellejar, otro para ganar.'
  },
  'tyrant-hatchling': { name: 'Cría de Tirano', flavor: 'Chiquito. Por ahora.' },
  unravel: {
    name: 'Desentrañar',
    text: 'Hacé 8 de daño a un aliado enemigo. Si tu descarte tiene 5 cartas o más, robá una carta.',
    flavor: 'Tirá de un hilo y todo se desarma.'
  },
  'usurpers-decree': {
    name: 'Decreto del Usurpador',
    text: 'Hacé 12 de daño a un aliado enemigo y 4 al héroe enemigo.',
    flavor: 'Firmado con una tinta que no se secó en dos mil años.'
  },
  'vampire-fang': {
    name: 'Colmillo de Vampiro',
    text: 'Adjuntalo a un aliado tuyo: tiene +2 de ataque y robo de vida.',
    flavor: 'Un trofeo que todavía tiene hambre.'
  },
  'varros-orders': {
    name: 'Órdenes de Varro',
    text: 'Tus aliados ganan +1 de ataque y +3 de vida y tu héroe gana 3 de armadura. Rápida.',
    flavor: 'Escudos arriba, mirada al frente, hoy no muere nadie.'
  },
  'velocity-queen': { name: 'Reina de la Velocidad', flavor: 'Primer puesto. Cada vuelta. Cada siglo.' },
  'venom-coating': {
    name: 'Baño de Veneno',
    text: 'Adjuntalo a un aliado tuyo: gana veneno (el daño que le hace a un aliado lo destruye).',
    flavor: 'Con un rasguño alcanza.'
  },
  'venom-spitter': { name: 'Escupidor de Veneno', flavor: 'No necesita morder.' },
  'veteran-of-many-wars': { name: 'Veterano de Mil Guerras', flavor: 'Dejó de contar las guerras. Después, las eras.' },
  'vex-nightwire': {
    name: 'Vex Nightwire',
    text: 'Disparo Hackeado (1): hacé 6 de daño a un slot enemigo. Instantánea. Al final de cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Caza blancos que nadie más puede encontrar.',
    ability: { name: 'Disparo Hackeado', text: 'Hacé 6 de daño a un slot enemigo.' }
  },
  'void-acolyte': { name: 'Acólito del Vacío', flavor: 'Lee el cielo al revés.' },
  'void-collapse': {
    name: 'Colapso del Vacío',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, destruilo y un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'El vacío se lleva uno y devuelve otro.'
  },
  'void-leech': {
    name: 'Sanguijuela del Vacío',
    text: 'Al entrar: el héroe enemigo pierde 2 de energía.',
    flavor: 'Se bebe lo que hace héroes a los héroes.'
  },
  'void-rift': {
    name: 'Grieta del Vacío',
    text: 'Hacé 6 de daño a cada aliado enemigo y un aliado al azar de tu descarte vuelve al juego. Lenta.',
    flavor: 'El vacío se abre. Algo sale.'
  },
  'void-spawn': { name: 'Engendro del Vacío', flavor: 'Vino de la nada. Quiere todo.' },
  'void-tendril': { name: 'Tentáculo del Vacío', flavor: 'Un toque y el vacío se acuerda de vos.' },
  volley: {
    name: 'Andanada',
    text: 'Hacé 5 de daño a cada aliado enemigo. Lenta.',
    flavor: 'El cielo se oscurece de flechas.'
  },
  voltblade: { name: 'La Hoja Voltaica', flavor: 'Cargada con los rayos del año 3000.' },
  'vorhal-the-last-hour': {
    name: 'Vorhal, la Última Hora',
    text: 'Campanada Final (3): hacé 4 de daño a cada aliado enemigo. Al empezar cada fase, hacé 2 de daño al héroe enemigo.',
    flavor: 'Cuando se detiene el último reloj, queda él.',
    ability: { name: 'Campanada Final', text: 'Hacé 4 de daño a cada aliado enemigo.' }
  },
  'wailing-banshee': {
    name: 'Banshee Aullante',
    text: 'Al morir: hacé 4 de daño a cada aliado enemigo.',
    flavor: 'Su último grito es el más fuerte.'
  },
  'wand-duelist': {
    name: 'Duelista de Varita',
    flavor: 'La varita más rápida del reino. La segunda del reino vecino.'
  },
  'wand-of-ruin': {
    name: 'Varita de la Ruina',
    text: 'Hacé 16 de daño a un slot enemigo y robá una carta. Rápido.',
    flavor: 'Apuntá con la punta correcta. Por favor.'
  },
  'wanderers-camp': {
    name: 'Campamento Errante',
    text: 'Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'Un fuego tibio, sea el siglo que sea.'
  },
  'wanderers-sling': {
    name: 'Honda del Errante',
    flavor: 'Cualquier piedra es un arma si la tirás desde bastante lejos.'
  },
  'wandering-scribe': {
    name: 'Escriba Errante',
    text: 'Al entrar: robá una carta.',
    flavor: 'Anota cada camino, para que elijas el tuyo.'
  },
  'wandering-sellsword': { name: 'Mercenario Errante', flavor: 'Cobra en cualquier moneda de cualquier siglo.' },
  'war-axe': { name: 'Hacha de Guerra', flavor: 'Pesada, simple, efectiva.' },
  'war-banner': {
    name: 'Bandera de Guerra',
    text: 'Tus aliados ganan +1 de ataque y +3 de vida.',
    flavor: 'Seguí al rojo.'
  },
  'war-council': {
    name: 'Consejo de Guerra',
    text: 'Robá 2 cartas.',
    flavor: 'Los planes se hacen en la mesa y se ganan en el campo.'
  },
  'war-drum': {
    name: 'Tambor de Guerra',
    text: 'Artefacto. Tus aliados tienen +2 de ataque, y también los que entren después.',
    flavor: 'Cada golpe, un paso adelante.'
  },
  'war-priestess': {
    name: 'Sacerdotisa de Guerra',
    text: 'Su habilidad se paga con energía (⚡).',
    flavor: 'Su himno vuelve a soldados cansados un muro de bronce.',
    ability: { name: 'Himno de Batalla', text: 'Tus aliados ganan +3 de ataque esta fase.' }
  },
  'warlords-command': {
    name: 'Orden del Señor de la Guerra',
    text: 'Tus aliados ganan +5 de ataque y +5 de vida y robá 2 cartas.',
    flavor: 'Todos los soldados conocen esa voz.'
  },
  'wayfinder-scout': { name: 'Exploradora Guía', flavor: 'Traza los caminos entre las eras.' },
  whetstone: {
    name: 'Piedra de Afilar',
    text: 'Un aliado tuyo gana +6 de ataque esta fase y tu héroe gana 3 de armadura.',
    flavor: 'Más filoso es mejor.'
  },
  whirlwind: { name: 'Torbellino', text: 'Hacé 7 de daño a cada aliado enemigo. Lenta.', flavor: 'Atrás. Más. Más.' },
  'whetted-edge': {
    name: 'Filo Afilado',
    text: 'Adjuntalo a un aliado tuyo: tiene +4 de ataque.',
    flavor: 'Afilado en la piedra de mil mañanas.'
  },
  'wild-hunt': {
    name: 'Cacería Salvaje',
    text: 'Invocá una Manada de Raptores y tus aliados ganan +2 de ataque.',
    flavor: 'Cuando Kora aúlla, caza toda la jungla.'
  },
  wildfire: {
    name: 'Fuego Salvaje',
    text: 'Hacé 3 de daño a todos los aliados enemigos y prendelos fuego (2 por fase durante 2 fases).',
    flavor: 'Una vez que empieza, nadie le puede decir dónde parar.'
  },
  'winged-harness': {
    name: 'Arnés Alado',
    text: 'Adjuntalo a un aliado tuyo: tiene +2 de ataque y vuelo.',
    flavor: 'Alas a cuerda, correas de cuero, nada de vértigo.'
  },
  'wolfhide-armor': { name: 'Armadura de Piel de Lobo', flavor: 'La manada corre con vos, aunque no esté.' },
  'woolly-rhino': { name: 'Rinoceronte Lanudo', flavor: 'No frena. No sabe cómo.' },
  'wrath-of-the-volcano': {
    name: 'Furia del Volcán',
    text: 'Cuando un aliado enemigo ataca: cancelá el ataque, destruilo y hacé 4 de daño a cada aliado enemigo.',
    flavor: 'La montaña decide quién se queda.'
  },
  'xulthar-the-devourer': {
    name: "Xul'thar el Devorador",
    text: 'Consumir (3): hacé 10 de daño a un slot enemigo y tu héroe se cura 8. Al empezar cada fase, si tu descarte tiene 10 cartas o más, un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Se comió la última estrella. Todavía tiene hambre.',
    ability: { name: 'Consumir', text: 'Hacé 10 de daño a un slot enemigo y tu héroe se cura 8.' }
  },
  'zero-the-ghost': {
    name: 'Zero, el Fantasma',
    text: 'Al entrar: hacé 8 de daño al héroe enemigo.',
    flavor: 'Sin nombre, sin cara, sin rastro.'
  }
}
