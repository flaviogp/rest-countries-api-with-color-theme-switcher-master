import { Countries } from "../utils/types";
import BorderLink from "./BorderLink";

type BordersProps = {
    data: Countries;
}

const Borders = ({data}: BordersProps) => {


    
    return (
        <div className="flex flex-col gap-5">
            <h2> Border Countries : </h2>
            <div className="flex gap-4 flex-wrap justify-start">
                {
                    data.borders ?
                    (
                        data.borders.map(item => (
                            <BorderLink code={item} key={item}/>
                        ))
                    ) :
                    <p>No Borders</p>

                }
            </div>
        </div>
    )
}

export default Borders