
export default function CoinDetail ( props ){
    return (
        <>
            <tr>
                <th scope="row">{props.listingNumber}</th>
                <td>{props.currency}</td>
                <td>{props.value}</td>
                <td></td>
            </tr>
        </>
    );

}