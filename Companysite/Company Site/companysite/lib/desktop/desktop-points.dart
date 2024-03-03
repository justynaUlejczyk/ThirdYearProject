import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class desktop_5points extends StatelessWidget {
  const desktop_5points({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(color: Color(0xFF4B426D)),
      height: 800,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Animate(
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  children: [
                    MyCustomText(text: 'Innovative Solutions', fontSize: 24),
                    SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: 400,
                        text:
                            "We don't just build websites and applications; we engineer digital experiences. Our team is dedicated to staying at the forefront of technological advancements to bring you innovative solutions that give your business a competitive edge.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    MyCustomText(text: 'Client-Centric Approach', fontSize: 24),
                    SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: 400,
                        text:
                            "Your success is our priority. We believe in fostering strong and collaborative relationships with our clients. Through open communication and a thorough understanding of your goals, we ensure that our solutions align perfectly with your vision.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    MyCustomText(text: 'Tailored Development', fontSize: 24),
                    SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: 400,
                        text:
                            "One size does not fit all. We recognize the uniqueness of each project and approach it with a customized strategy. Our solutions are meticulously crafted to address your specific requirements, ensuring a perfect fit for your business.",
                        fontSize: 16),
                  ],
                ),
              ],
            ),
          )
              .slideY(
                  begin: -0.5,
                  duration: const Duration(milliseconds: 500),
                  delay: const Duration(milliseconds: 450))
              .fadeIn(duration: const Duration(milliseconds: 750)),
          Animate(
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  children: [
                    MyCustomText(text: 'Passionate Team', fontSize: 24),
                    SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: 400,
                        text:
                            "Our team is driven by a shared passion for technology and creativity. We love what we do, and it shows in the quality of our work. From developers to designers, our experts bring a wealth of experience and enthusiasm to every project.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    MyCustomText(text: 'Reliability', fontSize: 24),
                    SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: 400,
                        text:
                            "At BitByBit Solutions, we understand the importance of delivering projects on time and within budget. You can count on us for reliable and timely delivery, without compromising on quality.",
                        fontSize: 16),
                  ],
                ),
              ],
            ),
          )
              .slideY(
                  begin: 0.5,
                  duration: const Duration(milliseconds: 500),
                  delay: const Duration(milliseconds: 500))
              .fadeIn(duration: const Duration(milliseconds: 750))
        ],
      ),
    );
  }
}
