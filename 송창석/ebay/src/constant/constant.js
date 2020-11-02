const MAIN_APIS = {
    MENU: "menu",
    STORE: "mainStore",
    BEST: "mainBest",
    EVENT: "mainEvent",
    PRODUCTS: "mainProducts"
}

const generateBirthArr = (start, end, reverse) => {
    const arr = []
    const startItem = start
    const endItem = end === "now" ? new Date().getFullYear() : end
    for (let i = startItem; i <= endItem; i++) {
        arr.push(i)
    }
    if(reverse) arr.reverse()
    return arr
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
        NAME: 'gender',
        OPTIONS: ["남","여"]
    },
    BIRTH: {
        LABEL: "생년월일"
    },
    YEAR: {
        LABEL: "년",
        NAME: "year",
        OPTIONS: generateBirthArr(1970, "now", true)
    },
    MONTH: {
        LABEL: "월",
        NAME: "month",
        OPTIONS: generateBirthArr(1, 12)
    },
    DAY: {
        LABEL: "일",
        NAME: "day",
        OPTIONS: generateBirthArr(1, 31)
    },
}

export {
    MAIN_APIS,
    LOGIN_OPTS,
    JOIN_OPTS
}