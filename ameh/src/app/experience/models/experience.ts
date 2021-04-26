import { Organization } from './organization';
import { Position } from './position';

export interface Experience {
  organization: Organization,
  positions: Position[]
}
