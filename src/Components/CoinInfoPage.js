import React, {useEffect, useState} from 'react';
import axios from "axios";
import CoinsContainer from "./CoinsContainer";
import {initCoinRate} from "../redux/actions/coinRate";
import { useDispatch} from "react-redux";
import coinData from '../coinData.json';
import {initUsers} from "../redux/actions/users";


function CoinInfoPage() {
    //const [users, setUsers] = useState();
    //const [coinRates, setCoinRates] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            dispatch(initUsers(res.data));
            //setUsers(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get("http://api.coinlayer.com/live?access_key=1a4bbd8f97ae29bacc21f8ce67ac7216").then((res) => {
            dispatch(initCoinRate(res.data))
            //setCoinRates(res.data);
        });
        //dispatch(initCoinRate(coinData));

    }, []);

    return(
        <>
            <h3 class="px-2">
                  Coins Live
                <small className="text-muted"> rates</small>
            </h3>
            <CoinsContainer />
        </>
    );
}

export default CoinInfoPage;
