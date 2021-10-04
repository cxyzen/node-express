const express = require('express');
const router = express.Router();
const {getPeople, postPeople, putPeople, deletePeople} = require('../controllers/people')

// Get
router.get("/", getPeople);
// Post
router.post("/", postPeople);
// Put
router.put("/:id", putPeople);
// Delete
router.delete("/:id", deletePeople);

// router.route("/")
//     .get(getPeople)
//     .post(postPeople);

// router.route("/:id")
//     .put(putPeople)
//     .delete(deletePeople);

module.exports = router