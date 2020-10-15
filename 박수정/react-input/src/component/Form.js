import React, { useState } from "react";
import "./Form.css"

function Form() {
    const initData = {
        name: '',
        year: 1970,
        month: 'Jan',
        day: 1,
        sex: '남',
        mail: ''
    }
    const [data, setData] = useState(initData);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data)
        setData(initData)
    }

    const YearDropList = () => {
        const year = new Date().getFullYear();
        return (
            <select value={data.year} onChange={handleChange} name="year" required>
                return {
                        Array.from( new Array(50), (v,i) =>
                            <option key={i} value={year+i - 50}>{year+i - 50}</option>
                        )
                    }
            </select>
        )
    };

    const MonthDropList = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return (
            <select value={data.month} onChange={handleChange} name="month" required>
                return {
                    Array.from( new Array(12), (v,i) =>
                        <option key={i} value={month[i]}>{month[i]}</option>
                    )
                }
            </select>
        );
    };

    const DayDropList = () => {
        return (
            <select value={data.day} onChange={handleChange} name="day" required>
                return {
                    Array.from( new Array(31), (v,i) => 
                        <option key={i} value={i + 1}>{i + 1}</option>
                    )
                }
            </select>
        )
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span class="required">이름</span>
                <input
                    type="text"
                    value={data.name}
                    onChange={handleChange}
                    name="name"
                    required
                />
            </label>
            
            <label>
                <span class="required">생년월일</span>
                <YearDropList/>
                <MonthDropList/>
                <DayDropList/>
            </label>
            
            <label>
                <span class="required">성별</span>
                <select value={data.sex} onChange={handleChange} name="sex" required>
                    <option value="남">남</option>
                    <option value="여">여</option>
                </select>
            </label>
            
            <label>
                <span>이메일</span>
                <input
                    type="text"
                    value={data.mail}
                    onChange={handleChange}
                    name="mail"
                />
            </label>
            
            <button type="submit">등록</button>
        </form>
    )
}

export default Form;
