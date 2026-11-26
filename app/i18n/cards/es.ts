import { CardTranslation } from '@/app/i18n/cards'

/** The Spanish texts of every card, by id (docs/PLAN.md, section 7.6). */
export const CARDS_ES: Record<string, CardTranslation> = {
  'acolyte-of-spirits': { name: 'Acólito de los Espíritus', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
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
  'adas-strike': {
    name: 'Golpe de Ada',
    text: 'Hacé 10 de daño a un slot enemigo y robá una carta.',
    flavor: 'Medido dos veces, golpeado una.'
  },
  'aegis-of-rage': {
    name: 'Égida de la Ira',
    text: 'Tu héroe se cura 9. Instantánea.',
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
    text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.'
  },
  'altar-of-lost-time': {
    name: 'Altar del Tiempo Perdido',
    text: 'Cada daño que reciben tus aliados es 1 menor.',
    flavor: 'Ofrendas a horas que nunca existieron.'
  },
  'altar-of-pistons': {
    name: 'Altar de Pistones',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía.',
    flavor: 'Ofrendas de aceite al dios de las máquinas.'
  },
  'altar-of-the-hawk': {
    name: 'Altar del Halcón',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía.',
    flavor: 'Las plumas que se dejan acá nunca se pierden.'
  },
  'altar-of-the-shieldwall': {
    name: 'Altar del Muro de Escudos',
    text: 'Al empezar cada fase: hacé 2 de daño al héroe enemigo. (3 usos)'
  },
  'altar-of-the-sun-temple': {
    name: 'Altar del Templo del Sol',
    text: 'Al empezar cada fase: hacé 2 de daño de luz al héroe enemigo. (4 usos)'
  },
  'amber-eyed-blessing': {
    name: 'Bendición de Ojos de Ámbar',
    text: 'Tu héroe se cura 15.',
    flavor: 'Los viejos espíritus miran con ojos de ámbar.'
  },
  'amber-eyed-wolf-pup': {
    name: 'Lobezno de Ojos de Ámbar',
    text: 'Al entrar: gana +1 de ataque y +2 de vida.',
    flavor: 'Sus ojos brillan antes que sus dientes.'
  },
  'arcane-familiar': { name: 'Familiar Arcano', flavor: 'Un amigo hecho de pura luz de estrellas.' },
  'arcane-mine': {
    name: 'Mina Arcana',
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'Pisá suave. Leé las runas. Tarde.'
  },
  'arcane-runecarver': {
    name: 'Tallarrunas Arcano',
    text: 'Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'argos-the-silver-hound': {
    name: 'Argos, el Sabueso Plateado',
    text: 'Al entrar: hacé 3 de daño de viento a un aliado enemigo al azar.'
  },
  'armored-fortune-teller': {
    name: 'Adivina Acorazada',
    text: 'Cuando recibe daño: gana +2 de ataque.',
    flavor: 'Leyó el futuro y se compró una armadura.'
  },
  'armored-fury': {
    name: 'Furia Acorazada',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.',
    flavor: 'Furia, ahora blindada.'
  },
  'armored-mace': { name: 'Maza Acorazada', flavor: 'Sutil, no es.' },
  'armored-sabotage': {
    name: 'Sabotaje Acorazado',
    text: 'Destruí un arma, una armadura o un adjunto enemigo, a elección. Rápida.',
    flavor: 'Toda armadura tiene una correa floja.'
  },
  'armored-tower-shield': {
    name: 'Escudo Torre Acorazado',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'Un muro que se puede llevar.'
  },
  'ash-covered-stonethrower': { name: 'Lanzapiedras Cubierto de Ceniza', flavor: 'El volcán le enseñó a lanzar.' },
  'ashen-hierophant': {
    name: 'Hierofante Ceniciento',
    text: 'Al morir: tus Cultistas ganan +1 de ataque y +1 de vida. Al entrar: envenená al héroe enemigo (3).'
  },
  'ashen-skeleton': {
    name: 'Esqueleto Ceniciento',
    text: 'Cuando entra otro No-muerto tuyo: gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'ashen-stasis': {
    name: 'Estasis Cenicienta',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Congelado en ceniza, como las ciudades antiguas.'
  },
  'astral-bolt': {
    name: 'Rayo Astral',
    text: 'Hacé 6 de daño de arcano a un slot enemigo. Rápida.',
    flavor: 'Una estrella fugaz, con puntería.'
  },
  'astral-daze': {
    name: 'Aturdimiento Astral',
    text: 'Congelá a un aliado enemigo y hacé 5 de daño de arcano al héroe enemigo.'
  },
  'astral-robe': { name: 'Túnica Astral', flavor: 'Tejida con el cielo nocturno, cosida con estrellas.' },
  'augmented-thug': { name: 'Matón Aumentado', text: 'Al entrar: robá una carta.', flavor: 'Más cromo que cerebro.' },
  'augur-of-the-laurel': { name: 'Augur del Laurel', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'axe-of-the-vanguard': { name: 'Hacha de la Vanguardia', flavor: 'La primera en golpear, la última en mellarse.' },
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
  'banshee-of-grace': { name: 'Banshee de la Gracia', text: 'Al empezar cada fase: tu héroe se cura 2.' },
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
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida.'
  },
  'barrage-of-chrome': {
    name: 'Andanada de Cromo',
    text: 'Hacé 8 de daño de rayo a un slot enemigo.',
    flavor: 'Las balas cuestan plata. El cromo, más.'
  },
  'barrage-of-the-ambush': {
    name: 'Andanada de la Emboscada',
    text: 'Hacé 12 de daño a un slot enemigo.',
    flavor: 'Los propios árboles disparan.'
  },
  'barrage-of-the-comet': {
    name: 'Andanada del Cometa',
    text: 'Hacé 8 de daño de arcano a un slot enemigo.',
    flavor: 'Pedirle deseos a una estrella fugaz rara vez termina así.'
  },
  'barrage-of-the-hawk': {
    name: 'Andanada del Halcón',
    text: 'Hacé 6 de daño de viento a un aliado enemigo. Rápida.',
    flavor: 'El halcón llama y las flechas lo siguen.'
  },
  'battle-scarred-disarm': {
    name: 'Desarme Curtido',
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Rápida.'
  },
  'battle-scarred-helm': { name: 'Yelmo Curtido', flavor: 'Cada abolladura es una historia que sobrevivió.' },
  'battle-scarred-sentinel': { name: 'Centinela Curtido', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'battle-scarred-warplate': {
    name: 'Armadura de Guerra Curtida',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'Recuerda cada espada que fracasó.'
  },
  'binding-of-flame': {
    name: 'Atadura de Llamas',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Cadenas que queman mientras atan.'
  },
  'binding-of-lightning': {
    name: 'Atadura del Relámpago',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
    flavor: 'Cadenas que chispean y pican.'
  },
  'binding-of-ruin': {
    name: 'Atadura de la Ruina',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Cadenas forjadas con cosas rotas.'
  },
  'binding-of-the-legion': {
    name: 'Atadura de la Legión',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
    flavor: 'Los escudos se cierran. No hay salida.'
  },
  'binding-of-the-moon': {
    name: 'Atadura de la Luna',
    text: 'Aturdí a un aliado enemigo. Rápida.',
    flavor: 'La luz de luna es más suave que las cadenas, y más fuerte.'
  },
  'binding-of-the-pack': {
    name: 'Atadura de la Jauría',
    text: 'Congelá a un aliado enemigo y hacé 5 de daño de hielo al héroe enemigo.'
  },
  'blast-of-lightning': {
    name: 'Estallido del Relámpago',
    text: 'Hacé 4 de daño de rayo a un aliado enemigo. Rápida.',
    flavor: 'El trueno llega un poco tarde.'
  },
  'blast-of-the-arcanum': {
    name: 'Estallido del Arcano',
    text: 'Hacé 9 de daño de arcano a un slot enemigo.',
    flavor: 'La biblioteca tenía una estricta regla de silencio.'
  },
  'blast-of-the-jungle': {
    name: 'Estallido de la Jungla',
    text: 'Hacé 10 de daño de tierra a un slot enemigo, +2 por cada Fiera tuya.'
  },
  'blast-of-thorns': {
    name: 'Estallido de Espinas',
    text: 'Hacé 8 de daño a un slot enemigo.',
    flavor: 'El bosque devuelve los golpes.'
  },
  'blazing-daze': {
    name: 'Aturdimiento Ardiente',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
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
    text: 'Hacé 9 de daño de fuego a un slot enemigo.',
    flavor: 'Primero el fuego, preguntas nunca.'
  },
  'blessed-deserter': { name: 'Desertor Bendito', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'blessed-halo': {
    name: 'Halo Bendito',
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'Más pesado de lo que parece, más liviano de lo que se siente.'
  },
  'blessed-idol': {
    name: 'Ídolo Bendito',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)',
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
  'bloodied-echo': {
    name: 'Eco Ensangrentado',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego. Lenta.',
    flavor: 'La batalla resuena mucho después de terminar.'
  },
  'bloodied-glaive': {
    name: 'Guja Ensangrentada',
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'La limpiaron una vez. Nunca más.'
  },
  'bloodied-helm': {
    name: 'Yelmo Ensangrentado',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'No toda la sangre es de quien lo lleva.'
  },
  'bloodied-hitman': {
    name: 'Asesino a Sueldo Ensangrentado',
    text: 'Al entrar: tu héroe se cura 7.',
    flavor: 'Cobra por cicatriz.'
  },
  'bodyguard-of-the-vanguard': {
    name: 'Guardaespaldas de la Vanguardia',
    text: 'Cuando entra otro Sicario tuyo: tu héroe se cura 2.',
    flavor: 'Cada golpe que te apuntan le llega primero a él.'
  },
  'boilerguard-of-gears': {
    name: 'Guardacalderas de Engranajes',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'bold-blessing': {
    name: 'Bendición Audaz',
    text: 'Tu héroe se cura 16 y robá una carta.',
    flavor: 'La fortuna favorece a los ruidosos.'
  },
  'bold-gust': { name: 'Ráfaga Audaz', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'bold-rust': {
    name: 'Herrumbre Audaz',
    text: 'El arma y la armadura enemigas pierden 1 de durabilidad cada una. Rápida.'
  },
  'bold-traveler-cloak': {
    name: 'Capa de Viajero Audaz',
    text: 'Al equiparla: tu héroe se cura 6.',
    flavor: 'Vio todas las eras y se quejó en cada una.'
  },
  'bone-knight-of-dying-stars': {
    name: 'Caballero de Hueso de las Estrellas Moribundas',
    text: 'Cuando entra otro No-muerto tuyo: tu héroe se cura 2.'
  },
  'bone-knight-of-the-void': {
    name: 'Caballero de Hueso del Vacío',
    flavor: 'Juró lealtad a un reino que ya no existe.'
  },
  'borrowed-hour-of-grace': {
    name: 'Hora Prestada de la Gracia',
    text: 'Tu héroe gana 3 de energía. Instantánea.',
    flavor: 'Una hora que no tenías, regalada.'
  },
  'borrowed-hour-of-lost-time': {
    name: 'Hora Prestada del Tiempo Perdido',
    text: 'Tu héroe gana 3 de energía. Instantánea.',
    flavor: 'Prestada de un día que nunca llegó.'
  },
  'bounty-hunter-of-borrowed-hours': {
    name: 'Cazarrecompensas de las Horas Prestadas',
    text: 'Al entrar: robá una carta.',
    flavor: 'Cobra deudas en minutos y segundos.'
  },
  'bounty-hunter-of-flame': { name: 'Cazarrecompensas de Llamas', flavor: 'Se busca: cualquiera que arda.' },
  'bounty-hunter-of-the-long-road': {
    name: 'Cazarrecompensas del Largo Camino',
    text: 'Al entrar: destruí el artefacto enemigo más caro.'
  },
  'bounty-hunter-of-the-rift': {
    name: 'Cazarrecompensas de la Grieta',
    text: 'Al entrar: tu héroe se cura 5. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño de tiempo a un slot enemigo.' }
  },
  'bounty-hunter-of-the-silent-trail': {
    name: 'Cazarrecompensas del Rastro Silencioso',
    text: 'Al morir: hacé 3 de daño a un aliado enemigo al azar.'
  },
  'bracers-of-the-ambush': {
    name: 'Brazales de la Emboscada',
    flavor: 'Silenciosos en la muñeca, ruidosos en la cacería.'
  },
  'bramble-of-the-wanderer': { name: 'Zarza del Errante', text: 'Al morir: robá una carta.' },
  'brand-of-the-comet': {
    name: 'Estigma del Cometa',
    text: 'Adjuntala a un aliado enemigo: no puede usar su habilidad y tiene -1 de ataque.'
  },
  'brass-golem-of-coal': {
    name: 'Gólem de Latón del Carbón',
    text: 'Cuando entra otro Autómata tuyo: gana +1 de ataque y +1 de vida.'
  },
  'brass-golem-of-gears': { name: 'Gólem de Latón de Engranajes', flavor: 'Diez mil engranajes, un propósito.' },
  'brass-steam-knight': { name: 'Caballero de Vapor de Latón', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'brassmaws-bolt': {
    name: 'Rayo de Bocabronce',
    text: 'Hacé 10 de daño de sónico a un slot enemigo y robá una carta.'
  },
  'brassmaws-gadgeteer': {
    name: 'Artilugista de Bocabronce',
    text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2. Al morir: invocá un Dron de Engranajes.'
  },
  'brave-fortune-teller': {
    name: 'Adivina Valiente',
    text: 'Cuando recibe daño: gana +2 de ataque.',
    flavor: 'Leyó su propia muerte y se rió.'
  },
  'brave-secret': {
    name: 'Secreto Valiente',
    text: 'Robá 2 cartas.',
    flavor: 'El coraje es más fácil cuando nadie sabe.'
  },
  'brave-squire': {
    name: 'Escudero Valiente',
    text: 'Al entrar: robá la primera arma de tu mazo.',
    flavor: 'Demasiado joven para conocer el miedo, lo bastante grande para enfrentarlo.'
  },

  'brazier-of-the-wanderer': {
    name: 'Brasero del Errante',
    text: 'Al empezar cada fase: hacé 1 de daño al héroe enemigo. (3 usos)'
  },
  'breastplate-of-rage': { name: 'Peto de la Ira', flavor: 'Forjado al rojo, llevado más al rojo todavía.' },
  'brother-ossian': {
    name: 'Hermano Osián',
    text: 'Al terminar cada fase: hacé 2 de daño de sombra a un aliado enemigo al azar y tu héroe se cura 2.',
    flavor: 'Siguió rezando después de morir. Por costumbre.'
  },
  'caelus-the-usurper': {
    name: 'Caelus el Usurpador',
    text: 'Tributo (5): el rival pierde 1 de capacidad de Cronos y vos la ganás. Al empezar cada fase, tus aliados ganan +1 de ataque.',
    flavor: 'Robó una corona de una Roma que nunca existió, y quiere la verdadera.',
    ability: { name: 'Tributo', text: 'El rival pierde 1 de capacidad de Cronos y vos la ganás.' }
  },
  'caeluss-axe': {
    name: 'Hacha de Caelus',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'Arrebatada a un rey. Conservada por un usurpador.'
  },
  'caeluss-chimera': {
    name: 'Quimera de Caelus',
    text: 'Cuando entra otro Coloso tuyo: gana +2 de ataque y +2 de vida. Al atacar: tu héroe se cura 2.'
  },
  'camouflaged-brontosaur': { name: 'Brontosaurio Camuflado', text: 'Al atacar: hacé 3 de daño al héroe enemigo.' },
  'cave-bear-of-the-hunt-moon': {
    name: 'Oso Cavernario de la Luna de Caza',
    text: 'Al entrar: tus aliados se curan 3.',
    flavor: 'Solo se despierta bajo la luna de caza.'
  },
  'centurion-of-steel': {
    name: 'Centurión de Acero',
    text: 'Cuando entra otro Legionario tuyo: gana +1 de ataque y +1 de vida. Al atacar: gana +1 de ataque.'
  },
  'chancellor-brassmaw': {
    name: 'Canciller Bocabronce',
    text: 'Decreto de Hierro (4): aturdí a un aliado enemigo y hacele 8 de daño de sónico. Al final de cada fase, tu héroe se cura 3.',
    flavor: 'Es dueño de las fábricas, de la ciudad y de casi todos los relojes.',
    ability: { name: 'Decreto de Hierro', text: 'Aturdí a un aliado enemigo y hacele 8 de daño de sónico.' }
  },
  'charm-of-the-vanguard': {
    name: 'Dije de la Vanguardia',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.'
  },
  'chimera-of-the-shieldwall': { name: 'Quimera del Muro de Escudos', text: 'Al morir: tu héroe se cura 8.' },
  'chimera-of-the-sun-temple': {
    name: 'Quimera del Templo del Sol',
    text: 'Al morir: tus otros aliados ganan +1 de ataque. Al empezar cada fase: tu héroe se cura 2.'
  },
  'circlet-of-flame': { name: 'Diadema de Llamas', flavor: 'Bajo ella, las ideas arden más fuerte.' },
  'circlet-of-mana': { name: 'Diadema de Maná', flavor: 'Zumba cuando hay hechizos cerca.' },
  'cleaver-of-the-vanguard': {
    name: 'Cuchilla de la Vanguardia',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'Primera en entrar al combate, primera en salir con trofeos.'
  },
  'cleaver-of-valor': { name: 'Cuchilla del Valor', flavor: 'Coraje afilado hasta el filo.' },
  'clever-chrononaut': {
    name: 'Crononauta Astuto',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
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
  'cloak-of-the-quarry': { name: 'Capa de la Presa', flavor: 'La presa nunca la ve venir.' },
  'clock-of-dusk': { name: 'Reloj del Ocaso', text: 'Al empezar cada fase: tu héroe gana 1 de energía. (3 usos)' },
  'clock-of-embers': { name: 'Reloj de Brasas', text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)' },
  'clockwork-hound-of-coal': {
    name: 'Sabueso Mecánico del Carbón',
    text: 'Al empezar cada fase: tu héroe se cura 2.'
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
  'copper-glider': {
    name: 'Planeador de Cobre',
    text: 'Al entrar: invocá un Dron de Engranajes. Al morir: invocá un Dron de Engranajes.'
  },
  'copper-gyrocopter': { name: 'Girocóptero de Cobre', flavor: 'Casi siempre vuela. A veces aterriza a propósito.' },
  'courage-of-iron': {
    name: 'Coraje de Hierro',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.',
    flavor: 'El hierro no se dobla. Vos tampoco.'
  },
  'courage-of-spirits': {
    name: 'Coraje de los Espíritus',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'Los espíritus susurran: no huyas.'
  },
  'courage-of-the-ancestors': {
    name: 'Coraje de los Ancestros',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.',
    flavor: 'Ellos fueron valientes. Vos también.'
  },
  'courage-of-the-last-stand': {
    name: 'Coraje de la Última Defensa',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'No queda otro lugar adonde ir más que adelante.'
  },
  'courier-of-the-mainframe': {
    name: 'Mensajero del Servidor Central',
    text: 'Al atacar: hacé 3 de daño de sónico al héroe enemigo.'
  },
  'crawler-of-the-grave': {
    name: 'Reptante de la Tumba',
    text: 'Al entrar: sacrificá a tu otro aliado más débil: si lo hacés, robá 2 cartas.'
  },
  'crimson-moon': {
    name: 'Luna Carmesí',
    text: 'Al terminar cada fase: robá una carta. (3 usos)',
    flavor: 'Bajo una luna roja, los secretos sangran solos.'
  },
  'crook-of-the-ancestors': {
    name: 'Báculo de los Ancestros',
    text: 'Al equiparla: hacé 4 de daño de luz a un aliado enemigo al azar.'
  },
  'crystal-cockatrice': {
    name: 'Cocatriz de Cristal',
    text: 'Al entrar: robá una carta. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'crystal-wisp': {
    name: 'Fuego Fatuo de Cristal',
    text: 'Al empezar cada fase: hacé 1 de daño de fuego al héroe enemigo.'
  },
  'cursed-lich': {
    name: 'Liche Maldito',
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida.'
  },
  'cursed-trap': {
    name: 'Trampa Maldita',
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'Quien la armó tampoco sobrevivió.'
  },
  'cutlass-of-the-long-road': { name: 'Alfanje del Largo Camino', flavor: 'Cruzó más fronteras que los mapas.' },
  'cyber-hound-of-the-grid': { name: 'Cibersabueso de la Red', flavor: 'Olfatea los datos como si fueran sangre.' },
  'cyclops-of-rage': {
    name: 'Cíclope de la Ira',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Coloso tuyo.'
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
  'dawns-hope': {
    name: 'Esperanza del Alba',
    text: 'Robá cartas hasta tener tantas como el rival (hasta 3). Si no robás ninguna, tu héroe se cura 6.',
    flavor: 'La hora más oscura es la que llega justo antes de la luz.'
  },
  'decoy-of-the-undercity': {
    name: 'Señuelo de la Ciudad Baja',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 5 de daño de rayo al héroe enemigo.'
  },
  'devout-bell': {
    name: 'Campana Devota',
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'Cada tañido es una promesa cumplida.'
  },
  'devout-fury': {
    name: 'Furia Devota',
    text: 'Un aliado tuyo gana +1 de ataque y +1 de vida.',
    flavor: 'Los fieles pegan más fuerte.'
  },
  'devout-haruspex': { name: 'Arúspice Devoto', text: 'Al entrar: robá el primer Oráculo de tu mazo.' },
  'devout-prayer-staff': {
    name: 'Vara de Plegarias Devota',
    text: 'Al equiparla: tu héroe se cura 7.',
    flavor: 'Fe con una punta pesada.'
  },
  'devout-pythia': { name: 'Pitonisa Devota', text: 'Al entrar: tus aliados se curan 4.' },
  'devout-saddle': { name: 'Montura Devota', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.' },
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
  'doomsayer-of-rot': {
    name: 'Agorero de la Podredumbre',
    text: 'Al morir: hacé 2 de daño de sombra al héroe enemigo.'
  },
  'drake-of-the-tower': { name: 'Draco de la Torre', flavor: 'Custodia la torre y se come a las visitas.' },
  'dreadnought-of-the-workshop': {
    name: 'Acorazado Volador del Taller',
    text: 'Al empezar cada fase: tu héroe se cura 2.'
  },
  'dreaming-fury': {
    name: 'Furia Soñadora',
    text: 'Un aliado tuyo gana +5 de ataque y +7 de vida.',
    flavor: 'Una furia nacida en una pesadilla.'
  },
  'dreaming-pyre': {
    name: 'Pira Soñadora',
    text: 'Quemá un slot enemigo (3).',
    flavor: 'Arde con los colores de los sueños.'
  },
  'dreaming-pythia': {
    name: 'Pitonisa Soñadora',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Oráculo tuyo.'
  },
  'dreaming-seer': { name: 'Vidente Soñadora', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'drone-of-the-datastream': {
    name: 'Dron del Flujo de Datos',
    text: 'Al morir: tus Cíborgs ganan +1 de ataque y +1 de vida. Al atacar: hacé 1 de daño de sónico al héroe enemigo.'
  },
  'dryad-of-the-archmage': { name: 'Dríade del Archimago', text: 'Cuando entra otra Hada tuya: tu héroe se cura 2.' },
  'echo-the-spirit-crow': {
    name: 'Eco, el Cuervo Espiritual',
    text: 'Al morir: un aliado al azar de tu pila de descarte vuelve al juego.'
  },
  'echoes-of-the-pile': {
    name: 'Ecos de la Pila',
    text: 'Robá una carta por cada 3 aliados en tu pila de descarte (hasta 3).',
    flavor: 'Los muertos hablan. Al Vacío le alcanza con escuchar.'
  },
  'eclipse-sigil': {
    name: 'Sello del Eclipse',
    text: 'Al empezar cada fase: hace 2 de daño de sombra a todos los aliados, también a los tuyos. Si no hay aliados, se destruye.',
    flavor: 'Por un momento, ninguna hora es de nadie.',
    ability: { name: 'Devorar el Alba', text: 'Destruye todos los Sellos del Alba en juego.' }
  },
  'electric-glitch': {
    name: 'Glitch Eléctrico',
    text: 'Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'electric-mech': { name: 'Mecha Eléctrico', text: 'Al entrar: tus otros Cíborgs ganan +1 de ataque y +1 de vida.' },
  'elk-of-the-wilds': {
    name: 'Alce de lo Salvaje',
    text: 'Al morir: hacé 7 de daño a un aliado enemigo al azar.',
    flavor: 'Rey del bosque, coronado de astas.'
  },
  'ember-of-the-rift': { name: 'Ascua de la Grieta', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'empowerment-of-the-dawnbell': {
    name: 'Potenciación de la Campana del Alba',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.',
    flavor: 'Suena la campana y vuelve la fuerza.'
  },
  'empowerment-of-the-last-stand': {
    name: 'Potenciación de la Última Defensa',
    text: 'Un aliado tuyo gana +10 de ataque en esta fase. Instantánea.',
    flavor: 'Cuando todo parece perdido, llega la fuerza.'
  },
  'empowerment-of-the-warlord': {
    name: 'Potenciación del Caudillo',
    text: 'Un aliado tuyo gana +2 de ataque y +2 de vida.',
    flavor: 'Su grito vale cien espadas.'
  },
  'enchanted-cryomancer': {
    name: 'Criomante Encantada',
    text: 'Al entrar: hacé 4 de daño de hielo a un aliado enemigo al azar.'
  },
  'enchanted-shot': {
    name: 'Disparo Encantado',
    text: 'Hacé 12 de daño de arcano a un aliado enemigo.',
    flavor: 'La flecha conoce el camino.'
  },
  'enchanted-wyvern': { name: 'Guiverno Encantado', text: 'Al entrar: robá una carta.' },
  'enchantress-of-runes': {
    name: 'Encantadora de las Runas',
    text: 'Al entrar: congelá a un aliado enemigo al azar. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'enchantress-of-the-archmage': {
    name: 'Encantadora del Archimago',
    text: 'Al morir: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'enchantress-of-the-tower': {
    name: 'Encantadora de la Torre',
    text: 'Al entrar: robá una carta.',
    flavor: 'Sus canciones unen piedra y luz de estrellas.'
  },
  'encrypted-mech': { name: 'Mecha Encriptado', text: 'Al entrar: el héroe enemigo pierde 1 de energía.' },
  'encrypted-monolith': {
    name: 'Monolito Encriptado',
    text: 'Al empezar cada fase: hacé 2 de daño de tierra al héroe enemigo. (3 usos)'
  },
  'encrypted-street-samurai': {
    name: 'Samurái Callejero Encriptado',
    text: 'Al morir: robá una carta.',
    flavor: 'Su honor tiene contraseña.'
  },
  'encrypted-thug': { name: 'Matón Encriptado', text: 'Cuando entra otro Sicario tuyo: tu héroe se cura 2.' },
  'endless-plan': {
    name: 'Plan Interminable',
    text: 'Robá una carta.',
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
  'ethereal-basilisk': { name: 'Basilisco Etéreo', flavor: 'Su mirada atraviesa paredes.' },
  'ethereal-beacon': {
    name: 'Faro Etéreo',
    text: 'Al empezar cada fase: hacé 2 de daño de arcano a un aliado enemigo al azar. (4 usos)'
  },
  'ethereal-cockatrice': { name: 'Cocatriz Etérea', flavor: 'A medias presente, peligrosa por completo.' },
  'ethereal-runecarver': { name: 'Tallarrunas Etéreo', text: 'Al entrar: robá el primer Hechicero de tu mazo.' },
  'ethereal-terminal': {
    name: 'Terminal Etérea',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)',
    flavor: 'Se conecta a bibliotecas que ya no existen.'
  },
  'experimental-aeronaut': { name: 'Aeronauta Experimental', text: 'Al entrar: invocá un Dron de Engranajes.' },
  'faithful-amulet': { name: 'Amuleto Fiel', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +3 de vida.' },
  'faithful-bomb': {
    name: 'Bomba Fiel',
    text: 'Hacé 4 de daño a un slot enemigo.',
    flavor: 'Nunca le falló a su dueño. Todavía.'
  },
  'faithful-cartographer': { name: 'Cartógrafa Fiel', flavor: 'Dibuja los caminos que todavía no existen.' },
  'faithful-moment': {
    name: 'Instante Fiel',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.',
    flavor: 'Un segundo, guardado para siempre.'
  },
  'faithful-wanderer': { name: 'Vagabundo Fiel', flavor: 'Perdido en el tiempo, nunca en su propósito.' },
  'fang-the-sabertooth': {
    name: 'Colmillo, el Dientes de Sable',
    flavor: 'La amiga más vieja de Kora, y la más filosa.'
  },
  'feral-healer': { name: 'Curandera Salvaje', text: 'Al atacar: tu héroe se cura 3.' },
  'firedrake-of-the-arcanum': {
    name: 'Draco de Fuego del Arcano',
    text: 'Al entrar: congelá a un aliado enemigo al azar.'
  },
  'firedrake-of-the-moon': {
    name: 'Draco de Fuego de la Luna',
    text: 'Cuando entra otro Draco tuyo: gana +1 de ataque y +1 de vida.'
  },
  'firedrake-of-the-tower': {
    name: 'Draco de Fuego de la Torre',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Draco tuyo.'
  },
  'fixer-of-the-datastream': {
    name: 'Intermediaria del Flujo de Datos',
    text: 'Al atacar: hacé 3 de daño de sónico al héroe enemigo.'
  },
  'fixer-of-the-mainframe': {
    name: 'Intermediaria del Servidor Central',
    text: 'Al entrar: tus otros Sicarios ganan +2 de ataque y +2 de vida. Al morir: robá una carta.'
  },
  'fixer-of-the-undercity': {
    name: 'Intermediaria de la Ciudad Baja',
    text: 'Al morir: tus Sicarios ganan +1 de ataque y +1 de vida. Al entrar: robá una carta.'
  },
  'flail-of-the-vanguard': { name: 'Mangual de la Vanguardia', flavor: 'Cadenas, púas y buenas intenciones.' },
  'flask-of-dawn': {
    name: 'Frasco del Alba',
    text: 'Robá el primer Elemental de tu mazo y robá el primer Elemental de tu mazo.'
  },
  'flask-of-dusk': {
    name: 'Frasco del Ocaso',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.',
    flavor: 'Sabe al final de un día largo.'
  },
  'flask-of-the-wanderer': {
    name: 'Frasco del Errante',
    text: 'Tu héroe se cura 13 y robá una carta.',
    flavor: 'Nunca vacía, nunca la misma bebida dos veces.'
  },
  'flickering-bolt': {
    name: 'Rayo Titilante',
    text: 'Hacé 4 de daño de arcano a un slot enemigo. Rápida.',
    flavor: 'Se apaga, se prende, y atraviesa.'
  },
  'flickering-daze': {
    name: 'Aturdimiento Titilante',
    text: 'Congelá a un aliado enemigo y hacé 2 de daño de hielo al héroe enemigo.'
  },
  'flickering-frost-wyrm': { name: 'Sierpe de Escarcha Titilante', flavor: 'Parpadea entre inviernos.' },
  'flickering-mantle': { name: 'Manto Titilante', flavor: 'Ahora lo ves, ahora fallás.' },
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
  'foreman-of-gears': {
    name: 'Capataz de Engranajes',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad.',
    flavor: 'Las máquinas trabajan más cuando él grita.'
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
  'forsaken-zombie': { name: 'Zombi Abandonado', flavor: 'Nadie volvió por él, así que él volvió por ellos.' },
  'frost-of-grace': {
    name: 'Escarcha de la Gracia',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Un frío suave que calma la fiebre de la guerra.'
  },
  'frost-of-ruin': {
    name: 'Escarcha de la Ruina',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
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
    text: 'Aturdí a un aliado enemigo por dos fases. Rápida.',
    flavor: 'Vio venir el invierno y lo mandó adelante.'
  },
  'frost-of-the-pack': {
    name: 'Escarcha de la Jauría',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
    flavor: 'Los lobos corren más rápido sobre suelo helado.'
  },
  'frozen-bolt': {
    name: 'Rayo Helado',
    text: 'Hacé 11 de daño de hielo a un slot enemigo.',
    flavor: 'Detiene al blanco, y después al corazón.'
  },
  'frozen-wand': { name: 'Varita Helada', flavor: 'Apuntala al verano y miralo terminar.' },
  'frozen-ward': { name: 'Guarda Helada', flavor: 'Tan fría que frena una espada en el aire.' },
  'furious-banner': {
    name: 'Estandarte Furioso',
    text: 'Al empezar cada fase: hacé 2 de daño al héroe enemigo. (3 usos)'
  },
  'furious-chrononaut': {
    name: 'Crononauta Furioso',
    text: 'Al morir: tu héroe se cura 3.',
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
    text: 'Invocá un Familiar Arcano.',
    flavor: 'Toda tormenta empieza con una chispa.'
  },
  'gentle-balm': {
    name: 'Bálsamo Gentil',
    text: 'Tu héroe se cura 16 y robá una carta.',
    flavor: 'Para rodillas raspadas y corazones rotos.'
  },
  'gentle-banner': { name: 'Estandarte Gentil', text: 'Cuando entra un Oráculo tuyo: gana +1 de ataque y +2 de vida.' },
  'gentle-bard': { name: 'Bardo Gentil', flavor: 'Sus canciones curan lo que las espadas no.' },
  'gentle-return': {
    name: 'Regreso Gentil',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'gentle-ward': {
    name: 'Guarda Gentil',
    text: 'Cuando ataca un aliado enemigo: hacele 7 de daño de luz.',
    flavor: 'Suaviza cada golpe.'
  },
  'ghost-of-the-mainframe': {
    name: 'Fantasma Digital del Servidor Central',
    text: 'Al entrar: robá una carta.',
    flavor: 'Vive donde el código se olvidó de mirar.'
  },
  'ghoul-of-mercy': { name: 'Necrófago de la Misericordia', flavor: 'Solo come lo que ya está perdido.' },
  'gideons-hammer': {
    name: 'Martillo de Gideon',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'A vapor y con opiniones propias.'
  },
  'gleaming-wyvern': {
    name: 'Guiverno Reluciente',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Draco tuyo. Al morir: hacé 4 de daño de arcano a un aliado enemigo al azar.'
  },
  'glitched-glitch': { name: 'Glitch Corrupto', text: 'Al atacar: hacé 2 de daño de rayo al héroe enemigo.' },
  'glitched-plan': {
    name: 'Plan Corrupto',
    text: 'Robá una carta y tu héroe se cura 3.',
    flavor: 'En la simulación funcionaba.'
  },
  'glyptodon-of-the-volcano': {
    name: 'Gliptodonte del Volcán',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Una fortaleza ambulante con el corazón caliente.'
  },
  'gorraks-cave-bear': {
    name: 'Oso Cavernario de Gorrak',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2. Al empezar cada fase: gana +1 de ataque y +1 de vida.'
  },
  'gorraks-recurve-bow': {
    name: 'Arco Recurvo de Gorrak',
    text: 'Al equiparla: hacé 4 de daño de tierra a un aliado enemigo al azar.'
  },
  'grave-hound-of-grace': { name: 'Sabueso de Tumba de la Gracia', flavor: 'Cuida a los muertos para que descansen.' },
  'griffin-of-the-last-stand': {
    name: 'Grifo de la Última Defensa',
    text: 'Al entrar: robá el primer Coloso de tu mazo. Al atacar: gana +1 de ataque.'
  },
  'grim-shot': {
    name: 'Disparo Sombrío',
    text: 'Hacé 2 de daño de sombra a un slot enemigo, +2 por cada Horror tuyo.'
  },
  'grim-skeleton': {
    name: 'Esqueleto Sombrío',
    text: 'Al atacar: tu héroe se cura 3.',
    flavor: 'No sonríe. Solo lo parece.'
  },
  'guard-of-the-ancestors': {
    name: 'Guardia de los Ancestros',
    text: 'Tu armadura gana +4 de durabilidad y tu héroe se cura 8. Robá una carta.',
    flavor: 'Los muertos montan guardia por los vivos.'
  },
  'guard-of-the-warlord': {
    name: 'Guardia del Caudillo',
    text: 'Tu arma y tu armadura ganan +2 de durabilidad cada una. Robá una carta.',
    flavor: 'Nadie toca a la gente del señor de la guerra.'
  },
  'guardian-spirit': { name: 'Espíritu Guardián', flavor: 'Protege a quienes no pueden protegerse.' },
  'halberd-of-valor': {
    name: 'Alabarda del Valor',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Largo alcance, leyenda más larga.'
  },
  'hallowed-battle-cry': {
    name: 'Grito de Guerra Consagrado',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.',
    flavor: 'La oyen los vivos y los muertos.'
  },
  'hallowed-deserter': { name: 'Desertor Consagrado', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'hallowed-dream-reader': { name: 'Lectora de Sueños Consagrada', text: 'Al entrar: tu héroe se cura 7.' },
  'hallowed-revenant': {
    name: 'Aparecido Consagrado',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada No-muerto tuyo.'
  },
  'harpoon-of-the-ambush': {
    name: 'Arpón de la Emboscada',
    flavor: 'Lanzado desde los juncos, sentido en los huesos.'
  },
  'harpoon-of-the-quarry': {
    name: 'Arpón de la Presa',
    text: 'Al equiparla: hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Con púas para la presa más grande.'
  },
  'hatchet-of-dawn': { name: 'Hachuela del Alba', flavor: 'Corta las últimas sombras de la noche.' },
  'healing-amulet': { name: 'Amuleto Sanador', flavor: 'Tibio al tacto, incluso en invierno.' },
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
  'hex-of-dawn': {
    name: 'Maleficio del Alba',
    text: 'Adjuntala a un aliado enemigo: tiene -3 de ataque.',
    flavor: 'Una maldición que solo funciona de día.'
  },
  'hex-of-lightning': {
    name: 'Maleficio del Relámpago',
    text: 'Aturdí a un aliado enemigo. Rápida.',
    flavor: 'Maldecí al cielo y te maldice de vuelta.'
  },
  'hex-of-runes': {
    name: 'Maleficio de las Runas',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'hex-of-steel': {
    name: 'Maleficio de Acero',
    text: 'Congelá a un aliado enemigo y hacé 2 de daño de arcano al héroe enemigo.'
  },
  'hex-of-the-enchanted-wood': {
    name: 'Maleficio del Bosque Encantado',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Los árboles recuerdan quién los taló.'
  },
  'hex-of-the-hunt': {
    name: 'Maleficio de la Cacería',
    text: 'Congelá a un aliado enemigo y hacé 3 de daño de arcano al héroe enemigo.'
  },
  'hex-of-the-oracle': {
    name: 'Maleficio del Oráculo',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.',
    flavor: 'Ella vio tu debilidad hace mucho.'
  },
  'hex-of-thorns': {
    name: 'Maleficio de Espinas',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Cada paso cuesta un poco de sangre.'
  },
  'hollow-vision': { name: 'Visión Hueca', text: 'Robá 2 cartas.', flavor: 'Muestra lo que falta.' },
  'hollow-void-spawn': {
    name: 'Engendro del Vacío Hueco',
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 6.' }
  },
  'holo-decoy': { name: 'Señuelo Holográfico', flavor: 'Dispárenle. No le molesta.' },
  'holo-mech': { name: 'Mecha Holográfico', text: 'Al atacar: hacé 3 de daño de sónico al héroe enemigo.' },
  'holo-secret': {
    name: 'Secreto Holográfico',
    text: 'Robá 2 cartas.',
    flavor: 'Encriptado dos veces, susurrado una.'
  },
  'hoplite-conscript': { name: 'Conscripto Hoplita', flavor: 'Ayer campesino. Hoy, un muro.' },
  'hostile-takeover': {
    name: 'Adquisición Hostil',
    text: 'Cuando el rival invoca un aliado: aturdilo y robá 2 cartas.',
    flavor: 'Leé la letra chica. La escribió él.'
  },
  'hourglass-of-ice': {
    name: 'Reloj de Arena de Hielo',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.',
    flavor: 'El tiempo se congela, grano por grano.'
  },
  'hourglass-of-storms': {
    name: 'Reloj de Arena de Tormentas',
    text: 'Tu héroe gana 1 de energía. Instantánea.',
    flavor: 'Su arena está hecha de rayos.'
  },
  'hourglass-shard-of-borrowed-hours': {
    name: 'Esquirla de Reloj de las Horas Prestadas',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.',
    flavor: 'Una astilla de tiempo, filosa en las dos puntas.'
  },
  'hungry-banner': {
    name: 'Estandarte Hambriento',
    text: 'Al empezar cada fase: hacé 3 de daño de hielo a un aliado enemigo al azar. (3 usos)'
  },
  'hungry-blessing': {
    name: 'Bendición Hambrienta',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.'
  },
  'hungry-cave-painter': {
    name: 'Pintora de Cuevas Hambrienta',
    text: 'Cuando entra otro Cavernario tuyo: gana +1 de ataque y +1 de vida.'
  },
  'hydra-of-the-senate': { name: 'Hidra del Senado', text: 'Al entrar: tu héroe se cura 5.' },
  'ilyra-starweaver': {
    name: 'Ilyra Starweaver',
    text: 'Rayos Gemelos (3): hacé 7 de daño de arcano a 2 slots enemigos distintos.',
    flavor: 'Lee el futuro en las constelaciones, y después lo reescribe.',
    ability: { name: 'Rayos Gemelos', text: 'Hacé 7 de daño de arcano a 2 slots enemigos distintos.' }
  },
  'ilyras-slash': { name: 'Tajo de Ilyra', text: 'Hacé 10 de daño de arcano a un slot enemigo y robá una carta.' },
  'imperial-charioteer': {
    name: 'Auriga Imperial',
    text: 'Al morir: tus Legionarios ganan +1 de ataque y +1 de vida.'
  },
  'imperial-haruspex': { name: 'Arúspice Imperial', text: 'Al atacar: tu héroe se cura 2.' },
  'imperial-horn': {
    name: 'Cuerno Imperial',
    text: 'Invocá un Conscripto Hoplita.',
    flavor: 'Cuando suena, el imperio marcha.'
  },
  'implant-of-spirits': {
    name: 'Implante de los Espíritus',
    text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +5 de vida.'
  },
  'implant-of-the-quarry': {
    name: 'Implante de la Presa',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +2 de vida.'
  },
  'infiltrator-of-midnight': {
    name: 'Infiltradora de Medianoche',
    text: 'Cuando entra otro Hacker tuyo: gana +1 de ataque y +1 de vida.'
  },
  'infiltrator-of-static': {
    name: 'Infiltradora de Estática',
    text: 'Al atacar: hacé 3 de daño de rayo al héroe enemigo.'
  },
  'infiltrator-of-the-ambush': {
    name: 'Infiltradora de la Emboscada',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Para cuando la ves, ya terminó.'
  },
  'infiltrator-of-the-silent-trail': {
    name: 'Infiltradora del Rastro Silencioso',
    text: 'Al morir: hacé 3 de daño a un aliado enemigo al azar.',
    flavor: 'No se mueve una hoja cuando pasa.'
  },
  'insight-of-still-waters': {
    name: 'Revelación de las Aguas Quietas',
    text: 'Robá una carta.',
    flavor: 'El agua quieta muestra el futuro más claro.'
  },
  'insight-of-the-warlord': {
    name: 'Revelación del Caudillo',
    text: 'Robá el primer Legionario de tu mazo y robá el primer Legionario de tu mazo.'
  },
  'iron-gorgon': {
    name: 'Gorgona de Hierro',
    text: 'Al entrar: robá la primera arma de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'iron-mark': {
    name: 'Marca de Hierro',
    text: 'Adjuntala a un aliado enemigo: tiene -2 de ataque.',
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
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'Lanzada por la selva, atrapada por nadie.'
  },
  'kades-cleaver': {
    name: 'Cuchilla de Kade',
    text: 'Al equiparla: tu héroe se cura 5.',
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
    text: 'Al equiparla: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'keen-eyed-blight': {
    name: 'Plaga de Ojo Certero',
    text: 'Envenená a un aliado enemigo (3).',
    flavor: 'La podredumbre encuentra primero el punto débil.'
  },
  'keen-eyed-crossbow': {
    name: 'Ballesta de Ojo Certero',
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'Ve el hueco en cada armadura.'
  },
  'keen-eyed-daze': {
    name: 'Aturdimiento de Ojo Certero',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'keen-eyed-hide': { name: 'Piel Curtida de Ojo Certero', flavor: 'Curtida por un cazador que nunca falló.' },
  'keen-eyed-secret': {
    name: 'Secreto de Ojo Certero',
    text: 'Robá una carta.',
    flavor: 'Los mejores cazadores no dicen nada.'
  },
  'kite-shield-of-iron': { name: 'Escudo Cometa de Hierro', flavor: 'Hierro simple. Simplemente irrompible.' },
  'kite-shield-of-rage': { name: 'Escudo Cometa de la Ira', flavor: 'Golpealo y te devuelve el golpe más fuerte.' },
  'kora-wildfang': {
    name: 'Kora Wildfang',
    text: 'Disparo Explorador (3): hacé 6 de daño de viento a un slot enemigo y robá una carta.',
    flavor: 'La jungla le enseñó una regla: disparar primero.',
    ability: { name: 'Disparo Explorador', text: 'Hacé 6 de daño de viento a un slot enemigo y robá una carta.' }
  },
  'koras-blowgun': {
    name: 'Cerbatana de Kora',
    text: 'Al equiparla: hacé 4 de daño de viento a un aliado enemigo al azar.'
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
    text: 'Hacé 9 de daño de arcano a un slot enemigo.',
    flavor: 'Magia pura, lanzada como una jabalina.'
  },
  'lance-of-runes': {
    name: 'Lanza de las Runas',
    text: 'Hacé 9 de daño de arcano a un aliado enemigo.',
    flavor: 'Cada runa suma un motivo para doler.'
  },
  'lance-of-the-wilds': {
    name: 'Lanza de lo Salvaje',
    text: 'Hacé 11 de daño a un slot enemigo.',
    flavor: 'Tallada en un árbol que alcanzó un rayo.'
  },
  'lantern-of-flame': {
    name: 'Farol de Llamas',
    text: 'Al empezar cada fase: hacé 3 de daño de fuego a un aliado enemigo al azar. (3 usos)'
  },
  'lantern-of-the-foundry': {
    name: 'Farol de la Fundición',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)'
  },
  'lantern-of-the-wanderer': {
    name: 'Farol del Errante',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)'
  },
  'lantern-staff-of-mercy': {
    name: 'Bastón Farol de la Misericordia',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'Su luz encuentra a los perdidos y a los heridos.'
  },
  'lantern-staff-of-renewal': { name: 'Bastón Farol de la Renovación', flavor: 'Su luz recuerda cómo eran las cosas.' },
  'lantern-staff-of-the-dawnbell': {
    name: 'Bastón Farol de la Campana del Alba',
    text: 'Al equiparla: tu héroe se cura 6.',
    flavor: 'Ilumina el camino hacia la mañana.'
  },
  'laureled-dream-reader': {
    name: 'Lectora de Sueños Laureada',
    text: 'Al entrar: robá una carta.',
    flavor: 'Lee los sueños del imperio y corrige los malos.'
  },
  'laureled-sentinel': { name: 'Centinela Laureado', text: 'Al entrar: robá el primer Coloso de tu mazo.' },
  'learned-cryomancer': {
    name: 'Criomante Erudita',
    text: 'Al entrar: hacé 7 de daño de hielo a un aliado enemigo al azar.'
  },
  'learned-mist': { name: 'Neblina Erudita', text: 'Al entrar: quemá a un aliado enemigo al azar (5).' },
  'learned-wyvern': { name: 'Guiverno Erudito', text: 'Cuando entra otro Draco tuyo: gana +1 de ataque y +1 de vida.' },
  'leech-of-lost-time': {
    name: 'Sanguijuela del Tiempo Perdido',
    text: 'Adjuntala a un aliado enemigo: no puede usar su habilidad y tiene -1 de ataque.'
  },
  'leech-of-mercy': {
    name: 'Sanguijuela de la Misericordia',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.',
    flavor: 'Se lleva el dolor. Y un poco más.'
  },
  'leech-of-runes': {
    name: 'Sanguijuela de las Runas',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.',
    flavor: 'Se alimenta de magia, runa por runa.'
  },
  'leech-of-the-quarry': {
    name: 'Sanguijuela de la Presa',
    text: 'Adjuntala a un aliado enemigo: no puede atacar.',
    flavor: 'Bebe mientras corrés.'
  },
  'legate-varro': {
    name: 'Legado Varro',
    text: 'Testudo (4): hasta el final de la próxima fase, tus aliados reciben 2 de daño menos y vos hacés 2 de daño más al héroe y a los aliados enemigos. Instantánea.',
    flavor: 'Aguantó la línea en más siglos de los que puede contar.',
    ability: {
      name: 'Testudo',
      text: 'Hasta el final de la próxima fase, tus aliados reciben 2 de daño menos y vos hacés 2 de daño más al héroe y a los aliados enemigos.'
    }
  },
  'longbow-of-the-hawk': { name: 'Arco Largo del Halcón', flavor: 'Ve más lejos que su arquero.' },
  'longbow-of-the-silent-trail': {
    name: 'Arco Largo del Rastro Silencioso',
    flavor: 'La flecha llega antes que el sonido.'
  },
  'lost-chrononaut': { name: 'Crononauta Perdido', flavor: 'Partió en el año 3000. Todavía no lo encuentra.' },
  'lost-stance': {
    name: 'Postura Perdida',
    text: 'Tu arma y tu armadura ganan +3 de durabilidad cada una. Robá una carta.',
    flavor: 'Fuera del tiempo, nunca fuera de equilibrio.'
  },
  'lost-vision': { name: 'Visión Perdida', text: 'Robá 2 cartas.', flavor: 'Un vistazo a un siglo que nadie vivió.' },
  'loyal-charioteer': { name: 'Auriga Leal', flavor: 'Los caballos confían en él. La legión también.' },
  'loyal-gorgon': {
    name: 'Gorgona Leal',
    text: 'Al entrar: hacé 1 de daño de luz al héroe enemigo por cada Coloso tuyo.'
  },
  'lucky-blessing': {
    name: 'Bendición Afortunada',
    text: 'Tu héroe se cura 12.',
    flavor: 'La suerte es una habilidad, según los afortunados.'
  },
  'lucky-shrine': {
    name: 'Santuario Afortunado',
    text: 'Al empezar cada fase: hacé 4 de daño a un aliado enemigo al azar. (3 usos)'
  },
  'lucky-stasis': {
    name: 'Estasis Afortunada',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'luminous-resurrection': {
    name: 'Resurrección Luminosa',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'luminous-squire': {
    name: 'Escudero Luminoso',
    text: 'Al morir: un aliado al azar de tu pila de descarte vuelve al juego.'
  },
  'machinist-of-brass': {
    name: 'Maquinista de Latón',
    text: 'Al entrar: si tenés otro Inventor, robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'machinist-of-the-foundry': { name: 'Maquinista de la Fundición', flavor: 'Si hace tic tac, ella lo arregla.' },
  'magma-brute-of-mana': { name: 'Bruto de Magma de Maná', text: 'Al empezar cada fase: tu héroe gana 1 de energía.' },
  'magma-brute-of-the-long-road': {
    name: 'Bruto de Magma del Largo Camino',
    text: 'Al morir: tus Elementales ganan +1 de ataque y +1 de vida.'
  },
  'malachar-the-unmade': {
    name: 'Malachar el Deshecho',
    text: 'Plaga del Vacío (4): envenená 5 a cada aliado enemigo. Hasta el final de la próxima fase, tus aliados cuestan 1 Crono menos. Al empezar cada fase, si tu descarte tiene 8 cartas o más, hacé 2 de daño de sombra al héroe enemigo.',
    flavor: 'Se deshizo a sí mismo para ver qué hay más allá del tiempo.',
    ability: {
      name: 'Plaga del Vacío',
      text: 'Envenená 5 a cada aliado enemigo. Hasta el final de la próxima fase, tus aliados cuestan 1 Crono menos.'
    }
  },
  'malachars-blast': {
    name: 'Estallido de Malachar',
    text: 'Hacé 10 de daño de sombra a un slot enemigo y robá una carta.'
  },
  'mammoth-of-the-hunt': {
    name: 'Mamut de la Cacería',
    text: 'Cuando entra otra Fiera tuya: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'mana-bound-mine': {
    name: 'Mina Atada al Maná',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 5 de daño de arcano al héroe enemigo.'
  },
  'mana-bound-pyromancer': {
    name: 'Piromante Atado al Maná',
    text: 'Al entrar: robá la primera habilidad de tu mazo.'
  },
  'manacle-of-the-hawk': {
    name: 'Grillete del Halcón',
    text: 'Adjuntala a un aliado enemigo: cada vez que ataca, recibe 5 de daño de viento.'
  },
  'map-of-the-long-road': {
    name: 'Mapa del Largo Camino',
    text: 'Destruí el arma enemiga. Rápida.',
    flavor: 'Los caminos se mueven. El mapa se mueve con ellos.'
  },
  'map-of-the-wanderer': {
    name: 'Mapa del Errante',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'Siempre señala donde no estás.'
  },
  'marble-fury': {
    name: 'Furia de Mármol',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.',
    flavor: 'Fría como el mármol, dura como un emperador.'
  },
  'maw-the-elder-rex': {
    name: 'Fauces, el Rex Anciano',
    text: 'Al entrar: hacé 6 de daño de tierra a un aliado enemigo al azar.',
    flavor: 'Más viejo que la jungla, y con más hambre.'
  },
  'mending-of-light': {
    name: 'Remedio de la Luz',
    text: 'Tu héroe se cura 9.',
    flavor: 'La luz llena primero las grietas.'
  },
  'mending-of-mercy': {
    name: 'Remedio de la Misericordia',
    text: 'Tu héroe se cura 12.',
    flavor: 'La misericordia también cura a quien la da.'
  },
  'mercenary-of-borrowed-hours': {
    name: 'Mercenario de las Horas Prestadas',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 6 de daño de tiempo a un slot enemigo.' }
  },
  'mercenary-of-the-crossroads': {
    name: 'Mercenario de la Encrucijada',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad.',
    flavor: 'Leal al que pague, en el siglo que sea.'
  },
  'mercenary-of-the-wanderer': {
    name: 'Mercenario del Errante',
    text: 'Al entrar: tu héroe se cura 5. Al empezar cada fase: tu héroe se cura 2.'
  },
  'midnight-chrome-brawler': {
    name: 'Peleador Cromado de Medianoche',
    text: 'Al entrar: el héroe enemigo pierde 1 de energía.'
  },
  'midnight-countermeasure': {
    name: 'Contramedida de Medianoche',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño de sombra al héroe enemigo.'
  },
  'midnight-daze': {
    name: 'Aturdimiento de Medianoche',
    text: 'Aturdí a un aliado enemigo. Rápida.',
    flavor: 'Demasiadas luces, muy poco tiempo.'
  },
  'midnight-insignia': {
    name: 'Insignia de Medianoche',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.'
  },
  'midnight-mech': { name: 'Mecha de Medianoche', text: 'Al entrar: robá el primer Cíborg de tu mazo.' },
  'might-of-iron': {
    name: 'Fuerza de Hierro',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'Fuerza forjada, no heredada.'
  },
  'might-of-light': {
    name: 'Fuerza de la Luz',
    text: 'Tus Hadas ganan +2 de ataque y +3 de vida.',
    flavor: 'Hasta las sombras se corren.'
  },
  'might-of-lost-time': {
    name: 'Fuerza del Tiempo Perdido',
    text: 'Un aliado tuyo gana +12 de ataque en esta fase. Instantánea.',
    flavor: 'Poder prestado de héroes olvidados.'
  },
  'might-of-the-long-road': {
    name: 'Fuerza del Largo Camino',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.',
    flavor: 'Cada milla recorrida fortalece el brazo.'
  },
  'might-of-the-tar-pits': {
    name: 'Fuerza de los Pozos de Brea',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.',
    flavor: 'Fuerza de la tierra negra y profunda.'
  },
  'might-of-the-vanguard': {
    name: 'Fuerza de la Vanguardia',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.',
    flavor: 'La primera línea es donde empiezan las leyendas.'
  },
  'might-of-the-warlord': {
    name: 'Fuerza del Caudillo',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'Su fuerza fluye a cada soldado.'
  },
  'might-of-valor': {
    name: 'Fuerza del Valor',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'Los corazones valientes golpean más fuerte.'
  },
  'moonlit-basilisk': {
    name: 'Basilisco Lunar',
    text: 'Al morir: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'moonlit-battlemage': {
    name: 'Mago de Batalla Lunar',
    text: 'Cuando entra otro Hechicero tuyo: tu héroe se cura 2.'
  },
  'moonlit-wisp': { name: 'Fuego Fatuo Lunar', text: 'Al entrar: robá una carta.' },
  'morgrath-lich-abbot': {
    name: 'Morgrath, el Abad Liche',
    text: 'Alzamiento Impío (4): el aliado de más arriba de tu descarte vuelve al juego. Al empezar cada fase, hacé 3 de daño de sombra a un aliado enemigo al azar.',
    flavor: 'Rezó por la vida eterna. Algo le contestó.',
    ability: { name: 'Alzamiento Impío', text: 'El aliado de más arriba de tu descarte vuelve al juego.' }
  },
  'morgraths-blast': {
    name: 'Estallido de Morgrath',
    text: 'Hacé 10 de daño de sombra a un slot enemigo y robá una carta.'
  },
  'morgraths-satyr': {
    name: 'Sátiro de Morgrath',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otra Hada tuya. Al morir: hacé 6 de daño de sombra a un aliado enemigo al azar.'
  },
  'nameless-saddle': {
    name: 'Montura Sin Nombre',
    text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +3 de vida.'
  },
  'neon-mech': { name: 'Mecha de Neón', text: 'Al atacar: hacé 2 de daño de rayo al héroe enemigo.' },
  'neon-thug': { name: 'Matón de Neón', flavor: 'Se vence el alquiler. Y tus dientes también.' },
  'net-of-ice': {
    name: 'Red de Hielo',
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'Atrapa y conserva.'
  },
  'net-of-the-pack': {
    name: 'Red de la Jauría',
    text: 'Cuando el rival invoca un aliado: hacele 11 de daño.',
    flavor: 'La jauría empuja, la red atrapa.'
  },
  'net-of-the-quarry': {
    name: 'Red de la Presa',
    text: 'Cuando el rival invoca un aliado: hacele 5 de daño.',
    flavor: 'Lo que cae, se queda.'
  },
  'net-of-the-volcano': {
    name: 'Red del Volcán',
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'Tejida con lava y paciencia.'
  },
  'netrunner-of-the-grid': {
    name: 'Corredora de Red de la Red',
    text: 'Al entrar: tus otros Hackers ganan +1 de ataque y +1 de vida.'
  },
  'netrunner-of-the-pack': {
    name: 'Corredora de Red de la Jauría',
    flavor: 'Caza en paquetes de datos, no en manadas.'
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
    text: 'Al empezar cada fase: hacé 2 de daño de sombra al héroe enemigo. (3 usos)'
  },
  'nocturnal-shot': {
    name: 'Disparo Nocturno',
    text: 'Hacé 5 de daño de sombra a un slot enemigo, +2 por cada Errante tuyo.'
  },
  'nocturnal-vest': {
    name: 'Chaleco Nocturno',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Más oscuro que la noche en la que se esconde.'
  },
  'nymph-of-grace': { name: 'Ninfa de la Gracia', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'nymph-of-the-ancestors': { name: 'Ninfa de los Ancestros', text: 'Al morir: invocá un Espíritu Guardián.' },
  'nymph-of-the-tower': { name: 'Ninfa de la Torre', flavor: 'Le canta al musgo de las piedras viejas.' },
  'nysas-bow': { name: 'Arco de Nysa', text: 'Al equiparla: hacé 4 de daño de viento a un aliado enemigo al azar.' },
  'nyx-hollowsong': {
    name: 'Nyx Hollowsong',
    text: 'Debilitación Total (5): todos los aliados enemigos tienen -2 de ataque. Al final de cada fase, tu héroe se cura 2.',
    flavor: 'Su canto llega a los muertos. Siempre vuelven a escuchar.',
    ability: { name: 'Debilitación Total', text: 'Todos los aliados enemigos tienen -2 de ataque.' }
  },
  'nyxs-idol': { name: 'Ídolo de Nyx', text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.' },

  'obelisk-of-flame': {
    name: 'Obelisco de Llamas',
    text: 'Al empezar cada fase: hacé 2 de daño de fuego al héroe enemigo. (3 usos)'
  },
  'obelisk-of-the-grave': {
    name: 'Obelisco de la Tumba',
    text: 'Al empezar cada fase: tu héroe se cura 3. (4 usos)'
  },
  'oiled-clockmaker': { name: 'Relojero Aceitado', text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2.' },
  'oiled-monolith': {
    name: 'Monolito Aceitado',
    text: 'Cuando entra un Autómata tuyo: gana +1 de ataque y +2 de vida.'
  },
  'old-blessing': {
    name: 'Bendición Vieja',
    text: 'Tu héroe se cura 13 y robá una carta.',
    flavor: 'Más vieja que los dioses que la dieron.'
  },
  'old-cartographer': {
    name: 'Cartógrafa Vieja',
    text: 'Al morir: invocá una Chispa de la Grieta.',
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
    text: 'Al entrar: tus aliados se curan 3.',
    flavor: 'El compañero más viejo de Ooma, y el más pesado.'
  },
  'omnigears-gyrocopter': {
    name: 'Girocóptero de Omnigear',
    text: 'Al entrar: tus otras Aeronaves ganan +2 de ataque y +2 de vida. Al empezar cada fase: tu héroe se cura 2.'
  },
  'omnigears-hammer': {
    name: 'Martillo de Omnigear',
    text: 'Al equiparla: tu héroe se cura 5.',
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
    text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.'
  },
  'orb-of-flame': {
    name: 'Orbe de Llamas',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Un pequeño sol que obedece.'
  },
  'orb-of-storms': {
    name: 'Orbe de Tormentas',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Una tormenta en un frasco, sin el frasco.'
  },
  'overclocked-piston-titan': {
    name: 'Titán de Pistones Acelerado',
    text: 'Al empezar cada fase: tu héroe se cura 2.'
  },
  'overdriven-sentry-bot': {
    name: 'Robot Centinela Sobrecargado',
    text: 'Al terminar cada fase: hacé 1 de daño de sónico al héroe enemigo.'
  },
  'pale-voidcaller': { name: 'Invocadora del Vacío Pálida', flavor: 'Cuando habla, la oscuridad responde.' },
  'pale-zealot': {
    name: 'Fanática Pálida',
    text: 'Al entrar: robá el primer Cultista de tu mazo. Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'panopticon-feed': {
    name: 'Señal del Panóptico',
    text: 'Robá 2 cartas y aturdí a un aliado enemigo al azar.',
    flavor: 'Sonreí. Siempre estás en cámara.'
  },
  'patchwork-armor-of-lost-time': {
    name: 'Armadura de Retazos del Tiempo Perdido',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Una placa romana, una manga samurái, una hebilla del futuro.'
  },
  'patented-tick': {
    name: 'Tic Patentado',
    text: 'Tu héroe gana 3 de energía. Instantánea.',
    flavor: 'Patente en trámite desde 1887.'
  },
  'patented-tripwire': {
    name: 'Cable Trampa Patentado',
    text: 'Cuando el rival invoca un aliado: hacele 7 de daño.',
    flavor: 'Modelo 7. Los modelos 1 al 6 atraparon a sus inventores.'
  },
  'patient-bard': {
    name: 'Bardo Paciente',
    text: 'Al entrar: robá la primera trampa de tu mazo.',
    flavor: 'Espera el momento perfecto para cantar.'
  },
  'patient-sabertooth': {
    name: 'Dientes de Sable Paciente',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable. Al morir: hacé 8 de daño a un aliado enemigo al azar.'
  },
  'patient-sabotage': {
    name: 'Sabotaje Paciente',
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Rápida.'
  },
  'patient-vest': { name: 'Chaleco Paciente', flavor: 'Espera, igual que quien lo lleva.' },
  'pegasus-of-still-waters': {
    name: 'Pegaso de las Aguas Quietas',
    flavor: 'Solo bebe de lagos que reflejan las estrellas.'
  },
  'pegasus-of-the-tower': { name: 'Pegaso de la Torre', text: 'Al entrar: robá la primera Hada de tu mazo.' },
  'phalanx-of-bronze': { name: 'Falange de Bronce', flavor: 'Un escudo es un muro. Doce son un imperio.' },
  'phalanx-of-steel': { name: 'Falange de Acero', text: 'Al entrar: si tenés otro Legionario, robá una carta.' },
  'phalanx-of-the-legion': {
    name: 'Falange de la Legión',
    text: 'Al entrar: tu héroe se cura 9.',
    flavor: 'La columna de la legión, el muro del enemigo.'
  },
  'phalanx-of-the-warlord': {
    name: 'Falange del Caudillo',
    text: 'Al atacar: gana +1 de ataque.',
    flavor: 'Se mueven como uno y no cae ninguno.'
  },
  'pickaxe-of-borrowed-hours': {
    name: 'Pico de las Horas Prestadas',
    text: 'Al equiparla: tu héroe se cura 4.',
    flavor: 'Cava a través del tiempo en lugar de la piedra.'
  },
  'pickaxe-of-lost-time': {
    name: 'Pico del Tiempo Perdido',
    text: 'Al equiparla: tu héroe se cura 6.',
    flavor: 'Extrae las horas que nadie usa.'
  },
  'pilgrim-of-dawn': { name: 'Peregrina del Alba', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'pilgrim-of-dusk': { name: 'Peregrina del Ocaso', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
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
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'El fondo está más lejos de lo que parece.'
  },
  'pit-of-spirits': {
    name: 'Foso de los Espíritus',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 5 de daño de luz al héroe enemigo.'
  },
  'pixie-of-spirits': {
    name: 'Hadita de los Espíritus',
    text: 'Al entrar: hacé 1 de daño de luz al héroe enemigo por cada Hada tuya.'
  },
  'pixie-of-the-ancestors': {
    name: 'Hadita de los Ancestros',
    text: 'Al morir: un aliado al azar de tu pila de descarte vuelve al juego.'
  },
  'plate-of-rage': { name: 'Coraza de la Ira', flavor: 'La furia es el mejor remache.' },
  'plate-of-steel': { name: 'Coraza de Acero', flavor: 'Acero viejo, promesas más viejas.' },
  'plate-of-the-last-stand': {
    name: 'Coraza de la Última Defensa',
    text: 'Al equiparla: robá una carta.',
    flavor: 'La usan los que no van a dar un paso atrás.'
  },
  'plating-of-mana': { name: 'Blindaje de Maná', text: 'Adjuntala a un aliado tuyo: gana +3 de ataque y +5 de vida.' },
  'praetor-sabina': {
    name: 'Pretora Sabina',
    text: 'Al entrar: tus otros aliados ganan +2 de ataque.',
    flavor: 'Leal a la corona, la lleve quien la lleve.'
  },
  'precise-clockmaker': {
    name: 'Relojero Preciso',
    text: 'Al entrar: ganás 1 Cronos en esta fase.',
    flavor: 'Nunca llega tarde. No lo permite.'
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
  'queen-static': {
    name: 'Reina Estática',
    text: 'Interferencia (4): al terminar esta fase, el rival descarta 2 cartas al azar. Al final de cada fase, hacé 2 de daño de rayo al héroe enemigo.',
    flavor: 'Vive en el ruido entre los canales.',
    ability: { name: 'Interferencia', text: 'Al terminar esta fase, el rival descarta 2 cartas al azar.' }
  },
  'queen-statics-blowgun': {
    name: 'Cerbatana de la Reina Estática',
    text: 'Al equiparla: hacé 4 de daño de rayo a un aliado enemigo al azar.'
  },
  'queen-statics-gunslinger': {
    name: 'Pistolera de la Reina Estática',
    text: 'Al morir: tus Sicarios ganan +1 de ataque y +1 de vida. Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'radiant-fury': {
    name: 'Furia Radiante',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'La ira sagrada brilla fuerte.'
  },
  'radiant-halo': { name: 'Halo Radiante', flavor: 'Una luz que se niega a apagarse.' },
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
  'radiant-zombie': { name: 'Zombi Radiante', flavor: 'Bendecido por error.' },
  'rally-of-grace': {
    name: 'Arenga de la Gracia',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.',
    flavor: 'Reúnanse en la luz.'
  },
  'rally-of-light': {
    name: 'Arenga de la Luz',
    text: 'Un aliado tuyo gana +10 de ataque en esta fase. Instantánea.',
    flavor: 'Reúnanse, hijos del alba.'
  },
  'rally-of-lost-time': {
    name: 'Arenga del Tiempo Perdido',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'Soldados de todas las eras responden al llamado.'
  },
  'rally-of-steel': {
    name: 'Arenga de Acero',
    text: 'Tus Colosos ganan +1 de ataque y +2 de vida.',
    flavor: 'Alcen las espadas. Alcen la voz.'
  },
  'rally-of-the-arcanum': {
    name: 'Arenga del Arcano',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.',
    flavor: '¡Magos a la torre! ¡Traigan sus libros!'
  },
  'rally-of-the-hawk': {
    name: 'Arenga del Halcón',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida. Instantánea.',
    flavor: 'El halcón vuela en círculos. Los cazadores se reúnen.'
  },
  'rally-of-the-hunt-moon': {
    name: 'Arenga de la Luna de Caza',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.',
    flavor: 'Bajo la luna de caza, la tribu es una.'
  },
  'rally-of-the-labyrinth': {
    name: 'Arenga del Laberinto',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'Perdidos en el laberinto, reencontrados en la pelea.'
  },
  'rally-of-the-volcano': {
    name: 'Arenga del Volcán',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'La montaña ruge y la tribu responde.'
  },
  'rally-of-valor': {
    name: 'Arenga del Valor',
    text: 'Un aliado tuyo gana +1 de ataque y +1 de vida.',
    flavor: 'El valor es contagioso.'
  },
  'raptor-hatchling': { name: 'Cría de Raptor', flavor: 'Nació con hambre.' },
  'recruit-of-the-warlord': { name: 'Recluta del Caudillo', text: 'Al entrar: robá la primera arma de tu mazo.' },
  'relentless-fury': {
    name: 'Furia Implacable',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.',
    flavor: 'No se detiene. No se cansa.'
  },
  'relentless-hitman': { name: 'Asesino a Sueldo Implacable', flavor: 'Nunca falla un plazo.' },
  'relentless-rune': { name: 'Runa Implacable', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.' },
  'relic-of-the-ancestors': {
    name: 'Reliquia de los Ancestros',
    text: 'Al empezar cada fase: hacé 2 de daño de luz a un aliado enemigo al azar.'
  },
  'respite-of-mercy': {
    name: 'Respiro de la Misericordia',
    text: 'Tu héroe se cura 9.',
    flavor: 'Un respiro entre batallas es un regalo.'
  },
  'respite-of-renewal': {
    name: 'Respiro de la Renovación',
    text: 'Tu héroe se cura 9.',
    flavor: 'Descansá. La guerra puede esperar.'
  },
  'respite-of-the-crossroads': {
    name: 'Respiro de la Encrucijada',
    text: 'Tu héroe se cura 6.',
    flavor: 'Todos los caminos terminan en una fogata.'
  },
  'restless-banner': {
    name: 'Estandarte Inquieto',
    text: 'Al empezar cada fase: hacé 3 de daño a un aliado enemigo al azar. (3 usos)'
  },
  'restless-deserter': {
    name: 'Desertor Inquieto',
    text: 'Al entrar: robá una carta.',
    flavor: 'Él dejó la guerra. La guerra no lo dejó a él.'
  },
  'restless-icicle': { name: 'Carámbano Inquieto', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'restless-ration': {
    name: 'Ración Inquieta',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.',
    flavor: 'Comida del futuro. Sabe a pasado.'
  },
  'restless-wanderer': {
    name: 'Vagabundo Inquieto',
    text: 'Al empezar cada fase: tu héroe se cura 2.',
    flavor: 'Dormir es para los que tienen un solo siglo.'
  },
  'rift-spark': { name: 'Chispa de la Grieta', flavor: 'Un pedacito de la Grieta, muy vivo.' },
  'rift-touched-idol': {
    name: 'Ídolo Tocado por la Grieta',
    text: 'Al empezar cada fase: tu héroe se cura 4. (3 usos)',
    flavor: 'Venerado en siete eras a la vez.'
  },
  'rift-touched-squire': {
    name: 'Escudero Tocado por la Grieta',
    text: 'Al morir: robá una carta.',
    flavor: 'Sirve a un caballero de otro siglo.'
  },
  'rift-touched-wanderer': {
    name: 'Vagabundo Tocado por la Grieta',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'risen-skeleton': { name: 'Esqueleto Alzado', flavor: 'La muerte fue solo una siesta larga.' },
  'ritualist-of-ash': {
    name: 'Ritualista de Ceniza',
    text: 'Al entrar: sacrificá a tu otro aliado más débil: si lo hacés, robá 2 cartas.'
  },
  'riveted-blessing': {
    name: 'Bendición Remachada',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.'
  },
  'riveted-tick': {
    name: 'Tic Remachado',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.',
    flavor: 'Cada remache, un segundo ganado.'
  },
  'rod-of-ruin': {
    name: 'Vara de la Ruina',
    text: 'Al equiparla: tu héroe se cura 7.',
    flavor: 'Todo lo que toca envejece.'
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
    name: 'Maza de Ryn',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'Chisporrotea con cada golpe.'
  },
  'sabertooth-cub': { name: 'Cachorro de Dientes de Sable', flavor: 'Colmillos chicos, planes grandes.' },
  'salve-of-the-wanderer': {
    name: 'Ungüento del Errante',
    text: 'Tu héroe se cura 6.',
    flavor: 'Huele a cinco siglos de hierbas.'
  },
  'sandstorm-of-dawn': { name: 'Tormenta de Arena del Alba', text: 'Al entrar: tu héroe se cura 7.' },
  'satyr-of-embers': { name: 'Sátiro de Brasas', text: 'Al entrar: tus otras Hadas ganan +2 de ataque y +2 de vida.' },
  'satyr-of-renewal': { name: 'Sátiro de la Renovación', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'scarred-cave-painter': {
    name: 'Pintora de Cuevas Marcada',
    text: 'Al entrar: tus otros Cavernarios ganan +1 de ataque y +1 de vida.'
  },
  'scarred-raptor': { name: 'Raptor Marcado', flavor: 'Cada cicatriz le enseñó un truco nuevo.' },
  'scarred-spearman': { name: 'Lancero Marcado', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'scavenger-of-borrowed-hours': {
    name: 'Carroñera de las Horas Prestadas',
    text: 'Al entrar: destruí el artefacto enemigo más caro. Al morir: robá una carta.'
  },
  'scavenger-of-storms': {
    name: 'Carroñera de Tormentas',
    text: 'Al entrar: hacé 4 de daño de rayo a un aliado enemigo al azar.'
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
    text: 'Al equiparla: robá una carta.',
    flavor: 'Agitalo y el mundo se calienta.'
  },
  'scepter-of-storms': { name: 'Cetro de Tormentas', flavor: 'El cielo lo obedece, casi siempre.' },
  'scholarly-daze': {
    name: 'Aturdimiento Docto',
    text: 'Aturdí a un aliado enemigo. Rápida.',
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
  'scholarly-stasis': {
    name: 'Estasis Docta',
    text: 'Congelá a un aliado enemigo y hacé 2 de daño de tiempo al héroe enemigo.'
  },
  'scrap-down': {
    name: 'Desguace',
    text: 'Destruí tu artefacto más caro: robá 2 cartas, o 3 si costaba 4 o más.',
    flavor: 'En el taller nada se tira. Mucho menos un buen engranaje.'
  },
  'scrap-plate-of-the-rift': {
    name: 'Coraza de Chatarra de la Grieta',
    flavor: 'Piezas de doce siglos, unidas por la esperanza.'
  },
  'senate-archive': {
    name: 'Archivo del Senado',
    text: 'Consultar (2⚡): robá una carta.',
    flavor: 'El imperio lo recuerda todo. Por un precio.',
    ability: { name: 'Consultar', text: 'Robá una carta.' }
  },
  'serene-prayer-staff': {
    name: 'Vara de Plegarias Serena',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Cada nudo guarda una oración silenciosa.'
  },
  'serene-return': {
    name: 'Regreso Sereno',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'serene-rune': { name: 'Runa Serena', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +4 de vida.' },
  'serene-saddle': {
    name: 'Montura Serena',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida. Cuando ese aliado muere: robá una carta.'
  },
  'serene-stance': {
    name: 'Postura Serena',
    text: 'Tu héroe se cura 6. Instantánea.',
    flavor: 'Quieta como una montaña, suave como la brisa.'
  },
  'shackle-of-dawn': {
    name: 'Grillete del Alba',
    text: 'Aturdí a un aliado enemigo. Rápida.',
    flavor: 'Hasta el amanecer puede tomar prisioneros.'
  },
  'shackle-of-the-pack': {
    name: 'Grillete de la Jauría',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
    flavor: 'La jauría nunca suelta.'
  },
  'shade-of-dying-stars': {
    name: 'Sombra de las Estrellas Moribundas',
    flavor: 'Lleva la luz de estrellas que ya murieron.'
  },
  'shadow-tithe': {
    name: 'Diezmo de Sombra',
    text: 'Tu héroe recibe 6 de daño de sombra. Robá 2 cartas.',
    flavor: 'El Eclipse siempre cobra. En sangre, si te falta moneda.'
  },
  'sharp-blessing': { name: 'Bendición Afilada', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'sharp-boar': {
    name: 'Jabalí Afilado',
    text: 'Al entrar: hacé 3 de daño a un aliado enemigo al azar.',
    flavor: 'Sus colmillos son su único argumento.'
  },
  'sharp-crossbow': { name: 'Ballesta Afilada', flavor: 'Una saeta, una lección.' },
  'sharp-jerkin': {
    name: 'Jubón Afilado',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Abrazar bajo tu propio riesgo.'
  },
  'sharp-raptor': { name: 'Raptor Afilado', text: 'Al morir: tus Saurios ganan +1 de ataque y +1 de vida.' },
  'shatter-of-the-long-road': {
    name: 'Quiebre del Largo Camino',
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Rápida.'
  },
  'shroud-of-the-final-bell': {
    name: 'Sudario de la Última Campana',
    text: 'Al empezar cada fase: hacé 2 de daño de tiempo al héroe enemigo.',
    flavor: 'Quien lo viste vive cada hora como la última.'
  },
  'signal-wraith': {
    name: 'Espectro de la Señal',
    text: 'Al entrar: al terminar esta fase, el rival descarta una carta al azar.',
    flavor: 'Entre dos canales, alguien está mirando.'
  },
  'signifer-lucius': { name: 'Signífero Lucio', text: 'Al entrar: tus otros aliados ganan +1 de ataque y +2 de vida.' },
  'silent-monolith': {
    name: 'Monolito Silencioso',
    text: 'Cada daño que reciben tus aliados es 1 menor.',
    flavor: 'No transmite nada. A todo volumen.'
  },
  'silk-wrap-of-ruin': {
    name: 'Envoltura de Seda de la Ruina',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'Suave como la seda, frío como un final.'
  },
  'silver-sprite': { name: 'Duende Plateado', flavor: 'Rápido como la luz de luna, el doble de curioso.' },
  'silver-wisp': { name: 'Fuego Fatuo Plateado', flavor: 'Seguila y quizás nunca vuelvas.' },
  'slash-of-rot': {
    name: 'Tajo de la Podredumbre',
    text: 'Hacé 15 de daño de sombra a un aliado enemigo.',
    flavor: 'Hasta la herida se pudre.'
  },
  'slash-of-the-last-stand': {
    name: 'Tajo de la Última Defensa',
    text: 'Hacé 6 de daño a un slot enemigo.',
    flavor: 'Un golpe más. Siempre uno más.'
  },
  'slash-of-the-long-road': {
    name: 'Tajo del Largo Camino',
    text: 'Hacé 11 de daño a un slot enemigo.',
    flavor: 'Un corte que atraviesa tres siglos.'
  },
  'sling-of-thorns': { name: 'Honda de Espinas', flavor: 'Cada piedra echa dientes.' },
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
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Armada al atardecer, disparada al salir la luna.'
  },
  'snare-of-embers': {
    name: 'Lazo de Brasas',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'Brasas escondidas bajo las hojas.'
  },
  'snare-of-rage': {
    name: 'Lazo de la Ira',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño al héroe enemigo.'
  },
  'snare-of-the-ambush': {
    name: 'Lazo de la Emboscada',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'snare-of-the-rift': {
    name: 'Lazo de la Grieta',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.',
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
  'spark-of-dusk': { name: 'Chispa del Ocaso', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'spark-of-the-crossroads': { name: 'Chispa de la Encrucijada', flavor: 'Nacida donde se cruzan todos los caminos.' },
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
    text: 'Hacé 3 de daño a un slot enemigo, +2 por cada Hacker tuyo.'
  },
  'spike-of-the-comet': {
    name: 'Púa del Cometa',
    text: 'Hacé 9 de daño de arcano a un slot enemigo.',
    flavor: 'Caída del cielo, todavía ardiendo.'
  },
  'spike-of-the-hawk': {
    name: 'Púa del Halcón',
    text: 'Hacé 9 de daño de viento a un slot enemigo.',
    flavor: 'Veloz como el halcón que la guía.'
  },
  'spike-of-the-hunt': {
    name: 'Púa de la Cacería',
    text: 'Hacé 4 de daño a un aliado enemigo. Rápida.',
    flavor: 'El propio suelo se une a la cacería.'
  },
  'spike-of-the-oracle': {
    name: 'Púa del Oráculo',
    text: 'Hacé 8 de daño de luz a un slot enemigo.',
    flavor: 'Ella previó dónde golpear.'
  },
  'spike-of-the-wanderer': {
    name: 'Púa del Errante',
    text: 'Hacé 11 de daño a un slot enemigo.',
    flavor: 'La Grieta tiene sus propias espinas.'
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
    text: 'El arma y la armadura enemigas pierden 2 de durabilidad cada una. Rápida.'
  },
  'spirit-bound-shroud': {
    name: 'Sudario Ligado a los Espíritus',
    flavor: 'Los ancestros vigilan desde sus pliegues.'
  },
  'stalking-blight': {
    name: 'Plaga Acechante',
    text: 'Envenená a un aliado enemigo (2).',
    flavor: 'Te sigue hasta tu casa.'
  },
  'stalking-fortune-teller': {
    name: 'Adivina Acechante',
    text: 'Al entrar: hacé 3 de daño a un aliado enemigo al azar. Al atacar: hacé 1 de daño al héroe enemigo.'
  },
  'stalwart-battle-cry': {
    name: 'Grito de Guerra Firme',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'Un grito que afirma cien manos.'
  },
  'stalwart-saddle': { name: 'Montura Firme', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +5 de vida.' },
  'stalwart-street-samurai': {
    name: 'Samurái Callejero Firme',
    text: 'Al entrar: tu héroe se cura 8.',
    flavor: 'Espada de neón, código antiguo.'
  },
  'standard-bearer-of-the-last-stand': {
    name: 'Abanderado de la Última Defensa',
    text: 'Al atacar: gana +1 de ataque.',
    flavor: 'Mientras la bandera siga en pie, nosotros también.'
  },
  'standard-bearer-of-the-laurel': {
    name: 'Abanderado del Laurel',
    text: 'Al entrar: tu héroe se cura 7. Al empezar cada fase: tu héroe se cura 2.'
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
  'stegosaur-of-the-first-fire': {
    name: 'Estegosaurio del Primer Fuego',
    text: 'Al entrar: gana +1 de ataque y +2 de vida.'
  },
  'stegosaur-of-the-hunt': {
    name: 'Estegosaurio de la Cacería',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Placas en el lomo, un mazo en la cola.'
  },
  'sting-of-the-silent-trail': {
    name: 'Aguijón del Rastro Silencioso',
    text: 'Envenená a un aliado enemigo (3).',
    flavor: 'No lo vas a oír. Lo vas a sentir.'
  },
  'stole-of-light': { name: 'Estola de la Luz', flavor: 'Un hilo de amanecer sobre los hombros.' },
  'stole-of-renewal': { name: 'Estola de la Renovación', flavor: 'Cada herida que toca se olvida de sí misma.' },
  'stone-golem-of-dawn': { name: 'Gólem de Piedra del Alba', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'stone-golem-of-lightning': {
    name: 'Gólem de Piedra del Relámpago',
    text: 'Al entrar: hacé 7 de daño de tierra a un aliado enemigo al azar.'
  },
  'stone-golem-of-mana': {
    name: 'Gólem de Piedra de Maná',
    text: 'Al morir: hacé 1 de daño de tierra a todos los aliados enemigos.'
  },
  'storm-called-cartographer': {
    name: 'Cartógrafa de la Tormenta',
    text: 'Al morir: hacé 1 de daño de rayo a todos los aliados enemigos.'
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
    text: 'Al entrar: ganás 1 Cronos en esta fase.',
    flavor: 'Sus mapas están mal, pero están mal con belleza.'
  },
  'stray-fury': {
    name: 'Furia Extraviada',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.',
    flavor: 'Una furia que llegó desde otra era.'
  },
  'stray-leather-coat': { name: 'Abrigo de Cuero Extraviado', flavor: 'Encontrado en un siglo, perdido en tres más.' },
  'stray-strike': {
    name: 'Golpe Extraviado',
    text: 'Hacé 8 de daño a un aliado enemigo.',
    flavor: 'No apuntaba a nadie. Le dio a alguien.'
  },
  'study-of-dawn': {
    name: 'Estudio del Alba',
    text: 'Robá una carta y tu héroe se cura 3.',
    flavor: 'Aprendé de la luz antes de que salga.'
  },
  'study-of-flame': {
    name: 'Estudio de Llamas',
    text: 'Robá 2 cartas.',
    flavor: 'Página uno: no tocar. Página dos: tarde.'
  },
  'summons-of-steam': {
    name: 'Convocatoria de Vapor',
    text: 'Invocá un Dron de Engranajes.',
    flavor: 'Suena el silbato. Algo responde.'
  },
  'summons-of-the-wilds': {
    name: 'Convocatoria de lo Salvaje',
    text: 'Invocá un Cachorro de Dientes de Sable.',
    flavor: 'El bosque responde a los suyos.'
  },
  'sundial-of-borrowed-hours': {
    name: 'Reloj de Sol de las Horas Prestadas',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía. (3 usos)'
  },
  'sundial-of-the-last-hour': {
    name: 'Reloj de Sol de la Última Hora',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)',
    flavor: 'Su sombra señala el final.'
  },
  'swift-pterodon': { name: 'Pterodonte Veloz', flavor: 'El cielo fue suyo primero.' },
  'swift-stonethrower': { name: 'Lanzapiedras Veloz', text: 'Al empezar cada fase: gana +1 de ataque y +1 de vida.' },
  'talos-of-the-laurel': {
    name: 'Talos del Laurel',
    text: 'Al entrar: tus otros Colosos ganan +1 de ataque y +1 de vida.'
  },
  'tar-soaked-ankylosaur': {
    name: 'Anquilosaurio Empapado de Brea',
    text: 'Al entrar: gana +1 de ataque y +2 de vida.'
  },
  'tar-soaked-pterodon': {
    name: 'Pterodonte Empapado de Brea',
    text: 'Cuando entra otro Saurio tuyo: tu héroe se cura 2. Al atacar: tu héroe se cura 3.'
  },
  'tar-soaked-sabertooth': {
    name: 'Dientes de Sable Empapado de Brea',
    text: 'Al atacar: tu héroe se cura 3.',
    flavor: 'Salió del pozo de brea más enojado que nunca.'
  },
  'taurons-halberd': {
    name: 'Alabarda de Tauron',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'Forjada en el corazón del laberinto.'
  },
  'taurons-prophet': {
    name: 'Profeta de Tauron',
    text: 'Al entrar: si tenés otro Oráculo, robá una carta. Al morir: tus otros aliados ganan +1 de ataque.'
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
  'thunderhead-of-dawn': { name: 'Nubarrón del Alba', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'thunderhead-of-dusk': { name: 'Nubarrón del Ocaso', text: 'Al entrar: robá una carta.' },
  'thunderhead-of-the-comet': {
    name: 'Nubarrón del Cometa',
    text: 'Al entrar: tus otros Elementales ganan +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 5.' }
  },
  'thundering-gatherer': { name: 'Recolectora Atronadora', text: 'Al entrar: gana +1 de ataque y +2 de vida.' },
  'thundering-raptor': {
    name: 'Raptor Atronador',
    text: 'Al morir: invocá una Cría de Raptor.',
    flavor: 'Sus pasos suenan como una tormenta.'
  },
  'thundering-sabertooth': {
    name: 'Dientes de Sable Atronador',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Lo oís antes del final.'
  },
  'timeless-fortune-teller': { name: 'Adivina Atemporal', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'timeless-gust': { name: 'Ráfaga Atemporal', text: 'Al morir: invocá una Chispa de la Grieta.' },
  'timeless-icicle': {
    name: 'Carámbano Atemporal',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad. Al morir: robá una carta.'
  },
  'timeless-rune': { name: 'Runa Atemporal', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'timeless-tick': {
    name: 'Tic Atemporal',
    text: 'Ganás 3 Cronos en esta fase. Instantánea.',
    flavor: 'El reloj que no marca la hora de nadie.'
  },
  'timeless-tide': { name: 'Marea Atemporal', flavor: 'Sube en todos los siglos a la vez.' },
  'timeless-wanderer': {
    name: 'Vagabundo Atemporal',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
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
    text: 'Robá el primer Elemental de tu mazo y robá el primer Elemental de tu mazo.'
  },
  'totem-of-coal': { name: 'Tótem del Carbón', text: 'Cuando entra un Inventor tuyo: gana +1 de ataque y +2 de vida.' },
  'totem-of-the-herd': {
    name: 'Tótem de la Manada',
    text: 'Al empezar cada fase: tu héroe se cura 3.',
    flavor: 'La manada recuerda dónde está.'
  },
  'towering-boss': { name: 'Jefa Imponente', text: 'Al entrar: tus otros Sicarios ganan +1 de ataque y +1 de vida.' },
  'towering-disarm': { name: 'Desarme Imponente', text: 'Destruí el arma enemiga. Rápida.', flavor: 'Soltalo. Ya.' },
  'towering-mace': { name: 'Maza Imponente', flavor: 'Hecha para gigantes. Empuñada por tercos.' },
  'toxin-of-midnight': {
    name: 'Toxina de Medianoche',
    text: 'Envenená a un aliado enemigo (3).',
    flavor: 'Destilada entre neones, servida fría.'
  },
  'toxin-of-pistons': {
    name: 'Toxina de Pistones',
    text: 'Envenená a un aliado enemigo (2).',
    flavor: 'El aceite de máquina no es para tomar.'
  },
  'tracking-countermeasure': {
    name: 'Contramedida Rastreadora',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño al héroe enemigo.'
  },
  'tracking-dagger': {
    name: 'Daga Rastreadora',
    text: 'Al equiparla: hacé 4 de daño a un aliado enemigo al azar.',
    flavor: 'Apunta hacia su última víctima.'
  },
  'tracking-horn': {
    name: 'Cuerno Rastreador',
    text: 'Invocá un Cachorro de Dientes de Sable.',
    flavor: 'Un toque y la jauría sabe el camino.'
  },
  'tracking-stasis': {
    name: 'Estasis Rastreadora',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Quieto ahí. Se terminó la cacería.'
  },
  'tracking-vest': { name: 'Chaleco Rastreador', flavor: 'Bolsillos para cada rastro.' },
  'tracking-woolly-rhino': {
    name: 'Rinoceronte Lanudo Rastreador',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2.',
    flavor: 'Sigue el rastro con el olfato y lo termina embistiendo.'
  },
  'triceratops-of-the-herd': {
    name: 'Triceratops de la Manada',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Saurio tuyo.'
  },
  'twilight-cryomancer': { name: 'Criomante Crepuscular', flavor: 'Congela el atardecer para que dure más.' },
  'unbound-hierophant': {
    name: 'Hierofante Desatado',
    text: 'Al entrar: envenená al héroe enemigo (3). Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'unbound-ruin': {
    name: 'Ruina Desatada',
    text: 'Destruí a un aliado enemigo. Lenta.',
    flavor: 'Ya nada lo detiene.'
  },
  'unbroken-hitman': {
    name: 'Asesino a Sueldo Invicto',
    text: 'Al atacar: gana +1 de ataque.',
    flavor: 'Le dispararon dos veces. Sigue trabajando.'
  },
  'unbroken-merchant': {
    name: 'Mercader Invicto',
    text: 'Al atacar: gana +1 de ataque.',
    flavor: 'Lo robaron nueve veces. Sigue abierto.'
  },
  'unbroken-plan': {
    name: 'Plan Invicto',
    text: 'Robá el primer Errante de tu mazo y tu héroe se cura 3.',
    flavor: 'El plan sobrevivió al contacto con el enemigo.'
  },
  'unyielding-charioteer': { name: 'Auriga Inquebrantable', text: 'Al entrar: robá el primer Legionario de tu mazo.' },
  'unyielding-trap': {
    name: 'Trampa Inquebrantable',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño de luz al héroe enemigo.'
  },
  'varros-glaive': {
    name: 'Guja de Varro',
    text: 'Al equiparla: tu héroe se cura 5.',
    flavor: 'La palabra del legado, hecha acero.'
  },
  'venom-of-the-hunt': {
    name: 'Veneno de la Cacería',
    text: 'Envenená a un aliado enemigo (3).',
    flavor: 'Una gota para la presa, dos para el orgulloso.'
  },
  'venomous-data-thief': {
    name: 'Ladrón de Datos Venenoso',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'Te roba los secretos y te deja una mordida.'
  },
  'venomous-jerkin': {
    name: 'Jubón Venenoso',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Forrada con pieles de bichos que muerden.'
  },
  'venomous-tripwire': {
    name: 'Cable Trampa Venenoso',
    text: 'Cuando el rival invoca un aliado: hacele 7 de daño de ácido.',
    flavor: 'Chasquido, picadura, sueño.'
  },
  'vestments-of-renewal': {
    name: 'Hábito de la Renovación',
    text: 'Al equiparla: tus aliados se curan 2.',
    flavor: 'La visten sanadores que nunca duermen.'
  },
  'veteran-of-the-shieldwall': {
    name: 'Veterano del Muro de Escudos',
    text: 'Al atacar: gana +1 de ataque.',
    flavor: 'Sostiene la línea desde antes de que nacieras.'
  },
  'vex-nightwire': {
    name: 'Vex Nightwire',
    text: 'Protocolo Fantasma (4): tus aliados ganan Sigilo y +2 de ataque hasta el final de la próxima fase. Al final de cada fase, hacé 1 de daño de sombra al héroe enemigo.',
    flavor: 'Caza blancos que nadie más puede encontrar.',
    ability: {
      name: 'Protocolo Fantasma',
      text: 'Tus aliados ganan Sigilo y +2 de ataque hasta el final de la próxima fase.'
    }
  },
  'vexs-sling': { name: 'Honda de Vex', text: 'Al equiparla: hacé 4 de daño de sombra a un aliado enemigo al azar.' },
  'victorious-bronze-giant': { name: 'Gigante de Bronce Victorioso', text: 'Al entrar: tu héroe se cura 8.' },
  'victorious-minotaur': {
    name: 'Minotauro Victorioso',
    flavor: 'Encontró la salida del laberinto. Y volvió a entrar.'
  },
  'vigor-of-dusk': {
    name: 'Vigor del Ocaso',
    text: 'Un aliado tuyo gana +12 de ataque en esta fase. Instantánea.',
    flavor: 'La tarde trae un segundo aire.'
  },
  'vigor-of-the-ancestors': {
    name: 'Vigor de los Ancestros',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'La sangre antigua todavía corre fuerte.'
  },
  'vigor-of-the-archmage': {
    name: 'Vigor del Archimago',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.',
    flavor: 'El archimago comparte una chispa de su energía infinita.'
  },
  'vigor-of-the-jungle': {
    name: 'Vigor de la Jungla',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.',
    flavor: 'Crecé salvaje, crecé fuerte.'
  },
  'vigor-of-the-shieldwall': {
    name: 'Vigor del Muro de Escudos',
    text: 'Un aliado tuyo gana +5 de ataque y +7 de vida.',
    flavor: 'Trabá los escudos, respirá con ellos, resistí con ellos.'
  },
  'virus-of-dusk': {
    name: 'Virus del Ocaso',
    text: 'Adjuntala a un aliado enemigo: tiene -5 de ataque.',
    flavor: 'Se propaga cuando se apagan las luces.'
  },
  'virus-of-neon': { name: 'Virus de Neón', text: 'Al entrar: tu héroe gana 1 de energía.' },
  'virus-of-the-silent-trail': {
    name: 'Virus del Rastro Silencioso',
    text: 'Cuando entra otro Hacker tuyo: tu héroe se cura 2.'
  },
  'volatile-fortune-teller': {
    name: 'Adivina Volátil',
    text: 'Al entrar: quemá a un aliado enemigo al azar (3). Al morir: hacé 1 de daño de fuego a todos los aliados enemigos.'
  },
  'volatile-mark': {
    name: 'Marca Volátil',
    text: 'Adjuntala a un aliado enemigo: cada vez que ataca, recibe 2 de daño de hielo.'
  },
  'volatile-runecarver': { name: 'Tallarrunas Volátil', text: 'Al entrar: si tenés otro Hechicero, robá una carta.' },
  'vorhals-flagellant': {
    name: 'Flagelante de Vorhal',
    text: 'Cuando entra otro Cultista tuyo: tu héroe se cura 2. Al morir: invocá un Esqueleto Alzado.'
  },
  'vorhals-spike': { name: 'Púa de Vorhal', text: 'Hacé 10 de daño de tiempo a un slot enemigo y robá una carta.' },
  'wandering-ferryman': {
    name: 'Barquero Errante',
    text: 'Al morir: robá una carta.',
    flavor: 'Rema por ríos de tiempo.'
  },
  'wandering-gust': { name: 'Ráfaga Errante', text: 'Al entrar: tu héroe se cura 5. Al morir: robá una carta.' },
  'wandering-mist': {
    name: 'Neblina Errante',
    text: 'Cuando entra otro Elemental tuyo: gana +1 de ataque y +1 de vida. Al empezar cada fase: tu héroe se cura 2.'
  },
  'wandering-monolith': {
    name: 'Monolito Errante',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)'
  },
  'wandering-plan': { name: 'Plan Errante', text: 'Robá 2 cartas.', flavor: 'El plan cambia en cada era.' },
  'wandering-rune': { name: 'Runa Errante', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'wandering-stasis': {
    name: 'Estasis Errante',
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.',
    flavor: 'El tiempo se detiene a mirar alrededor.'
  },
  'wandering-wanderer': { name: 'Vagabundo Errante', flavor: 'Ni él sabe adónde va.' },
  'warpick-of-iron': {
    name: 'Pico de Guerra de Hierro',
    text: 'Al equiparla: robá una carta.',
    flavor: 'Hecho para abrir yelmos como nueces.'
  },
  'warpick-of-rage': { name: 'Pico de Guerra de la Ira', flavor: 'Atraviesa armaduras y paciencias por igual.' },
  'warpick-of-the-last-stand': {
    name: 'Pico de Guerra de la Última Defensa',
    flavor: 'La llevan quienes se niegan a retroceder.'
  },
  'warpick-of-the-warlord': {
    name: 'Pico de Guerra del Caudillo',
    text: 'Al equiparla: tu héroe se cura 3.',
    flavor: 'Rompió coronas.'
  },
  'weary-merchant': {
    name: 'Mercader Cansado',
    text: 'Al morir: robá una carta.',
    flavor: 'Vendió todo menos su descanso.'
  },
  'weary-plan': { name: 'Plan Cansado', text: 'Robá 2 cartas.', flavor: 'No es elegante, pero funciona.' },
  'weary-stasis': {
    name: 'Estasis Cansada',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Hasta el tiempo necesita descansar.'
  },
  'whispering-void-spawn': {
    name: 'Engendro del Vacío Susurrante',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada Horror tuyo. Al morir: invocá un Esqueleto Alzado.'
  },
  'wild-boar': {
    name: 'Jabalí Silvestre',
    text: 'Al atacar: hacé 2 de daño al héroe enemigo.',
    flavor: 'Primero embiste, después nunca piensa.'
  },
  'wild-crossbow': { name: 'Ballesta Silvestre', flavor: 'Encordada con lianas y mal genio.' },
  'wild-shot': {
    name: 'Disparo Silvestre',
    text: 'Hacé 7 de daño a un aliado enemigo. Rápida.',
    flavor: '¿Apuntado? No mucho. ¿Letal? Mucho.'
  },
  'wild-tyrant': {
    name: 'Tirano Silvestre',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.',
    flavor: 'La selva tiembla cuando se despierta.'
  },
  'wind-up-mechanic': { name: 'Mecánica a Cuerda', flavor: 'Girá la llave y alejate.' },
  'wind-up-soldier-of-pistons': {
    name: 'Soldado de Cuerda de Pistones',
    text: 'Al entrar: tu héroe se cura 4.'
  },
  'wind-up-tin-sentry': {
    name: 'Centinela de Hojalata a Cuerda',
    text: 'Al entrar: robá el primer Autómata de tu mazo.'
  },
  'wired-tripwire': {
    name: 'Cable Trampa Conectado',
    text: 'Cuando el rival invoca un aliado: congelalo.',
    flavor: 'Un cable, cien voltios.'
  },
  'wise-stasis': {
    name: 'Estasis Sabia',
    text: 'Congelá a un aliado enemigo.',
    flavor: 'Los sabios saben cuándo detener el reloj.'
  },
  'xulthars-crystal': {
    name: 'Cristal de Xulthar',
    text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.'
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
    text: 'Al atacar: tu héroe se cura 2.',
    flavor: 'Un rey en formación, ya un tirano.'
  }
}
