const db = require('../models/journalModel')
const path = requir('path');
const fs = require('fs')

const entriesController = {};

entriesController.getEntries = (req, res, next) => {

        // const results  = JSON.parse(fs.readFileSync(path.resolve(__dirname,'.././dump/entries/entries'), 'utf-8'));
        // console.log(results)
        // res.locals.entries = results;
        // next()
        db.entries.find({})
        .then(result => {
            console.log(result);
            res.locals.entries = result;
            next();
        }).catch(err =>{
        return next({
            log: 'Error in getEntry ', err,
            message: `Error ${err}`,
        });
    })
};

entriesController.createEntry = (req, res, next) => {
    try{
        const { date, inDepthValue, formValues, tags, tomorrowsFive, tomValue} = req.body;
        await db.create(date, inDepthValue, formValues, tags, tomorrowsFive, tomValue)
        .then(entryDoc => {
            res.locals.entry = entryDoc;
            console.log('posted');
            next();
        })
    } catch (err) {
        return next({
            log: 'Error in getEntry ', err,
            message: `Error ${err}`,
        });
    }
};

entriesController.deleteEntry= (req, res, next) => {
    
};

module.exports = entriesController;