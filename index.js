// Import komponen pertama
import './components/LoadingIndicator.js';
import './components/AppBar.js';
import './components/NoteItem.js';
import { NotesApp } from './views/notes.js';

// Tunggu sampai Web Components terdaftar
customElements.whenDefined('loading-indicator').then(() => {
  new NotesApp();
}).catch(err => {
  console.error("Failed to load components:", err);
  // Fallback manual
  const fallbackLoader = document.createElement('div');
  fallbackLoader.id = 'fallback-loader';
  document.body.prepend(fallbackLoader);
  new NotesApp();
});