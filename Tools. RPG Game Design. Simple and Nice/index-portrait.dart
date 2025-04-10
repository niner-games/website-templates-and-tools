import 'package:flutter/material.dart';

void main() {
  runApp(const VisualNovelAppVertical());
}

class VisualNovelAppVertical extends StatelessWidget {
  const VisualNovelAppVertical({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Stack(
          children: [
            // Background with gradient fading to black
            Container(
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Colors.black, Color.fromRGBO(0, 0, 0, 0.7)],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                ),
                image: const DecorationImage(
                  image: AssetImage('assets/your_background_image.jpg'), // Replace with your image
                  fit: BoxFit.cover,
                ),
              ),
              child: Opacity(
                opacity: 0.7, // Make background translucent
                child: Container(),
              ),
            ),
            // Semi-transparent text overlay
            Align(
              alignment: Alignment.center,
              child: Container(
                width: MediaQuery.of(context).size.width * 0.85, // 85% width of screen
                padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20), // Equal paddings
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.5),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text(
                      'Haruto and Akiko sat by the campfire under a sky full of stars. The fire kept them warm in the cold night. Akiko looked at the flames, lost in her thoughts, while Haruto drew shapes in the dirt. They had come here to take a break from their worries and find peace in nature.',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 21,
                        fontFamily: 'Arial',
                      ),
                    ),
                    const SizedBox(height: 20), // Space between elements
                    Image.asset(
                      'assets/your_background_image.jpg', // Replace with your image
                      fit: BoxFit.contain,
                    ),
                    const SizedBox(height: 20), // Space after the image
                    const Text(
                      'Akiko opened a map and showed Haruto a place in the mountains. She said it was a place where wishes could come true. Haruto nodded, though he knew they were here not for magic but to enjoy the quiet moment together. The fire and the stars made them feel calm, and for now, that was enough.',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 21,
                        fontFamily: 'Arial',
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
