ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5235").setExtent([82547.358532, 372406.294812, 945642.178393, 829858.324166]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Country_line_1 = new ol.format.GeoJSON();
var features_Country_line_1 = format_Country_line_1.readFeatures(json_Country_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5235'});
var jsonSource_Country_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_line_1.addFeatures(features_Country_line_1);
var lyr_Country_line_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Country_line_1, 
                style: style_Country_line_1,
                popuplayertitle: "Country_line",
                interactive: true,
                title: '<img src="styles/legend/Country_line_1.png" /> Country_line'
            });
var format_Country_poly_2 = new ol.format.GeoJSON();
var features_Country_poly_2 = format_Country_poly_2.readFeatures(json_Country_poly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5235'});
var jsonSource_Country_poly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_poly_2.addFeatures(features_Country_poly_2);
var lyr_Country_poly_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Country_poly_2, 
                style: style_Country_poly_2,
                popuplayertitle: "Country_poly",
                interactive: true,
                title: '<img src="styles/legend/Country_poly_2.png" /> Country_poly'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Country_line_1.setVisible(true);lyr_Country_poly_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Country_line_1,lyr_Country_poly_2];
lyr_Country_line_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FID_EDGE_D': 'FID_EDGE_D', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Country_poly_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area_sqr_k': 'area_sqr_k', 'Attribute': 'Attribute', });
lyr_Country_line_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'FID_EDGE_D': '', 'Id': '', 'Shape_Leng': '', 'Shape_Le_1': '', });
lyr_Country_poly_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'area_sqr_k': 'TextEdit', 'Attribute': '', });
lyr_Country_line_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'no label', 'FID_EDGE_D': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Country_poly_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'area_sqr_k': 'no label', 'Attribute': 'inline label - always visible', });
lyr_Country_poly_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});