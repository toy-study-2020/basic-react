import React, { useState } from 'react';
import './UserInfoComponent.css'

const UserInfoComponent = () => {
    const [user, setUser] = useState({
        name: "",
        year: "",
        month: "",
        day: "",
        gender: "",
        email: ""
    });
    const {name, year, month, day, gender, email} = user;
    
    const generateBirthOptions = (start, end, dir) => {
        const arr = [];
        const startYear = start;
        const endYear = end === "now" ? new Date().getFullYear() : end
        for (let i = startYear; i <= endYear; i++) {
            arr.push(<option key={i} value={i}>{i}</option>);
        }

        if(dir) return arr.reverse()
        return arr;
    }

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const userInfoSubmitHandler = (event) => {
        event.preventDefault();

        if(name === "") alert("이름을 입력해주세요.");
        if(year === "" || month === "" || day === "") alert("생년월일을 선택해주세요.");
        if(gender === "") alert("성별을 선택해주세요.");
        if (
            name !== "" && 
            year !== "" && 
            month !== "" && 
            day !== "" && 
            gender !== "") {
                console.log(user);
            }
    }



    return (
        <div className="form_userinfo">
            <form onSubmit={userInfoSubmitHandler}>
                <dl>
                    <dt>이름*</dt>
                    <dd>
                        <input
                            value={name}
                            name={"name"}
                            type={"text"}
                            onChange={handleUser}
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>생년월일*</dt>
                    <dd>
                        <select
                            value={year}
                            name={"year"}
                            onChange={handleUser}
                        >
                            <option value={""}>년</option>
                            {generateBirthOptions(1900,"now",true)}
                        </select>
                    </dd>
                    <dd>
                        <select
                            value={month}
                            name={"month"}
                            onChange={handleUser}
                        >
                            <option value={""}>월</option>
                            {generateBirthOptions(1,12)}
                        </select>
                    </dd>
                    <dd>
                        <select
                            value={day}
                            name={"day"}
                            onChange={handleUser}
                        >
                            <option value={""}>일</option>
                            {generateBirthOptions(1,31)}
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>성별*</dt>
                    <dd>
                        <select
                            value={gender}
                            name={"gender"}
                            onChange={handleUser}
                        >
                            <option value={""}>선택</option>
                            {["남","여"].map(it => <option key={it}>{it}</option>)}
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>이메일</dt>
                    <dd>
                        <input
                            value={email}
                            name={"email"}
                            type={"email"}
                            onChange={handleUser}
                        />
                    </dd>
                </dl>
                <button
                    type={"submit"}
                    className={"submit_btn"}
                >등록</button>
            </form>
        </div>
    );
};

export default UserInfoComponent;