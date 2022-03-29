function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.445073, lng: 30.520277 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 17,
        center: uluru,
      }
    );
  
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }