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
        text: 'Against another player: quick match, public or private rooms. It counts for Prestige.'
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
    classes: {
      warrior: 'Warrior',
      mage: 'Mage',
      hunter: 'Hunter',
      mystic: 'Mystic'
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
    typeLine: {
      hero: '{type} · {faction} {heroClass}',
      class: '{type} · {heroClass}',
      signature: '{type} · Signature',
      faction: '{type} · {faction}'
    },
    restriction: {
      any: 'Any hero',
      faction: 'Heroes of the {faction} faction',
      class: '{heroClass} heroes',
      hero: 'Only {hero}'
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
    allFactions: 'All factions',
    allClasses: 'All classes',
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
      saved: 'Deck saved',
      back: 'Back',
      ok: 'The deck follows every rule',
      unsaved: 'There are unsaved changes',
      emptyDeck: 'Tap the cards below to add them.',
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
        'Cards cost Chronos (⌛). To get more, tap a card and choose "Generate Chronos": you discard it and gain +1 capacity for good. Once per phase.',
      summon:
        'With Chronos you can play an ally: tap the card and then a free slot. The ally attacks from the next phase on (💤).',
      ready: 'When you are done, tap Ready. If the 90 seconds run out, whatever you programmed is played.',
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
    log: 'Log',
    logEmpty: 'Nothing has happened yet.',
    surrender: 'Leave',
    giveUp: 'Surrender',
    surrenderConfirm: 'Sure? Tap again',
    waitingRival: 'Waiting...',
    notReady: 'Just arrived: attacks from the next phase',
    stunned: 'Stunned',
    frozen: 'Frozen',
    statusNotes: {
      poison: '☠️ Poisoned: loses {amount} when the phase starts',
      burn: '🔥 Burning: loses {amount} a phase ({phases} more phases)'
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
      armor: "Hero's armor\n🛡️ {armor} points",
      ally: 'Attached to the ally'
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
      target: 'Choose the target.'
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
      stunned: 'It is stunned',
      heroFallen: 'The hero fell',
      supportFull: 'The 5 support slots are taken',
      cancelled: 'Cancelled by a trap',
      notEnoughEnergy: 'Not enough energy',
      cantAttack: 'An attachment keeps it from attacking',
      silenced: 'An attachment keeps it from using its ability',
      frozen: 'It is frozen',
      timelineFull: 'The timeline already has 6 actions'
    },
    floats: {
      miss: 'Miss',
      blocked: 'Blocked',
      stun: 'Stunned',
      fatigue: 'Fatigue'
    },
    events: {
      phaseStart: 'Phase {phase} begins',
      burn: '{player} burns {card} (hand full)',
      fatigue: '{player} takes {amount} fatigue',
      sacrifice: '{player} discards {card}: capacity {capacity}',
      play: '{player} plays {card}',
      summon: '{card} enters slot {slot}',
      attach: '{player} equips {card}',
      attachAlly: '{player} attaches {card} to {target}',
      artifact: '{player} sets the artifact {card}',
      artifactSpent: '{card} is spent',
      location: '{player} sets the location {card}',
      trapSet: '{player} sets a trap',
      trapTriggered: "{player}'s trap {card} goes off",
      attack: '{attacker} attacks {target}',
      miss: '{attacker} misses: {target} is empty or out of reach',
      damage: '{target} takes {amount} damage',
      damageElement: '{target} takes {amount} damage ({element})',
      damageAbsorbed: '{target} takes {amount} damage ({absorbed} absorbed by armor)',
      shieldBlock: "{target}'s shield blocks the hit",
      heal: '{target} heals {amount}',
      buff: '{target} gets +{attack}/+{health}',
      stun: '{target} is stunned',
      gearDestroyed_weapon: 'The weapon of {player} breaks: {card}',
      gearDestroyed_armor: 'The armor of {player} breaks: {card}',
      gearDestroyed_artifact: 'The artifact {card} of {player} is destroyed',
      gearDestroyed_trap: 'A trap of {player} is destroyed: {card}',
      weaponWorn: 'The weapon of {player} loses {amount} durability',
      armorWorn: '{player} loses {amount} armor',
      status_poison: '{target} is poisoned ({amount})',
      status_burn: '{target} catches fire ({amount} a phase)',
      status_freeze: '{target} is frozen',
      cleanse: '{target} is freed from its status effects',
      damage_poison: '{target} loses {amount} to poison',
      damage_burn: '{target} loses {amount} to the flames',
      energyGain: '{player} gains {amount} energy',
      energyLoss: '{player} loses {amount} energy',
      move: '{player} moves an ally from slot {from} to {to}',
      death: '{card} dies',
      returnToHand: '{card} returns to the hand',
      heroFell: '{player} falls',
      chronos: '{player} gains {amount} Chronos',
      chronosLoss: '{player} loses {amount} Chronos',
      fail: '{player}, step {step}: {reason}',
      end: 'The match is over'
    },
    slotOf: "{player}'s slot {slot}",
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
      lobby: 'Back to the rooms',
      firstWin: 'First win of the day!'
    }
  },
  shop: {
    title: 'Shop',
    back: 'Menu',
    gold: 'Your gold',
    tabs: { packs: 'Packs', cards: 'Cards', sell: 'Sell' },
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
      unlock: 'Unlock',
      unlockFirst: 'Unlock {rarity} first',
      unlocked: 'You unlocked the {rarity} cards!',
      buyOne: 'Buy 1 for {price}',
      complete: 'Complete to {count} for {price}',
      bought: { one: 'You bought {card}', other: 'You bought {count} copies of {card}' },
      heroOwned: 'You already have this hero',
      empty: 'No card for sale matches the filters.'
    },
    sell: {
      quick: 'Quick sell',
      quickText:
        'Sells the copies beyond 4 of each card (beyond 1 if it is unique) and never touches the ones your active deck uses.',
      quickPreview: {
        one: 'You sell {count} card for {gold} gold.',
        other: 'You sell {count} cards for {gold} gold.'
      },
      quickNothing: 'You have no spare copies.',
      quickButton: 'Sell the spare ones',
      confirm: 'Yes, sell',
      cancel: 'Cancel',
      sellOne: 'Sell 1 for {gold}',
      sellExtra: 'Sell the {count} spare for {gold}',
      confirmValuable: 'It is a {rarity} card. Are you sure you want to sell it?',
      lockedInDeck: {
        one: 'Your active deck uses this copy, so it cannot be sold. Take it out of the deck or activate another one to sell it.',
        other:
          'Your active deck uses these {count} copies, so they cannot be sold. Take them out of the deck or activate another one to sell them.'
      },
      freeCopies: {
        one: 'You can sell {count} copy: the rest are in your active deck.',
        other: 'You can sell {count} copies: the rest are in your active deck.'
      },
      sold: { one: 'You sold {count} card for {gold} gold', other: 'You sold {count} cards for {gold} gold' },
      price: 'Sells for {gold}',
      inDeck: 'Active deck',
      empty: 'You have no cards to sell.'
    }
  },
  lobby: {
    title: 'Online match',
    back: 'Play',
    activeMatch: 'You have a match in progress.',
    resume: 'Back to the match',
    yourDeck: 'Your deck',
    goToDecks: 'Go to Decks',
    quickMatch: 'Quick match',
    createPublic: 'Create public',
    createPrivate: 'Create private',
    code: 'Room code',
    codePlaceholder: 'CODE',
    join: 'Join',
    publicNote: 'Public matches count for Prestige. Private ones are friendly and pay half the gold.',
    practice: 'Practice against the CPU',
    rooms: 'Rooms waiting for a rival',
    noRooms: 'No room is waiting. Create one or try a quick match!'
  },
  match: {
    waiting: 'Waiting for a rival...',
    waitingPublic: 'Your room is in the list of rooms. When someone joins, the match starts.',
    waitingPrivate: 'Send the code or the link to your friend. When they join, the match starts.',
    code: 'Code',
    share: 'Share link',
    shareText: 'Play with me in ChronoCast: room {code}',
    copied: 'Link copied',
    closesIn: 'The room closes in {time}',
    cancel: 'Close the room',
    backToLobby: 'Back to the rooms',
    closed: 'The room closed',
    closedText: 'Nobody joined in time, or you closed it.'
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
    locked: 'You need this hero',
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
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s2: {
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s3: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Caelus the Usurper sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Caelus the Usurper sent this champion to stop the march before the final battle.'
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
        'The Hollow Astronomer crumbles into stardust. That night, for the first time in centuries, the sky is full again.',
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
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. The Hollow Astronomer sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. The Hollow Astronomer sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. The Hollow Astronomer sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'The Hollow Astronomer',
          text: 'There is no face under his hood: only a sky of stolen stars. He has come for the last one.'
        }
      }
    },
    'kora-wildfang': {
      title: 'The Hunt for the Tyrant King',
      intro:
        "Something is hunting the hunters. Kora follows the giant tracks from the jungle to other eras and back, up to Gorrak's throne of bones.",
      ending:
        'Gorrak falls and his tyrannosaurus flees into the jungle. Fang, the sabertooth, roars on the hill: the jungle has a new protector.',
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
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Gorrak, the Tyrant King sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Gorrak, the Tyrant King sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Gorrak, the Tyrant King sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Gorrak, Tyrant King',
          text: 'Riding his tyrannosaurus, wearing a crown of teeth, Gorrak roars. The whole jungle shakes.'
        }
      }
    },
    'nysa-goldbow': {
      title: 'The Shifting Labyrinth',
      intro:
        'The sacred hounds vanished into a labyrinth that was not there yesterday. Nysa follows their tracks, and every corridor opens onto a different century.',
      ending:
        'Tauron falls in the heart of the maze and its walls crumble into sunlight. The hounds run back to Nysa, wagging their tails, a little older.',
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
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Tauron, Labyrinth Lord sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Tauron, Labyrinth Lord sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Tauron, Labyrinth Lord sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Tauron, Lord of the Labyrinth',
          text: 'At the center, among the bones of heroes, the bull lord rises with his axe.'
        }
      }
    },
    'aldric-dawnkeeper': {
      title: 'The Endless Night',
      intro:
        'The sun did not rise over the old abbey, and then over the whole kingdom. Aldric lights his lantern and walks into the longest night of all eras.',
      ending:
        'Morgrath crumbles into dust as the first ray of dawn touches the abbey. The bells ring again, and Aldric finally sleeps.',
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
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Morgrath, the Lich Abbot sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Morgrath, the Lich Abbot',
          text: 'In the ruined chapel, the abbot who stole the dawn opens his black book.'
        }
      }
    },
    'ooma-bonewhisper': {
      title: 'The Ash Wakes',
      intro:
        'The ancestors whisper the same warning every night: the mountain is waking up. Ooma gathers her bones and walks toward the smoke.',
      ending:
        'Kazhul sinks back into the lava, asleep for another ten thousand years. Ash turns into soil, and soil into a new forest.',
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
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Kazhul, Mother of Ash sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Kazhul, Mother of Ash sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Kazhul, Mother of Ash sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Kazhul, Mother of Ash',
          text: 'The mountain opens, and the oldest dragon of all spreads her wings of ash.'
        }
      }
    },
    'gideon-ironsteam': {
      title: 'Iron and Steam',
      intro:
        'The factories of Brasshaven fired every worker and hired automatons. Gideon was the first one fired. He plans to be the last one standing.',
      ending:
        'Brassmaw is buried under his own paperwork and a broken mechanical jaw. The factory whistles blow, and the workers walk back in.',
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
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Chancellor Brassmaw sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Chancellor Brassmaw',
          text: 'Behind a desk the size of a ship, the chancellor grins with his brass jaw.'
        }
      }
    },
    'ada-copperwick': {
      title: 'The Machine That Dreamed',
      intro:
        'Ada built Omnigear to build better machines. Last night it built a lock on her workshop door, from the inside.',
      ending:
        'Omnigear powers down with a long, sad whistle. Ada keeps one gear on a chain, to remember that inventions need kindness too.',
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
          name: 'Ilyra Starweaver',
          text: 'A star mage who fights with falling stars. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Omnigear Prime sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Omnigear Prime sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Omnigear Prime sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Omnigear Prime',
          text: 'In the heart of the factory, the machine opens its great eye and starts its final assembly.'
        }
      }
    },
    'vex-nightwire': {
      title: 'Total Surveillance',
      intro:
        'Someone put a bounty on Vex. The client is the same corporation that pays her bounties. She takes it personally.',
      ending:
        "Kade's cameras go dark one by one. For the first time in a century, nobody is watching the megacity, and it looks beautiful.",
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
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Ryn Voltblade',
          text: 'A neon blade fighter who strikes before anyone can react. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Overseer Kade sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Overseer Kade sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Overseer Kade sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Overseer Kade',
          text: 'At the top of the tower, among a thousand screens, Kade is already watching her.'
        }
      }
    },
    'ryn-voltblade': {
      title: 'Static',
      intro:
        'Every screen in the megacity started whispering the same song. People stop, listen, and forget who they are. Ryn plugs her ears and draws her blade.',
      ending:
        'Queen Static dissolves into silence. The screens show only the rain, and the city wakes up from a very long dream.',
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
          name: 'Kora Wildfang',
          text: 'A jungle huntress who always shoots first. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Queen Static sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Queen Static sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Queen Static sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Queen Static',
          text: 'On a throne of broken screens, the queen of noise opens her mouth and the city screams.'
        }
      }
    },
    'malachar-the-unmade': {
      title: 'Beyond the Last Hour',
      intro:
        "Malachar unmade himself to escape the end of time. Now something has followed him back: Xul'thar, the hunger that ate the stars.",
      ending:
        "Xul'thar chokes on its own darkness and collapses into a single dead star. Malachar keeps it in his pocket. Just in case.",
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
          name: 'Legate Varro',
          text: 'The legate of the lost Ninth Legion, behind a wall of shields. The rift dropped this rival right on the road.'
        },
        s4: {
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nyx Hollowsong',
          text: 'A singer of the Void whose songs wake the dead. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Xulthar the Devourer sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Xulthar the Devourer sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Xulthar the Devourer sent this champion to stop the march before the final battle.'
        },
        s10: { name: "Xul'thar the Devourer", text: 'At the edge of nothing, the hunger opens its thousand mouths.' }
      }
    },
    'nyx-hollowsong': {
      title: 'The Last Bell',
      intro:
        'The dead stopped singing. In the silence, Nyx hears a bell far away, at the end of time, counting down to the last hour of all.',
      ending:
        "Vorhal's bell cracks in two and the last hour never comes. In the graveyards of every era, the dead start singing again.",
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
          name: 'Gideon Ironsteam',
          text: 'A steam-powered brawler who never takes a step back. Word of the journey has spread, and this rival wants to end it.'
        },
        s5: {
          name: 'Nysa Goldbow',
          text: 'An archer of the bronze age with a golden bow. Word of the journey has spread, and this rival wants to end it.'
        },
        s6: {
          name: 'Vex Nightwire',
          text: 'A neon huntress who hacks her prey before she shoots. Word of the journey has spread, and this rival wants to end it.'
        },
        s7: {
          name: 'Aldric Dawnkeeper',
          text: 'A paladin of the Arcane Order who heals as hard as he hits. Vorhal, the Last Hour sent this champion to stop the march before the final battle.'
        },
        s8: {
          name: 'Ooma Bonewhisper',
          text: 'A shaman of the first tribes who speaks with the bones of the ancestors. Vorhal, the Last Hour sent this champion to stop the march before the final battle.'
        },
        s9: {
          name: 'Ada Copperwick',
          text: 'An inventor from the steam era whose machines run on stolen seconds. Vorhal, the Last Hour sent this champion to stop the march before the final battle.'
        },
        s10: {
          name: 'Vorhal, the Last Hour',
          text: 'Under the broken clock of his face, Vorhal raises the hammer of the last bell.'
        }
      }
    }
  },
  leagues: {
    apprentice: 'Apprentice',
    traveler: 'Traveler',
    chronicler: 'Chronicler',
    guardian: 'Guardian',
    timelord: 'Time Lord',
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
    invalidRarity: 'That rarity does not exist',
    rarityAlreadyUnlocked: 'You already unlocked that rarity',
    previousRarityLocked: 'Unlock the previous rarity first',
    rarityLocked: 'That rarity is still locked in the shop',
    invalidCount: 'Invalid amount',
    cardNotForSale: 'That card is not sold as a single',
    heroOwned: 'You already have that hero',
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
