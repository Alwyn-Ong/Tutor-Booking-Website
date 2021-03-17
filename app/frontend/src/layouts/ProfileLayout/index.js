import MainLayout from "../MainLayout";
import Grid from '@material-ui/core/Grid';
import ProfileSideBar from "../../components/ProfilePage/ProfileSideBar";
import {Container,Box} from "@material-ui/core";
import { Outlet } from "react-router-dom";


const ProfileLayout = ({children}) => {
  return (
    <>
        <Box height="100%" display="flex">
            <Grid container alignItems="stretch" justify="flex-start" spacing={1}>
                <Grid item>
                    <ProfileSideBar></ProfileSideBar>
                </Grid>
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        </Box>
    </>
  );
};

export default ProfileLayout;