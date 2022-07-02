import {Button, Typography, Grid, TextField} from '@mui/material'
import {Container} from '@mui/system'
import {NextPage} from 'next'
import Head from 'next/head'
import {useState} from 'react'
import checkScore from './api/echeck-score'

const Home: NextPage = () => {
	const [exam, setExam] = useState(0)
	const [idCard, setidCard] = useState('')
	const [score, setScore] = useState('')

	async function getScore() {
		const result = await checkScore(exam, idCard)
		setScore(result)
		console.log(result)
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Container>
				<Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
					<Grid item xs="auto">
						<TextField id="outlined-basic" label="准考证号" variant="outlined" onChange={event => {setExam(parseInt(event.target.value))}} />
					</Grid>
					<Grid item xs="auto">
						<TextField id="outlined-basic" label="身份证后6位" variant="outlined" onChange={event => {setidCard(event.target.value)}} />
					</Grid>
					<Grid item xs="auto">
						<Button variant="contained" onClick={async () => {await getScore()}}>查询</Button>
					</Grid>
					<Typography>{score.toString()}</Typography>
				</Grid>
			</Container>
		</>
	)
}

export default Home
