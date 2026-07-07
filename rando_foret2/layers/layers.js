var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_trace_foret_2 = new ol.format.GeoJSON();
var features_trace_foret_2 = format_trace_foret_2.readFeatures(json_trace_foret_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trace_foret_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trace_foret_2.addFeatures(features_trace_foret_2);
var lyr_trace_foret_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trace_foret_2, 
                style: style_trace_foret_2,
                popuplayertitle: 'trace_foret',
                interactive: true,
                title: '<img src="styles/legend/trace_foret_2.png" /> trace_foret'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_trace_foret_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_trace_foret_2];
lyr_trace_foret_2.set('fieldAliases', {'id': 'id', 'longueur': 'longueur', });
lyr_trace_foret_2.set('fieldImages', {'id': 'TextEdit', 'longueur': 'TextEdit', });
lyr_trace_foret_2.set('fieldLabels', {'id': 'no label', 'longueur': 'no label', });
lyr_trace_foret_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});