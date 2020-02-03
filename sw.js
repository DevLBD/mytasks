self.addEventListener("install", function(e){
    e.waitUntil(
        caches.open("mytasks").then(function(cache){
            return cache.addAll([
		        "/mytasks/",
                "/mytasks/index",
		        "/mytasks/it",
		        "/mytasks/privacy",
		        "/mytasks/privacyit",
		        "/mytasks/help",
		        "/mytasks/helpit",
                "/mytasks/css/style.css",
                "/mytasks/js/script.js",
                "/mytasks/js/darkMode.js",
                "/mytasks/js/langSelectorIt.js",
                "/mytasks/js/langSelectorEng.js",
                "/mytasks/js/needsToSave.js",
                "/mytasks/manifest.json",
		        "/mytasks/resources/icon.ico",
                "/mytasks/resources/512.png",
                "/mytasks/resources/192.png",
                "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            ]);
        })
    );
});

self.addEventListener("fetch", function(event){
    console.log("Browser fetched this URL: " + event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});