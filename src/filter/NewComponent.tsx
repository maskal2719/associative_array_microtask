import React from 'react';
import {FilterType, MoneyType} from "./Filter";
import Button from "../button/components/Button";

type NewComponentPropsType = {
    money: Array<MoneyType>
    handler: (value: FilterType) => void
}

const NewComponent = (props: NewComponentPropsType) => {

    let filteredMoney = props.money

    return (
        <div>
            <ul>
                {filteredMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
                <Button name={'dollar'} callBack={() => props.handler('dollar')}/>
                <Button name={'ruble'} callBack={() => props.handler('ruble')}/>
                <Button name={'all'} callBack={() => props.handler('all')}/>
            </ul>
        </div>
    );
};

export default NewComponent;