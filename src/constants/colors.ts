export enum ColorVariants {
  Primary = 'primary',
  PrimaryCondensed = 'primary-condensed',
  PrimaryDarken = 'primary-darken',
  Light = 'light',
  Dark = 'dark'
}

export type ColorVariant = `${ColorVariants}`;

export enum GradientVariants {
  PrimaryDarkenToDark = 'primary-darken-to-dark',
  DarkToPrimaryDarken = 'dark-to-primary-darken'
}
