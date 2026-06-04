export type Locale = 'en' | 'es';

/**
 * Checks if a given pathname starts with the Spanish locale prefix.
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    return 'es';
  }
  return 'en';
}

/**
 * Checks if a locale is Spanish.
 */
export function isSpanishLocale(locale: Locale): boolean {
  return locale === 'es';
}
