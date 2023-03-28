import React from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import Router from 'next/router';
const useStyles = makeStyles({
	paper: {
		height: '100vh',
		display: 'flex',
		flexWrap: 'wrap',
	},
});
const index = () => {
	const classes = useStyles();
	const handelClick = () => {
		Router.push('/login');
	};
	return (
		<Paper sx={{ display: 'flex', flexWrap: 'wrap' }}>
			<Box className={classes.paper} display="flex" flexWrap={'wrap'}>
				<Box width={'50%'}>
					<Image
						src={'/Research paper-bro.png'}
						width={500}
						height={600}
					></Image>
				</Box>
				<Box
					display={'flex'}
					justifyContent="center"
					alignItems="center"
					flexDirection={'column'}
				>
					<Typography>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et saepe
						quaerat aliquam, error laboriosam odio eaque, mollitia odit culpa
						incidunt ullam dolores illo maxime quod nemo consectetur placeat,
						adipisci enim. Obcaecati facilis numquam corporis.
					</Typography>
					<Button
						sx={{ background: 'rgb(146 226 167)' }}
						variant="contained"
						onClick={handelClick}
					>
						Join Us
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};

export default index;
