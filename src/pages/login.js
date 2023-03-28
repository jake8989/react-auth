import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	updateProfile,
} from 'firebase/auth';
import { async } from '@firebase/util';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
// import { Router } from 'next/router';
import { useRouter } from 'next/router';
// import
import Link from 'next/link';
const login = () => {
	const [user, loading] = useAuthState(auth);

	const router = useRouter();
	// if (user) router.push('/dashboard');
	useEffect(() => {
		if (user) {
			router.push('/dashboard');
		}
	}, []);
	const GoogleProvider = new GoogleAuthProvider();
	const GoogleLogin = async () => {
		try {
			const data = await signInWithPopup(auth, GoogleProvider);
			console.log(data.user);
			router.push('/dashboard');
		} catch (err) {
			console.log(err);
		}
	};
	const fbProvider = new FacebookAuthProvider();
	const fbLogin = async () => {
		try {
			const data = await signInWithPopup(auth, fbProvider);
			router.push('/dashboard');
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Paper
			sx={{
				minHeight: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{!user && (
				<Box display={'flex'} justifyContent="center" alignItem="center">
					<Box></Box>
					<Box display={'flex'} flexDirection="column">
						<Button onClick={GoogleLogin}>
							{' '}
							<GoogleIcon></GoogleIcon> Sign Up With GooGle
						</Button>
						<Button sx={{ marginTop: '2rem' }} onClick={fbLogin}>
							{' '}
							<FacebookIcon></FacebookIcon> Sign Up With FaceBook
						</Button>
					</Box>
				</Box>
			)}
			{user && (
				<div>
					<h1>You are already logged in</h1>
					<h1> please continue to dashboard</h1>
					<Link href="/dashboard">Dashborad</Link>
				</div>
			)}
		</Paper>
	);
};

export default login;
