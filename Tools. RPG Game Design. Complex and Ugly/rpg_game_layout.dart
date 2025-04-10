import 'package:flutter/material.dart';

void main() {
  runApp(const RPGGame());
}

class RPGGame extends StatelessWidget {
  const RPGGame({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            color: Color(0xFF222222),
          ),
          child: Stack(
            children: [
              _buildBackground(),
              Padding(
                padding: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.05),
                child: Center(
                  child: Container(
                    width: MediaQuery.of(context).size.width * 0.9,
                    height: MediaQuery.of(context).size.height * 0.9,
                    constraints: const BoxConstraints(maxWidth: 400, maxHeight: 900),
                    decoration: BoxDecoration(
                      color: const Color(0xFFC7BFAC),
                      borderRadius: BorderRadius.circular(8),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.5),
                          blurRadius: 10,
                        ),
                      ],
                    ),
                    child: Column(
                      children: [
                        _buildTitleSection(),
                        _buildSeparator('assets/images/separator-01.png'),
                        _buildContentSection(context),
                        _buildSeparatorWithLabel('123', 'assets/images/separator-02.png'),
                        _buildButtonsSection(),
                        _buildSeparator('assets/images/separator-03.png'),
                        _buildMenuSection(),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildBackground() {
    return Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/background.jpg'),
          fit: BoxFit.cover,
          alignment: Alignment.topCenter,
        ),
      ),
    );
  }

  Widget _buildTitleSection() {
    return Container(
      height: MediaQuery.of(context).size.height * 0.0716,
      padding: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.03),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Image.asset(
              'assets/images/logo.jpg',
              fit: BoxFit.contain,
              width: MediaQuery.of(context).size.width * 0.18,
              height: MediaQuery.of(context).size.height * 0.0716,
            ),
          ),
          Image.asset(
            'assets/images/title.png',
            fit: BoxFit.contain,
            width: MediaQuery.of(context).size.width * 0.78,
            height: MediaQuery.of(context).size.height * 0.0716,
          ),
        ],
      ),
    );
  }

  Widget _buildSeparator(String imagePath) {
    return Container(
      height: MediaQuery.of(context).size.height * 0.0281,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(imagePath),
          fit: BoxFit.cover,
          alignment: Alignment.center,
        ),
      ),
    );
  }

  Widget _buildSeparatorWithLabel(String label, String imagePath) {
    return Stack(
      alignment: Alignment.center,
      children: [
        _buildSeparator(imagePath),
        Text(
          label,
          style: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: Color(0xFF640706),
          ),
        ),
      ],
    );
  }

  Widget _buildContentSection(BuildContext context) {
    return Expanded(
      child: SingleChildScrollView(
        child: Column(
          children: [
            _buildContentDiv(
              'You look around and see a small crowd of people in medieval outfits. Women wear long dresses and tall, pointy hats with long, flowing veils.',
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 20),
              child: Image.asset('assets/paragraphs/123.jpg', fit: BoxFit.contain),
            ),
            _buildContentDiv(
              'Men walk by in heavy armor, carrying shiny swords. Jugglers show off their tricks, and sellers call out to display their food trays. In the back, you can see a small castle-like building — more like an English manor than a medieval stronghold.',
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildContentDiv(String text) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.93,
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(0),
      child: Text(
        text,
        style: const TextStyle(color: Colors.black, fontSize: 16),
        textAlign: TextAlign.left,
      ),
    );
  }

  Widget _buildButtonsSection() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Column(
        children: [
          _buildGameButton('Ask a question to a juggler', () {}),
          _buildGameButton('Speak to a passing knight', () {}),
        ],
      ),
    );
  }

  Widget _buildGameButton(String label, VoidCallback onPressed) {
    return SizedBox(
      width: MediaQuery.of(context).size.width * 0.93,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: const Color(0xFF968B6B),
          padding: const EdgeInsets.symmetric(vertical: 10),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(7),
          ),
        ),
        onPressed: onPressed,
        child: Text(
          label,
          style: const TextStyle(
            color: Color(0xFF640706),
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
      ),
    );
  }

  Widget _buildMenuSection() {
    return Container(
      padding: const EdgeInsets.all(10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              _buildMenuButton('assets/images/menu-fight.png', () {}),
              _buildMenuButton('assets/images/menu-craft.png', () {}),
              _buildMenuButton('assets/images/menu-map.png', () {}),
            ],
          ),
          Row(
            children: [
              _buildMenuButton('assets/images/menu-time.png', () {}),
              _buildMenuButton('assets/images/menu-settings.png', () {}),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildMenuButton(String iconPath, VoidCallback onPressed) {
    return SizedBox(
      width: 50,
      height: 50,
      child: InkWell(
        onTap: onPressed,
        child: Image.asset(iconPath, fit: BoxFit.contain),
      ),
    );
  }
}