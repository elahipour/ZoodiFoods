function setDiscount(price,discountPercent){
    const amountOfDiscount=price*discountPercent/100;
    const afterDiscount=price-amountOfDiscount;
    return afterDiscount.toFixed(1)
}
export default setDiscount