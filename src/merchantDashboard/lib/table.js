import moment from "moment-timezone";


export const NumberStringSort = (a, b, col='') =>{
    if(col){
        if (typeof a[col] === "string" && typeof b[col] === "string"){
            var nameA = a[col] != null ? a[col].toUpperCase() : '';
            var nameB = b[col] != null ? b[col].toUpperCase() : '';
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }else{
            return a[col] - b[col];
        }
    }else{
        return a - b;
    }
}

export const sortString=(a, b,column)=>{
    if(a && a[column] && a[column].length && b && b[column] && b[column].length) {
        return a[column].length - b[column].length;
    } else if(a && a[column] && a[column].length) {
        return -1;
    } else if(b && b[column] && b[column].length) {
        return 1;
    }
    return 0;
}
export const sortInteger=(a, b,column)=>{
    return a[column] - b[column]
}
export const sortDate=(a, b,column)=>{
    return moment(a[column]).unix() - moment(b[column]).unix()
}