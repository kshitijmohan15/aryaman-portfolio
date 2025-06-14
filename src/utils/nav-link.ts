import { cn } from './cn';

export function getNavLinkStyles(currentPath: string, linkPath: string) {
  return cn(
    'transition-colors',
    currentPath === '/about' ? 'text-white hover:text-white/80' : 'text-black/80 hover:text-black',
    currentPath === linkPath && 'font-bold'
  );
}
