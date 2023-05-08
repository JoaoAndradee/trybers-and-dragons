import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.createdInstances;
  }
}

export default Halfling;
