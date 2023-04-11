

export function validation (userData) {
    let errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const extention = userData.username;
    const regexPassword = /^(?=.*\d).{6,10}$/;
    
    if (!userData.username) {
        errors.username = 'Username required'}

        if (!userData.password) {
            errors.username = 'password required'}
            
            if(!regexEmail.test(userData.username)) {
                errors.username = 'Invalid Username'}

            if(extention.length > 35){
                errors.username = 'Username is too long'}
                
                if(!regexPassword.test(userData.password)) {
                    errors.password='Invalid password'}
        
                    return errors
                
    };