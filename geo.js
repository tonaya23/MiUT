function iniciarMap(){
    var coordenadas = {lat: 28.383055555555 ,lng: -100.7066666666};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: 
  
  coordenadas,
      map: map
    });
  }

