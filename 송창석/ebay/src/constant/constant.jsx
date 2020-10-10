import React from 'react';

const CLASS_NAME = {
    MAIN_BEST: {
        CONT: "cont",
        DISCOUNT: "discount",
        RATE: "rate",
        FEE: "fee",
        IMG: "img",
        DESC: "desc",
        PRICE: "price",
        NOW: "now",
        ORIGIN: "origin"
    },
    MAIN_EVENT: {
        IMG: "img",
        DESC: "desc"
    },
    MAIN_CHANCE: {
        CONT: "cont",
        IMG: "img",
        DESC: "desc",
        BADGE: "badge"
    }
}

const generateBirthOptions = (start, end, dir) => {
    const arr = [];
    const startYear = start;
    const endYear = end === "now" ? new Date().getFullYear() : end
    for (let i = startYear; i <= endYear; i++) {
        arr.push(<option key={i} value={i}>{i}</option>);
    }

    if (dir) return arr.reverse()
    return arr;
}

const LOGIN_OPTS = {
    TITLE: "로그인",
    EMAIL: {
        LABEL: "이메일",
        NAME: "email",
        TYPE: "email",
    },
    PASSWORD: {
        LABEL: "비밀번호",
        NAME: "password",
        TYPE: "password",
    }
}

const JOIN_OPTS = {
    TITLE: "회원가입",
    NAME: {
        LABEL: "이름",
        NAME: "name",
        TYPE: "text",
    },
    EMAIL: {
        LABEL: "이메일",
        NAME: "email",
        TYPE: "email",
    },
    PASSWORD: {
        LABEL: "비밀번호",
        NAME: "password",
        TYPE: "password",
    },
    GENDER: {
        LABEL: "성별",
        NAME: "gender",
        OPTIONS: () => {
            return ["남", "여"].map(it => <option key={it} value={it}>{it}</option>)
        }
    },
    BIRTH: {
        LABEL: "생년월일",
        SELECT: [
            {
                NAME: "year",
                OPTIONS: () => {
                    return generateBirthOptions(1970, "now", true)
                }
            },
            {
                NAME: "month",
                OPTIONS: () => {
                    return generateBirthOptions(1, 12)
                }
            },
            {
                NAME: "day",
                OPTIONS: () => {
                    return generateBirthOptions(1, 31)
                }
            },
        ]
    }
}

export {
    CLASS_NAME,
    LOGIN_OPTS,
    JOIN_OPTS
}