// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // L'URL finale où ton site sera accessible
  site: 'https://umedastudio.com', 
  // Le chemin de base. Pour un domaine personnalisé à la racine, c'est '/'
  base: '/', 
  // Optionnel mais recommandé: Spécifie le dossier de sortie
  outDir: 'dist', 
  // ... autres configurations éventuelles (intégrations, etc.)
});
