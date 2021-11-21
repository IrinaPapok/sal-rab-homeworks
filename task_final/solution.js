function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}, client: {name, phone}};
    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({
            title: goods[i].title,
            count: goods[i].count
        });
    }
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
 
    data.order.sum = sum;
    data.client = name + " " + phone;
    let jsonData = JSON.stringify({data: data}, "", 4);
    return jsonData;
}
