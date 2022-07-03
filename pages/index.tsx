import {Button, Typography, Grid, TextField, CssBaseline, Container, Box} from '@mui/material'
import {NextPage} from 'next'
import Head from 'next/head'
import {Router, useRouter} from 'next/router'
import {useState} from 'react'
import CheckAppbar from '../components/checkAppbar'
import checkScore from './api/echeck-score'

const Home: NextPage = () => {
	const [exam, setExam] = useState(0)
	const [idCard, setidCard] = useState('')
	const router = useRouter()

	return (
		<>

			<CheckAppbar></CheckAppbar>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<CssBaseline>
				<Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ pt: 10 }}>
					<Grid item>
						<TextField id="fullWidth" label="准考证号" variant="outlined" onChange={event => {setExam(parseInt(event.target.value))}} />
					</Grid>
					<Grid item>
						<TextField id="fullWidth" label="身份证后6位" variant="outlined" onChange={event => {setidCard(event.target.value)}} />
					</Grid>
					<Grid item>
						<Button variant="contained" onClick={()=>{ router.push({pathname: "/info", query: { exam: exam, idCard: idCard }}, "/info") }}>查询</Button>
					</Grid>
				</Grid>
			</CssBaseline>
		</>
	)
}

export default Home
