import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from 'rmwc'

const DialogIndex=(start,id)=>{
  const [open, setOpen] = React.useState(start);

    return(
      <Dialog 
      open={open}
      onClose={evt => {
        console.log(evt.detail.action);
        setOpen(false);
      }}
      onClosed={evt => console.log(evt.detail.action)}
      >
         <DialogTitle>Dialog Title</DialogTitle>
         <DialogContent>This is a standard dialog.</DialogContent>
        <DialogActions>
          <DialogButton action="close">Cancel</DialogButton>
          <DialogButton action="accept" isDefaultAction>
            Sweet!
          </DialogButton>
        </DialogActions>

      </Dialog>
    )
    
}

export default DialogIndex