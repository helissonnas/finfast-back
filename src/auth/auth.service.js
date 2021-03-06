const User = require('../user/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

exports.login = async function(req, res) {
    const email = req.body.email;
    const password = req.body.pass;

    const user = await User.findOne({email});

    if(user === null || !user){
        return res.status(404).send({error: 'User not found'});
    }

    const compare = await bcrypt.compareSync(password, user.password);
    console.log(compare);

    if(!compare){
        return res.status(400).send({error: 'Password is incorrect'});
    }

    jwt.sign({id: user.id}, authConfig.secret , { expiresIn: '2h' }, (error, TOKEN) => {
        if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
        res.cookie('access_token', TOKEN, {
            maxAge: new Date(Date.now() + 1000000),
            httpOnly: false,
        });
        console.log(TOKEN);

        user.password = null;
        return res.status(200).json({user: user, token: TOKEN});
    });
};

exports.logout = (req, res, next) => {
    res.clearCookie('access_token', req.headers.access_token, {
        maxAge: new Date(Date.now() + 10000000),
        httpOnly: false,
    });
    return res.status(200).json({ message: 'Cookie deleted' });
};