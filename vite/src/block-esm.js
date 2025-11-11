// Aggressive ESM blocker - intercepts all esm.sh requests
(function() {
  if (typeof window === 'undefined') return;
  
  // Block fetch requests to esm.sh
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string' && url.includes('esm.sh')) {
      console.warn('Blocked esm.sh request:', url);
      return Promise.reject(new Error('esm.sh blocked'));
    }
    return originalFetch.apply(this, args);
  };
  
  // Block dynamic imports from esm.sh
  const originalImport = window.import || (async (url) => import(url));
  if (typeof originalImport === 'function') {
    window.import = async function(url) {
      if (typeof url === 'string' && url.includes('esm.sh')) {
        console.warn('Blocked esm.sh import:', url);
        return {};
      }
      return originalImport(url);
    };
  }
})();
