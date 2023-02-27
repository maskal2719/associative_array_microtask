import React from 'react';

type BtnPropsType = {
    name: string
    callBack: () => void
}

const Btn = (props: BtnPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Btn;