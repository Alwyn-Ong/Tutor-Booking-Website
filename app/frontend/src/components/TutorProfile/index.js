import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu,
} from "./Settings";

import SettingsFooter from "./Settings/SettingsFooter";
// import {
//   SettingsPane,
//   SettingsPage,
//   SettingsContent,
//   SettingsMenu,
// } from "react-settings-pane";
import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

import { TextField, Grid, Avatar } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AutoCompleteAdd from "./AutoCompleteAdd";
import "./styles.css";

import { DropzoneArea, DropzoneDialogBase } from "material-ui-dropzone";
// import { StylesProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { toast } from "react-hot-toast";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const locations = [
  { value: "Bedok", label: "Bedok" },
  { value: "Eunos", label: "Eunos" },
  { value: "City Hall", label: "City Hall" },
  { value: "Serangoon", label: "Serangoon" },
  { value: "Dhoby Ghaut", label: "Dhoby Ghaut" },
  { value: "Orchard", label: "Orchard" },
];

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

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
      title: "Tutor",
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
    nearestMRT: "",
    description: "",
    gender: "",
    qualification: "",
    file: [],
  });

  const handleLocationChange = (event, value) => {
    // const locations = event.target.locations;
    let nearestMRT = value != null ? value.value : "";
    setValues({
      ...values,
      nearestMRT: nearestMRT,
    });
    // console.log(value);
  };

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // TODO: Change userid
  const userId = 1;

  const handleSave = (page) => {
    if (page === "/settings/general") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let body = values;
      body.userId = userId;
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow",
      };

      console.log(JSON.stringify(body));

      if (!loading) {
        setSuccess(false);
        setLoading(true);
      }

      fetch("http://localhost:8080/api/updateprofile", requestOptions)
        .then((response) => response.text())
        .then(
          (result) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(result);
                console.log(result);
                setSuccess(true);
                setLoading(false);
              }, 2000);
            })
        )
        .catch((error) => console.log("error", error));
    } else {
    }
  };

  // For image dialog
  const [open, setOpen] = React.useState(false);
  const dialogTitle = () => (
    <>
      <span>Upload file</span>
      <IconButton
        style={{ right: "12px", top: "8px", position: "absolute" }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  // For switching of tabs for save
  const [currSettingsPage, setCurrSettingsPage] = React.useState("");
  console.log(currSettingsPage);

  // For tutor values
  const [tutorValues, setTutorValues] = React.useState({
    price: 20,
  });

  const handleSliderChange = (event, newValue) => {
    setTutorValues((state) => {
      return {
        ...state,
        price: newValue,
      };
    });
  };

  const handleInputChange = (event) => {
    // setValue(event.target.value === "" ? "" : Number(event.target.value));
    setTutorValues((state) => {
      return {
        ...state,
        price: event.target.value === "" ? "" : Number(event.target.value),
      };
    });
  };

  const handleBlur = () => {
    if (tutorValues.price < 0) {
      // setValue(0);
      setTutorValues((state) => {
        return {
          ...state,
          price: 0,
        };
      });
    } else if (tutorValues.price > 100) {
      // setValue(100);
      setTutorValues((state) => {
        return {
          ...state,
          price: 100,
        };
      });
    }
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
        onSave={() => handleSave(currSettingsPage)}
        loading={loading}
        setLoading={setLoading}
        success={success}
        setSuccess={setSuccess}
      >
        <SettingsPage
          handler="/settings/general"
          setCurrPage={setCurrSettingsPage}
        >
          <Grid container spacing={3} direction="row">
            <Grid
              item
              md={12}
              lg={12}
              xs={12}
              sm={12}
              xl={12}
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid container item justify="center" alignItems="center">
                <Grid item>
                  <Avatar
                    src={`http://localhost:8080/api/files/${userId}`}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Grid>
              </Grid>
              <Grid container item justify="center" alignItems="flex-end">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                  >
                    Upload Image
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
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
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
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
            {/* <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <Autocomplete
                options={locations}
                size="small"
                getOptionLabel={(option) => option.label}
                onChange={handleLocationChange}
                renderInput={(params) => (
                  <TextField {...params} label="Combo box" variant="outlined" />
                )}
                freeSolo
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
                handleHomeEndKeys
                clearOnBlur
                selectOnFocus
              />
            </Grid> */}
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <AutoCompleteAdd
                options={locations}
                value={values}
                setValue={setValues}
              />
            </Grid>
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <TextField
                id="outlined-required-phone"
                label="Phone"
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
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
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
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <TextField
                id="outlined-required-desc"
                label="Qualification"
                // defaultValue="Name"
                variant="outlined"
                value={values.qualification}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, qualification: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <TextField
                id="outlined-required-desc"
                label="Gender"
                // defaultValue="Name"
                variant="outlined"
                value={values.gender}
                onChange={(e) => {
                  setValues((state) => {
                    return { ...state, gender: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              {/* <DropzoneArea
                  acceptedFiles={["image/*"]}
                  dropzoneText={"Drag and drop an image here or click"}
                  onChange={(files) =>
                    setValues((state) => {
                      return {
                        ...state,
                        file: files,
                      };
                    })
                  }
                  filesLimit={1}
                /> */}
              {/* <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
              >
                Add Image
              </Button> */}

              <DropzoneDialogBase
                dialogTitle={dialogTitle()}
                acceptedFiles={["image/*"]}
                fileObjects={values.file}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={5000000}
                open={open}
                onAdd={(newFileObjs) => {
                  console.log("onAdd", newFileObjs);
                  // setFileObjects([].concat(fileObjects, newFileObjs));
                  setValues((state) => {
                    return {
                      ...state,
                      file: newFileObjs,
                    };
                  });
                }}
                onDelete={(deleteFileObj) => {
                  console.log("onDelete", deleteFileObj);
                  setValues((state) => {
                    return {
                      ...state,
                      file: [],
                    };
                  });
                }}
                onClose={() => setOpen(false)}
                onSave={() => {
                  // console.log("onSave", fileObjects);
                  var formdata = new FormData();
                  formdata.append(
                    "file",
                    values.file[0].file,
                    values.file[0].file.name
                  );

                  var requestOptions = {
                    method: "POST",
                    body: formdata,
                    redirect: "follow",
                  };

                  fetch(
                    `http://localhost:8080/api/upload/${userId}`,
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((result) => {
                      console.log(result.message);
                      //
                      toast.promise(
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            if (result.message.includes("Could not")) {
                              reject(result);
                            } else {
                              resolve(result);
                            }
                            setOpen(false);
                            // resolve(result);
                            // console.log(result);
                            // setSuccess(true);
                            // setLoading(false);
                          }, 2000);
                        }),
                        {
                          loading: "Uploading",
                          success: "Successfully uploaded image!",
                          error: "Error when uploading image.",
                        }
                      );

                      // if (result.message.includes("Could not")) {
                      //   toast.error("Error uploading image!");
                      // } else {
                      //   toast.success("Image successfully uploaded!");
                      // }
                      // setOpen(false);
                    })
                    .catch((error) => {
                      console.log("error", error);
                      toast.error("Error uploading image!");
                    });
                  // setValues((state) => {
                  //   return {
                  //     ...state,
                  //     file: newFileObjs,
                  //   };
                  // });
                }}
                showPreviews={true}
                // showPreviewsInDropzone={true}
                showFileNamesInPreview={true}
                filesLimit={1}
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
          <SettingsFooter />
        </SettingsPage>
        <SettingsPage
          handler="/settings/profile"
          setCurrPage={setCurrSettingsPage}
          // options={dynamicOptionsForProfilePage}
        >
          <Grid container spacing={3}>
            <Grid item item md={12} lg={6} xs={12} sm={12} xl={6}>
              <Typography gutterBottom>Price ($)/hour</Typography>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  {/* <Slider
                value={
                  typeof tutorValues.price === "number" ? tutorValues.price : 0
                }
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              /> */}
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={20}
                    value={
                      typeof tutorValues.price === "number"
                        ? tutorValues.price
                        : 0
                    }
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
                <Grid item>
                  <Input
                    className={{ width: 42 }}
                    value={tutorValues.price}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} lg={6} xs={12} sm={12} xl={6}>
              <TextField
                required
                id="outlined-required"
                label="Name (Required)"
                // defaultValue="Name"
                variant="outlined"
                value={values}
                onChange={(e) => setValues(e.target.value)}
              />
            </Grid>
          </Grid>
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
