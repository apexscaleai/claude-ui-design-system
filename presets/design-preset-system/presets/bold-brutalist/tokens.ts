/**
 * Bold Brutalist Design Preset
 * Philosophy: Raw, honest, high-impact. Geometric forms, stark contrasts, unapologetic.
 */

export const boldBrutalist = {
  colors: {
    brand: {
      primary: '#000000',
      secondary: '#FF0000',
      accent: '#FFFF00',
    },
    ui: {
      background: {
        primary: '#FFFFFF',
        secondary: '#F0F0F0',
        tertiary: '#E0E0E0',
      },
      border: {
        light: '#000000',
        medium: '#000000',
        dark: '#000000',
      },
      text: {
        primary: '#000000',
        secondary: '#333333',
        tertiary: '#666666',
        inverse: '#FFFFFF',
      }
    },
    feedback: {
      success: '#00FF00',
      warning: '#FFFF00',
      error: '#FF0000',
      info: '#0000FF',
    }
  },

  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    '2xl': 32,
    '3xl': 48,
  },

  typography: {
    fontFamily: {
      sans: 'Helvetica Neue, Arial Black, sans-serif',
      mono: 'Courier New, monospace',
    },
    scale: {
      xs: 14,
      sm: 16,
      base: 18,
      lg: 24,
      xl: 32,
      '2xl': 48,
      '3xl': 72,
      '4xl': 96,
    },
    weights: {
      light: '700',
      normal: '700',
      medium: '800',
      semibold: '900',
      bold: '900',
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.2,
      relaxed: 1.3,
    }
  },

  radius: {
    none: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    full: 0, // No rounded corners in brutalism
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 0,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 8, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 0,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 12, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 0,
    },
  },

  animation: {
    duration: {
      fast: 0, // Instant transitions
      normal: 100, // Minimal animation
      slow: 200,
    },
    easing: {
      default: 'linear',
      in: 'linear',
      out: 'linear',
      inOut: 'linear',
    }
  }
}

export type BoldBrutalistTheme = typeof boldBrutalist
