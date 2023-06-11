import {connect, useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import { transferCoinsAction} from "../redux/actions/transferCoins";
import { useHistory } from 'react-router-dom';


function TransferPage  (match) {
    const reduxCurrentUser = useSelector((state) => {
        return state.transferCoinsReducer.currentUser
    });

    const reduxUsers = useSelector((state) => {
        return state.transferCoinsReducer.users
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const coinSymbol = match.match.params.coinSymbol;
    const [sendTo, setSendTo] = useState('');
    const [coinChain, setCoinChain] = useState('');
    const [coinCount, setCoinCount] = useState('');
    // Get the list of coins that the logged-in user has
    const userCoinKeys = Object.keys(reduxCurrentUser.coins);
    const userCoins = reduxCurrentUser.coins;

    // Filter other users except the logged-in user
    const otherUsers = reduxUsers.filter(user => user.email !== reduxCurrentUser.email);

    const generateCoinCountOptions = () => {
        const selectedChainCount = userCoins[coinSymbol] || 0;
        const options = [];
        for (let i = 0; i <= selectedChainCount; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    };

    const handleTransfer = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const send_to = formData.get("send_to");
        const coin = formData.get("coin");
        const coin_count = formData.get("coin_count");

        // Dispatch the transferCoinsAction action
        dispatch(transferCoinsAction(send_to, coin, coin_count));
        // Redirect to the coin page or any other desired page
        history.push('/coins');
    };

    return (
        <div class="form-transfer">
            <h2>Transfer Page</h2>
            <p>Transfer <span class="text-info">{coinSymbol} </span> coin</p>

            <form onSubmit={handleTransfer} class="form-group">
                <label htmlFor="sendTo">Send to:</label>
                <select
                    name="send_to"
                    class="form-control"
                    id="sendTo"
                    value={sendTo}
                    onChange={(e) => setSendTo(e.target.value)}
                >
                    <option value="">Send to name</option>
                    {otherUsers.map(user => (
                        <option key={user.email} value={user.email}>{user.name}</option>
                    ))}
                </select>
                <label htmlFor="coinChain">Coin Chain:</label>
                <select
                    name="coin"
                    class="form-control"
                    id="coinChain"
                    value={coinChain}
                    onChange={(e) => setCoinChain(e.target.value)}
                >
                    <option value={coinSymbol} >{coinSymbol}</option>

                </select>
                <label htmlFor="coinCount">Coin Count:</label>
                <select
                    name="coin_count"
                    class="form-control"
                    type="number"
                    id="coinCount"
                    value={coinCount}
                    onChange={(e) => setCoinCount(e.target.value)}
                >
                    {generateCoinCountOptions()}
                </select>
                <button type="submit" class="bg-primary">Transfer</button>
            </form>
        </div>
    );
};

export default TransferPage;