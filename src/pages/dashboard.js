import { Box, Paper, Typography, Button } from '@mui/material';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Dashboard() {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();
	if (loading) return <h1>Loading...</h1>;
	if (!user) router.push('/login');
	if (user) {
		return (
			<Paper
				sx={{
					minHeight: '80vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box>
					<Image
						src="/Research paper-bro.png"
						width={200}
						height={200}
						style={{ borderRadius: '50%' }}
					></Image>
					{/* <img src={user.photoURL} alt="avtar" /> */}
					<Typography>Welcome {user.displayName}</Typography>
					<Button
						onClick={() => {
							auth.signOut();
						}}
					>
						SignOut
					</Button>
				</Box>
			</Paper>
		);
	}
}
