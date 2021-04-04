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

import {
  TextField,
  Grid,
  Avatar,
  Tabs,
  Tab,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";
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
import Timetable from "../Timetable";
import { blue } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

const locations = [
  { value: "Bedok", label: "Bedok" },
  { value: "Eunos", label: "Eunos" },
  { value: "City Hall", label: "City Hall" },
  { value: "Serangoon", label: "Serangoon" },
  { value: "Dhoby Ghaut", label: "Dhoby Ghaut" },
  { value: "Orchard", label: "Orchard" },
];

const subjectLevels = [
  { levelsTaught: "Primary", subjectTaught: "Math" },
  { levelsTaught: "Primary", subjectTaught: "English" },
  { levelsTaught: "Primary", subjectTaught: "Science" },
  { levelsTaught: "Secondary", subjectTaught: "English" },
  { levelsTaught: "Secondary", subjectTaught: "Math" },
  { levelsTaught: "Secondary", subjectTaught: "Science" },
  { levelsTaught: "Secondary", subjectTaught: "Literature" },
  { levelsTaught: "Secondary", subjectTaught: "Geography" },
  { levelsTaught: "JC", subjectTaught: "English" },
  { levelsTaught: "JC", subjectTaught: "Math" },
  { levelsTaught: "JC", subjectTaught: "Physics" },
  { levelsTaught: "JC", subjectTaught: "Biology" },
  { levelsTaught: "JC", subjectTaught: "Literature" },
  { levelsTaught: "JC", subjectTaught: "Geography" },
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
  // TODO: Change userid
  const auth = useSelector((state) => state.auth);
  const userId = auth.id;

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

  const [fetchData, setIsFetchData] = React.useState(true);
  //Fetch data from API
  if (fetchData) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/getuserprofile/" + userId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setValues((state) => {
          return {
            ...state,
            name: result.name || auth.name,
            email: result.email,
            phone: result.phoneNumber,
            nearestMRT: result.nearestMRT,
            description: result.description,
            gender: result.gender,
            qualification: result.qualification,
          };
        });
        setIsFetchData(false);
      })
      .catch((error) => console.log("error", error));

    const handleLocationChange = (event, value) => {
      // const locations = event.target.locations;
      let nearestMRT = value != null ? value.value : "";
      setValues({
        ...values,
        nearestMRT: nearestMRT,
      });
      setIsFetchData(false);
      // console.log(value);
    };
  }

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSave = (page) => {
    if (page === "/settings/general") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let body = values;
      body.userId = userId;
      body.phoneNumber = values.phone;
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
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let body = tutorValues;
      body.user.userId = userId;
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

      console.log(body);

      fetch("http://localhost:8080/api/updatetutorprofile", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(result);
                if (result.message.includes("Could not")) {
                  reject(result);
                } else {
                  resolve(result);
                }
                setOpen(false);
                setSuccess(true);
                setLoading(false);
                // resolve(result);
                // console.log(result);
                // setSuccess(true);
                // setLoading(false);
              }, 2000);
            }),
            {
              loading: "Updating profile",
              success: "Successfully updated profile!",
              error: "Error when updating profile.",
            }
          );
        })
        .catch((error) => console.log("error", error));
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
  // console.log(currSettingsPage);

  // For tutor values
  const [tutorValues, setTutorValues] = React.useState({
    user: { price: 20 },
    subjects: [],
    timeslots: [],
  });

  console.log(tutorValues);

  const [getTutorValues, setGetTutorValues] = React.useState(true);

  if (getTutorValues) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/gettutorprofile/" + userId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTutorValues(result);
        setGetTutorValues(false);
      })
      .catch((error) => console.log("error", error));
  }

  const handleSliderChange = (event, newValue) => {
    setTutorValues((state) => {
      return {
        ...state,
        user: { price: newValue },
      };
    });
  };

  const handleInputChange = (event) => {
    // setValue(event.target.value === "" ? "" : Number(event.target.value));
    setTutorValues((state) => {
      return {
        ...state,
        user: {
          price: event.target.value === "" ? "" : Number(event.target.value),
        },
      };
    });
  };

  const handleBlur = () => {
    if (tutorValues.user.price < 0) {
      // setValue(0);
      setTutorValues((state) => {
        return {
          ...state,
          user: { price: 0 },
        };
      });
    } else if (tutorValues.user.price > 100) {
      // setValue(100);
      setTutorValues((state) => {
        return {
          ...state,
          user: { price: 100 },
        };
      });
    }
  };

  // For the tab
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // For timetable
  // TODO: Get from api
  let timeTableDataDefault = [
    "1-1000",
    "2-1000",
    "3-1000",
    "4-1000",
    "5-1000",
    "6-1000",
    "7-1000",
    "1-1100",
    "2-1100",
    "3-1100",
    "4-1100",
    "5-1100",
    "6-1100",
    "7-1100",
    "1-1200",
    "2-1200",
    "3-1200",
    "4-1200",
    "5-1200",
    "6-1200",
    "7-1200",
    "1-1300",
    "2-1300",
    "3-1300",
    "4-1300",
    "5-1300",
    "6-1300",
    "7-1300",
    "1-1400",
    "2-1400",
    "3-1400",
    "4-1400",
    "5-1400",
    "6-1400",
    "7-1400",
    "1-1500",
    "2-1500",
    "3-1500",
    "4-1500",
    "5-1500",
    "6-1500",
    "7-1500",
    "1-1600",
    "2-1600",
    "3-1600",
    "4-1600",
    "5-1600",
    "6-1600",
    "7-1600",
    "1-1700",
    "2-1700",
    "3-1700",
    "4-1700",
    "5-1700",
    "6-1700",
    "7-1700",
    "1-1800",
    "2-1800",
    "3-1800",
    "4-1800",
    "5-1800",
    "6-1800",
    "7-1800",
    "1-1900",
    "2-1900",
    "3-1900",
    "4-1900",
    "5-1900",
    "6-1900",
    "7-1900",
    "1-2000",
    "2-2000",
    "3-2000",
    "4-2000",
    "5-2000",
    "6-2000",
    "7-2000",
    "1-2100",
    "2-2100",
    "3-2100",
    "4-2100",
    "5-2100",
    "6-2100",
    "7-2100",
    "1-2200",
    "2-2200",
    "3-2200",
    "4-2200",
    "5-2200",
    "6-2200",
    "7-2200",
  ];

  // For timeslots
  const [timeTableData, setTimeTableData] = React.useState(
    timeTableDataDefault
  );

  const [isLoading, setIsLoading] = React.useState(true);

  isLoading &&
    fetch("http://localhost:8080/api/getallopentimeslot/" + userId)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTimeTableData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));

  console.log(values);

  // For listing of profiles
  const [isListingProfile, setIsListingProfile] = React.useState(false);

  const [isLoadingListingProfile, setIsLoadingListingProfile] = React.useState(
    true
  );

  if (isLoadingListingProfile) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/gettutorstatus/" + userId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsListingProfile(result.status);
        setIsLoadingListingProfile(false);
      })
      .catch((error) => console.log("error", error));
  }

  // const PurpleSwitch = withStyles({
  //   switchBase: {
  //     color: blue[300],
  //     "&$checked": {
  //       color: blue[500],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: blue[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

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
                // required
                disabled
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
                id="outlined-required-Gender"
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
                maxFileSize={1048576}
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
        </SettingsPage>
        <SettingsPage
          handler="/settings/profile"
          setCurrPage={setCurrSettingsPage}
          // options={dynamicOptionsForProfilePage}
        >
          <Grid container spacing={3} direction="column">
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isListingProfile}
                      onChange={(e) => {
                        console.log(e);
                        setIsListingProfile(e.target.checked);
                        // if (!isListingProfile) {
                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({ userId: userId });

                        var requestOptions = {
                          method: "PUT",
                          headers: myHeaders,
                          body: raw,
                          redirect: "follow",
                        };

                        fetch(
                          "http://localhost:8080/api/becometutor",
                          requestOptions
                        )
                          .then((response) => response.json())
                          .then((result) => {
                            console.log(result);
                            toast.promise(
                              new Promise((resolve, reject) => {
                                setTimeout(() => {
                                  console.log(result);
                                  if (result.message.includes("unable")) {
                                    reject(result);
                                  } else {
                                    resolve(result);
                                  }
                                  // setOpen(false);
                                  // setSuccess(true);
                                  setLoading(false);
                                  // resolve(result);
                                  // console.log(result);
                                  // setSuccess(true);
                                  // setLoading(false);
                                }, 2000);
                              }),
                              {
                                loading: "Listing profile",
                                success: "Successfully listed profile!",
                                error: "Error when listing profile.",
                              }
                            );
                          })

                          .catch((error) => console.log("error", error));
                      }}
                      // name="checkedB"
                      color="primary"
                    />
                  }
                  label="List profile as tutor"
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Profile" />
                <Tab label="Timeslots" />
              </Tabs>
            </Grid>
            <Grid item>
              <Divider variant="middle" />
            </Grid>
            <Grid item>
              {!tabValue ? (
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
                            typeof tutorValues.user.price === "number"
                              ? tutorValues.user.price
                              : 0
                          }
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          className={{ width: 42 }}
                          value={tutorValues.user.price}
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
                    <Autocomplete
                      id="grouped-demo"
                      // options={options.sort(
                      //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                      // )}
                      multiple
                      options={subjectLevels}
                      groupBy={(option) => option.levelsTaught}
                      getOptionLabel={(option) =>
                        `${option.levelsTaught} - ${option.subjectTaught}`
                      }
                      // style={{ width: 300 }}
                      defaultValue={tutorValues.subjects}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Subjects To Teach"
                          variant="outlined"
                          required
                        />
                      )}
                      disableCloseOnSelect
                      onChange={(e, v) => {
                        setTutorValues((state) => {
                          return {
                            ...state,
                            subjects: v,
                          };
                        });
                      }}
                    />
                  </Grid>
                </Grid>
              ) : (
                !isLoading && (
                  <Timetable
                    isTutor
                    data={timeTableData}
                    setProfileData={setTutorValues}
                  />
                )
              )}
            </Grid>
          </Grid>
        </SettingsPage>
      </SettingsContent>
    </SettingsPane>
  );
};

export default Homepage;
