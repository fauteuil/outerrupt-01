const express = require('express');

const {
  addActivity,
  getActivityList,
  getActivity,
} = require('../controllers/activity.controller');
const auth = require('../middleware/auth');

const router = express.Router();

/* Creating a route for the get request. */
// router.get("/activities", auth, getActivityList);

router.get('/activities', getActivityList);
/* Creating a route for the post request. */
// router.post("/activity", auth, addActivity);
router.post('/activity', addActivity);

// CRUD - TODO
// router.get('/activity/:id').get(getActivity);
router.get('/activity/:id', getActivity);
// router.route('/activity/:id').get((req, res) => {
//   Activity.findById(req.params.id)
//     .then((activity) => res.json(activity))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.route('/:id').delete((req, res) => {
  Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json('Activity deleted.'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => {
      activity.username = req.body.username;
      activity.description = req.body.description;
      activity.duration = req.body.duration;
      activity.category = req.body.category;
      activity.date = Date.parse(req.body.date);

      activity
        .save()
        .then(() => res.json('Activity updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
