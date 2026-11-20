import { createTheme } from '@mui/material/styles'

/**
 * Light pastel MUI theme: cream backgrounds, white rounded panels, vivid chunky
 * buttons with a dark ink outline, Lilita One for titles and buttons and Nunito
 * for text. The same values are exposed to SASS as CSS custom properties in
 * app/globals.scss — keep both in sync.
 */
export const GAME_COLORS = {
  cream: '#fff8ee',
  lavender: '#ede7ff',
  mint: '#e3f7ef',
  sky: '#e4f1ff',
  peach: '#ffe9dc',
  outline: '#2b2350',
  text: '#2b2350',
  textSecondary: '#6b6590',
  gold: '#ffc93c',
  goldLight: '#ffe89a',
  goldDark: '#c4791a',
  cyan: '#4fc3ff',
  cyanDark: '#1a6fc4',
  magenta: '#ff5a8a',
  magentaDark: '#c41f5a',
  lime: '#7ee05a',
  limeDark: '#3a9a2a',
  violet: '#8a5cff',
  panel: '#ffffff',
  panelBorder: '#d9d0ff'
}

const OUTLINE = GAME_COLORS.outline
/** The white rounded panel of every window (also --frame-* in globals.scss). */
const FRAME = {
  border: `2px solid ${GAME_COLORS.panelBorder}`,
  borderRadius: 20,
  background: GAME_COLORS.panel,
  boxShadow: '0 10px 30px rgba(67, 52, 140, 0.18)'
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: GAME_COLORS.violet, dark: '#5a34d6', contrastText: '#ffffff' },
    secondary: { main: GAME_COLORS.cyan, dark: GAME_COLORS.cyanDark, contrastText: '#ffffff' },
    error: { main: GAME_COLORS.magenta },
    success: { main: GAME_COLORS.limeDark },
    warning: { main: GAME_COLORS.goldDark },
    background: { default: GAME_COLORS.cream, paper: GAME_COLORS.panel },
    text: { primary: GAME_COLORS.text, secondary: GAME_COLORS.textSecondary },
    divider: GAME_COLORS.panelBorder
  },
  shape: {
    borderRadius: 14
  },
  typography: {
    fontFamily: 'var(--font-body), "Segoe UI", Roboto, Arial, sans-serif',
    h1: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.5 },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.5 },
    h3: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.5 },
    h4: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.5 },
    h5: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.3 },
    h6: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.3 },
    button: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: 0.5,
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: '9px 20px',
          transition: 'transform 80ms ease, filter 120ms ease',
          '&:active': { transform: 'translateY(3px)' }
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            border: `2px solid ${OUTLINE}`,
            boxShadow: `inset 0 2px 0 rgba(255,255,255,0.45), 0 4px 0 ${OUTLINE}`,
            '&:hover': {
              filter: 'brightness(1.08)',
              boxShadow: `inset 0 2px 0 rgba(255,255,255,0.45), 0 4px 0 ${OUTLINE}`
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: { borderWidth: 2, '&:hover': { borderWidth: 2 } }
        }
      ]
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': { borderWidth: 2, borderColor: GAME_COLORS.panelBorder },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: GAME_COLORS.violet },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: GAME_COLORS.violet, borderWidth: 2 },
          '&.Mui-focused': { boxShadow: '0 0 0 4px rgba(138, 92, 255, 0.15)' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: 0.5 }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: { ...FRAME, overflow: 'visible' },
        paperFullScreen: { overflowY: 'auto', borderRadius: 0 }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: { color: GAME_COLORS.text, textAlign: 'center', letterSpacing: 0.5 }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        // Chunky GameButtons don't fit side by side on narrow phones: let them
        // wrap and, below the sm breakpoint, stretch to fill each row.
        root: {
          flexWrap: 'wrap',
          '& > :not(style) ~ :not(style)': { marginLeft: 0 },
          '@media (max-width: 599.95px)': {
            '& > *': { flexGrow: 1 }
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: FRAME
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 10,
          background: GAME_COLORS.outline,
          color: '#ffffff',
          fontSize: '0.85rem'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        thumb: { borderRadius: '50%', border: `2px solid ${OUTLINE}` }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 12, fontWeight: 700 }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: GAME_COLORS.panelBorder }
      }
    }
  }
})
