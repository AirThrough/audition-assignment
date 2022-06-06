const {Router} = require('express')
const Step = require('../models/Step')
const router = Router()

router.get('/get', async (req, res) => {
    try {
        Step.find({}, function (err, steps) {
            res.send(steps)
        })
    } catch (e) {
        res.status(500).json({message: "Something went wrong", error: e})
    }
})

router.get('/change', async (req, res) => {
    try {
        const step = await Step.findById(req.body.id)
        Object.assign(step, {
                title: "",
                points: [],
                completed: false
            })
        step.save()
    } catch (e) {
        res.status(500).json({message: "Something went wrong ", error: e})
    }
})

router.get('/create', async (req, res) => {
    try {
        const step = new Step({

        })
        await step.save()
        res.status(200).send("New step has been created")
    } catch (e) {
        res.status(500).json({message: "Something went wrong ", error: e})
    }
})

module.exports = router