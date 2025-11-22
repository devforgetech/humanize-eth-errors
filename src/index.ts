import { mappings } from './mappings';
import type { Humanized } from './types';

/**
 * Add or override error mappings
 */
export function addMappings(custom: Record<string, string>) {
  for (const key in custom) {
    mappings[key.toLowerCase()] = {
      title: key,
      message: custom[key],
      original: key,
    };
  }
}

/**
 * Humanizes an Ethereum RPC error
 */
export function humanizeError(error: unknown): Humanized {
  const raw = String(error);
  const lower = raw.toLowerCase();

  for (const key in mappings) {
    if (lower.includes(key)) return { ...mappings[key], original: raw };
  }

  return {
    title: 'Unknown Error',
    message: 'An unknown blockchain error occurred.',
    original: raw,
  };
}

export default humanizeError;
