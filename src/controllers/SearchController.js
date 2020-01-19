const Dev = require('../models/Dev');
const parseStringAsArray = require('../controllers/utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }, 
            },
        });
        
        return response.json({ devs: devs, });
    }
}

// -46.6608874, -23.5668698