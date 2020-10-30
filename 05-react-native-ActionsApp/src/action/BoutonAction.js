import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight } from 'react-native'

/**
 * Le composant BoutonAction est paramétrable via son nom.
 *
 * Si le nom vaut 'Supprimer' alors le libellé du bouton sera 'Supprimer'.
 *
 * TODO 1. Modifier le code pour que le bouton soit configurable via son nom.
 *
 * TODO 2. Si l'action sur lequel s'applique ce bouton est terminé, alors appliquer le style 'termine' à l'élément <Text>
 *
 * TODO 3. Si le nom du bouton est 'Supprimer', alors appliquer le style 'supprimer' à l'élément <Text>
 *
 */
const BoutonAction = ({ type, action, changeActionState }) => {
    const [terminer, setTerminer] = useState(action.state.terminer)
    const [supprimer, setSupprimer] = useState(action.state.supprimer)
    let style = styles.texte
    if (type === 'Terminer' && terminer) style = styles.terminer
    else if (type === 'Supprimer' && supprimer) style = styles.supprimer
    return (
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.bouton}>
                <Text
                    title={type}
                    style={style}
                    onPress={() => { if(type === 'Terminer') {
                        setTerminer(terminer === false)
                        changeActionState({
                            id: action.id,
                            state: {
                                terminer: terminer === false,
                                supprimer: action.state.supprimer,
                            },
                            title: type
                        })
                    } else if (type === 'Supprimer') {
                        setSupprimer(supprimer === false)
                        changeActionState({
                            id: action.id,
                            state: {
                                terminer: action.state.terminer,
                                supprimer: supprimer === false,
                            },
                            title: type
                        })
                    }
                       
                    }} >{type}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    bouton: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
    },
    texte: {
        color: '#666666',
    },
    terminer: {
        color: 'green',
        fontWeight: 'bold',
    },
    supprimer: {
        color: 'rgba(175, 47, 47, 1)',
    },
})
export default BoutonAction