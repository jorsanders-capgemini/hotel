import { DefaultUrlSerializer } from '@angular/router';
import { Deserializable } from './Deserializable';

export class Room implements Deserializable {
  public id: number;
  public name: string;
  public capacity: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
