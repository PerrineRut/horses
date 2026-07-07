var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_trace_foret2_1 = new ol.format.GeoJSON();
var features_trace_foret2_1 = format_trace_foret2_1.readFeatures(json_trace_foret2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trace_foret2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trace_foret2_1.addFeatures(features_trace_foret2_1);
var lyr_trace_foret2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trace_foret2_1, 
                style: style_trace_foret2_1,
                popuplayertitle: 'trace_foret2',
                interactive: true,
                title: '<img src="styles/legend/trace_foret2_1.png" /> trace_foret2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_trace_foret2_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_trace_foret2_1];
lyr_trace_foret2_1.set('fieldAliases', {'id': 'id', 'longueur': 'longueur', });
lyr_trace_foret2_1.set('fieldImages', {'id': 'TextEdit', 'longueur': 'TextEdit', });
lyr_trace_foret2_1.set('fieldLabels', {'id': 'no label', 'longueur': 'no label', });
lyr_trace_foret2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});