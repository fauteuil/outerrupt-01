import { atom, selector } from 'recoil';
import { Activity } from './Activity';

// import axios from 'axios';
// import { LoremIpsum } from 'lorem-ipsum';
// import { nanoid } from 'nanoid';

// import { Activity, Activities } from './types';
// import { axiosRequest } from '../../service/api';
// import { getActivityList } from './service';

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
  _id: '',
  name: '',
  description: '',
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

// export const activityListSelector = selector<Array<Activity>>({
//   key: 'activityListSelector',
//   get: async () => {
//     try {
//       const list = await getActivityList();
//       return list;
//     } catch (error) {
//       console.error('activityListSelector - error');
//       throw new Error('activityListSelector - error');
//     }
//   },
// });

// export const activityListState = atom<Activities>({
//   key: 'activityListState',
//   // default: defaultActivityList,
//   default: activityListSelector,
// });

export const activityListState = atom<Activity[]>({
  key: 'activityListState',
  default: [],
});

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
