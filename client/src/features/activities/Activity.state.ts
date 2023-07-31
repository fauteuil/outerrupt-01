import { atom, selector, selectorFamily } from 'recoil';
import { Activity } from './Activity';

// import axios from 'axios';
// import { LoremIpsum } from 'lorem-ipsum';
// import { nanoid } from 'nanoid';

// import { Activity, Activities } from './types';
// import { axiosRequest } from '../../service/api';
// import { getActivityList } from '../../../../server/controllers';

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4,
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4,
//   },
// });

const defaultActivity: Activity = {
  _id: 'wsdc-wsd',
  name: 'hoy',
  description: 'it is i',
  time: '213',
};

const defaultActivity2: Activity = {
  _id: 'wsdc-ws09iujhd',
  name: 'hoooooy',
  description: 'it is i am i',
  time: '253',
};

// export const defaultActivityList: Activities = [
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
//   {
//     id: nanoid(),
//     title: lorem.generateWords(1),
//     description: lorem.generateWords(3),
//   },
// ];

export const activityListSelector = selector<Array<Activity>>({
  key: 'activityListSelector',
  get: async () => {
    try {
      return [];
      // const list = await getActivityList();
      // const list = [defaultActivity, defaultActivity2];
      // return list;
    } catch (error) {
      console.error('activityListSelector - error');
      throw new Error('activityListSelector - error');
    }
  },
});

export const activityListState = atom<Activity[]>({
  key: 'activityListState',
  // default: defaultActivityList,
  default: activityListSelector,
});

// export const activityListState = atom<Activity[]>({
//   key: 'activityListState',
//   default: [],
// });

export const selectedActivityIdState = atom<string>({
  key: 'selectedActivityIdState',
  default: '',
});

// TODO: populate with a service call
export const selectedActivityState = selector<Activity>({
  key: 'selectedActivityState',
  get: ({ get }) => {
    return defaultActivity;
    // const list = get(activityListState) || [];
    // const selectedId = get(selectedActivityIdState);
    // const selectedItem = list.find((item) => item.id === selectedId);
    // return selectedItem || list[0] || defaultActivity;
  },
});

// export const selectedActivityQuerySelector = selectorFamily<
//   Activity | undefined,
//   number | string | undefined
// >({
//   key: 'selectedActivityQuerySelector',
//   get: (selectedActivityId) => async ({ get }) => {
//     // if (!selectedActivityId || selectedActivityId < 0) {
//     if (!selectedActivityId) {
//       return undefined;
//     }
//     get(selectedActivityRequestIdState(selectedActivityId)); // Add request ID as a dependency
//     return tryCatchLog(async () => {
//       const response = await getActivity(selectedActivityId);
//       // return convertToBidState(response);
//     }, 'selectedActivityQuerySelector');
//   },
// });
