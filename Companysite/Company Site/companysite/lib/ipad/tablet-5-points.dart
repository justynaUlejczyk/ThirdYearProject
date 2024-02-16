import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class tablet_5points extends StatelessWidget {
  const tablet_5points({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    double cardWidth = MediaQuery.of(context).size.width < 1000 ? 500 : 400;

    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth < 1000) {
          return Container(
            width: double.infinity,
            decoration: const BoxDecoration(color: Color(0xFF4B426D)),
            height: 1400,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Column(
                  children: [
                    const MyCustomText(
                        text: 'Innovative Solutions', fontSize: 24),
                    const SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: cardWidth,
                        text:
                            "We don't just build websites and applications; we engineer digital experiences. Our team is dedicated to staying at the forefront of technological advancements to bring you innovative solutions that give your business a competitive edge.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    const MyCustomText(
                        text: 'Client-Centric Approach', fontSize: 24),
                    const SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: cardWidth,
                        text:
                            "Your success is our priority. We believe in fostering strong and collaborative relationships with our clients. Through open communication and a thorough understanding of your goals, we ensure that our solutions align perfectly with your vision.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    const MyCustomText(
                        text: 'Tailored Development', fontSize: 24),
                    const SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: cardWidth,
                        text:
                            "One size does not fit all. We recognize the uniqueness of each project and approach it with a customized strategy. Our solutions are meticulously crafted to address your specific requirements, ensuring a perfect fit for your business.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    const MyCustomText(text: 'Passionate Team', fontSize: 24),
                    const SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: cardWidth,
                        text:
                            "Our team is driven by a shared passion for technology and creativity. We love what we do, and it shows in the quality of our work. From developers to designers, our experts bring a wealth of experience and enthusiasm to every project.",
                        fontSize: 16),
                  ],
                ),
                Column(
                  children: [
                    const MyCustomText(text: 'Reliability', fontSize: 24),
                    const SizedBox(
                      height: 20,
                    ),
                    MyCustomText(
                        fontWeight: FontWeight.w400,
                        width: cardWidth,
                        text:
                            "At BitByBit Solutions, we understand the importance of delivering projects on time and within budget. You can count on us for reliable and timely delivery, without compromising on quality.",
                        fontSize: 16),
                  ],
                ),
              ],
            ),
          );
        } else {
          // Tablet < 1200
          return Container(
            width: double.infinity,
            decoration: const BoxDecoration(color: Color(0xFF4B426D)),
            height: 800,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Animate(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Column(
                        children: [
                          const MyCustomText(
                              text: 'Innovative Solutions', fontSize: 24),
                          const SizedBox(
                            height: 20,
                          ),
                          MyCustomText(
                              fontWeight: FontWeight.w400,
                              width: cardWidth,
                              text:
                                  "We don't just build websites and applications; we engineer digital experiences. Our team is dedicated to staying at the forefront of technological advancements to bring you innovative solutions that give your business a competitive edge.",
                              fontSize: 16),
                        ],
                      ),
                      Column(
                        children: [
                          const MyCustomText(
                              text: 'Client-Centric Approach', fontSize: 24),
                          const SizedBox(
                            height: 20,
                          ),
                          MyCustomText(
                              fontWeight: FontWeight.w400,
                              width: cardWidth,
                              text:
                                  "Your success is our priority. We believe in fostering strong and collaborative relationships with our clients. Through open communication and a thorough understanding of your goals, we ensure that our solutions align perfectly with your vision.",
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
                  child: Column(
                    children: [
                      const MyCustomText(
                          text: 'Tailored Development', fontSize: 24),
                      const SizedBox(
                        height: 20,
                      ),
                      MyCustomText(
                          fontWeight: FontWeight.w400,
                          width: cardWidth,
                          text:
                              "One size does not fit all. We recognize the uniqueness of each project and approach it with a customized strategy. Our solutions are meticulously crafted to address your specific requirements, ensuring a perfect fit for your business.",
                          fontSize: 16),
                    ],
                  ),
                )
                    .slideY(
                        begin: -0.5,
                        duration: const Duration(milliseconds: 500),
                        delay: const Duration(milliseconds: 450))
                    .fadeIn(duration: const Duration(milliseconds: 750)),
                Animate(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Column(
                        children: [
                          const MyCustomText(
                              text: 'Passionate Team', fontSize: 24),
                          const SizedBox(
                            height: 20,
                          ),
                          MyCustomText(
                              fontWeight: FontWeight.w400,
                              width: cardWidth,
                              text:
                                  "Our team is driven by a shared passion for technology and creativity. We love what we do, and it shows in the quality of our work. From developers to designers, our experts bring a wealth of experience and enthusiasm to every project.",
                              fontSize: 16),
                        ],
                      ),
                      Column(
                        children: [
                          const MyCustomText(text: 'Reliability', fontSize: 24),
                          const SizedBox(
                            height: 20,
                          ),
                          MyCustomText(
                              fontWeight: FontWeight.w400,
                              width: cardWidth,
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
      },
    );
  }
}
