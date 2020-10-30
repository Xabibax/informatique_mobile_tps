import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';

import '../styles.dart';

class SaisieNombre extends StatelessWidget {
  SaisieNombre({this.changeValeur});

  final void Function(double) changeValeur;

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: AppStyle.inputStyle,
      onChanged: (saisie) {
        changeValeur(double.parse(saisie));
      },
    );
  }
}
