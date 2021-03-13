import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const animatedComponents = makeAnimated();
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        // minWidth: 30,
    },
    root: {
        flexGrow: 1,
    },
    locationStyle: {
        padding: "5px",

    },autocompleteStyle: {
        padding: "8px",
    }

}));

function FilterPanel() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gender: '',
        price: '',
        level: '',
        qualification: '',
    });

    // console.log(state);

    const handleGenderChange = (event) => {
        const gender = event.target.gender;
        setState({
            ...state,
            gender: event.target.value,
        });
    };

    const handlePriceChange = (event) => {
        const price = event.target.price;
        console.log(price)
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
        })
    }
    const locations = [
        { value: 'Bedok', label: 'Bedok' },
        { value: 'Eunos', label: 'Eunos' },
        { value: 'City Hall', label: 'City Hall' },
        { value: 'Serangoon', label: 'Serangoon' },
        { value: 'Dhoby Ghaut', label: 'Dhoby Ghaut' },
        { value: 'Orchard', label: 'Orchard' },
    ]

    return (
        <div className={classes.root, classes.formControl}>
            <Grid container spacing={1} justify="center" alignItems="stretch">

                <Grid item xs={12} sm={4}>
                <FormControl style={{display:"block"}} className={classes.autocompleteStyle}>
                    <Autocomplete
                        multiple
                        options={locations}
                        disableCloseOnSelect
                        size="small"
                        getOptionLabel={(option) => option.label}
                        renderOption={(option, { selected }) => (
                            <React.Fragment>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 2}}
                                checked={selected}
                            />
                            {option.label}
                            </React.Fragment>
                        )}
                        // style={{ width:"stretch" }}
                        fullWidth ={true}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Filter Locations" placeholder="Nearest MRT" />
                        )}
                    />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            native
                            value={state.gender}
                            onChange={handleGenderChange}
                            inputProps={{
                                gender: 'Male',
                                id: 'gender',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Select
                            native
                            value={state.price}
                            onChange={handlePriceChange}
                            inputProps={{
                                price: '$',
                                id: 'price',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="$">$ (20-30/hr) </option>
                            <option value="$$">$$ (30-50/hr)</option>
                            <option value="$$$">$$$ (50-80/hr)</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <InputLabel htmlFor="level">Level</InputLabel>
                        <Select
                            native
                            value={state.level}
                            onChange={handleLevelChange}
                            inputProps={{
                                level: 'Primary School',
                                id: 'level',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="primary">Primary School</option>
                            <option value="secondary">Secondary School</option>
                            <option value="poly">Polytechnic</option>
                            <option value="JC">JC</option>
                            <option value="uni">University</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <InputLabel htmlFor="Tutor Qualifications">Qualifications</InputLabel>
                        <Select
                            native
                            value={state.qualification}
                            onChange={handleQualificationChange}
                            inputProps={{
                                qualification: '',
                                id: 'Tutor Qualifications',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="olevels">O-levels</option>
                            <option value="alevels">A-levels</option>
                            <option value="diploma">Diploma</option>
                            <option value="bachelors">Bachelor's Degree     </option>
                            <option value="master">Master</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            
        </div>

    );

}

export default FilterPanel;
