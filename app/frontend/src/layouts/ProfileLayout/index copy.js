import MainLayout from "../MainLayout";
import Grid from '@material-ui/core/Grid';
import ProfileSideBar from "../../components/ProfilePage/ProfileSideBar";
import {Container} from "@material-ui/core";
import { Outlet } from "react-router-dom";


const ProfileLayout = () => {
  return (
    <>
      <MainLayout>           
                    <Outlet/>
                    <ProfileSideBar></ProfileSideBar>
        {/* <Container>
            <Grid container>
                <Grid item md={2}>
                </Grid>
                <Grid item md={10}>
                </Grid>
            </Grid>
        </Container> */}
      </MainLayout>
    </>
  );
};

export default ProfileLayout;