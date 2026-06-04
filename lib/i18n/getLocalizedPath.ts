import { ROUTES_MAPPING, REVERSE_ROUTES_MAPPING } from './routes';
import { Locale } from './language';

/**
 * Returns the equivalent route path in the alternate language.
 */
export function getAlternatePath(pathname: string): string {
  // Try exact lookup first
  if (ROUTES_MAPPING[pathname] !== undefined) {
    return ROUTES_MAPPING[pathname];
  }
  if (REVERSE_ROUTES_MAPPING[pathname] !== undefined) {
    return REVERSE_ROUTES_MAPPING[pathname];
  }

  // Fallback fallback: strip or add /es prefix dynamically
  if (pathname === '/es') {
    return '/';
  }
  if (pathname.startsWith('/es/')) {
    return pathname.substring(3);
  }
  return `/es${pathname}`;
}

/**
 * Ensures a path is relative to the correct locale prefix.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === 'es') {
    if (path === '/') {
      return '/es';
    }
    if (path.startsWith('/es/') || path === '/es') {
      return path;
    }
    return `/es${path}`;
  } else {
    // English
    if (path.startsWith('/es/')) {
      return path.substring(3);
    }
    if (path === '/es') {
      return '/';
    }
    return path;
  }
}
