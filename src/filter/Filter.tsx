import React, {useState} from 'react';
import NewComponent from "./NewComponent";

export type FilterType = 'all' | 'ruble' | 'dollar';

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}


const Filter = () => {

    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FilterType>('all');

    let filteredMoney = money

    if (filter === 'ruble') {
        filteredMoney = money.filter(el => el.banknote === 'ruble');
    }

    if (filter === 'dollar') {
        filteredMoney = money.filter(el => el.banknote === 'dollar');
    }
    const handler = (btn: FilterType) => {
        setFilter(btn)
    }

    return (
        <NewComponent money={filteredMoney} handler={handler}/>
    );
};

export default Filter;