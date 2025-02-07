import { RotatingLines } from "react-loader-spinner";

export const Loader = ()=> (<RotatingLines
    visible={true}
    height="96"
    width="96"
    color="#f2c0bd"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />)
