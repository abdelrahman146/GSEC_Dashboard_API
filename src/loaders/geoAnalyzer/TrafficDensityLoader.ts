// /src/loaders/geoanalyzer/TrafficDensityAreasLoader.ts
require("isomorphic-fetch");
require("isomorphic-form-data");
import urls from '../../configuration';
import { queryFeatures  } from '@esri/arcgis-rest-feature-service';

class TrafficDensityAreasLoader {

    private trafficDensityAreas: any[];
    private trafficDensityAreasUrl: string = urls.HIGH_TRAFFIC_DENSITY_AREAS_PRO;


    constructor() {
        this.trafficDensityAreas = [];
        this.loadTrafficDensityAreas();
        this.reload();
    }

    // fetch all trafficDensityAreas from the server to the object
    public loadTrafficDensityAreas() {
        let that = this
        queryFeatures({
            url: this.trafficDensityAreasUrl,
            where: `1=1`
        })
        .then((results: any) => {
            this.trafficDensityAreas = results.features;
            console.log(`TrafficDensityAreasLoader: successfully retrieved ${this.trafficDensityAreas.length} object`);
        }).catch((err) => {
            console.error(`TrafficDensityAreasLoader: error: ${err}`)
        });
    }

    // get all trafficDensityAreas from trafficDensityAreas object
    public getAllTrafficDensityAreas(): any {
        return this.trafficDensityAreas;
    }

    private reload(): any {
        // each day: 86400000 millie seconds
        // each week: 604800000 millie seconds
        setInterval(this.loadTrafficDensityAreas, 86400000);
    }

}

export default new TrafficDensityAreasLoader();