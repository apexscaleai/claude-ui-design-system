/**
 * Glass Aesthetic Design Preset
 * Philosophy: Depth through transparency. Layered, blurred, ethereal.
 */

export const glassAesthetic = {
  colors: {
    brand: {
      primary: '#00D9FF',
      secondary: '#0066FF',
      accent: '#FF3366',
    },
    ui: {
      background: {
        primary: 'rgba(255, 255, 255, 0.08)',
        secondary: 'rgba(255, 255, 255, 0.05)',
        tertiary: 'rgba(255, 255, 255, 0.03)',
      },
      border: {
        light: 'rgba(255, 255, 255, 0.1)',
        medium: 'rgba(255, 255, 255, 0.15)',
        dark: 'rgba(255, 255, 255, 0.2)',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.7)',
        tertiary: 'rgba(255, 255, 255, 0.5)',
        inverse: 'rgba(0, 0, 0, 0.9)',
      }
    },
    feedback: {
      success: '#00FFA3',
      warning: '#FFD700',
      error: '#FF3366',
      info: '#00D9FF',
    }
  },

  backdrop: {
    blur: 20,
    saturation: 1.8,
  },

  spacing: {
    xs: 8,
    sm: 12,
    md: 20,
    lg: 32,
    xl: 48,
    '2xl': 64,
    '3xl': 96,
  },

  typography: {
    fontFamily: {
      sans: 'SF Pro Display, -apple-system, system-ui, sans-serif',
      mono: 'SF Mono, Menlo, monospace',
    },
    scale: {
      xs: 13,
      sm: 15,
      base: 17,
      lg: 22,
      xl: 28,
      '2xl': 36,
      '3xl': 52,
      '4xl': 72,
    },
    weights: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    }
  },

  radius: {
    none: 0,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    full: 9999,
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 30,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 32,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.2,
      shadowRadius: 48,
      elevation: 8,
    },
    glow: {
      shadowColor: '#00D9FF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      elevation: 0,
    }
  },

  animation: {
    duration: {
      fast: 200,
      normal: 400,
      slow: 600,
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
}

export type GlassAestheticTheme = typeof glassAesthetic
