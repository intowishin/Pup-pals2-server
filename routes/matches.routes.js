const router = require("express").Router();
const Dog = require("../models/Dog.model");
const View = require("../models/View.model");

router.get("/", (req, res, next) => {
    Dog.find()
    .then((dogs) => {
        res.status(200).json(dogs);
    })
    .catch((err) => {
        console.log(err);
    })
})

router.get("/find", (req, res, next) => {
    Dog.findOne()
    .then((dog) => {
        res.status(200).json(dog);
    })
    .catch((err) => {
        console.log(err);
    })
})

router.post("/like", async (req, res, next) => {
    console.log('reviewed', req.body);
    try {
        dog = await Dog.findOne({user: req.user._id});

        await View.create({
            viewed_by: dog._id,
            viewed_for: req.body.dog_id,
            liked: req.body.status === 'liked'
        });
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }

    res.sendStatus(204);
});

module.exports = router;