import { CardTranslation } from '@/app/i18n/cards'

/** The Spanish texts of every card, by id (docs/PLAN.md, section 7.6). */
export const CARDS_ES: Record<string, CardTranslation> = {
  'acolyte-of-spirits': { name: 'Acólito de los Espíritus', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'acolyte-of-the-senate': {
    name: 'Acólito del Senado',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Oráculo tuyo. Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'ada-copperwick': {
    name: 'Ada Copperwick',
    text: 'Inventar (2): un aliado tuyo gana +2 de ataque y +2 de vida. Cuando entra otro aliado tuyo, gana +1 de ataque.',
    flavor: 'La magia es ingeniería que nadie explicó todavía.',
    ability: { name: 'Inventar', text: 'Un aliado tuyo gana +2 de ataque y +2 de vida.' }
  },
  'adas-strike': { name: 'Golpe de Ada', text: 'Hacé 10 de daño a un slot enemigo y robá una carta.' },
  'aegis-of-rage': { name: 'Égida de la Ira', text: 'Tu héroe gana 9 de armadura. Instantánea.' },
  'aegis-of-the-first-fire': { name: 'Égida del Primer Fuego', text: 'Tu héroe gana 12 de armadura y robá una carta.' },
  'airship-of-brass': {
    name: 'Dirigible de Latón',
    text: 'Al entrar: si tenés otra Aeronave, robá una carta. Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'alchemist-of-the-clocktower': {
    name: 'Alquimista de la Torre del Reloj',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Inventor tuyo.'
  },
  'aldric-dawnkeeper': {
    name: 'Aldric Dawnkeeper',
    text: 'Luz del Alba (2): tu héroe se cura 5 y tus aliados se curan 3. Al final de cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Todas las noches terminan. Él se ocupa de eso.',
    ability: { name: 'Luz del Alba', text: 'Tu héroe se cura 5 y tus aliados se curan 3.' }
  },
  'aldrics-beacon': {
    name: 'Faro de Aldric',
    text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.'
  },
  'altar-of-lost-time': { name: 'Altar del Tiempo Perdido', text: 'Cada daño que reciben tus aliados es 1 menor.' },
  'altar-of-pistons': { name: 'Altar de Pistones', text: 'Al empezar cada fase: tu héroe gana 1 de energía.' },
  'altar-of-the-hawk': { name: 'Altar del Halcón', text: 'Al empezar cada fase: tu héroe gana 1 de energía.' },
  'altar-of-the-shieldwall': {
    name: 'Altar del Muro de Escudos',
    text: 'Al empezar cada fase: hacé 2 de daño al héroe enemigo. (3 usos)'
  },
  'altar-of-the-sun-temple': {
    name: 'Altar del Templo del Sol',
    text: 'Al empezar cada fase: hacé 2 de daño de luz al héroe enemigo. (4 usos)'
  },
  'amber-eyed-blessing': { name: 'Bendición de Ojos de Ámbar', text: 'Tu héroe se cura 15.' },
  'amber-eyed-wolf-pup': { name: 'Lobezno de Ojos de Ámbar', text: 'Al entrar: gana +1 de ataque y +2 de vida.' },
  'arcane-familiar': { name: 'Familiar Arcano' },
  'arcane-mine': { name: 'Mina Arcana', text: 'Cuando el rival invoca un aliado: congelalo.' },
  'arcane-runecarver': {
    name: 'Tallarrunas Arcano',
    text: 'Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'argos-the-silver-hound': {
    name: 'Argos, el Sabueso Plateado',
    text: 'Al entrar: hacé 3 de daño de viento a un aliado enemigo al azar.'
  },
  'armored-fortune-teller': { name: 'Adivina Acorazada', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'armored-fury': { name: 'Furia Acorazada', text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.' },
  'armored-mace': { name: 'Maza Acorazada' },
  'armored-sabotage': { name: 'Sabotaje Acorazado', text: 'Destruí el arma enemiga. Rápida.' },
  'armored-tower-shield': { name: 'Escudo Torre Acorazado', text: 'Al equiparla: tus aliados se curan 2.' },
  'ash-covered-stonethrower': { name: 'Lanzapiedras Cubierto de Ceniza' },
  'ashen-hierophant': {
    name: 'Hierofante Ceniciento',
    text: 'Al morir: tus Cultistas ganan +1 de ataque y +1 de vida. Al entrar: envenená al héroe enemigo (3).'
  },
  'ashen-skeleton': {
    name: 'Esqueleto Ceniciento',
    text: 'Cuando entra otro No-muerto tuyo: gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'ashen-stasis': { name: 'Estasis Cenicienta', text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.' },
  'astral-bolt': { name: 'Rayo Astral', text: 'Hacé 6 de daño de arcano a un slot enemigo. Rápida.' },
  'astral-daze': {
    name: 'Aturdimiento Astral',
    text: 'Congelá a un aliado enemigo y hacé 5 de daño de arcano al héroe enemigo.'
  },
  'astral-robe': { name: 'Túnica Astral' },
  'augmented-thug': { name: 'Matón Aumentado', text: 'Al entrar: robá una carta.' },
  'augur-of-the-laurel': { name: 'Augur del Laurel', text: 'Al empezar cada fase: tu héroe gana 2 de armadura.' },
  'axe-of-the-vanguard': { name: 'Hacha de la Vanguardia' },
  'balloon-scout-of-pistons': {
    name: 'Globo Explorador de Pistones',
    text: 'Cuando entra otra Aeronave tuya: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño a un slot enemigo.' }
  },
  'balloon-scout-of-the-foundry': {
    name: 'Globo Explorador de la Fundición',
    text: 'Al entrar: tu héroe gana 7 de armadura. Su habilidad se paga con energía (⚡).',
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
  'barrage-of-chrome': { name: 'Andanada de Cromo', text: 'Hacé 8 de daño de rayo a un slot enemigo.' },
  'barrage-of-the-ambush': { name: 'Andanada de la Emboscada', text: 'Hacé 12 de daño a un slot enemigo.' },
  'barrage-of-the-comet': { name: 'Andanada del Cometa', text: 'Hacé 8 de daño de arcano a un slot enemigo.' },
  'barrage-of-the-hawk': { name: 'Andanada del Halcón', text: 'Hacé 6 de daño de viento a un aliado enemigo. Rápida.' },
  'battle-scarred-disarm': {
    name: 'Desarme Curtido',
    text: 'El arma enemiga pierde 2 de durabilidad y el héroe enemigo pierde 6 de armadura. Rápida.'
  },
  'battle-scarred-helm': { name: 'Yelmo Curtido' },
  'battle-scarred-sentinel': { name: 'Centinela Curtido', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'battle-scarred-warplate': { name: 'Armadura de Guerra Curtida', text: 'Al equiparla: tus aliados se curan 2.' },
  'binding-of-flame': { name: 'Atadura de Llamas', text: 'Congelá a un aliado enemigo.' },
  'binding-of-lightning': {
    name: 'Atadura del Relámpago',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'binding-of-ruin': { name: 'Atadura de la Ruina', text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.' },
  'binding-of-the-legion': {
    name: 'Atadura de la Legión',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'binding-of-the-moon': { name: 'Atadura de la Luna', text: 'Aturdí a un aliado enemigo. Rápida.' },
  'binding-of-the-pack': {
    name: 'Atadura de la Jauría',
    text: 'Congelá a un aliado enemigo y hacé 5 de daño de hielo al héroe enemigo.'
  },
  'blast-of-lightning': {
    name: 'Estallido del Relámpago',
    text: 'Hacé 4 de daño de rayo a un aliado enemigo. Rápida.'
  },
  'blast-of-the-arcanum': { name: 'Estallido del Arcano', text: 'Hacé 9 de daño de arcano a un slot enemigo.' },
  'blast-of-the-jungle': {
    name: 'Estallido de la Jungla',
    text: 'Hacé 10 de daño de tierra a un slot enemigo, +2 por cada Fiera tuya.'
  },
  'blast-of-thorns': { name: 'Estallido de Espinas', text: 'Hacé 8 de daño a un slot enemigo.' },
  'blazing-daze': {
    name: 'Aturdimiento Ardiente',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'blazing-dragon': {
    name: 'Dragón Ardiente',
    text: 'Al entrar: hacé 1 de daño de fuego al héroe enemigo por cada Draco tuyo. Al morir: hacé 1 de daño de fuego a todos los aliados enemigos.'
  },
  'blazing-fireball': { name: 'Bola de Fuego Ardiente', text: 'Quemá un slot enemigo (4).' },
  'blazing-strike': { name: 'Golpe Ardiente', text: 'Hacé 9 de daño de fuego a un slot enemigo.' },
  'blessed-deserter': { name: 'Desertor Bendito', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'blessed-halo': { name: 'Halo Bendito', text: 'Al equiparla: tu héroe se cura 4.' },
  'blessed-idol': { name: 'Ídolo Bendito', text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)' },
  'blessed-secret': { name: 'Secreto Bendito', text: 'Robá una carta y tu héroe se cura 3.' },
  'bloodied-echo': {
    name: 'Eco Ensangrentado',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego. Lenta.'
  },
  'bloodied-glaive': { name: 'Guja Ensangrentada', text: 'Al equiparla: tu héroe se cura 4.' },
  'bloodied-helm': { name: 'Yelmo Ensangrentado', text: 'Al equiparla: tus aliados se curan 2.' },
  'bloodied-hitman': { name: 'Asesino a Sueldo Ensangrentado', text: 'Al entrar: tu héroe gana 7 de armadura.' },
  'bodyguard-of-the-vanguard': {
    name: 'Guardaespaldas de la Vanguardia',
    text: 'Cuando entra otro Sicario tuyo: tu héroe se cura 2.'
  },
  'boilerguard-of-gears': {
    name: 'Guardacalderas de Engranajes',
    text: 'Al empezar cada fase: tu héroe gana 2 de armadura. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'bold-blessing': { name: 'Bendición Audaz', text: 'Tu héroe se cura 16 y robá una carta.' },
  'bold-gust': { name: 'Ráfaga Audaz', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'bold-rust': {
    name: 'Herrumbre Audaz',
    text: 'El arma enemiga pierde 1 de durabilidad y el héroe enemigo pierde 3 de armadura. Rápida.'
  },
  'bold-traveler-cloak': { name: 'Capa de Viajero Audaz', text: 'Al equiparla: tu héroe se cura 6.' },
  'bone-knight-of-dying-stars': {
    name: 'Caballero de Hueso de las Estrellas Moribundas',
    text: 'Cuando entra otro No-muerto tuyo: tu héroe se cura 2.'
  },
  'bone-knight-of-the-void': { name: 'Caballero de Hueso del Vacío' },
  'borrowed-hour-of-grace': { name: 'Hora Prestada de la Gracia', text: 'Tu héroe gana 3 de energía. Instantánea.' },
  'borrowed-hour-of-lost-time': {
    name: 'Hora Prestada del Tiempo Perdido',
    text: 'Tu héroe gana 3 de energía. Instantánea.'
  },
  'bounty-hunter-of-borrowed-hours': {
    name: 'Cazarrecompensas de las Horas Prestadas',
    text: 'Al entrar: robá una carta.'
  },
  'bounty-hunter-of-flame': { name: 'Cazarrecompensas de Llamas' },
  'bounty-hunter-of-the-long-road': {
    name: 'Cazarrecompensas del Largo Camino',
    text: 'Al entrar: destruí el artefacto enemigo más caro.'
  },
  'bounty-hunter-of-the-rift': {
    name: 'Cazarrecompensas de la Grieta',
    text: 'Al entrar: tu héroe gana 5 de armadura. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño de tiempo a un slot enemigo.' }
  },
  'bounty-hunter-of-the-silent-trail': {
    name: 'Cazarrecompensas del Rastro Silencioso',
    text: 'Al morir: hacé 3 de daño a un aliado enemigo al azar.'
  },
  'bracers-of-the-ambush': { name: 'Brazales de la Emboscada' },
  'bramble-of-the-wanderer': { name: 'Zarza del Errante', text: 'Al morir: robá una carta.' },
  'brand-of-the-comet': {
    name: 'Estigma del Cometa',
    text: 'Adjuntala a un aliado enemigo: no puede usar su habilidad y tiene -1 de ataque.'
  },
  'brass-golem-of-coal': {
    name: 'Gólem de Latón del Carbón',
    text: 'Cuando entra otro Autómata tuyo: gana +1 de ataque y +1 de vida.'
  },
  'brass-golem-of-gears': { name: 'Gólem de Latón de Engranajes' },
  'brass-steam-knight': { name: 'Caballero de Vapor de Latón', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'brassmaws-bolt': {
    name: 'Rayo de Bocabronce',
    text: 'Hacé 10 de daño de sónico a un slot enemigo y robá una carta.'
  },
  'brassmaws-gadgeteer': {
    name: 'Artilugista de Bocabronce',
    text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2. Al morir: invocá un Dron de Engranajes.'
  },
  'brave-fortune-teller': { name: 'Adivina Valiente', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'brave-secret': { name: 'Secreto Valiente', text: 'Robá 2 cartas.' },
  'brave-squire': { name: 'Escudero Valiente', text: 'Al entrar: robá la primera arma de tu mazo.' },
  'brazier-of-the-ancestors': {
    name: 'Brasero de los Ancestros',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)'
  },
  'brazier-of-the-wanderer': {
    name: 'Brasero del Errante',
    text: 'Al empezar cada fase: hacé 1 de daño al héroe enemigo. (3 usos)'
  },
  'breastplate-of-rage': { name: 'Peto de la Ira' },
  'caelus-the-usurper': {
    name: 'Caelus el Usurpador',
    text: 'Diezmar (4): hacé 2 de daño de luz a cada aliado enemigo. Al empezar cada fase, tus aliados ganan +1 de ataque.',
    flavor: 'Robó una corona de una Roma que nunca existió, y quiere la verdadera.',
    ability: { name: 'Diezmar', text: 'Hacé 2 de daño de luz a cada aliado enemigo.' }
  },
  'caeluss-axe': { name: 'Hacha de Caelus', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'caeluss-chimera': {
    name: 'Quimera de Caelus',
    text: 'Cuando entra otro Coloso tuyo: gana +2 de ataque y +2 de vida. Al atacar: tu héroe gana 2 de armadura.'
  },
  'camouflaged-brontosaur': { name: 'Brontosaurio Camuflado', text: 'Al atacar: hacé 3 de daño al héroe enemigo.' },
  'cave-bear-of-the-hunt-moon': {
    name: 'Oso Cavernario de la Luna de Caza',
    text: 'Al entrar: tus aliados se curan 3.'
  },
  'centurion-of-steel': {
    name: 'Centurión de Acero',
    text: 'Cuando entra otro Legionario tuyo: gana +1 de ataque y +1 de vida. Al atacar: gana +1 de ataque.'
  },
  'chancellor-brassmaw': {
    name: 'Canciller Bocabronce',
    text: 'Decreto de Hierro (3): aturdí a un aliado enemigo y hacele 3 de daño de sónico. Al final de cada fase, tu héroe gana 3 de armadura.',
    flavor: 'Es dueño de las fábricas, de la ciudad y de casi todos los relojes.',
    ability: { name: 'Decreto de Hierro', text: 'Aturdí a un aliado enemigo y hacele 3 de daño de sónico.' }
  },
  'charm-of-the-vanguard': {
    name: 'Dije de la Vanguardia',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.'
  },
  'chimera-of-the-shieldwall': { name: 'Quimera del Muro de Escudos', text: 'Al morir: tu héroe gana 8 de armadura.' },
  'chimera-of-the-sun-temple': {
    name: 'Quimera del Templo del Sol',
    text: 'Al morir: tus otros aliados ganan +1 de ataque. Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'circlet-of-flame': { name: 'Diadema de Llamas' },
  'circlet-of-mana': { name: 'Diadema de Maná' },
  'cleaver-of-the-vanguard': { name: 'Cuchilla de la Vanguardia', text: 'Al equiparla: tu héroe se cura 5.' },
  'cleaver-of-valor': { name: 'Cuchilla del Valor' },
  'clever-chrononaut': {
    name: 'Crononauta Astuto',
    text: 'Al empezar cada fase: tu héroe se cura 2. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'clever-fortune-teller': { name: 'Adivina Astuta' },
  'clever-merchant': { name: 'Mercader Astuto', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'clever-scroll': { name: 'Pergamino Astuto', text: 'Destruí el arma enemiga. Rápida.' },
  'cloak-of-the-quarry': { name: 'Capa de la Presa' },
  'clock-of-dusk': { name: 'Reloj del Ocaso', text: 'Al empezar cada fase: tu héroe gana 1 de energía. (3 usos)' },
  'clock-of-embers': { name: 'Reloj de Brasas', text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (3 usos)' },
  'clockwork-hound-of-coal': {
    name: 'Sabueso Mecánico del Carbón',
    text: 'Al empezar cada fase: tu héroe gana 2 de armadura.'
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
  'cog-drone': { name: 'Dron de Engranajes' },
  'copper-glider': {
    name: 'Planeador de Cobre',
    text: 'Al entrar: invocá un Dron de Engranajes. Al morir: invocá un Dron de Engranajes.'
  },
  'copper-gyrocopter': { name: 'Girocóptero de Cobre' },
  'courage-of-iron': { name: 'Coraje de Hierro', text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.' },
  'courage-of-spirits': {
    name: 'Coraje de los Espíritus',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'courage-of-the-ancestors': {
    name: 'Coraje de los Ancestros',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.'
  },
  'courage-of-the-last-stand': {
    name: 'Coraje de la Última Defensa',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'courier-of-the-mainframe': {
    name: 'Mensajero del Servidor Central',
    text: 'Al atacar: hacé 3 de daño de sónico al héroe enemigo.'
  },
  'crawler-of-the-grave': {
    name: 'Reptante de la Tumba',
    text: 'Al entrar: sacrificá a tu otro aliado más débil: si lo hacés, robá 2 cartas.'
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
  'cursed-trap': { name: 'Trampa Maldita', text: 'Cuando el rival invoca un aliado: congelalo.' },
  'cutlass-of-the-long-road': { name: 'Alfanje del Largo Camino' },
  'cyber-hound-of-the-grid': { name: 'Cibersabueso de la Red' },
  'cyclops-of-rage': {
    name: 'Cíclope de la Ira',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Coloso tuyo.'
  },
  'decoy-of-the-undercity': {
    name: 'Señuelo de la Ciudad Baja',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 5 de daño de rayo al héroe enemigo.'
  },
  'devout-bell': { name: 'Campana Devota', text: 'Al equiparla: tu héroe se cura 4.' },
  'devout-fury': { name: 'Furia Devota', text: 'Un aliado tuyo gana +1 de ataque y +1 de vida.' },
  'devout-haruspex': { name: 'Arúspice Devoto', text: 'Al entrar: robá el primer Oráculo de tu mazo.' },
  'devout-prayer-staff': { name: 'Vara de Plegarias Devota', text: 'Al equiparla: tu héroe se cura 7.' },
  'devout-pythia': { name: 'Pitonisa Devota', text: 'Al entrar: tus aliados se curan 4.' },
  'devout-saddle': { name: 'Montura Devota', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.' },
  'dilophosaur-of-the-silent-trail': {
    name: 'Dilofosaurio del Rastro Silencioso',
    text: 'Al entrar: hacé 5 de daño a un aliado enemigo al azar.'
  },
  'dire-wolf-of-amber': {
    name: 'Lobo Terrible de Ámbar',
    text: 'Al morir: tus Fieras ganan +1 de ataque y +1 de vida.'
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
  'drake-of-the-tower': { name: 'Draco de la Torre' },
  'dreadnought-of-the-workshop': {
    name: 'Acorazado Volador del Taller',
    text: 'Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'dreaming-fury': { name: 'Furia Soñadora', text: 'Un aliado tuyo gana +5 de ataque y +7 de vida.' },
  'dreaming-pyre': { name: 'Pira Soñadora', text: 'Quemá un slot enemigo (3).' },
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
  'electric-glitch': {
    name: 'Glitch Eléctrico',
    text: 'Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'electric-mech': { name: 'Mecha Eléctrico', text: 'Al entrar: tus otros Cíborgs ganan +1 de ataque y +1 de vida.' },
  'elk-of-the-wilds': { name: 'Alce de lo Salvaje', text: 'Al morir: hacé 7 de daño a un aliado enemigo al azar.' },
  'ember-of-the-rift': { name: 'Ascua de la Grieta', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'empowerment-of-the-dawnbell': {
    name: 'Potenciación de la Campana del Alba',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.'
  },
  'empowerment-of-the-last-stand': {
    name: 'Potenciación de la Última Defensa',
    text: 'Un aliado tuyo gana +10 de ataque en esta fase. Instantánea.'
  },
  'empowerment-of-the-warlord': {
    name: 'Potenciación del Caudillo',
    text: 'Un aliado tuyo gana +2 de ataque y +2 de vida.'
  },
  'enchanted-cryomancer': {
    name: 'Criomante Encantada',
    text: 'Al entrar: hacé 4 de daño de hielo a un aliado enemigo al azar.'
  },
  'enchanted-shot': { name: 'Disparo Encantado', text: 'Hacé 12 de daño de arcano a un aliado enemigo.' },
  'enchanted-wyvern': { name: 'Guiverno Encantado', text: 'Al entrar: robá una carta.' },
  'enchantress-of-runes': {
    name: 'Encantadora de las Runas',
    text: 'Al entrar: congelá a un aliado enemigo al azar. Al empezar cada fase: hacé 1 de daño de arcano al héroe enemigo.'
  },
  'enchantress-of-the-archmage': {
    name: 'Encantadora del Archimago',
    text: 'Al morir: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'enchantress-of-the-tower': { name: 'Encantadora de la Torre', text: 'Al entrar: robá una carta.' },
  'encrypted-mech': { name: 'Mecha Encriptado', text: 'Al entrar: el héroe enemigo pierde 1 de energía.' },
  'encrypted-monolith': {
    name: 'Monolito Encriptado',
    text: 'Al empezar cada fase: hacé 2 de daño de tierra al héroe enemigo. (3 usos)'
  },
  'encrypted-street-samurai': { name: 'Samurái Callejero Encriptado', text: 'Al morir: robá una carta.' },
  'encrypted-thug': { name: 'Matón Encriptado', text: 'Cuando entra otro Sicario tuyo: tu héroe se cura 2.' },
  'endless-plan': { name: 'Plan Interminable', text: 'Robá una carta.' },
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
  'ethereal-basilisk': { name: 'Basilisco Etéreo' },
  'ethereal-beacon': {
    name: 'Faro Etéreo',
    text: 'Al empezar cada fase: hacé 2 de daño de arcano a un aliado enemigo al azar. (4 usos)'
  },
  'ethereal-cockatrice': { name: 'Cocatriz Etérea' },
  'ethereal-runecarver': { name: 'Tallarrunas Etéreo', text: 'Al entrar: robá el primer Hechicero de tu mazo.' },
  'ethereal-terminal': { name: 'Terminal Etérea', text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)' },
  'experimental-aeronaut': { name: 'Aeronauta Experimental', text: 'Al entrar: invocá un Dron de Engranajes.' },
  'faithful-amulet': { name: 'Amuleto Fiel', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +3 de vida.' },
  'faithful-bomb': { name: 'Bomba Fiel', text: 'Hacé 4 de daño a un slot enemigo.' },
  'faithful-cartographer': { name: 'Cartógrafa Fiel' },
  'faithful-moment': { name: 'Instante Fiel', text: 'Ganás 4 Cronos en esta fase. Instantánea.' },
  'faithful-wanderer': { name: 'Vagabundo Fiel' },
  'fang-the-sabertooth': { name: 'Colmillo, el Dientes de Sable' },
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
  'flail-of-the-vanguard': { name: 'Mangual de la Vanguardia' },
  'flask-of-dawn': {
    name: 'Frasco del Alba',
    text: 'Robá el primer Elemental de tu mazo y robá el primer Elemental de tu mazo.'
  },
  'flask-of-dusk': { name: 'Frasco del Ocaso', text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.' },
  'flask-of-the-wanderer': { name: 'Frasco del Errante', text: 'Tu héroe se cura 13 y robá una carta.' },
  'flickering-bolt': { name: 'Rayo Titilante', text: 'Hacé 4 de daño de arcano a un slot enemigo. Rápida.' },
  'flickering-daze': {
    name: 'Aturdimiento Titilante',
    text: 'Congelá a un aliado enemigo y hacé 2 de daño de hielo al héroe enemigo.'
  },
  'flickering-frost-wyrm': { name: 'Sierpe de Escarcha Titilante' },
  'flickering-mantle': { name: 'Manto Titilante' },
  'flickering-mist': {
    name: 'Neblina Titilante',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Elemental tuyo.'
  },
  'flickering-muster': { name: 'Leva Titilante', text: 'Invocá un Familiar Arcano.' },
  'flickering-rust': {
    name: 'Herrumbre Titilante',
    text: 'Adjuntala a un aliado enemigo: cada vez que ataca, recibe 3 de daño de ácido.'
  },
  'flickering-stance': { name: 'Postura Titilante', text: 'Tu héroe gana 15 de armadura y robá una carta.' },
  'flickering-ward': { name: 'Guarda Titilante' },
  'focus-of-lightning': { name: 'Foco del Relámpago' },
  'foreman-of-gears': { name: 'Capataz de Engranajes', text: 'Al entrar: el arma enemiga pierde 1 de durabilidad.' },
  'forsaken-resurrection': {
    name: 'Resurrección Abandonada',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego. Lenta.'
  },
  'forsaken-zombie': { name: 'Zombi Abandonado' },
  'frost-of-grace': { name: 'Escarcha de la Gracia', text: 'Congelá a un aliado enemigo.' },
  'frost-of-ruin': {
    name: 'Escarcha de la Ruina',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'frost-of-the-arcanum': { name: 'Escarcha del Arcano', text: 'Congelá a un aliado enemigo.' },
  'frost-of-the-hawk': {
    name: 'Escarcha del Halcón',
    text: 'Congelá a un aliado enemigo y hacé 3 de daño de hielo al héroe enemigo.'
  },
  'frost-of-the-oracle': { name: 'Escarcha del Oráculo', text: 'Aturdí a un aliado enemigo por dos fases. Rápida.' },
  'frost-of-the-pack': {
    name: 'Escarcha de la Jauría',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'frozen-bolt': { name: 'Rayo Helado', text: 'Hacé 11 de daño de hielo a un slot enemigo.' },
  'frozen-wand': { name: 'Varita Helada' },
  'frozen-ward': { name: 'Guarda Helada' },
  'furious-banner': {
    name: 'Estandarte Furioso',
    text: 'Al empezar cada fase: hacé 2 de daño al héroe enemigo. (3 usos)'
  },
  'furious-chrononaut': { name: 'Crononauta Furioso', text: 'Al morir: tu héroe gana 3 de armadura.' },
  'furious-sabotage': { name: 'Sabotaje Furioso', text: 'Destruí el arma enemiga. Rápida.' },
  'gadgeteer-of-steam': {
    name: 'Artilugista de Vapor',
    text: 'Al entrar: tu héroe gana 6 de armadura. Al morir: invocá un Dron de Engranajes.'
  },
  'gathering-of-flame': { name: 'Reunión de Llamas', text: 'Invocá una Chispa de la Grieta.' },
  'gathering-of-lightning': { name: 'Reunión del Relámpago', text: 'Invocá un Familiar Arcano.' },
  'gentle-balm': { name: 'Bálsamo Gentil', text: 'Tu héroe se cura 16 y robá una carta.' },
  'gentle-banner': { name: 'Estandarte Gentil', text: 'Cuando entra un Oráculo tuyo: gana +1 de ataque y +2 de vida.' },
  'gentle-bard': { name: 'Bardo Gentil' },
  'gentle-return': {
    name: 'Regreso Gentil',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'gentle-ward': { name: 'Guarda Gentil', text: 'Cuando ataca un aliado enemigo: hacele 7 de daño de luz.' },
  'ghost-of-the-mainframe': { name: 'Fantasma Digital del Servidor Central', text: 'Al entrar: robá una carta.' },
  'ghoul-of-mercy': { name: 'Necrófago de la Misericordia' },
  'gideon-ironsteam': {
    name: 'Gideon Ironsteam',
    text: 'Puño de Pistón (2): hacé 5 de daño de fuego a un slot enemigo y tu héroe gana 2 de armadura.',
    flavor: 'Mitad hombre, mitad motor, todo testarudez.',
    ability: {
      name: 'Puño de Pistón',
      text: 'Hacé 5 de daño de fuego a un slot enemigo y tu héroe gana 2 de armadura.'
    }
  },
  'gideons-hammer': { name: 'Martillo de Gideon', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'gleaming-wyvern': {
    name: 'Guiverno Reluciente',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Draco tuyo. Al morir: hacé 4 de daño de arcano a un aliado enemigo al azar.'
  },
  'glitched-glitch': { name: 'Glitch Corrupto', text: 'Al atacar: hacé 2 de daño de rayo al héroe enemigo.' },
  'glitched-plan': { name: 'Plan Corrupto', text: 'Robá una carta y tu héroe se cura 3.' },
  'glyptodon-of-the-volcano': {
    name: 'Gliptodonte del Volcán',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.'
  },
  'gorrak-tyrant-king': {
    name: 'Gorrak, Rey Tirano',
    text: 'Devorar (2): hacé 4 de daño de tierra a un slot enemigo y tu héroe se cura 4. Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'La jungla tiene un solo rey. Se come a los demás.',
    ability: { name: 'Devorar', text: 'Hacé 4 de daño de tierra a un slot enemigo y tu héroe se cura 4.' }
  },
  'gorraks-cave-bear': {
    name: 'Oso Cavernario de Gorrak',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2. Al empezar cada fase: gana +1 de ataque y +1 de vida.'
  },
  'gorraks-recurve-bow': {
    name: 'Arco Recurvo de Gorrak',
    text: 'Al equiparla: hacé 4 de daño de tierra a un aliado enemigo al azar.'
  },
  'grave-hound-of-grace': { name: 'Sabueso de Tumba de la Gracia' },
  'griffin-of-the-last-stand': {
    name: 'Grifo de la Última Defensa',
    text: 'Al entrar: robá el primer Coloso de tu mazo. Al atacar: gana +1 de ataque.'
  },
  'grim-shot': {
    name: 'Disparo Sombrío',
    text: 'Hacé 2 de daño de sombra a un slot enemigo, +2 por cada Horror tuyo.'
  },
  'grim-skeleton': { name: 'Esqueleto Sombrío', text: 'Al atacar: tu héroe se cura 3.' },
  'guard-of-the-ancestors': {
    name: 'Guardia de los Ancestros',
    text: 'Tu héroe gana 13 de armadura y robá una carta.'
  },
  'guard-of-the-warlord': { name: 'Guardia del Caudillo', text: 'Tu héroe gana 12 de armadura y robá una carta.' },
  'guardian-spirit': { name: 'Espíritu Guardián' },
  'halberd-of-valor': { name: 'Alabarda del Valor', text: 'Al equiparla: robá una carta.' },
  'hallowed-battle-cry': { name: 'Grito de Guerra Consagrado', text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.' },
  'hallowed-deserter': { name: 'Desertor Consagrado', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'hallowed-dream-reader': { name: 'Lectora de Sueños Consagrada', text: 'Al entrar: tu héroe se cura 7.' },
  'hallowed-revenant': {
    name: 'Aparecido Consagrado',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada No-muerto tuyo.'
  },
  'harpoon-of-the-ambush': { name: 'Arpón de la Emboscada' },
  'harpoon-of-the-quarry': {
    name: 'Arpón de la Presa',
    text: 'Al equiparla: hacé 4 de daño a un aliado enemigo al azar.'
  },
  'hatchet-of-dawn': { name: 'Hachuela del Alba' },
  'healing-amulet': { name: 'Amuleto Sanador' },
  'healing-muster': { name: 'Leva Sanadora', text: 'Invocá un Espíritu Guardián.' },
  'healing-prayer': { name: 'Plegaria Sanadora', text: 'Tu héroe se cura 10 y robá una carta.' },
  'hex-of-dawn': { name: 'Maleficio del Alba', text: 'Adjuntala a un aliado enemigo: tiene -3 de ataque.' },
  'hex-of-lightning': { name: 'Maleficio del Relámpago', text: 'Aturdí a un aliado enemigo. Rápida.' },
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
    text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.'
  },
  'hex-of-the-hunt': {
    name: 'Maleficio de la Cacería',
    text: 'Congelá a un aliado enemigo y hacé 3 de daño de arcano al héroe enemigo.'
  },
  'hex-of-the-oracle': {
    name: 'Maleficio del Oráculo',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.'
  },
  'hex-of-thorns': { name: 'Maleficio de Espinas', text: 'Congelá a un aliado enemigo.' },
  'hollow-astronomer': {
    name: 'El Astrónomo Hueco',
    text: 'Colapsar Estrella (3): hacé 5 de daño de arcano a un slot enemigo. Al empezar cada fase, hacé 2 de daño de arcano al héroe enemigo.',
    flavor: 'Trazó el mapa de cada estrella, y después empezó a apagarlas.',
    ability: { name: 'Colapsar Estrella', text: 'Hacé 5 de daño de arcano a un slot enemigo.' }
  },
  'hollow-vision': { name: 'Visión Hueca', text: 'Robá 2 cartas.' },
  'hollow-void-spawn': {
    name: 'Engendro del Vacío Hueco',
    text: 'Al entrar: si tu pila de descarte tiene 6 cartas o más, gana +2 de ataque y +2 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 6.' }
  },
  'holo-decoy': { name: 'Señuelo Holográfico' },
  'holo-mech': { name: 'Mecha Holográfico', text: 'Al atacar: hacé 3 de daño de sónico al héroe enemigo.' },
  'holo-secret': { name: 'Secreto Holográfico', text: 'Robá 2 cartas.' },
  'hoplite-conscript': { name: 'Conscripto Hoplita' },
  'hourglass-of-ice': { name: 'Reloj de Arena de Hielo', text: 'Ganás 4 Cronos en esta fase. Instantánea.' },
  'hourglass-of-storms': { name: 'Reloj de Arena de Tormentas', text: 'Tu héroe gana 1 de energía. Instantánea.' },
  'hourglass-shard-of-borrowed-hours': {
    name: 'Esquirla de Reloj de las Horas Prestadas',
    text: 'Ganás 4 Cronos en esta fase. Instantánea.'
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
  'hydra-of-the-senate': { name: 'Hidra del Senado', text: 'Al entrar: tu héroe gana 5 de armadura.' },
  'ilyra-starweaver': {
    name: 'Ilyra Starweaver',
    text: 'Rayo Arcano (2): hacé 6 de daño de arcano a un slot enemigo.',
    flavor: 'Lee el futuro en las constelaciones, y después lo reescribe.',
    ability: { name: 'Rayo Arcano', text: 'Hacé 6 de daño de arcano a un slot enemigo.' }
  },
  'ilyras-slash': { name: 'Tajo de Ilyra', text: 'Hacé 10 de daño de arcano a un slot enemigo y robá una carta.' },
  'imperial-charioteer': {
    name: 'Auriga Imperial',
    text: 'Al morir: tus Legionarios ganan +1 de ataque y +1 de vida.'
  },
  'imperial-haruspex': { name: 'Arúspice Imperial', text: 'Al atacar: tu héroe gana 2 de armadura.' },
  'imperial-horn': { name: 'Cuerno Imperial', text: 'Invocá un Conscripto Hoplita.' },
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
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.'
  },
  'infiltrator-of-the-silent-trail': {
    name: 'Infiltradora del Rastro Silencioso',
    text: 'Al morir: hacé 3 de daño a un aliado enemigo al azar.'
  },
  'insight-of-still-waters': { name: 'Revelación de las Aguas Quietas', text: 'Robá una carta.' },
  'insight-of-the-warlord': {
    name: 'Revelación del Caudillo',
    text: 'Robá el primer Legionario de tu mazo y robá el primer Legionario de tu mazo.'
  },
  'iron-gorgon': {
    name: 'Gorgona de Hierro',
    text: 'Al entrar: robá la primera arma de tu mazo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'iron-mark': { name: 'Marca de Hierro', text: 'Adjuntala a un aliado enemigo: tiene -2 de ataque.' },
  'iron-terminal': { name: 'Terminal de Hierro', text: 'Al empezar cada fase: tu héroe se cura 3. (4 usos)' },
  'ironsteam-exosuit': { name: 'Exotraje Ironsteam', text: 'Al empezar cada fase: ganás 1 Cronos en esta fase.' },
  'javelin-of-the-wilds': { name: 'Jabalina de lo Salvaje', text: 'Al equiparla: tu héroe se cura 4.' },
  'kades-cleaver': { name: 'Cuchilla de Kade', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'kades-courier': {
    name: 'Mensajero de Kade',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Sicario tuyo. Al atacar: hacé 3 de daño al héroe enemigo.'
  },
  'kazhul-mother-of-ash': {
    name: 'Kazhul, Madre de la Ceniza',
    text: 'Aliento de Ceniza (2): hacé 3 de daño de fuego a cada aliado enemigo. Al empezar cada fase, tu héroe se cura 3.',
    flavor: 'Duerme bajo el volcán. Nadie la quiere despierta.',
    ability: { name: 'Aliento de Ceniza', text: 'Hacé 3 de daño de fuego a cada aliado enemigo.' }
  },
  'kazhuls-brontosaur': {
    name: 'Brontosaurio de Kazhul',
    text: 'Al entrar: tus otros Saurios ganan +2 de ataque y +2 de vida. Al empezar cada fase: gana +1 de ataque y +1 de vida.'
  },
  'kazhuls-longbow': {
    name: 'Arco Largo de Kazhul',
    text: 'Al equiparla: hacé 4 de daño de fuego a un aliado enemigo al azar.'
  },
  'keen-eyed-blight': { name: 'Plaga de Ojo Certero', text: 'Envenená a un aliado enemigo (3).' },
  'keen-eyed-crossbow': { name: 'Ballesta de Ojo Certero', text: 'Al equiparla: tu héroe se cura 4.' },
  'keen-eyed-daze': {
    name: 'Aturdimiento de Ojo Certero',
    text: 'Devolvé un aliado enemigo a la mano de su dueño y robá una carta. Rápida.'
  },
  'keen-eyed-hide': { name: 'Piel Curtida de Ojo Certero' },
  'keen-eyed-secret': { name: 'Secreto de Ojo Certero', text: 'Robá una carta.' },
  'kite-shield-of-iron': { name: 'Escudo Cometa de Hierro' },
  'kite-shield-of-rage': { name: 'Escudo Cometa de la Ira' },
  'kora-wildfang': {
    name: 'Kora Wildfang',
    text: 'Disparo Rápido (1): hacé 3 de daño de viento a un slot enemigo. Rápida.',
    flavor: 'La jungla le enseñó una regla: disparar primero.',
    ability: { name: 'Disparo Rápido', text: 'Hacé 3 de daño de viento a un slot enemigo.' }
  },
  'koras-blowgun': {
    name: 'Cerbatana de Kora',
    text: 'Al equiparla: hacé 4 de daño de viento a un aliado enemigo al azar.'
  },
  'lamplighter-of-the-crossroads': {
    name: 'Farolera de la Encrucijada',
    text: 'Al morir: invocá una Chispa de la Grieta. Al entrar: tu héroe se cura 4.'
  },
  'lamplighter-of-the-dawnbell': { name: 'Farolera de la Campana del Alba' },
  'lamplighter-of-the-wanderer': {
    name: 'Farolera del Errante',
    text: 'Al entrar: tus otros Errantes ganan +1 de ataque y +1 de vida.'
  },
  'lamplighter-of-thorns': {
    name: 'Farolera de Espinas',
    text: 'Al morir: hacé 5 de daño a un aliado enemigo al azar.'
  },
  'lance-of-mana': { name: 'Lanza de Maná', text: 'Hacé 9 de daño de arcano a un slot enemigo.' },
  'lance-of-runes': { name: 'Lanza de las Runas', text: 'Hacé 9 de daño de arcano a un aliado enemigo.' },
  'lance-of-the-wilds': { name: 'Lanza de lo Salvaje', text: 'Hacé 11 de daño a un slot enemigo.' },
  'lantern-of-flame': {
    name: 'Farol de Llamas',
    text: 'Al empezar cada fase: hacé 3 de daño de fuego a un aliado enemigo al azar. (3 usos)'
  },
  'lantern-of-the-foundry': {
    name: 'Farol de la Fundición',
    text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (3 usos)'
  },
  'lantern-of-the-wanderer': {
    name: 'Farol del Errante',
    text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (3 usos)'
  },
  'lantern-staff-of-mercy': {
    name: 'Bastón Farol de la Misericordia',
    text: 'Al equiparla: tu héroe gana 5 de armadura.'
  },
  'lantern-staff-of-renewal': { name: 'Bastón Farol de la Renovación' },
  'lantern-staff-of-the-dawnbell': {
    name: 'Bastón Farol de la Campana del Alba',
    text: 'Al equiparla: tu héroe se cura 6.'
  },
  'laureled-dream-reader': { name: 'Lectora de Sueños Laureada', text: 'Al entrar: robá una carta.' },
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
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.'
  },
  'leech-of-runes': {
    name: 'Sanguijuela de las Runas',
    text: 'Adjuntala a un aliado enemigo: cada daño que recibe es 3 mayor.'
  },
  'leech-of-the-quarry': { name: 'Sanguijuela de la Presa', text: 'Adjuntala a un aliado enemigo: no puede atacar.' },
  'legate-varro': {
    name: 'Legado Varro',
    text: 'Fortificar (1): tu héroe gana 5 de armadura. Instantánea.',
    flavor: 'Aguantó la línea en más siglos de los que puede contar.',
    ability: { name: 'Fortificar', text: 'Tu héroe gana 5 de armadura.' }
  },
  'longbow-of-the-hawk': { name: 'Arco Largo del Halcón' },
  'longbow-of-the-silent-trail': { name: 'Arco Largo del Rastro Silencioso' },
  'lost-chrononaut': { name: 'Crononauta Perdido' },
  'lost-stance': { name: 'Postura Perdida', text: 'Tu héroe gana 13 de armadura y robá una carta.' },
  'lost-vision': { name: 'Visión Perdida', text: 'Robá 2 cartas.' },
  'loyal-charioteer': { name: 'Auriga Leal' },
  'loyal-gorgon': {
    name: 'Gorgona Leal',
    text: 'Al entrar: hacé 1 de daño de luz al héroe enemigo por cada Coloso tuyo.'
  },
  'lucky-blessing': { name: 'Bendición Afortunada', text: 'Tu héroe se cura 12.' },
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
  'machinist-of-the-foundry': { name: 'Maquinista de la Fundición' },
  'magma-brute-of-mana': { name: 'Bruto de Magma de Maná', text: 'Al empezar cada fase: tu héroe gana 1 de energía.' },
  'magma-brute-of-the-long-road': {
    name: 'Bruto de Magma del Largo Camino',
    text: 'Al morir: tus Elementales ganan +1 de ataque y +1 de vida.'
  },
  'malachar-the-unmade': {
    name: 'Malachar el Deshecho',
    text: 'Deshacer (2): hacé 5 de daño de sombra a un slot enemigo. Si tu descarte tiene 6 cartas o más, tu héroe se cura 2. Al empezar cada fase, si tu descarte tiene 8 cartas o más, hacé 2 de daño de sombra al héroe enemigo.',
    flavor: 'Se deshizo a sí mismo para ver qué hay más allá del tiempo.',
    ability: {
      name: 'Deshacer',
      text: 'Hacé 5 de daño de sombra a un slot enemigo. Si tu descarte tiene 6 cartas o más, tu héroe se cura 2.'
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
  'map-of-the-long-road': { name: 'Mapa del Largo Camino', text: 'Destruí el arma enemiga. Rápida.' },
  'map-of-the-wanderer': {
    name: 'Mapa del Errante',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'marble-fury': { name: 'Furia de Mármol', text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.' },
  'mending-of-light': { name: 'Remedio de la Luz', text: 'Tu héroe se cura 9.' },
  'mending-of-mercy': { name: 'Remedio de la Misericordia', text: 'Tu héroe se cura 12.' },
  'mercenary-of-borrowed-hours': {
    name: 'Mercenario de las Horas Prestadas',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 6 de daño de tiempo a un slot enemigo.' }
  },
  'mercenary-of-the-crossroads': {
    name: 'Mercenario de la Encrucijada',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad.'
  },
  'mercenary-of-the-wanderer': {
    name: 'Mercenario del Errante',
    text: 'Al entrar: tu héroe gana 5 de armadura. Al empezar cada fase: tu héroe se cura 2.'
  },
  'midnight-chrome-brawler': {
    name: 'Peleador Cromado de Medianoche',
    text: 'Al entrar: el héroe enemigo pierde 1 de energía.'
  },
  'midnight-countermeasure': {
    name: 'Contramedida de Medianoche',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño de sombra al héroe enemigo.'
  },
  'midnight-daze': { name: 'Aturdimiento de Medianoche', text: 'Aturdí a un aliado enemigo. Rápida.' },
  'midnight-insignia': {
    name: 'Insignia de Medianoche',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.'
  },
  'midnight-mech': { name: 'Mecha de Medianoche', text: 'Al entrar: robá el primer Cíborg de tu mazo.' },
  'might-of-iron': { name: 'Fuerza de Hierro', text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.' },
  'might-of-light': { name: 'Fuerza de la Luz', text: 'Tus Hadas ganan +2 de ataque y +3 de vida.' },
  'might-of-lost-time': {
    name: 'Fuerza del Tiempo Perdido',
    text: 'Un aliado tuyo gana +12 de ataque en esta fase. Instantánea.'
  },
  'might-of-the-long-road': {
    name: 'Fuerza del Largo Camino',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.'
  },
  'might-of-the-tar-pits': {
    name: 'Fuerza de los Pozos de Brea',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida.'
  },
  'might-of-the-vanguard': {
    name: 'Fuerza de la Vanguardia',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.'
  },
  'might-of-the-warlord': {
    name: 'Fuerza del Caudillo',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.'
  },
  'might-of-valor': { name: 'Fuerza del Valor', text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.' },
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
    text: 'Rayo Impío (3): hacé 6 de daño de sombra a un slot enemigo y tu héroe se cura 3. Al empezar cada fase, hacé 3 de daño de sombra a un aliado enemigo al azar.',
    flavor: 'Rezó por la vida eterna. Algo le contestó.',
    ability: { name: 'Rayo Impío', text: 'Hacé 6 de daño de sombra a un slot enemigo y tu héroe se cura 3.' }
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
  'neon-thug': { name: 'Matón de Neón' },
  'net-of-ice': { name: 'Red de Hielo', text: 'Cuando el rival invoca un aliado: congelalo.' },
  'net-of-the-pack': { name: 'Red de la Jauría', text: 'Cuando el rival invoca un aliado: hacele 11 de daño.' },
  'net-of-the-quarry': { name: 'Red de la Presa', text: 'Cuando el rival invoca un aliado: hacele 5 de daño.' },
  'net-of-the-volcano': { name: 'Red del Volcán', text: 'Cuando el rival invoca un aliado: congelalo.' },
  'netrunner-of-the-grid': {
    name: 'Corredora de Red de la Red',
    text: 'Al entrar: tus otros Hackers ganan +1 de ataque y +1 de vida.'
  },
  'netrunner-of-the-pack': { name: 'Corredora de Red de la Jauría' },
  'nightmare-of-the-abyss': { name: 'Pesadilla del Abismo', text: 'Al entrar: envenená al héroe enemigo (3).' },
  'nightmare-of-the-void': {
    name: 'Pesadilla del Vacío',
    text: 'Al morir: tus Horrores ganan +1 de ataque y +1 de vida.'
  },
  'nightwire-net': {
    name: 'Red Nightwire',
    text: 'Cuando ataca un aliado enemigo: cancelá el ataque, destruilo y robá una carta.'
  },
  'nocturnal-call': { name: 'Llamado Nocturno', text: 'Invocá un Cachorro de Dientes de Sable.' },
  'nocturnal-idol': {
    name: 'Ídolo Nocturno',
    text: 'Al empezar cada fase: hacé 2 de daño de sombra al héroe enemigo. (3 usos)'
  },
  'nocturnal-shot': {
    name: 'Disparo Nocturno',
    text: 'Hacé 5 de daño de sombra a un slot enemigo, +2 por cada Errante tuyo.'
  },
  'nocturnal-vest': { name: 'Chaleco Nocturno', text: 'Al equiparla: robá una carta.' },
  'nymph-of-grace': { name: 'Ninfa de la Gracia', text: 'Al entrar: tus otros aliados ganan +2 de vida.' },
  'nymph-of-the-ancestors': { name: 'Ninfa de los Ancestros', text: 'Al morir: invocá un Espíritu Guardián.' },
  'nymph-of-the-tower': { name: 'Ninfa de la Torre' },
  'nysa-goldbow': {
    name: 'Nysa Goldbow',
    text: 'Flecha Dorada (2): hacé 4 de daño de viento a un slot enemigo. Cuando entra otro aliado tuyo, gana +1 de ataque.',
    flavor: 'Una vez cazó con los dioses. Ahora caza para ella.',
    ability: { name: 'Flecha Dorada', text: 'Hacé 4 de daño de viento a un slot enemigo.' }
  },
  'nysas-bow': { name: 'Arco de Nysa', text: 'Al equiparla: hacé 4 de daño de viento a un aliado enemigo al azar.' },
  'nyx-hollowsong': {
    name: 'Nyx Hollowsong',
    text: 'Llamar a los Caídos (2): un aliado al azar de tu descarte vuelve al juego. Al final de cada fase, tu héroe se cura 2.',
    flavor: 'Su canto llega a los muertos. Siempre vuelven a escuchar.',
    ability: { name: 'Llamar a los Caídos', text: 'Un aliado al azar de tu descarte vuelve al juego.' }
  },
  'nyxs-idol': { name: 'Ídolo de Nyx', text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.' },
  'obelisk-of-dusk': {
    name: 'Obelisco del Ocaso',
    text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (3 usos)'
  },
  'obelisk-of-flame': {
    name: 'Obelisco de Llamas',
    text: 'Al empezar cada fase: hacé 2 de daño de fuego al héroe enemigo. (3 usos)'
  },
  'obelisk-of-the-grave': {
    name: 'Obelisco de la Tumba',
    text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (4 usos)'
  },
  'oiled-clockmaker': { name: 'Relojero Aceitado', text: 'Cuando entra otro Inventor tuyo: tu héroe se cura 2.' },
  'oiled-monolith': {
    name: 'Monolito Aceitado',
    text: 'Cuando entra un Autómata tuyo: gana +1 de ataque y +2 de vida.'
  },
  'old-blessing': { name: 'Bendición Vieja', text: 'Tu héroe se cura 13 y robá una carta.' },
  'old-cartographer': { name: 'Cartógrafa Vieja', text: 'Al morir: invocá una Chispa de la Grieta.' },
  'old-chrononaut': { name: 'Crononauta Viejo', text: 'Al entrar: robá una carta.' },
  'old-potion': { name: 'Poción Vieja', text: 'Aturdí a un aliado enemigo. Rápida.' },
  'old-tusk': { name: 'Viejo Colmillo', text: 'Al entrar: tus aliados se curan 3.' },
  'omnigear-prime': {
    name: 'Omnigear Prime',
    text: 'Línea de Montaje (3): tus aliados ganan +2 de ataque y +2 de vida. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'La máquina que construye máquinas decidió que ya no necesita constructores.',
    ability: { name: 'Línea de Montaje', text: 'Tus aliados ganan +2 de ataque y +2 de vida.' }
  },
  'omnigears-gyrocopter': {
    name: 'Girocóptero de Omnigear',
    text: 'Al entrar: tus otras Aeronaves ganan +2 de ataque y +2 de vida. Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'omnigears-hammer': { name: 'Martillo de Omnigear', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'ooma-bonewhisper': {
    name: 'Ooma Bonewhisper',
    text: 'Crecimiento Ancestral (2): un aliado tuyo gana +2 de ataque y +3 de vida. Al empezar cada fase, tus aliados se curan 2.',
    flavor: 'Los huesos de los ancestros hablan. Ella escucha.',
    ability: { name: 'Crecimiento Ancestral', text: 'Un aliado tuyo gana +2 de ataque y +3 de vida.' }
  },
  'oomas-banner': {
    name: 'Estandarte de Ooma',
    text: 'Al empezar cada fase: tu héroe se cura 3 y tus aliados se curan 2.'
  },
  'orb-of-flame': { name: 'Orbe de Llamas', text: 'Al equiparla: robá una carta.' },
  'orb-of-storms': { name: 'Orbe de Tormentas', text: 'Al equiparla: robá una carta.' },
  'overclocked-piston-titan': {
    name: 'Titán de Pistones Acelerado',
    text: 'Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'overdriven-sentry-bot': {
    name: 'Robot Centinela Sobrecargado',
    text: 'Al terminar cada fase: hacé 1 de daño de sónico al héroe enemigo.'
  },
  'overseer-kade': {
    name: 'Supervisor Kade',
    text: 'Bloqueo Total (4): aturdí a un aliado enemigo por dos fases. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Ve todas las cámaras de la megaciudad. Todas a la vez.',
    ability: { name: 'Bloqueo Total', text: 'Aturdí a un aliado enemigo por dos fases.' }
  },
  'pale-voidcaller': { name: 'Invocadora del Vacío Pálida' },
  'pale-zealot': {
    name: 'Fanática Pálida',
    text: 'Al entrar: robá el primer Cultista de tu mazo. Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'patchwork-armor-of-lost-time': {
    name: 'Armadura de Retazos del Tiempo Perdido',
    text: 'Al equiparla: robá una carta.'
  },
  'patented-tick': { name: 'Tic Patentado', text: 'Tu héroe gana 3 de energía. Instantánea.' },
  'patented-tripwire': { name: 'Cable Trampa Patentado', text: 'Cuando el rival invoca un aliado: hacele 7 de daño.' },
  'patient-bard': { name: 'Bardo Paciente', text: 'Al entrar: robá la primera trampa de tu mazo.' },
  'patient-sabertooth': {
    name: 'Dientes de Sable Paciente',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable. Al morir: hacé 8 de daño a un aliado enemigo al azar.'
  },
  'patient-sabotage': {
    name: 'Sabotaje Paciente',
    text: 'El arma enemiga pierde 2 de durabilidad y el héroe enemigo pierde 6 de armadura. Rápida.'
  },
  'patient-vest': { name: 'Chaleco Paciente' },
  'pegasus-of-still-waters': { name: 'Pegaso de las Aguas Quietas' },
  'pegasus-of-the-tower': { name: 'Pegaso de la Torre', text: 'Al entrar: robá la primera Hada de tu mazo.' },
  'phalanx-of-bronze': { name: 'Falange de Bronce' },
  'phalanx-of-steel': { name: 'Falange de Acero', text: 'Al entrar: si tenés otro Legionario, robá una carta.' },
  'phalanx-of-the-legion': { name: 'Falange de la Legión', text: 'Al entrar: tu héroe gana 9 de armadura.' },
  'phalanx-of-the-warlord': { name: 'Falange del Caudillo', text: 'Al atacar: gana +1 de ataque.' },
  'pickaxe-of-borrowed-hours': { name: 'Pico de las Horas Prestadas', text: 'Al equiparla: tu héroe se cura 4.' },
  'pickaxe-of-lost-time': { name: 'Pico del Tiempo Perdido', text: 'Al equiparla: tu héroe gana 6 de armadura.' },
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
  'pit-of-iron': { name: 'Foso de Hierro', text: 'Cuando el rival invoca un aliado: congelalo.' },
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
  'plate-of-rage': { name: 'Coraza de la Ira' },
  'plate-of-steel': { name: 'Coraza de Acero' },
  'plate-of-the-last-stand': { name: 'Coraza de la Última Defensa', text: 'Al equiparla: robá una carta.' },
  'plating-of-mana': { name: 'Blindaje de Maná', text: 'Adjuntala a un aliado tuyo: gana +3 de ataque y +5 de vida.' },
  'precise-clockmaker': { name: 'Relojero Preciso', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'prismatic-battlemage': {
    name: 'Mago de Batalla Prismático',
    text: 'Al morir: tus Hechiceros ganan +1 de ataque y +1 de vida. Al entrar: tu héroe gana 1 de energía.'
  },
  'prophet-of-the-labyrinth': {
    name: 'Profeta del Laberinto',
    text: 'Al empezar cada fase: tu héroe gana 2 de armadura. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Inspirar', text: 'Un aliado tuyo gana +1 de ataque y +2 de vida.' }
  },
  'proud-gorgon': {
    name: 'Gorgona Orgullosa',
    text: 'Al entrar: invocá un Conscripto Hoplita. Al atacar: tu héroe gana 2 de armadura.'
  },
  'queen-static': {
    name: 'Reina Estática',
    text: 'Retroalimentación (2): hacé 4 de daño de rayo a un slot enemigo. Rápida. Al final de cada fase, hacé 2 de daño de rayo al héroe enemigo.',
    flavor: 'Vive en el ruido entre los canales.',
    ability: { name: 'Retroalimentación', text: 'Hacé 4 de daño de rayo a un slot enemigo.' }
  },
  'queen-statics-blowgun': {
    name: 'Cerbatana de la Reina Estática',
    text: 'Al equiparla: hacé 4 de daño de rayo a un aliado enemigo al azar.'
  },
  'queen-statics-gunslinger': {
    name: 'Pistolera de la Reina Estática',
    text: 'Al morir: tus Sicarios ganan +1 de ataque y +1 de vida. Al terminar cada fase: hacé 1 de daño de rayo al héroe enemigo.'
  },
  'radiant-fury': { name: 'Furia Radiante', text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.' },
  'radiant-halo': { name: 'Halo Radiante' },
  'radiant-insignia': { name: 'Insignia Radiante', text: 'Adjuntala a un aliado tuyo: gana +2 de vida.' },
  'radiant-stance': { name: 'Postura Radiante', text: 'Tu héroe gana 12 de armadura y robá una carta.' },
  'radiant-zombie': { name: 'Zombi Radiante' },
  'rally-of-grace': { name: 'Arenga de la Gracia', text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.' },
  'rally-of-light': { name: 'Arenga de la Luz', text: 'Un aliado tuyo gana +10 de ataque en esta fase. Instantánea.' },
  'rally-of-lost-time': {
    name: 'Arenga del Tiempo Perdido',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.'
  },
  'rally-of-steel': { name: 'Arenga de Acero', text: 'Tus Colosos ganan +1 de ataque y +2 de vida.' },
  'rally-of-the-arcanum': {
    name: 'Arenga del Arcano',
    text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.'
  },
  'rally-of-the-hawk': {
    name: 'Arenga del Halcón',
    text: 'Un aliado tuyo gana +4 de ataque y +5 de vida. Instantánea.'
  },
  'rally-of-the-hunt-moon': {
    name: 'Arenga de la Luna de Caza',
    text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.'
  },
  'rally-of-the-labyrinth': {
    name: 'Arenga del Laberinto',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.'
  },
  'rally-of-the-volcano': {
    name: 'Arenga del Volcán',
    text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.'
  },
  'rally-of-valor': { name: 'Arenga del Valor', text: 'Un aliado tuyo gana +1 de ataque y +1 de vida.' },
  'raptor-hatchling': { name: 'Cría de Raptor' },
  'recruit-of-the-warlord': { name: 'Recluta del Caudillo', text: 'Al entrar: robá la primera arma de tu mazo.' },
  'relentless-fury': { name: 'Furia Implacable', text: 'Un aliado tuyo gana +4 de ataque en esta fase. Instantánea.' },
  'relentless-hitman': { name: 'Asesino a Sueldo Implacable' },
  'relentless-rune': { name: 'Runa Implacable', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.' },
  'relic-of-the-ancestors': {
    name: 'Reliquia de los Ancestros',
    text: 'Al empezar cada fase: hacé 2 de daño de luz a un aliado enemigo al azar.'
  },
  'respite-of-mercy': { name: 'Respiro de la Misericordia', text: 'Tu héroe se cura 9.' },
  'respite-of-renewal': { name: 'Respiro de la Renovación', text: 'Tu héroe se cura 9.' },
  'respite-of-the-crossroads': { name: 'Respiro de la Encrucijada', text: 'Tu héroe se cura 6.' },
  'restless-banner': {
    name: 'Estandarte Inquieto',
    text: 'Al empezar cada fase: hacé 3 de daño a un aliado enemigo al azar. (3 usos)'
  },
  'restless-deserter': { name: 'Desertor Inquieto', text: 'Al entrar: robá una carta.' },
  'restless-icicle': { name: 'Carámbano Inquieto', text: 'Al entrar: destruí el artefacto enemigo más caro.' },
  'restless-ration': { name: 'Ración Inquieta', text: 'Un aliado tuyo gana +6 de ataque en esta fase. Instantánea.' },
  'restless-wanderer': { name: 'Vagabundo Inquieto', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'rift-spark': { name: 'Chispa de la Grieta' },
  'rift-touched-idol': {
    name: 'Ídolo Tocado por la Grieta',
    text: 'Al empezar cada fase: tu héroe se cura 4. (3 usos)'
  },
  'rift-touched-squire': { name: 'Escudero Tocado por la Grieta', text: 'Al morir: robá una carta.' },
  'rift-touched-wanderer': {
    name: 'Vagabundo Tocado por la Grieta',
    text: 'Al entrar: robá una carta. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'risen-skeleton': { name: 'Esqueleto Alzado' },
  'ritualist-of-ash': {
    name: 'Ritualista de Ceniza',
    text: 'Al entrar: sacrificá a tu otro aliado más débil: si lo hacés, robá 2 cartas.'
  },
  'riveted-blessing': {
    name: 'Bendición Remachada',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +3 de vida.'
  },
  'riveted-tick': { name: 'Tic Remachado', text: 'Ganás 4 Cronos en esta fase. Instantánea.' },
  'rod-of-ruin': { name: 'Vara de la Ruina', text: 'Al equiparla: tu héroe gana 7 de armadura.' },
  'rotting-eye-of-nothing': {
    name: 'Ojo de la Nada Putrefacto',
    text: 'Al entrar: tus otros Horrores ganan +1 de ataque y +1 de vida.'
  },
  'rotting-hierophant': { name: 'Hierofante Putrefacto', text: 'Al morir: invocá un Esqueleto Alzado.' },
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
  'rusty-sabotage': { name: 'Sabotaje Oxidado', text: 'Destruí el arma enemiga. Rápida.' },
  'ryn-voltblade': {
    name: 'Ryn Voltblade',
    text: 'Sobrecarga (1): un aliado tuyo gana +4 de ataque esta fase. Instantánea. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'La hoja más rápida de la megaciudad.',
    ability: { name: 'Sobrecarga', text: 'Un aliado tuyo gana +4 de ataque esta fase.' }
  },
  'ryns-mace': { name: 'Maza de Ryn', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'sabertooth-cub': { name: 'Cachorro de Dientes de Sable' },
  'salve-of-the-wanderer': { name: 'Ungüento del Errante', text: 'Tu héroe se cura 6.' },
  'sandstorm-of-dawn': { name: 'Tormenta de Arena del Alba', text: 'Al entrar: tu héroe gana 7 de armadura.' },
  'satyr-of-embers': { name: 'Sátiro de Brasas', text: 'Al entrar: tus otras Hadas ganan +2 de ataque y +2 de vida.' },
  'satyr-of-renewal': { name: 'Sátiro de la Renovación', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'scarred-cave-painter': {
    name: 'Pintora de Cuevas Marcada',
    text: 'Al entrar: tus otros Cavernarios ganan +1 de ataque y +1 de vida.'
  },
  'scarred-raptor': { name: 'Raptor Marcado' },
  'scarred-spearman': { name: 'Lancero Marcado', text: 'Cuando recibe daño: gana +2 de ataque.' },
  'scavenger-of-borrowed-hours': {
    name: 'Carroñera de las Horas Prestadas',
    text: 'Al entrar: destruí el artefacto enemigo más caro. Al morir: robá una carta.'
  },
  'scavenger-of-storms': {
    name: 'Carroñera de Tormentas',
    text: 'Al entrar: hacé 4 de daño de rayo a un aliado enemigo al azar.'
  },
  'scavenger-of-the-ambush': { name: 'Carroñera de la Emboscada', text: 'Al atacar: hacé 2 de daño al héroe enemigo.' },
  'scavenger-of-the-crossroads': {
    name: 'Carroñera de la Encrucijada',
    text: 'Al entrar: ganás 1 Cronos en esta fase. Al morir: robá una carta.'
  },
  'scavenger-of-the-rift': {
    name: 'Carroñera de la Grieta',
    text: 'Cuando entra otro Errante tuyo: gana +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 4 de daño de tiempo a un slot enemigo.' }
  },
  'scepter-of-flame': { name: 'Cetro de Llamas', text: 'Al equiparla: robá una carta.' },
  'scepter-of-storms': { name: 'Cetro de Tormentas' },
  'scholarly-daze': { name: 'Aturdimiento Docto', text: 'Aturdí a un aliado enemigo. Rápida.' },
  'scholarly-pyromancer': {
    name: 'Piromante Docto',
    text: 'Al entrar: hacé 5 de daño de fuego a un aliado enemigo al azar.'
  },
  'scholarly-rust': {
    name: 'Herrumbre Docta',
    text: 'El arma enemiga pierde 2 de durabilidad y el héroe enemigo pierde 6 de armadura. Rápida.'
  },
  'scholarly-stasis': {
    name: 'Estasis Docta',
    text: 'Congelá a un aliado enemigo y hacé 2 de daño de tiempo al héroe enemigo.'
  },
  'scrap-plate-of-the-rift': { name: 'Coraza de Chatarra de la Grieta' },
  'serene-prayer-staff': { name: 'Vara de Plegarias Serena', text: 'Al equiparla: robá una carta.' },
  'serene-return': {
    name: 'Regreso Sereno',
    text: 'Un aliado al azar de tu pila de descarte vuelve al juego y tu héroe se cura 4. Lenta.'
  },
  'serene-rune': { name: 'Runa Serena', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +4 de vida.' },
  'serene-saddle': {
    name: 'Montura Serena',
    text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida. Cuando ese aliado muere: robá una carta.'
  },
  'serene-stance': { name: 'Postura Serena', text: 'Tu héroe gana 6 de armadura. Instantánea.' },
  'shackle-of-dawn': { name: 'Grillete del Alba', text: 'Aturdí a un aliado enemigo. Rápida.' },
  'shackle-of-the-pack': {
    name: 'Grillete de la Jauría',
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'shade-of-dying-stars': { name: 'Sombra de las Estrellas Moribundas' },
  'sharp-blessing': { name: 'Bendición Afilada', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'sharp-boar': { name: 'Jabalí Afilado', text: 'Al entrar: hacé 3 de daño a un aliado enemigo al azar.' },
  'sharp-crossbow': { name: 'Ballesta Afilada' },
  'sharp-jerkin': { name: 'Jubón Afilado', text: 'Al equiparla: robá una carta.' },
  'sharp-raptor': { name: 'Raptor Afilado', text: 'Al morir: tus Saurios ganan +1 de ataque y +1 de vida.' },
  'shatter-of-the-long-road': {
    name: 'Quiebre del Largo Camino',
    text: 'El arma enemiga pierde 2 de durabilidad y el héroe enemigo pierde 6 de armadura. Rápida.'
  },
  'signifer-lucius': { name: 'Signífero Lucio', text: 'Al entrar: tus otros aliados ganan +1 de ataque y +2 de vida.' },
  'silent-monolith': { name: 'Monolito Silencioso', text: 'Cada daño que reciben tus aliados es 1 menor.' },
  'silk-wrap-of-ruin': { name: 'Envoltura de Seda de la Ruina', text: 'Al equiparla: tus aliados se curan 2.' },
  'silver-sprite': { name: 'Duende Plateado' },
  'silver-wisp': { name: 'Fuego Fatuo Plateado' },
  'slash-of-rot': { name: 'Tajo de la Podredumbre', text: 'Hacé 15 de daño de sombra a un aliado enemigo.' },
  'slash-of-the-last-stand': { name: 'Tajo de la Última Defensa', text: 'Hacé 6 de daño a un slot enemigo.' },
  'slash-of-the-long-road': { name: 'Tajo del Largo Camino', text: 'Hacé 11 de daño a un slot enemigo.' },
  'sling-of-thorns': { name: 'Honda de Espinas' },
  'slinger-of-bronze': { name: 'Hondero de Bronce', text: 'Al morir: tus otros aliados ganan +1 de ataque.' },
  'slinger-of-the-sun-temple': { name: 'Hondero del Templo del Sol', text: 'Al entrar: invocá un Conscripto Hoplita.' },
  'snare-of-dusk': { name: 'Lazo del Ocaso', text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.' },
  'snare-of-embers': { name: 'Lazo de Brasas', text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.' },
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
    text: 'Aturdí a un aliado enemigo por dos fases y robá una carta. Rápida.'
  },
  'snare-of-the-wilds': {
    name: 'Lazo de lo Salvaje',
    text: 'Cuando ataca un aliado enemigo: cancelá el ataque y aturdilo.'
  },
  'solar-archer': {
    name: 'Arquero Solar',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Legionario tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Aturdir', text: 'Aturdí a un aliado enemigo.' }
  },
  'solar-idol': { name: 'Ídolo Solar', text: 'Al empezar cada fase: robá una carta. (3 usos)' },
  'solar-muster': { name: 'Leva Solar', text: 'Invocá 2 Conscriptos Hoplitas.' },
  'spark-of-dusk': { name: 'Chispa del Ocaso', text: 'Al empezar cada fase: tu héroe se cura 2.' },
  'spark-of-the-crossroads': { name: 'Chispa de la Encrucijada' },
  'spider-engine-of-the-foundry': {
    name: 'Araña Mecánica de la Fundición',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Autómata tuyo.'
  },
  'spike-of-storms': { name: 'Púa de Tormentas', text: 'Hacé 11 de daño de rayo a un aliado enemigo.' },
  'spike-of-the-ambush': {
    name: 'Púa de la Emboscada',
    text: 'Hacé 3 de daño a un slot enemigo, +2 por cada Hacker tuyo.'
  },
  'spike-of-the-comet': { name: 'Púa del Cometa', text: 'Hacé 9 de daño de arcano a un slot enemigo.' },
  'spike-of-the-hawk': { name: 'Púa del Halcón', text: 'Hacé 9 de daño de viento a un slot enemigo.' },
  'spike-of-the-hunt': { name: 'Púa de la Cacería', text: 'Hacé 4 de daño a un aliado enemigo. Rápida.' },
  'spike-of-the-oracle': { name: 'Púa del Oráculo', text: 'Hacé 8 de daño de luz a un slot enemigo.' },
  'spike-of-the-wanderer': { name: 'Púa del Errante', text: 'Hacé 11 de daño a un slot enemigo.' },
  'spinosaur-of-the-hunt': {
    name: 'Espinosaurio de la Cacería',
    text: 'Al entrar: hacé 1 de daño al héroe enemigo por cada Saurio tuyo. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Golpe', text: 'Hacé 5 de daño a un slot enemigo.' }
  },
  'spinosaur-of-the-tar-pits': {
    name: 'Espinosaurio de los Pozos de Brea',
    text: 'Cuando entra otro Saurio tuyo: gana +2 de ataque y +2 de vida.'
  },
  'spirit-bound-bell': { name: 'Campana Ligada a los Espíritus' },
  'spirit-bound-disarm': {
    name: 'Desarme Ligado a los Espíritus',
    text: 'El arma enemiga pierde 2 de durabilidad y el héroe enemigo pierde 6 de armadura. Rápida.'
  },
  'spirit-bound-shroud': { name: 'Sudario Ligado a los Espíritus' },
  'stalking-blight': { name: 'Plaga Acechante', text: 'Envenená a un aliado enemigo (2).' },
  'stalking-fortune-teller': {
    name: 'Adivina Acechante',
    text: 'Al entrar: hacé 3 de daño a un aliado enemigo al azar. Al atacar: hacé 1 de daño al héroe enemigo.'
  },
  'stalwart-battle-cry': {
    name: 'Grito de Guerra Firme',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'stalwart-saddle': { name: 'Montura Firme', text: 'Adjuntala a un aliado tuyo: gana +2 de ataque y +5 de vida.' },
  'stalwart-street-samurai': { name: 'Samurái Callejero Firme', text: 'Al entrar: tu héroe gana 8 de armadura.' },
  'standard-bearer-of-the-last-stand': {
    name: 'Abanderado de la Última Defensa',
    text: 'Al atacar: gana +1 de ataque.'
  },
  'standard-bearer-of-the-laurel': {
    name: 'Abanderado del Laurel',
    text: 'Al entrar: tu héroe gana 7 de armadura. Al empezar cada fase: tu héroe gana 2 de armadura.'
  },
  'starlit-dragon': { name: 'Dragón Estelar', text: 'Al entrar: aturdí a un aliado enemigo al azar.' },
  'starweavers-astrolabe': { name: 'Astrolabio de Ilyra', text: 'Robá 2 cartas y ganás 2 Cronos en esta fase.' },
  'stegosaur-of-the-first-fire': {
    name: 'Estegosaurio del Primer Fuego',
    text: 'Al entrar: gana +1 de ataque y +2 de vida.'
  },
  'stegosaur-of-the-hunt': {
    name: 'Estegosaurio de la Cacería',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.'
  },
  'sting-of-the-silent-trail': { name: 'Aguijón del Rastro Silencioso', text: 'Envenená a un aliado enemigo (3).' },
  'stole-of-light': { name: 'Estola de la Luz' },
  'stole-of-renewal': { name: 'Estola de la Renovación' },
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
  'stray-cartographer': { name: 'Cartógrafa Extraviada', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'stray-fury': { name: 'Furia Extraviada', text: 'Un aliado tuyo gana +3 de ataque y +4 de vida. Instantánea.' },
  'stray-leather-coat': { name: 'Abrigo de Cuero Extraviado' },
  'stray-strike': { name: 'Golpe Extraviado', text: 'Hacé 8 de daño a un aliado enemigo.' },
  'study-of-dawn': { name: 'Estudio del Alba', text: 'Robá una carta y tu héroe se cura 3.' },
  'study-of-flame': { name: 'Estudio de Llamas', text: 'Robá 2 cartas.' },
  'summons-of-steam': { name: 'Convocatoria de Vapor', text: 'Invocá un Dron de Engranajes.' },
  'summons-of-the-wilds': { name: 'Convocatoria de lo Salvaje', text: 'Invocá un Cachorro de Dientes de Sable.' },
  'sundial-of-borrowed-hours': {
    name: 'Reloj de Sol de las Horas Prestadas',
    text: 'Al empezar cada fase: tu héroe gana 1 de energía. (3 usos)'
  },
  'sundial-of-the-last-hour': {
    name: 'Reloj de Sol de la Última Hora',
    text: 'Al empezar cada fase: tu héroe se cura 3. (3 usos)'
  },
  'swift-pterodon': { name: 'Pterodonte Veloz' },
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
  'tar-soaked-sabertooth': { name: 'Dientes de Sable Empapado de Brea', text: 'Al atacar: tu héroe se cura 3.' },
  'tauron-labyrinth-lord': {
    name: 'Tauron, Señor del Laberinto',
    text: 'Cornada (3): hacé 6 de daño de tierra a un slot enemigo. Al empezar cada fase, tu héroe gana 2 de armadura.',
    flavor: 'Nadie que entró a su laberinto encontró la salida.',
    ability: { name: 'Cornada', text: 'Hacé 6 de daño de tierra a un slot enemigo.' }
  },
  'taurons-halberd': { name: 'Alabarda de Tauron', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'taurons-prophet': {
    name: 'Profeta de Tauron',
    text: 'Al entrar: si tenés otro Oráculo, robá una carta. Al morir: tus otros aliados ganan +1 de ataque.'
  },
  'tempest-of-the-arcanum': {
    name: 'Tempestad del Arcano',
    text: 'Hacé 6 de daño de viento a todos los aliados enemigos. Lenta.'
  },
  'temple-keeper-of-the-laurel': {
    name: 'Guardiana del Templo del Laurel',
    text: 'Al entrar: si tenés otro Oráculo, robá una carta.'
  },
  'temple-keeper-of-the-sun-temple': { name: 'Guardiana del Templo del Templo del Sol' },
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
  'thunderhead-of-dawn': { name: 'Nubarrón del Alba', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'thunderhead-of-dusk': { name: 'Nubarrón del Ocaso', text: 'Al entrar: robá una carta.' },
  'thunderhead-of-the-comet': {
    name: 'Nubarrón del Cometa',
    text: 'Al entrar: tus otros Elementales ganan +1 de ataque y +1 de vida. Su habilidad se paga con energía (⚡).',
    ability: { name: 'Curar', text: 'Un aliado tuyo se cura 5.' }
  },
  'thundering-gatherer': { name: 'Recolectora Atronadora', text: 'Al entrar: gana +1 de ataque y +2 de vida.' },
  'thundering-raptor': { name: 'Raptor Atronador', text: 'Al morir: invocá una Cría de Raptor.' },
  'thundering-sabertooth': {
    name: 'Dientes de Sable Atronador',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.'
  },
  'timeless-fortune-teller': { name: 'Adivina Atemporal', text: 'Al entrar: ganás 1 Cronos en esta fase.' },
  'timeless-gust': { name: 'Ráfaga Atemporal', text: 'Al morir: invocá una Chispa de la Grieta.' },
  'timeless-icicle': {
    name: 'Carámbano Atemporal',
    text: 'Al entrar: el arma enemiga pierde 1 de durabilidad. Al morir: robá una carta.'
  },
  'timeless-rune': { name: 'Runa Atemporal', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'timeless-tick': { name: 'Tic Atemporal', text: 'Ganás 3 Cronos en esta fase. Instantánea.' },
  'timeless-tide': { name: 'Marea Atemporal' },
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
  'totem-of-the-herd': { name: 'Tótem de la Manada', text: 'Al empezar cada fase: tu héroe se cura 3.' },
  'towering-boss': { name: 'Jefa Imponente', text: 'Al entrar: tus otros Sicarios ganan +1 de ataque y +1 de vida.' },
  'towering-disarm': { name: 'Desarme Imponente', text: 'Destruí el arma enemiga. Rápida.' },
  'towering-mace': { name: 'Maza Imponente' },
  'toxin-of-midnight': { name: 'Toxina de Medianoche', text: 'Envenená a un aliado enemigo (3).' },
  'toxin-of-pistons': { name: 'Toxina de Pistones', text: 'Envenená a un aliado enemigo (2).' },
  'tracking-countermeasure': {
    name: 'Contramedida Rastreadora',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño al héroe enemigo.'
  },
  'tracking-dagger': { name: 'Daga Rastreadora', text: 'Al equiparla: hacé 4 de daño a un aliado enemigo al azar.' },
  'tracking-horn': { name: 'Cuerno Rastreador', text: 'Invocá un Cachorro de Dientes de Sable.' },
  'tracking-stasis': { name: 'Estasis Rastreadora', text: 'Congelá a un aliado enemigo.' },
  'tracking-vest': { name: 'Chaleco Rastreador' },
  'tracking-woolly-rhino': {
    name: 'Rinoceronte Lanudo Rastreador',
    text: 'Cuando entra otra Fiera tuya: tu héroe se cura 2.'
  },
  'triceratops-of-the-herd': {
    name: 'Triceratops de la Manada',
    text: 'Al entrar: gana +1 de ataque y +1 de vida por cada otro Saurio tuyo.'
  },
  'twilight-cryomancer': { name: 'Criomante Crepuscular' },
  'unbound-hierophant': {
    name: 'Hierofante Desatado',
    text: 'Al entrar: envenená al héroe enemigo (3). Al morir: hacé 3 de daño de sombra al héroe enemigo.'
  },
  'unbound-ruin': { name: 'Ruina Desatada', text: 'Destruí a un aliado enemigo. Lenta.' },
  'unbroken-hitman': { name: 'Asesino a Sueldo Invicto', text: 'Al atacar: gana +1 de ataque.' },
  'unbroken-merchant': { name: 'Mercader Invicto', text: 'Al atacar: gana +1 de ataque.' },
  'unbroken-plan': { name: 'Plan Invicto', text: 'Robá el primer Errante de tu mazo y tu héroe se cura 3.' },
  'unyielding-charioteer': { name: 'Auriga Inquebrantable', text: 'Al entrar: robá el primer Legionario de tu mazo.' },
  'unyielding-trap': {
    name: 'Trampa Inquebrantable',
    text: 'Cuando el rival usa una habilidad: robá una carta y hacé 4 de daño de luz al héroe enemigo.'
  },
  'varros-glaive': { name: 'Guja de Varro', text: 'Al equiparla: tu héroe gana 5 de armadura.' },
  'venom-of-the-hunt': { name: 'Veneno de la Cacería', text: 'Envenená a un aliado enemigo (3).' },
  'venomous-data-thief': {
    name: 'Ladrón de Datos Venenoso',
    text: 'Al entrar: invocá un Cachorro de Dientes de Sable.'
  },
  'venomous-jerkin': { name: 'Jubón Venenoso', text: 'Al equiparla: robá una carta.' },
  'venomous-tripwire': {
    name: 'Cable Trampa Venenoso',
    text: 'Cuando el rival invoca un aliado: hacele 7 de daño de ácido.'
  },
  'vestments-of-renewal': { name: 'Hábito de la Renovación', text: 'Al equiparla: tus aliados se curan 2.' },
  'veteran-of-the-shieldwall': { name: 'Veterano del Muro de Escudos', text: 'Al atacar: gana +1 de ataque.' },
  'vex-nightwire': {
    name: 'Vex Nightwire',
    text: 'Disparo Hackeado (1): hacé 3 de daño de sombra a un slot enemigo. Instantánea. Al final de cada fase, hacé 1 de daño de sombra al héroe enemigo.',
    flavor: 'Caza blancos que nadie más puede encontrar.',
    ability: { name: 'Disparo Hackeado', text: 'Hacé 3 de daño de sombra a un slot enemigo.' }
  },
  'vexs-sling': { name: 'Honda de Vex', text: 'Al equiparla: hacé 4 de daño de sombra a un aliado enemigo al azar.' },
  'victorious-bronze-giant': { name: 'Gigante de Bronce Victorioso', text: 'Al entrar: tu héroe gana 8 de armadura.' },
  'victorious-minotaur': { name: 'Minotauro Victorioso' },
  'vigor-of-dusk': { name: 'Vigor del Ocaso', text: 'Un aliado tuyo gana +12 de ataque en esta fase. Instantánea.' },
  'vigor-of-the-ancestors': {
    name: 'Vigor de los Ancestros',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'vigor-of-the-archmage': { name: 'Vigor del Archimago', text: 'Un aliado tuyo gana +4 de ataque y +5 de vida.' },
  'vigor-of-the-jungle': {
    name: 'Vigor de la Jungla',
    text: 'Un aliado tuyo gana +8 de ataque en esta fase. Instantánea.'
  },
  'vigor-of-the-shieldwall': {
    name: 'Vigor del Muro de Escudos',
    text: 'Un aliado tuyo gana +5 de ataque y +7 de vida.'
  },
  'virus-of-dusk': { name: 'Virus del Ocaso', text: 'Adjuntala a un aliado enemigo: tiene -5 de ataque.' },
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
  'vorhal-the-last-hour': {
    name: 'Vorhal, la Última Hora',
    text: 'Campanada Final (3): hacé 2 de daño de tiempo a cada aliado enemigo. Al empezar cada fase, hacé 1 de daño de tiempo al héroe enemigo.',
    flavor: 'Cuando se detiene el último reloj, queda él.',
    ability: { name: 'Campanada Final', text: 'Hacé 2 de daño de tiempo a cada aliado enemigo.' }
  },
  'vorhals-flagellant': {
    name: 'Flagelante de Vorhal',
    text: 'Cuando entra otro Cultista tuyo: tu héroe se cura 2. Al morir: invocá un Esqueleto Alzado.'
  },
  'vorhals-spike': { name: 'Púa de Vorhal', text: 'Hacé 10 de daño de tiempo a un slot enemigo y robá una carta.' },
  'wandering-ferryman': { name: 'Barquero Errante', text: 'Al morir: robá una carta.' },
  'wandering-gust': { name: 'Ráfaga Errante', text: 'Al entrar: tu héroe se cura 5. Al morir: robá una carta.' },
  'wandering-mist': {
    name: 'Neblina Errante',
    text: 'Cuando entra otro Elemental tuyo: gana +1 de ataque y +1 de vida. Al empezar cada fase: tu héroe se cura 2.'
  },
  'wandering-monolith': {
    name: 'Monolito Errante',
    text: 'Al empezar cada fase: tu héroe gana 3 de armadura. (3 usos)'
  },
  'wandering-plan': { name: 'Plan Errante', text: 'Robá 2 cartas.' },
  'wandering-rune': { name: 'Runa Errante', text: 'Adjuntala a un aliado tuyo: gana +1 de ataque y +4 de vida.' },
  'wandering-stasis': { name: 'Estasis Errante', text: 'Devolvé un aliado enemigo a la mano de su dueño. Rápida.' },
  'wandering-wanderer': { name: 'Vagabundo Errante' },
  'warpick-of-iron': { name: 'Pico de Guerra de Hierro', text: 'Al equiparla: robá una carta.' },
  'warpick-of-rage': { name: 'Pico de Guerra de la Ira' },
  'warpick-of-the-last-stand': { name: 'Pico de Guerra de la Última Defensa' },
  'warpick-of-the-warlord': { name: 'Pico de Guerra del Caudillo', text: 'Al equiparla: tu héroe se cura 3.' },
  'weary-merchant': { name: 'Mercader Cansado', text: 'Al morir: robá una carta.' },
  'weary-plan': { name: 'Plan Cansado', text: 'Robá 2 cartas.' },
  'weary-stasis': { name: 'Estasis Cansada', text: 'Congelá a un aliado enemigo.' },
  'whispering-void-spawn': {
    name: 'Engendro del Vacío Susurrante',
    text: 'Al entrar: hacé 1 de daño de sombra al héroe enemigo por cada Horror tuyo. Al morir: invocá un Esqueleto Alzado.'
  },
  'wild-boar': { name: 'Jabalí Silvestre', text: 'Al atacar: hacé 2 de daño al héroe enemigo.' },
  'wild-crossbow': { name: 'Ballesta Silvestre' },
  'wild-shot': { name: 'Disparo Silvestre', text: 'Hacé 7 de daño a un aliado enemigo. Rápida.' },
  'wild-tyrant': { name: 'Tirano Silvestre', text: 'Al entrar: invocá un Cachorro de Dientes de Sable.' },
  'wind-up-mechanic': { name: 'Mecánica a Cuerda' },
  'wind-up-soldier-of-pistons': {
    name: 'Soldado de Cuerda de Pistones',
    text: 'Al entrar: tu héroe gana 4 de armadura.'
  },
  'wind-up-tin-sentry': {
    name: 'Centinela de Hojalata a Cuerda',
    text: 'Al entrar: robá el primer Autómata de tu mazo.'
  },
  'wired-tripwire': { name: 'Cable Trampa Conectado', text: 'Cuando el rival invoca un aliado: congelalo.' },
  'wise-stasis': { name: 'Estasis Sabia', text: 'Congelá a un aliado enemigo.' },
  'xulthar-the-devourer': {
    name: "Xul'thar el Devorador",
    text: 'Consumir (3): hacé 5 de daño de ácido a un slot enemigo y tu héroe se cura 4. Al empezar cada fase, si tu descarte tiene 10 cartas o más, un aliado al azar de tu descarte vuelve al juego.',
    flavor: 'Se comió la última estrella. Todavía tiene hambre.',
    ability: { name: 'Consumir', text: 'Hacé 5 de daño de ácido a un slot enemigo y tu héroe se cura 4.' }
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
  'young-tyrant': { name: 'Tirano Joven', text: 'Al atacar: tu héroe se cura 2.' }
}
