function(properties, context) {

    const EmailDomainValidator = require('email-domain-validator');
    let emails = properties.emails;
    
    let result = context.async(async callback => {
        try{
            
            let valid = await EmailDomainValidator.validate(emails);
            let value = valid.isValidDomain ? true : false;
            let errors = valid.erorrMessage;
            let invalidEmailList = valid.invalidEmailList;
            
            let data = {
                are_all_valid: value,
                error_messages: errors,
                invalid_email_list: invalidEmailList
            }
            
            callback(null, data);
            
        } catch(err){
            callback(err);
        }
    });
    
    return result;

}