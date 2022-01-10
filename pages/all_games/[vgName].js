import { useRouter } from "next/router";
// https://api.rawg.io/api/games?key=c69737aae4e04ce8ad8613ba04c2be9f&search=${slug}        SLUG===NAME slug.split(' ').join('-').toLowerCase()
// API KEY = c69737aae4e04ce8ad8613ba04c2be9f
const DetailPage = () => {
    const router = useRouter();
    const video_game = router.query.vgName

    return <h1>Video Game Detail Page</h1>
}

export default DetailPage;