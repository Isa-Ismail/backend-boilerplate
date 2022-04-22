const express = require ('express')
const router = express.Router ()
const { time } = require ('../controllers/blog')

router.get('/blogs', time)

router.get('/post', (req, res) => {
    res.json({message: 'hello fahim, sanzida will marry you in your dreams'})
})

module.exports = router