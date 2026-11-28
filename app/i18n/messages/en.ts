import type { Messages } from '@/app/i18n/messages/es'

/** English dictionary. It must have the same shape as the Spanish one (es.ts), which the compiler checks. */
export const en: Messages = {
  common: {
    cancel: 'Cancel',
    close: 'Close',
    loading: 'Loading...',
    tapToClose: 'Tap to close',
    tapToCycle: 'Tap the card to see its attachments · outside to close'
  },
  sound: {
    title: 'Sound',
    music: 'Music',
    effects: 'Effects',
    mute: 'Mute everything'
  },
  nav: {
    myProfile: 'My profile',
    logout: 'Sign out',
    mainMenu: 'Main menu'
  },
  metadata: {
    mainMenu: 'Main menu',
    verifyEmail: 'Verify your email',
    register: 'Create account',
    forgotPassword: 'Recover password',
    newPassword: 'New password',
    login: 'Sign in',
    offline: 'Offline',
    profile: 'My profile',
    privacy: 'Privacy policy',
    deleteAccount: 'Delete account',
    practice: 'Practice',
    quickMatch: 'Quick match',
    welcome: 'Your hero',
    collection: 'Collection',
    decks: 'Decks',
    shop: 'Shop',
    lobby: 'Online match',
    match: 'Match',
    ranking: 'Ranking',
    campaign: 'Campaigns',
    play: 'Play'
  },
  pwa: {
    description:
      "A turnless card game: program 6 actions per phase, watch them clash with your rival's and defeat their hero.",
    installPrompt:
      'Install ChronoCast on your phone and play full screen, with an icon on your home screen like any other game.',
    install: 'Install',
    offlineTitle: 'No signal',
    offlineText: 'ChronoCast needs the internet for this screen. Check your connection and try again.'
  },
  orientation: {
    title: 'Rotate your phone',
    text: 'ChronoCast is played in landscape. Turn your phone sideways to keep playing.',
    lock: 'Play in landscape'
  },
  landing: {
    tagline: 'The Time Rift mixed every era. Build your deck, program the future and defeat the rival hero.',
    playFree: 'Play for free',
    steps: {
      explore: {
        title: 'Collect',
        text: 'Hundreds of cards from six eras: allies, abilities, weapons, armor, items, locations and traps.'
      },
      fight: {
        title: 'Program',
        text: 'No turns: both players choose 6 actions at once and they resolve together, step by step.'
      },
      rise: {
        title: 'Compete',
        text: "Challenge other players, raise your Prestige and complete every hero's campaign."
      }
    }
  },
  auth: {
    email: 'Email',
    password: 'Password',
    playerName: 'Player name',
    lastName: 'Last name',
    login: {
      title: 'Sign in',
      subtitle: 'The Rift awaits. Come in and build your deck.',
      google: 'Continue with Google',
      or: 'or',
      verified: 'Your email has been verified. You can now sign in.',
      passwordReset: 'Your password has been updated. You can now sign in.',
      invalidCredentials: 'Wrong email or password (or the account has not been verified yet)',
      submit: 'Sign in',
      forgotPassword: 'Forgot your password?',
      noAccount: "Don't have an account?",
      register: 'Sign up'
    },
    register: {
      title: 'Create account',
      verifyTitle: 'Verify your email',
      verifySent: 'We sent a verification link to {email}. Check your inbox and click it to activate your account.',
      alreadyActivated: 'Already activated it?',
      login: 'Sign in',
      passwordHint: 'At least 6 characters',
      repeatPassword: 'Repeat password',
      passwordsMismatch: "Passwords don't match",
      passwordsMismatchDot: "Passwords don't match.",
      submit: 'Create account',
      haveAccount: 'Already have an account?'
    },
    forgot: {
      title: 'Recover password',
      sent: 'If there is an account associated with {email}, you will receive an email with instructions to reset your password.',
      subtitle: "Enter your email and we'll send you a link to reset your password.",
      submit: 'Send link',
      back: 'Back to sign in'
    },
    reset: {
      title: 'New password',
      newPassword: 'New password',
      confirmPassword: 'Confirm password',
      submit: 'Save password',
      requestNew: 'Request a new link'
    },
    verify: {
      expiredTitle: 'Link expired',
      expiredText:
        'The verification link has expired. Sign up again with the same email and we will send you a new one.',
      invalidTitle: 'Invalid link',
      invalidText: 'The verification link is not valid or has already been used.',
      title: 'Verify your email',
      text: 'Check your inbox and click the verification link to activate your account.',
      registerAgain: 'Sign up again'
    },
    resetInvalid: 'The link is not valid or has already been used.',
    goToLogin: 'Go to sign in',
    somethingWentWrong: 'Something went wrong. Please try again.',
    emails: {
      verifySubject: 'Activate your ChronoCast account',
      resetSubject: 'Reset your ChronoCast password',
      greeting: 'Hi {name}!',
      verifyIntro: 'Thanks for joining ChronoCast. To activate your account and start playing, verify your email:',
      verifyAction: 'Verify my email',
      verifyFooter: "The link is valid for {hours} hours. If you didn't create this account, ignore this message.",
      resetIntro: 'We received a request to reset the password of your ChronoCast account.',
      resetAction: 'Reset password',
      resetFooter: "The link is valid for {hours} hour. If you didn't request this change, ignore this message."
    }
  },
  account: {
    profile: 'My profile',
    playerNameTitle: 'Player name',
    lastNameTitle: 'Last name',
    nicknameTitle: 'Nickname',
    nicknameHint: 'If set, it is shown instead of your name and last name',
    save: 'Save',
    saved: 'Profile updated!',
    languageLabel: 'App language',
    delete: {
      section: 'Delete account',
      description:
        'Your account, your player name, your email, your collection and your decks are deleted. It cannot be undone.',
      button: 'Delete my account',
      title: 'Delete your account?',
      warning:
        'Your account, your card collection, your decks, your gold and your Prestige will be deleted forever. This cannot be undone.',
      confirmWord: 'DELETE',
      confirmLabel: 'Type {word} to confirm',
      confirm: 'Delete forever'
    }
  },
  legal: {
    privacyLink: 'Privacy policy',
    updatedAt: 'Last updated: {date}',
    privacy: {
      title: 'Privacy policy',
      intro:
        'ChronoCast is a turnless collectible card game, played against the computer or against other people. This policy explains what data we keep, what we use it for and how you can delete it.',
      data: {
        title: 'What data we keep',
        text: 'When you create your account: your email, your player name and your password (stored encrypted, never in plain text). If you sign in with Google, Google gives us your email and your name. We also keep the language you choose your card collection, your decks, your gold, your Prestige, your campaign progress and the matches you play.'
      },
      use: {
        title: 'What we use it for',
        text: "Only to make the game work: signing in, saving your collection and progress so you can play on any device, setting up matches against other players, and sending you the account verification and password recovery emails. We don't sell your data."
      },
      thirdParties: {
        title: 'Third-party services',
        text: 'We use Google for Google sign-in and the app usage statistics (Google Analytics through Google Tag Manager); Vercel to host the app; a PostgreSQL database provider to store the data; and Resend to send the emails. Each of them handles data under its own privacy policy.'
      },
      storage: {
        title: 'Cookies and storage',
        text: "We use one cookie to keep you signed in and another to remember your language. The browser's local storage keeps device preferences, such as having closed the install prompt."
      },
      retention: {
        title: 'How long we keep it',
        text: 'Your account and your game data are kept until you delete them.'
      },
      deletion: {
        title: 'How to delete your data',
        text: "You can delete your account at any time from My profile → Delete account: your account and all your game data are deleted right away. If you can't sign in, write to {email} from your account's email and we will delete it for you."
      },
      security: {
        title: 'Security',
        text: 'All communication with ChronoCast is encrypted (HTTPS) and passwords are stored with a secure hash (bcrypt).'
      },
      children: {
        title: 'Children',
        text: "ChronoCast is not directed at children under 13 and we don't knowingly collect data from children under that age. If you believe a child gave us their data, write to {email} and we will delete it."
      },
      changes: {
        title: 'Changes and contact',
        text: 'If we change this policy, we will update the date above. For any question about your data, write to {email}.'
      }
    },
    deleteAccount: {
      title: 'Delete your ChronoCast account',
      intro: 'You can delete your account and all your data from the app, at any time:',
      steps: {
        signIn: 'Sign in to ChronoCast with your account.',
        profile: "Open your player's menu and choose My profile.",
        confirm: 'Tap Delete my account and confirm by typing DELETE.'
      },
      whatTitle: 'What is deleted',
      whatText:
        'Your account (email, player name and password) and all your game data (collection, decks, gold, Prestige and campaigns) are deleted right away and forever. We keep no copy.',
      noAccessTitle: "Can't sign in?",
      noAccessText: "Write to {email} from your account's email asking us to delete it, and we will do it for you.",
      goToProfile: 'Go to My profile'
    }
  },
  play: {
    title: 'Play',
    back: 'Menu',
    modes: {
      campaign: {
        title: 'Campaign',
        text: 'Ten battles against the CPU for each hero, with a story, a final boss and rewards.'
      },
      online: {
        title: 'Online match',
        text: 'Against another player of similar Prestige, matched automatically. It counts for Prestige.'
      },
      quick: {
        title: 'Quick match',
        text: 'Against the CPU with a random hero and deck: every match is different. Pays some gold, less than online.'
      }
    }
  },
  home: {
    tagline: 'Program the future. Defeat the rival hero.',
    play: 'Play',
    decks: 'Decks',
    shop: 'Shop',
    ranking: 'Ranking',
    comingSoon: 'Coming soon',
    gold: 'Gold',
    rating: 'Prestige',
    cardCount: { one: '{count} card', other: '{count} cards' }
  },
  progression: {
    level: 'Level',
    levelShort: 'Lv {level}',
    xpProgress: '{xp} / {next} XP',
    xpGained: '+{xp} XP',
    levelUp: 'Level {level}! +{gold} gold'
  },
  game: {
    factions: {
      primal: 'Primal',
      bronze: 'Bronze',
      arcane: 'Arcane',
      clockwork: 'Clockwork',
      neon: 'Neon',
      void: 'Void',
      neutral: 'Neutral'
    },
    sides: {
      dawn: 'Dawn',
      eclipse: 'Eclipse',
      neutral: 'Neutral'
    },
    elements: {
      fire: 'Fire',
      ice: 'Ice',
      lightning: 'Lightning',
      shadow: 'Shadow',
      light: 'Light',
      time: 'Time',
      acid: 'Acid',
      arcane: 'Arcane',
      earth: 'Earth',
      sonic: 'Sonic',
      water: 'Water',
      wind: 'Wind'
    },
    resists: 'Resists {elements}',
    weakTo: 'Weak to {elements}',
    tribes: {
      saurian: 'Saurian',
      caveborn: 'Caveborn',
      beast: 'Beast',
      legionnaire: 'Legionnaire',
      oracle: 'Oracle',
      colossus: 'Colossus',
      magus: 'Magus',
      fae: 'Fae',
      drake: 'Drake',
      automaton: 'Automaton',
      inventor: 'Inventor',
      skyship: 'Skyship',
      cyborg: 'Cyborg',
      netrunner: 'Netrunner',
      enforcer: 'Enforcer',
      undead: 'Undead',
      cultist: 'Cultist',
      horror: 'Horror',
      drifter: 'Drifter',
      elemental: 'Elemental'
    },
    types: {
      hero: 'Hero',
      ally: 'Ally',
      ability: 'Ability',
      weapon: 'Weapon',
      armor: 'Armor',
      item: 'Item',
      location: 'Location',
      trap: 'Trap',
      attachment: 'Attachment',
      artifact: 'Artifact'
    },
    subtypes: {
      bow: 'Bow',
      crossbow: 'Crossbow',
      blowgun: 'Blowgun',
      sling: 'Sling',
      harpoon: 'Harpoon',
      sword: 'Sword',
      axe: 'Axe',
      spear: 'Spear',
      mace: 'Mace',
      staff: 'Staff',
      wand: 'Wand',
      orb: 'Orb',
      tool: 'Tool',
      energy: 'Energy',
      scythe: 'Scythe',
      dagger: 'Dagger',
      leather: 'Leather',
      plate: 'Plate',
      shield: 'Shield',
      helm: 'Helm',
      robe: 'Robe',
      circlet: 'Circlet',
      exosuit: 'Exosuit',
      suit: 'Suit',
      shroud: 'Shroud',
      instinct: 'Instinct',
      tactic: 'Tactic',
      spell: 'Spell',
      gadget: 'Gadget',
      program: 'Program',
      ritual: 'Ritual',
      mount: 'Mount',
      charm: 'Charm',
      rune: 'Rune',
      implant: 'Implant',
      curse: 'Curse'
    },
    rarities: {
      common: 'Common',
      uncommon: 'Uncommon',
      rare: 'Rare',
      epic: 'Epic',
      legendary: 'Legendary',
      exotic: 'Exotic',
      mythic: 'Mythic'
    },
    keywords: {
      guardian: 'Guardian',
      quick: 'Quick',
      charge: 'Charge',
      ranged: 'Ranged',
      agile: 'Agile',
      flying: 'Flying',
      stealth: 'Stealth',
      frenzy: 'Frenzy',
      poison: 'Poison',
      lifesteal: 'Lifesteal',
      shield: 'Shield',
      thorns: 'Thorns',
      retaliate: 'Retaliate',
      cleave: 'Cleave',
      unique: 'Unique',
      echo: 'Echo',
      resurge: 'Resurge'
    },
    speeds: {
      instant: 'Instant',
      fast: 'Fast',
      normal: 'Normal',
      slow: 'Slow'
    },
    restriction: {
      any: 'Any hero',
      faction: 'Heroes of the {faction} faction',
      hero: 'Only {hero}',
      side: 'Heroes of the {side} side',
      combined: 'Heroes: {parts}',
      part: {
        hero: 'hero {hero}',
        faction: '{faction} faction',
        side: '{side} side'
      },
      or: 'or',
      and: 'and'
    }
  },
  onboarding: {
    title: 'Choose your hero',
    text: 'The one you start with. You get their 40-card starter deck; you can get other heroes later.',
    health: '{health} health',
    styles: {
      'legate-varro': 'Endures and strikes: guardians, formations and armor.',
      'ilyra-starweaver': 'Controls from afar: damage spells, ranged mages and shields.',
      'kora-wildfang': 'Attacks fast: quick beasts, bow and traps.'
    },
    choose: 'Choose {hero}',
    opening: 'Opening your starter deck...',
    opened: 'Your starter deck!',
    tap: 'Tap a card to flip it',
    revealAll: 'Flip them all',
    openedText: 'It is already saved in Decks. We recommend playing the tutorial to learn the basics.',
    tutorial: 'Play the tutorial',
    menu: 'Go to the menu'
  },
  collection: {
    title: 'Collection',
    distinct: '{owned} of {total} different cards',
    search: 'Search',
    all: 'All',
    allTypes: 'All types',
    allSubtypes: 'All subtypes',
    allFactions: 'All factions',
    allSides: 'All sides',
    allRarities: 'All rarities',
    allCosts: 'All costs',
    cost: 'Cost {cost}',
    usableBy: 'Usable by {hero}',
    anyHero: 'Any hero',
    ownedOnly: 'Only the ones I own',
    owned: 'You own {count}',
    notOwned: 'You do not own it',
    whoCanUse: 'Who can use it',
    empty: 'No card matches the filters.',
    back: 'Menu'
  },
  activeDeck: {
    title: 'Your active deck',
    change: 'Change',
    none: 'You have no deck to play with.',
    notPlayable: '"{name}" is unfinished: complete it or activate another one in Decks.',
    wrongHero:
      'This campaign is played with a {hero} deck and your active deck is a {other} one. Activate a {hero} deck in Decks.'
  },
  decks: {
    title: 'Decks',
    new: 'New deck',
    chooseHero: 'Choose the hero of the deck',
    size: { one: '{count} card', other: '{count} cards' },
    playable: 'Ready to play',
    notPlayable: 'Incomplete',
    edit: 'Edit',
    delete: 'Delete',
    deleteTitle: 'Delete deck',
    deleteConfirm: 'Delete the deck "{name}"? This cannot be undone.',
    deleted: 'Deck deleted',
    active: 'Active',
    setActive: 'Activate',
    activated: 'You now play with "{name}"',
    activeHint: 'The active deck is the one you use in every game mode, and the shop does not let you sell its cards.',
    empty: 'You have no decks yet.',
    back: 'Menu',
    editor: {
      name: 'Deck name',
      newName: 'New {hero} deck',
      counter: '{count}/{min}',
      max: 'max. {max}',
      curve: 'Cost curve',
      pool: 'Your cards for {hero}',
      list: 'Cards in the deck',
      save: 'Save',
      cardBack: 'Back',
      chooseBack: 'Deck card back',
      moreBacks: 'More card backs in the Shop',
      saved: 'Deck saved',
      back: 'Back',
      ok: 'The deck follows every rule',
      unsaved: 'There are unsaved changes',
      emptyDeck: 'Tap the cards on the right to add them.',
      clear: 'Clear',
      clearConfirm: 'Clear all?',
      removeHero: 'Remove hero (clears the deck)',
      chooseThisHero: 'Choose this hero',
      add: 'Add to deck',
      remove: 'Remove from deck',
      copies: 'In the deck: {inDeck} of {owned} owned',
      noneLeft: 'You have no more copies',
      maxCopies: 'At most {max} copies',
      deckFull: 'The deck is full ({max})',
      notInDeck: 'It is not in the deck',
      heroFirst: 'First, a hero',
      noHeroes: 'You have no heroes yet.'
    },
    problems: {
      unknownCard: '{card} does not exist',
      notAHero: '{card} is not a hero',
      heroInDeck: '{card} is a hero: it cannot go inside the deck',
      tooFewCards: 'Cards missing: {count} of at least {min}',
      tooManyCards: 'Too many cards: {count} of at most {max}',
      tooManyCopies: '{card}: {count} copies (at most {max})',
      restricted: 'This hero cannot use {card}',
      notOwned: '{card}: you own {owned} and the deck uses {count}',
      heroNotOwned: 'You do not own {card}'
    }
  },
  tutorial: {
    next: 'Got it',
    skip: 'Skip tutorial',
    tips: {
      mulligan: 'This is your opening hand. You can replace the cards you do not like, only once. For now, keep them.',
      phases:
        'The match is played in phases. In each one you program 6 actions on your timeline (on the right) while the CPU programs its own. Then they resolve together, step by step.',
      chronos:
        'Cards cost Chronos (⌛). To get more, tap a card and choose "Generate Chronos": you banish it (it does not go to your discard pile) and gain +1 capacity for good. Once per phase.',
      summon:
        'With Chronos you can play an ally: tap the card and then a free slot. The ally attacks from the next phase on (💤).',
      ready:
        'When you are done, tap Ready. This tutorial has no time limit; in regular matches you get 90 seconds per phase.',
      resolution:
        'Now both timelines turn over. In each step actions go from the fastest to the slowest; actions of the same speed happen at the same time.',
      attack:
        'Tap one of your allies and then an enemy slot to attack it. Attacks aim at slots: if the rival moves its ally first, the hit misses.',
      move: "To dodge, tap your ally and then an empty slot of yours (or a neighbor's to swap them). Moving is instant: it happens before the attacks of the same step.",
      win: 'You win when the rival hero reaches 0 health. Good luck!'
    }
  },
  battle: {
    practice: {
      title: 'Practice',
      text: 'Play against the CPU with your active deck. No rewards: it is to learn and try things out.',
      rivalHero: 'CPU hero',
      start: 'Start',
      back: 'Back'
    },
    quick: {
      title: 'Quick match',
      text: 'Your active deck against a random CPU hero and deck.',
      newRival: 'New rival',
      back: 'Back',
      retry: 'Try again',
      dealFailed: 'The match could not be set up.',
      verifying: 'Checking the match to pay your gold…',
      verifyFailed: 'The match could not be checked: no gold this time.',
      capped: "You already earned today's quick match gold. Come back tomorrow!"
    },
    cpu: 'CPU',
    phase: 'Phase {phase}',
    chronos: 'Chronos',
    deck: 'Deck',
    discard: 'Discard',
    traps: 'Traps',
    weapon: 'Weapon',
    armor: 'Armor',
    location: 'Location',
    emptySlot: 'Slot {slot}',
    ready: 'Ready',
    rivalThinking: 'Programming...',
    rivalReady: 'Ready!',
    fast: '×2',
    surrender: 'Leave',
    giveUp: 'Surrender',
    surrenderConfirm: 'Sure? Tap again',
    waitingRival: 'Waiting...',
    notReady: 'Just arrived: attacks from the next phase',
    stunned: 'Stunned',
    frozen: 'Frozen',
    statusNotes: {
      prey: "🎯 Prey: the hunter's ranged attacks deal it +3 {until}",
      disabled: '⛔ Switched off by a hack',
      poison: '☠️ Poisoned: loses {amount} when the phase starts',
      burn: '🔥 Burning: loses {amount} a phase ({phases} more phases)',
      frozen: "❄️ Frozen: can't attack, move or use abilities {until}",
      stunned: "💫 Stunned: can't act {until}",
      untilEnd: 'until the end of this phase',
      untilPhase: 'until the end of phase {phase}',
      notReady: '💤 Just arrived: acts from the next phase',
      disarmed: "🚫 Can't attack: {card} is attached to it",
      silenced: "🔇 Can't use its ability: {card} is attached to it",
      abilityUsed: "✋ Already used its ability this phase: can't attack",
      attacked: '✋ Already attacked this phase',
      tempAttack: '💪 {amount} attack until the end of the phase',
      attackChange: '⚔️ Attack {amount} (the card has {base})',
      healthChange: '❤️ Max health {amount} (the card has {base})',
      gained: '✨ Gained: {keywords}',
      lost: '➖ Lost: {keywords}',
      thornsChange: '🌵 Thorns {amount} (the card has {base})',
      location: '🗺️ Location in play on its side: {card}',
      attachments: '📎 Attached: {cards}',
      weapon: '🗡️ Weapon: {card} · {attack} attack · {durability} uses',
      armor: '🛡️ Armor: {card} · -{reduction} damage per hit · {durability} hits',
      heroAttacked: '✋ Already attacked with the weapon this phase',
      heroAbilityUsed: '✋ Already used its ability this phase',
      artifactAbilityUsed: '✋ Already used its ability this phase',
      boon_guard: '🛡️ Your allies take {amount} less damage {until}',
      boon_empower: '💥 Deals {amount} more damage to the rival {until}',
      boon_allyDiscount: '💰 Allies cost {amount} Chronos less {until}',
      veil: '👁️ Hidden: stealth and +{amount} attack {until}',
      veilStealth: '👁️ Hidden: stealth (attacking does not break it) {until}',
      contract: '📜 Under contract {until}: then it goes back to its owner',
      heroVeil: '👁️ Hidden: the rival can not attack it nor target it {until}',
      fallen: '💀 Fallen: reached 0 health'
    },
    attachedPick: {
      title: 'Choose the attached card',
      text: 'It has more than one: tap the one to aim at.'
    },
    deckPick: {
      title: 'Choose an artifact of your deck',
      text: 'It enters play without paying its cost, and your deck is shuffled.',
      cancel: 'Cancel'
    },
    mulligan: {
      title: 'Your opening hand',
      text: 'Tap the cards you want to replace. They go back to the deck and you draw as many. Only once.',
      keep: 'Keep them',
      change: { one: 'Replace {count} card', other: 'Replace {count} cards' },
      waiting: 'Waiting for the rival...'
    },
    attached: {
      weapon: "Hero's weapon\n🗡️ {attack} attack · {durability} uses",
      armor: "Hero's armor\n🛡️ -{reduction} damage per hit · {durability} hits",
      ally: 'Attached to the ally',
      artifact: 'Artifact in play',
      trap: 'Face-down trap'
    },
    rivalHand: 'Rival hand',
    zones: {
      hero: 'Hero',
      allies: 'Allies',
      support: 'Support',
      deck: 'Deck',
      chronos: 'Chronos',
      energy: 'Energy',
      graveyard: 'Graveyard'
    },
    actionsLeft: { one: '{count} action left', other: '{count} actions left' },
    hints: {
      attack: 'Choose who to attack.',
      move: 'Choose where to move it.',
      summon: 'Choose a free slot to summon it.',
      target: 'Choose the target.',
      attached: 'Tap the hero or the ally that has the attached card.',
      support: 'Tap the hero of the side that has the artifact or the trap.'
    },
    buttons: {
      attack: 'Attack',
      move: 'Move',
      weaponAttack: 'Attack with weapon',
      play: 'Play',
      sacrifice: 'Generate Chronos',
      ability: 'Ability ({cost})',
      abilityEnergy: 'Ability (⚡{cost})',
      cancel: 'Cancel'
    },
    actions: {
      wait: 'Wait',
      sacrifice: 'Chronos +1',
      play: 'Play',
      allyAttack: 'Attack',
      heroAttack: 'Weapon',
      heroAbility: 'Ability',
      allyAbility: 'Ally ability',
      artifactAbility: 'Artifact ability',
      move: 'Move'
    },
    speeds: {
      instant: 'Instant',
      fast: 'Fast',
      normal: 'Normal',
      slow: 'Slow'
    },
    fail: {
      cardUsed: 'Already programmed this phase',
      notPlanning: 'You cannot program right now',
      noCard: 'The card is gone',
      notEnoughChronos: 'Not enough Chronos',
      slotsFull: 'The 5 slots are taken',
      noUnit: 'The ally is gone',
      notReady: 'That ally cannot act yet',
      alreadyAttacked: 'It already attacked this phase',
      noWeapon: 'The hero has no weapon',
      noAbility: 'It has no ability',
      abilityUsed: 'The ability was already used this phase',
      exhausted: 'That ally already acted this phase (it attacked or used its ability)',
      sacrificeLimit: 'You can generate Chronos once per phase',
      invalidTarget: 'Invalid target',
      noAttached: 'The rival has no weapon, armor or attached cards',
      stunned: 'It is stunned',
      heroFallen: 'The hero fell',
      supportFull: 'The 5 support slots are taken',
      cancelled: 'Cancelled by a trap',
      notEnoughEnergy: 'Not enough energy',
      cantAttack: 'An attachment keeps it from attacking',
      silenced: 'An attachment keeps it from using its ability',
      frozen: 'It is frozen',
      noChoice: 'There is no card for it to take',
      nothingToDestroy: 'There is nothing in play for it to destroy',
      notEnoughDiscard: 'Not enough cards in your discard pile to Consume',
      disabled: 'It is switched off by a hack',
      noSupport: 'There are no artifacts or traps to choose',
      timelineFull: 'The timeline already has 6 actions'
    },
    floats: {
      miss: 'Miss',
      blocked: 'Blocked',
      stun: 'Stunned',
      fatigue: 'Fatigue'
    },
    end: {
      victory: 'Victory!',
      defeat: 'Defeat',
      draw: 'Draw',
      hero: 'Hero defeated',
      phaseLimit: 'The phase limit was reached',
      surrender: 'Surrender',
      abandon: 'Abandon',
      phases: { one: '{count}-phase match', other: '{count}-phase match' },
      rematch: 'Rematch',
      changeHeroes: 'Change heroes',
      menu: 'Menu',
      lobby: 'Back to Play',
      firstWin: 'First win of the day!'
    }
  },
  shop: {
    title: 'Shop',
    back: 'Menu',
    gold: 'Your gold',
    tabs: { packs: 'Packs', cards: 'Cards', backs: 'Card backs' },
    backs: {
      intro: 'Card backs for your decks: the pricier, the more elaborate. Each deck picks its own in the editor.',
      owned: 'Yours',
      bought: 'You bought the {back} card back',
      noGold: 'Not enough gold',
      useInDeck: 'Pick it in the editor of each deck.',
      names: {
        default: 'Classic',
        primal: 'Primal Era',
        bronze: 'Bronze Era',
        arcane: 'Arcane Era',
        clockwork: 'Clockwork Era',
        neon: 'Neon Era',
        void: 'Void Era',
        'pocket-watch': 'Pocket Watch',
        'time-rift': 'Time Rift',
        astrolabe: 'Celestial Astrolabe',
        'eon-dragon': 'Eon Dragon',
        'throne-of-time': 'Throne of Time',
        'end-of-eras': 'End of the Eras'
      }
    },
    packNames: {
      traveler: 'Traveler Pack',
      chronicler: 'Chronicler Pack',
      guardian: 'Guardian Pack',
      eternal: 'Eternal Pack',
      faction: '{faction} Pack'
    },
    packTexts: {
      traveler: 'To begin with: commons and uncommons.',
      chronicler: 'Always brings a rare or better.',
      guardian: 'Three sure rares and two epics or better.',
      eternal: 'The best of time: two sure legendaries.',
      faction: 'Like the Chronicler, with {faction} and neutral cards.'
    },
    factionPacks: 'Faction packs',
    buy: 'Buy',
    odds: 'Odds',
    hideOdds: 'Hide',
    chance: '{rarity} {percent} %',
    oddsNote:
      'Each card is drawn at random among the ones of its rarity. While the catalog has no cards of a rarity, the best rarity available below it comes instead.',
    pityLeft: {
      one: 'Guarantee: if the next Guardian or Eternal pack brings no legendary, the one after it brings one.',
      other: 'Guarantee: after {count} Guardian or Eternal packs without a legendary, the next one brings one.'
    },
    pityReady: 'Guarantee: the next Guardian or Eternal pack brings a sure legendary.',
    opening: {
      title: 'Opening the {pack}',
      tap: 'Tap a card to flip it',
      revealAll: 'Flip them all',
      done: 'Pack opened!',
      isNew: 'New!',
      guaranteed: 'Guarantee! This pack brings a legendary.',
      again: 'Buy another',
      close: 'Continue'
    },
    cards: {
      lockedLevel: 'Unlocks at level {level}',
      bought: { one: 'You bought {card}', other: 'You bought {count} copies of {card}' },
      heroOwned: 'You already have this hero',
      notForSale: 'The shop does not sell this card',
      noGold: 'You do not have enough gold',
      empty: 'No card matches the filters.'
    },
    sell: {
      quick: 'Quick sell',
      quickText:
        'Sells the copies beyond 4 of each card (beyond 1 if it is unique) and never touches the ones your active deck uses.',
      quickPreview: {
        one: 'You sell {count} card for {gold} gold.',
        other: 'You sell {count} cards for {gold} gold.'
      },
      confirm: 'Yes, sell',
      cancel: 'Cancel',
      sellOne: 'Sell',
      confirmValuable: 'It is a {rarity} card. Are you sure you want to sell it?',
      freeCopies: {
        one: 'You can sell {count} copy: the rest are in your active deck.',
        other: 'You can sell {count} copies: the rest are in your active deck.'
      },
      sold: { one: 'You sold {count} card for {gold} gold', other: 'You sold {count} cards for {gold} gold' },
      notSellable: 'This card cannot be sold',
      noneOwned: 'You have no copies to sell',
      allInDeck: 'Every copy is in your active deck'
    }
  },
  lobby: {
    title: 'Online match',
    back: 'Play',
    goToDecks: 'Go to Decks'
  },
  matchmaking: {
    searching: 'Searching for a rival...',
    range: 'Rivals with Prestige between ⭐ {min} and ⭐ {max}',
    closesIn: 'The search ends in {time}',
    cancel: 'Cancel',
    notFound: 'No rival found in time. Try again in a while.'
  },
  campaign: {
    title: 'Campaigns',
    back: 'Play',
    text: 'One campaign per hero: 10 battles against the CPU, each harder than the last, and a boss at the end. You play it with your deck of that hero, and the first win of each battle pays rewards.',
    progress: '{won}/{total}',
    play: 'Start',
    continue: 'Continue',
    replay: 'View map',
    completed: 'Completed',
    locked: 'You need {hero}',
    exclusive: 'Exclusive card',
    map: 'Map',
    battle: 'Battle {number}',
    boss: 'Boss',
    rival: 'Rival',
    difficulty: 'Difficulty',
    situation: 'Situation',
    noSituation: 'No advantages: an even duel.',
    setup: {
      allies: 'The rival starts with {cards} in play',
      chronos: 'The rival starts with {count} Chronos capacity',
      extraHealth: 'The rival hero has +{count} health',
      location: 'Rival location in play: {card}',
      weapon: 'The rival hero starts with {card}',
      armor: 'The rival hero starts with {card}',
      handSize: 'You start with {count} cards in hand'
    },
    rewards: 'First win rewards',
    gold: '{gold} gold',
    pack: '{pack}',
    rewardCard: 'Exclusive card: {card}',
    alreadyWon: 'You already won this battle: playing it again pays nothing.',
    start: 'To battle!',
    stageLocked: 'Win the previous battle to unlock it.',
    unknownRival: '???',
    unknownStory: 'Nobody knows who waits on the other side of the rift. Win the previous battle to find out.',
    end: {
      victory: 'Victory!',
      defeat: 'Defeat',
      draw: 'Draw',
      verifying: 'Verifying the result...',
      verifyFailed: 'The result of the battle could not be verified.',
      noReward: 'You had already won this battle: no rewards this time.',
      completed: 'Campaign completed!',
      newCard: 'New exclusive card!',
      packCards: '{pack}',
      next: 'Next battle',
      retry: 'Retry',
      map: 'Back to the map',
      tryAgain: 'Retry the verification'
    }
  },
  campaigns: {
    'legate-varro': {
      title: 'The Ninth Legion',
      intro:
        'A rift in time swallowed the Ninth Legion. Varro found it on the other side: in a Rome that never was, ruled by a usurper who wants the real one.',
      ending:
        'Caelus falls and his laurel crown shatters into a thousand clocks. The Ninth goes home, a century late, with the eagle held high.',
      stages: {
        s1: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Caelus the Usurper',
          text: 'On his bronze throne, surrounded by broken clocks, Caelus waits. His praetorians know no fear.'
        }
      }
    },
    'ilyra-starweaver': {
      title: 'The Fading Sky',
      intro:
        "One by one, the stars are going out. Ilyra follows the trail of darkness from era to era, and in each one she finds someone who doesn't want her to follow it.",
      ending:
        'Morgrath crumbles into dust and the light he kept in his abbey goes back to the sky. That night, for the first time in centuries, the sky is full again.',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Morgrath, the Lich Abbot',
          text: 'In the bell tower of his abbey, the dead abbot keeps the light of stolen stars in jars. He has come for the last one.'
        }
      }
    },
    'kora-wildfang': {
      title: 'The Hunt for the Shaman',
      intro:
        'Something is hunting the hunters. Kora follows the tracks of the jungle to other eras and back, up to the cave where Ooma wakes the bones of the beasts.',
      ending:
        'Ooma falls and the bones of her cave go back to sleep. Fang, the sabertooth, roars on the hill: the jungle has a new protector.',
      stages: {
        s1: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Ooma Bonewhisper sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Ooma Bonewhisper sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Ooma Bonewhisper sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Ooma Bonewhisper',
          text: 'Deep in the cave, surrounded by moving bones, Ooma raises her staff. The ancestors answer her.'
        }
      }
    },
    'ooma-bonewhisper': {
      title: 'The Ash Wakes',
      intro:
        'The ancestors whisper the same promise every night: the mountain will wake, and its power with it. Ooma gathers her bones and walks toward the smoke, but someone from the jungle will not let her through.',
      ending:
        'Kora falls and the jungle goes silent. Ooma reaches the top, lays her bones on the warm ash, and the mountain answers her.',
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Kora Wildfang sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Kora Wildfang sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Kora Wildfang sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Kora Wildfang',
          text: 'At the foot of the mountain, with her sabertooth at her side, Kora draws her bow. She protects the jungle, and the jungle does not want to wake.'
        }
      }
    },
    'ada-copperwick': {
      title: 'The Stolen Patent',
      intro:
        'Ada invented a machine that runs on stolen seconds. The next morning, Chancellor Brassmaw already had the patent in his name and a whole factory copying it.',
      ending:
        "Brassmaw's contract breaks into a thousand gears. Ada gets her blueprints back and keeps one gear on a chain, to remember that inventions belong to those who dream them.",
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Chancellor Brassmaw',
          text: 'Behind a desk the size of a ship, the chancellor signs the patent with a golden pen.'
        }
      }
    },
    'vex-nightwire': {
      title: 'Total Surveillance',
      intro:
        'Someone put a bounty on Vex. The client is the same corporation that pays her bounties. She takes it personally.',
      ending:
        "Queen Static's signal cuts out, screen by screen. For the first time in a century, nobody is watching the megacity, and it looks beautiful.",
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Queen Static sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Queen Static sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Queen Static sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Queen Static',
          text: 'Among a thousand glowing screens, Queen Static smiles from all of them at once. She is already watching her.'
        }
      }
    },
    'malachar-the-unmade': {
      title: 'Beyond the Last Hour',
      intro:
        'Malachar unmade himself to escape the end of time. On the other side he found an army: every dead soul in history, waiting for an order. Only one singer stands between them and him.',
      ending:
        "Nyx's song fades. The dead turn around, one by one, and look at Malachar. He smiles: at last, someone is listening.",
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Nyx Hollowsong sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Nyx Hollowsong sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Nyx Hollowsong sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Nyx Hollowsong',
          text: 'In the last graveyard of time, Nyx sings so the dead can go home. None of them stays to listen to Malachar.'
        }
      }
    },
    'nyx-hollowsong': {
      title: 'The Last Bell',
      intro:
        'The dead stopped singing. In the silence, Nyx hears a bell far away, at the end of time, counting down to the last hour of all. Someone is ringing it.',
      ending:
        "Malachar's bell splits in two and the last hour never comes. In the graveyards of every era, the dead sing again.",
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Malachar the Unmade sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Malachar the Unmade sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Malachar the Unmade sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Malachar the Unmade',
          text: 'Beyond time, where nothing is left, Malachar raises the hammer of the last bell.'
        }
      }
    },
    'caelus-the-usurper': {
      title: 'The True Crown',
      intro:
        'Caelus already rules a Rome that never was. For nobody to call his crown fake he needs just one more thing: the legate of the Ninth Legion on his knees, the only Roman who never obeyed him.',
      ending:
        'Varro falls on his shield, but he does not kneel. Caelus keeps the victory and the doubt: is a crown you have to win by force a real crown at all?',
      stages: {
        s1: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Legate Varro sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Legate Varro sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Chancellor Brassmaw',
          text: 'A chancellor with a brass jaw who owns almost every clock. Legate Varro sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Legate Varro',
          text: 'Behind a wall of shields, with the eagle of the Ninth held high, Varro waits. He will not take a step back.'
        }
      }
    },
    'morgrath-lich-abbot': {
      title: 'The Abbey for Sale',
      intro:
        'A chancellor with a brass jaw bought the land of the ruined abbey to build a factory on it, graves included. Morgrath has been dead for three centuries, and he is not moving out.',
      ending:
        "Brassmaw's contract crumbles to dust and his factory fills up with ghosts. The abbey stays where it is, and the dead go back to sleep.",
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Chancellor Brassmaw',
          text: 'Behind a desk the size of a ship, the chancellor signs the eviction with a golden pen.'
        }
      }
    },
    'chancellor-brassmaw': {
      title: 'The Machine Strike',
      intro:
        'Brassmaw owns the factories, the city and most of the clocks. Until the day his machines stop obeying: Ada Copperwick taught them to think, and now they have declared they no longer need owners.',
      ending:
        'Ada falls and the assembly lines start moving again. Brassmaw signs a new contract with himself and keeps her blueprints at half price.',
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Ada Copperwick sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Queen Static',
          text: 'A queen who lives in the noise between channels. Ada Copperwick sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Caelus the Usurper',
          text: 'An emperor of a Rome that never was, wearing a stolen crown. Ada Copperwick sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Ada Copperwick',
          text: 'In the heart of the foundry, surrounded by machines that listen to her, the inventor lowers her goggles and presses a button.'
        }
      }
    },
    'queen-static': {
      title: 'Prime Time',
      intro:
        'Queen Static lives in the noise between channels, and the noise has started to repeat a name: Caelus. An emperor from a Rome that never was wants her signal to announce his coronation in every era at once.',
      ending:
        'Caelus falls off his throne live, in front of every screen in history. Queen Static keeps the broadcast going: it is the best thing she has ever aired.',
      stages: {
        s1: {
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose song guides lost souls back home. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Malachar the Unmade',
          text: 'A sorcerer who unmade himself to see what lies beyond time. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Morgrath, the Lich Abbot',
          text: 'An abbot dead for three centuries who still says mass to his ghosts. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Caelus the Usurper',
          text: 'On his bronze throne, in front of a thousand stolen cameras, Caelus clears his throat. The coronation is about to begin.'
        }
      }
    }
  },
  leagues: {
    apprentice: 'Apprentice',
    traveler: 'Traveler',
    chronicler: 'Chronicler',
    guardian: 'Guardian',
    timelord: 'Chronarch',
    eternal: 'Eternal'
  },
  ranking: {
    title: 'Ranking',
    back: 'Menu',
    yourPosition: 'Position {position}',
    notRanked: 'Play a public match to enter the ranking',
    empty: 'Nobody played public matches yet.',
    matches: { one: '{count} match', other: '{count} matches' },
    leagues: 'Leagues',
    note: 'Only public matches count: a win adds up to 30 Prestige and a loss takes up to 30.'
  },
  errors: {
    campaignNotFound: 'That campaign does not exist',
    campaignLocked: 'You do not own the hero of that campaign',
    stageLocked: 'That battle is still locked',
    invalidTicket: 'The battle is not valid',
    ticketExpired: 'The battle expired: start it again',
    battleNotVerified: "The result does not match the server's replay of the battle",
    invalidRecord: 'The battle record is not valid',
    invalidPlan: 'The timeline is not valid',
    matchNotFound: 'The match does not exist',
    notInMatch: 'You are not in that match',
    matchNotPlaying: 'The match is not being played',
    matchBusy: 'The match is busy, try again',
    phaseOver: 'That phase is over',
    alreadyInMatch: 'You are already in a match',
    deckNotPlayable: 'That deck is not ready to play',
    invalidVisibility: 'The match has to be public or private',
    roomNotFound: 'The room does not exist or already closed',
    roomCodeNotFound: 'No room is waiting with that code',
    roomTaken: 'Someone already joined that room',
    ownRoom: 'You cannot join your own room',
    notEnoughGold: 'Not enough gold: it costs {price} and you have {gold}',
    unknownPack: 'That pack does not exist',
    rarityLocked: 'You need level {level} to buy cards of that rarity',
    invalidCount: 'Invalid amount',
    cardNotForSale: 'That card is not sold as a single',
    heroOwned: 'You already have that hero',
    cardBackNotForSale: 'That card back is not for sale',
    cardBackOwned: 'You already have that card back',
    cardBackNotOwned: 'That card back is not yours',
    cardNotSellable: 'That card cannot be sold',
    notEnoughCopies: 'You do not own that many copies of {card}',
    cardInDeck: 'Your active deck uses those copies of {card}: only the spare ones can be sold',
    activeDeckNotPlayable: 'Your active deck is not ready to play',
    invalidHero: 'That hero does not exist',
    starterAlreadyChosen: 'You already chose your starter hero',
    deckNotFound: 'The deck does not exist',
    deckNameRequired: 'Give the deck a name',
    deckNameTooLong: 'The deck name can have up to {max} characters',
    unknownCard: 'The card {card} does not exist',
    heroNotOwned: 'You do not own that hero',
    cardsNotOwned: 'The deck has more copies of a card than you own',
    internal: 'Internal error',
    notAuthenticated: 'User not authenticated',
    unauthorized: 'Unauthorized',
    playerNameRequired: 'Choose a player name',
    playerNameTooLong: 'The player name can have up to 40 characters',
    lastNameTooLong: 'The last name can have up to 40 characters',
    nicknameTooLong: 'The nickname can have up to 40 characters',
    invalidLocale: 'Invalid language',
    offline: 'No connection. Try again when you are online.',
    emailRequired: 'Enter your email',
    invalidEmail: 'The email is not valid',
    passwordTooShort: 'The password must be at least {min} characters long',
    emailAlreadyRegistered: 'The email is already registered',
    fillAllFields: 'Fill in all the fields',
    linkInvalidOrUsed: 'The link is not valid or has already been used',
    linkExpired: 'The link has expired. Request a new one'
  }
}
