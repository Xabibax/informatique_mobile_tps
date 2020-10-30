import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'dart:developer'; //(auto import will do this even)

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
        TextField(
          style: AppStyle.inputStyle,
          onChanged: (saisie) {
            setState(() {
              _valeur = double.parse(saisie);
            });
          },
        ),
        Spacer(),
        Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        DropdownButton(
            isExpanded: true,
            value: _deviseInitial,
            onChanged: (newVal) => setState(() {
                  _deviseInitial = newVal;
                }),
            items: [
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.EURO]),
                value: Devise.EURO,
              ),
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.DOLLAR]),
                value: Devise.DOLLAR,
              ),
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.LIVRE_STERLING]),
                value: Devise.LIVRE_STERLING,
              ),
            ]),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        DropdownButton(
            isExpanded: true,
            value: _deviseFinale,
            onChanged: (newVal) => setState(() {
                  _deviseFinale = newVal;
                }),
            items: [
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.EURO]),
                value: Devise.EURO,
              ),
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.DOLLAR]),
                value: Devise.DOLLAR,
              ),
              DropdownMenuItem<Devise>(
                child: Text(libelles[Devise.LIVRE_STERLING]),
                value: Devise.LIVRE_STERLING,
              ),
            ]),
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
