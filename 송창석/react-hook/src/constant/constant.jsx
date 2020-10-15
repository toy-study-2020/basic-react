import React from 'react';

const FORM_OPTS = {
    USERNAME: {
        LBL: "이름",
        NAME: "name",
        TYPE: "text"
    },
    NICKNAME: {
        LBL: "별명",
        NAME: "nickname",
        TYPE: "text"
    },
    GENDER: {
        LBL: "성별",
        NAME: "gender",
        OPTIONS: () => {
            return ["남", "여"].map(it => <option key={it} value={it}>{it}</option>)
        }
    },
    EMAIL: {
        LBL: "이메일",
        NAME: "email",
        TYPE: "email"
    },
}

export {
    FORM_OPTS
}