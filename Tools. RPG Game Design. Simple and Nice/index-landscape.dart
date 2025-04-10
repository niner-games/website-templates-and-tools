import 'package:flutter/material.dart';

void main() {
  runApp(const VisualNovelApp());
}

class VisualNovelApp extends StatelessWidget {
  const VisualNovelApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Stack(
          children: [
            // Full-page background
            Container(
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/your_background_image.jpg'), // Replace with your image path
                  fit: BoxFit.cover,
                ),
              ),
            ),
            // Semi-transparent text overlay
            Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                width: MediaQuery.of(context).size.width * 0.77, // 77% width
                margin: const EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width * 0.115),
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.5),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Text(
                  'Haruto and Akiko sat by the campfire under a sky full of stars. The fire kept them warm in the cold night. Akiko looked at the flames, lost in her thoughts, while Haruto drew shapes in the dirt. They had come here to take a break from their worries and find peace in nature.\n\nAkiko opened a map and showed Haruto a place in the mountains. She said it was a place where wishes could come true. Haruto nodded, though he knew they were here not for magic but to enjoy the quiet moment together. The fire and the stars made them feel calm, and for now, that was enough.',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 21, // Font size increased to 21px
                    fontFamily: 'Arial',
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
