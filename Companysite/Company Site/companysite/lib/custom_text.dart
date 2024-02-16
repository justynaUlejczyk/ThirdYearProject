import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MyCustomText extends StatelessWidget {
  const MyCustomText({
    Key? key,
    required this.text,
    required this.fontSize,
    this.fontWeight = FontWeight.bold,
    this.textColor = Colors.white,
    this.width,
    this.letterSpacing,
    this.centerText = false,
  }) : super(key: key);

  final String text;
  final double fontSize;
  final FontWeight fontWeight;
  final Color textColor;
  final double? width;
  final double? letterSpacing;
  final bool centerText;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width,
      child: Text(
        text,
        textAlign: centerText ? TextAlign.center : TextAlign.left,
        style: GoogleFonts.comfortaa(
            letterSpacing: letterSpacing,
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: textColor,
            decoration: TextDecoration.none),
      ),
    );
  }
}
