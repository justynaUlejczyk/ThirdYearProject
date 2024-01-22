import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';

class desktop_projects extends StatelessWidget {
  const desktop_projects({
    super.key,
    required this.containerWidth,
  });

  final double containerWidth;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 1500,
      width: double.infinity,
      decoration: const BoxDecoration(
        color: Color(0xFF4B426D),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            width: containerWidth,
            height: 600,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(25),
            ),
            child: Stack(
              fit: StackFit.expand,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(25),
                  child: Image.asset(
                    'assets/images/mock.jpg',
                    fit: BoxFit.cover,
                  ),
                ),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25),
                    color: Colors.black
                        .withOpacity(0.5), // Adjust opacity as needed
                  ),
                ),
                const Center(
                  child: MyCustomText(text: 'Under Development', fontSize: 48),
                ),
                const Align(
                  alignment: Alignment.bottomRight,
                  child: Padding(
                    padding: EdgeInsets.all(16.0),
                    child: MyCustomText(text: 'CarFind', fontSize: 24),
                  ),
                )
              ],
            ),
          ),
          Container(
            width: containerWidth,
            height: 600,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(25),
            ),
            child: Stack(
              fit: StackFit.expand,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(25),
                  child: Image.asset(
                    'assets/images/sharesync.jpg',
                    fit: BoxFit.cover,
                  ),
                ),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25),
                    color: Colors.black
                        .withOpacity(0.5), // Adjust opacity as needed
                  ),
                ),
                const Center(
                  child: MyCustomText(text: 'Under Development', fontSize: 48),
                ),
                const Align(
                  alignment: Alignment.bottomRight,
                  child: Padding(
                    padding: EdgeInsets.all(16.0),
                    child: MyCustomText(text: 'ShareSync', fontSize: 24),
                  ),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
