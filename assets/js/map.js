if (document.getElementById('map')) {
    const mapContainer = document.getElementById('map');
    const indianCoords = [77.2195, 28.6315]; // Connaught Place, New Delhi (Lng, Lat)
    const mapboxToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    if (typeof mapboxgl !== 'undefined' && mapboxToken !== 'YOUR_MAPBOX_ACCESS_TOKEN') {
        mapboxgl.accessToken = mapboxToken;
        try {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v11',
                center: indianCoords,
                zoom: 14
            });

            const geojson = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: indianCoords
                        }
                    }
                ]
            };

            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
            }
        } catch (e) {
            console.warn('Mapbox initialization skipped or invalid token:', e);
        }
    } else {
        // Live interactive map centered on Connaught Place, New Delhi, India
        mapContainer.innerHTML = '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Connaught+Place,+New+Delhi,+Delhi+110001,+India&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style="border:0; width:100%; height:100%; min-height: 400px;"></iframe>';
    }
}