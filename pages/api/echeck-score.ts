import axios from "axios";

async function checkScore(examNumber:number, idCard: string) {
	console.log(examNumber)
	console.log(idCard)
	const { data } = await axios.post("/api/admin/search/selTotalScore", `exam_number=${examNumber}&id_card=${idCard}`)
	return JSON.stringify(data)
}


export default checkScore
