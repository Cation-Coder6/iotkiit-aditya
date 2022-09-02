import { Box, Grid, Table, Typography } from "@mui/material";
import Image from 'next/image';
import DataTable from "../../../components/attendance/Table";
import { members } from '../../../dummy_data';

const RollId = (props) => {
    const { name, id, hostel, year } = props.memberData;
    const url = 'https://i.imgur.com/5vZmWBO.png';
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={5} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40vh',
                }}>
                    <Box sx={{
                        height: '100px',
                        width: '100px',
                    }}>
                        <Image
                            alt='HeroImage'
                            src={url}
                            height={100}
                            width={100}
                        />
                    </Box>
                </Grid>
                <Grid item xs={7} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Box>
                        <Typography variant="body1">Name : {name} </Typography>
                        <Typography variant="body1">Roll : {id}</Typography>
                        <Typography variant="body1">Hostel : {hostel} </Typography>
                        <Typography variant="body1">Year : {year}</Typography>

                    </Box>
                </Grid>
            </Grid>
            <DataTable />
        </Box>
    );
}

export async function getServerSideProps(context) {
    const { rollid } = context.query;
    const memberData = members.find((member) => member.id == rollid);

    return {
        props: {
            memberData,
        }
    }
}


export default RollId;