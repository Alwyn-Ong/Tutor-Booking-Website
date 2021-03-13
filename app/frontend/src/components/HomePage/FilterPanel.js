import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0.5),
        minWidth: 30,
    }
}));

function FilterPanel() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gender: '',
        price: '',
        level: '',
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

    return (
        <div>
            <FormControl className={classes.formControl}>
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
            <FormControl className={classes.formControl}>
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
            <FormControl className={classes.formControl}>
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
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="location">Location</InputLabel>
                <Select native defaultValue="" id="location">
                <option aria-label="None" value="" />
                <optgroup label="North">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                </optgroup>
                <optgroup label="South">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                </optgroup>
                </Select>
            </FormControl>
        </div>
    );

}

export default FilterPanel;
