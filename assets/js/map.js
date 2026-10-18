if (document.getElementById('map') && typeof mapboxgl !== 'undefined') {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    try {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-0.125631, 51.495162],
            zoom: 14
        });

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-0.125631,51.495162]
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
}