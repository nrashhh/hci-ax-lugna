/* tslint:disable */

declare var Object: any;
export interface FriendInterface {
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Friend implements FriendInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: FriendInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Friend`.
   */
  public static getModelName() {
    return "Friend";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Friend for dynamic purposes.
  **/
  public static factory(data: FriendInterface): Friend{
    return new Friend(data);
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
      name: 'Friend',
      plural: 'Friends',
      path: 'Friends',
      idName: 'id',
      properties: {
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
