import TextField from '@mui/material/TextField';

interface IInputText {
    label: string,
    type: string,
}

export default function InputText({label, type}: IInputText){
    return(
        <TextField label={label} type={type} variant="outlined" className='w-full rounded-3xl'/> 
    )
}