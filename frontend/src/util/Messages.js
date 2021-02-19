import AppLocale from './../lngProvider'
    
export const getMessageByString = (lang = {locale : "en"}, code_message = "", message = "") => {
    let locale
    if((locale = AppLocale[lang.locale]) != undefined){
        return (locale.messages[code_message] ? locale.messages[code_message] : message)
    }else{
        return message
    }
}

export const getMessageValidate = (lang = {locale : "en"}, field = "", code_validate = "valid.field.required") =>{
    let locale
    if((locale = AppLocale[lang.locale]) != undefined){
        return (locale.messages[code_validate] ? locale.messages[code_validate].replaceAll("%field%", field) : "")
    }else{
        return ""
    }
}

export const getMessageStringLengthValidate = (lang = {locale : "en"}, field = "", length, code_validate = "valid.field.required") =>{
    let locale
    if((locale = AppLocale[lang.locale]) != undefined){
        return (locale.messages[code_validate] ? locale.messages[code_validate].replaceAll("%field%", field).replaceAll("%number_characters%", length) : "")
    }else{
        return ""
    }
}