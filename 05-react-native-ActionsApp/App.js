import React from 'react'
import { StyleSheet, View, ScrollView, ActionSheetIOS } from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import BoutonAction from './src/action/BoutonAction'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        filter: {
            state:{
            }
        },
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({texteSaisie: nouvelleSaisie})
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction(action) {
        console.log('Vous avez cliqué sur Valider !')
        const { actions } = this.state
        actions.push({
            id: `Action ${this.state.actions.length}`,
            state: {
                terminer: action.state.terminer,
                supprimer: action.state.supprimer,
            },
            title: action.title
        })
        this.setState({
            actions: actions
        })
    }

    changeFilter(filter) {
        this.setState({filter: filter})
    }

    changeActionState = (action) => {
        this.setState({ actions: this.state.actions.map(e => {
            return e.id === action.id ? action : e
            }) 
        })
    }

    render() {
        const { texteSaisie, actions, filter } = this.state
        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete />
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)} />
                    <ListeActions actions={actions} filter={filter} changeActionState={this.changeActionState} />
                    <BoutonCreer onValider={() => this.validerNouvelleAction({ 
                        state: {
                            terminer: false,
                            supprimer: false,
                        },
                        title: BoutonCreer.name
                    })} />
                </ScrollView>
                <Menu changeFilter={this.changeFilter.bind(this)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})