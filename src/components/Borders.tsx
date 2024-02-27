import { Countries } from "../utils/types";

type BordersProps = {
    data: Countries;
}

const Borders = ({data}: BordersProps) => {
    return (
        <div>
            <h2> Border Countries : </h2>
            {
                data.borders.map(item => (
                    <p key={item}>
                        {item}
                    </p>
                ))
            }
        </div>
    )
}

export default Borders