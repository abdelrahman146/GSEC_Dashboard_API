"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /src/loaders/HospitalsLoader.ts
require("isomorphic-fetch");
require("isomorphic-form-data");
var configuration_1 = __importDefault(require("../../configuration"));
var arcgis_rest_feature_service_1 = require("@esri/arcgis-rest-feature-service");
var HospitalsLoader = /** @class */ (function () {
    function HospitalsLoader() {
        this.hospitalsUrl = configuration_1.default.GEO_ANALYZER_HOSPITALS_PRO;
        this.hospitals = [];
        console.log("HospitalsLoader: initiated");
        this.loadHospitals();
    }
    // fetch all hospitals from the server to the object
    HospitalsLoader.prototype.loadHospitals = function () {
        var _this = this;
        var that = this;
        arcgis_rest_feature_service_1.queryFeatures({
            url: this.hospitalsUrl,
            where: "1=1"
        })
            .then(function (results) {
            _this.hospitals = results.features;
            console.log("HospitalsLoader: hospital object is loaded");
        }).catch(function (err) {
            console.error("HospitalsLoader: error: " + err);
        });
    };
    HospitalsLoader.prototype.getAllHospitals = function () {
        return this.hospitals;
    };
    // get a specific hospitals by geometry
    HospitalsLoader.prototype.getHospitalsByGeometry = function (geometry) {
        var result = [];
        this.hospitals.forEach(function (element) {
        });
        console.log("HospitalsLoader: hospitals sent");
        return result;
    };
    return HospitalsLoader;
}());
exports.default = new HospitalsLoader();
//# sourceMappingURL=HospitalsLoader.js.map