const bcrypt = require('bcryptjs');

const hasher = async password => {
    let salt = bcrypt.genSaltSync(10);
    
    return bcrypt.hashSync(password, salt)
}

export default hasher