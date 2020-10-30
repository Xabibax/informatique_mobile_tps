import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:convertisseur_devises/widgets/liste_devises.dart';
import 'package:convertisseur_devises/widgets/saisie_nombre.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  ConvertisseurDevisePage();
  @override
  State<StatefulWidget> createState() {
    return _ConvertisseurDevisePage();
  }
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
// les différents "états" de la page
  double _valeur; // valeur saisie
  Devise _deviseInitial; // devise initiale sélectionnée
  Devise _deviseFinale; // devise finale sélectionnée
  double _resultat; // le résultat de la conversion
// définition des valeurs initiales
  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
    _deviseInitial = Devise.EURO;
    _deviseFinale = Devise.DOLLAR;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        Spacer(),
        Text(
          'Valeur',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        SaisieNombre(changeValeur: (saisie) {
          setState(() {
            _valeur = saisie;
          });
        }),
        Spacer(),
        Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        ListeDevise(
            value: _deviseInitial,
            changeValeur: (saisie) {
              setState(() {
                _deviseInitial = saisie;
              });
            }),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        ListeDevise(
            value: _deviseFinale,
            changeValeur: (saisie) {
              setState(() {
                _deviseFinale = saisie;
              });
            }),
        Spacer(
          flex: 2,
        ),
        ElevatedButton(
            onPressed: () => setState(() {
                  _resultat = (100 *
                              taux[_deviseFinale] *
                              _valeur /
                              taux[_deviseInitial])
                          .roundToDouble() /
                      100;
                }),
            child: Text('Convertir')),
        Spacer(
          flex: 2,
        ),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        Spacer(),
      ],
    ));
  }
}
