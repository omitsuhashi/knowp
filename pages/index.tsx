import type { NextPage } from 'next';
import styles from './Index.module.scss';
import Header from '../components/header';
import { Grid, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <Header isLoggedIn={true} />
        {/* insert hero */}
        <div className={styles.body}>
          <Grid container spacing={4}>
            <Grid item xs={10}>
              <Typography>left side</Typography>
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction={'column'} spacing={1}>
                <Grid item>
                  <Typography>right top</Typography>
                </Grid>
                <Grid item>
                  <Typography>right bottom</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
