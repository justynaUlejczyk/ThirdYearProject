import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class desktop_header extends StatelessWidget {
  const desktop_header({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: 1000,
      child: Stack(
        children: [
          Image.asset(
            'assets/images/technology.jpg',
            fit: BoxFit.cover,
            width: double.infinity,
            height: 1000,
          ),
          Container(
            height: double.infinity,
            width: double.infinity,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  const Color(0xFFe0c3fc).withOpacity(0.7),
                  const Color(0xFF8ec5fc).withOpacity(0.7),
                ],
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            top: 400,
            child: Center(
              child: SizedBox(
                height: 400,
                width: 600,
                child: Animate(
                  child: const Column(
                    children: [
                      MyCustomText(
                        text: 'BitByBit Solutions',
                        fontSize: 48,
                      ),
                      MyCustomText(
                        text:
                            'Unleashing Digital Brilliance, One Pixel at a Time!',
                        fontSize: 24,
                        centerText: true,
                      ),
                    ],
                  ),
                )
                    .slideY(
                        begin: 0.25,
                        duration: const Duration(milliseconds: 500),
                        delay: const Duration(milliseconds: 1000))
                    .fadeIn(duration: const Duration(milliseconds: 750)),
              ),
            ),
          ),
          Positioned(
            bottom: 50,
            left: 0,
            right: 0,
            child: Center(
              child: Animate(
                child: const SizedBox(
                  width: 50,
                  height: 50,
                  child: Column(
                    children: [
                      MyCustomText(text: 'Scroll', fontSize: 12),
                    ],
                  ),
                ),
              )
                  .slideY(begin: 1, delay: const Duration(milliseconds: 2000))
                  .fadeIn(
                    begin: 0,
                  ),
            ),
          ),
        ],
      ),
    );
  }
}
