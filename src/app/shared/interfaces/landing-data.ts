import {HowWorks} from './how-works';
import {Advantage} from './advantage';
import {HowTask} from './how-task';
import {Comment} from './comment';
import {Contact} from './contact';
import {BaseFulfillmentStep} from './base-fulfillment-step';

export interface LandingData {
  advantages: Array<Advantage>;
  howWorks: Array<HowWorks>;
  howTasks: Array<HowTask>;
  comments: Array<Comment>;
  contacts: Array<Contact>;
  baseFulfillmentSteps: Array<BaseFulfillmentStep>;
}
