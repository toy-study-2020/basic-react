export const getFetch = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const yearFuc = (num) => {
    let current = new Date().getFullYear(),
        yearArr = [];
    for (let i = current - num; i <= current; i++) {
        yearArr.push( i + '년' );  
    }
    return yearArr;
}

export const monthFuc = () => {
    let monthArr = [];
    for (let i = 1; i <= 12; i++) {
        monthArr.push(i + '월');  
    }
    return monthArr;
}

export const dayFuc = () => {
    let dayArr = [];
    for (let i = 1; i <= 31; i++) {
        dayArr.push(i + '일');  
    }
    return dayArr;
}