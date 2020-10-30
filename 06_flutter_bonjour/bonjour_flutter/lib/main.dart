import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class BoutonAdoptezMoi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text('Adoptez-moi'),
                content: Container(
                    height: 200,
                    width: 300,
                    child: SingleChildScrollView(
                        child: Column(children: [
                      Text('Je vous attends au refuge TXAKURRAK & A.A.E.'),
                      Image.asset(
                        'assets/refuge_animalier.jpeg',
                      ),
                    ]))),
                titleTextStyle: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: Color(0xffb74093)),
              );
            });
      },
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Color(0xffb74093)),
      ),
      child: Text('Adoptez-moi !'),
    );
  }
}

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(
              title: Text('Bonjour App'),
              backgroundColor: Color(0xffb74093),
            ),
            body: SingleChildScrollView(
                child: Center(
                    child: Column(children: [
              Text(
                'Bonjour',
                style: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: Color(0xffb74093)),
              ),
              Text(
                'Je suis beau',
                style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    color: Colors.pinkAccent),
              ),
              Image.asset(
                'assets/doggo.jpeg',
                height: 350,
              ),
              BoutonAdoptezMoi(),
            ])))));
  }
}
