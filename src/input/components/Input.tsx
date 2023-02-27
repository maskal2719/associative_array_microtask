import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

const Input = (props: InputPropsType) => {

    const onChangeInputHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler1}/>
    );
};

export default Input;