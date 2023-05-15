// Register the service worker
if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./sw.js')
    .then(console.log)
    .catch(console.error);
}

