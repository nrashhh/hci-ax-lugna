/* tslint:disable */
import {
  Notification
} from '../index';

declare var Object: any;
export interface WebUserInterface {
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "password"?: string;
  accessTokens?: any[];
  notifications?: Notification[];
}

export class WebUser implements WebUserInterface {
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "password": string;
  accessTokens: any[];
  notifications: Notification[];
  constructor(data?: WebUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WebUser`.
   */
  public static getModelName() {
    return "WebUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WebUser for dynamic purposes.
  **/
  public static factory(data: WebUserInterface): WebUser{
    return new WebUser(data);
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
      name: 'WebUser',
      plural: 'WebUsers',
      path: 'WebUsers',
      idName: 'id',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        notifications: {
          name: 'notifications',
          type: 'Notification[]',
          model: 'Notification',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'webUserId'
        },
      }
    }
  }
}
