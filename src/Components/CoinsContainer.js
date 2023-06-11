import CoinDetail from "./CoinDetail";
import {useSelector} from "react-redux";


export default function CoinsContainer() {
    const rates = useSelector(state => state.coinRateReducer.coinRate);
    const users = useSelector(state => state.usersReducer.users);

    return (
        <>
            <table className="table px-2 text-center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Value</th>
                    <th scope="col">Users</th>
                </tr>
                </thead>
                <tbody>
                {rates && Object.entries(rates.rates).map(([currency, value], index) => (
                    <CoinDetail
                        currency={currency}
                        value={value}
                        key={currency}
                        listingNumber={index + 1}
                        users={users}
                    />
                ))}
                </tbody>
            </table>


        </>
    );

}