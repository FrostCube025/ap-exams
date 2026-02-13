self.addEventListener('install', (event) => {
  console.log('PWA installata correttamente!');
});

self.addEventListener('fetch', (event) => {
  // Lascia vuoto per ora, serve solo per il requisito PWA
});
