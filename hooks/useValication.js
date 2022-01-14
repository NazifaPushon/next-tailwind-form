const useValidation = () => {
    const validateUserName = (name) => {
        const result =  /^[a-zA-Z0-9]+$/.test(name)
        if(result) {
            return {validate :result,error:""}
        }else{
            return {validate :result,error:"userName must contain only a-z/A-z/0-9"}
        }
    }
    const validateEmail = (email) => {
        const result =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if(result) {
            return {validate :result,error:""}
        }else{
            return {validate :result,error:"Please provide valid email"}
        }
    }
    const validatePassword = (password) => {
        const result =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
        if(result) {
            return {validate :result,error:""}
        }else{
            return {validate :result,error:"Please provide a stroge password"}
        }
    }
    return {
        validateUserName,
        validateEmail,
        validatePassword
    }
}

export default useValidation;