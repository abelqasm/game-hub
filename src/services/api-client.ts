import axios from 'axios'

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'ff17499e86d64220a1c1843753944daf',
    }
})