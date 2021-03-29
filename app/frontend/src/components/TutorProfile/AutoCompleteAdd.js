import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog({
  options,
  value,
  setValue,
}) {
  // const [value, setValue] = React.useState(null);
  // const [open, toggleOpen] = React.useState(false);

  // const handleClose = () => {
  //   setDialogValue({
  //     label: '',
  //     value: '',
  //   });

  // toggleOpen(false);
  // };

  // const [dialogValue, setDialogValue] = React.useState({
  //   label: '',
  //   value: '',
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setValue({
  //     label: dialogValue.label,
  //     value: dialogValue.value,
  //   });

  //   handleClose();
  // };

  return (
    <React.Fragment>
      <Autocomplete
        value={value.nearestMRT}
        onChange={(event, newValue) => {
          console.log(newValue);
          if (typeof newValue === "string") {
            console.log(newValue);
            setValue((state) => {
              return { ...state, nearestMRT: newValue }; // label: newValue,
              // value: newValue,
            });
          } else if (newValue && newValue.value) {
            console.log(newValue);
            setValue((state) => {
              return { ...state, nearestMRT: newValue.value }; // label: newValue.inputValue,
              // value: newValue.inputValue,
            });
          } else if (newValue && newValue.inputValue) {
            setValue((state) => {
              return { ...state, nearestMRT: newValue.inputValue }; // label: newValue.inputValue,
              // value: newValue.inputValue,
            });
          } else {
            // setValue(newValue);
            setValue((state) => {
              return { ...state, nearestMRT: "" }; // label: newValue,
            });

            // setValue({
            //   ...state,
            //   address: newValue,
            // });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              label: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-address"
        options={options}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.label;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.label}
        freeSolo
        fullWidth={true}
        renderInput={(params) => (
          <TextField {...params} label="Nearest MRT" variant="outlined" />
        )}
      />
      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.label}
              onChange={(event) => setDialogValue({ ...dialogValue, label: event.target.value })}
              label="title"
              type="text"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.value}
              onChange={(event) => setDialogValue({ ...dialogValue, value: event.target.value })}
              label="value"
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog> */}
    </React.Fragment>
  );
}
