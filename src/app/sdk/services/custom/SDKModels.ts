/* tslint:disable */
import { Injectable } from '@angular/core';
import { Feeling_log } from '../../models/Feeling_log';
import { Friend } from '../../models/Friend';
import { WebUser } from '../../models/WebUser';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Feeling_log: Feeling_log,
    Friend: Friend,
    WebUser: WebUser,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
