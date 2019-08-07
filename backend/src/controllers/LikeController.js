const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev does not exists.' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log("Deu match parca");
        }

        if (!loggedDev.likes.includes(targetDev._id)) {
            loggedDev.likes.push(targetDev._id);
            await loggedDev.save();
        }
        else {
            console.log("Vc ja deu like nele");
        }


        return res.json(loggedDev);
    }
};