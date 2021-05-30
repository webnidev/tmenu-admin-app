import React from 'react'

const types = {
    email:{
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Informe um email válido'
    }
}

const useForm = (start='', type='text') => {
    const [value, setValue] = React.useState(start)
    const [error, setError] = React.useState(null)
    function validade(value){
        if(type===false) return true
        if(value.length === 0){
            setError('Este campo deve ser preenchido!')
            return false
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }else{
            setError(null)
            return true
        }
    }

    function onChange({target}){
        if(error) validade(target.value)
        setValue(target.value)
    }

    return{
        value,
        setValue,
        onChange,
        //error,
        //validade: ()=>validade(value),
        //onblur: ()=>validade(value)
    }
}


export default useForm