import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    title?: string
    callBack: (title: string) => void
}

const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler = (title: string) => {
        props.callBack(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} type='text'/>
            <button onClick={() => onClickHandler(title)}>+</button>
        </div>
    );
};

export default FullInput;