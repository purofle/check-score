import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material"

export default function CheckAppbar() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
					查分器
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
