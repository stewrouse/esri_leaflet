import * as L from 'leaflet';
declare module 'leaflet' {
    namespace esri {
        namespace Vector {
            export function vectorBasemapLayer(key: any, options: any): any;
            export var VectorBasemapLayer: any;
            export function vectorTileLayer(key: any, options: any): any;
            export var VectorTileLayer: any;
            export function mapboxGLJSLayer(options: any): any;
            export var MapboxGLJSLayer: any;
            // I don't think these are public API, so may not need them
            export function getBasemapStyleUrl(key: any, apikey: any): string;
            export function loadStyle(idOrUrl: any, options: any, callback: any): void;
            export function loadService(serviceUrl: any, options: any, callback: any): void;
            export function formatStyle(style: any, styleUrl: any, metadata: any, token: any): any;
            export function getAttributionData(url: any, map: any): void;
            export function isWebMercator(wkid: any): boolean;
        }
    }
}
export = L.esri.Vector;
