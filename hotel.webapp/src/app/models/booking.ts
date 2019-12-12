import { Guest } from './guest';
import { Room } from './room';

export class Booking {
  public id: number;
  public guests: Guest[];
  public rooms: Room[];
  public nights: number;
  public bookingDate: Date;
}
