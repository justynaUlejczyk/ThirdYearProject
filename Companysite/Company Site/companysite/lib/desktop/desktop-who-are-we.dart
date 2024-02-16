import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';

class desktop_who_are_we extends StatelessWidget {
  const desktop_who_are_we({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 800,
      decoration:
          BoxDecoration(color: const Color(0xFFe0c3fc).withOpacity(0.4)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          const Column(
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
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 650,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(25),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      spreadRadius: 5,
                      blurRadius: 10,
                      offset: const Offset(0, 3),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(25),
                  child: Image.asset(
                    'assets/images/computer.jpg',
                    fit: BoxFit.cover,
                    width: 650,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
