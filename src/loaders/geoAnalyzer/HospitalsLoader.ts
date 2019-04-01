// /src/loaders/geoanalyzer/HospitalsLoader.ts
require("isomorphic-fetch");
require("isomorphic-form-data");
import urls from '../../configuration';
import { queryFeatures  } from '@esri/arcgis-rest-feature-service';

class HospitalsLoader {

    private hospitals: any[];
    private hospitalsUrl: string = urls.GEO_ANALYZER_HOSPITALS_PRO;


    constructor() {
        this.hospitals = [];
        this.loadHospitals();
        this.reload();
    }

    // fetch all hospitals from the server to the object
    public loadHospitals() {
        let that = this
        queryFeatures({
            url: this.hospitalsUrl,
            where: `1=1`
        })
        .then((results: any) => {
            this.hospitals = results.features;
            console.log(`HospitalsLoader: hospital object is loaded`)
        }).catch((err) => {
            console.error(`HospitalsLoader: error: ${err}`)
        });
    }
    
    public getAllHospitals() {
        return this.hospitals;
    }

    // get a specific hospitals by geometry
    public getHospitalsByGeometry(geometry: any): any {
        let result: any = [];
        
        this.hospitals.forEach(element => {
        });
        console.log(`HospitalsLoader: hospitals sent`)
        return result;
        
    }

    private reload(): any {
        // each day: 86400000 millie seconds
        // each week: 604800000 millie seconds
        setInterval(this.loadHospitals, 86400000);
    }

}

export default new HospitalsLoader();