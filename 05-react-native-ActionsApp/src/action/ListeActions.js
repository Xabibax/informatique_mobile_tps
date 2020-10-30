import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, filter, changeActionState}) => {
    if (filter?.state?.terminer !== undefined) actions = actions.filter(action => action.state.terminer === filter.state.terminer)
    return (
        <View>
            <Text>Liste d'actions</Text>
            {actions.map(action => (
                <UneAction key={action.id} action={action} changeActionState={changeActionState}/>
            ))}
        </View>
    )
}

export default ListeActions