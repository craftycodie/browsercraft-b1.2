self.addEventListener('fetch', function(event) {
  event.respondWith(
    console.log({event})
    fetch(event.request)
  );
});
