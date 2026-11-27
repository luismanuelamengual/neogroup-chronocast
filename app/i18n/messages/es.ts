/**
 * Spanish dictionary — the default language and the reference of the others
 * (see en.ts, whose shape must match this one). Keys are grouped by feature.
 * `{name}` placeholders are replaced by the params of `t(key, params)`; a
 * `{ one, other }` message is a plural chosen with `params.count`.
 */
export const es = {
  common: {
    cancel: 'Cancelar',
    close: 'Cerrar',
    loading: 'Cargando...',
    tapToClose: 'Tocá para cerrar',
    tapToCycle: 'Tocá la carta para ver sus adjuntos · afuera para cerrar'
  },
  sound: {
    title: 'Sonido',
    music: 'Música',
    effects: 'Efectos',
    mute: 'Silenciar todo'
  },
  nav: {
    myProfile: 'Mi perfil',
    logout: 'Cerrar sesión',
    mainMenu: 'Menú principal'
  },
  metadata: {
    mainMenu: 'Menú principal',
    verifyEmail: 'Verificá tu email',
    register: 'Crear cuenta',
    forgotPassword: 'Recuperar contraseña',
    newPassword: 'Nueva contraseña',
    login: 'Ingresar',
    offline: 'Sin conexión',
    profile: 'Mi perfil',
    privacy: 'Política de privacidad',
    deleteAccount: 'Eliminar cuenta',
    practice: 'Práctica',
    quickMatch: 'Partida rápida',
    welcome: 'Tu héroe',
    collection: 'Colección',
    decks: 'Mazos',
    shop: 'Tienda',
    lobby: 'Partida online',
    match: 'Partida',
    ranking: 'Ranking',
    campaign: 'Campañas',
    play: 'Jugar'
  },
  pwa: {
    description:
      'Juego de cartas sin turnos: programá 6 acciones por fase, mirá cómo chocan con las de tu rival y derrotá a su héroe.',
    installPrompt:
      'Instalá ChronoCast en tu celular y jugá en pantalla completa, con un ícono en tu pantalla de inicio como cualquier otro juego.',
    install: 'Instalar',
    offlineTitle: 'Sin señal',
    offlineText: 'ChronoCast necesita internet para esta pantalla. Revisá tu conexión y volvé a intentarlo.'
  },
  orientation: {
    title: 'Girá el teléfono',
    text: 'ChronoCast se juega en horizontal. Poné el teléfono de costado para seguir.',
    lock: 'Jugar en horizontal'
  },
  landing: {
    tagline: 'La Grieta del Tiempo mezcló todas las eras. Armá tu mazo, programá el futuro y derrotá al héroe rival.',
    playFree: 'Jugar gratis',
    steps: {
      explore: {
        title: 'Coleccioná',
        text: 'Cientos de cartas de seis eras: aliados, habilidades, armas, armaduras, objetos, ubicaciones y trampas.'
      },
      fight: {
        title: 'Programá',
        text: 'Sin turnos: los dos jugadores eligen 6 acciones a la vez y se resuelven juntas, paso por paso.'
      },
      rise: {
        title: 'Competí',
        text: 'Desafiá a otros jugadores, subí tu Prestigio y completá la campaña de cada héroe.'
      }
    }
  },
  auth: {
    email: 'Email',
    password: 'Contraseña',
    playerName: 'Nombre de jugador',
    lastName: 'Apellido',
    login: {
      title: 'Iniciar sesión',
      subtitle: 'La Grieta te espera. Entrá y armá tu mazo.',
      google: 'Continuar con Google',
      or: 'o',
      verified: 'Tu email fue verificado. Ya podés iniciar sesión.',
      passwordReset: 'Tu contraseña fue actualizada. Ya podés iniciar sesión.',
      invalidCredentials: 'Email o contraseña incorrectos (o la cuenta todavía no fue verificada)',
      submit: 'Ingresar',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tenés cuenta?',
      register: 'Registrate'
    },
    register: {
      title: 'Crear cuenta',
      verifyTitle: 'Verificá tu email',
      verifySent:
        'Te enviamos un enlace de verificación a {email}. Revisá tu bandeja de entrada y hacé clic para activar tu cuenta.',
      alreadyActivated: '¿Ya la activaste?',
      login: 'Ingresar',
      passwordHint: 'Mínimo 6 caracteres',
      repeatPassword: 'Repetir contraseña',
      passwordsMismatch: 'Las contraseñas no coinciden',
      passwordsMismatchDot: 'Las contraseñas no coinciden.',
      submit: 'Crear cuenta',
      haveAccount: '¿Ya tenés cuenta?'
    },
    forgot: {
      title: 'Recuperar contraseña',
      sent: 'Si existe una cuenta asociada a {email}, vas a recibir un correo con instrucciones para restablecer tu contraseña.',
      subtitle: 'Ingresá tu email y te enviamos un enlace para restablecer tu contraseña.',
      submit: 'Enviar enlace',
      back: 'Volver a ingresar'
    },
    reset: {
      title: 'Nueva contraseña',
      newPassword: 'Nueva contraseña',
      confirmPassword: 'Confirmar contraseña',
      submit: 'Guardar contraseña',
      requestNew: 'Pedir un enlace nuevo'
    },
    verify: {
      expiredTitle: 'Enlace vencido',
      expiredText:
        'El enlace de verificación expiró. Registrate nuevamente con el mismo email y te mandamos uno nuevo.',
      invalidTitle: 'Enlace inválido',
      invalidText: 'El enlace de verificación no es válido o ya fue utilizado.',
      title: 'Verificá tu email',
      text: 'Revisá tu bandeja de entrada y hacé clic en el enlace de verificación para activar tu cuenta.',
      registerAgain: 'Registrarme de nuevo'
    },
    resetInvalid: 'El enlace no es válido o ya fue utilizado.',
    goToLogin: 'Ir a ingresar',
    somethingWentWrong: 'Algo salió mal. Intentá de nuevo.',
    emails: {
      verifySubject: 'Activá tu cuenta de ChronoCast',
      resetSubject: 'Restablecer tu contraseña de ChronoCast',
      greeting: '¡Hola {name}!',
      verifyIntro: 'Gracias por sumarte a ChronoCast. Para activar tu cuenta y empezar a jugar, verificá tu email:',
      verifyAction: 'Verificar mi email',
      verifyFooter: 'El enlace es válido por {hours} horas. Si no creaste esta cuenta, ignorá este mensaje.',
      resetIntro: 'Recibimos una solicitud para restablecer la contraseña de tu cuenta de ChronoCast.',
      resetAction: 'Restablecer contraseña',
      resetFooter: 'El enlace es válido por {hours} hora. Si no pediste este cambio, ignorá este mensaje.'
    }
  },
  account: {
    profile: 'Mi perfil',
    playerNameTitle: 'Nombre de jugador',
    lastNameTitle: 'Apellido',
    nicknameTitle: 'Apodo',
    nicknameHint: 'Si tenés apodo, se muestra en lugar de tu nombre y apellido',
    save: 'Guardar',
    saved: '¡Perfil actualizado!',
    languageLabel: 'Idioma de la aplicación',
    delete: {
      section: 'Eliminar cuenta',
      description:
        'Se borran tu cuenta, tu nombre de jugador, tu email, tu colección y tus mazos. No se puede deshacer.',
      button: 'Eliminar mi cuenta',
      title: '¿Eliminar tu cuenta?',
      warning:
        'Se van a borrar para siempre tu cuenta, tu colección de cartas, tus mazos, tu oro y tu Prestigio. Esto no se puede deshacer.',
      confirmWord: 'ELIMINAR',
      confirmLabel: 'Escribí {word} para confirmar',
      confirm: 'Eliminar para siempre'
    }
  },
  legal: {
    privacyLink: 'Política de privacidad',
    updatedAt: 'Última actualización: {date}',
    privacy: {
      title: 'Política de privacidad',
      intro:
        'ChronoCast es un juego de cartas coleccionables sin turnos, para jugar contra la computadora o contra otras personas. Esta política explica qué datos guardamos, para qué los usamos y cómo podés borrarlos.',
      data: {
        title: 'Qué datos guardamos',
        text: 'Al crear tu cuenta: tu email, tu nombre de jugador y tu contraseña (guardada cifrada, nunca en texto plano). Si entrás con Google, recibimos de Google tu email y tu nombre. También guardamos el idioma que elegís, tu colección de cartas, tus mazos, tu oro, tu Prestigio, tu avance en las campañas y las partidas que jugás.'
      },
      use: {
        title: 'Para qué los usamos',
        text: 'Solo para que el juego funcione: iniciar sesión, guardar tu colección y tu avance para que juegues desde cualquier dispositivo, armar partidas contra otros jugadores, y mandarte los emails de verificación de cuenta y de recuperación de contraseña. No vendemos tus datos.'
      },
      thirdParties: {
        title: 'Servicios de terceros',
        text: 'Usamos Google para el inicio de sesión con Google y las estadísticas de uso de la app (Google Analytics a través de Google Tag Manager); Vercel para alojar la aplicación; un proveedor de bases de datos PostgreSQL para guardar los datos; y Resend para enviar los emails. Cada uno trata los datos según su propia política de privacidad.'
      },
      storage: {
        title: 'Cookies y almacenamiento',
        text: 'Usamos una cookie para mantener tu sesión iniciada y otra para recordar tu idioma. El almacenamiento local del navegador guarda preferencias del dispositivo, como haber cerrado el aviso de instalación.'
      },
      retention: {
        title: 'Cuánto tiempo los guardamos',
        text: 'Tu cuenta y tus datos de juego se conservan hasta que los elimines.'
      },
      deletion: {
        title: 'Cómo borrar tus datos',
        text: 'Podés eliminar tu cuenta cuando quieras desde Mi perfil → Eliminar cuenta: se borran tu cuenta y todos tus datos de juego en el momento. Si no podés entrar, escribinos a {email} desde el email de tu cuenta y la borramos nosotros.'
      },
      security: {
        title: 'Seguridad',
        text: 'Toda la comunicación con ChronoCast viaja cifrada (HTTPS) y las contraseñas se guardan con un hash seguro (bcrypt).'
      },
      children: {
        title: 'Menores',
        text: 'ChronoCast no está dirigido a menores de 13 años y no recolectamos a sabiendas datos de menores de esa edad. Si creés que un menor nos dio sus datos, escribinos a {email} y los borramos.'
      },
      changes: {
        title: 'Cambios y contacto',
        text: 'Si cambiamos esta política, vamos a actualizar la fecha de arriba. Para cualquier consulta sobre tus datos escribinos a {email}.'
      }
    },
    deleteAccount: {
      title: 'Eliminar tu cuenta de ChronoCast',
      intro: 'Podés eliminar tu cuenta y todos tus datos desde la app, en cualquier momento:',
      steps: {
        signIn: 'Entrá a ChronoCast con tu cuenta.',
        profile: 'Abrí el menú de tu jugador y elegí Mi perfil.',
        confirm: 'Tocá Eliminar mi cuenta y confirmá escribiendo ELIMINAR.'
      },
      whatTitle: 'Qué se borra',
      whatText:
        'Se borran en el momento y para siempre tu cuenta (email, nombre de jugador y contraseña) y todos tus datos de juego (colección, mazos, oro, Prestigio y campañas). No guardamos ninguna copia.',
      noAccessTitle: '¿No podés entrar?',
      noAccessText: 'Escribinos a {email} desde el email de tu cuenta pidiendo que la borremos y lo hacemos nosotros.',
      goToProfile: 'Ir a Mi perfil'
    }
  },
  play: {
    title: 'Jugar',
    back: 'Menú',
    modes: {
      campaign: {
        title: 'Campaña',
        text: 'Diez combates contra la CPU por héroe, con historia, jefe final y premios.'
      },
      online: {
        title: 'Partida online',
        text: 'Contra otro jugador: partida rápida, salas públicas o privadas. Suma Prestigio.'
      },
      quick: {
        title: 'Partida rápida',
        text: 'Contra la CPU con un héroe y un mazo al azar: cada partida es distinta. Da algo de oro, menos que online.'
      }
    }
  },
  home: {
    tagline: 'Programá el futuro. Derrotá al héroe rival.',
    play: 'Jugar',
    decks: 'Mazos',
    shop: 'Tienda',
    ranking: 'Ranking',
    comingSoon: 'Próximamente',
    gold: 'Oro',
    rating: 'Prestigio',
    cardCount: { one: '{count} carta', other: '{count} cartas' }
  },
  progression: {
    level: 'Nivel',
    levelShort: 'Nv {level}',
    xpProgress: '{xp} / {next} XP',
    xpGained: '+{xp} XP',
    levelUp: '¡Nivel {level}! +{gold} de oro'
  },
  game: {
    factions: {
      primal: 'Primal',
      bronze: 'Bronce',
      arcane: 'Arcana',
      clockwork: 'Relojería',
      neon: 'Neón',
      void: 'Vacío',
      neutral: 'Neutral'
    },
    sides: {
      dawn: 'Alba',
      eclipse: 'Eclipse',
      neutral: 'Neutral'
    },
    elements: {
      fire: 'Fuego',
      ice: 'Hielo',
      lightning: 'Rayo',
      shadow: 'Sombra',
      light: 'Luz',
      time: 'Tiempo',
      acid: 'Ácido',
      arcane: 'Arcano',
      earth: 'Tierra',
      sonic: 'Sónico',
      water: 'Agua',
      wind: 'Viento'
    },
    resists: 'Resiste {elements}',
    weakTo: 'Vulnerable a {elements}',
    tribes: {
      saurian: 'Saurio',
      caveborn: 'Cavernario',
      beast: 'Fiera',
      legionnaire: 'Legionario',
      oracle: 'Oráculo',
      colossus: 'Coloso',
      magus: 'Hechicero',
      fae: 'Hada',
      drake: 'Draco',
      automaton: 'Autómata',
      inventor: 'Inventor',
      skyship: 'Aeronave',
      cyborg: 'Cíborg',
      netrunner: 'Hacker',
      enforcer: 'Sicario',
      undead: 'No-muerto',
      cultist: 'Cultista',
      horror: 'Horror',
      drifter: 'Errante',
      elemental: 'Elemental'
    },
    types: {
      hero: 'Héroe',
      ally: 'Aliado',
      ability: 'Habilidad',
      weapon: 'Arma',
      armor: 'Armadura',
      item: 'Objeto',
      location: 'Ubicación',
      trap: 'Trampa',
      attachment: 'Adjunto',
      artifact: 'Artefacto'
    },
    subtypes: {
      bow: 'Arco',
      crossbow: 'Ballesta',
      blowgun: 'Cerbatana',
      sling: 'Honda',
      harpoon: 'Arpón',
      sword: 'Espada',
      axe: 'Hacha',
      spear: 'Lanza',
      mace: 'Maza',
      staff: 'Bastón',
      wand: 'Varita',
      orb: 'Orbe',
      tool: 'Herramienta',
      energy: 'Energía',
      scythe: 'Guadaña',
      dagger: 'Daga',
      leather: 'Cuero',
      plate: 'Placas',
      shield: 'Escudo',
      helm: 'Yelmo',
      robe: 'Túnica',
      circlet: 'Diadema',
      exosuit: 'Exotraje',
      suit: 'Traje',
      shroud: 'Mortaja',
      instinct: 'Instinto',
      tactic: 'Táctica',
      spell: 'Hechizo',
      gadget: 'Artilugio',
      program: 'Programa',
      ritual: 'Ritual',
      mount: 'Montura',
      charm: 'Amuleto',
      rune: 'Runa',
      implant: 'Implante',
      curse: 'Maldición'
    },
    rarities: {
      common: 'Común',
      uncommon: 'Poco común',
      rare: 'Rara',
      epic: 'Épica',
      legendary: 'Legendaria',
      exotic: 'Exótica',
      mythic: 'Mítica'
    },
    keywords: {
      guardian: 'Protector',
      quick: 'Rápido',
      charge: 'Embestida',
      ranged: 'A distancia',
      agile: 'Ágil',
      flying: 'Vuelo',
      stealth: 'Sigilo',
      frenzy: 'Furia',
      poison: 'Veneno',
      lifesteal: 'Robo de vida',
      shield: 'Escudo',
      thorns: 'Espinas',
      retaliate: 'Represalia',
      cleave: 'Barrido',
      unique: 'Única',
      echo: 'Eco',
      resurge: 'Resurgir'
    },
    speeds: {
      instant: 'Instantánea',
      fast: 'Rápida',
      normal: 'Normal',
      slow: 'Lenta'
    },
    restriction: {
      any: 'Cualquier héroe',
      faction: 'Héroes de la facción {faction}',
      hero: 'Solo {hero}',
      side: 'Héroes del bando {side}',
      combined: 'Héroes de {parts}',
      part: {
        hero: 'héroe {hero}',
        faction: 'facción {faction}',
        side: 'bando {side}'
      },
      or: 'o',
      and: 'y'
    }
  },
  onboarding: {
    title: 'Elegí tu héroe',
    text: 'Es con quien empezás. Te llevás su mazo inicial de 40 cartas; más adelante podés conseguir otros héroes.',
    health: '{health} de vida',
    styles: {
      'legate-varro': 'Aguanta y golpea: protectores, formaciones y armadura.',
      'ilyra-starweaver': 'Controla desde lejos: hechizos de daño, magos a distancia y escudos.',
      'kora-wildfang': 'Ataca rápido: bestias veloces, arco y trampas.'
    },
    choose: 'Elegir a {hero}',
    opening: 'Abriendo tu mazo inicial...',
    opened: '¡Tu mazo inicial!',
    tap: 'Tocá una carta para darla vuelta',
    revealAll: 'Dar vuelta todas',
    openedText: 'Ya está guardado en Mazos. Te recomendamos jugar el tutorial para aprender lo básico.',
    tutorial: 'Jugar el tutorial',
    menu: 'Ir al menú'
  },
  collection: {
    title: 'Colección',
    distinct: '{owned} de {total} cartas distintas',
    search: 'Buscar',
    all: 'Todas',
    allTypes: 'Todos los tipos',
    allSubtypes: 'Todos los subtipos',
    allFactions: 'Todas las facciones',
    allSides: 'Todos los bandos',
    allRarities: 'Todas las rarezas',
    allCosts: 'Todos los costos',
    cost: 'Costo {cost}',
    usableBy: 'Usables por {hero}',
    anyHero: 'Cualquier héroe',
    ownedOnly: 'Solo las que tengo',
    owned: 'Tenés {count}',
    notOwned: 'No la tenés',
    whoCanUse: 'Quién la puede usar',
    empty: 'Ninguna carta coincide con los filtros.',
    back: 'Menú'
  },
  activeDeck: {
    title: 'Tu mazo activo',
    change: 'Cambiar',
    none: 'No tenés un mazo para jugar.',
    notPlayable: '"{name}" está incompleto: completalo o activá otro en Mazos.',
    wrongHero:
      'Esta campaña se juega con un mazo de {hero} y tu mazo activo es de {other}. Activá un mazo de {hero} en Mazos.'
  },
  decks: {
    title: 'Mazos',
    new: 'Nuevo mazo',
    chooseHero: 'Elegí el héroe del mazo',
    size: { one: '{count} carta', other: '{count} cartas' },
    playable: 'Listo para jugar',
    notPlayable: 'Incompleto',
    edit: 'Editar',
    delete: 'Borrar',
    deleteTitle: 'Borrar mazo',
    deleteConfirm: '¿Borrar el mazo "{name}"? No se puede deshacer.',
    deleted: 'Mazo borrado',
    active: 'Activo',
    setActive: 'Activar',
    activated: 'Ahora jugás con "{name}"',
    activeHint: 'El mazo activo es el que usás en todos los modos de juego, y la tienda no deja vender sus cartas.',
    empty: 'Todavía no tenés mazos.',
    back: 'Menú',
    editor: {
      name: 'Nombre del mazo',
      newName: 'Nuevo mazo de {hero}',
      counter: '{count}/{min}',
      max: 'máx. {max}',
      curve: 'Curva de costos',
      pool: 'Tus cartas para {hero}',
      list: 'Cartas del mazo',
      save: 'Guardar',
      saved: 'Mazo guardado',
      back: 'Volver',
      ok: 'El mazo cumple todas las reglas',
      unsaved: 'Hay cambios sin guardar',
      emptyDeck: 'Tocá las cartas de la derecha para agregarlas.',
      clear: 'Vaciar',
      clearConfirm: '¿Vaciar todo?',
      removeHero: 'Quitar héroe (vacía el mazo)',
      chooseThisHero: 'Elegir este héroe',
      add: 'Agregar al mazo',
      remove: 'Quitar del mazo',
      copies: 'En el mazo: {inDeck} de {owned} que tenés',
      noneLeft: 'No tenés más copias',
      maxCopies: 'Máximo {max} copias',
      deckFull: 'El mazo está lleno ({max})',
      notInDeck: 'No está en el mazo',
      heroFirst: 'Primero, un héroe',
      noHeroes: 'Todavía no tenés héroes.'
    },
    problems: {
      unknownCard: '{card} no existe',
      notAHero: '{card} no es un héroe',
      heroInDeck: '{card} es un héroe: no puede ir dentro del mazo',
      tooFewCards: 'Faltan cartas: {count} de {min} como mínimo',
      tooManyCards: 'Sobran cartas: {count} de {max} como máximo',
      tooManyCopies: '{card}: {count} copias (máximo {max})',
      restricted: '{card} no la puede usar este héroe',
      notOwned: '{card}: tenés {owned} y el mazo usa {count}',
      heroNotOwned: 'No tenés a {card}'
    }
  },
  tutorial: {
    next: 'Entendido',
    skip: 'Saltar tutorial',
    tips: {
      mulligan:
        'Esta es tu mano inicial. Podés cambiar las cartas que no te gusten, una sola vez. Por ahora quedátelas.',
      phases:
        'La partida se juega por fases. En cada una programás 6 acciones en tu línea de tiempo (a la derecha) mientras la CPU programa las suyas. Después se resuelven juntas, paso por paso.',
      chronos:
        'Las cartas cuestan Cronos (⌛). Para tener más, tocá una carta y elegí "Generar Cronos": la desterrás (no va a tu pila de descarte) y ganás +1 de capacidad para siempre. Una vez por fase.',
      summon:
        'Con Cronos podés jugar un aliado: tocá la carta y después un slot libre. El aliado ataca desde la fase siguiente (💤).',
      ready: 'Cuando termines, tocá Listo. Si se acaban los 90 segundos, se juega lo que hayas programado.',
      resolution:
        'Ahora se dan vuelta las dos líneas de tiempo. En cada paso, las acciones van de la más rápida a la más lenta; las de igual velocidad pasan al mismo tiempo.',
      attack:
        'Tocá uno de tus aliados y después un slot rival para atacarlo. Los ataques apuntan a slots: si el rival mueve su aliado antes, el golpe falla.',
      move: 'Para esquivar, tocá tu aliado y después un slot propio vacío (o el de un vecino para intercambiarlos). Moverse es instantáneo: pasa antes que los ataques del mismo paso.',
      win: 'Ganás cuando la vida del héroe rival llega a 0. ¡Suerte!'
    }
  },
  battle: {
    practice: {
      title: 'Práctica',
      text: 'Jugá contra la CPU con tu mazo activo. No da premios: es para aprender y probar.',
      rivalHero: 'Héroe de la CPU',
      start: 'Empezar',
      back: 'Volver'
    },
    quick: {
      title: 'Partida rápida',
      text: 'Tu mazo activo contra un héroe y un mazo al azar de la CPU.',
      newRival: 'Nuevo rival',
      back: 'Volver',
      retry: 'Reintentar',
      dealFailed: 'No se pudo preparar la partida.',
      verifying: 'Verificando la partida para darte el oro…',
      verifyFailed: 'No se pudo verificar la partida: esta vez no hay oro.',
      capped: 'Ya ganaste el oro de las partidas rápidas de hoy. ¡Volvé mañana!'
    },
    cpu: 'CPU',
    phase: 'Fase {phase}',
    chronos: 'Cronos',
    deck: 'Mazo',
    discard: 'Descarte',
    traps: 'Trampas',
    weapon: 'Arma',
    armor: 'Armadura',
    location: 'Ubicación',
    emptySlot: 'Slot {slot}',
    ready: 'Listo',
    rivalThinking: 'Programando...',
    rivalReady: '¡Listo!',
    fast: '×2',
    surrender: 'Salir',
    giveUp: 'Rendirse',
    surrenderConfirm: '¿Seguro? Tocá otra vez',
    waitingRival: 'Esperando...',
    notReady: 'Recién llegado: ataca desde la fase que viene',
    stunned: 'Aturdido',
    frozen: 'Congelado',
    statusNotes: {
      prey: '🎯 Presa: los ataques a distancia del cazador le hacen +3 {until}',
      disabled: '⛔ Desactivado por un hackeo',
      poison: '☠️ Envenenado: pierde {amount} al empezar la fase',
      burn: '🔥 Quemándose: pierde {amount} por fase ({phases} fases más)',
      frozen: '❄️ Congelado: no puede atacar, moverse ni usar habilidades {until}',
      stunned: '💫 Aturdido: no puede actuar {until}',
      untilEnd: 'hasta el final de esta fase',
      untilPhase: 'hasta el final de la fase {phase}',
      notReady: '💤 Recién llegado: actúa desde la fase que viene',
      disarmed: '🚫 No puede atacar: tiene adjunta {card}',
      silenced: '🔇 No puede usar su habilidad: tiene adjunta {card}',
      abilityUsed: '✋ Ya usó su habilidad en esta fase: no puede atacar',
      attacked: '✋ Ya atacó en esta fase',
      tempAttack: '💪 {amount} de ataque hasta el final de la fase',
      attackChange: '⚔️ Ataque {amount} (la carta tiene {base})',
      healthChange: '❤️ Vida máxima {amount} (la carta tiene {base})',
      gained: '✨ Ganó: {keywords}',
      lost: '➖ Perdió: {keywords}',
      thornsChange: '🌵 Espinas {amount} (la carta tiene {base})',
      location: '🗺️ Ubicación en juego de su lado: {card}',
      attachments: '📎 Adjuntas: {cards}',
      weapon: '🗡️ Arma: {card} · {attack} de ataque · {durability} usos',
      armor: '🛡️ Armadura: {card} · -{reduction} de daño por golpe · {durability} golpes',
      heroAttacked: '✋ Ya atacó con el arma en esta fase',
      heroAbilityUsed: '✋ Ya usó su habilidad en esta fase',
      artifactAbilityUsed: '✋ Ya usó su habilidad en esta fase',
      boon_guard: '🛡️ Tus aliados reciben {amount} de daño menos {until}',
      boon_empower: '💥 Hace {amount} de daño más al rival {until}',
      boon_allyDiscount: '💰 Los aliados cuestan {amount} Cronos menos {until}',
      veil: '👁️ Oculto: Sigilo y +{amount} de ataque {until}',
      veilStealth: '👁️ Oculto: Sigilo (no se pierde al atacar) {until}',
      contract: '📜 Bajo contrato {until}: después vuelve a su dueño',
      heroVeil: '👁️ Oculto: no puede ser atacado ni elegido como objetivo por el rival {until}',
      fallen: '💀 Cayó: llegó a 0 de vida'
    },
    attachedPick: {
      title: 'Elegí la carta adjunta',
      text: 'Tiene más de una: tocá a cuál apuntar.'
    },
    deckPick: {
      title: 'Elegí un artefacto de tu mazo',
      text: 'Entra en juego sin pagar su costo, y tu mazo se mezcla.',
      cancel: 'Cancelar'
    },
    mulligan: {
      title: 'Tu mano inicial',
      text: 'Tocá las cartas que quieras cambiar. Se devuelven al mazo y robás otras tantas. Solo una vez.',
      keep: 'Quedármelas',
      change: { one: 'Cambiar {count} carta', other: 'Cambiar {count} cartas' },
      waiting: 'Esperando al rival...'
    },
    attached: {
      weapon: 'Arma del héroe\n🗡️ {attack} de ataque · {durability} usos',
      armor: 'Armadura del héroe\n🛡️ -{reduction} de daño por golpe · {durability} golpes',
      ally: 'Adjunta al aliado',
      artifact: 'Artefacto en juego',
      trap: 'Trampa boca abajo'
    },
    rivalHand: 'Mano del rival',
    zones: {
      hero: 'Héroe',
      allies: 'Aliados',
      support: 'Soporte',
      deck: 'Mazo',
      chronos: 'Cronos',
      energy: 'Energía',
      graveyard: 'Cementerio'
    },
    actionsLeft: { one: 'Queda {count} acción', other: 'Quedan {count} acciones' },
    hints: {
      attack: 'Elegí a quién atacar.',
      move: 'Elegí a dónde moverlo.',
      summon: 'Elegí un slot libre para invocarlo.',
      target: 'Elegí el objetivo.',
      attached: 'Tocá al héroe o al aliado que tiene la carta adjunta.',
      support: 'Tocá al héroe del lado que tiene el artefacto o la trampa.'
    },
    buttons: {
      attack: 'Atacar',
      move: 'Mover',
      weaponAttack: 'Atacar con el arma',
      play: 'Jugar',
      sacrifice: 'Generar Cronos',
      ability: 'Habilidad ({cost})',
      abilityEnergy: 'Habilidad (⚡{cost})',
      cancel: 'Cancelar'
    },
    actions: {
      wait: 'Esperar',
      sacrifice: 'Cronos +1',
      play: 'Jugar',
      allyAttack: 'Atacar',
      heroAttack: 'Arma',
      heroAbility: 'Habilidad',
      allyAbility: 'Habilidad de aliado',
      artifactAbility: 'Habilidad de artefacto',
      move: 'Mover'
    },
    speeds: {
      instant: 'Instantánea',
      fast: 'Rápida',
      normal: 'Normal',
      slow: 'Lenta'
    },
    fail: {
      cardUsed: 'Ya la programaste en esta fase',
      notPlanning: 'Ahora no podés programar',
      noCard: 'La carta ya no está',
      notEnoughChronos: 'No alcanzan los Cronos',
      slotsFull: 'Los 5 slots están ocupados',
      noUnit: 'El aliado ya no está',
      notReady: 'Ese aliado todavía no puede actuar',
      alreadyAttacked: 'Ya atacó en esta fase',
      noWeapon: 'El héroe no tiene arma',
      noAbility: 'No tiene habilidad',
      abilityUsed: 'La habilidad ya se usó en esta fase',
      exhausted: 'Ese aliado ya actuó en esta fase (atacó o usó su habilidad)',
      sacrificeLimit: 'Solo podés generar Cronos una vez por fase',
      invalidTarget: 'Objetivo inválido',
      noAttached: 'El rival no tiene armas, armaduras ni cartas adjuntas',
      stunned: 'Está aturdido',
      heroFallen: 'El héroe cayó',
      supportFull: 'Los 5 slots de soporte están ocupados',
      cancelled: 'Cancelada por una trampa',
      notEnoughEnergy: 'No alcanza la energía',
      cantAttack: 'Un adjunto no lo deja atacar',
      silenced: 'Un adjunto no lo deja usar su habilidad',
      frozen: 'Está congelado',
      noChoice: 'No hay ninguna carta para tomar',
      nothingToDestroy: 'No hay nada en juego para destruir',
      notEnoughDiscard: 'No hay suficientes cartas en tu pila para Consumir',
      disabled: 'Está desactivado por un hackeo',
      noSupport: 'No hay artefactos ni trampas para elegir',
      timelineFull: 'La línea de tiempo ya tiene 6 acciones'
    },
    floats: {
      miss: 'Falló',
      blocked: 'Bloqueado',
      stun: 'Aturdido',
      fatigue: 'Fatiga'
    },
    end: {
      victory: '¡Victoria!',
      defeat: 'Derrota',
      draw: 'Empate',
      hero: 'Héroe derrotado',
      phaseLimit: 'Se llegó al límite de fases',
      surrender: 'Rendición',
      abandon: 'Abandono',
      phases: { one: 'Partida de {count} fase', other: 'Partida de {count} fases' },
      rematch: 'Revancha',
      changeHeroes: 'Cambiar héroes',
      menu: 'Menú',
      lobby: 'Volver a las salas',
      firstWin: '¡Primera victoria del día!'
    }
  },
  shop: {
    title: 'Tienda',
    back: 'Menú',
    gold: 'Tu oro',
    tabs: { packs: 'Sobres', cards: 'Cartas' },
    packNames: {
      traveler: 'Sobre del Viajero',
      chronicler: 'Sobre del Cronista',
      guardian: 'Sobre del Guardián',
      eternal: 'Sobre Eterno',
      faction: 'Sobre {faction}'
    },
    packTexts: {
      traveler: 'Para empezar: comunes y poco comunes.',
      chronicler: 'Siempre trae una rara o mejor.',
      guardian: 'Tres raras seguras y dos épicas o mejor.',
      eternal: 'Lo mejor del tiempo: dos legendarias seguras.',
      faction: 'Como el del Cronista, con cartas de {faction} y neutrales.'
    },
    factionPacks: 'Sobres de facción',
    buy: 'Comprar',
    odds: 'Probabilidades',
    hideOdds: 'Ocultar',
    chance: '{rarity} {percent} %',
    oddsNote:
      'Cada carta sale al azar entre las de su rareza. Mientras el catálogo no tenga cartas de una rareza, sale la mejor rareza disponible por debajo.',
    pityLeft: {
      one: 'Garantía: si el próximo sobre Guardián o Eterno no trae legendaria, el siguiente trae una.',
      other: 'Garantía: a los {count} sobres Guardián o Eterno sin legendaria, el siguiente trae una.'
    },
    pityReady: 'Garantía: el próximo sobre Guardián o Eterno trae una legendaria segura.',
    opening: {
      title: 'Abriendo el {pack}',
      tap: 'Tocá una carta para darla vuelta',
      revealAll: 'Dar vuelta todas',
      done: '¡Sobre abierto!',
      isNew: '¡Nueva!',
      guaranteed: '¡Garantía! Este sobre trae una legendaria.',
      again: 'Comprar otro',
      close: 'Seguir'
    },
    cards: {
      lockedLevel: 'Se desbloquea en nivel {level}',
      bought: { one: 'Compraste {card}', other: 'Compraste {count} copias de {card}' },
      heroOwned: 'Ya tenés este héroe',
      notForSale: 'La tienda no vende esta carta',
      noGold: 'No te alcanza el oro',
      empty: 'Ninguna carta coincide con los filtros.'
    },
    sell: {
      quick: 'Venta rápida',
      quickText:
        'Vende las copias que pasan de 4 de cada carta (de 1 si es única) y nunca toca las que usa tu mazo activo.',
      quickPreview: {
        one: 'Vendés {count} carta por {gold} de oro.',
        other: 'Vendés {count} cartas por {gold} de oro.'
      },
      confirm: 'Sí, vender',
      cancel: 'Cancelar',
      sellOne: 'Vender',
      confirmValuable: 'Es una carta {rarity}. ¿Seguro que la querés vender?',
      freeCopies: {
        one: 'Podés vender {count} copia: las demás están en tu mazo activo.',
        other: 'Podés vender {count} copias: las demás están en tu mazo activo.'
      },
      sold: { one: 'Vendiste {count} carta por {gold} de oro', other: 'Vendiste {count} cartas por {gold} de oro' },
      notSellable: 'Esta carta no se puede vender',
      noneOwned: 'No tenés copias para vender',
      allInDeck: 'Todas tus copias están en el mazo activo'
    }
  },
  lobby: {
    title: 'Partida online',
    back: 'Jugar',
    activeMatch: 'Tenés una partida en curso.',
    resume: 'Volver a la partida',
    yourDeck: 'Tu mazo',
    goToDecks: 'Ir a Mazos',
    quickMatch: 'Partida rápida',
    createPublic: 'Crear pública',
    createPrivate: 'Crear privada',
    code: 'Código de sala',
    codePlaceholder: 'CÓDIGO',
    join: 'Unirse',
    publicNote: 'Las públicas cuentan para el Prestigio. Las privadas son amistosas y dan la mitad de oro.',
    practice: 'Práctica contra la CPU',
    rooms: 'Salas esperando rival',
    noRooms: 'No hay salas esperando. ¡Creá una o probá la partida rápida!'
  },
  match: {
    waiting: 'Esperando rival...',
    waitingPublic: 'Tu sala aparece en la lista de salas. Cuando alguien entre, empieza la partida.',
    waitingPrivate: 'Pasale el código o el link a tu amigo. Cuando entre, empieza la partida.',
    code: 'Código',
    share: 'Compartir link',
    shareText: 'Jugá conmigo en ChronoCast: sala {code}',
    copied: 'Link copiado',
    closesIn: 'La sala se cierra en {time}',
    cancel: 'Cerrar la sala',
    backToLobby: 'Volver a las salas',
    closed: 'La sala cerró',
    closedText: 'Nadie entró a tiempo o la cerraste.'
  },
  campaign: {
    title: 'Campañas',
    back: 'Jugar',
    text: 'Una campaña por héroe: 10 combates contra la CPU, cada uno más difícil, y un jefe al final. Se juega con tu mazo de ese héroe y el primer triunfo de cada combate da premios.',
    progress: '{won}/{total}',
    play: 'Empezar',
    continue: 'Continuar',
    replay: 'Ver mapa',
    completed: 'Completada',
    locked: 'Necesitás al héroe {hero}',
    exclusive: 'Carta exclusiva',
    map: 'Mapa',
    battle: 'Combate {number}',
    boss: 'Jefe',
    rival: 'Rival',
    difficulty: 'Dificultad',
    situation: 'Situación',
    noSituation: 'Sin ventajas: un duelo parejo.',
    setup: {
      allies: 'El rival empieza con {cards} en juego',
      chronos: 'El rival empieza con {count} de capacidad de Cronos',
      extraHealth: 'El héroe rival tiene +{count} de vida',
      location: 'Ubicación rival en juego: {card}',
      weapon: 'El héroe rival empieza con {card}',
      armor: 'El héroe rival empieza con {card}',
      handSize: 'Empezás con {count} cartas en la mano'
    },
    rewards: 'Premios del primer triunfo',
    gold: '{gold} de oro',
    pack: '{pack}',
    rewardCard: 'Carta exclusiva: {card}',
    alreadyWon: 'Ya ganaste este combate: jugarlo de nuevo no da premios.',
    start: '¡Al combate!',
    stageLocked: 'Ganá el combate anterior para desbloquearlo.',
    end: {
      victory: '¡Victoria!',
      defeat: 'Derrota',
      draw: 'Empate',
      verifying: 'Verificando el resultado...',
      verifyFailed: 'No se pudo verificar el resultado del combate.',
      noReward: 'Ya habías ganado este combate: esta vez no hay premios.',
      completed: '¡Campaña completada!',
      newCard: '¡Nueva carta exclusiva!',
      packCards: '{pack}',
      next: 'Siguiente combate',
      retry: 'Reintentar',
      map: 'Volver al mapa',
      tryAgain: 'Reintentar la verificación'
    }
  },
  campaigns: {
    'legate-varro': {
      title: 'La Novena Legión',
      intro:
        'Una grieta en el tiempo se tragó a la Novena Legión. Varro la encontró del otro lado: en una Roma que nunca existió, gobernada por un usurpador que quiere la de verdad.',
      ending:
        'Caelus cae y su corona de laureles se parte en mil relojes. La Novena vuelve a casa, con un siglo de atraso y el águila en alto.',
      stages: {
        s1: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Caelus el Usurpador',
          text: 'En su trono de bronce, rodeado de relojes rotos, Caelus espera. Sus pretorianos no conocen el miedo.'
        }
      }
    },
    'ilyra-starweaver': {
      title: 'El cielo que se apaga',
      intro:
        'Una a una, las estrellas se apagan. Ilyra sigue el rastro de oscuridad de era en era, y en cada una encuentra a alguien que no quiere que lo siga.',
      ending:
        'Morgrath se deshace en polvo y la luz que guardaba en su abadía vuelve al cielo. Esa noche, por primera vez en siglos, el cielo vuelve a estar lleno.',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Morgrath, el Abad Liche mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Morgrath, el Abad Liche mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Morgrath, el Abad Liche mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Morgrath, el Abad Liche',
          text: 'En el campanario de su abadía, el abad muerto guarda en frascos la luz de las estrellas robadas. Viene por la última.'
        }
      }
    },
    'kora-wildfang': {
      title: 'La cacería de la Chamana',
      intro:
        'Algo está cazando a los cazadores. Kora sigue las huellas de la jungla a otras eras y de vuelta, hasta la cueva donde Ooma despierta los huesos de las bestias.',
      ending:
        'Ooma cae y los huesos de su cueva vuelven a dormir. Colmillo, el dientes de sable, ruge sobre la colina: la jungla tiene una nueva protectora.',
      stages: {
        s1: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Ooma Bonewhisper mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Ooma Bonewhisper mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Ooma Bonewhisper mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Ooma Bonewhisper',
          text: 'En el fondo de la cueva, rodeada de huesos que se mueven, Ooma levanta su bastón. Los ancestros le responden.'
        }
      }
    },
    'ooma-bonewhisper': {
      title: 'Despierta la Ceniza',
      intro:
        'Los ancestros susurran la misma promesa todas las noches: la montaña va a despertar, y con ella su poder. Ooma junta sus huesos y camina hacia el humo, pero alguien de la jungla no la quiere dejar pasar.',
      ending:
        'Kora cae y la jungla queda en silencio. Ooma llega a la cima, apoya los huesos en la ceniza tibia, y la montaña le contesta.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Kora Wildfang mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Kora Wildfang mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Kora Wildfang mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Kora Wildfang',
          text: 'Al pie de la montaña, con su dientes de sable al lado, Kora tensa el arco. Ella protege la jungla, y la jungla no quiere despertar.'
        }
      }
    },
    'ada-copperwick': {
      title: 'La Patente Robada',
      intro:
        'Ada inventó una máquina que funciona con segundos robados. A la mañana siguiente, el Canciller Bocabronce ya tenía la patente a su nombre y una fábrica entera copiándola.',
      ending:
        'El contrato de Bocabronce se rompe en mil engranajes. Ada recupera sus planos y guarda un engranaje colgado de una cadena, para recordar que los inventos son de quien los sueña.',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Canciller Bocabronce',
          text: 'Detrás de un escritorio del tamaño de un barco, el canciller firma la patente con una pluma de oro.'
        }
      }
    },
    'vex-nightwire': {
      title: 'Vigilancia Total',
      intro:
        'Alguien puso precio a la cabeza de Vex. El cliente es la misma corporación que le paga sus recompensas. Se lo toma personal.',
      ending:
        'La señal de la Reina Estática se corta pantalla por pantalla. Por primera vez en un siglo, nadie vigila la megaciudad, y se ve hermosa.',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Reina Estática mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Reina Estática mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Reina Estática mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Reina Estática',
          text: 'Entre mil pantallas encendidas, la Reina Estática sonríe desde todas a la vez. Ya la está mirando.'
        }
      }
    },
    'malachar-the-unmade': {
      title: 'Más Allá de la Última Hora',
      intro:
        'Malachar se deshizo a sí mismo para escapar del fin de los tiempos. Del otro lado encontró un ejército: todos los muertos de la historia, esperando una orden. Solo una cantora se interpone entre ellos y él.',
      ending:
        'La canción de Nyx se apaga. Los muertos se dan vuelta, uno por uno, y miran a Malachar. Él sonríe: por fin alguien lo escucha.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Nyx Hollowsong mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Nyx Hollowsong mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Nyx Hollowsong mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Nyx Hollowsong',
          text: 'En el último cementerio del tiempo, Nyx canta para que los muertos vuelvan a casa. Ninguno se queda a escuchar a Malachar.'
        }
      }
    },
    'nyx-hollowsong': {
      title: 'La Última Campana',
      intro:
        'Los muertos dejaron de cantar. En el silencio, Nyx escucha una campana lejana, al fin de los tiempos, que cuenta hacia atrás hasta la última hora de todas. Alguien la está tocando.',
      ending:
        'La campana de Malachar se parte en dos y la última hora nunca llega. En los cementerios de todas las eras, los muertos vuelven a cantar.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Malachar el Deshecho mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Malachar el Deshecho mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Malachar el Deshecho mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Malachar el Deshecho',
          text: 'Más allá del tiempo, donde ya no queda nada, Malachar levanta el martillo de la última campana.'
        }
      }
    },
    'caelus-the-usurper': {
      title: 'La Corona Verdadera',
      intro:
        'Caelus ya gobierna una Roma que nunca existió. Para que nadie llame falsa a su corona le falta una sola cosa: que se arrodille el legado de la Novena Legión, el único romano que nunca le obedeció.',
      ending:
        'Varro cae sobre su escudo, pero no se arrodilla. Caelus se queda con la victoria y con la duda: una corona que hay que ganar a la fuerza, ¿es una corona de verdad?',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Legado Varro mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Legado Varro mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Canciller Bocabronce',
          text: 'Un canciller con mandíbula de bronce, dueño de casi todos los relojes. Legado Varro mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Legado Varro',
          text: 'Detrás de un muro de escudos, con el águila de la Novena en alto, Varro espera. No piensa dar un paso atrás.'
        }
      }
    },
    'morgrath-lich-abbot': {
      title: 'La Abadía en Venta',
      intro:
        'Un canciller con mandíbula de bronce compró las tierras de la abadía en ruinas para levantar una fábrica, tumbas incluidas. Morgrath está muerto hace tres siglos, y no piensa mudarse.',
      ending:
        'El contrato de Bocabronce se vuelve polvo y su fábrica se llena de fantasmas. La abadía se queda donde está, y los muertos vuelven a dormir.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Canciller Bocabronce mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Canciller Bocabronce',
          text: 'Detrás de un escritorio del tamaño de un barco, el canciller firma el desalojo con una pluma de oro.'
        }
      }
    },
    'chancellor-brassmaw': {
      title: 'La Huelga de las Máquinas',
      intro:
        'Bocabronce es dueño de las fábricas, de la ciudad y de casi todos los relojes. Hasta el día en que sus máquinas dejan de obedecer: Ada Copperwick les enseñó a pensar, y ahora declararon que ya no necesitan dueños.',
      ending:
        'Ada cae y las líneas de montaje vuelven a moverse. Bocabronce firma un contrato nuevo consigo mismo y se queda con los planos de ella a mitad de precio.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Ada Copperwick mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Reina Estática',
          text: 'Una reina que vive en el ruido entre los canales. Ada Copperwick mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Caelus el Usurpador',
          text: 'Un emperador de una Roma que nunca existió, con una corona robada. Ada Copperwick mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Ada Copperwick',
          text: 'En el corazón de la fundición, rodeada de máquinas que la escuchan, la inventora se baja las gafas y aprieta un botón.'
        }
      }
    },
    'queen-static': {
      title: 'Horario Central',
      intro:
        'La Reina Estática vive en el ruido entre canales, y el ruido empezó a repetir un nombre: Caelus. Un emperador de una Roma que nunca existió quiere su señal para anunciar su coronación en todas las eras a la vez.',
      ending:
        'Caelus se cae de su trono en vivo, frente a todas las pantallas de la historia. La Reina Estática deja la transmisión al aire: es lo mejor que emitió en su vida.',
      stages: {
        s1: {
          name: 'Legado Varro',
          text: 'El legado de la Novena Legión perdida, detrás de un muro de escudos. La grieta dejó a este rival justo en el camino.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'Una cazadora de la jungla que siempre dispara primero. La grieta dejó a este rival justo en el camino.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'Una maga estelar que pelea con estrellas fugaces. La grieta dejó a este rival justo en el camino.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'Una cazadora de neón que hackea a su presa antes de disparar. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'Una cantora del Vacío que con su canto guía a los muertos perdidos de vuelta a casa. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'Una chamana de las primeras tribus que habla con los huesos de los ancestros. El viaje ya es conocido, y este rival quiere terminarlo.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'Una inventora de la era del vapor cuyas máquinas funcionan con segundos robados. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s8: {
          name: 'Malachar el Deshecho',
          text: 'Un hechicero que se deshizo a sí mismo para ver qué hay más allá del tiempo. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s9: {
          name: 'Morgrath, el Abad Liche',
          text: 'Un abad muerto hace tres siglos que todavía le da misa a sus fantasmas. Caelus el Usurpador mandó a este campeón a frenar la marcha antes de la batalla final.'
        },
        s10: {
          name: 'Caelus el Usurpador',
          text: 'En su trono de bronce, frente a mil cámaras robadas, Caelus se aclara la garganta. La coronación está por empezar.'
        }
      }
    }
  },
  leagues: {
    apprentice: 'Aprendiz',
    traveler: 'Viajero',
    chronicler: 'Cronista',
    guardian: 'Guardián',
    timelord: 'Cronarca',
    eternal: 'Eterno'
  },
  ranking: {
    title: 'Ranking',
    back: 'Menú',
    yourPosition: 'Puesto {position}',
    notRanked: 'Jugá una partida pública para entrar al ranking',
    empty: 'Todavía nadie jugó partidas públicas.',
    matches: { one: '{count} partida', other: '{count} partidas' },
    leagues: 'Ligas',
    note: 'Solo cuentan las partidas públicas: ganar suma hasta 30 de Prestigio y perder resta hasta 30.'
  },
  errors: {
    campaignNotFound: 'Esa campaña no existe',
    campaignLocked: 'No tenés el héroe de esa campaña',
    stageLocked: 'Ese combate todavía está bloqueado',
    invalidTicket: 'El combate no es válido',
    ticketExpired: 'El combate expiró: empezalo de nuevo',
    battleNotVerified: 'El resultado no coincide con la repetición del combate en el servidor',
    invalidRecord: 'El registro del combate no es válido',
    invalidPlan: 'La línea de tiempo no es válida',
    matchNotFound: 'La partida no existe',
    notInMatch: 'No estás en esa partida',
    matchNotPlaying: 'La partida no está en juego',
    matchBusy: 'La partida está ocupada, probá de nuevo',
    phaseOver: 'Esa fase ya terminó',
    alreadyInMatch: 'Ya estás en una partida',
    deckNotPlayable: 'Ese mazo no está listo para jugar',
    invalidVisibility: 'La partida tiene que ser pública o privada',
    roomNotFound: 'La sala no existe o ya cerró',
    roomCodeNotFound: 'No hay ninguna sala esperando con ese código',
    roomTaken: 'Alguien ya entró a esa sala',
    ownRoom: 'No podés unirte a tu propia sala',
    notEnoughGold: 'No te alcanza el oro: cuesta {price} y tenés {gold}',
    unknownPack: 'Ese sobre no existe',
    rarityLocked: 'Necesitás nivel {level} para comprar cartas de esa rareza',
    invalidCount: 'Cantidad inválida',
    cardNotForSale: 'Esa carta no se vende suelta',
    heroOwned: 'Ya tenés ese héroe',
    cardNotSellable: 'Esa carta no se puede vender',
    notEnoughCopies: 'No tenés tantas copias de {card}',
    cardInDeck: 'Tu mazo activo usa esas copias de {card}: solo se venden las de sobra',
    activeDeckNotPlayable: 'Tu mazo activo no está listo para jugar',
    invalidHero: 'Ese héroe no existe',
    starterAlreadyChosen: 'Ya elegiste tu héroe inicial',
    deckNotFound: 'El mazo no existe',
    deckNameRequired: 'Ponele un nombre al mazo',
    deckNameTooLong: 'El nombre del mazo puede tener hasta {max} caracteres',
    unknownCard: 'La carta {card} no existe',
    heroNotOwned: 'No tenés ese héroe',
    cardsNotOwned: 'El mazo tiene más copias de las que tenés de alguna carta',
    internal: 'Error interno',
    notAuthenticated: 'Usuario no autenticado',
    unauthorized: 'No autorizado',
    playerNameRequired: 'Elegí un nombre de jugador',
    playerNameTooLong: 'El nombre de jugador puede tener hasta 40 caracteres',
    lastNameTooLong: 'El apellido puede tener hasta 40 caracteres',
    nicknameTooLong: 'El apodo puede tener hasta 40 caracteres',
    invalidLocale: 'Idioma inválido',
    offline: 'Sin conexión. Probá de nuevo cuando tengas internet.',
    emailRequired: 'Ingresá tu email',
    invalidEmail: 'El email no es válido',
    passwordTooShort: 'La contraseña debe tener al menos {min} caracteres',
    emailAlreadyRegistered: 'El email ya está registrado',
    fillAllFields: 'Completá todos los campos',
    linkInvalidOrUsed: 'El enlace no es válido o ya fue usado',
    linkExpired: 'El enlace expiró. Pedí uno nuevo'
  }
}

export type Messages = typeof es
