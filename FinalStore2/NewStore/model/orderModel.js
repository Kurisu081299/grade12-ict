let orders = [
    { id: 1, details: 'Order 1 details' },
    { id: 2, details: 'Order 2 details' },
    { id: 3, details: 'Order 3 details' },
    { id: 4, details: 'Order 4 details' },
    { id: 5, details: 'Order 5 details' },
];

const getAllOrders = () => {
    return orders;
};

const getOrderById = (id) => {
    return orders.find(order => order.id == id);
};

const updateOrder = (id, newDetails) => {
    const order = orders.find(o => o.id == id);
    if (order) {
        order.details = newDetails;
        return order;
    }
    return null;
};

const deleteOrder = (id) => {
    const index = orders.findIndex(o => o.id == id);
    if (index !== -1) {
        orders.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = { getAllOrders, getOrderById, updateOrder, deleteOrder };
