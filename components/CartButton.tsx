import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CartButton = () => {
    const totalItems = 10;

    return (
        <TouchableOpacity className="cart-btn" onPress={()=>{}}>
            <Text>CartButton</Text>
        </TouchableOpacity>
    )
}
export default CartButton
