var mapWrap = document.getElementById('map');
if(mapWrap) {
  // Загружаю API
  var scriptLink = document.createElement('script');
  scriptLink.src = 'http://maps.api.2gis.ru/2.0/loader.js?pkg=full';
  var parentElem = document.body;
  parentElem.appendChild(scriptLink);

  // Жду API
  var timerApiLoad = setInterval(function() {
    if(window.DG) {
      clearInterval(timerApiLoad);
      // Создаю карту
      var map;
      DG.then(function() {
        map = DG.map('map', {
          center: [51.827427,55.158364],
          scrollWheelZoom: false,
          zoom: 16
        });

        DG.marker([51.827427,55.158364]).addTo(map).bindPopup('РемПласт,<br>Салмышская,&nbsp;34&nbsp;к5');
      });  
    }
  }, 500); 
} // <--- END IF(mapWrap) 