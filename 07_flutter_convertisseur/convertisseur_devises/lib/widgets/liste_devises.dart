import 'package:convertisseur_devises/models/devise.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';

class ListeDevise extends StatelessWidget {
  ListeDevise({this.value, this.changeValeur});

  final Devise value;
  final void Function(Devise) changeValeur;

  @override
  Widget build(BuildContext context) {
    return DropdownButton(
        isExpanded: true,
        value: value,
        onChanged: (newVal) => changeValeur(newVal),
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
        ]);
  }
}
