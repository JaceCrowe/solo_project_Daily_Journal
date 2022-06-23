const db = require('../models/journalModel')

const entriesController = {};

entriesController.getEntry = async (req, res, next) => {
    try{
        await db.instertOne(req.body);
        console.log('posted');
        return next();
    } catch (err) {
        return next({
            log: 'Error in getEntry ', err,
            message: `Error ${err}`,
        });
    }
};

entriesController.createEntry = (req, res, next) => {
    try{
        await db.instertOne(req.body);
        console.log('posted');
        return next();
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