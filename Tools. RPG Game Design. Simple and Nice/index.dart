import 'package:flutter/material.dart';

void main() {
  runApp(const ResponsiveVisualNovel());
}

class ResponsiveVisualNovel extends StatelessWidget {
  const ResponsiveVisualNovel({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Responsive Visual Novel',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: OrientationBuilder(
          builder: (context, orientation) {
            // Check if the device is in portrait or landscape mode
            return orientation == Orientation.landscape
                ? LandscapeView() // Show landscape view
                : PortraitView(); // Show portrait view
          },
        ),
      ),
    );
  }
}

class LandscapeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Background image
        Container(
          decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage('assets/your-background-image.jpg'), // Provide your image asset path
              fit: BoxFit.cover,
            ),
          ),
        ),
        // Text field
        Positioned(
          bottom: 0,
          left: 0,
          right: 0,
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 50),
            padding: const EdgeInsets.all(20),
            color: Colors.black.withOpacity(0.5),
            child: const Text(
              "Haruto and Akiko sat by the campfire under a sky full of stars. The fire kept them warm in the cold night. Akiko looked at the flames, lost in her thoughts, while Haruto drew shapes in the dirt. They had come here to take a break from their worries and find peace in nature.\n\n"
              "Akiko opened a map and showed Haruto a place in the mountains. She said it was a place where wishes could come true. Haruto nodded, though he knew they were here not for magic but to enjoy the quiet moment together. The fire and the stars made them feel calm, and for now, that was enough.",
              style: TextStyle(
                color: Colors.white,
                fontSize: 21,
                fontFamily: 'Arial',
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class PortraitView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Background image with gradient overlay
        Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Colors.black,
                Colors.black.withOpacity(0.7),
              ],
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
            ),
            image: const DecorationImage(
              image: AssetImage('assets/your-background-image.jpg'), // Provide your image asset path
              fit: BoxFit.cover,
            ),
          ),
        ),
        // Text field
        Center(
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 30),
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.5),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  "Haruto and Akiko sat by the campfire under a sky full of stars. The fire kept them warm in the cold night. Akiko looked at the flames, lost in her thoughts, while Haruto drew shapes in the dirt. They had come here to take a break from their worries and find peace in nature.",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 21,
                    fontFamily: 'Arial',
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                Image.asset(
                  'assets/your-background-image.jpg', // Provide your image asset path
                  fit: BoxFit.cover,
                ),
                const SizedBox(height: 20),
                const Text(
                  "Akiko opened a map and showed Haruto a place in the mountains. She said it was a place where wishes could come true. Haruto nodded, though he knew they were here not for magic but to enjoy the quiet moment together. The fire and the stars made them feel calm, and for now, that was enough.",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 21,
                    fontFamily: 'Arial',
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
