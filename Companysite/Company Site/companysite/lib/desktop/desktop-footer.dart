import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';

class desktop_footer extends StatelessWidget {
  const desktop_footer({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 700,
      decoration: const BoxDecoration(
        color: Color(0xFF4B426D),
      ),
      child: Column(
        children: [
          const SizedBox(height: 50),
          Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              const SizedBox(
                width: 600,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    MyCustomText(text: 'Contact Us', fontSize: 48),
                    MyCustomText(
                      text:
                          "Have a question, concern, or just want to say hello? We'd love to hear from you! Feel free to drop us a message, and our team will get back to you ASAP",
                      fontSize: 16,
                      centerText: true,
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 75),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Container(
                    width: 400,
                    height: 150,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      color: const Color(0xFFF3E5FD),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.only(left: 25),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.email_outlined,
                            size: 32,
                            color: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: 'Email',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: 'support@bitbybit.co.uk',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 50),
                  Container(
                    width: 400,
                    height: 150,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      color: const Color(0xFFF3E5FD),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.only(left: 25),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.phone,
                            size: 32,
                            color: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: 'Phone',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: '0131 339 0202',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 50),
                  Container(
                    width: 400,
                    height: 150,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25),
                      color: const Color(0xFFF3E5FD),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.only(left: 25),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.facebook,
                            size: 32,
                            color: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: 'Facebook',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                          SizedBox(height: 5),
                          MyCustomText(
                            text: 'BitByBit Solutions',
                            fontSize: 16,
                            textColor: Color(0xFF4B426D),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              )
            ],
          )
        ],
      ),
    );
  }
}
