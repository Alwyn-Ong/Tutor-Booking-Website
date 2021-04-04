import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import makeAnimated from "react-select/animated";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const animatedComponents = makeAnimated();
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    fullWidth: true,
  },
  root: {
    flexGrow: 1,
    margin: 2,
  },
  autocompleteStyle: {
    padding: "8px",
  },
}));

function FilterPanel({ state, setState }) {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //     gender: '',
  //     price: '',
  //     level: '',
  //     qualification: '',
  //     selectedLocations:[]
  // });

  console.log(state);

  const handleGenderChange = (event) => {
    const gender = event.target.gender;
    setState({
      ...state,
      gender: event.target.value,
    });
  };

  const handlePriceChange = (event) => {
    // const price = event.target.price;
    setState({
      ...state,
      price: event.target.value,
    });
  };

  const handleLevelChange = (event) => {
    const level = event.target.level;
    setState({
      ...state,
      level: event.target.value,
    });
  };

  const handleQualificationChange = (event) => {
    const qualification = event.target.qualification;
    setState({
      ...state,
      qualification: event.target.value,
    });
  };

  const handleLocationChange = (event, value) => {
    // const locations = event.target.locations;
    setState({
      ...state,
      selectedLocations: value,
    });
    console.log(value);
  };

  const locations = [
    { value: "Bedok", label: "Bedok" },
    { value: "Eunos", label: "Eunos" },
    { value: "City Hall", label: "City Hall" },
    { value: "Serangoon", label: "Serangoon" },
    { value: "Dhoby Ghaut", label: "Dhoby Ghaut" },
    { value: "Orchard", label: "Orchard" },
  ];

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={4} style={{ minWidth: 120 }}>
          <FormControl
            style={{ display: "block" }}
            className={classes.autocompleteStyle}
          >
            <Autocomplete
              multiple
              options={locations}
              disableCloseOnSelect
              size="small"
              getOptionLabel={(option) => option.label}
              onChange={handleLocationChange}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 2 }}
                    checked={selected}
                  />
                  {option.label}
                </React.Fragment>
              )}
              // style={{ width:"stretch" }}
              fullWidth={true}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Filter Locations"
                  placeholder="Nearest MRT"
                />
              )}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={3} md={2}>
          <FormControl classes={classes.formControl} style={{ minWidth: 120 }}>
            <InputLabel htmlFor="gender">Gender </InputLabel>
            <Select
              value={state.gender}
              onChange={handleGenderChange}
              inputProps={{
                gender: "Male",
                id: "gender",
              }}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <FormControl classes={classes.formControl} style={{ minWidth: 120 }}>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Select
              labelId="price"
              id="price"
              value={state.price}
              onChange={handlePriceChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="$">$ ( {"<"} 30/hr) </MenuItem>
              <MenuItem value="$$">$$ (30-50/hr)</MenuItem>
              <MenuItem value="$$$">$$$ ( {">"} 50/hr)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <FormControl classes={classes.formControl} style={{ minWidth: 120 }}>
            <InputLabel htmlFor="level">Level</InputLabel>
            <Select
              value={state.level}
              onChange={handleLevelChange}
              labelId="level"
              id="level"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Primary">Primary School</MenuItem>
              <MenuItem value="Secondary">Secondary School</MenuItem>
              <MenuItem value="Polytechnic">Polytechnic</MenuItem>
              <MenuItem value="JC">JC</MenuItem>
              <MenuItem value="University">University</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <FormControl classes={classes.formControl} style={{ minWidth: 120 }}>
            <InputLabel htmlFor="TutorQualifications">
              Qualifications
            </InputLabel>
            <Select
              value={state.qualification}
              onChange={handleQualificationChange}
              labelId="TutorQualifications"
              id="TutorQualifications"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="O-Levels">O-Levels</MenuItem>
              <MenuItem value="A-Levels">A-Levels</MenuItem>
              <MenuItem value="Diploma">Diploma</MenuItem>
              <MenuItem value="Degree">Bachelor's Degree</MenuItem>
              <MenuItem value="Masters">Master</MenuItem>
              <MenuItem value="phd">PhD</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item>
                    Apply
                </Grid> */}
      </Grid>
    </div>
  );
}

export default FilterPanel;
