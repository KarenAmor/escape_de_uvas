import { Vino } from '../models/Vino';
import vinosData from '../data/vinos.json';

export class VinosService {
  private vinos: Vino[];

  constructor() {
    this.vinos = vinosData;
  }

  public listarVinos(): Vino[] {
    return this.vinos;
  }

  public crearVino(vino: Vino): void {
    this.vinos.push(vino);
  }
}