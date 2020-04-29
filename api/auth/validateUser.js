module.exports = {
    validateUser
};

function validateUser(user) {
    let errors = [];
    
    if (!user.username || user.username.length < 2) {
        errors.push('username must be at least 2 characters!');
    }
    if (!user.password || user.password.length < 4) {
        errors.push('password must be at least 4 characters!');
    }
    if (!user.email.includes('@')) {
        errors.push('invalid email!');
    }
    if (!user.name || user.name.length < 1) {
        errors.push(`you don't have a name?`)
    }
    if (!user.legal_age) {
        errors.push('oh no! you must be at least 21 years old');
    }

    return {
        success: errors.length > 0 ? false : true,
        errors
    };
};