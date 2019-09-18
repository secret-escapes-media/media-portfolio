if( $('#map').length > 0 ){

  // Set map height
  $('#map').height( $(window).height() );

  //===================================
  // MAP TOGGLES
  //-----------------------------------

  // var i;
  // var j;
  // var index_highest = 0;
  //
  // var pins = ['secretescapes'];
  // var coll = document.getElementsByClassName("map-toggle");
  // var coll1 = document.getElementsByClassName("marker--secretescapes");
  //
  //
  //
  // document.getElementById('map-pin1').addEventListener("click", function(){
  //
  // for (i = 1; i <= coll1.length; i++) {
  //   var elem = document.getElementById('secretescapes'+i);
  //
  //   if (elem.style.display === "none") {
  //       elem.style.display = "block";
  // 			elem.style.zIndex = 20+i;
  // 			this.classList.add('map-toggle-active');
  //
  //     } else {
  //       elem.style.display = "none";
  // 			elem.style.zIndex = 5;
  // 			this.classList.remove('map-toggle-active');
  //
  //     }
  //   }
  // });




  //===================================
  // MAP
  //-----------------------------------

  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hamishjgray/ck0mh0sak0c491coyj7amgdiy',
    center: [16.557087,46.999560],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    scrollZoom: false
  });

  // map.fitBounds([[
  //     110.7690568,
  //     -9.2379
  // ], [
  //     155.299813,
  //     -45.1714184
  // ]]);

  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');


  map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
      }
    }

    });



    // code from the next step will go here!
    var geojson = {
      type: 'FeatureCollection',
      features: [



  //************** Location pins // secretescapes ************

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [3.3451914,50.4956969]
    },
    properties: {
      id: '1',
      cat: 'secretescapes',
      title: 'Belgium',
      img: 'belgium',
      description: '789,933'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.3004942,56.2128597]
    },
    properties: {
      id: '2',
      cat: 'secretescapes',
      title: 'Denmark',
      img: 'denmark',
      description: '799,836'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [5.9692252,51.0968655]
    },
    properties: {
      id: '3',
      cat: 'secretescapes',
      title: 'Germany',
      img: 'germany',
      description: '8,151,419'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.2239023,41.2118952]
    },
    properties: {
      id: '4',
      cat: 'secretescapes',
      title: 'Italy',
      img: 'italy',
      description: '4,221,528'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.158446,52.2093655]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Netherlands',
      img: 'netherlands',
      description: '2,149,362'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.7793225,64.296159]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Norway',
      img: 'norway',
      description: '547,096'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-8.2016125,40.1301633]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Spain',
      img: 'spain',
      description: '1,848,932'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.4427687,61.752616]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Sweden',
      img: 'sweden',
      description: '1,376,733'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [7.1032295,46.8095955]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Switzerland',
      img: 'switzerland',
      description: '439,340'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-13.4259364,54.2317179]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'United Kingdom',
      img: 'united-kingdom',
      description: '21,896,715'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-104.6561154,37.2756537]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'United States',
      img: 'united-states',
      description: '11,732,193'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.4349004,46.1390412]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'France',
      img: 'france',
      description: '1,810,631'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [16.8921266,51.9358379]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Poland',
      img: 'poland',
      description: '5,007,817'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [14.3539628,49.8001306]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Czech Republic',
      img: 'czech-republic',
      description: '240,823'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [18.3839487,47.1575621]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Hungary',
      img: 'hungary',
      description: '608,239'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [18.5785596,48.6688583]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Slovakia',
      img: 'slovakia',
      description: '264,123'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [103.7041656,1.3143394]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Singapore',
      img: 'singapore',
      description: '143,011'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [113.9876159,22.3529808]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Hong Kong',
      img: 'hong-kong',
      description: '53,969'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [105.1222569,4.1389167]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Malaysia',
      img: 'malaysia',
      description: '96,189'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [108.8510317,-2.3932826]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Indonesia',
      img: 'indonesia',
      description: '50,077'
    }
  }

      ]
    };




      // add markers to map
    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('a');
      //el.innerHTML = 'onlick';

      //document.body.appendChild(el);
      el.className = 'map-show marker marker--'+marker.properties.cat;
      el.id = marker.properties.cat+marker.properties.id;


      //alert(marker.properties.id);

      // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<div class="bg-img bg-img--16-9" style="background-image: url(../_assets/img/map/'+marker.properties.img+'.jpg); "></div><div class="boxpad--sm"><div class="title title--xxs" >' + marker.properties.title + '</div><p class="text--upper text--bold text--wide text--md title title--sans">' + marker.properties.description + ' members</p></div>'))

      .addTo(map);



    });

}