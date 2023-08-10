function(properties, context) {

    const EmailDomainValidator = require('email-domain-validator');
    let email = properties.email;
    
    let result = context.async(async callback => {
        try{
            
            let valid = await EmailDomainValidator.validate(email);
            let value = valid.isValidDomain ? true : false;
            callback(null, value);
            
        } catch(err){
            callback(err);
        }
    });
    
    let finalResult = {
        is_valid: result,
    }
    
    return finalResult;

}