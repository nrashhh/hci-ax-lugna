/* tslint:disable */

declare var Object: any;
export interface Feeling_logInterface {
  "mood": number;
  "description"?: string;
  "sleep"?: number;
  "coffee"?: number;
  "suger"?: number;
  "location"?: string;
  "activity"?: number;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Feeling_log implements Feeling_logInterface {
  "mood": number;
  "description": string;
  "sleep": number;
  "coffee": number;
  "suger": number;
  "location": string;
  "activity": number;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: Feeling_logInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Feeling_log`.
   */
  public static getModelName() {
    return "Feeling_log";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Feeling_log for dynamic purposes.
  **/
  public static factory(data: Feeling_logInterface): Feeling_log{
    return new Feeling_log(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Feeling_log',
      plural: 'Feeling_logs',
      path: 'Feeling_logs',
      idName: 'id',
      properties: {
        "mood": {
          name: 'mood',
          type: 'number'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "sleep": {
          name: 'sleep',
          type: 'number'
        },
        "coffee": {
          name: 'coffee',
          type: 'number'
        },
        "suger": {
          name: 'suger',
          type: 'number'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "activity": {
          name: 'activity',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
