import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField1: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 50
  }
}));
function DateForm(d) {
    const [year, month, day] = d.split('-');
    return `民國${year - 1911}年-${month}月-${day}號`;
}
export default function DatePicker() {
  const classes = useStyles();
  const [Day, setDate] = useState(" ");
  return (
    <form className={classes.container} noValidate>
      <TextField 
        label="阿公店開店日選擇"
        value={Day}
        className={classes.textField1}
      />
      <TextField        
        id="date"           
        type="date"  
        label=" " 
        className={classes.textField2} 
        onChange={event => {setDate(DateForm(event.target.value))}}       
        InputLabelProps={{          
            shrink: true,        
        }}      
      />    
    </form>
  );
}