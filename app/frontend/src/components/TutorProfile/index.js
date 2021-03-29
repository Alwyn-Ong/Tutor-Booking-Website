import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu,
} from "./Settings";
// import {
//   SettingsPane,
//   SettingsPage,
//   SettingsContent,
//   SettingsMenu,
// } from "react-settings-pane";
import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { TextField, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AutoCompleteAdd from "./AutoCompleteAdd";

const locations = [
  { value: "Bedok", label: "Bedok" },
  { value: "Eunos", label: "Eunos" },
  { value: "City Hall", label: "City Hall" },
  { value: "Serangoon", label: "Serangoon" },
  { value: "Dhoby Ghaut", label: "Dhoby Ghaut" },
  { value: "Orchard", label: "Orchard" },
];

const Homepage = () => {
  let settings = {
    "mysettings.general.name": "Dennis Stücken",
    "mysettings.general.color-theme": "purple",
    "mysettings.general.email": "dstuecken@react-settings-pane.com",
    "mysettings.general.picture": "earth",
    "mysettings.profile.firstname": "Dennis",
    "mysettings.profile.lastname": "Stücken",
  };
  // Define your menu
  const menu = [
    {
      title: "General", // Title that is displayed as text in the menu
      url: "/settings/general", // Identifier (url-slug)
    },
    {
      title: "Profile",
      url: "/settings/profile",
    },
  ];

  // Define one of your Settings pages
  const dynamicOptionsForProfilePage = [
    {
      key: "mysettings.general.email",
      label: "E-Mail address",
      type: "text",
    },
    {
      key: "mysettings.general.password",
      label: "Password",
      type: "password",
    },
  ];

  // Save settings after close
  const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
    }
  };

  const settingsChanged = (changedSettings) => {
    // this is triggered onChange of the inputs
    console.log(changedSettings);
  };

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleLocationChange = (event, value) => {
    // const locations = event.target.locations;
    let address = value != null ? value.value : "";
    setValues({
      ...values,
      address: address,
    });
    // console.log(value);
  };

  console.log(values);
  return (
    <SettingsPane
      items={menu}
      index="/settings/general"
      settings={settings}
      onPaneLeave={leavePaneHandler}
    >
      <SettingsMenu headline="General Settings" />
      <SettingsContent
        // closeButtonClass="secondary"
        // saveButtonClass="primary"
        header={true}
        onSave={() => alert("Saved")}
      >
        <SettingsPage handler="/settings/general">
          <Grid container spacing={3} direction="row">
            <Grid item md={12} lg={6}>
              <TextField
                required
                id="outlined-required-name"
                label="Name (Required)"
                // defaultValue="Name"
                variant="outlined"
                value={values.name}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, name: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item md={12} lg={6}>
              <TextField
                required
                id="outlined-required-email"
                label="Email (Required)"
                // defaultValue="Name"
                variant="outlined"
                value={values.email}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, email: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item md={12} lg={6}>
              <Autocomplete
                options={locations}
                size="small"
                getOptionLabel={(option) => option.label}
                onChange={handleLocationChange}
                renderInput={(params) => (
                  <TextField {...params} label="Combo box" variant="outlined" />
                )}
                // style={{ width:"stretch" }}
                fullWidth={true}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Nearest MRT"
                    placeholder="Nearest MRT"
                  />
                )}
              />
            </Grid>
            <Grid item md={12} lg={6}>
              <AutoCompleteAdd options={locations} values={values} setValues={setValues}/>
            </Grid>
            <Grid item md={12} lg={6}>
              <TextField
                required
                id="outlined-required-phone"
                label="Phone (Required)"
                // defaultValue="Name"
                variant="outlined"
                value={values.phone}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, phone: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item md={12} lg={6}>
              <TextField
                id="outlined-required-desc"
                label="Description"
                // defaultValue="Name"
                variant="outlined"
                value={values.description}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, description: e.target.value };
                  });
                }}
              />
            </Grid>
          </Grid>

          {/* <fieldset className="form-group">
            <label for="profileName">Name: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.name"
              placeholder="Name"
              id="general.ame"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.name"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label for="profileColor">Color-Theme: </label>
            <select
              name="mysettings.general.color-theme"
              id="profileColor"
              className="form-control"
              defaultValue={settings["mysettings.general.color-theme"]}
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
          </fieldset> */}
        </SettingsPage>
        <SettingsPage
          handler="/settings/profile"
          // options={dynamicOptionsForProfilePage}
        >
          {/* <fieldset className="form-group">
            <label for="profileName">Name: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.name"
              placeholder="Name"
              id="general.ame"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.name"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label for="profileColor">Color-Theme: </label>
            <select
              name="mysettings.general.color-theme"
              id="profileColor"
              className="form-control"
              defaultValue={settings["mysettings.general.color-theme"]}
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
          </fieldset> */}
          <TextField
            required
            id="outlined-required"
            label="Name (Required)"
            // defaultValue="Name"
            variant="outlined"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
        </SettingsPage>
      </SettingsContent>
    </SettingsPane>
  );
};

export default Homepage;

{
  /* <TextField
          required
          id="outlined-required"
          label="Name (Required)"
          // defaultValue="Name"
          variant="outlined"
        /> */
}
