import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({changeFilter}) => (
    <View style={styles.menu}>
        <OptionMenu title={'Toutes'} changeFilter={changeFilter} />
        <OptionMenu title={'Actives'} changeFilter={changeFilter} />
        <OptionMenu title={'Terminées'} changeFilter={changeFilter} />
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu