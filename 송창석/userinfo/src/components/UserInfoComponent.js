import React, { useState } from 'react';
import './UserInfoComponent.css'

const UserInfoComponent = () => {
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

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState({
        year: "",
        month: "",
        day: ""
    })
    const [email, setEmail] = useState("");

    const birthChangeHandler = (target, value) => {
        const newBirth = {
            ...birth,
            [target]: value
        }
        
        return setBirth(newBirth);
    }
    
    const userInfoSubmitHandler = (event) => {
        event.preventDefault();
        if(name === "") alert("이름을 입력해주세요.");
        if(birth.year === "" || birth.month === "" || birth.day === "") alert("생년월일을 선택해주세요.");
        if(gender === "") alert("성별을 선택해주세요.");
        if (
            name !== "" && 
            birth.year !== "" && 
            birth.month !== "" && 
            birth.day !== "" && 
            gender !== "") {
                console.log(`이름 : ${name}`);
                console.log(`생년월일 : ${birth.year}년 ${birth.month}월 ${birth.day}일 생`);
                console.log(`성별 ${gender}`);
                console.log(`이메일 ${email !== ""? email : "미입력"}`);
            }
    }



    return (
        <div className="form_userinfo">
            <form onSubmit={userInfoSubmitHandler}>
                <dl>
                    <dt>이름*</dt>
                    <dd>
                        <input
                            type={"text"}
                            onChange={(e) => {setName(e.target.value)}}
                        ></input>
                    </dd>
                </dl>
                <dl>
                    <dt>생년월일*</dt>
                    <dd>
                        <select
                            onChange={(e) => birthChangeHandler("year", e.target.value)}
                        >
                            <option value={""}>년</option>
                            {generateBirthOptions(1900,"now",true)}
                        </select>
                    </dd>
                    <dd>
                        <select
                            onChange={(e) => birthChangeHandler("month", e.target.value)}
                        >
                            <option value={""}>월</option>
                            {generateBirthOptions(1,12)}
                        </select>
                    </dd>
                    <dd>
                        <select
                            onChange={(e) => birthChangeHandler("day", e.target.value)}
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
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value={""}>선택</option>
                            {["남","여"].map(it => <option key={it}>{it}</option>)}
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>이메일</dt>
                    <dd>
                        <input type={"email"} onChange={(e) => {setEmail(e.target.value)}}></input>
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