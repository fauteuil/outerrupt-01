// import { OnClick } from '../../types';

import { OnClick } from '../../common/types';

export type Activity = OnClick & {
  name: string;
  // id: string;
  _id: string;
  imageUrl?: string;
  description?: string;
  time?: string;
};

export type ActivityAdd = Pick<Activity, 'name' | 'time'>;

interface ActivityAddFormFields extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  time: HTMLInputElement;
}

interface ActivityAddForm extends HTMLFormElement {
  //  readonly elements: FormElements
  elements: ActivityAddFormFields;
}

export type Activities = Array<Activity>;
