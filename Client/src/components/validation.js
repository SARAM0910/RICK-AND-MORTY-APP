

export function validation (userData) {
    let errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const extention = userData.email;
    const regexPassword = /^(?=.*\d).{6,10}$/;
    
    if (!userData.email) {
        errors.email = 'Username required'}

        if (!userData.password) {
            errors.email = 'password required'}
            
            if(!regexEmail.test(userData.email)) {
                errors.email = 'Invalid Username'}

            if(extention.length > 35){
                errors.email = 'Username is too long'}
                
                if(!regexPassword.test(userData.password)) {
                    errors.password='Invalid password'}
        
                    return errors
                
    };