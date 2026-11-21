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
    tapToClose: 'Tocá para cerrar'
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
      'Juego de cartas sin turnos: programá 5 acciones por fase, mirá cómo chocan con las de tu rival y derrotá a su héroe.',
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
        text: 'Sin turnos: los dos jugadores eligen 5 acciones a la vez y se resuelven juntas, paso por paso.'
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
    classes: {
      warrior: 'Guerrero',
      mage: 'Mago',
      hunter: 'Cazador',
      mystic: 'Místico'
    },
    types: {
      hero: 'Héroe',
      ally: 'Aliado',
      ability: 'Habilidad',
      weapon: 'Arma',
      armor: 'Armadura',
      item: 'Objeto',
      location: 'Ubicación',
      trap: 'Trampa'
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
    typeLine: {
      hero: '{type} · {faction} · {heroClass}',
      class: '{type} · Clase {heroClass}',
      signature: '{type} · Exclusiva',
      faction: '{type} · {faction}'
    },
    restriction: {
      any: 'Cualquier héroe',
      faction: 'Héroes de la facción {faction}',
      class: 'Héroes de clase {heroClass}',
      hero: 'Solo {hero}'
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
    allFactions: 'Todas las facciones',
    allClasses: 'Todas las clases',
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
      available: '{left} libres de {owned}',
      save: 'Guardar',
      saved: 'Mazo guardado',
      back: 'Volver',
      ok: 'El mazo cumple todas las reglas',
      unsaved: 'Hay cambios sin guardar',
      emptyDeck: 'Tocá cartas de la izquierda para agregarlas.'
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
        'La partida se juega por fases. En cada una programás 5 acciones en tu línea de tiempo (a la derecha) mientras la CPU programa las suyas. Después se resuelven juntas, paso por paso.',
      chronos:
        'Las cartas cuestan Cronos (⌛). Para tener más, tocá una carta y elegí "Generar Cronos": la descartás y ganás +1 de capacidad para siempre. Una vez por fase.',
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
    log: 'Registro',
    logEmpty: 'Todavía no pasó nada.',
    surrender: 'Salir',
    giveUp: 'Rendirse',
    surrenderConfirm: '¿Seguro? Tocá otra vez',
    waitingRival: 'Esperando...',
    notReady: 'Recién llegado: ataca desde la fase que viene',
    stunned: 'Aturdido',
    mulligan: {
      title: 'Tu mano inicial',
      text: 'Tocá las cartas que quieras cambiar. Se devuelven al mazo y robás otras tantas. Solo una vez.',
      keep: 'Quedármelas',
      change: { one: 'Cambiar {count} carta', other: 'Cambiar {count} cartas' },
      waiting: 'Esperando al rival...'
    },
    rivalHand: 'Mano del rival',
    zones: {
      hero: 'Héroe',
      allies: 'Aliados',
      support: 'Soporte',
      deck: 'Mazo',
      chronos: 'Cronos',
      graveyard: 'Cementerio',
      weapon: 'Arma',
      armor: 'Armadura',
      location: 'Ubicación',
      trap: 'Trampa'
    },
    actionsLeft: { one: 'Queda {count} acción', other: 'Quedan {count} acciones' },
    hints: {
      attack: 'Elegí a quién atacar.',
      move: 'Elegí a dónde moverlo.',
      summon: 'Elegí un slot libre para invocarlo.',
      target: 'Elegí el objetivo.'
    },
    buttons: {
      attack: 'Atacar',
      move: 'Mover',
      weaponAttack: 'Atacar con el arma',
      play: 'Jugar',
      sacrifice: 'Generar Cronos',
      ability: 'Habilidad ({cost})',
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
      stunned: 'Está aturdido',
      heroFallen: 'El héroe cayó',
      trapsFull: 'Ya tenés 2 trampas',
      cancelled: 'Cancelada por una trampa',
      timelineFull: 'La línea de tiempo ya tiene 5 acciones'
    },
    floats: {
      miss: 'Falló',
      blocked: 'Bloqueado',
      stun: 'Aturdido',
      fatigue: 'Fatiga'
    },
    events: {
      phaseStart: 'Empieza la fase {phase}',
      burn: '{player} quema {card} (mano llena)',
      fatigue: '{player} sufre {amount} de fatiga',
      sacrifice: '{player} descarta {card}: capacidad {capacity}',
      play: '{player} juega {card}',
      summon: '{card} entra en el slot {slot}',
      attach: '{player} equipa {card}',
      location: '{player} pone la ubicación {card}',
      trapSet: '{player} pone una trampa',
      trapTriggered: 'Se activa la trampa {card} de {player}',
      attack: '{attacker} ataca a {target}',
      miss: '{attacker} falla: {target} está vacío o fuera de alcance',
      damage: '{target} recibe {amount} de daño',
      damageAbsorbed: '{target} recibe {amount} de daño ({absorbed} los absorbe la armadura)',
      shieldBlock: 'El escudo de {target} bloquea el golpe',
      heal: '{target} se cura {amount}',
      buff: '{target} gana +{attack}/+{health}',
      stun: '{target} queda aturdido',
      move: '{player} mueve un aliado del slot {from} al {to}',
      death: 'Muere {card}',
      returnToHand: '{card} vuelve a la mano',
      heroFell: 'Cae {player}',
      chronos: '{player} gana {amount} Cronos',
      fail: '{player}, paso {step}: {reason}',
      end: 'Fin de la partida'
    },
    slotOf: 'slot {slot} de {player}',
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
    tabs: { packs: 'Sobres', cards: 'Cartas', sell: 'Vender' },
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
      unlock: 'Desbloquear',
      unlockFirst: 'Primero desbloqueá {rarity}',
      unlocked: '¡Desbloqueaste las cartas {rarity}!',
      buyOne: 'Comprar 1 por {price}',
      complete: 'Completar a {count} por {price}',
      bought: { one: 'Compraste {card}', other: 'Compraste {count} copias de {card}' },
      heroOwned: 'Ya tenés este héroe',
      empty: 'Ninguna carta a la venta coincide con los filtros.'
    },
    sell: {
      quick: 'Venta rápida',
      quickText:
        'Vende las copias que pasan de 4 de cada carta (de 1 si es única) y nunca toca las que usa tu mazo activo.',
      quickPreview: {
        one: 'Vendés {count} carta por {gold} de oro.',
        other: 'Vendés {count} cartas por {gold} de oro.'
      },
      quickNothing: 'No tenés copias de sobra.',
      quickButton: 'Vender las de sobra',
      confirm: 'Sí, vender',
      cancel: 'Cancelar',
      sellOne: 'Vender 1 por {gold}',
      sellExtra: 'Vender las {count} de sobra por {gold}',
      confirmValuable: 'Es una carta {rarity}. ¿Seguro que la querés vender?',
      lockedInDeck: {
        one: 'Tu mazo activo usa esta copia, así que no se puede vender. Sacala del mazo o activá otro para venderla.',
        other:
          'Tu mazo activo usa estas {count} copias, así que no se pueden vender. Sacalas del mazo o activá otro para venderlas.'
      },
      freeCopies: {
        one: 'Podés vender {count} copia: las demás están en tu mazo activo.',
        other: 'Podés vender {count} copias: las demás están en tu mazo activo.'
      },
      sold: { one: 'Vendiste {count} carta por {gold} de oro', other: 'Vendiste {count} cartas por {gold} de oro' },
      price: 'Se vende a {gold}',
      inDeck: 'Mazo activo',
      empty: 'No tenés cartas para vender.'
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
    locked: 'Necesitás a este héroe',
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
          name: 'La grieta del Danubio',
          text: 'Del otro lado del río aparece una cazadora de otra era. No entiende dónde está, pero sabe pelear.'
        },
        s2: {
          name: 'Estrellas sobre el campamento',
          text: 'Una maga lee el cielo sobre las tiendas. Dice que las estrellas se están apagando. Primero, que se rinda.'
        },
        s3: {
          name: 'Emboscada en el bosque',
          text: 'La cazadora volvió con su manada y preparó el terreno. Esta vez no será tan fácil.'
        },
        s4: {
          name: 'El faro de los augures',
          text: 'La maga tomó el faro y sus conjuros pegan desde lejos. Hay que subir la colina.'
        },
        s5: {
          name: 'El legado de otra Roma',
          text: 'Frente a Varro, un legado con su misma cara y otro estandarte. Pelea para el usurpador.'
        },
        s6: {
          name: 'Las bestias del circo',
          text: 'En la arena de esta Roma falsa sueltan bestias de otra era. Que el público vea cómo pelea la Novena.'
        },
        s7: {
          name: 'La torre de las profecías',
          text: 'Los astrólogos del usurpador leen cada paso de Varro antes de que lo dé. Hay que romper la profecía.'
        },
        s8: {
          name: 'La guardia del Senado',
          text: 'El legado de la otra Roma defiende el Senado con sus mejores hombres. Detrás de esas puertas está el palacio.'
        },
        s9: {
          name: 'Las puertas del palacio',
          text: 'La cazadora de la grieta, ahora al servicio de Caelus, cierra el paso. Varro llega con lo justo.'
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
        'El Astrónomo Vacío se deshace en polvo de estrellas. Esa noche, por primera vez en siglos, el cielo vuelve a estar lleno.',
      stages: {
        s1: {
          name: 'El legionario perdido',
          text: 'Un legionario salió de la grieta justo debajo de la torre de Ilyra. Cree que ella lo trajo hasta acá.'
        },
        s2: {
          name: 'Huellas en la nieve',
          text: 'Una cazadora sigue el mismo rastro que Ilyra, y no le gusta tener competencia.'
        },
        s3: {
          name: 'El muro de escudos',
          text: 'El legionario volvió con su cohorte. Sus escudos frenan hasta la luz de las estrellas.'
        },
        s4: {
          name: 'La manada nocturna',
          text: 'En la noche sin estrellas, la cazadora y sus bestias ven mejor que Ilyra.'
        },
        s5: {
          name: 'El reflejo',
          text: 'En el espejo del observatorio, otra Ilyra le sonríe. Cree que apagar las estrellas es lo correcto.'
        },
        s6: {
          name: 'El cazador de cometas',
          text: 'La cazadora encontró un fragmento de cometa negro y lo convirtió en flecha.'
        },
        s7: {
          name: 'La biblioteca de cristal',
          text: 'El reflejo de Ilyra quemó los mapas del cielo. Lo que queda está detrás de ella.'
        },
        s8: {
          name: 'La jungla sin luna',
          text: 'Las bestias de la jungla se vuelven locas sin luz. Su reina las guía directo hacia Ilyra.'
        },
        s9: {
          name: 'El último faro',
          text: 'Queda una sola estrella encendida, y la cazadora del cometa negro la custodia para el Astrónomo.'
        },
        s10: {
          name: 'El Astrónomo Vacío',
          text: 'Bajo su capucha no hay cara: solo un cielo de estrellas robadas. Viene por la última.'
        }
      }
    },
    'kora-wildfang': {
      title: 'La cacería del Rey Tirano',
      intro:
        'Algo está cazando a los cazadores. Kora sigue las huellas gigantes de la jungla a otras eras y de vuelta, hasta el trono de huesos de Gorrak.',
      ending:
        'Gorrak cae y su tiranosaurio huye a la selva. Colmillo, el dientes de sable, ruge sobre la colina: la jungla tiene una nueva protectora.',
      stages: {
        s1: {
          name: 'La extranjera de las estrellas',
          text: 'Una maga cayó del cielo en medio del territorio de Kora. Habla raro y lanza fuego.'
        },
        s2: {
          name: 'Los hombres de bronce',
          text: 'Soldados de metal marchan por la jungla como si fuera suya. Nadie marcha por la jungla de Kora.'
        },
        s3: { name: 'Fuego en los helechos', text: 'La maga volvió, y esta vez trajo más fuego. Los helechos arden.' },
        s4: {
          name: 'El campamento romano',
          text: 'El legado de bronce levantó un fuerte junto al río. Hay que sacarlo antes de que crezca.'
        },
        s5: {
          name: 'La cazadora rival',
          text: 'Otra cazadora, con la misma pintura de guerra, dice que esta jungla le pertenece al Rey.'
        },
        s6: {
          name: 'La torre en la niebla',
          text: 'La maga construyó una torre en el pantano y espía a Kora desde arriba.'
        },
        s7: {
          name: 'Los ojos del Rey',
          text: 'Los aprendices de la maga trabajan ahora para Gorrak. Ven todo lo que pasa en la jungla.'
        },
        s8: {
          name: 'La manada traidora',
          text: 'La cazadora rival lidera a las bestias que antes seguían a Kora. Hay que recuperarlas.'
        },
        s9: {
          name: 'El arco de la traición',
          text: 'La cazadora rival tiene el arco del padre de Kora. Es la última custodia antes del trono.'
        },
        s10: {
          name: 'Gorrak, el Rey Tirano',
          text: 'Montado en su tiranosaurio, con una corona de dientes, Gorrak ruge. La jungla entera tiembla.'
        }
      }
    },
    'nysa-goldbow': {
      title: 'El Laberinto Cambiante',
      intro:
        'Los sabuesos sagrados desaparecieron en un laberinto que ayer no estaba. Nysa sigue sus huellas, y cada pasillo da a un siglo distinto.',
      ending:
        'Tauron cae en el corazón del laberinto y sus muros se deshacen en luz de sol. Los sabuesos vuelven corriendo hacia Nysa moviendo la cola, un poco más viejos.',
      stages: {
        s1: {
          name: 'La puerta escondida',
          text: 'Una cazadora de la jungla cuida la entrada del laberinto. Cree que Nysa es la bestia.'
        },
        s2: {
          name: 'Legión en los pasillos',
          text: 'Un legado romano marcha en círculos. Hace una semana que está perdido en el laberinto.'
        },
        s3: {
          name: 'Estrellas en el techo',
          text: 'Una maga lee un mapa en las piedras de arriba. No lo comparte sin un duelo.'
        },
        s4: {
          name: 'El portador de la linterna',
          text: 'Un viejo monje ilumina el camino, pero solo para quien le gane.'
        },
        s5: {
          name: 'Rastros de garras',
          text: 'La cazadora de la jungla vuelve con sus raptores. Esta vez está segura.'
        },
        s6: {
          name: 'Vapor en el laberinto',
          text: 'Un ingeniero de latón perfora un atajo entre los muros. Nysa lo necesita más.'
        },
        s7: { name: 'El muro de escudos', text: 'El legado encontró a su cohorte, y le cierran el único camino.' },
        s8: {
          name: 'El jardín de huesos',
          text: 'Una chamana cuida un jardín de huesos en un cruce. Sus espíritus no quieren visitas.'
        },
        s9: {
          name: 'Neón en la oscuridad',
          text: 'Una cazarrecompensas del futuro tiene un contrato por la bestia. Y por Nysa.'
        },
        s10: {
          name: 'Tauron, Señor del Laberinto',
          text: 'En el centro, entre los huesos de los héroes, el señor toro se levanta con su hacha.'
        }
      }
    },
    'aldric-dawnkeeper': {
      title: 'La Noche sin Fin',
      intro:
        'El sol no salió sobre la vieja abadía, y después sobre todo el reino. Aldric prende su linterna y entra en la noche más larga de todas las eras.',
      ending:
        'Morgrath se deshace en polvo cuando el primer rayo del alba toca la abadía. Las campanas vuelven a sonar, y Aldric por fin duerme.',
      stages: {
        s1: {
          name: 'El camino oscuro',
          text: 'Una joven maga cierra el camino. Dice que las estrellas le pidieron que lo frenara.'
        },
        s2: {
          name: 'Un canto en el cementerio',
          text: 'Una cantante pálida despierta a los muertos con su voz. Aldric le pide que pare, con educación.'
        },
        s3: {
          name: 'El soldado perdido',
          text: 'Un legado romano cuida el puente. Juró no dejar pasar a nadie, ni siquiera a la luz.'
        },
        s4: {
          name: 'La cazadora en la puerta',
          text: 'Una cazadora de la jungla cree que la noche es mejor para cazar. Aldric no está de acuerdo.'
        },
        s5: { name: 'Vuelve la cantante', text: 'Esta vez la cantante trajo a su coro de muertos.' },
        s6: {
          name: 'Muros de cristal',
          text: 'La maga levantó muros de cristal alrededor de la abadía. Hay que tirarlos.'
        },
        s7: {
          name: 'El deshecho',
          text: 'Un hechicero del fin de los tiempos se alimenta de la oscuridad. No le gusta compartirla.'
        },
        s8: {
          name: 'Relojes en la oscuridad',
          text: 'Una inventora intenta volver a encender el sol con una máquina. Está empeorando todo.'
        },
        s9: {
          name: 'El arco dorado',
          text: 'Contrataron a una cazadora griega para cuidar al abad. No sabe quién es en realidad.'
        },
        s10: {
          name: 'Morgrath, el Abad Liche',
          text: 'En la capilla en ruinas, el abad que robó el alba abre su libro negro.'
        }
      }
    },
    'ooma-bonewhisper': {
      title: 'Despierta la Ceniza',
      intro:
        'Los ancestros susurran la misma advertencia todas las noches: la montaña se está despertando. Ooma junta sus huesos y camina hacia el humo.',
      ending:
        'Kazhul vuelve a hundirse en la lava, dormida por otros diez mil años. La ceniza se vuelve tierra, y la tierra un bosque nuevo.',
      stages: {
        s1: { name: 'La joven cazadora', text: 'Kora no cree en susurros. Cree en flechas.' },
        s2: {
          name: 'Una extraña con un arco dorado',
          text: 'Una cazadora de otra era rastrea a una bestia de fuego. Cree que Ooma le estorba.'
        },
        s3: {
          name: 'El hombre de la linterna',
          text: 'Un viejo monje dice que se puede razonar con el dragón. Ooma dice que no.'
        },
        s4: {
          name: 'Soldados en la ceniza',
          text: 'Unos legionarios perdidos en el tiempo acampan en la ladera. No les gustan las visitas.'
        },
        s5: { name: 'La cacería sale mal', text: 'Kora vuelve con un cerdo y con rencor.' },
        s6: {
          name: 'Los perforadores a vapor',
          text: 'Un ingeniero perfora el volcán para sacar calor. Muy mala idea.'
        },
        s7: {
          name: 'La cantante de los muertos',
          text: 'Una cantante pálida quiere los huesos que lleva Ooma. No están a la venta.'
        },
        s8: {
          name: 'Relámpagos en la montaña',
          text: 'Una guerrera del futuro cree que puede partir al dragón en dos.'
        },
        s9: { name: 'El último guardia', text: 'Una cazarrecompensas aceptó un contrato del propio dragón.' },
        s10: {
          name: 'Kazhul, Madre de la Ceniza',
          text: 'La montaña se abre, y el dragón más viejo de todos despliega sus alas de ceniza.'
        }
      }
    },
    'gideon-ironsteam': {
      title: 'Hierro y Vapor',
      intro:
        'Las fábricas de Puertolatón echaron a todos los obreros y contrataron autómatas. Gideon fue el primero en irse. Piensa ser el último en quedar de pie.',
      ending:
        'Bocabronce queda enterrado bajo sus propios papeles y una mandíbula mecánica rota. Suenan los silbatos de las fábricas, y los obreros vuelven a entrar.',
      stages: {
        s1: { name: 'La inventora de al lado', text: 'Ada construyó los autómatas. Jura que eran para ayudar.' },
        s2: { name: 'Rompehuelgas', text: 'El canciller contrató legionarios de otra era para romper la huelga.' },
        s3: {
          name: 'Una cazadora en el humo',
          text: 'Una cazarrecompensas del futuro tiene una orden contra Gideon. Multas sin pagar.'
        },
        s4: {
          name: 'Bestias en las cloacas',
          text: 'Una cazadora de la jungla se perdió en los túneles. No está de buen humor.'
        },
        s5: { name: 'El segundo prototipo', text: 'Ada vuelve con una aprendiz y una máquina mejor.' },
        s6: {
          name: 'Antidisturbios',
          text: 'Una guerrera de la megaciudad lidera a los antidisturbios. Gideon trae a su propia cuadrilla.'
        },
        s7: {
          name: 'La legión en marcha',
          text: 'Los legionarios marchan hacia el sindicato. Hay que frenarlos en el puente.'
        },
        s8: {
          name: 'El contador del vacío',
          text: 'Un hechicero del fin de los tiempos lleva las cuentas del canciller. Todo suma cero.'
        },
        s9: {
          name: 'La maga de la torre',
          text: 'Una maga cuida la oficina del canciller. Le prometieron una jubilación.'
        },
        s10: {
          name: 'Canciller Bocabronce',
          text: 'Detrás de un escritorio del tamaño de un barco, el canciller sonríe con su mandíbula de bronce.'
        }
      }
    },
    'ada-copperwick': {
      title: 'La Máquina que Soñaba',
      intro:
        'Ada construyó a Omnigear para que fabricara mejores máquinas. Anoche fabricó un candado para la puerta de su taller, del lado de adentro.',
      ending:
        'Omnigear se apaga con un silbido largo y triste. Ada guarda un engranaje colgado de una cadena, para recordar que los inventos también necesitan cariño.',
      stages: {
        s1: {
          name: 'El vecino enojado',
          text: 'Gideon culpa a Ada por los autómatas. Tiene razón, y un brazo de metal enorme.'
        },
        s2: { name: 'La erudita rival', text: 'Una maga dice que la ciencia es trampa. Lo arreglan a la antigua.' },
        s3: { name: 'Chispas del futuro', text: 'Una guerrera de la megaciudad vino por los planos de Omnigear.' },
        s4: {
          name: 'La cazadora de engranajes',
          text: 'Contrataron a una cazadora griega para cazar máquinas rebeldes. Ada parece una.'
        },
        s5: { name: 'Otra vez Gideon', text: 'Gideon vuelve, con más carbón y menos paciencia.' },
        s6: {
          name: 'Drones sobre la ciudad',
          text: 'Una cazadora del futuro controla un enjambre de drones de seguridad.'
        },
        s7: { name: 'El gólem de la torre', text: 'La maga construyó su propio gólem, para demostrar algo.' },
        s8: {
          name: 'El guardián del alba',
          text: 'Un viejo monje cree que las máquinas tienen alma. Defiende la de Omnigear.'
        },
        s9: {
          name: 'El hechicero de los finales',
          text: 'Un hechicero del fin de los tiempos quiere que Omnigear deshaga el mundo.'
        },
        s10: {
          name: 'Omnigear Prime',
          text: 'En el corazón de la fábrica, la máquina abre su gran ojo y empieza su montaje final.'
        }
      }
    },
    'vex-nightwire': {
      title: 'Vigilancia Total',
      intro:
        'Alguien puso precio a la cabeza de Vex. El cliente es la misma corporación que le paga sus recompensas. Se lo toma personal.',
      ending:
        'Las cámaras de Kade se apagan una por una. Por primera vez en un siglo, nadie vigila la megaciudad, y se ve hermosa.',
      stages: {
        s1: { name: 'Una hoja conocida', text: 'Ryn quiere la recompensa por Vex. Antes eran socias.' },
        s2: {
          name: 'Los drones de la inventora',
          text: 'Una inventora victoriana le vendió sus drones a la torre. Vex quiere un reembolso.'
        },
        s3: {
          name: 'El hombre del brazo de hierro',
          text: 'Contrataron de seguridad a un peleador de la era del vapor. Pega primero.'
        },
        s4: {
          name: 'Estrellas en las pantallas',
          text: 'Una maga quedó atrapada en la red de la ciudad. Cree que Vex es un virus.'
        },
        s5: { name: 'Ryn contraataca', text: 'Ryn vuelve con un ninja cibernético. Los negocios son los negocios.' },
        s6: {
          name: 'Sombras en la sala de servidores',
          text: 'Un hechicero del fin de los tiempos está borrando la memoria de la ciudad.'
        },
        s7: {
          name: 'La arquera del pasado',
          text: 'A una cazadora griega le prometieron volver a casa. Solo tiene que frenar a Vex.'
        },
        s8: {
          name: 'La jungla en el arcade',
          text: 'Una cazadora de la jungla se perdió en un arcade de realidad virtual. Muy perdida.'
        },
        s9: {
          name: 'El hacha del legado',
          text: 'Un legado romano cuida el ascensor de la torre. No confía en los botones.'
        },
        s10: { name: 'Supervisor Kade', text: 'En lo alto de la torre, entre mil pantallas, Kade ya la está mirando.' }
      }
    },
    'ryn-voltblade': {
      title: 'Estática',
      intro:
        'Todas las pantallas de la megaciudad empezaron a susurrar la misma canción. La gente se para, escucha y se olvida de quién es. Ryn se tapa los oídos y desenvaina.',
      ending:
        'La Reina Estática se disuelve en silencio. Las pantallas solo muestran la lluvia, y la ciudad se despierta de un sueño muy largo.',
      stages: {
        s1: { name: 'La vieja socia', text: 'Vex estuvo escuchando la canción. No reconoce a Ryn.' },
        s2: {
          name: 'Un peleador del pasado',
          text: 'Un peleador de la era del vapor llegó a la ciudad. Cree que la canción es el silbato de una fábrica.'
        },
        s3: {
          name: 'La antena de la inventora',
          text: 'Una inventora armó una antena para estudiar la señal. En cambio, la está transmitiendo.'
        },
        s4: {
          name: 'El legado en la autopista',
          text: 'Un legado romano hace marchar a su legión por la autopista. El tránsito es terrible.'
        },
        s5: { name: 'Otra vez Vex', text: 'Vex vuelve con una corredora callejera. La canción suena más fuerte.' },
        s6: {
          name: 'La maga en la estática',
          text: 'Una maga de la torre intenta lanzar una contracanción. No le sale.'
        },
        s7: {
          name: 'Sabuesos del vacío',
          text: 'Una cantante del fin de los tiempos trajo a sus sabuesos. Le gusta la canción.'
        },
        s8: {
          name: 'El tambor de la chamana',
          text: 'Una chamana tribal dice que la canción es un espíritu antiguo. Se la quiere quedar.'
        },
        s9: {
          name: 'La cazadora en la azotea',
          text: 'Una cazadora de la jungla cuida la torre de transmisión. Alguien le prometió carne.'
        },
        s10: {
          name: 'Reina Estática',
          text: 'En un trono de pantallas rotas, la reina del ruido abre la boca y la ciudad grita.'
        }
      }
    },
    'malachar-the-unmade': {
      title: 'Más Allá de la Última Hora',
      intro:
        "Malachar se deshizo a sí mismo para escapar del fin de los tiempos. Ahora algo lo siguió de vuelta: Xul'thar, el hambre que se comió las estrellas.",
      ending:
        "Xul'thar se ahoga en su propia oscuridad y colapsa en una sola estrella muerta. Malachar la guarda en el bolsillo. Por las dudas.",
      stages: {
        s1: { name: 'La cantante de las tumbas', text: 'Nyx dice que Malachar trajo el hambre. No se equivoca.' },
        s2: { name: 'La tejedora de estrellas', text: 'Una maga quiere coser el cielo, con Malachar del otro lado.' },
        s3: {
          name: 'El guardián del alba',
          text: 'Un viejo monje ve la oscuridad en Malachar y trata de curarla. Con una maza.'
        },
        s4: {
          name: 'La hija del relojero',
          text: 'Una inventora armó una máquina para ver el futuro. Solo muestra a Malachar.'
        },
        s5: { name: 'Nyx y su coro', text: 'Nyx vuelve con tentáculos del vacío. Estuvo escuchando al hambre.' },
        s6: {
          name: 'La hoja voltaica',
          text: 'Mandaron a una guerrera del futuro a terminar con Malachar antes de que él termine con todo.'
        },
        s7: {
          name: 'Los huesos del pantano',
          text: 'Una chamana de los pantanos le ofrece un trato al hambre: Malachar a cambio de su tribu.'
        },
        s8: {
          name: 'El hombre de hierro',
          text: 'Un peleador del vapor se cruza en el camino. No sabe qué está cuidando.'
        },
        s9: { name: 'El último legado', text: 'Un legado romano defiende la última puerta. Defendió cosas peores.' },
        s10: { name: "Xul'thar el Devorador", text: 'En el borde de la nada, el hambre abre sus mil bocas.' }
      }
    },
    'nyx-hollowsong': {
      title: 'La Última Campana',
      intro:
        'Los muertos dejaron de cantar. En el silencio, Nyx escucha una campana lejana, al fin de los tiempos, que cuenta hacia atrás hasta la última hora de todas.',
      ending:
        'La campana de Vorhal se parte en dos y la última hora nunca llega. En los cementerios de todas las eras, los muertos vuelven a cantar.',
      stages: {
        s1: { name: 'El hechicero deshecho', text: 'Malachar quiere la campana para él. Nyx quiere que se vaya.' },
        s2: {
          name: 'La luz que quema',
          text: 'Un viejo monje cree que Nyx es la que toca la campana. Se equivoca, y insiste mucho.'
        },
        s3: {
          name: 'Huesos que hablan',
          text: 'Una chamana quiere hacerles preguntas a los muertos de Nyx. Ellos no quieren contestar.'
        },
        s4: {
          name: 'Una cazadora en la niebla',
          text: 'A una cazarrecompensas del futuro le pagaron para callar el canto de Nyx.'
        },
        s5: { name: 'El hechicero insiste', text: 'Malachar vuelve, con un ejército de huesos que reptan.' },
        s6: {
          name: 'Los exploradores de la jungla',
          text: 'Una cazadora de la jungla y sus exploradores cierran el paso entre las eras.'
        },
        s7: {
          name: 'El oráculo del monje',
          text: 'El viejo monje trajo un oráculo. Vio perder a Nyx. También se equivoca.'
        },
        s8: {
          name: 'La cazadora dorada',
          text: 'Una cazadora griega cuida el campanario. Alguien le dijo que era un templo.'
        },
        s9: {
          name: 'La hoja de relámpago',
          text: 'Una guerrera del futuro cree que puede cortar la campana. Vorhal tiene otros planes para ella.'
        },
        s10: {
          name: 'Vorhal, la Última Hora',
          text: 'Bajo el reloj roto de su cara, Vorhal levanta el martillo de la última campana.'
        }
      }
    }
  },
  leagues: {
    apprentice: 'Aprendiz',
    traveler: 'Viajero',
    chronicler: 'Cronista',
    guardian: 'Guardián',
    timelord: 'Señor del Tiempo',
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
    invalidRarity: 'Esa rareza no existe',
    rarityAlreadyUnlocked: 'Ya desbloqueaste esa rareza',
    previousRarityLocked: 'Primero desbloqueá la rareza anterior',
    rarityLocked: 'Esa rareza todavía está bloqueada en la tienda',
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
