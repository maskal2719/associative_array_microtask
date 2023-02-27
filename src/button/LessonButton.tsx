import React from 'react';
import Button from "./components/Button";

const LessonButton = () => {

    const button1Foo = (sub: string, age: number) => {
        console.log(sub,age)
    }
    const button2Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const button3Foo = () => {
        console.log('I m stupid btn')
    }

    return (
        <div>
            <Button callBack={() => button1Foo('Den',23)} name={'First btn'}/>
            <Button  callBack={() => button2Foo('Lera',19)} name={'Second btn'}/>
            <Button callBack={button3Foo} name={'Stupid btn'}/>
        </div>
    );
};

export default LessonButton;