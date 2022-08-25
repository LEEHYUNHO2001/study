import axios from "axios";
// 모든 wines 페이지에 사용해야함. 따로 빼두자.
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
