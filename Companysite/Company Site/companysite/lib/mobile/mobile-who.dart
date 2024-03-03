import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';

class mobile_who extends StatelessWidget {
  const mobile_who({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth > 200) {
          // Desktop layout
          return Container(
            height: 800,
            decoration:
                BoxDecoration(color: const Color(0xFFe0c3fc).withOpacity(0.4)),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    MyCustomText(
                      text: 'Who are we?',
                      fontSize: 32,
                      textColor: Color(0xFF4B426D),
                    ),
                    SizedBox(
                      height: 25,
                    ),
                    MyCustomText(
                      fontWeight: FontWeight.w500,
                      width: 400,
                      text:
                          "BitByBit Solutions is a team of passionate and skilled professionals who thrive on turning ideas into reality. With a wealth of expertise in web development and application design, we take pride in creating digital solutions that not only meet but exceed our clients' expectations. Our commitment to excellence is reflected in every line of code we write and every pixel we place.",
                      fontSize: 14,
                      textColor: Color(0xFF4B426D),
                    ),
                  ],
                ),
              ],
            ),
          );
        } else {
          // Mobile layout
          return Container(
            height: 800,
            decoration:
                BoxDecoration(color: const Color(0xFFe0c3fc).withOpacity(0.4)),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    MyCustomText(
                      text: 'Who are we?',
                      fontSize: 32,
                      textColor: Color(0xFF4B426D),
                    ),
                    SizedBox(
                      height: 25,
                    ),
                    MyCustomText(
                      fontWeight: FontWeight.w500,
                      width: 500,
                      text:
                          "BitByBit Solutions is a team of passionate and skilled professionals who thrive on turning ideas into reality. With a wealth of expertise in web development and application design, we take pride in creating digital solutions that not only meet but exceed our clients' expectations. Our commitment to excellence is reflected in every line of code we write and every pixel we place.",
                      fontSize: 16,
                      textColor: Color(0xFF4B426D),
                    ),
                  ],
                ),
              ],
            ),
          );
        }
      },
    );
  }
}
