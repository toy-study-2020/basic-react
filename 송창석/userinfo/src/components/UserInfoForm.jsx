import React, { useState } from 'react';
import './UserInfoForm.css'
import {INPUT_OBJ, SELECT_OBJ} from '../constant/constant.jsx'
import UserInfoInput from './UserInfoInput';
import UserInfoWrap from './UserInfoWrap';
import UserInfoSelect from './UserInfoSelect';

const UserInfoForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        year: "",
        month: "",
        day: ""
    });

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    
    

    const userInfoSubmitHandler = (event) => {
        event.preventDefault();

        const infoArr = [];
        if(user.name === "") infoArr.push("이름")
        if(user.gender === "") infoArr.push("성별")
        if(user.year === "" || user.month === "" || user.day === "") infoArr.push("생년월일")
        if(infoArr.length > 0) alert(`${infoArr.map(it => it)}을 확인해주세요.`)
        else console.log(user)
    }



    return (
        <div className="form_userinfo">
            <form onSubmit={userInfoSubmitHandler}>
                <UserInfoWrap
                    obj={INPUT_OBJ.name}
                    components={
                        <UserInfoInput
                            obj={INPUT_OBJ.name}
                            value={user.name}
                            handleUser={handleUser}
                        />
                    }
                />
                <UserInfoWrap
                    obj={INPUT_OBJ.email}
                    components={
                        <UserInfoInput
                            obj={INPUT_OBJ.email}
                            value={user.email}
                            handleUser={handleUser}
                        />
                    }
                />
                <UserInfoWrap
                    obj={SELECT_OBJ.gender}
                    components={
                        <UserInfoSelect
                            obj={SELECT_OBJ.gender}
                            value={user.gender}
                            handleUser={handleUser}
                        />
                    }
                />
                <UserInfoWrap
                    obj={SELECT_OBJ.birth}
                    components={
                        SELECT_OBJ.birth.nameArr.map((it) => {
                            return <UserInfoSelect
                                key={it.name}
                                obj={it}
                                value={user[it.name]}
                                handleUser={handleUser}
                            />
                        })
                    }
                />
                
                <button
                    type={"submit"}
                    className={"submit_btn"}
                >등록</button>
            </form>
        </div>
    );
};

export default UserInfoForm;