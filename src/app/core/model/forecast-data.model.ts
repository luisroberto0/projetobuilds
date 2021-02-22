import { ForecastDetails } from './forecast-details.model';

export class ForecastData {
    public name!: string;
    // Deatils array of type ForecastDetails class.
    public details: Array<ForecastDetails> = new Array<ForecastDetails>();
}
