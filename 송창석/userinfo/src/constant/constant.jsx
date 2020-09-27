import React from 'react';

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

const INPUT_OBJ = {
    name: {
        label: "이름",
        name: "name",
        type: "text",
    },
    email: {
        label: "이메일",
        name: "email",
        type: "email",
    },
}

const SELECT_OBJ = {
    gender: {
        label: "성별",
        name: "gender",
        opts: () => {
            return ["남","여"].map(it => <option key={it}>{it}</option>)
        }
    },
    birth: {
        label: "생년월일",
        nameArr: [
            {
                name: "year",
                opts: () => {
                    return generateBirthOptions(1970,"now",true)
                }
            },
            {
                name: "month",
                opts: () => {
                    return generateBirthOptions(1,12)
                }
            },
            {
                name: "day",
                opts: () => {
                    return generateBirthOptions(1,31)
                }
            }
        ]
    }
}

export {INPUT_OBJ, SELECT_OBJ}